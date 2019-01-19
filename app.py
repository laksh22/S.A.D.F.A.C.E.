from flask import Flask
from flask import request, jsonify
from emo_recognition import open_camera
from database import MLab
app = Flask(__name__)

db = MLab()
print(db)
#
@app.route('/', methods=['POST', 'GET'])
def homepage():
    docs = []
    for doc in db.video.find():
        doc.pop('_id')
        docs.append(doc)
    return jsonify(docs)


@app.route('/add', methods=['POST', 'GET'])
def add():
    emo_entry = open_camera("https://www.youtube.com/watch?v=2JAElThbKrI")
    db.video.insert_one(emo_entry)


@app.route('/find', methods=['POST', 'GET'])
def find_video(link=None):
    if link is None:
        return jsonify([doc for doc in db.video.find()])
    else:
        query = {'link': link}
        videos = db.video.find_one(query)
        if videos is not None:
            return jsonify(videos)
        else:
            return jsonify(db.video.find())


@app.route('/delete/', methods=['POST', 'GET'])
def delete_data(video=None):
    db.db.drop_collection('videos')
    videos = db.db.video.find()
    # client.close()
    return jsonify(videos)


if __name__ == '__main__':
    app.run()
