/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/StateContextProvider";
import { avatar, logoDark } from "../assets";

const NavButton = ({ icon, customFunc, color }) => (
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="z-[200] relative text-xl rounded-full bg-slate-200 w-8 h-8 border-0 hover:bg-light-gray"
    >
      <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    </button>
  );

const AppNavbar = () => {
  const { setIsSidebarOpen } = useStateContext();  

  return (
    <div className="flex justify-between items-center w-full"> {/**space-x-[100%/3] */}
      <NavButton customFunc={() => 
        setIsSidebarOpen((prevState) => !prevState)} icon={'='} 
      />
      <img src={logoDark} alt="smatt" className="md:w-24 w-20 h-full object-contain" /> {/**w-12 h-12 */}
      <NavLink to="/u/profile">
        <img src={avatar} className="w-8 h-8 object-cover rounded-full border-dimWhite md:hidden" alt="avatar" />
      </NavLink>
    </div>
  )
}

export default AppNavbar;