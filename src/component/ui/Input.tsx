const Input = ({
  label,
  placeholder,
  type,
  width,
  name,
  value,
  onChange,
  id,
  labelHidden,
  flexCol,
  inputWidth
}: any) => {
  return (
    <div className={`my-4 flex ${flexCol} ${width} items-center justify-center`}>
      <label className={` ${labelHidden} mr-[15px] w-[100px]`} htmlFor={`${id}`}>
        <span className="text-sm text-[#1B304A]"> &#183; {label}</span>
      </label>

      <input
        name={name}
        onChange={onChange}
        value={value}
        className={`h-[35px] rounded-md border border-solid border-[#D9D9D9] ${inputWidth}  pl-2 placeholder-gray-400/60 focus:outline-1 focus:outline-[#ABC8DF]`}
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  )
}

export default Input

//인풋라벨, 인풋, 인풋 에러 이렇게 나누자

//절대로!!!!!!! 타입 나중에 추론하지말자

//https://itchallenger.tistory.com/266
