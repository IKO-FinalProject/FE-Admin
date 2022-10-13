const { VITE_AWS_ACCESS_KEY_ID, VITE_SECRET_ACCESS_KEY, VITE_BUCKET_NAME, VITE_API } = import.meta.env
import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: VITE_SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
  params: { Bucket: VITE_BUCKET_NAME },
  region: 'ap-northeast-2'
})
