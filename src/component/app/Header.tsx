import { GiHamburgerMenu } from 'react-icons/gi'
import { BiBell } from 'react-icons/bi'

function Header() {
  return (
    <div className="relative flex h-12 items-center bg-[#1B304A] text-white">
      <div className="w-12 text-center">
        <GiHamburgerMenu />
      </div>
      <div className="flex h-full w-1/5 items-center justify-center bg-[#304F76] text-lg font-bold">
        ADMIN
      </div>
      <div className=" absolute right-0 flex items-center justify-center text-xs">
        <span>Lensis 관리자 </span>
        <span className="mx-2">l</span>
        <a href="http://www.naver.com" target="_blank" className="text-white no-underline hover:text-black ">
          쇼핑몰로 이동
        </a>
        <span className="mx-2">l</span>
        <div className="cursor-pointer pt-1 text-lg hover:text-black">
          <BiBell />
        </div>
        <span className="mx-2 ">l</span>
        <span className="cursor-pointer hover:text-black">로그아웃</span>
        <span className="mx-2 ">l</span>
        <span className="mr-4 cursor-pointer hover:text-black">도움말</span>
      </div>
    </div>
  )
}

export default Header
