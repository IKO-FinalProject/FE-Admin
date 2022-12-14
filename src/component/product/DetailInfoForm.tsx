import SettingSwitcher from './SettingSwitcher'
import PeriodSwitcher from './PeriodSwitcher'
import Input from '../ui/Input'
import ImageUploader from '../ui/ImageUploaer'
import { useState, useEffect } from 'react'
import { DetailInfoFormValue } from './ProductTypes'
const { VITE_BUCKET_NAME } = import.meta.env

type Props = {
  optionListHandler: React.Dispatch<React.SetStateAction<DetailInfoFormValue>>
  allImageDataListHandler: React.Dispatch<React.SetStateAction<DetailInfoFormValue>>
  initialValue?: DetailInfoFormValue
}

function DetailInfoForm({ optionListHandler, allImageDataListHandler, initialValue }: Props) {
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

  useEffect(() => {
    if (initialValue) {
      setOptionList(initialValue)
    }
  }, [initialValue])

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
      imageUrl.push(`https://${VITE_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${image.file.name}`)
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
      imgUrl.push(`https://${VITE_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${image.file.name}`)
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
      alert('?????? ????????? ?????? ???????????????!')
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
    setOptionList(
      optionList.filter((option: DetailInfoFormValue[], optionIndex: number) => optionIndex !== index)
    )
    setAllImageDataList(
      allImageDataList.filter((option: DetailInfoFormValue[], optionIndex: number) => optionIndex !== index)
    )
  }

  useEffect(() => {
    optionListHandler(optionList)
  }, [optionList])

  useEffect(() => {
    allImageDataListHandler(allImageDataList)
  }, [allImageDataList])

  return (
    <>
      <div className="flex w-full justify-between">
        <Input
          label="???????????????"
          id="graphic_diameter"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="???????????????."
          value={graphicDiameter}
          type="number"
          onChange={graphicDiameterValueChangeHandler}
        />
        <Input
          label="???????????????"
          id="basecurve"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="???????????????."
          value={basecurve}
          onChange={basecurveValueChangeHandler}
        />
      </div>
      <div className="flex w-full justify-between">
        <Input
          label="??????"
          id="color"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="???????????????."
          value={color}
          onChange={colorValueChangeHandler}
        />
        <Input
          label="????????????"
          id="colorCode"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="???????????????."
          value={colorCode}
          onChange={colorCodeValueChangeHander}
        />
      </div>
      <div className="flex w-full justify-between">
        <Input
          label="??????"
          id="material"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="???????????????."
          value={material}
          onChange={materialValueChangeHandler}
        />
        <Input
          label="????????????"
          id="detail_price"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="???????????????."
          value={detailsPrice}
          onChange={detailPriceValueChangeHandler}
        />
      </div>
      <div className="flex w-full justify-between">
        <Input
          label="?????????"
          id="moisture"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="???????????????."
          value={moisture}
          onChange={moistureValueChangeHandler}
        />
        <Input
          label="??????"
          id="product_details_stock"
          width="w-[50%]"
          inputWidth="w-[50%]"
          placeholder="???????????????."
          value={productDetailsStock}
          onChange={productDetailStockValueChangeHandler}
        />
      </div>
      <div className="flex justify-between">
        <SettingSwitcher
          justifyCenter="justify-center"
          title="?????????"
          id="isSale"
          onChange={isSaleValueChangeHandler}
          width="w-[50%]"
          initialValue={isSale}
        />
        <SettingSwitcher
          justifyCenter="justify-center"
          title="???????????????"
          id="detailsExposure"
          onChange={detailsExposureValueChangeHandler}
          width="w-[50%]"
          initialValue={detailsExposure}
        />
      </div>
      <PeriodSwitcher onChange={periodValueChangeHandler} />
      <div>
        <p className=" mb-[1rem] w-[120px]  text-[#1B304A]">&#183; ?????? ????????? ??????</p>
        <p className="mb-[1rem] ml-[1rem] text-sm text-[red] ">??????????????? ?????? ???????????? ???????????? ?????????</p>
        <p className="mb-[1rem] ml-[1rem]  w-[120px]  text-sm text-[#1B304A]">&#183; ???????????????</p>
        <ImageUploader multiple={true} value={imageList} onChange={mainImagesChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; ???????????? 640x640px</p>
          <p>&#183; ??????????????? ??? ?????????????????? ????????? ?????? ?????? ????????? ???????????????.</p>
        </div>
        <p className="mb-[1rem] ml-[1rem] flex w-[120px] items-center text-sm text-[#1B304A]">
          &#183; ???????????????
        </p>
        <ImageUploader multiple={true} value={explanationImageList} onChange={detailImagesChangeHandler} />
        <div className="mb-[1rem] ml-[1rem] text-sm text-[#DADADA]">
          <p>&#183; ?????? 860px</p>
          <p>&#183; ?????????????????? ????????? ?????? ???????????? ????????? ???????????????.</p>
        </div>
      </div>

      <p className="flex justify-center">
        <button
          type="button"
          className="flex h-[30px] w-[85px] cursor-pointer items-center  justify-center rounded-xl bg-[#1B304A] p-2  font-bold text-white"
          onClick={addOption}
        >
          ????????????
        </button>
      </p>
      <div>
        <ul className="mt-8 flex flex-col items-center justify-center text-xs">
          {optionList.map((option: any, index: number) => (
            <li
              key={index}
              style={{ borderTop: '1px solid #DADADA' }}
              className="relative flex h-[45px] w-full items-center justify-center"
            >
              <span className="absolute left-[50px] font-semibold">?????? {index + 1} </span>
              <ul className="flex  items-center justify-center">
                <li> {option.graphicDiameter}mm /</li>
                <li className="ml-1"> {option.basecurve}mm /</li>
                <li className="ml-1"> {option.color} /</li>
                <li className="ml-1"> {option.colorCode} /</li>
                <li className="ml-1"> {option.material} /</li>
                <li className="ml-1"> {option.detailsPrice}??? /</li>
                <li className="ml-1"> {option.moisture}% /</li>
                <li className="ml-1"> {option.isSale ? '?????? O' : '?????? X'} /</li>
                <li className="ml-1"> {option.detailsExposure ? '???????????????' : '???????????????'} /</li>
                <li className="ml-1"> {option.period}day</li>
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
