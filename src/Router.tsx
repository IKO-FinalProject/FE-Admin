import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import MainWrapper from './component/layout/MainWrapper'
import Login from './component/app/Login'
import MainPage from './component/app/MainPage'
import ProductListPage from './component/product/ProductListPage'
import AddProductPage from './component/product/AddProductPage'
import OrderListPage from './component/order/OrderListPage'
import NoticeListPage from './component/notice/NoticeListPage'
import AddNoticePage from './component/notice/AddNoticePage'
import EventListPage from './component/event/EventListPage'
import EventDetailPage from './component/event/EventDetailPage'
import AddEventPage from './component/event/AddEventPage'

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
            <Route path="/productlist" element={<ProductListPage />} />
            <Route path="/addproduct" element={<AddProductPage />} />
            <Route path="/orderlist" element={<OrderListPage />} />
            <Route path="/noticelist" element={<NoticeListPage />} />
            <Route path="/addnotice" element={<AddNoticePage />} />
            <Route path="/eventlist" element={<EventListPage />} />
            <Route path="/eventlist/:eventId" element={<EventDetailPage />} />
            <Route path="/addevent" element={<AddEventPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
