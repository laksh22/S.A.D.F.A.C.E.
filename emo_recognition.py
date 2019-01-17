# Emotion recognition on video frames.

from process import find_title, find_vid


def emo_list(link):
    vid = find_vid(link)
    title = find_title(vid)
    return {'link': "https://www.youtube.com/watch?v=YsBVu6f8pR8",
            'title': title,
            'time': "2:22",
            'happiness': 0.5,
            'sadness': 0.4,
            'anger': 0.1,
            }

