from src import db
from src.models import BaseDocument


class Subscriber(BaseDocument):
    cell_number = db.StringField()
    email = db.EmailField()
