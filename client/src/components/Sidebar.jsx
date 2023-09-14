import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/StateContextProvider";
import { home, invite, notification, records, avatar, logout, settingsLight } from "../assets";

const links = [
  {
    name: 'home',
    icon: <img src={home} alt="home" />
  },
  {
    name: 'records',
    icon: <img src={records} alt="records" />
  },
  {
    name: 'notifications',
    icon: <img src={notification} alt="notification" />
  },
  {
    name: 'invite',
    icon: <img src={invite} alt="invite" />
  },
 
];

const Sidebar = () => {
  const {isSidebarOpen, setIsSidebarOpen, screenSize} = useStateContext();
  const sidebarRef = useRef(null);
  const isSidebarOpenRef = useRef(isSidebarOpen);

  useEffect(() => {
    isSidebarOpenRef.current = isSidebarOpen;
  },[isSidebarOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (screenSize <= 900 && isSidebarOpenRef.current) {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setIsSidebarOpen(false);
        }
      }
    };
    //&& event.target.getAttribute('id') !== 'sidebar-toggle'

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  let startX;
  let endX;

  const handleSwipeStart = (event) => {
    startX = event.touches[0].clientX;
  };

  const handleSwipeEnd = (event) => {
    endX = event.changedTouches[0].clientX;
    
    if (startX - endX > 100) {
      setIsSidebarOpen(false);
    }
  };

  const activeLink = 'flex items-center space-x-2 py-2 rounded-lg text-dimWhite text-md '; // m-2 pl-4
  const normalLink = 'flex items-center space-x-2 py-2 rounded-lg text-md text-white hover:bg-slate-900'; //m-2 pl-4

  return (
    <div onTouchStart={handleSwipeStart} onTouchEnd={handleSwipeEnd} ref={sidebarRef} className={`fixed top-0 bg-primary h-screen transition-all duration-300 z-[100000] ${isSidebarOpen ? 'left-0 w-72  md:left-0 md:w-64' : '-left-72 md:-left-64'}`}> {/**id="#sidebar-toggle" */}
      {/* <div className={`fixed top-0 bg-black/50 h-screen transition-all duration-300 z-[1000] ${isSidebarOpen ? 'left-0 w-full md:w-0 md:-left-[100%]' : '-left-[100%] md:-left-[100%]'}`} /> */}
      
      <div className="flex justify-between items-center flex-col py-6 px-4 w-full h-full overflow-auto md:overflow-hidden md:hover:overflow-auto "> {/**bg-red-300  bg-gradient-to-b from-[#005BEA] to-[#00C6FB] bg-fixed */}
          {/* Top */}
          <div className="flex justify-between flex-col space-y-4 w-full"> {/**bg-green-200  */}
            <div className="flex justify-between w-full">
              <div className="flex flex-col w-full">
                <NavLink to="/u/profile">
                  <img src={avatar} className="w-12 h-12 object-cover rounded-full  border-dimWhite" alt="avatar" /> {/**border-2 */}
                </NavLink>
                <p className="uppercase text-xs font-semibold text-white mt-3 mb-1">John O. Doe</p>
                <p className="text-xs font-medium text-white">20/47CS/00001</p>
              </div>
              <button
                type="button" 
                onClick={() => setIsSidebarOpen(false)}
                className="font-semibold text-xs rounded-full w-5 h-5 border text-white hover:bg-light-gray block md:hidden"
              >
                X
              </button>
            </div>
            
            {/* <div className="flex justify-between items-center w-full">
              <NavLink to="/u" onClick={() => {}}>
                  <img src={logoLight} className="w-24 " alt="smatt" />
              </NavLink>
              <button
                type="button" 
                onClick={() => setIsSidebarOpen(false)}
                className="text-xs rounded-full p-3 border-0 hover:bg-light-gray block md:hidden"
              >
                X
              </button>
            </div> */}


            <div className="h-[1px] w-full bg-white" />
            <div className="flex flex-col space-y-2 w-full">
              {links.map((link) => (
                <NavLink
                to={link.name === 'home' ? '/u' : `/u/${link.name.split(' ')[0]}`}
                  key={link.name}
                  onClick={() => setIsSidebarOpen(false)} 
                  className={({ isActive }) => isActive ? activeLink : normalLink }
                >
                  {link.icon}
                  <span className="capitalize">{link.name}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="w-full">
            <div className="h-[1px] w-full bg-white mb-4" />
            <NavLink
              to={'/u/settings'}
              onClick={() => setIsSidebarOpen(false)} 
              className={({ isActive }) => isActive ? activeLink : normalLink }
              >
              <img src={settingsLight} alt="settings" />
              <span className="capitalize">Settings</span>
            </NavLink>
            <NavLink
              to={''}
              onClick={() => setIsSidebarOpen(false)} 
              className={({ isActive }) => isActive ? activeLink : normalLink }
              >
              <img src={logout} alt="logout" />
              <span className="capitalize">Logout</span>
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Sidebar;