from flask import Blueprint
import googlemaps

maps_blueprint = Blueprint("maps", __name__)
@maps_blueprint.route("/maps/get_data/", methods=["GET"])
def get_map_data():
    print("hello")
    gmaps = googlemaps.Client(key="AIzaSyAQNW22urGc8Z06R6aY3zXVwdDPmTbogsE")
    reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))
    print(reverse_geocode_result)
    return "yu-gi-oh"