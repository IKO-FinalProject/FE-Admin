import { Outlet } from 'react-router-dom'
import Header from '../app/Header'
import NavBar from '../app/NavBar'

function AuthorizationWrapper() {
  return (
    <>
      <Header />
      <Outlet />
      <NavBar />
    </>
  )
}

export default AuthorizationWrapper
