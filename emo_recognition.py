# Emotion recognition on video frames.

from process import find_title, find_vid

from keras.preprocessing.image import img_to_array
import imutils
import cv2
from keras.models import load_model
import numpy as np

# parameters for loading data and images
detection_model_path = 'haarcascade_files/haarcascade_frontalface_default.xml'
emotion_model_path = 'models/_mini_XCEPTION.102-0.66.hdf5'
# loading models
face_detection = cv2.CascadeClassifier(detection_model_path)
emotion_classifier = load_model(emotion_model_path, compile=False)
EMOTIONS = ["angry", "disgust", "scared", "happy", "sad", "surprised",
            "neutral"]


def get_dominant_emotion():
    return 'happiness'


def emo_list(frame):
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

    return emotion_list # append other metadata you want to be returned if you want


# # for example;
# camera = cv2.VideoCapture(0)
# while True:
#     frame = camera.read()[1]
#     print(emo_list(frame))

