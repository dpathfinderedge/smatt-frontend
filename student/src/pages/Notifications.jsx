import { AppNavbar, MobileNav, Search, Sidebar } from "../components"
import { useStateContext } from "../contexts/StateContextProvider";

const NotificationMsgs = [
  {
    title: 'Attendance',
    text: 'Your attendance has been marked as present. Click to see more details.'
  },
  {
    title: 'Attendance',
    text: 'Your attendance has been marked as present. Click to see more details.'
  },
  {
    title: 'App Maintenance',
    text: 'Hello, Rasheed please be aware that a maintenance will occur will occur on the app between 12am and 1am today.'
  },
  {
    title: 'Attendance',
    text: 'Your attendance has been marked as absent. Click to see more details.'
  },
];

const Notifications = () => {
  const { isSidebarOpen } = useStateContext();  

  return (
    <div className="flex justify-between w-full">
      <Sidebar />
      <div className={
        `w-full h-screen overflow-hidden
        ${isSidebarOpen ? 'md:ml-64 transition-all duration-300' : 'flex-[2]'}}`
      }>
        <div className={`w-full px-3 pt-4 pb-12 h-full bg-slate-100 overflow-y-auto`}>
          <AppNavbar />
          

          <div className="mt-3 w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-semibold text-slate-700">Notifications</h2>
              <h2 className="text-xs font-semibold text-slate-700">Mark all as read</h2>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              {NotificationMsgs.map((item,index) => (
                <div 
                  key={index}
                  className="bg-slate-200 p-2 rounded-lg"
                >
                  <h5 className="text-xs font-medium text-slate-400">{item.title}</h5>
                  <p className="text-xs text-slate-800 font-medium mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <MobileNav />
        </div>

      </div>
    </div>
  )
}

export default Notifications