const Button = ({ type, width, height, value, onClick, bgColor, textColor, borderColor }: any) => {
  return (
    <button
      className={`text-${textColor} rounded-md  h-${height} w-${width}  bg-${bgColor} flex items-center justify-center`}
      type={type}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Button
