import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import MainWrapper from './component/layout/MainWrapper'
import ProductListPage from './component/product/ProductListPage'
import EditProductPage from './component/product/EditProductPage'
import AddProductPage from './component/product/AddProductPage'
import RelativeProductPage from './component/product/RelativeProductPage'
import OrderListPage from './component/order/OrderListPage'
import OrderDetailPage from './component/order/OrderDetail'
import OrderMangePage from './component/order/OrderManagePage'
import ShippingMangePage from './component/order/ShippingManagePage'
import NoticeListPage from './component/notice/NoticeListPage'
import NoticeDetailPage from './component/notice/NoticeDetailPage'
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
          <Route element={<MainWrapper />}>
            <Route path="/" element={<OrderListPage />} />
            <Route path="/productlist" element={<ProductListPage />} />
            <Route path="/productlist/:productId" element={<EditProductPage />} />
            <Route path="/addproduct" element={<AddProductPage />} />
            <Route path="/relativeproduct" element={<RelativeProductPage />} />
            <Route path="/orderlist" element={<OrderListPage />} />
            <Route path="/orderlist/:orderId" element={<OrderDetailPage />} />
            <Route path="/ordermanage" element={<OrderMangePage />} />
            <Route path="/shippingmanage" element={<ShippingMangePage />} />
            <Route path="/noticelist" element={<NoticeListPage />} />
            <Route path="/noticelist/:noticeId" element={<NoticeDetailPage />} />
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
