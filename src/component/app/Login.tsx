import Input from '../ui/Input'
import Button from '../ui/Button'

function Login() {
  const submitSigninHandler = function (e: any) {
    e.preventDefault()
    console.log('123')
  }

  return (
    <form onSubmit={submitSigninHandler} className="relative h-screen w-full bg-[#F4F6F8]">
      <div className="absolute top-[36%] left-1/2 mt-[120px] h-fit w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-solid border-gray-200 bg-white pb-12 shadow-[-5px_0_30px_1px] shadow-indigo-100">
        <h3 className="mt-5 text-center">
          <span className="text-2xl font-bold text-[#1B304A]">Login</span>
        </h3>

        <div className="w-[90%] px-6">
          <Input
            name="email"
            label="Email"
            placeholder="Email"
            type="text"
            inputWidth={'full'}
            labelColor="gray-400"
            labelBold="bold"
          />

          <Input
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            inputWidth={'full'}
            labelColor="gray-400"
            labelBold="bold"
          />
          <div className="mt-[3rem]">
            <Button
              width="full"
              height="[40px]"
              value="로그인"
              bgColor="[#1B304A]"
              textColor="white"
              type="submit"
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login
