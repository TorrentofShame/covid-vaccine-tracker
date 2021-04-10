from src import db
from src.models import BaseDocument

class Maps(BaseDocument):
    radius = db.FloatField()
    point = db.PointField()
    name = db.StringField()
    address = db.StringField()
    available = db.BooleanField()
