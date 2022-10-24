import { useMutation } from 'react-query'
import { s3Config } from '../ui/aws'
import ContentBox from '../ui/ContentBox'
import Button from '../ui/Button'
import MainInfoForm from './MainInfoForm'
import DetailInfoForm from './DetailInfoForm'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import type { MainInfoFormValue } from './MainInfoForm'

function AddProductPage() {
  const [optionList, setOptionList] = useState([])
  const [allImageDataList, setAllImageDataList] = useState([])
  const [awsData, setAwsData] = useState([])
  const [mainInform, setMainInform] = useState<MainInfoFormValue>({
    productName: '',
    price: 0,
    discount: 0,
    diameter: 0,
    manufacturer: '',
    recommend: 0,
    exposure: 0,
    series: '',
    feature: []
  })

  const navigate = useNavigate()

  //ADDPRODUCT API
  async function addProduct(submitValue: any) {
    const response = await fetch(`https://iko-lenssis.click/admin/insertProduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitValue)
    })
    return response.json()
  }
  const { mutate } = useMutation((submitValue: any) => addProduct(submitValue), {
    onSuccess: () => {
      navigate('/productlist')
    }
  })

  //AWSAPI
  const uploadFile = async (file: any) => {
    const { reactS3Client } = require('react-aws-s3-typescript')
    const s3 = new reactS3Client(s3Config)
    try {
      const res = await s3.uploadFile(file)
    } catch (exception) {
      console.log(exception)
    }
  }

  const awsUpload = () => {
    awsData.map((file) => {
      uploadFile(file)
    })
  }

  //STATE HANDLER
  const mainInformHandler = (mainInform: any) => {
    setMainInform(mainInform)
  }

  const optionListHandler = (optionList: any) => {
    setOptionList(optionList)
  }

  const allImageDataListHandler = (allImageData: any) => {
    setAllImageDataList(allImageData)
  }

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      mainInform.diameter === 0 ||
      mainInform.discount === 0 ||
      mainInform.feature.length === 0 ||
      mainInform.manufacturer.length === 0 ||
      optionList.length === 0 ||
      mainInform.price === 0 ||
      mainInform.productName.length === 0 ||
      mainInform.series.length === 0
    ) {
      alert('모든 값을 입력하세요!')
      return
    }
    const submitValue = {
      ...mainInform,
      productOptionSaveRequestList: optionList
    }
    // awsUpload()
    mutate(submitValue)
  }

  useEffect(() => {
    const allImageData: any = []
    allImageDataList.map((data: any) => {
      allImageData.push(...data.imageData)
    })
    setAwsData(allImageData)
  }, [allImageDataList])

  const cancelClick = () => {
    navigate('/productlist')
  }

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <ContentBox marginBottom="mb-[20px]" marginRight="mr-[20px]">
          <h1
            className="relative mb-6 flex pb-2 text-[.9rem] font-bold"
            style={{ borderBottom: '1px solid #C4C4C4' }}
          >
            <div>메인정보 입력</div>
          </h1>
          <MainInfoForm mainInformHandler={mainInformHandler} />
        </ContentBox>

        <ContentBox marginBottom="mb-[50px]" marginRight="mr-[20px]">
          <h1
            className="relative mb-6 flex pb-2 text-[.9rem] font-bold"
            style={{ borderBottom: '1px solid #C4C4C4' }}
          >
            <div>상세정보 입력</div>
          </h1>
          <DetailInfoForm
            optionListHandler={optionListHandler}
            allImageDataListHandler={allImageDataListHandler}
          />
          <div className="mt-[4rem] mb-[5rem] flex justify-center">
            <Button
              type="button"
              width="w-[250px]"
              height="h-[45px]"
              bgColor="bg-white"
              textColor="text-[#D3D3D3]"
              borderColor="border-[#D3D3D3]"
              fontSize="text-base"
              onClick={cancelClick}
            >
              뒤로가기
            </Button>
            <Button
              type="submit"
              width="w-[250px]"
              height="h-[45px]"
              bgColor="bg-[#1B304A]"
              textColor="text-white"
              fontSize="text-base"
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
