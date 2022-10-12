import { useMutation, useQuery, useQueryClient } from 'react-query'
import AWS from 'aws-sdk'

import ContentBox from '../ui/ContentBox'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Headliner from '../ui/HeadLiner'
import { useEffect, useState } from 'react'
import ImageUploader from '../ui/ImageUploaer'
import { useNavigate } from 'react-router-dom'

const { VITE_AWS_ACCESS_KEY_ID, VITE_SECRET_ACCESS_KEY, VITE_BUCKET_NAME, VITE_API } = import.meta.env

function AddEventPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [mainImage, setMainImage] = useState([])
  const [mainImageUrl, setMainImageUrl] = useState('')
  const [mainImageData, setMainImageData] = useState(null)
  const [explainImage, setExplainImage] = useState([])
  const [explainImageUrl, setExplainImageUrl] = useState('')
  const [explainImageData, setExplainImageData] = useState(null)

  const [allImageDataList, setAllImageDataList] = useState([])

  const navigate = useNavigate()

  //ADDEVENT API

  async function addEvent(submitValue: any) {
    const response = await fetch(`${VITE_API}/admin/insertEvent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitValue)
    })
    return response.json()
  }

  const { mutate } = useMutation((submitValue: any) => addEvent(submitValue))

  //AWS API

  AWS.config.update({
    accessKeyId: VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: VITE_SECRET_ACCESS_KEY
  })

  const myBucket = new AWS.S3({
    params: { Bucket: VITE_BUCKET_NAME },
    region: 'ap-northeast-2'
  })

  const [progress, setProgress] = useState(0)

  const uploadFile = (file: any) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: VITE_BUCKET_NAME,
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

  const awsUpload = () => {
    allImageDataList.map((file) => {
      uploadFile(file)
    })
  }

  //STATE HANDLER

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const descriptionChangeHadnler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const startTimeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value)
  }

  const endTimeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value)
  }

  const mainImageChangeHandler = (image: any) => {
    setMainImage(image)
    setMainImageUrl(`https://${VITE_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${image[0].file.name}`)
    setMainImageData(image[0].file)
  }

  const explainImageChangeHandler = (image: any) => {
    setExplainImage(image)
    setExplainImageUrl(`https://${VITE_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${image[0].file.name}`)
    setExplainImageData(image[0].file)
  }

  useEffect(() => {
    const allImageData: any = [mainImageData, explainImageData]
    setAllImageDataList(allImageData)
  }, [mainImageData, explainImageData])

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      title.length === 0 ||
      description.length === 0 ||
      startTime.length === 0 ||
      endTime.length === 0 ||
      mainImage.length === 0 ||
      explainImage.length === 0
    ) {
      alert('모든 값을 입력하세요!')
      return
    }

    const submitValue = {
      description,
      endTime: `${endTime}T00:00:00.428Z`,
      explainImageUrl,
      mainImageUrl,
      startTime: `${startTime}T00:00:00.428Z`,
      title
    }

    awsUpload()
    mutate(submitValue)
    navigate('/eventlist')
  }

  const cancelClick = () => {
    navigate('/eventlist')
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <Headliner>이벤트 등록</Headliner>
      <form onSubmit={formSubmitHandler}>
        <Input
          type="text"
          labelHidden="hidden"
          placeholder="제목을 입력하세요"
          id="noticeTitle"
          label="noticeTitle"
          inputWidth="w-full"
          value={title}
          onChange={titleChangeHandler}
        />

        <textarea
          rows={2}
          cols={20}
          wrap="hard"
          className="h-[124px] w-full rounded-md border border-solid border-[#D9D9D9] pl-2 pt-2 placeholder-gray-400/60 focus:outline-1 focus:outline-[#ABC8DF]"
          placeholder="내용을 입력하세요"
          value={description}
          onChange={descriptionChangeHadnler}
        />
        <div>
          <p className="mt-[20px] ml-[10px] font-bold text-[#1B304A]">&#183; 이벤트 기간 설정</p>
          <div className="ml-[30px] flex items-center">
            <Input
              inputWidth="w-[190px]"
              type="date"
              id="startDate"
              labelHidden="hidden"
              label="startDate"
              value={startTime}
              onChange={startTimeChangeHandler}
            />
            <span className="mx-[20px] "> ~ </span>
            <Input
              inputWidth="w-[190px]"
              type="date"
              id="endDate"
              labelHidden="hidden"
              label="endDate"
              value={endTime}
              onChange={endTimeChangeHandler}
            />
          </div>
        </div>

        <p className="mt-[20px] ml-[10px] mb-[20px] font-bold  text-[#1B304A]">&#183; 이벤트 이미지 첨부</p>
        <p className="mb-[1rem] ml-[1rem]  w-[120px]  text-sm text-[#1B304A]">&#183; 대표이미지</p>
        <ImageUploader multiple={false} value={mainImage} onChange={mainImageChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; 권장크기 640x640px</p>
          <p>&#183; 메인페이지 및 상세페이지에 업로드 되는 대표 이미지 설정입니다.</p>
        </div>
        <p className="mb-[1rem] ml-[1rem] flex w-[120px] items-center text-sm text-[#1B304A]">
          &#183; 상세이미지
        </p>
        <ImageUploader multiple={false} value={explainImage} onChange={explainImageChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; 가로 860px</p>
          <p>&#183; 상세페이지에 업로드 되는 이벤트설명 이미지 설정입니다.</p>
        </div>

        <div className="mt-[2rem] mb-[5rem] flex justify-center">
          <Button
            type="button"
            width="w-[150px]"
            height="h-[40px]"
            bgColor="bg-[#D3D3D3]"
            textColor="text-white"
            borderColor="border-[#D3D3D3]"
            onClick={cancelClick}
          >
            취소
          </Button>
          <Button
            type="submit"
            width="w-[150px]"
            height="h-[40px]"
            bgColor="bg-[#1B304A]"
            textColor="text-white"
            marginLeft="ml-[10px]"
          >
            등록
          </Button>
        </div>
      </form>
    </ContentBox>
  )
}

export default AddEventPage
