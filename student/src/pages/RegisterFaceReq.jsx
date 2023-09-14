import { Link } from "react-router-dom"
import { bulb, camera, face, logoDark } from "../assets"
import { Navbar } from "../components"

const RegisterFaceReq = () => {
  return (
    <>
       <Navbar src={logoDark} />
       <div className="w-full md:w-3/5 mx-auto md:px-0 px-4 my-4">
        <div className="flex flex-col space-y-4 items-center">
          <div className="flex flex-col space-y-4 items-center h-auto my-auto bg-gray-100 py-8 px-3 rounded-lg"> 
            <p className="text-sm font-medium">To attend classses on the SMATT app, you need to register your face for user verification.</p>
            <div className="flex justify-between items-center space-x-4 w-full">
              <div className="flex flex-col justify-center items-center p-4 border-r-4 border-black/25 w-full">
                <img src={camera} alt="" className="w-32 h-32" />
                <p className="text-sm font-medium mt-2 text-center">Allow access to your camera on the device</p>
              </div>
              <div className="flex flex-col justify-center items-center p-4 border-r-4 border-black/25 w-full">
                <img src={bulb} alt="" className="w-32 h-32" />
                <p className="text-sm font-medium mt-2 text-center">You're in a well-lit room/environment</p>
              </div>
              <div className="flex flex-col justify-center items-center w-full p-4">
                <img src={face} alt="" className="w-32 h-32" />
                <p className="text-sm font-medium mt-2 text-center">No face  mask or coverings over your face</p>
              </div>
            </div>
          </div>

          <Link 
            to ="/face-capture"
            className="text-white text-xs font-semibold bg-primary py-2 px-8  outline-0 rounded-md"
            >
              All Set
            </Link>
        </div>
       </div>
    </>
  )
}

export default RegisterFaceReq