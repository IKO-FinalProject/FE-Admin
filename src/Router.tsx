import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AuthorizationWrapper from './component/layout/AuthorizationWrapper'
import Login from './component/app/Login'
import MainPage from './component/app/MainPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthorizationWrapper />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
