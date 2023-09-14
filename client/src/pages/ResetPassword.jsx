import { Link } from "react-router-dom"
import { emailDark, logoDark, reset } from "../assets"
import { Navbar } from "../components"

const ResetPassword = () => {
  return (
    <>
      <Navbar src={logoDark} />
      <div className="w-full md:w-1/3 mx-auto md:px-0 px-4 my-4">
        <div className="flex flex-col space-y-4 items-center h-screen my-auto">
          <img src={reset} alt="envelope" className="w-32 h-32" />
          <div>
            <h2 className="text-3xl font-semibold">Reset Password</h2>
            <p className="text-sm font-medium mt-2">Enter your registered email address below to reset your password.</p>
          </div>
          <div className="flex items-center space-x-3 w-full border-b ">
            <img src={emailDark} alt="email" />
            <input className="w-full bg-inherit text-xs placeholder-[#d5cfcf] text-dimWhite border-0 outline-0" type="email" placeholder="Enter your email address" id="email" onChange={() => {}} />
          </div>
          <button 
            type="button"
            onClick={() => {}}
            className="text-white text-xs font-semibold bg-primary p-2 w-full outline-0 rounded-md"
          >
            Continue
          </button>
          <Link to="/signin" className="text-xs font-light ">Return to Login</Link>
        </div>
      </div>
    </>
  )
}

export default ResetPassword