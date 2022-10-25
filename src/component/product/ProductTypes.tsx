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

export type DetailInfoFormValue = {
  graphicDiameter: number
  basecurve: number
  color: string
  colorCode: string
  material: string
  detailPrice: number
  moisture: number
  productDetailsStock: number
  isSale: number
  detailsExposure: number
  period: number
  imageUrl: string[]
  explanationImageUrl: string[]
  degree: number[]
}

export type ProductSubmitValue = {
  productName: string
  price: number
  discount: number
  diameter: number
  manufacturer: string
  recommend: number
  exposure: number
  series: string
  feature: string[]
  productOptionSaveRequestList: DetailInfoFormValue[]
}

export type EditProductSubmitValue = {
  productName: string
  price: number
  discount: number
  diameter: number
  manufacturer: string
  recommend: number
  exposure: number
  series: string
  feature: string[]
  productOptionUpdateRequestList: DetailInfoFormValue[]
}

export type ProductItemType = {
  productId: number
  productName: string
  price: number
  discount: number
  diameter: number
  manufacturer: string
  series: string
  feature: string[]
}