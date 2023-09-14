/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';

import { arrowDown, avatar, logoDark, search, settings, viewAll } from "../assets";
import { CalendarView, MobileNav, Notifications, RecentClasses, Sidebar, ViewData, Widget } from "../components";

import { useStateContext } from "../contexts/StateContextProvider";
import { format } from 'date-fns';


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

const Dashboard = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useStateContext();  

  return (
    <div className="flex justify-between w-full">
      <Sidebar />
      <div className={
        `
        w-full h-screen overflow-x-hidden 
        ${isSidebarOpen ? 'md:ml-64 transition-all duration-300' : 'flex-[2]'}`
      }> {/** overflow-y-hidden */}
        <div className={`w-full px-3 pt-4 pb-12 h-full bg-slate-100 overflow-y-auto`}> {/**bg-red-400 */}
          {/**Navbar */}
          <div className="flex justify-between items-center w-full"> {/**space-x-[100%/3] */}
            <NavButton customFunc={() => 
              setIsSidebarOpen((prevState) => !prevState)} icon={'='} 
            />
            <img src={logoDark} alt="smatt" className="md:w-24 w-20 h-full object-contain" /> {/**w-12 h-12 */}
            <NavLink to="/u/profile">
              <img src={avatar} className="w-8 h-8 object-cover rounded-full border-dimWhite md:hidden" alt="avatar" />
            </NavLink>
          </div>

          {/**Search */}
          <div className="flex justify-between items-center w-full space-x-2 bg-slate-200 rounded-lg h-10 mt-2 p-2">
            <div className="w-2/4 rounded-lg bg-white relative">
              <input type="search" placeholder="Search" className="w-full h-full border-0 outline-0 rounded-lg text-xs pl-3" />
              <span className="absolute right-3 top-[50%] -translate-y-[50%]"><img src={search} alt="search" className="w-4 h-4" /></span>
            </div>
            <div className="flex">
              <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">Wed, 12th July</p> {/** {format(new Date(), 'mm/dd/yy')}*/}
              {/* <span><img src={arrowDown} alt="" className="w-4 h-4" /></span> */}
            </div>
            <img src={settings} alt="settings" className="w-4 h-4" />
          </div>
          
          {/**main */}
          <div className="mt-3"> {/**overflow-y-auto */}
            <h2 className="text-sm font-semibold text-slate-800">Registered Courses</h2>
            <div className="flex flex-nowrap items-center space-x-2 overflow-x-hidden hover:overflow-auto mt-1">
              <Widget />
              <Widget />
              <Widget />
              <Widget />
              <Link to="/u">
                <div className="bg-white md:w-10 w-8 md:h-10 h-8 rounded-full flex justify-center items-center">
                  <img src={arrowDown} alt="view-all" className="md:w-5 w-4 md:h-5 h-4" />
                </div>
                <p className="text-xs font-semibold text-slate-500 mt-1">View All</p>
              </Link>
            </div>

            <div className="flex md:flex-row flex-col md:flex-wrap md:gap-4 gap-2 mt-3"> {/** w-full */}
              <RecentClasses />
              <CalendarView />
              <div className=""> {/**md:w-3/5 w-full */}
                {/**Input */}
                <div className="flex justify-between items-center space-x-2 w-full"> {/**w-full h-9 */}
                  <input type="text" className="bg-slate-200 outline-0 border-0 md:text-sm text-xs font-light p-2 rounded-md h-full w-full md:w-4/5 text-ellipsis" placeholder="Enter link to join class" />  {/**w-full */}
                  <button 
                    type="button" 
                    className="bg-primary text-white font-semibold text-xs p-2 rounded-md md:w-24 w-1/5 h-full"
                    onClick={() => {}}                 
                  >
                    Join
                  </button>
                </div>

                <ViewData />
              </div>
              
              <Notifications />
              {/* <CalendarView /> */}
            <div>
              
            </div>
            </div>

            <div className="flex md:flex-row flex-col md:justify-between justify-start w-full mt-4">
              {/* <div className="md:w-3/5 w-full">
                *Input
                <div className="flex justify-between items-center space-x-2 w-full h-9">
                  <input type="text" className="bg-slate-200 outline-0 border-0 text-sm font-light p-2 rounded-lg w-full h-full" placeholder="Enter/paste your class link to join class" />
                  <button 
                    type="button" 
                    className="bg-primary text-white ml-2 font-semibold text-xs p-2 rounded-lg w-24 h-full"
                    onClick={() => {}}                 
                    >
                      Join Class
                    </button>
                </div>
                <ViewData />
              </div> */}
              {/* <Notifications /> */}
            </div>
          </div>
        </div>
      </div>

      {/**Bottom Nav */}
      <MobileNav />
    </div>
  )
}

export default Dashboard;