import { Navbar } from '../components'
import { facial, logoDark } from '../assets'

const RegisterFace = () => {
  return (
    <>
      <Navbar src={logoDark} />
      <div className="w-full md:w-1/3 mx-auto md:px-0 px-4 my-4">
        <div className="flex flex-col space-y-4 items-center h-auto my-auto bg-gray-100 p-3 rounded-lg"> {/**h-screen */}
          <img src={facial} alt="lock" className="w-32 h-32" />
          <h2 className="text-2xl font-semibold ">Register Your Face</h2>
          <p className="text-sm font-medium">To attend classses on the SMATT app, you need to register your face for user verification.</p>
          <div className="w-full">
            <button 
              type="button"
              className="text-white text-xs font-semibold bg-primary p-2 w-full outline-0 rounded-md" 
              onClick={() => {}}
            >
              Continue
            </button>
            <button
             className="text-xs w-full"
            >
              Skip and remind me later
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterFace