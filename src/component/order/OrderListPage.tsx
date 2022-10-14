import ContentBox from '../ui/ContentBox'
import Headliner from '../ui/HeadLiner'
import Button from '../ui/Button'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'
const { VITE_API } = import.meta.env

async function getOrders() {
  const response = await fetch(`${VITE_API}/admin/allOrderInfo`)
  return response.json()
}

function OrderListPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [checkItems, setCheckItems]: any = useState([])
  const queryClient = useQueryClient()
  const fallback: string[] = []
  const { data: orderList = fallback } = useQuery(['orderList', currentPage], getOrders)

  const checkboxHandler = (e: { target: { checked: any; value: any } }) => {
    if (e.target.checked) {
      setCheckItems([...checkItems, e.target.value])
    } else {
      setCheckItems(checkItems.filter((el: any) => el !== e.target.value))
    }
  }

  async function updateOrderStatus(submitValue: any) {
    const response = await fetch(`${VITE_API}/admin/updateOrderStatus`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitValue)
    })
    return response.json()
  }

  const { mutate } = useMutation((submitValue: any) => updateOrderStatus(submitValue), {
    onSuccess: () => {
      queryClient.invalidateQueries(['orderList', currentPage])
    }
  })

  const updateOrderStatusHandler = (e: any) => {
    const status = e.target.value
    checkItems.map((orderId: string) => {
      const submitValue = { orderId, status }
      mutate(submitValue)
    })
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
      <Headliner>주문목록</Headliner>
      <div className="relative mb-[50px] flex">
        <div className="absolute right-0 flex">
          <select
            id="orderSearch"
            value="default"
            className=" h-[30px] w-[126px] rounded-lg border-[#C4C4C4] pl-[5px]"
            onChange={updateOrderStatusHandler}
          >
            <option value="default">배송상태변경</option>
            <option value="1">상품준비중</option>
            <option value="2">배송중</option>
            <option value="3">배송완료</option>
          </select>
          <select
            id="orderSearch"
            className="  ml-[10px] h-[30px] w-[105px] rounded-lg border-[#C4C4C4] pl-[5px]"
          >
            <option value="수취인명">10개씩</option>
          </select>
          <Button
            type="button"
            width="w-[110px]"
            height="h-[30px]"
            bgColor="bg-white"
            textColor="text-[black]"
            borderColor="border-[#C2C9D1]"
            display="block"
            marginLeft="ml-[10px]"
          >
            엑셀 일괄작업
          </Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="m-auto w-[2000px] text-center" style={{ border: '1px solid #C2C9D1 ' }}>
          <thead>
            <tr className="h-[40px]   bg-[#E6E8ED]">
              <th className=" w-[45px] align-middle" style={{ border: '1px solid #C2C9D1' }}>
                <input type="checkbox" name="xxx" value="yyy" />
              </th>
              <th className="w-[145px] align-middle" style={{ border: '1px solid #C2C9D1' }}>
                주문번호
              </th>
              <th className="w-[100px] align-middle" style={{ border: '1px solid #C2C9D1' }}>
                주문일시
              </th>
              <th className="w-[100px] align-middle" style={{ border: '1px solid #C2C9D1' }}>
                주문상태
              </th>
              <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                상품명
              </th>
              <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                주문자명
              </th>
              <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                수취인명
              </th>
              <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                수취인 전화번호
              </th>
              <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                수취인 주소
              </th>
              <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                상세주소
              </th>
              <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                배송메시지
              </th>
              <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                결제금액
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList.data &&
              orderList.data.map((order: any) => {
                return (
                  <tr className=" w-full " key={order.orderInfo.orderId}>
                    <th className=" p-2 align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      <input
                        className=""
                        type="checkbox"
                        name="orderList"
                        value={order.orderInfo.orderId}
                        onChange={checkboxHandler}
                      />
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      <Link to={`/orderlist/${order.orderInfo.orderId}`} state={order}>
                        {order.orderInfo.orderId}
                      </Link>
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {order.orderInfo.orderCreatedAt}
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {orderStatus(order.orderInfo.status)}
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {order.productName}
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {order.orderInfo.orderer}
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {order.orderInfo.receiver}
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {order.orderInfo.receiverPhone}
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {order.orderInfo.address}
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {order.orderInfo.detailAddress}
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {order.orderInfo.shippingMessage}
                    </th>
                    <th className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                      {order.orderInfo.totalPrice}円
                    </th>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </ContentBox>
  )
}

export default OrderListPage
