import { useRef, useState } from 'react'
import ContentBox from '../ui/ContentBox'
import Input from '../ui/Input'
import QuillEditor from './QuillEditor'
import Button from '../ui/Button'
import Headliner from '../ui/HeadLiner'

function AddNotice() {
  const [titleValue, setTitleValue] = useState('')
  const [htmlContent, setHtmlContent] = useState('')
  const quillRef = useRef()

  const titleInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value)
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <Headliner>공지사항 작성</Headliner>
      <form>
        <label className="hidden" htmlFor="noticeCategory">
          카테고리선택
        </label>
        <select
          id="noticeCategory"
          className=" h-[25px] w-[140px] rounded-lg border-[#C4C4C4] text-[#C4C4C4]"
        >
          <option value="">필독 공지사항</option>
          <option value="">배송 관련</option>
          <option value="">취소/교환/반품</option>
          <option value="">배송 전 변경</option>
          <option value="">결제 관련</option>
          <option value="">제품/도수</option>
          <option value="">쿠폰/회원 정보</option>
        </select>
        <Input
          type="text"
          labelHidden="hidden"
          placeholder="제목을 입력하세요"
          id="noticeTitle"
          label="noticeTitle"
          onChange={titleInputHandler}
          inputWidth="w-full"
        />
        <QuillEditor quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={setHtmlContent} />

        <div className="mt-[2rem] mb-[5rem] flex justify-center">
          <Button
            type="button"
            width="w-[150px]"
            height="h-[40px]"
            bgColor="bg-[#D3D3D3]"
            textColor="text-white"
            borderColor="border-[#D3D3D3]"
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

export default AddNotice
