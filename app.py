from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
# MongoDB configuration
# app.config["MONG3_URI"] = 'mongodb://localhost:27017/flask'
app.config['MONGO_HOST'] = 'localhost'
app.config['MONGO_PORT'] = 27017
app.config['MONGO_DBNAME'] = 'flask'
app.config['MONGO_USERNAME'] = 'nus_hack'
app.config['MONGO_PASSWORD'] = '1234'
mongo = PyMongo(app)
mongo_test = PyMongo(app, config_prefix='MONGO_TEST')

if __name__ == '__main__':
    app.run()
