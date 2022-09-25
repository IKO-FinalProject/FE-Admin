const ContentBox = ({ width, marginRight, marginBottom, children }: any) => {
  return (
    <div
      className={`ml-[20px] mt-[20px] ${marginRight} ${marginBottom} ${width} rounded-md bg-white p-[20px]`}
    >
      {children}
    </div>
  )
}

export default ContentBox
