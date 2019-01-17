from flask import Flask
from flask_pymongo import PyMongo
from flask import request, render_template, jsonify
from flask_pymongo import PyMongo
from emo_recognition import emo_list

app = Flask(__name__)
# MongoDB configuration
app.config["MONGO_URI"] = 'mongodb://localhost:27017/flask'
mongo = PyMongo(app)


@app.route('/', methods=['POST', 'GET'])
def homepage():
    videos = mongo.db.videos.find()
    if request.method == 'POST':
        query = request.form['query']
        if query is None:
            videos.count()
            return render_template('home.html', videos=videos)
        else:
            videos = mongo.db.videos.find_one({'link': query})
            if videos is not None:
                return render_template('dashboard/public/index.html')
            else:
                return render_template('home.html', videos=videos)
    else:
        return render_template('home.html', videos=videos)


@app.route('/add', methods=['POST', 'GET'])
def add():
    frame = ''
    emo_entry = emo_list(frame)
    video = mongo.db.videos.find_one({'link': emo_entry['link']})
    if video is None:
        mongo.db.videos.insert_one(emo_entry)
        videos = mongo.db.videos.find()
        return render_template('home.html', videos=videos)
    else:
        #check video time, or add emotions.
        videos = mongo.db.videos.find()
        return render_template('home.html', videos=videos)


@app.route('/find', methods=['POST', 'GET'])
def find_video(link=None):
    videos = mongo.db.videos.find()
    if link is None:
        videos.count()
        return render_template('home.html', videos=videos)
    else:
        videos = mongo.db.videos.find_one({'link': link})
        if videos is not None:
            return render_template('dashboard/public/index.html', videos=videos)
        else:
            return render_template('home.html', videos=videos)


@app.route('/delete/', methods=['POST', 'GET'])
def delete_data(video=None):
    mongo.db.videos.drop()
    videos = mongo.db.videos.find()
    return render_template('home.html', videos=videos)


if __name__ == '__main__':
    app.run(debug=True)
