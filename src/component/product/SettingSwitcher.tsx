type Props = {
  title: string
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  width: string
  titleHidden?: string
  justifyCenter?: string
  initialValue: number
}

const SettingSwitcher = ({ title, id, onChange, width, titleHidden, justifyCenter, initialValue }: Props) => {
  return (
    <div className={`my-4 mb-[2rem] flex ${width}  ${justifyCenter}`}>
      <span className={`mr-[15px] flex w-[100px] items-center text-sm text-[#1B304A] ${titleHidden}`}>
        &#183; {title}
      </span>
      <div className="flex h-[25px] w-[50%]  items-center rounded-xl bg-[#F4F4F4] p-2">
        <div className="w-[50%]">
          <input
            type="radio"
            name={title}
            id={id + 'True'}
            className="peer hidden"
            value={1}
            onChange={onChange}
            checked={initialValue === 1 && true}
          />
          <label
            htmlFor={id + 'True'}
            className="block cursor-pointer select-none rounded-xl border border-gray-300  p-2 text-center peer-checked:bg-[#1B304A] peer-checked:font-bold peer-checked:text-white"
          >
            설정
          </label>
        </div>
        <div className="w-[50%]">
          <input
            type="radio"
            name={title}
            id={id + 'False'}
            className="peer hidden"
            value={0}
            onChange={onChange}
            checked={initialValue === 0 && true}
          />
          <label
            htmlFor={id + 'False'}
            className="block cursor-pointer select-none rounded-xl border-2 border-gray-400 p-2 text-center peer-checked:bg-[#1B304A] peer-checked:font-bold peer-checked:text-white"
          >
            설정안함
          </label>
        </div>
      </div>
    </div>
  )
}

export default SettingSwitcher
