from os import path, getenv, environ
from flask import Flask
from werkzeug.exceptions import HTTPException
from flask_cors import CORS
from flask_mongoengine import MongoEngine
from src.tasks import make_celery
db = MongoEngine()


def create_app():
    """Initialize the App"""
    app = Flask(__name__, static_url_path="/static")

    # Flask Config
    app_settings = getenv("APP_SETTINGS", "src.config.ProductionConfig")
    app.config.from_object(app_settings)

    """Set FLASK_ENV and FLASK_DEBUG cause that doesn't happen auto anymore"""
    if app.config.get("DEBUG"):
        environ["FLASK_ENV"] = "development"  # pragma: nocover
        environ["FLASK_DEBUG"] = "1"  # pragma: nocover

    """Setup Extensions"""
    CORS(app)
    db.init_app(app)

    from src.api.maps import maps_blueprint
    from src.api.subscriber import subscriber_blueprint
    from src.api.twilio import twilio_blueprint
    app.register_blueprint(maps_blueprint, url_prefix="/api")
    app.register_blueprint(subscriber_blueprint, url_prefix="/api")
    app.register_blueprint(twilio_blueprint, url_prefix="/api")

    """Register Error Handlers"""
    from src.common import error_handler

    app.register_error_handler(HTTPException, error_handler.handle_exception)

    """Initialize Celery"""
    celery = make_celery(app)

    return app, celery

app, celery = create_app()