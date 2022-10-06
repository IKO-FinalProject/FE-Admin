import type { ReactNode } from 'react'

type ContentBoxProps = {
  width?: string
  marginRight: string
  marginBottom: string
  children: ReactNode
}

const ContentBox = ({ width, marginRight, marginBottom, children }: ContentBoxProps) => {
  return (
    <div
      className={`ml-[20px] mt-[20px] ${marginRight} ${marginBottom} ${width} rounded-md bg-white p-[20px]`}
    >
      {children}
    </div>
  )
}

export default ContentBox
