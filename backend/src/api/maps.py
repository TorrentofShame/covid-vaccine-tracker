from flask import Blueprint, request
import googlemaps
from src.models.maps import Maps
from mongoengine.errors import NotUniqueError, ValidationError
from werkzeug.exceptions import BadRequest, Conflict, NotFound

maps_blueprint = Blueprint("maps", __name__)
@maps_blueprint.route("/maps/get_data/", methods=["GET"])
def get_map_data():
    gmaps = googlemaps.Client(key="AIzaSyAQNW22urGc8Z06R6aY3zXVwdDPmTbogsE")
    reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))
    return "yu-gi-oh"

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