from flask import Flask
from flask import request, jsonify, render_template
from emo_recognition import open_camera
from database import MLab
app = Flask(__name__)
import sys


db = MLab()
print(db)
#
@app.route('/', methods=['POST', 'GET'])
def homepage():
    docs = []
    form = request.form
    print(sys.getsizeof(form))
    print()
    print("Magic:", request.form['time'])
    for doc in db.video.find():
        doc.pop('_id')
        docs.append(doc)
    return jsonify(docs)


@app.route('/go/', methods=['POST','GET'])
def add():
    data = request.form_data_parser_class()
    print(data)
    emo_entry = open_camera("2JAElThbKrI")
    db.video.insert_one(emo_entry)
    return render_template('home.html')


# @app.route('/find', methods=['POST', 'GET'])
# def find_video(link=None):
#     if link is None:
#         return jsonify([doc for doc in db.video.find()])
#     else:
#         query = {'link': link}
#         videos = db.video.find_one(query)
#         if videos is not None:
#             return jsonify(videos)
#         else:
#             return jsonify(db.video.find())
#
#
# @app.route('/delete/', methods=['POST', 'GET'])
# def delete_data(video=None):
#     db.db.drop_collection('videos')
#     videos = db.db.video.find()
#     # client.close()
#     return jsonify(videos)


if __name__ == '__main__':
    app.run()
