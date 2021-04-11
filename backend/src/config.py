import os
import logging

class BaseConfig:
    DEBUG = False
    TESTING = False
    LOGGING_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    LOGGING_LOCATION = "flask-base.log"
    LOGGING_LEVEL = logging.DEBUG
    MONGODB_HOST = os.getenv("MONGO_URI", "mongodb://vaxtrack:ogZTyzrA8WJc3oXSm@db.vaxtracker.tech:27017/vaxtracker")
    CELERY_BROKER_URL = os.getenv("CELERY_BROKER_URL")
    CELERY_RESULT_BACKEND = os.getenv("CELERY_RESULT_BACKEND")
    
class DevelopmentConfig(BaseConfig):
    DEBUG = True
    BCRYPT_LOG_ROUNDS = 4
    
class ProductionConfig(BaseConfig):
    DEBUG = False