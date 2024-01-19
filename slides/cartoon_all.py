import cv2
import numpy as np
import matplotlib.pyplot as plt
import os

folder_in = "pictures/"
folder_out = "cartoons/"
for file_name in os.listdir(folder_in):
    if file_name[0] == ".":
        continue
    f_in  = f"{folder_in}/{file_name}"
    f_out  = f"{folder_out}/{file_name}"
    print(f_in, f_out)

    img = cv2.imread(f_in)
    img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    img_hvs = cv2.cvtColor(img,cv2.COLOR_RGB2HSV)
    n = 8
    k = 256//n
    img_hvs[:,:,0] = k*(img_hvs[:,:,0]//k) + k//2
    n = 4
    k = 256//n
    img_hvs[:,:,1] = k*(img_hvs[:,:,1]//k) + k//2
    n = 4
    k = 256//n
    img_hvs[:,:,2] = k*(img_hvs[:,:,2]//k) + k//2
    img_bis = cv2.cvtColor(img_hvs,cv2.COLOR_HSV2RGB)
    gray = cv2.cvtColor(img,cv2.COLOR_RGB2GRAY)
    edges = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 21,21)
    cartoon = cv2.bitwise_and(img_bis, img_bis, mask=edges)
    cartoon_bgr = cv2.cvtColor(cartoon,cv2.COLOR_RGB2BGR)
    cv2.imwrite(f_out, cartoon_bgr)