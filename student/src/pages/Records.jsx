/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { arrowDown, avatar, logoLight, more, search, settings } from "../assets";
import { MobileNav, Sidebar } from "../components";
import { useStateContext } from "../contexts/StateContextProvider";

const NavButton = ({ icon, customFunc, color }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="z-[200] relative text-xl rounded-full bg-slate-400 w-8 h-8 border-0 hover:bg-light-gray"
  >
    <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
    {icon}
  </button>
);

const Records = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useStateContext();

  return (
    <div className="flex justify-between w-full">
      <Sidebar />
      <div className={
        `w-full h-screen overflow-hidden
        ${isSidebarOpen ? 'md:ml-64 transition-all duration-300' : 'flex-[2]'}}`
      }>
        <div className={`w-full px-3 py-4 h-full bg-slate-500`}>
          <div className="flex justify-between items-center w-full"> {/**space-x-[100%/3] */}
            <NavButton customFunc={() => 
              setIsSidebarOpen((prevState) => !prevState)} icon={'='} 
            />
            <img src={logoLight} alt="smatt" className="w-12 h-12 object-contain" />
            <NavLink to="/u/profile">
              <img src={avatar} className="w-8 h-8 object-cover rounded-full border-dimWhite md:hidden" alt="avatar" />
            </NavLink>
          </div>

          <div className="flex justify-between items-center w-full textra space-x-2 bg-slate-400 rounded-lg h-10 mt-4 p-2">
            <div className="w-2/4 h-5 rounded-md bg-white relative">
              <input type="search" placeholder="Search" className="w-full h-full border-0 outline-0 rounded-md text-xs pl-2" />
              <span className="absolute right-0 top-[50%] -translate-y-[50%]"><img src={search} alt="search" className="w-4 h-4" /></span>
            </div>
            <div className="flex ">
              <p className="text-xs font-medium text-slate-900 whitespace-nowrap">Wed, 12th July</p>
              <span><img src={arrowDown} alt="" className="w-4 h-4" /></span>
            </div>
            <span><img src={settings} alt="settings" className="w-4 h-4" /></span>
          </div>

          <div className="w-full">
            <div className="flex justify-between w-full bg-slate-400 rounded-lg h-32 mt-4 p-2">
              <h2 className="text-sm font-semibold">Total Attendane Report</h2>
              <img src={more} alt="more" className="w-4 h-4" />
            </div>

          </div>
          <div className="flex flex-nowrap space-x-2 mt-4 overflow-x-hidden hover:overflow-x-scroll h-max w-full">{/**bg-red-200 */}
            <div className="w-[153px] shrink-0 bg-slate-400 rounded-lg h-32"></div>
            <div className="w-[153px] shrink-0 bg-slate-400 rounded-lg h-32"></div>
            <div className="w-[153px] shrink-0 bg-slate-400 rounded-lg h-32"></div>
            <div className="w-[153px] shrink-0 bg-slate-400 rounded-lg h-32"></div>
          </div>
        </div>
      </div>

      {/**Bottom Nav */}
      <MobileNav />
    </div>
  )
}

export default Records;