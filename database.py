from pymongo import MongoClient


class MLab:
    def __init__(self):
        self.uri = 'mongodb://nushack:nushack1@ds161134.mlab.com:61134/nushack'
        self.connection = MongoClient(self.uri)
        self.db = self.connection.get_database()
        self.video = self.db['video']
        # self.video.insert_one({
        #     'link':'https://www.youtube.com/watch?v=2JAElThbKrI',
        #     'title': 'one punch man',
        #     'dominant emotion': ['happiness', 'happiness', 'happiness', 'happiness', 'happiness',
        #                          'happiness', 'happiness', 'happiness','happiness','happiness'],
        #     'end time': 10,
        #     'happiness': [0.5, 0.4, 0.5, 0.6, 0.45, 0.5, 0.55, 0.6, 0.5, 0.5],
        #     'surprise': [0.3, 0.4, 0.3, 0.2, 0.35, 0.3, 0.25, 0.2, 0.3, 0.3],
        #     'anger': [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        #     'sadness': [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.1, 0.1, 0.1, 0.1],
        #     'disgust': [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
        #     'scared': [0.01, 0.01, 0.01, 0.015, 0.015, 0.015, 0.01, 0.01, 0.01, 0.01],
        #     'neutral': [0.02, 0.02, 0.02, 0.015, 0.015, 0.015,0.02, 0.02, 0.02, 0.02],
        # })
        self.video.insert_one({
            'link':'2JAElThbKrI',
            'title': 'one punch man',
            'dominant emotion': ['happiness', 'happiness', 'happiness', 'happiness', 'happiness',
                                 'happiness', 'happiness', 'happiness','happiness','happiness'],
            'end time': 10,
            'happiness': [0.1, 0.2, 0.3, 0.4, 0.5, 0.3, 0.2, 0.1, 0.2, 0.11],
            'surprise': [0.3, 0.4, 0.3, 0.2, 0.35, 0.3, 0.25, 0.2, 0.3, 0.3],
            'anger': [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
            'sadness': [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.1, 0.1, 0.1, 0.1],
            'disgust': [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
            'scared': [0.01, 0.01, 0.01, 0.015, 0.015, 0.015, 0.01, 0.01, 0.01, 0.01],
            'neutral': [0.02, 0.02, 0.02, 0.015, 0.015, 0.015,0.02, 0.02, 0.02, 0.02],
        })
