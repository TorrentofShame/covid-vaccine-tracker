import os
from flask.cli import FlaskGroup
from src import app

os.environ["FLASK_APP"] = "src.__main__:main()"

cli = FlaskGroup(app)


def main():
    return app
    
    
if __name__ == "__main__":
    cli()