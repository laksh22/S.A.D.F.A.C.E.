# import sys
# import argparse

# import cv2
# print(cv2.__version__)

# def extractImages(pathIn, pathOut):
#     count = 0
#     vidcap = cv2.VideoCapture(pathIn)
#     success,image = vidcap.read()
#     success = True
#     while success:
#       vidcap.set(cv2.CAP_PROP_POS_MSEC,(count*1000))    # added this line 
#       success,image = vidcap.read()
#       print ('Read a new frame: ', success)
#       cv2.imwrite( pathOut + "\\frame%d.jpg" % count, image)     # save frame as JPEG file
#       count = count + 1

# if __name__=="__main__":
#     print("aba")
#     a = argparse.ArgumentParser()
#     a.add_argument("--pathIn", help="path to video")
#     a.add_argument("--pathOut", help="path to images")
#     args = a.parse_args()
#     print(args)
#     extractImages(args.pathIn, args.pathOut)

# import cv2
# print(cv2.__version__)
# vidcap = cv2.VideoCapture('test.mp4')
# success,image = vidcap.read()
# count = 0
# success = True
# while success:
#   vidcap.set(cv2.CAP_PROP_POS_FRAMES,(count*1000))
#   cv2.imwrite("./frames"+"frame%d.jpg" % count, image)     # save frame as JPEG file
#   success,image = vidcap.read()
#   print ('Read a new frame: '), success
#   count += 1

# import cv2
# import math

# videoFile = "test.mp4"
# imagesFolder = "./frames"
# cap = cv2.VideoCapture(videoFile)
# frameRate = cap.get(5) #frame rate
# while(cap.isOpened()):
#     frameId = cap.get(1) #current frame number
#     ret, frame = cap.read()
#     if (ret != True):
#         break
#     if (frameId % math.floor(frameRate) == 0):
#         filename = imagesFolder + "/image_" +  str(int(frameId)) + ".jpg"
#         cv2.imwrite(filename, frame)
# cap.release()
# print ("Done!")


# import cv2
# import os
 
# def extractFrames(pathIn, pathOut):
#     os.mkdir(pathOut)
 
#     cap = cv2.VideoCapture(pathIn)
#     count = 0
 
#     while (cap.isOpened()):
 
#         # Capture frame-by-frame
#         ret, frame = cap.read()
 
#         if ret == True:
#             print('Read %d frame: ' % count, ret)
#             cv2.imwrite(os.path.join(pathOut, "frame{:d}.jpg".format(count)), frame)  # save frame as JPEG file
#             count += 1
#         else:
#             break
 
#     # When everything done, release the capture
#     cap.release()
#     cv2.destroyAllWindows()
 
# def main():
#     extractFrames('test.mp4', './frames')
 
# if __name__=="__main__":
#     main()

import cv2
import numpy as np
import os

# Playing video from file:
cap = cv2.VideoCapture('test.mp4')

try:
    if not os.path.exists('./frames'):
        os.makedirs('./frames')
except OSError:
    print ('Error: Creating directory of frames')

currentFrame = 0
while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Saves image of the current frame in jpg file
    name = './frames/frame' + str(currentFrame) + '.jpg'
    print ('Creating...' + name)
    cv2.imwrite(name, frame)

    # To stop duplicate images
    currentFrame += 1

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()