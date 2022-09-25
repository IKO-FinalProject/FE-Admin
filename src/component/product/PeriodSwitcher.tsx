const PeriodSwitcher = ({ onChange }: any) => {
  return (
    <div className={`mb-[2rem] flex w-[50%] items-center justify-center`}>
      <span className="mr-[15px] flex w-[100px] items-center text-sm text-[#1B304A]"> &#183; 기간 </span>
      <div className="flex h-[25px] w-[50%]  items-center rounded-xl bg-[#F4F4F4] p-2">
        <div className="w-[50%]">
          <input
            type="radio"
            name="period"
            id="oneday"
            className="peer hidden"
            value="원데이"
            onChange={onChange}
          />
          <label
            htmlFor="oneday"
            className="block cursor-pointer select-none rounded-xl border border-gray-300  p-2 text-center peer-checked:bg-[#1B304A] peer-checked:font-bold peer-checked:text-white"
          >
            원데이
          </label>
        </div>
        <div className="w-[50%]">
          <input
            type="radio"
            name="period"
            id="monthly"
            className="peer hidden"
            value="먼슬리"
            defaultChecked
            onChange={onChange}
          />
          <label
            htmlFor="monthly"
            className="block cursor-pointer select-none rounded-xl border-2 border-gray-400 p-2 text-center peer-checked:bg-[#1B304A] peer-checked:font-bold peer-checked:text-white"
          >
            먼슬리
          </label>
        </div>
      </div>
    </div>
  )
}

export default PeriodSwitcher
