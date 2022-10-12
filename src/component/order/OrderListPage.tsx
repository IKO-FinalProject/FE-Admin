import ContentBox from '../ui/ContentBox'
import Headliner from '../ui/HeadLiner'
import Button from '../ui/Button'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
const { VITE_API } = import.meta.env

async function getOrders() {
  const response = await fetch(`${VITE_API}/admin/allOrderInfo`)
  return response.json()
}

function OrderListPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [checkItems, setCheckItems]: any = useState([])

  const fallback: string[] = []
  const { data: orderList = fallback } = useQuery(['orderList', currentPage], getOrders)
  console.log(orderList)
  const checkboxHandler = (e: { target: { checked: any; value: any } }) => {
    if (e.target.checked) {
      setCheckItems([...checkItems, e.target.value])
    } else {
      setCheckItems(checkItems.filter((el: any) => el !== e.target.value))
    }
  }

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <Headliner>주문목록</Headliner>
      <div className="relative mb-[50px] flex">
        <div className="absolute right-0 flex">
          <select id="orderSearch" className=" h-[30px] w-[126px] rounded-lg border-[#C4C4C4] ">
            <option value="">배송상태변경</option>
            <option value="">상품준비중</option>
            <option value="">배송중</option>
            <option value="">배송완료</option>
          </select>
          <select id="orderSearch" className="  ml-[10px] h-[30px] w-[105px] rounded-lg border-[#C4C4C4] ">
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
        <table className="m-auto w-[2500px] text-center" style={{ border: '1px solid #C2C9D1 ' }}>
          <thead>
            <tr className="h-[40px]   bg-[#E6E8ED]">
              <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
                <input type="checkbox" name="xxx" value="yyy" />
              </th>
              <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
                주문번호
              </th>
              <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
                주문일시
              </th>
              <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
                주문상태
              </th>
              <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
                상품명
              </th>
              <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
                주문자명
              </th>
              <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
                수취인명
              </th>
              <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
                수취인 전화번호
              </th>
              <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
                수취인 주소
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList.data &&
              orderList.data.map((order: any) => {
                return (
                  <tr className=" w-full" key={order.orderInfo.orderId}>
                    <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
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
                      {order.orderInfo.status}
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
                      {order.orderInfo.postCode}
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
