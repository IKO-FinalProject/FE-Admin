import SettingSwitcher from './SettingSwitcher'
import PeriodSwitcher from './PeriodSwitcher'
import Input from '../ui/Input'
import ImageUploader from '../ui/ImageUploaer'

import { useState, useEffect } from 'react'

function DetailInfoForm({ optionListHandler }: any) {
  const [graphicDiameter, setGraphicDiameter] = useState('')
  const [basecurve, setBasecurve] = useState('')
  const [color, setColor] = useState('')
  const [colorCode, setColorCode] = useState('')
  const [material, setMaterial] = useState('')
  const [detailPrice, setDetailPrice] = useState('')
  const [moisture, setMoisture] = useState('')
  const [productDetailStock, setProductDetailStock] = useState('')

  const [isSale, setIsSale] = useState(false)
  const [detailsExposure, setDetailsExposure] = useState(false)
  const [period, setPeriod] = useState('먼슬리')
  const [mainImages, setMainImages] = useState([])
  const [detailImages, setDetailImages] = useState([])

  const graphicDiameterValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGraphicDiameter(e.target.value)
  }

  const basecurveValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBasecurve(e.target.value)
  }

  const colorValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  const colorCodeValueChangeHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorCode(e.target.value)
  }

  const detailPriceValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailPrice(e.target.value)
  }

  const materialValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterial(e.target.value)
  }

  const moistureValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoisture(e.target.value)
  }

  const productDetailStockValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetailStock(e.target.value)
  }

  const isSaleValueChangeHandler = (e: any) => {
    setIsSale(e.target.value)
  }

  const detailsExposureValueChangeHandler = (e: any) => {
    setDetailsExposure(e.target.value)
  }

  const periodValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(e.target.value)
  }

  const mainImagesChangeHandler = (imagelist: any) => {
    setMainImages(imagelist)
    const formData = new FormData()
    formData.append('image', imagelist)
  }

  const detailImagesChangeHandler = (imagelist: any) => {
    setDetailImages(imagelist)
    const formData = new FormData()
    formData.append('image', imagelist)
  }
  const [optionList, setOptionList]: any = useState([])

  const addOption = () => {
    if (
      graphicDiameter.length === 0 ||
      basecurve.length === 0 ||
      color.length === 0 ||
      colorCode.length === 0 ||
      material.length === 0 ||
      detailPrice.length === 0 ||
      moisture.length === 0 ||
      productDetailStock.length === 0 ||
      mainImages.length === 0 ||
      detailImages.length === 0
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
        detailPrice,
        moisture,
        productDetailStock,
        isSale,
        detailsExposure,
        period,
        mainImages,
        detailImages
      }
    ])
    setGraphicDiameter('')
    setBasecurve('')
    setColor('')
    setColorCode('')
    setMaterial('')
    setDetailPrice('')
    setMoisture('')
    setProductDetailStock('')
    setMainImages([])
    setDetailImages([])
  }

  const deleteOption = (index: number) => {
    setOptionList(optionList.filter((option: object[], optionIndex: number) => optionIndex !== index))
  }

  useEffect(() => {
    optionListHandler(optionList)
  }, [optionList])

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
          value={detailPrice}
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
          value={productDetailStock}
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
        <p className="mb-[1rem] ml-[1rem]  w-[120px]  text-sm text-[#1B304A]">&#183; 대표이미지</p>
        <ImageUploader value={mainImages} onChange={mainImagesChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; 권장크기 640x640px</p>
          <p>&#183; 메인페이지 및 상세페이지에 업로드 되는 대표 이미지 설정입니다.</p>
        </div>
        <p className="mb-[1rem] ml-[1rem] flex w-[120px] items-center text-sm text-[#1B304A]">
          &#183; 상세이미지
        </p>
        <ImageUploader value={detailImages} onChange={detailImagesChangeHandler} />
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
