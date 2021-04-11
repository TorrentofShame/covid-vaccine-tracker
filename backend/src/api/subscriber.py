from flask import Blueprint, request
from src.models.subscriber import Subscriber
from mongoengine.errors import NotUniqueError
from werkzeug.exceptions import BadRequest, Conflict, NotFound
from src.models.maps import Maps


subscriber_blueprint = Blueprint("subscriber", __name__)
@subscriber_blueprint.route("/subscriber/get_route/", methods=["GET"])
def get_subscriber():
    cellphone = request.data.get("cellphone")
    subscriber = Subscriber.objects.get(cellphone=cellphone).first()
    if not subscriber:
        raise NotFound()
    res = {
        "cellphone": subscriber.cellphone,
        "email": subscriber.email,
        "vaccine_site": subscriber.vaccine_site
    }
    return res, 201
@subscriber_blueprint.route("/subscriber/create_data/", methods=["POST"])
def create_subscriber():
    data = request.get_json()
    if not data:
        raise BadRequest()
    if(data.get("vaccine_site")):
        data["vaccine_site"] = list(map(lambda lameName: Maps.objects(name=lameName).first(), data["vaccine_site"]))
    try:
        sub = Subscriber.createOne(**data)
    except NotUniqueError:
        raise Conflict("Unfortunately, there exist data for this subscriber!")
    res = {
        "status": "success",
        "message": "Successfully added a subscriber to the database"
    }
    return res, 201
