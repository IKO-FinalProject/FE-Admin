import type { ReactNode } from 'react'

type ButtonProps = {
  type: 'submit' | 'button' | 'reset'
  width: string
  height: string
  children: ReactNode
  bgColor: string
  textColor: string
  borderColor?: string
  marginLeft?: string
  onClick?: () => void
  margin?: string
  display?: string
  fontSize?: string
}

const Button = ({
  type,
  width,
  height,
  children,
  onClick,
  bgColor,
  textColor,
  borderColor,
  marginLeft,
  margin,
  display,
  fontSize
}: ButtonProps) => {
  return (
    <button
      className={`${fontSize} ${margin} ${display} cursor-pointer ${textColor} ${marginLeft} rounded-md ${borderColor} ${height} ${width}  ${bgColor} flex items-center justify-center`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
