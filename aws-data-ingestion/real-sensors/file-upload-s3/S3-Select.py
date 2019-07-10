import boto3
from botocore.client import Config

ACCESS_KEY_ID = 'AKIA3Z6JM5QM47FTMX54'
ACCESS_SECRET_KEY = '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'
BUCKET_NAME = 'shmart-folder'

#data = open('prescription.jpg', 'rb')

#s3 = boto3.resource(
#    's3',
#    aws_access_key_id=ACCESS_KEY_ID,
#    aws_secret_access_key=ACCESS_SECRET_KEY,
#    config=Config(signature_version='s3v4')
#)

s3 = boto3.client('s3')


r = s3.select_object_content(
        Bucket='shmart-folder',
        Key='IoTSensorData/1559484199806',
        ExpressionType='SQL',
        Expression="select * from s3object",
        InputSerialization = {'JSON': {'Type': 'Document'}},
        OutputSerialization = {'CSV': {}}
)

for event in r['Payload']:
    if 'Records' in event:
        records = event['Records']['Payload'].decode('utf-8')
        print(records)
    elif 'Stats' in event:
        statsDetails = event['Stats']['Details']     



#s3.Bucket(BUCKET_NAME).put_object(Key='prescription.jpg', Body=data)

#print ("Prescription file is uploaded to S3 bucket...") 



### AWS IAM 

## username: pankeshpatel
## Access Key ID: AKIA3Z6JM5QM47FTMX54
## Secret access Key:  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
## User ARN :  arn:aws:iam::811634322457:user/pankeshpatel
## Reference : https://www.youtube.com/watch?v=mtBR-PajgbM
## 

