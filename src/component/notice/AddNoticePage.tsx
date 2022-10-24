import { useMutation } from 'react-query'
import { useRef, useState } from 'react'
import ContentBox from '../ui/ContentBox'
import Input from '../ui/Input'
import QuillEditor from './QuillEditor'
import Button from '../ui/Button'
import Headliner from '../ui/HeadLiner'
import { useNavigate } from 'react-router-dom'

function AddNoticePage() {
  const [categoryValue, setCategoryValue] = useState(0)
  const [titleValue, setTitleValue] = useState('')
  const [htmlContent, setHtmlContent] = useState('')
  const quillRef = useRef()

  //ADDEVENT API

  async function addNotice(submitValue: any) {
    const response = await fetch(`https://iko-lenssis.click/admin/insertBoard`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitValue)
    })
    return response.json()
  }

  const { mutate } = useMutation((submitValue: any) => addNotice(submitValue), {
    onSuccess: () => {
      navigate('/noticelist')
    }
  })

  const categoryValueChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryValue(Number(e.target.value))
  }
  const titleValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value)
  }

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (titleValue.length === 0 || htmlContent.length === 0) {
      alert('모든 값을 입력하세요!')
    }
    const submitValue = {
      boardContent: htmlContent,
      boardTitle: titleValue,
      boardType: categoryValue
    }

    mutate(submitValue)
  }

  const navigate = useNavigate()

  const cancelClick = () => {
    navigate('/noticelist')
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <Headliner>공지사항 작성</Headliner>
      <form onSubmit={formSubmitHandler}>
        <label className="hidden" htmlFor="noticeCategory">
          카테고리선택
        </label>
        <select
          onChange={categoryValueChangeHandler}
          id="noticeCategory"
          className=" h-[25px] w-[140px] rounded-lg border-[#C4C4C4] text-[#C4C4C4]"
        >
          <option value="0">필독 공지사항</option>
          <option value="1">배송 관련</option>
          <option value="2">취소/교환/반품</option>
          <option value="3">결제 관련</option>
          <option value="4">제품/도수</option>
          <option value="5">쿠폰/회원 정보</option>
          <option value="6">기타</option>
        </select>
        <Input
          type="text"
          labelHidden="hidden"
          placeholder="제목을 입력하세요"
          id="noticeTitle"
          label="noticeTitle"
          onChange={titleValueChangeHandler}
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

export default AddNoticePage
