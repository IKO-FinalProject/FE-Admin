import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

async function getProducts() {
  const response = await fetch('https://todo-api.roto.codes/choi')
  return response.json()
}

function ProductListPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const fallback: string[] = []
  const { data: product = fallback } = useQuery(['productsList', currentPage], getProducts)
  console.log(product)

  return <div>{product[0] && product[0].content}</div>
}

export default ProductListPage
