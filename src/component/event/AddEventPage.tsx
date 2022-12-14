type eventSubmitType = {
  title: string
  description: string
  startTime: string
  endTime: string
  topFixed: number
  mainImageUrl: string
  explainImageUrl: string
}

import { useMutation } from 'react-query'
import { s3Config } from '../ui/aws'
import ContentBox from '../ui/ContentBox'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Headliner from '../ui/HeadLiner'
import { useEffect, useState } from 'react'
import ImageUploader from '../ui/ImageUploaer'
import { useNavigate } from 'react-router-dom'
import SettingSwitcher from '../product/SettingSwitcher'

const { VITE_BUCKET_NAME } = import.meta.env

function AddEventPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [topFixed, setTopFixed] = useState(0)
  const [mainImage, setMainImage] = useState([])
  const [mainImageUrl, setMainImageUrl] = useState('')
  const [mainImageData, setMainImageData] = useState(null)
  const [explainImage, setExplainImage] = useState([])
  const [explainImageUrl, setExplainImageUrl] = useState('')
  const [explainImageData, setExplainImageData] = useState(null)
  const [allImageDataList, setAllImageDataList] = useState([])

  const navigate = useNavigate()

  //ADDEVENT API

  async function addEvent(submitValue: eventSubmitType) {
    const response = await fetch(`https://iko-lenssis.click/admin/insertEvent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitValue)
    })
    return response.json()
  }

  const { mutate } = useMutation((submitValue: eventSubmitType) => addEvent(submitValue), {
    onSuccess: () => {
      navigate('/eventlist')
    }
  })

  //AWS API

  const uploadFile = async (file: File) => {
    const { reactS3Client } = require('react-aws-s3-typescript')
    const s3 = new reactS3Client(s3Config)
    try {
      const res = await s3.uploadFile(file)
    } catch (exception) {
      console.log(exception)
    }
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
    console.log(image)
    setMainImageUrl(`https://${VITE_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${image[0].file.name}`)
    setMainImageData(image[0].file)
  }

  const explainImageChangeHandler = (image: any) => {
    setExplainImage(image)
    setExplainImageUrl(`https://${VITE_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${image[0].file.name}`)
    setExplainImageData(image[0].file)
  }

  const eventFixedTopValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopFixed(Number(e.target.value))
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
      alert('?????? ?????? ???????????????!')
      return
    }

    const submitValue = {
      description,
      endTime: `${endTime}T00:00:00.428Z`,
      explainImageUrl,
      mainImageUrl,
      startTime: `${startTime}T00:00:00.428Z`,
      title,
      topFixed
    }

    // awsUpload()
    mutate(submitValue)
  }

  const cancelClick = () => {
    navigate('/eventlist')
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <Headliner>????????? ??????</Headliner>
      <form onSubmit={formSubmitHandler}>
        <Input
          type="text"
          labelHidden="hidden"
          placeholder="????????? ???????????????"
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
          placeholder="????????? ???????????????"
          value={description}
          onChange={descriptionChangeHadnler}
        />
        <div>
          <p className="mt-[20px] ml-[10px] font-bold text-[#1B304A]">&#183; ????????? ?????? ??????</p>
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
        <div>
          <p className="mt-[20px] ml-[10px] font-bold text-[#1B304A]">&#183; ????????? ?????? ??????</p>
          <div className="ml-[20px]">
            <SettingSwitcher
              titleHidden="hidden"
              title="eventFixedTop"
              id="eventFixedTop"
              onChange={eventFixedTopValueChangeHandler}
              width="w-[50%]"
              initialValue={topFixed}
            />
          </div>
        </div>

        <p className="mt-[20px] ml-[10px] mb-[20px] font-bold  text-[#1B304A]">&#183; ????????? ????????? ??????</p>
        <p className="mb-[1rem] ml-[1rem]  w-[120px]  text-sm text-[#1B304A]">&#183; ???????????????</p>
        <ImageUploader multiple={false} value={mainImage} onChange={mainImageChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; ???????????? 640x640px</p>
          <p>&#183; ??????????????? ??? ?????????????????? ????????? ?????? ?????? ????????? ???????????????.</p>
        </div>
        <p className="mb-[1rem] ml-[1rem] flex w-[120px] items-center text-sm text-[#1B304A]">
          &#183; ???????????????
        </p>
        <ImageUploader multiple={false} value={explainImage} onChange={explainImageChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; ?????? 860px</p>
          <p>&#183; ?????????????????? ????????? ?????? ??????????????? ????????? ???????????????.</p>
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
            ??????
          </Button>
          <Button
            type="submit"
            width="w-[150px]"
            height="h-[40px]"
            bgColor="bg-[#1B304A]"
            textColor="text-white"
            marginLeft="ml-[10px]"
          >
            ??????
          </Button>
        </div>
      </form>
    </ContentBox>
  )
}

export default AddEventPage
