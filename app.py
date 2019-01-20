from flask import Flask
from flask import request, jsonify, render_template
from emo_recognition import open_camera
from database import MLab
app = Flask(__name__)


db = MLab()


@app.route('/go/', methods=['GET', 'POST'])
def homepage():
    docs = []
    form = request.form.get('link', "")
    print(form)
    # for doc in db.video.find():
    #     doc.pop('_id')
    #     docs.append(doc)
    #
    emo_entry = open_camera("https://www.youtube.com/watch?v=z6hQqgvGI4Y")
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
