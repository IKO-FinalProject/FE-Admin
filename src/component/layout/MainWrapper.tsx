import { Outlet } from 'react-router-dom'
import Header from '../app/Header'
import NavBar from '../app/NavBar'

function MainWrapper() {
  return (
    <div className="relative w-full ">
      <Header />

      <div className="flex">
        <NavBar />
        <div className="w-[calc(100%-226px)] bg-[#E6E8ED]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainWrapper
