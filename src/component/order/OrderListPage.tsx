import React, { useState } from 'react'
import AWS from 'aws-sdk'

const config = {
  bucketName: 'iko-amazon-storage',
  region: 'ap-northeast-2',
  accessKeyId: 'AKIAXQWCTWGR6O7FAMMV',
  secretAccessKey: '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'
}

const myconfig = {
  accessKeyId: 'AKIA2M4UBPUZKB2TEEWR',
  secretAccessKey: '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',
  Bucket: 'iko-lensis-kdt'
}

AWS.config.update({
  accessKeyId: 'AKIA2M4UBPUZKB2TEEWR',
  secretAccessKey: '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'
})

const myBucket = new AWS.S3({
  params: { Bucket: 'iko-lensis-kdt' },
  region: 'ap-northeast-2'
})

function OrderListPage() {
  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileInput = (e: any) => {
    setSelectedFile(e.target.files[0])
  }

  const uploadFile = (file: any) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: 'iko-amazon-storage',
      Key: file.name
    }

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
      })
      .send((err) => {
        if (err) console.log(err)
      })
  }

  return (
    <div>
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
  )
}

export default OrderListPage
