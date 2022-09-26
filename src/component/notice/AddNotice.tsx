import { useRef, useState } from 'react'
import ContentBox from '../ui/ContentBox'
import Input from '../ui/Input'
import QuillEditor from './QuillEditor'
import Button from '../ui/Button'

function AddNotice() {
  const [titleValue, setTitleValue] = useState(null)
  const [htmlContent, setHtmlContent] = useState('')
  const quillRef = useRef()

  const titleInputHandler = (e: any) => {
    setTitleValue(e.target.value)
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <div className="mb-5" style={{ borderBottom: '1px solid #C4C4C4' }}>
        <h1
          className="flex h-[30px] w-[100px] items-center justify-center  text-[.9rem] font-bold drop-shadow-2xl"
          style={{ borderBottom: '3px solid #A4C8E1', textShadow: '0 3px #C4C4C4' }}
        >
          공지사항 작성
        </h1>
      </div>
      <form>
        <label className="hidden" htmlFor="noticeCategory">
          카테고리선택
        </label>
        <select
          id="noticeCategory"
          className="select select-bordered select-sm w-[190px] border-[.5px] border-[#D9D9D9] text-[.7rem]"
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
          width="w-full"
        />
        <QuillEditor quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={setHtmlContent} />

        <div className="mt-[2rem] mb-[5rem] flex justify-between">
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
          >
            등록
          </Button>
        </div>
      </form>
    </ContentBox>
  )
}

export default AddNotice
