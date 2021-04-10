from flask import Blueprint, request
from src.models.subscriber import Subscriber
from mongoengine.errors import NotUniqueError
from werkzeug.exceptions import BadRequest, Conflict, NotFound

subscriber_blueprint = Blueprint("subscriber", __name__)
@subscriber_blueprint.route("/subscriber/get_route/", methods=["GET"])
def get_subscriber():
    cell_phone = request.data.get("cell_phone")
    subscriber = Subscriber.objects.get(cell_phone=cell_phone).first()
    if not subscriber:
        raise NotFound()
    res = {
        "cell_phone": subscriber.cell_phone,
        "email": subscriber.email,
        "vaccine_site": subscriber.vaccine_site
    }
    return res, 201
@subscriber_blueprint.route("/subscriber/create_data/", methods=["POST"])
def create_subscriber():
    data = request.get_json()
    if not data:
        raise BadRequest()
    try:
        sub = Subscriber.createOne(**data)
    except NotUniqueError:
        raise Conflict("Unfortunately, there exist data for this subscriber!")
    res = {
        "status": "success",
        "message": "Successfully added a subscriber to the database"
    }
    return res, 201
