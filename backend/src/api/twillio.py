from flask import Blueprint, request
from src.models.subscriber import Subscriber
from mongoengine.errors import NotUniqueError
from werkzeug.exceptions import BadRequest, Conflict, NotFound
from twilio.rest import Client
subscriber_blueprint = Blueprint("twillio", __name__)
@subscriber_blueprint.route("/twillio/send_message/", methods=["GET"])
def get_subscriber():
    # Your Account SID from twilio.com/console
    account_sid = "ACd6b7da737e34c93de6ce6d1347425e52"
    # Your Auth Token from twilio.com/console
    auth_token = "02948ba94bb4030e6e855465345d19c5"
    client = Client(account_sid, auth_token)
    # Gets the cell phone from getting posted
    cell_number = request.data.get("phone_number")
    # Filters for the user using the cellphone data and grabs the first person
    subscriber = Subscriber.objects.get(cell_number=cell_number).first()
    if not subscriber:
        raise NotFound()
    # Checks to see if the site that is found has vaccines available
    if(subscriber.vaccine_site[-1].available is True):
        message = client.messages.create(
            to="+1" + cell_number, 
            from_="+13174015072",
            body="Vaccine appointments are available at " + subscriber.vaccine_site[-1].name + " on " + 
            subscriber.vaccine_site[-1].address)
