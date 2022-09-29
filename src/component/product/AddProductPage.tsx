import ContentBox from '../ui/ContentBox'
import Button from '../ui/Button'
import Headliner from '../ui/HeadLiner'
import MainInfoForm from './MainInfoForm'
import DetailInfoForm from './DetailInfoForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProductPage() {
  const [mainInform, setMainInform] = useState({
    productTitle: '',
    price: '',
    discount: '',
    diameter: '',
    manufacturer: '',
    recommend: false,
    mainExposure: false,
    seriesValue: '',
    featureValue: []
  })
  const [optionList, setOptionList] = useState([])
  const mainInformHandler = (mainInform: {
    productTitle: string
    price: string
    discount: string
    diameter: string
    manufacturer: string
    recommend: boolean
    mainExposure: boolean
    seriesValue: string
    featureValue: []
  }) => {
    setMainInform(mainInform)
  }

  const optionListHandler = (optionList: []) => {
    setOptionList(optionList)
  }

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      mainInform.diameter.length === 0 ||
      mainInform.discount.length === 0 ||
      mainInform.featureValue.length === 0 ||
      mainInform.manufacturer.length === 0 ||
      optionList.length === 0 ||
      mainInform.price.length === 0 ||
      mainInform.productTitle.length === 0 ||
      mainInform.seriesValue.length === 0
    ) {
      alert('모든 값을 입력하세요!')
      return
    }
    const submitValue = {
      ...mainInform,
      optionList
    }
  }

  const navigate = useNavigate()

  const cancelClick = () => {
    navigate('/productlist')
  }

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <ContentBox marginBottom="mb-[20px]" marginRight="mr-[20px]">
          <Headliner>메인정보 입력</Headliner>
          <MainInfoForm mainInformHandler={mainInformHandler} />
        </ContentBox>

        <ContentBox marginBottom="mb-[50px]" marginRight="mr-[20px]">
          <Headliner>상세정보 입력</Headliner>
          <DetailInfoForm optionListHandler={optionListHandler} />
          <div className="mt-[4rem] mb-[5rem] flex justify-center">
            <Button
              type="button"
              width="w-[150px]"
              height="h-[40px]"
              bgColor="bg-[#D3D3D3]"
              textColor="text-white"
              borderColor="border-[#D3D3D3]"
              onClick={cancelClick}
            >
              뒤로가기
            </Button>
            <Button
              type="submit"
              width="w-[150px]"
              height="h-[40px]"
              bgColor="bg-[#1B304A]"
              textColor="text-white"
              marginLeft="ml-[10px]"
            >
              등록하기
            </Button>
          </div>
        </ContentBox>
      </form>
    </>
  )
}

export default AddProductPage
