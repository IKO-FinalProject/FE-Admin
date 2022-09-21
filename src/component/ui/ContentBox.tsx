export function ContentBoxHalf(props: any) {
  return <div className=" ml-[20px] mt-[20px] w-[50%] rounded-md bg-white p-[20px]">{props.children}</div>
}

export function ContentBoxFull(props: any) {
  return <div className="mx-[20px] mt-[20px] rounded-md  bg-white p-[20px]">{props.children}</div>
}
