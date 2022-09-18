import { ContentBoxHalf } from '../ui/ContentBox'

function MainPage() {
  return (
    <div className="flex">
      <ContentBoxHalf>
        <div>123</div>
      </ContentBoxHalf>
      <ContentBoxHalf className="mr-[20px]">
        <div>123</div>
      </ContentBoxHalf>
    </div>
  )
}

export default MainPage
