import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AuthorizationWrapper from './component/layout/AuthorizationWrapper'
import Login from './component/app/Login'
import MainPage from './component/app/MainPage'
import ProductList from './component/product/ProductList'
import OrderList from './component/order/OrderList'
import NoticeList from './component/notice/NoticeList'
import EventList from './component/event/EventList'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthorizationWrapper />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/noticelist" element={<NoticeList />} />
          <Route path="/eventlist" element={<EventList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
