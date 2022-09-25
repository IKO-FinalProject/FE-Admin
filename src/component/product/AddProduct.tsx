import ContentBox from '../ui/ContentBox'
import Input from '../ui/Input'
import ImageUploader from '../ui/ImageUploaer'
import SettingSwitcher from './SettingSwitcher'
import PeriodSwitcher from './PeriodSwitcher'

import { useState } from 'react'

function AddProduct() {
  //메인정보상태
  const [productTitle, setProductTitle] = useState(null)
  const [price, setPrice] = useState(null)
  const [discount, setDiscount] = useState(null)
  const [diameter, setDiameter] = useState(null)
  const [manufacturer, setManufacturer] = useState(null)
  const [recommend, setRecommend] = useState(false)
  const [mainExposure, setMainExposure] = useState(false)
  const [seriesValue, setSeriesValue] = useState(null)
  const [featureValue, setFeatureValue]: any = useState([])

  //메인정보핸들러
  const productTitleValueChangeHandler = (e: any) => {
    setProductTitle(e.target.value)
  }

  const priceValueChangeHandler = (e: any) => {
    setPrice(e.target.value)
  }

  const discountValueChangeHandler = (e: any) => {
    setDiscount(e.target.value)
  }

  const diameterValueChangeHandelr = (e: any) => {
    setDiameter(e.target.value)
  }

  const manufacturerValueChangeHandler = (e: any) => {
    setManufacturer(e.target.value)
  }

  const recommendValueChangeHandler = (e: any) => {
    setRecommend(e.target.value)
  }

  const mainExposureValueChangeHandler = (e: any) => {
    setMainExposure(e.target.value)
  }

  const seriesValueChangeHandler = (e: any) => {
    setSeriesValue(e.target.value)
  }

  const featureValueChangeHandler = (checked: boolean, feature: any) => {
    if (checked) {
      setFeatureValue([...featureValue, feature])
    } else {
      setFeatureValue(featureValue.filter((el: any) => el !== feature))
    }
  }

  //상세정보상태
  const [graphicDiameter, setGraphicDiameter] = useState(null)
  const [basecurve, setBasecurve] = useState(null)
  const [color, setColor] = useState(null)
  const [colorCode, setColorCode] = useState(null)
  const [material, setMaterial] = useState(null)
  const [detailPrice, setDetailPrice] = useState(null)
  const [moisture, setMoisture] = useState(null)
  const [productDetailStock, setProductDetailStock] = useState(null)

  const [isSale, setIsSale] = useState(false)
  const [detailsExposure, setDetailsExposure] = useState(false)
  const [period, setPeriod] = useState(null)
  const [mainImages, setMainImages] = useState([])
  const [detailImages, setDetailImages] = useState([])

  //상세정보핸들러
  const graphicDiameterValueChangeHandler = (e: any) => {
    setGraphicDiameter(e.target.value)
  }

  const basecurveValueChangeHandler = (e: any) => {
    setBasecurve(e.target.value)
  }

  const colorValueChangeHandler = (e: any) => {
    setColor(e.target.value)
  }

  const colorCodeValueChangeHander = (e: any) => {
    setColorCode(e.target.value)
  }

  const detailPriceValueChangeHandler = (e: any) => {
    setDetailPrice(e.target.value)
  }

  const materialValueChangeHandler = (e: any) => {
    setMaterial(e.target.value)
  }

  const moistureValueChangeHandler = (e: any) => {
    setMoisture(e.target.value)
  }

  const productDetailStockValueChangeHandler = (e: any) => {
    setProductDetailStock(e.target.value)
  }

  const isSaleValueChangeHandler = (e: any) => {
    setIsSale(e.target.value)
  }

  const detailsExposureValueChangeHandler = (e: any) => {
    setDetailsExposure(e.target.value)
  }

  const periodValueChangeHandler = (e: any) => {
    setPeriod(e.target.value)
    console.log(e.target.value)
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

  /////////////////////////////////////////////////////////////////////////////////
  const seriesList = ['에일린', '마리나', '샌드', '베티']
  const featureList = ['UV', '수분', '블루라이트', '실리콘']

  const [option, setOption] = useState({
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
  })

  const [optionList, setOptionList]: any = useState([])

  const addOption = () => {
    setOption({
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
    })
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
  }

  return (
    <>
      <ContentBox marginBottom="mb-[20px]" marginRight="mr-[20px]">
        <div className="mb-5" style={{ borderBottom: '1px solid #C4C4C4' }}>
          <h1
            className="flex h-[30px] w-[110px] items-center justify-center  text-[.9rem] font-bold drop-shadow-2xl"
            style={{ borderBottom: '3px solid #A4C8E1', textShadow: '0 3px #C4C4C4' }}
          >
            메인정보 입력
          </h1>
        </div>
        <form>
          <Input
            label="상품명"
            id="product_title"
            inputWidth="w-full"
            placeholder="상품명을 입력하세요."
            onChange={productTitleValueChangeHandler}
          />
          <Input
            label="대표 가격"
            id="price"
            inputWidth="w-full"
            placeholder="대표가격을 입력하세요."
            onChange={priceValueChangeHandler}
          />
          <Input
            label="할인률"
            id="discount"
            inputWidth="w-full"
            placeholder="할인률을 입력하세요."
            onChange={discountValueChangeHandler}
          />
          <Input
            label="직경"
            id="diameter"
            inputWidth="w-full"
            placeholder="그래픽 직경을 입력하세요."
            onChange={diameterValueChangeHandelr}
          />
          <Input
            label="생산지"
            id="manufacturer"
            inputWidth="w-full"
            placeholder="생산지를 입력하세요."
            onChange={manufacturerValueChangeHandler}
          />
        </form>

        <div className="flex justify-between">
          <SettingSwitcher
            title="추천상품"
            id="recommend"
            onChange={recommendValueChangeHandler}
            width="w-[50%]"
          />
          <SettingSwitcher
            title="상품보이기"
            id="mainExposure"
            onChange={mainExposureValueChangeHandler}
            width="w-[50%]"
          />
        </div>

        <div className="ml-[108px] mb-[2rem] flex justify-between">
          <div className="h-[250px] w-[45%] rounded-xl bg-[#F4F4F4] p-2">
            {seriesList.map((series) => (
              <div key={series}>
                <input
                  type="radio"
                  name="series"
                  id={series}
                  className="peer hidden"
                  value={series}
                  onChange={seriesValueChangeHandler}
                />
                <label
                  htmlFor={series}
                  className="block cursor-pointer select-none p-2 text-sm peer-checked:bg-[#D4D4D4] peer-checked:font-bold"
                >
                  &#8226; {series}
                </label>
              </div>
            ))}
          </div>

          <div className="h-[250px] w-[45%] rounded-xl bg-[#F4F4F4] p-2">
            {featureList.map((feature: any) => (
              <div key={feature}>
                <input
                  type="checkbox"
                  name="feature"
                  id={feature}
                  className="peer hidden"
                  value={feature}
                  onChange={(e) => {
                    featureValueChangeHandler(e.target.checked, e.target.value)
                  }}
                  checked={featureValue.includes(feature) ? true : false}
                />

                <label
                  htmlFor={feature}
                  className="block cursor-pointer select-none p-2 text-sm peer-checked:bg-[#D4D4D4] peer-checked:font-bold"
                >
                  &#8226; {feature}
                </label>
              </div>
            ))}
          </div>
        </div>
      </ContentBox>

      <ContentBox marginBottom="mb-[50px]" marginRight="mr-[20px]">
        <div className="mb-5" style={{ borderBottom: '1px solid #C4C4C4' }}>
          <h1
            className="flex h-[30px] w-[110px] items-center justify-center  text-[.9rem] font-bold drop-shadow-2xl"
            style={{ borderBottom: '3px solid #A4C8E1', textShadow: '0 3px #C4C4C4' }}
          >
            상세정보 입력
          </h1>
        </div>
        <div className="flex w-full justify-between">
          <Input
            label="그래픽직경"
            id="graphic_diameter"
            width="w-[50%]"
            inputWidth="w-[50%]"
            placeholder="입력하세요."
            onChange={graphicDiameterValueChangeHandler}
          />
          <Input
            label="베이스커브"
            id="basecurve"
            width="w-[50%]"
            inputWidth="w-[50%]"
            placeholder="입력하세요."
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
            onChange={colorValueChangeHandler}
          />
          <Input
            label="컬러코드"
            id="colorCode"
            width="w-[50%]"
            inputWidth="w-[50%]"
            placeholder="입력하세요."
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
            onChange={materialValueChangeHandler}
          />
          <Input
            label="옵션가격"
            id="detail_price"
            width="w-[50%]"
            inputWidth="w-[50%]"
            placeholder="입력하세요."
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
            onChange={moistureValueChangeHandler}
          />
          <Input
            label="재고"
            id="product_details_stock"
            width="w-[50%]"
            inputWidth="w-[50%]"
            placeholder="입력하세요."
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
          <ul>
            {optionList.map((option: any, index: number) => (
              <li key={index}>
                <span>옵션 {index + 1}</span> {option.graphicDiameter} / {option.basecurve} / {option.color} /
                {option.colorCode} / {option.material} / {option.detailPrice} / {option.moisture} /
                {option.isSale && '할인중 /'} {option.detailsExposure ? '옵션보이기' : '옵션숨기기'} /
                {option.period}
              </li>
            ))}
          </ul>
        </div>
      </ContentBox>
    </>
  )
}

export default AddProduct
