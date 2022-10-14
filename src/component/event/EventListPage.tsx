import ContentBox from '../ui/ContentBox'
import Headliner from '../ui/HeadLiner'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { AiOutlineSearch } from 'react-icons/ai'
import Button from '../ui/Button'
import { useNavigate, Link } from 'react-router-dom'

const { VITE_API } = import.meta.env

async function getEvents() {
  const response = await fetch(`https://iko-lenssis.click/event/main`)
  return response.json()
}

function EventListPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const fallback: string[] = []
  const { data: events = fallback } = useQuery(['eventsList', currentPage], getEvents)

  const navigate = useNavigate()

  const addeventClick = () => {
    navigate('/addevent')
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <Headliner>이벤트 관리</Headliner>
      <ul>
        <li className="mt-[2rem] pb-[.5rem] text-right text-xs" style={{ borderBottom: '1px solid #C2C9D1' }}>
          최근 날짜순
        </li>
        {events.data &&
          events.data.eventMainList.map((event: any) => {
            return (
              <li className="py-[.5rem]" key={event.eventId} style={{ borderBottom: '1px solid #C2C9D1' }}>
                <input className="" type="checkbox" name={event.eventTitle} value={event.eventId} />
                <span className="ml-[2rem]">Lenssis</span>
                <Link to={`/eventlist/${event.eventId}`} className="ml-[4rem]">
                  {event.eventTitle}
                </Link>
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
            onClick={addeventClick}
          >
            글쓰기
          </Button>
        </div>
      </div>
    </ContentBox>
  )
}

export default EventListPage
