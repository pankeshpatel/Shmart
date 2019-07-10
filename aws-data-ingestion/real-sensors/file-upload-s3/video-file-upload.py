import boto3
from botocore.client import Config

ACCESS_KEY_ID = 'AKIA3Z6JM5QM47FTMX54'
ACCESS_SECRET_KEY = 'zNPVWa+NIbz1RrPPplBDkzQBAO2bO9KgGvt9Tpz5'
BUCKET_NAME = 'shmart-folder'

data = open('sample-video.mp4', 'rb')

s3 = boto3.resource(
    's3',
    aws_access_key_id=ACCESS_KEY_ID,
    aws_secret_access_key=ACCESS_SECRET_KEY,
    config=Config(signature_version='s3v4')
)
s3.Bucket(BUCKET_NAME).put_object(Key='sample-video.mp4', Body=data)

print ("Video file is uploaded to S3 bucket...") 



### AWS IAM 

## username: pankeshpatel
## Access Key ID: AKIA3Z6JM5QM47FTMX54
## Secret access Key:  zNPVWa+NIbz1RrPPplBDkzQBAO2bO9KgGvt9Tpz5
## User ARN :  arn:aws:iam::811634322457:user/pankeshpatel
## Reference : https://www.youtube.com/watch?v=mtBR-PajgbM
## 

