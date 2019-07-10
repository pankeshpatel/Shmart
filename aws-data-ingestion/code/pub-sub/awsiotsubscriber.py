#!/usr/bin/python

# This program will subscribe and show all the messages sent by its companion
# awsiotpub.py using the AWS IoT hub

import paho.mqtt.client as paho
import os
import socket
import ssl

def on_connect(client, userdata, flags, rc):
    # print("Connection returned result: " + str(rc) )
    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    print("I am ready to receive control message...." )
    client.subscribe("#" , 1 )

def on_message(client, userdata, msg):
    #print("Received control message on topic: "+ msg.topic)
    print("Received control message....")
    print("Received temperature value.... "+ str(msg.payload))

#def on_log(client, userdata, level, msg):
#    print(msg.topic+" "+str(msg.payload))

mqttc = paho.Client()
mqttc.on_connect = on_connect
mqttc.on_message = on_message
#mqttc.on_log = on_log

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

mqttc.tls_set(caPath, certfile=certPath, keyfile=keyPath, cert_reqs=ssl.CERT_REQUIRED, tls_version=ssl.PROTOCOL_TLSv1_2, ciphers=None)

mqttc.connect(awshost, awsport, keepalive=60)

mqttc.loop_forever()
