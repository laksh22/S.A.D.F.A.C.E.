from flask import Flask
from flask_pymongo import PyMongo
from flask import request, render_template, jsonify
from flask_pymongo import PyMongo
from emo_recognition import emo_list

app = Flask(__name__)
# MongoDB configuration
app.config["MONGO_URI"] = 'mongodb://localhost:27017/flask'
mongo = PyMongo(app)


@app.route('/', methods='POST')
def homepage():
    videos = mongo.db.videos.find()
    # plot
    return render_template('dashboard.html', videos=videos)

    # history = videos = mongo.db.videos.find()
    # return render_template('dashboard.html', emo_history=history)


@app.route('/add', methods='POST')
def add():
    frame = ''
    emo_entry = emo_list(frame)
    videos = mongo.db.videos.find()
    mongo.db.videos.insert_one(emo_entry)
    return render_template('dashboard.html', videos=videos)


@app.route('/find', methods='GET')
def find_video(link=None):
    if link is None:
        videos = mongo.db.videos.find()
        videos.count()
        return render_template('dashboard.html', videos=videos)
    else:
        videos = mongo.db.videos.find_one({'link': link})
        if videos is not None:
            return render_template('dashboard.html', videos=videos)
        else:
            return 'No video found!'


@app.route('/delete/', methods='POST')
def delete_data(video=None):
    mongo.db.videos.drop()
    videos = mongo.db.videos.find()
    return render_template('dashboard.html', videos=videos)


if __name__ == '__main__':
    app.run(debug=True)
