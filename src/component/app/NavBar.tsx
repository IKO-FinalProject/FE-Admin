import { AiOutlineSearch } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'

function NavBar() {
  return (
    <div className="flex  w-[226px] flex-col items-center">
      <div className="mt-8 h-[65px] w-[65px] rounded-full bg-[#C4C4C4]"></div>
      <span className="my-2 text-[#1B304A]">Lenssis Admin</span>

      <label className="hidden" htmlFor="orderSearch">
        주문검색
      </label>
      <select
        id="orderSearch"
        className="select select-bordered select-sm w-[140px] border-[.5px] text-[#C4C4C4]"
      >
        <option value="수취인명">수취인명</option>
        <option value="구매자명">구매자명</option>
        <option value="구매자연락처">구매자연락처</option>
        <option value="구매자ID">구매자ID</option>
        <option value="주문번호">주문번호</option>
        <option value="상품주문번호">상품주문번호</option>
        <option value="상품번호">상품번호</option>
      </select>
      <div
        className="mt-2 flex h-[30px] items-center justify-center"
        style={{ borderBottom: '1px solid #C4C4C4' }}
      >
        <input className="w-[140px]  border-none  text-[#C4C4C4]" />
        <AiOutlineSearch className="cursor-pointer text-[#C4C4C4] hover:text-[#1B304A]" />
      </div>
      <div className="mt-16 flex flex-col items-start text-[15px] font-bold">
        <NavLink
          className={`no-underline hover:text-[#1B304A]`}
          style={({ isActive }) => ({
            color: isActive ? '#1B304A' : '#C4C4C4'
          })}
          to="/productlist"
        >
          상품관리
        </NavLink>
        <NavLink className="mt-6 text-[#C4C4C4] no-underline hover:text-[#1B304A]" to="/">
          판매관리
        </NavLink>
        <NavLink
          className="mt-6 no-underline hover:text-[#1B304A]"
          style={({ isActive }) => ({
            color: isActive ? '#1B304A' : '#C4C4C4'
          })}
          to="/orderlist"
        >
          주문관리
        </NavLink>
        <NavLink
          className="mt-6 no-underline hover:text-[#1B304A]"
          style={({ isActive }) => ({
            color: isActive ? '#1B304A' : '#C4C4C4'
          })}
          to="/noticelist"
        >
          문의/리뷰관리
        </NavLink>
        <NavLink className="mt-8 text-[#C4C4C4] no-underline hover:text-[#1B304A]" to="/">
          통계
        </NavLink>
        <NavLink
          className="mt-6 no-underline hover:text-[#1B304A]"
          style={({ isActive }) => ({
            color: isActive ? '#1B304A' : '#C4C4C4'
          })}
          to="/eventlist"
        >
          이벤트관리
        </NavLink>
        <span className="mt-12 w-[182px] bg-[#C4C4C4] p-[1px]" />
        <NavLink className="mt-6 text-[#C4C4C4] no-underline hover:text-[#1B304A]" to="/">
          설정
        </NavLink>
        <div className="mt-6 cursor-pointer text-[#C4C4C4] no-underline hover:text-[red]">로그아웃</div>
      </div>
    </div>
  )
}

export default NavBar
