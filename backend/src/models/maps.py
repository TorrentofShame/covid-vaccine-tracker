from src import db
import src.models import BaseDocument

class Maps(BaseDocument):
    distance = db.FloatField()
    point = db.PointField()
    name = db.StringField()
    address = db.StringField()
    available = db.BooleanField()
