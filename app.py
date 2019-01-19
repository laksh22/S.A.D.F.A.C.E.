from flask import Flask
from flask import request, jsonify
from emo_recognition import emo_list
from database import MLab
app = Flask(__name__)

db = MLab()


@app.route('/', methods=['POST', 'GET'])
def homepage():
    return jsonify(db.videos.find())


@app.route('/add', methods=['POST', 'GET'])
def add():
    link = ''
    emo_entry = emo_list(link)
    db.videos.insert_one(emo_entry)
    return jsonify(db.videos.find())


@app.route('/find', methods=['POST', 'GET'])
def find_video(link=None):
    if link is None:

        return jsonify(db.videos.find())
    else:
        query = {'link': link}
        videos = db.videos.find_one(query)
        if videos is not None:
            return jsonify(videos)
        else:
            return jsonify(db.videos.find())


@app.route('/delete/', methods=['POST', 'GET'])
def delete_data(video=None):
    db.db.drop_collection('videos')
    videos = db.db.videos.find()
    # client.close()
    return jsonify(videos)


if __name__ == '__main__':
    app.run(debug=True)
