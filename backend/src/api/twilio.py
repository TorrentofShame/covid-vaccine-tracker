from flask import Blueprint, request
from src.models.subscriber import Subscriber
from mongoengine.errors import NotUniqueError
from werkzeug.exceptions import BadRequest, Conflict, NotFound
from twilio.rest import Client

twilio_blueprint = Blueprint("twilio", __name__)
@twilio_blueprint.route("/twilio/send_message/", methods=["GET"])
def get_subscriber():
    # Your Account SID from twilio.com/console
    account_sid = "ACd6b7da737e34c93de6ce6d1347425e52"
    # Your Auth Token from twilio.com/console
    auth_token = "88083e84659bc69eb6a8dba057b70613"
    client = Client(account_sid, auth_token)
    # Gets the cell phone from getting posted
    cellphone = request.args.get("cellphone")
    print("========================================================="+cellphone)
    try:
        message = client.messages.create(
            to="+1" + cellphone, 
            from_="+13174015072",
            body="Vaccine appointments are available, check website for more details.")
        return "success", 201
    except:
        return "failed to send"