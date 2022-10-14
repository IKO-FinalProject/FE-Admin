import ContentBox from '../ui/ContentBox'
import Headliner from '../ui/HeadLiner'
import Button from '../ui/Button'
import { AiOutlineSearch } from 'react-icons/ai'
import { useQuery } from 'react-query'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

async function getNotices() {
  const response = await fetch(`https://iko-lenssis.click/admin/boardMain`)
  return response.json()
}

function NoticeListPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const fallback: string[] = []
  const { data: notices = fallback } = useQuery(['noticesList', currentPage], getNotices)

  const category = (status: number) => {
    if (status === 0) {
      return '필독 공지사항'
    } else if (status === 1) {
      return '배송관련'
    } else if (status === 2) {
      return '취소 / 교환 / 반품'
    } else if (status === 3) {
      return '결제 관련'
    } else if (status === 4) {
      return '제품 도수'
    } else if (status === 5) {
      return '쿠폰 / 회원정보'
    } else {
      return '기타'
    }
  }

  const navigate = useNavigate()

  const addNoticeClick = () => {
    navigate('/addNotice')
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <Headliner>공지사항</Headliner>
      <ul>
        <li className="mt-[2rem] pb-[.5rem] text-right text-xs" style={{ borderBottom: '1px solid #C2C9D1' }}>
          최근 날짜순
        </li>
        {notices.data &&
          notices.data.boardDataList.map((notice: any) => {
            return (
              <li
                className="relative flex py-[.7rem]"
                key={notice.boardId}
                style={{ borderBottom: '1px solid #C2C9D1' }}
              >
                <input className="" type="checkbox" name={notice.boardTitle} value={notice.boardId} />
                <span className="ml-[2rem] w-[150px] text-center">{category(notice.boardType)}</span>
                <Link to={`/noticelist/${notice.boardId}`} className="ml-[4rem]">
                  {notice.boardTitle}
                </Link>
                <span className="absolute right-0 mt-[3px]">{notice.createdAt}</span>
              </li>
            )
          })}
      </ul>
      <div className="relative mt-[2rem] flex">
        <div
          className="flex h-[30px] w-[150px] items-center justify-center rounded-md"
          style={{ border: '1px solid #C4C4C4' }}
        >
          <input placeholder="Search" className="w-[80%] border-none  text-[#C4C4C4]" />
          <AiOutlineSearch className="cursor-pointer text-[#C4C4C4] hover:text-[#1B304A]" />
        </div>
        <div className="absolute right-0 flex">
          <Button
            type="button"
            width="w-[50px]"
            height="h-[30px]"
            bgColor="bg-white"
            textColor="text-[#C2C9D1]"
            borderColor="border-[#C2C9D1]"
          >
            삭제
          </Button>
          <Button
            type="button"
            width="w-[50px]"
            height="h-[30px]"
            bgColor="bg-white"
            textColor="text-[#C2C9D1]"
            borderColor="border-[#C2C9D1]"
            marginLeft="ml-[.5rem]"
          >
            수정
          </Button>
          <Button
            type="button"
            width="w-[60px]"
            height="h-[30px]"
            bgColor="bg-[#1B304A]"
            textColor="text-white"
            marginLeft="ml-[.5rem]"
            onClick={addNoticeClick}
          >
            글쓰기
          </Button>
        </div>
      </div>
    </ContentBox>
  )
}

export default NoticeListPage
