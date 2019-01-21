import requests
import json
import re


def find_vid(link):
    match = re.search(r"youtube\.com/.*v=([^&]*)", link)
    if match:
        result = match.group(1)
        return result
    else:
        return None


def find_title(vid):
    payload = {'id': vid, 'part': 'contentDetails,statistics,snippet',
               'key': "AIzaSyDwe_CX0WJV2aZH_k8xMcT4nSJxn9BD0n0"}
    data = requests.Session().get('https://www.googleapis.com/youtube/v3/videos', params=payload)
    resp_dict = json.loads(data.content)
    return resp_dict['items'][0]['snippet']['title']

