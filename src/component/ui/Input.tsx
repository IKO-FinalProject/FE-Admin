import { ChangeEvent, useReducer, useEffect, useState } from 'react'

const Input = ({
  label,
  placeholder,
  type,
  width,
  labelColor,
  labelBold,
  name,
  value,
  onChange,
  id,
  height
}: any) => {
  return (
    <div className="my-4 flex flex-col justify-center gap-2">
      <label htmlFor={`${id}`}>
        <span className={`text-${labelColor} font-${labelBold} hidden font-semibold`}>{label}</span>
      </label>
      <div className={'flex items-center justify-start'}>
        <input
          name={name}
          onChange={onChange}
          value={value}
          className={` rounded-md border border-solid border-[#D9D9D9] ${width} ${height} pl-2 placeholder-gray-400/60 focus:outline-1 focus:outline-[#ABC8DF]`}
          type={type}
          placeholder={placeholder}
          id={id}
        />
      </div>
    </div>
  )
}

export default Input
