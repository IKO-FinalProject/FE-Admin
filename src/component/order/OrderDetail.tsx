import ContentBox from '../ui/ContentBox'
import Headliner from '../ui/HeadLiner'
import { DummyDetail } from './Dummy'
import { useLocation, useParams } from 'react-router-dom'

import { useQuery } from 'react-query'
const { VITE_API } = import.meta.env

function OrderDetailPage() {
  const location = useLocation()
  const mainOrderInfo = location.state
  const params = useParams()

  console.log(location.state)

  async function getOrdersDetails() {
    const response = await fetch(`${VITE_API}/admin/searchOrderById?orderId=${params.orderId}`)
    return response.json()
  }

  const fallback: string[] = []
  const { data: orderDetail = fallback } = useQuery(['orderDetail'], getOrdersDetails)

  console.log(orderDetail.data)

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <Headliner>주문 상세정보</Headliner>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-[20%] p-2" style={{ border: '1px solid #C2C9D1' }}>
              상품주문번호
            </td>
            <td className="p-2" colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.orderId}
            </td>
          </tr>
          <tr>
            <td className="w-[20%] p-2" style={{ border: '1px solid #C2C9D1' }}>
              상품정보
            </td>
            <td colSpan={3} style={{ border: '1px solid #C2C9D1' }}>
              <div>
                {orderDetail.data &&
                  orderDetail.data.map((el: any) => {
                    return (
                      <ul key={el.productId}>
                        <div className="mb-[.5rem] ml-[1rem]">{`- ${el.productName} / ${el.series} / ${el.diameter}`}</div>
                        <div className="mb-[1rem] ml-[2rem]">
                          {el.detailsInfo.map((option, index: number) => {
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
            <td className="w-[20%] p-2" style={{ border: '1px solid #C2C9D1' }}>
              상품주문상태
            </td>
            <td className="w-[30%] p-2" style={{ border: '1px solid #C2C9D1' }}>
              {mainOrderInfo.orderInfo.status}
            </td>
            <td className="w-[20%] p-2" style={{ border: '1px solid #C2C9D1' }}>
              클레임
            </td>
            <td className="w-[30%] p-2" style={{ border: '1px solid #C2C9D1' }}>
              -
            </td>
          </tr>
        </tbody>
      </table>
    </ContentBox>
  )
}

export default OrderDetailPage
