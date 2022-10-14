import ContentBox from '../ui/ContentBox'
import Button from '../ui/Button'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { MdRefresh } from 'react-icons/md'
import { Link } from 'react-router-dom'

async function getOrders() {
  const response = await fetch(`https://iko-lenssis.click/admin/allOrderInfo`)
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
    const response = await fetch(`https://iko-lenssis.click/admin/updateOrderStatus`, {
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

  const refreshHandler = () => {
    queryClient.invalidateQueries(['orderList', currentPage])
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
    <ContentBox marginBottom="mb-[40px] pb-[100px]" marginRight="mr-[20px]">
      <h1
        className="relative mb-5 flex pb-2 text-[.9rem] font-bold"
        style={{ borderBottom: '1px solid #C4C4C4' }}
      >
        <div>주문목록</div>
        <div>
          (총 <span className="text-[#73A4CA]">{orderList.data && orderList.data.length}</span>개)
        </div>
        <div className="absolute right-0 mt-[3px] flex text-xs text-[#BCBCBC]">
          <div className="mt-[3px]">목록 새로고침</div>
          <div className="ml-[5px]  cursor-pointer  hover:text-[#73A4CA]" onClick={refreshHandler}>
            <MdRefresh size="20" />
          </div>
        </div>
      </h1>
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
            <img
              className="mr-[3px] mb-[2px] h-[15px] w-[15px]"
              src="data:image/png;base64,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"
            />
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
