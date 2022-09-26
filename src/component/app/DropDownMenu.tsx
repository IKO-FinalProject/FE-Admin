import { NavLink } from 'react-router-dom'

function DropDownMenu({ menuList }: any) {
  return (
    <ul className="mt-[10px] flex h-[145px] w-[185px] flex-col justify-around rounded-md bg-[#1B304A] p-[10px]">
      {menuList.map((menu: { title: string; link: string }) => (
        <NavLink
          className="ml-[10px] no-underline hover:text-[#71B7F9]"
          key={menu.title}
          style={({ isActive }) => ({
            color: isActive ? '#71B7F9' : 'white'
          })}
          to={menu.link}
        >
          &#183; {menu.title}
        </NavLink>
      ))}
    </ul>
  )
}

export default DropDownMenu
