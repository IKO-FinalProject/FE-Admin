import { BiBell } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <div className="sticky top-0 z-10 flex h-[50px]  items-center bg-[#1B304A] text-white">
      <div
        className="flex h-full w-[226px] cursor-pointer items-center justify-center bg-[#304F76] text-lg font-bold"
        onClick={() => {
          navigate('/')
        }}
      >
        ADMIN
      </div>
      <div className=" absolute right-0 flex items-center text-xs">
        <span>Lensis 관리자 </span>
        <span className="mx-2  h-[9px] w-[1px] bg-[white]" />
        <a
          href="https://lenssis.jp/"
          target="_blank"
          className="text-white no-underline hover:text-[#E8A731] "
        >
          쇼핑몰로 이동
        </a>
        <span className="mx-2  h-[9px] w-[1px] bg-[white]" />
        <div className="mt-[5px] cursor-pointer text-lg hover:text-[#E8A731]">
          <BiBell />
        </div>
        <span className="mx-2 h-[9px] w-[1px] bg-[white]" />

        <span className="mr-4 cursor-pointer hover:text-[#E8A731]">도움말</span>
      </div>
    </div>
  )
}

export default Header
