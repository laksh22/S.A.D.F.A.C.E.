from pymongo import MongoClient


class mlab:
    def __init__(self):
        self.SEED_DATA = []
        self.uri = 'mongodb://nushack:nushack1@ds161134.mlab.com:61134/nushack'
        self.connection = MongoClient(self.uri)
        self.db = self.connection.get_database()
        self.videos = self.db['videos']
        self.videos.insert_many(self.SEED_DATA)