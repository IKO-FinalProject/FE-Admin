import { useParams, useNavigate } from 'react-router-dom'
import ContentBox from '../ui/ContentBox'
import Headliner from '../ui/HeadLiner'
import Button from '../ui/Button'
import { useQuery } from 'react-query'

function EventDetailPage() {
  const params = useParams()
  const navigate = useNavigate()

  async function getEventDetails() {
    const response = await fetch(`https://iko-lenssis.click/event/details?eventId=${params.eventId}`)
    return response.json()
  }

  const fallback: string[] = []
  const { data: eventDetail = fallback } = useQuery(['eventDetail'], getEventDetails)

  const cancelClick = () => {
    navigate('/eventlist')
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <h1
        className="mt-[2rem] pb-[5rem] text-center text-2xl font-bold"
        style={{ borderBottom: '1px solid #7A7A7A' }}
      >
        이벤트
      </h1>
      <p className="flex h-[50px] items-center" style={{ borderBottom: '1px solid #7A7A7A' }}>
        <span className="w-[20%] text-center">제목</span>
        <span>{eventDetail.data && eventDetail.data[0].eventTitle}</span>
      </p>
      <p className="flex h-[50px] items-center" style={{ borderBottom: '1px solid #7A7A7A' }}>
        <span className="w-[20%] text-center">작성자</span> <span> 렌시스 관리자</span>
      </p>
      <div className="mt-[4rem] flex justify-center pb-[2rem]" style={{ borderBottom: '1px solid #7A7A7A' }}>
        <img className="w-[70%]  " src={eventDetail.data && eventDetail.data[0].imageUrl} alt="eventimage" />
      </div>
      <div className="mb-[5rem] mt-[2rem] flex justify-center">
        <Button
          type="button"
          width="w-[150px]"
          height="h-[40px]"
          bgColor="bg-[#D3D3D3]"
          textColor="text-white"
          borderColor="border-[#D3D3D3]"
          display="block"
          marginLeft="ml-[10px]"
          fontSize="text-base"
          onClick={cancelClick}
        >
          목록
        </Button>
        <Button
          type="button"
          width="w-[150px]"
          height="h-[40px]"
          bgColor="bg-[#1B304A]"
          textColor="text-white"
          borderColor="border-[#1B304A]"
          display="block"
          marginLeft="ml-[10px]"
          fontSize="text-base"
        >
          수정
        </Button>
      </div>
    </ContentBox>
  )
}

export default EventDetailPage
