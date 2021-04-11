from src import db
from src.models import BaseDocument
from src.models.maps import Maps

class Subscriber(BaseDocument):
    cellphone = db.StringField()
    email = db.EmailField()
    vaccine_site = db.ListField(db.ReferenceField(Maps))

    def to_mongo(self, *args, **kwargs):
        data = super().to_mongo(*args, **kwargs)

        data["vaccine_site"] = [s.name for s in self.vaccine_site]

        return data
