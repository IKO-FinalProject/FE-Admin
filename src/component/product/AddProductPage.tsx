import { useMutation } from 'react-query'

import { myBucket } from '../ui/aws'
import ContentBox from '../ui/ContentBox'
import Button from '../ui/Button'
import Headliner from '../ui/HeadLiner'
import MainInfoForm from './MainInfoForm'
import DetailInfoForm from './DetailInfoForm'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import type { MainInfoFormValue } from './MainInfoForm'

const { VITE_BUCKET_NAME, VITE_API } = import.meta.env

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
    const response = await fetch(`${VITE_API}/admin/insertProduct`, {
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
  const [progress, setProgress] = useState(0)

  const uploadFile = (file: any) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: VITE_BUCKET_NAME,
      Key: file.name
    }

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
      })
      .send((err) => {
        if (err) console.log(err)
      })
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
    awsUpload()
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
          <Headliner>메인정보 입력</Headliner>
          <MainInfoForm mainInformHandler={mainInformHandler} />
        </ContentBox>

        <ContentBox marginBottom="mb-[50px]" marginRight="mr-[20px]">
          <Headliner>상세정보 입력</Headliner>
          <DetailInfoForm
            optionListHandler={optionListHandler}
            allImageDataListHandler={allImageDataListHandler}
          />
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
