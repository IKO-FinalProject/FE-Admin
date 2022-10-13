type itemType = {
  productId: number
  productName: string
  price: number
  discount: number
  diameter: number
  manufacturer: string
}

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Headliner from '../ui/HeadLiner'
import ContentBox from '../ui/ContentBox'
import Button from '../ui/Button'
import DUMMY from './DUMMY'

const { VITE_API } = import.meta.env

async function getProducts() {
  const response = await fetch(`${VITE_API}/admin/allProductInfo`)
  return response.json()
}

function ProductListPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const fallback: string[] = []
  const { data: product = fallback } = useQuery(['productsList', currentPage], getProducts)

  const Dummy: itemType[] = DUMMY

  return (
    <ContentBox marginBottom="mb-[40px]" marginRight="mr-[20px]">
      <Headliner>상품목록</Headliner>
      <div className="relative flex">
        <Button
          type="button"
          width="w-[75px]"
          height="h-[30px]"
          bgColor="bg-[#1B304A]"
          textColor="text-white"
        >
          선택 삭제
        </Button>
        <div className="absolute right-0">
          <select id="orderSearch" className=" h-[30px] w-[126px] rounded-lg border-[#C4C4C4] text-[#C4C4C4]">
            <option value="">상품등록일순</option>
          </select>
          <select
            id="orderSearch"
            className="  ml-[10px] h-[30px] w-[105px] rounded-lg border-[#C4C4C4] text-[#C4C4C4]"
          >
            <option value="수취인명">10개씩</option>
          </select>
        </div>
      </div>
      <table
        className="m-auto mt-[20px] h-[500px] w-full text-center"
        style={{ border: '1px solid #C2C9D1' }}
      >
        <thead>
          <tr className="h-[40px] w-full bg-[#E6E8ED]">
            <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
              <input type="checkbox" name="xxx" value="yyy" />
            </th>
            <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
              수정
            </th>
            <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
              복사
            </th>
            <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
              상품번호
            </th>
            <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
              상품명
            </th>
            <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
              대표가격
            </th>
            <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
              할인율
            </th>
            <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
              직경
            </th>
            <th className=" align-middle" style={{ border: '1px solid #C2C9D1' }}>
              생산지
            </th>
          </tr>
        </thead>
        <tbody>
          {product.data &&
            product.data.map((item: itemType) => {
              return (
                <tr className=" w-full" key={item.productId}>
                  <td className="p-2 align-middle" style={{ border: '1px solid #C2C9D1' }}>
                    <input className="" type="checkbox" name={item.productName} value={item.productId} />
                  </td>
                  <td className="w-[70px] align-middle" style={{ border: '1px solid #C2C9D1' }}>
                    <Button
                      type="button"
                      width="w-[50px]"
                      height="h-[30px]"
                      bgColor="bg-white"
                      textColor="text-[#C2C9D1]"
                      borderColor="border-[#C2C9D1]"
                      display="block"
                      margin="m-auto"
                    >
                      수정
                    </Button>
                  </td>
                  <td className="w-[70px] align-middle" style={{ border: '1px solid #C2C9D1' }}>
                    <Button
                      type="button"
                      width="w-[50px]"
                      height="h-[30px]"
                      bgColor="bg-[#1B304A]"
                      textColor="text-white"
                      display="block"
                      margin="m-auto"
                    >
                      복사
                    </Button>
                  </td>
                  <td className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                    {item.productId}
                  </td>
                  <td className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                    {item.productName}
                  </td>
                  <td className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                    {item.price}円
                  </td>
                  <td className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                    {item.discount}%
                  </td>
                  <td className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                    {item.diameter}mm
                  </td>
                  <td className="align-middle" style={{ border: '1px solid #C2C9D1' }}>
                    {item.manufacturer}
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </ContentBox>
  )
}

export default ProductListPage
