import { ContentBoxHalf, ContentBoxFull } from '../ui/ContentBox'

function MainPage() {
  return (
    <div>
      <div className="flex">
        <ContentBoxHalf>
          <div>123</div>
        </ContentBoxHalf>
        <ContentBoxHalf>
          <div>123</div>
        </ContentBoxHalf>
      </div>
      <ContentBoxFull>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </ContentBoxFull>
      <ContentBoxFull>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </ContentBoxFull>
      <ContentBoxFull>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </ContentBoxFull>
    </div>
  )
}

export default MainPage
