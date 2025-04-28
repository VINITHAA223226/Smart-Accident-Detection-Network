import asyncio
import numpy as np
from ultralytics import YOLO
import cv2
import cvzone
import math
import time
from modules.sort import *
from services.apis import post_accident_data, send_mail_async_final
import base64

# Importing the model
model = YOLO('models/i1-yolov8s.pt')

# Importing the video
cap = cv2.VideoCapture("./assets/car-crash.mov")

async def main():
    emailDebounceTime = 5  # Time in seconds to wait before sending another email
    isSendMail = False

    # Implementing Tracker Code...
    tracker = Sort(max_age=20, min_hits=3, iou_threshold=0.3)
    totalAccidents = []
    tempConf = 0
    lastEmailSentTime = 0

    # Hardcoded location details (Bannari Amman Institute of Technology)
    latitude = "11.4970° N"
    longitude = "77.2771° E"
    address = "Bannari Amman Institute of Technology, Sathy - Bhavani State Highway, Alathukombai, Post, Sathyamangalam, Tamil Nadu 638401"

    while True:
        success, img = cap.read()
        if not success:
            break

        results = model(img, stream=True)
        detections = np.empty((0, 5))

        for r in results:
            boxes = r.boxes
            for box in boxes:
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                w, h = x2 - x1, y2 - y1

                conf = round(float(box.conf[0]) * 100, 2)
                tempConf = conf

                if conf > 40:
                    cvzone.cornerRect(img, (x1, y1, w, h))
                    cvzone.putTextRect(img, f'Accident {conf}%', (max(0, x1), max(35, y1)), colorR=(0, 165, 255))
                    currentArray = np.array([x1, y1, x2, y2, conf])
                    detections = np.vstack((detections, currentArray))

        trackerResults = tracker.update(detections)

        for result in trackerResults:
            x1, y1, x2, y2, obj_id = map(int, result)
            w, h = x2 - x1, y2 - y1

            if obj_id not in totalAccidents:
                # Convert frame to base64
                _, frame_encoded = cv2.imencode('.jpg', img)
                frame_base64 = base64.b64encode(frame_encoded).decode('utf-8')

                # Prepare accident data
                data = {
                    "address": address,
                    "city": "Sathyamangalam",
                    "latitude": latitude,
                    "longitude": longitude,
                    "severityInPercentage": tempConf,
                    "severity": "Moderate",
                    "frame": frame_base64
                }

                # Send email & post data
                task1 = asyncio.create_task(send_mail_async_final(latitude, longitude, str(tempConf), address))
                task2 = asyncio.create_task(post_accident_data(data))

                cvzone.cornerRect(img, (x1, y1, w, h), colorR=(255, 0, 255))
                cvzone.putTextRect(img, f'{obj_id}', (max(0, x1), max(35, y1)))
                cx, cy = x1 + w // 2, y1 + h // 2
                cv2.circle(img, (cx, cy), 5, (255, 0, 255), cv2.FILLED)

                totalAccidents.append(obj_id)

        # Display video
        cv2.imshow("Video Capture", img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

        await asyncio.sleep(0.01)

    if task1 and task2:
        await task1
        await task2

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(main())
    finally:
        loop.close()
