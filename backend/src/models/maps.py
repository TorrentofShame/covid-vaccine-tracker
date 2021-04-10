from src import db
import src.models import BaseDocument

class Maps(BaseDocument):
    distance = db.StringField()
    point = db.GeoPointField()
