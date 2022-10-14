import { useParams, useNavigate } from 'react-router-dom'
import ContentBox from '../ui/ContentBox'
import Headliner from '../ui/HeadLiner'
import Button from '../ui/Button'
import { useQuery } from 'react-query'
import Parser from 'html-react-parser'
const { VITE_API } = import.meta.env

function NoticeDetailPage() {
  const params = useParams()
  const navigate = useNavigate()

  async function getNoticeDetails() {
    const response = await fetch(`${VITE_API}/board/details?boardId=${params.noticeId}`)
    return response.json()
  }

  const fallback: string[] = []
  const { data: noticeDetail = fallback } = useQuery(['noticeDetail'], getNoticeDetails)

  const cancelClick = () => {
    navigate('/noticelist')
  }

  return (
    <ContentBox marginBottom="mb-[40px] relative" marginRight="mr-[20px]">
      <Headliner>공지사항</Headliner>
      <p
        className="mt-[50px] flex h-[50px] items-center"
        style={{ borderBottom: '1px solid #7A7A7A', borderTop: '1px solid #7A7A7A' }}
      >
        <span className="w-[20%] text-center">제목</span>
        <span>{noticeDetail.data && noticeDetail.data[0].boardTitle}</span>
      </p>
      <p className="flex h-[50px] items-center" style={{ borderBottom: '1px solid #7A7A7A' }}>
        <span className="w-[20%] text-center">작성자</span> <span> 렌시스 관리자</span>
      </p>
      <div className="absolute right-6 mt-[10px]">
        <span className="font-bold">작성일 </span>
        {noticeDetail.data && noticeDetail.data[0].createdAt}
      </div>
      <div
        className="my-[4rem] flex justify-center whitespace-pre-line pb-[4rem]"
        style={{ borderBottom: '1px solid #7A7A7A' }}
      >
        {noticeDetail.data && Parser(noticeDetail.data[0].description)}
      </div>
      <div className="mb-[5rem]  flex justify-center">
        <Button
          type="button"
          width="w-[80px]"
          height="h-[40px]"
          bgColor="bg-white"
          textColor="text-[black]"
          borderColor="border-[#C2C9D1]"
          display="block"
          marginLeft="ml-[10px]"
          onClick={cancelClick}
        >
          닫기
        </Button>
      </div>
    </ContentBox>
  )
}

export default NoticeDetailPage
