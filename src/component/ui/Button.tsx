const Button = ({ type, width, height, value, onClick, bgColor, textColor, borderColor }: any) => {
  return (
    <button
      className={`${textColor} rounded-md ${borderColor} ${height} ${width}  ${bgColor} flex items-center justify-center`}
      type={type}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Button
