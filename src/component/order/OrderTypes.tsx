export type mainOrderInfoType = {
  orderInfo: {
    address: string
    couponId: number
    detailAddress: string
    email: string
    method: number
    orderCreatedAt: string
    orderId: number
    orderer: string
    phone: string
    point: number
    postCode: number
    receiver: string
    receiverPhone: string
    shippingMessage: string
    status: number
    totalPrice: number
  }
  productName: string[]
}
export type orderDetailInfoType = {
  detailsInfo: orderDetailsOptionInfoType[]
  diameter: number
  discount: number
  feature: string[]
  manufacturer: string
  productId: number
  productName: string
  series: string
}
export type orderDetailsOptionInfoType = {
  basecurve: number
  color: string
  colorCode: string
  degree: number
  graphicDiameter: number
  material: string
  moisture: number
  pcs: number
  period: number
  price: number
  productDetailsId: number
}
export type statusSubmitType = {
  orderId: number
  status: number
}
