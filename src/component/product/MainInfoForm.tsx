import Input from '../ui/Input'
import SettingSwitcher from './SettingSwitcher'
import { useState, useEffect } from 'react'

function MainInfoForm({ mainInformHandler }: any) {
  //메인정보상태
  const [productTitle, setProductTitle] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [diameter, setDiameter] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [recommend, setRecommend] = useState(false)
  const [mainExposure, setMainExposure] = useState(false)
  const [seriesValue, setSeriesValue] = useState('')
  const [featureValue, setFeatureValue]: any = useState([])

  //메인정보핸들러
  const productTitleValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductTitle(e.target.value)
  }

  const priceValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }

  const discountValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(e.target.value)
  }

  const diameterValueChangeHandelr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiameter(e.target.value)
  }

  const manufacturerValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManufacturer(e.target.value)
  }

  const recommendValueChangeHandler = (e: any) => {
    setRecommend(e.target.value)
  }

  const mainExposureValueChangeHandler = (e: any) => {
    setMainExposure(e.target.value)
  }

  const seriesValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeriesValue(e.target.value)
  }

  const featureValueChangeHandler = (checked: boolean, feature: string) => {
    if (checked) {
      setFeatureValue([...featureValue, feature])
    } else {
      setFeatureValue(featureValue.filter((el: string) => el !== feature))
    }
  }

  useEffect(() => {
    mainInformHandler({
      productTitle,
      price,
      discount,
      diameter,
      manufacturer,
      recommend,
      mainExposure,
      seriesValue,
      featureValue
    })
  }, [
    productTitle,
    price,
    discount,
    diameter,
    manufacturer,
    recommend,
    mainExposure,
    seriesValue,
    featureValue
  ])

  const seriesList = ['에일린', '마리나', '샌드', '베티']
  const featureList = ['UV', '수분', '블루라이트', '실리콘']

  return (
    <>
      <div>
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
      </div>

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
    </>
  )
}

export default MainInfoForm
