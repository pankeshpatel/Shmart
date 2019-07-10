import paho.mqtt.client as paho
import os
import socket
import ssl
from time import sleep
from random import uniform
import json
from datetime import datetime
import sys
import Adafruit_DHT
import time

connflag = False

def on_connect(client, userdata, flags, rc):
    global connflag
    connflag = True
    #print("Connection returned result: " + str(rc) )

def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

mqttc = paho.Client()
mqttc.on_connect = on_connect
mqttc.on_message = on_message

# The unique hostname that &IoT; generated for this device.
awshost = "a3tbk5xbn9vsaq-ats.iot.us-east-1.amazonaws.com"
awsport = 8883

# A programmatic shadow handler name prefix.
clientId = "IoTDevice"
thingName = "IoTDevice"

# The relative path to the correct root CA file for &IoT;, which you have already saved onto this device.
caPath = "AmazonRootCA1.pem"

# The relative path to your certificate file that 
# &IoT; generated for this device, which you 
# have already saved onto this device.
certPath = "13b57a63cd-certificate.pem.crt"


# The relative path to your private key file that 
# &IoT; generated for this device, which you 
# have already saved onto this device.
keyPath = "13b57a63cd-private.pem.key"

mqttc.tls_set(caPath, certfile=certPath, keyfile=keyPath, 
    cert_reqs=ssl.CERT_REQUIRED, tls_version=ssl.PROTOCOL_TLSv1_2, ciphers=None)

mqttc.connect(awshost, awsport, keepalive=60)

mqttc.loop_start()
row_values = 0
while 1==1:
    sleep(10)
    if connflag == True:
        #tempreading = uniform(20.0,25.0)
        humidity, temperature = Adafruit_DHT.read_retry(11,4)
        print ("Temperature in Celsius" , temperature)
        print ("Humidity in %" , humidity)
        row_values +=1
        mqttc.publish("$aws/things/IoTDevice/shadow/update/accepted", 
        json.dumps({ "pos" : row_values, "timestamp": str(datetime.now()), "temperature" : temperature, "humidity": humidity }), 
        qos=1)
        #print("msg sent: temperature " + "%.2f" % tempreading )
    else:
        print("waiting for connection...")
