import { Link } from "react-router-dom"
import { checkMark, logoDark } from "../assets"
import { Navbar } from "../components"

const VerifiedEmail = () => {
  return (
    <>
      <Navbar src={logoDark} />
      <div className="w-full md:w-1/3 mx-auto md:px-0 px-4 my-4 ">
        <div className="flex flex-col space-y-4 justify-center items-center bg-slate-200 rounded-lg p-4 my-auto">
          <div className="flex flex-col justify-center items-center space-y-2">
            <img src={checkMark} alt="chark-mark" className="w-14 h-14" />
            <h2 className="text-lg font-semibold text-slate-700 uppercase">Verified</h2>
          </div>
          <p className="text-xs font-medium text-slate-500">Viola! You have successfully verified your email address.</p>
          <Link
          to="/u"
            className="bg-primary text-sm text-white font-semibold rounded-md outline-0 p-2 md:w-24 w-full text-center"
            onClick={() => {}}
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default VerifiedEmail