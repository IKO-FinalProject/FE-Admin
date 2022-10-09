import { useParams } from 'react-router-dom'

function EventDetailPage() {
  const params = useParams()

  console.log(params.eventId)
  return <div>EventDetail</div>
}

export default EventDetailPage
