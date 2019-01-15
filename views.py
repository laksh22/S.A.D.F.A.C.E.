from flask import request, render_template, jsonify
from flask_pymongo import PyMongo
from app import app, mongo
from emo_recognition import emo_list


@app.route('/video')
def find_video(video=None):
    if video is None:
        # all the entries
        videos = mongo.db.videos.find()
        # count of entries
        videos.count()
    else:
        # find a specific entry
        videos = mongo.db.videos.find_one({'link':video})
        if videos is not None:
            return render_template('dashboard.html', videos=[videos])
        else:
            return 'No video found!'


@app.route('/', methods=['POST', 'GET'])
def homepage():
    if request.method == "POST":
        frame = ''
        # {'link': [{'happiness': 0.9, 'surprise': 0.08, 'anger': '0.02'}]}
        emo_entry = emo_list(frame)
        mongo.db.videos.insert_one(emo_entry)
        # plot
        return render_template('dashboard.html', emo_entry=emo_entry)
    else:
        history = videos = mongo.db.videos.find()
        return render_template('dashboard.html', emo_history = history)




