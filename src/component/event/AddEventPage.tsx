import ContentBox from '../ui/ContentBox'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Headliner from '../ui/HeadLiner'
import { useState } from 'react'
import ImageUploader from '../ui/ImageUploaer'
import { useNavigate } from 'react-router-dom'

function AddEventPage() {
  const [titleValue, setTitleValue] = useState('')
  const [contentValue, setContentValue] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [mainImages, setMainImages] = useState([])
  const [detailImages, setDetailImages] = useState([])

  const titleValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value)
  }

  const contentValueChangeHadnler = (e: any) => {
    setContentValue(e.target.value)
  }

  const startDateValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value)
  }

  const endDateValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value)
  }

  const mainImagesChangeHandler = (imagelist: any) => {
    setMainImages(imagelist)
    const formData = new FormData()
    formData.append('image', imagelist)
  }

  const detailImagesChangeHandler = (imagelist: any) => {
    setDetailImages(imagelist)
    const formData = new FormData()
    formData.append('image', imagelist)
  }

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      titleValue.length === 0 ||
      contentValue.length === 0 ||
      startDate.length === 0 ||
      endDate.length === 0 ||
      mainImages.length === 0 ||
      detailImages.length === 0
    ) {
      alert('모든 값을 입력하세요!')
    }
  }

  const navigate = useNavigate()

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
          value={titleValue}
          onChange={titleValueChangeHandler}
        />

        <textarea
          rows={2}
          cols={20}
          wrap="hard"
          className="h-[124px] w-full rounded-md border border-solid border-[#D9D9D9] pl-2 pt-2 placeholder-gray-400/60 focus:outline-1 focus:outline-[#ABC8DF]"
          placeholder="내용을 입력하세요"
          value={contentValue}
          onChange={contentValueChangeHadnler}
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
              value={startDate}
              onChange={startDateValueChangeHandler}
            />
            <span className="mx-[20px] "> ~ </span>
            <Input
              inputWidth="w-[190px]"
              type="date"
              id="endDate"
              labelHidden="hidden"
              label="endDate"
              value={endDate}
              onChange={endDateValueChangeHandler}
            />
          </div>
        </div>

        <p className="mt-[20px] ml-[10px] mb-[20px] font-bold  text-[#1B304A]">&#183; 이벤트 이미지 첨부</p>
        <p className="mb-[1rem] ml-[1rem]  w-[120px]  text-sm text-[#1B304A]">&#183; 대표이미지</p>
        <ImageUploader value={mainImages} onChange={mainImagesChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; 권장크기 640x640px</p>
          <p>&#183; 메인페이지 및 상세페이지에 업로드 되는 대표 이미지 설정입니다.</p>
        </div>
        <p className="mb-[1rem] ml-[1rem] flex w-[120px] items-center text-sm text-[#1B304A]">
          &#183; 상세이미지
        </p>
        <ImageUploader value={detailImages} onChange={detailImagesChangeHandler} />
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
