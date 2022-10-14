import ContentBox from '../ui/ContentBox'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import Headliner from '../ui/HeadLiner'
import MainInfoForm from './MainInfoForm'
import DetailInfoForm from './DetailInfoForm'
import { useState, useEffect } from 'react'
import { useQuery, useMutation } from 'react-query'
import { s3Config } from '../ui/aws'
import type { MainInfoFormValue } from './MainInfoForm'

function EditProductPage() {
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
  const { reactS3Client } = require('react-aws-s3-typescript')
  const navigate = useNavigate()
  const params = useParams()

  async function getProductDetails() {
    const response = await fetch(
      `https://iko-lenssis.click/admin/searchDetailsById?productId=${params.productId}`
    )
    return response.json()
  }

  const fallback: string[] = []
  const { data: productDetail = fallback } = useQuery(['productDetail'], getProductDetails)

  async function updateProduct(submitValue: any) {
    const response = await fetch(`https://iko-lenssis.click/admin/updateProduct`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitValue)
    })
    return response.json()
  }
  const { mutate } = useMutation((submitValue: any) => updateProduct(submitValue), {
    onSuccess: () => {
      navigate('/productlist')
    }
  })

  //AWSAPI
  // const [progress, setProgress] = useState(0)

  // const uploadFile = (file: any) => {
  //   const params = {
  //     ACL: 'public-read',
  //     Body: file,
  //     Bucket: VITE_BUCKET_NAME,
  //     Key: file.name
  //   }

  //   myBucket
  //     .putObject(params)
  //     .on('httpUploadProgress', (evt) => {
  //       setProgress(Math.round((evt.loaded / evt.total) * 100))
  //     })
  //     .send((err) => {
  //       if (err) console.log(err)
  //     })
  // }

  const uploadFile = async (file: any) => {
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
      productOptionUpdateRequestList: optionList
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
          <MainInfoForm
            initialValue={productDetail.data && productDetail.data.productInfo}
            mainInformHandler={mainInformHandler}
          />
        </ContentBox>

        <ContentBox marginBottom="mb-[50px]" marginRight="mr-[20px]">
          <Headliner>상세정보 입력</Headliner>
          <DetailInfoForm
            initialValue={productDetail.data && productDetail.data.detailsInfo}
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
              수정하기
            </Button>
          </div>
        </ContentBox>
      </form>
    </>
  )
}

export default EditProductPage
