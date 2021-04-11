from flask import Blueprint, request
from src.models.maps import Maps
from mongoengine.errors import NotUniqueError, ValidationError
from werkzeug.exceptions import BadRequest, Conflict, NotFound

maps_blueprint = Blueprint("maps", __name__)
@maps_blueprint.route("/maps/get_data/", methods=["GET"])
def get_map_data():

    # writing some code
    lat = request.args.get("lat")
    long = request.args.get("long")
    radius = request.args.get("radius")
    pipeline = [{"$geoNear": {
        "near": {"type": "Point", "coordinates": [lat, long]},
        "spherical": True, "distanceField": "dist", "maxDistance": radius
    }}]
    map = Maps.objects.aggregate(*pipeline)

    # if not map:
    #     raise NotFound()

    # res = {
    #     "radius": map.radius,
    #     "point": map.point,
    #     "name": map.name,
    #     "address": map.address,
    #     "available": map.available
    # }

    return (list(map)), 201

@maps_blueprint.route("/maps/create_data/", methods=["POST"])
def create_map_data():
    data = request.get_json()
    if not data:
        raise BadRequest()
    try:
        location = Maps.createOne(**data)
    except NotUniqueError:
        raise Conflict("Sorry this location already exists")
    res = {
        "status": "Success",
        "message": "Location has been successfully created!" 
    }
    return res, 201
