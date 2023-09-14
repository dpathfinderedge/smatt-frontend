import { logoDark } from '../assets';
import { Navbar } from "../components"

const NotFound = () => {
  return (
    <div className="fixed bg-gradient-to-b from-[#005BEA] to-[#00C6FB] bg-fixed w-full h-screen z-[-100]">
       <Navbar src={logoDark} />
       <div className="flex justify-center items-center flex-col w-full md:w-1/3 mx-auto px-4 md:px-0 mt-4 space-y-6">
        <h1 className="text-[180px] font-semibold text-slate-300 slashed-zero">404</h1>
        <h3 className="text-sm font-medium text-slate-300">Page not found</h3>
        <button type="button" onClick={() => {}} className="text-xs text-primary font-semibold bg-white p-2 w-32 rounded-lg">Return to Home</button>
       </div>
    </div>
  )
}

export default NotFound;