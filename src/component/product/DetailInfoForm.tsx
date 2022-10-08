import SettingSwitcher from './SettingSwitcher'
import PeriodSwitcher from './PeriodSwitcher'
import Input from '../ui/Input'
import ImageUploader from '../ui/ImageUploaer'

import { useState, useEffect } from 'react'

import { DetailInfoFormValue } from './types'

type Props = {
  optionListHandler: React.Dispatch<React.SetStateAction<DetailInfoFormValue>>
  allImageDataListHandler: React.Dispatch<React.SetStateAction<DetailInfoFormValue>>
}

function DetailInfoForm({ optionListHandler, allImageDataListHandler }: Props) {
  const [graphicDiameter, setGraphicDiameter] = useState(0)
  const [basecurve, setBasecurve] = useState(0)
  const [color, setColor] = useState('')
  const [colorCode, setColorCode] = useState('')
  const [material, setMaterial] = useState('')
  const [detailsPrice, setDetailsPrice] = useState(0)
  const [moisture, setMoisture] = useState(0)
  const [productDetailsStock, setProductDetailsStock] = useState(0)

  const [isSale, setIsSale] = useState(0)
  const [detailsExposure, setDetailsExposure] = useState(0)
  const [period, setPeriod] = useState(30)
  const [imageList, setImageList] = useState([])
  const [imageUrlList, setImageUrlList] = useState([])
  const [imageDataList, setImageDataList] = useState([])
  const [explanationImageList, setExplanationImageList] = useState([])
  const [explanationImageUrlList, setExplanationImageUrlList] = useState([])
  const [explanationImageDataList, setExplanationImageDataList] = useState([])

  const [optionList, setOptionList]: any = useState([])
  const [allImageDataList, setAllImageDataList]: any = useState([])

  const graphicDiameterValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGraphicDiameter(Number(e.target.value))
  }

  const basecurveValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBasecurve(Number(e.target.value))
  }

  const colorValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  const colorCodeValueChangeHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorCode(e.target.value)
  }

  const detailPriceValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailsPrice(Number(e.target.value))
  }

  const materialValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterial(e.target.value)
  }

  const moistureValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoisture(Number(e.target.value))
  }

  const productDetailStockValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetailsStock(Number(e.target.value))
  }

  const isSaleValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSale(Number(e.target.value))
  }

  const detailsExposureValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailsExposure(Number(e.target.value))
  }

  const periodValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(Number(e.target.value))
  }

  const mainImagesChangeHandler = (imagelist: any) => {
    setImageList(imagelist)
    const imageUrl: any = []
    const imageData: any = []
    imagelist.map((image: any) => {
      imageUrl.push(`https://iko-amazon-storage.s3.ap-northeast-2.amazonaws.com/${image.file.name}`)
      imageData.push(image.file)
    })
    setImageUrlList(imageUrl)
    setImageDataList(imageData)
  }

  const detailImagesChangeHandler = (imagelist: any) => {
    setExplanationImageList(imagelist)
    const imgUrl: any = []
    const imageData: any = []
    imagelist.map((image: any) => {
      imgUrl.push(`https://iko-amazon-storage.s3.ap-northeast-2.amazonaws.com/${image.file.name}`)
      imageData.push(image.file)
    })
    setExplanationImageUrlList(imgUrl)
    setExplanationImageDataList(imageData)
  }

  const addOption = () => {
    if (
      graphicDiameter === 0 ||
      basecurve === 0 ||
      color.length === 0 ||
      colorCode.length === 0 ||
      material.length === 0 ||
      detailsPrice === 0 ||
      moisture === 0 ||
      productDetailsStock === 0 ||
      imageList.length === 0 ||
      explanationImageList.length === 0
    ) {
      alert('모든 옵션의 값을 입력하세요!')
      return
    }

    setOptionList([
      ...optionList,
      {
        graphicDiameter,
        basecurve,
        color,
        colorCode,
        material,
        detailsPrice,
        moisture,
        productDetailsStock,
        isSale,
        detailsExposure,
        period,
        imageUrl: imageUrlList,
        explanationImageUrl: explanationImageUrlList,
        degree: [
          0, -0.5, -1, -1.25, -1.5, -1.75, -2.0, -2.25, -2.5, -2.75, -3.0, -3.25, -3.5, -3.75, -4.0, -4.25,
          -4.5, -4.75, -5.0, -5.5, -6.0, -6.5, -7.0, -7.5, -8.0
        ]
      }
    ])

    setAllImageDataList([...allImageDataList, { imageData: [...imageDataList, ...explanationImageDataList] }])

    setGraphicDiameter(0)
    setBasecurve(0)
    setColor('')
    setColorCode('')
    setMaterial('')
    setDetailsPrice(0)
    setMoisture(0)
    setProductDetailsStock(0)
    setImageList([])
    setExplanationImageList([])
  }

  const deleteOption = (index: number) => {
    setOptionList(optionList.filter((option: object[], optionIndex: number) => optionIndex !== index))
    setAllImageDataList(
      allImageDataList.filter((option: object[], optionIndex: number) => optionIndex !== index)
    )
  }

  useEffect(() => {
    optionListHandler(optionList)
  }, [optionList])

  useEffect(() => {
    allImageDataListHandler(allImageDataList)
  }, [allImageDataList])

  console.log(allImageDataList)

  return (
    <>
      <div className="flex w-full justify-between">
        <Input
          label="그래픽직경"
          id="graphic_diameter"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="입력하세요."
          value={graphicDiameter}
          type="number"
          onChange={graphicDiameterValueChangeHandler}
        />
        <Input
          label="베이스커브"
          id="basecurve"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="입력하세요."
          value={basecurve}
          onChange={basecurveValueChangeHandler}
        />
      </div>
      <div className="flex w-full justify-between">
        <Input
          label="컬러"
          id="color"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="입력하세요."
          value={color}
          onChange={colorValueChangeHandler}
        />
        <Input
          label="컬러코드"
          id="colorCode"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="입력하세요."
          value={colorCode}
          onChange={colorCodeValueChangeHander}
        />
      </div>
      <div className="flex w-full justify-between">
        <Input
          label="소재"
          id="material"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="입력하세요."
          value={material}
          onChange={materialValueChangeHandler}
        />
        <Input
          label="옵션가격"
          id="detail_price"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="입력하세요."
          value={detailsPrice}
          onChange={detailPriceValueChangeHandler}
        />
      </div>
      <div className="flex w-full justify-between">
        <Input
          label="수분율"
          id="moisture"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="입력하세요."
          value={moisture}
          onChange={moistureValueChangeHandler}
        />
        <Input
          label="재고"
          id="product_details_stock"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="입력하세요."
          value={productDetailsStock}
          onChange={productDetailStockValueChangeHandler}
        />
      </div>
      <div className="flex justify-between">
        <SettingSwitcher title="할인중" id="isSale" onChange={isSaleValueChangeHandler} width="w-[50%]" />
        <SettingSwitcher
          title="옵션보이기"
          id="detailsExposure"
          onChange={detailsExposureValueChangeHandler}
          width="w-[50%]"
        />
      </div>
      <PeriodSwitcher onChange={periodValueChangeHandler} />
      <div>
        <p className=" mb-[1rem] w-[120px]  text-[#1B304A]">&#183; 상품 이미지 첨부</p>
        <p className="mb-[1rem] ml-[1rem] text-sm text-[red] ">띄어쓰기가 있는 파일명을 사용하지 마세요</p>
        <p className="mb-[1rem] ml-[1rem]  w-[120px]  text-sm text-[#1B304A]">&#183; 대표이미지</p>
        <ImageUploader multiple={true} value={imageList} onChange={mainImagesChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; 권장크기 640x640px</p>
          <p>&#183; 메인페이지 및 상세페이지에 업로드 되는 대표 이미지 설정입니다.</p>
        </div>
        <p className="mb-[1rem] ml-[1rem] flex w-[120px] items-center text-sm text-[#1B304A]">
          &#183; 상세이미지
        </p>
        <ImageUploader multiple={true} value={explanationImageList} onChange={detailImagesChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; 가로 860px</p>
          <p>&#183; 상세페이지에 업로드 되는 상품설명 이미지 설정입니다.</p>
        </div>
      </div>

      <p className="flex justify-center">
        <button
          type="button"
          className="flex h-[30px] w-[85px] cursor-pointer items-center  justify-center rounded-xl bg-[#1B304A] p-2  font-bold text-white"
          onClick={addOption}
        >
          옵션추가
        </button>
      </p>
      <div>
        <ul className="mt-8 flex flex-col items-center justify-center text-xs">
          {optionList.map((option: any, index: number) => (
            <li
              key={index}
              style={{ borderTop: '1px solid #DADADA' }}
              className="relative flex h-[45px] w-[80%] items-center justify-center"
            >
              <span className="absolute left-[50px] font-semibold">옵션 {index + 1} </span>
              <ul className="flex items-center justify-center">
                <li> {option.graphicDiameter} /</li>
                <li className="ml-1"> {option.basecurve} /</li>
                <li className="ml-1"> {option.color} /</li>
                <li className="ml-1"> {option.colorCode} /</li>
                <li className="ml-1"> {option.material} /</li>
                <li className="ml-1"> {option.detailPrice} /</li>
                <li className="ml-1"> {option.moisture} /</li>
                <li className="ml-1"> {option.isSale ? '할인 O' : '할인 X'} /</li>
                <li className="ml-1"> {option.detailsExposure ? '옵션보이기' : '옵션숨기기'} /</li>
                <li className="ml-1"> {option.period}</li>
                <button
                  className="absolute right-[50px] cursor-pointer border-none bg-white text-[#DADADA] hover:text-[red]"
                  onClick={() => deleteOption(index)}
                  type="button"
                >
                  X
                </button>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DetailInfoForm
