from src import db
from src.models import BaseDocument
from src.models.maps import Maps

class Subscriber(BaseDocument):
    cellphone = db.StringField()
    email = db.EmailField()
    vaccine_site = db.ReferenceField(Maps)
