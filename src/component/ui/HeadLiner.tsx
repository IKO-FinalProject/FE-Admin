import type { ReactNode } from 'react'

type HeadlinerProps = {
  children: ReactNode
}

function Headliner({ children }: HeadlinerProps) {
  return (
    <div className="mb-5" style={{ borderBottom: '1px solid #C4C4C4' }}>
      <h1
        className="flex h-[30px] w-[100px] items-center justify-center  text-[.9rem] font-bold drop-shadow-2xl"
        style={{ borderBottom: '3px solid #A4C8E1', textShadow: '0 3px #C4C4C4' }}
      >
        {children}
      </h1>
    </div>
  )
}

export default Headliner
