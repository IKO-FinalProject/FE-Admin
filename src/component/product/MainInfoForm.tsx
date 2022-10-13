import Input from '../ui/Input'
import SettingSwitcher from './SettingSwitcher'
import { useState, useEffect } from 'react'

export type MainInfoFormValue = {
  productName: string
  price: number
  discount: number
  diameter: number
  manufacturer: string
  recommend: number
  exposure: number
  series: string
  feature: string[]
}

type Props = {
  mainInformHandler: React.Dispatch<React.SetStateAction<MainInfoFormValue>>
}

function MainInfoForm({ mainInformHandler }: Props) {
  //메인정보상태
  const [productName, setProductName] = useState<MainInfoFormValue['productName']>('')
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [diameter, setDiameter] = useState(0)
  const [manufacturer, setManufacturer] = useState('')
  const [recommend, setRecommend] = useState(0)
  const [exposure, setExposure] = useState(0)
  const [series, setSeries] = useState('')
  const [feature, setFeature] = useState<MainInfoFormValue['feature']>([])
  const seriesList = ['에일린', '마리나', '샌드', '베티']
  const featureList = ['UV', '수분', '블루라이트', '실리콘']

  //메인정보핸들러
  const productTitleValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // mainInformHandler(prev => ({
    //   ...prev,
    //   productTitle: e.target.value,
    // }))
    setProductName(e.target.value)
  }

  const priceValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
  }

  const discountValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(Number(e.target.value))
  }

  const diameterValueChangeHandelr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiameter(Number(e.target.value))
  }

  const manufacturerValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManufacturer(e.target.value)
  }

  const recommendValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecommend(Number(e.target.value))
  }

  const mainExposureValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExposure(Number(e.target.value))
  }

  const seriesValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeries(e.target.value)
  }

  const featureValueChangeHandler = (checked: boolean, newFeature: string) => {
    if (checked) {
      setFeature([...feature, newFeature])
    } else {
      setFeature(feature.filter((el) => el !== newFeature))
    }
  }

  useEffect(() => {
    mainInformHandler({
      productName,
      price,
      discount,
      diameter,
      manufacturer,
      recommend,
      exposure,
      series,
      feature
    })
  }, [productName, price, discount, diameter, manufacturer, recommend, exposure, series, feature])

  return (
    <>
      <div>
        <Input
          label="상품명"
          id="product_title"
          inputWidth="w-full"
          placeholder="상품명을 입력하세요."
          value={productName}
          onChange={productTitleValueChangeHandler}
        />
        <Input
          label="대표 가격"
          id="price"
          inputWidth="w-full"
          value={price}
          onChange={priceValueChangeHandler}
          type="number"
        />
        <Input
          label="할인률"
          id="discount"
          inputWidth="w-full"
          value={discount}
          onChange={discountValueChangeHandler}
          type="number"
        />
        <Input
          label="직경"
          id="diameter"
          inputWidth="w-full"
          value={diameter}
          type="number"
          onChange={diameterValueChangeHandelr}
        />
        <Input
          label="생산지"
          id="manufacturer"
          inputWidth="w-full"
          value={manufacturer}
          placeholder="생산지를 입력하세요."
          onChange={manufacturerValueChangeHandler}
        />
      </div>

      <div className="flex justify-between">
        <SettingSwitcher
          title="추천상품"
          id="recommend"
          onChange={recommendValueChangeHandler}
          justifyCenter="justify-center"
          width="w-[50%]"
        />
        <SettingSwitcher
          title="상품보이기"
          id="mainExposure"
          onChange={mainExposureValueChangeHandler}
          justifyCenter="justify-center"
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
          {featureList.map((el) => (
            <div key={el}>
              <input
                type="checkbox"
                name="feature"
                id={el}
                className="peer hidden"
                value={el}
                onChange={(e) => {
                  featureValueChangeHandler(e.target.checked, e.target.value)
                }}
                checked={feature.includes(el) ? true : false}
              />

              <label
                htmlFor={el}
                className="block cursor-pointer select-none p-2 text-sm peer-checked:bg-[#D4D4D4] peer-checked:font-bold"
              >
                &#8226; {el}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainInfoForm
