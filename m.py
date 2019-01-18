from pymongo import MongoClient
SEED_DATA = [
    {
        'decade': '1970s',
        'artist': 'Debby Boone',
        'song': 'You Light Up My Life',
        'weeksAtOne': 10
    },
    {
        'decade': '1980s',
        'artist': 'Olivia Newton-John',
        'song': 'Physical',
        'weeksAtOne': 10
    },
    {
        'decade': '1990s',
        'artist': 'Mariah Carey',
        'song': 'One Sweet Day',
        'weeksAtOne': 16
    }
]

connection_params = {
    'user': 'nushack',
    'password': 'nushack1',
    'host': 'ds161134.mlab.com',
    'port': 61134,
    'namespace': 'nushack',
}

uri = 'mongodb://nushack:nushack1@ds161134.mlab.com:61134/nushack'

connection = MongoClient(uri
)


db = connection.get_database()

print(db.collection_names())
songs = db['songs']

songs.insert_many(SEED_DATA)
print(db.collection_names())

