import { envelope, logoDark } from "../assets";
import { Navbar } from "../components";

const VerifyEmail = () => {
  return (
    <>
      <Navbar src={logoDark} />
      <div className="w-full md:w-1/3 mx-auto md:px-0 px-4 my-4">
        <div className="flex flex-col justify-between items-center h-screen my-auto">
          <div className="flex flex-col space-y-3 w-full h-full">
            <h2 className="text-3xl font-semibold">Let's get your email verified</h2>
            <p className="text-sm font-semibold">Check your email inbox and complete the email verification.</p>
            <div className="flex items-center space-x-2 bg-blue-100 w-full h-14 rounded-md p-2">
              <span>johndoe@gmail.com</span>
            </div>
          </div>
          <div className="h-full"><img src={envelope} alt="envelope" className="w-32 h-32" /></div>
          <div className="h-full">
            <button onClick={() => {}} className="underline text-xs font-medium">I didn't receive an email</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyEmail;