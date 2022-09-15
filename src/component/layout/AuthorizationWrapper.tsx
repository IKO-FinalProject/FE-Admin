import { Outlet } from 'react-router-dom'
import Header from '../app/Header'
import NavBar from '../app/NavBar'

function AuthorizationWrapper() {
  return (
    <div className="h-screen ">
      <Header />
      <div className="relative flex h-full">
        <div className="fixed h-full w-[256px]">
          <NavBar />
        </div>
        <div className="absolute left-[256px] h-full w-4/5 bg-[#DADADA] ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthorizationWrapper
