import ContentBox from '../ui/ContentBox'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import { useQuery } from 'react-query'

function OrderDetailPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const mainOrderInfo: any = location.state
  const params = useParams()

  async function getOrdersDetails() {
    const response = await fetch(
      `https://iko-lenssis.click/admin/insertProduct/admin/searchOrderById?orderId=${params.orderId}`
    )
    return response.json()
  }

  const fallback: string[] = []
  const { data: orderDetail = fallback } = useQuery(['orderDetail'], getOrdersDetails)

  const cancelClick = () => {
    navigate('/orderlist')
  }

  const orderStatus = (status: number) => {
    if (status === 0) {
      return '결제완료'
    } else if (status === 1) {
      return '상품준비중'
    } else if (status === 2) {
      return '배송중'
    } else {
      return '배송완료'
    }
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <h2 className="mt-[1.5rem] mb-[1rem] text-xl font-bold">주문 상세정보</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              상품주문번호
            </td>
            <td className="p-3 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.orderId}
            </td>
          </tr>
          <tr>
            <td
              className="w-[20%] bg-[#DADADA] p-3 pl-[1rem] align-middle "
              style={{ border: '1px solid #C2C9D1' }}
            >
              상품정보
            </td>
            <td className="p-3 align-middle" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              <div>
                {orderDetail.data &&
                  orderDetail.data.map((el: any) => {
                    return (
                      <ul key={el.productId}>
                        <div className="mb-[.5rem] ml-[1rem]">{`- ${el.productName} / ${el.series} / ${el.diameter}`}</div>
                        <div className="mb-[1rem] ml-[2rem]">
                          {el.detailsInfo.map((option: any, index: number) => {
                            return (
                              <li className="text-sm" key={option.productDetailsId}>{`옵션 ${index + 1}. ${
                                option.color
                              } / ${option.period}일 / ${option.graphicDiameter}mm / ${option.degree}도 / ${
                                option.pcs
                              }개`}</li>
                            )
                          })}
                        </div>
                      </ul>
                    )
                  })}
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              상품주문상태
            </td>
            <td className="w-[30%] p-2 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              결제완료
            </td>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              클레임
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              구매자명
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.orderer}
            </td>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              구매자 전화번호
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.phone}
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              총 상품금액
            </td>
            <td className="p-3 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.totalPrice}円
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="mt-[1.5rem] mb-[1rem] text-xl font-bold">배송 정보</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-2 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              발송지연사유
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              당일발송여부
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              발송기한
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              예약구매여부
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              발송처리일
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              발주확인일
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              배송방법
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              택배
            </td>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              배송완료일
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              택배사
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              구매확정일
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              송장번호
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              배송상세상태
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              {orderStatus(mainOrderInfo.orderInfo.status)}
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              오류송장등록사유
            </td>
            <td className="p-3 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              개인통관고유부호
            </td>
            <td className="p-3 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="mt-[1.5rem] mb-[1rem] text-xl font-bold">배송지 정보</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              수취인명
            </td>
            <td className="p-3 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.receiver}
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              전화번호1
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.receiverPhone}
            </td>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              전화번호2
            </td>
            <td className="w-[30%] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              배송주소
            </td>
            <td className="p-3 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.postCode} / {mainOrderInfo.orderInfo.address}
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              상세주소
            </td>
            <td className="p-3 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.detailAddress}
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              배송메모
            </td>
            <td className="p-3 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.shippingMessage}
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="mt-[1.5rem] mb-[1rem] text-xl font-bold">주문 처리 이력</h2>
      <table className="mb-[2rem] w-full">
        <tbody>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              주문
            </td>
            <td className="p-2 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
          <tr>
            <td className="w-[20%] bg-[#DADADA] p-3 pl-[1rem]" style={{ border: '1px solid #C2C9D1' }}>
              결제완료
            </td>
            <td className="p-3 pl-[1rem]" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mb-[5rem] flex justify-center">
        <Button
          type="button"
          width="w-[80px]"
          height="h-[40px]"
          bgColor="bg-white"
          textColor="text-[black]"
          borderColor="border-[#C2C9D1]"
          display="block"
          marginLeft="ml-[10px]"
          onClick={cancelClick}
        >
          닫기
        </Button>
      </div>
    </ContentBox>
  )
}

export default OrderDetailPage
