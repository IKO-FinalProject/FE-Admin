import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import MainWrapper from './component/layout/MainWrapper'
import Login from './component/app/Login'
import MainPage from './component/app/MainPage'
import ProductList from './component/product/ProductList'
import AddProduct from './component/product/AddProduct'
import OrderList from './component/order/OrderList'
import NoticeList from './component/notice/NoticeList'
import AddNotice from './component/notice/AddNotice'
import EventList from './component/event/EventList'
import AddEvent from './component/event/AddEvent'

const Router = () => {
  function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainWrapper />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/orderlist" element={<OrderList />} />
            <Route path="/noticelist" element={<NoticeList />} />
            <Route path="/addnotice" element={<AddNotice />} />
            <Route path="/eventlist" element={<EventList />} />
            <Route path="/addevent" element={<AddEvent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
