import { AiOutlineSearch } from 'react-icons/ai'
import { FiShoppingBag, FiShoppingCart, FiMail, FiGift, FiSettings } from 'react-icons/fi'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { RiCalendarCheckLine } from 'react-icons/ri'
import { BsFileBarGraph } from 'react-icons/bs'
import { TbLogout } from 'react-icons/tb'

import { useState } from 'react'
import DropDownMenu from './DropDownMenu'

function NavBar() {
  const [dropDownValue, setDropDownValue] = useState({
    saleMenu: false,
    orderMenu: false,
    eventMenu: false,
    noticeMenu: false
  })

  return (
    <div className="flex  w-[226px] flex-col items-center">
      <div className="mt-8 h-[65px] w-[65px] rounded-full bg-[#C4C4C4]"></div>
      <span className="my-2 text-[#1B304A]">Lenssis Admin</span>

      <label className="hidden" htmlFor="orderSearch">
        주문검색
      </label>
      <select
        id="orderSearch"
        className=" mt-[10px] h-[25px] w-[140px] rounded-lg border-[#C4C4C4] text-[#C4C4C4]"
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
      <div className="mt-[60px] flex flex-col">
        <div
          onClick={() => {
            setDropDownValue({
              saleMenu: !dropDownValue.saleMenu,
              orderMenu: false,
              eventMenu: false,
              noticeMenu: false
            })
          }}
          className={`mt-12 ml-[10px] flex w-[185px] cursor-pointer items-center justify-between text-[15px] ${
            dropDownValue.saleMenu ? 'text-[#1B304A]' : 'text-[#C4C4C4]'
          } relative no-underline hover:text-[#1B304A]`}
        >
          <FiShoppingBag className="mb-[2px] text-[22px]" />
          <span className=" absolute left-[40px]">판매관리</span>
          <span className="absolute right-0">
            {dropDownValue.saleMenu ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </span>
        </div>
        {dropDownValue.saleMenu && (
          <DropDownMenu
            menuList={[
              { title: '상품리스트', link: '/productlist' },
              { title: '상품 등록', link: '/addproduct' },
              { title: '상품 수정', link: '/' },
              { title: '연관상품 관리', link: '/' }
            ]}
          />
        )}

        <div
          onClick={() => {
            setDropDownValue({
              saleMenu: false,
              orderMenu: !dropDownValue.orderMenu,
              eventMenu: false,
              noticeMenu: false
            })
          }}
          className={`mt-12 ml-[10px] flex w-[185px] cursor-pointer items-center justify-between text-[15px] ${
            dropDownValue.orderMenu ? 'text-[#1B304A]' : 'text-[#C4C4C4]'
          }  relative no-underline hover:text-[#1B304A]`}
        >
          <FiShoppingCart className=" mb-[2px] text-[22px]" />
          <span className="absolute left-[40px]">주문관리</span>
          <span className="absolute right-0">
            {dropDownValue.orderMenu ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </span>
        </div>
        {dropDownValue.orderMenu && (
          <DropDownMenu
            menuList={[
              { title: '주문 리스트', link: '/orderlist' },
              { title: '주문 관리', link: '/' },
              { title: '주문 상세', link: '/' },
              { title: '배송정보 관리', link: '/' }
            ]}
          />
        )}

        <div
          className={`relative mt-12 ml-[10px] flex w-[185px] cursor-pointer items-center justify-between text-[15px] text-[#C4C4C4]  no-underline hover:text-[#1B304A]`}
        >
          <FiMail className=" mb-[2px] text-[22px]" />
          <span className="absolute left-[40px]">문의/리뷰 관리</span>
          <span className="absolute right-0">
            <MdArrowDropDown />
          </span>
        </div>
        <div
          className={`relative mt-12 ml-[10px] flex w-[185px] cursor-pointer items-center justify-between text-[15px] text-[#C4C4C4]  no-underline hover:text-[#1B304A]`}
        >
          <BsFileBarGraph className=" mb-[2px] text-[22px]" />
          <span className="absolute left-[40px]">통계</span>
          <span className="absolute right-0">
            <MdArrowDropDown />
          </span>
        </div>
        <div
          onClick={() => {
            setDropDownValue({
              saleMenu: false,
              orderMenu: false,
              eventMenu: !dropDownValue.eventMenu,
              noticeMenu: false
            })
          }}
          className={` relative mt-12 ml-[10px] flex w-[185px] cursor-pointer items-center justify-between text-[15px] ${
            dropDownValue.eventMenu ? 'text-[#1B304A]' : 'text-[#C4C4C4]'
          }  no-underline hover:text-[#1B304A]`}
        >
          <FiGift className=" mb-[2px] text-[22px]" />
          <span className="absolute left-[40px]">이벤트 관리</span>
          <span className="absolute right-0">
            {dropDownValue.eventMenu ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </span>
        </div>
        {dropDownValue.eventMenu && (
          <DropDownMenu
            menuList={[
              { title: '이벤트 리스트', link: '/eventlist' },
              { title: '이벤트 작성', link: '/addevent' },
              { title: '이벤트 수정', link: '/' }
            ]}
          />
        )}
        <div
          onClick={() => {
            setDropDownValue({
              saleMenu: false,
              orderMenu: false,
              eventMenu: false,
              noticeMenu: !dropDownValue.noticeMenu
            })
          }}
          className={`relative mt-12 ml-[10px] flex w-[185px] cursor-pointer items-center justify-between text-[15px] ${
            dropDownValue.noticeMenu ? 'text-[#1B304A]' : 'text-[#C4C4C4]'
          }  no-underline hover:text-[#1B304A]`}
        >
          <RiCalendarCheckLine className=" mb-[2px] text-[22px]" />
          <span className="absolute left-[40px]">공지사항 관리</span>
          <span className="absolute right-0">
            {dropDownValue.noticeMenu ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </span>
        </div>
        {dropDownValue.noticeMenu && (
          <DropDownMenu
            menuList={[
              { title: '공지사항 리스트', link: '/noticelist' },
              { title: '공지사항 작성', link: '/addnotice' },
              { title: '공지사항 상세', link: '/noticedetail' },
              { title: '공지사항 수정', link: '/' }
            ]}
          />
        )}
        <span className="mt-[120px] w-[182px] bg-[#C4C4C4] p-[1px]" />
        <div
          className={`relative mt-12 ml-[10px] flex w-[185px] cursor-pointer items-center text-[15px] text-[#C4C4C4]  no-underline hover:text-[#1B304A]`}
        >
          <FiSettings className=" mb-[2px] text-[22px]" /> <span className="absolute left-[40px]">통계</span>
        </div>
        <div
          className={`relative mt-12 ml-[10px] flex w-[185px] cursor-pointer items-center text-[15px] text-[#C4C4C4]  no-underline hover:text-[red]`}
        >
          <TbLogout className=" mb-[2px] text-[22px]" />
          <span className="absolute left-[40px]">로그아웃</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
