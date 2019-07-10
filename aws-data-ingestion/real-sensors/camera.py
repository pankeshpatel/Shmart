from picamera import PiCamera
from time import sleep

camera = PiCamera()

camera.start_preview()
sleep(10)
camera.capture('/home/pi/real-sensors/file-upload-s3/image.jpg')
camera.stop_preview()
