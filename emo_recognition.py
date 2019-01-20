# Emotion recognition on video frames.

from process import find_title, find_vid

from keras.preprocessing.image import img_to_array
import imutils
import cv2
from keras.models import load_model
import numpy as np
import time
import math
import numpy as np


def get_type_convert(obj):
    if isinstance(obj, np.generic):
        return np.asscalar(obj)


# parameters for loading data and images
detection_model_path = 'haarcascade_files/haarcascade_frontalface_default.xml'
emotion_model_path = 'models/_mini_XCEPTION.102-0.66.hdf5'
# loading models
face_detection = cv2.CascadeClassifier(detection_model_path)
emotion_classifier = load_model(emotion_model_path, compile=False)
EMOTIONS = ["angry", "disgust", "scared", "happy", "sad", "surprised",
            "neutral"]


def open_camera(link):
    link_dict = {'dominant emotion':[],
                 'happiness':[],
                 'surprise':[],
                 'anger':[],
                 'sadness':[],
                 'disgust':[],
                 'scared':[],
                 'neutral':[]
                 }
    link_dict['link'] = link
    link_dict['vid'] = find_vid(link)
    link_dict['title'] = find_title(find_vid(link))
    cap = cv2.VideoCapture(0)
    frame_rate = cap.get(5)  # frame rate
    emo_lists = []
    i=0
    while cap.isOpened():
        frameId = cap.get(1)  # current frame number
        ret, frame = cap.read()
        cv2.imshow('frame', frame)
        if not ret:
            break
        if frameId % math.floor(frame_rate) == 0:
            emo_list = emo_dict(frame)
            if not emo_list:
                pass
            else:
                link_dict['dominant emotion'].append(emo_list[0])
                link_dict['happiness'].append(get_type_convert(emo_list[1]))
                link_dict['surprise'].append(get_type_convert(emo_list[2]))
                link_dict['anger'].append(get_type_convert(emo_list[3]))
                link_dict['sadness'].append(get_type_convert(emo_list[4]))
                link_dict['disgust'].append(get_type_convert(emo_list[6]))
                link_dict['scared'].append(get_type_convert(emo_list[5]))
                link_dict['neutral'].append(get_type_convert(emo_list[7]))
                i = i+1
        if cv2.waitKey(1) & 0xFF == ord('q'):
            cap.release()
            cv2.destroyAllWindows()
    print(link_dict)
    return link_dict


def emo_dict(frame):
    emotionDict={}
    emotion_list = ['1', '2', '3', '4', '5', '6', '7', '8']
    frame = imutils.resize(frame, width=300)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_detection.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30), flags=cv2.CASCADE_SCALE_IMAGE)
    frame = imutils.resize(frame, width=300)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_detection.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30), flags=cv2.CASCADE_SCALE_IMAGE)
    
    if len(faces) > 0:
        faces = sorted(faces, reverse=True,
        key = lambda x: (x[2] - x[0]) * (x[3] - x[1]))[0]
        (fX, fY, fW, fH) = faces
        # Extract the ROI of the face from the grayscale image, resize it to a fixed 28x28 pixels, and then prepare
        # the ROI for classification via the CNN
        roi = gray[fY:fY + fH, fX:fX + fW]
        roi = cv2.resize(roi, (64, 64))
        roi = roi.astype("float") / 255.0
        roi = img_to_array(roi)
        roi = np.expand_dims(roi, axis=0)

        preds = emotion_classifier.predict(roi)[0]

        for (i, (emotion, prob)) in enumerate(zip(EMOTIONS, preds)):
            emotionDict[emotion] = prob
        dominant_emotion = sorted(list(emotionDict.items()), key=lambda x: x[1], reverse=True)[0]
        emotionDict['dominant'] = dominant_emotion[0]

        emotion_list[0] = emotionDict['dominant']
        emotion_list[1] = emotionDict['happy']
        emotion_list[2] = emotionDict['surprised']
        emotion_list[3] = emotionDict['angry']
        emotion_list[4] = emotionDict['sad']
        emotion_list[5] = emotionDict['scared']
        emotion_list[6] = emotionDict['disgust']
        emotion_list[7] = emotionDict['neutral']
    else:
        emotion_list = []
    return emotion_list
    # append other metadata you want to be returned if you want


# # for example;
# camera = cv2.VideoCapture(0)
# while True:
#     frame = camera.read()[1]
#     print(emo_list(frame))

