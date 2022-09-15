import { BiBell } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <div className="sticky top-0 z-10 flex h-12 items-center bg-[#1B304A] text-white">
      <div
        className="flex h-full w-[256px] cursor-pointer items-center justify-center bg-[#304F76] text-lg font-bold"
        onClick={() => {
          navigate('/')
        }}
      >
        ADMIN
      </div>
      <div className=" absolute right-0 flex text-xs">
        <span>Lensis 관리자 </span>
        <span className="mx-2">l</span>
        <a
          href="https://lenssis.jp/"
          target="_blank"
          className="text-white no-underline hover:text-[#E8A731] "
        >
          쇼핑몰로 이동
        </a>
        <span className="mx-2">l</span>
        <div className="cursor-pointer text-lg hover:text-[#E8A731]">
          <BiBell />
        </div>
        <span className="mx-2 ">l</span>
        <span className="mx-2 ">l</span>
        <span className="mr-4 cursor-pointer hover:text-[#E8A731]">도움말</span>
      </div>
    </div>
  )
}

export default Header
