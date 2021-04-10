from src import db
from src.models import BaseDocument
from src.models.maps import Maps

class Subscriber(BaseDocument):
    cell_number = db.StringField()
    email = db.EmailField()
    vaccine_site = db.ReferenceField(Maps)
