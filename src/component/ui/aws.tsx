const { VITE_AWS_ACCESS_KEY_ID, VITE_SECRET_ACCESS_KEY, VITE_BUCKET_NAME } = import.meta.env

export const s3Config = {
  bucketName: VITE_BUCKET_NAME,
  region: 'ap-northeast-2',
  accessKeyId: VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: VITE_SECRET_ACCESS_KEY
}
