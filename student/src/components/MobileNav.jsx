import { NavLink } from "react-router-dom";
import { home, invite, notification, records } from "../assets";


const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-12 md:hidden z-[1000] bg-primary border-t"> {/**bg-black/100 */}
        <div className="flex justify-between items-center py-4 px-6">
          <NavLink to="/u" onClick={() => {}}>
            <img src={home} className="w-6 h-6" alt="smatt" />
          </NavLink>
          <NavLink to="/u/records" onClick={() => {}}>
            <img src={records} className="w-6 h-6" alt="smatt" />
          </NavLink>
          <NavLink to="/u/notifications" onClick={() => {}}>
            <img src={notification} className="w-6 h-6" alt="smatt" />
          </NavLink>
          <NavLink to="/u/invite" onClick={() => {}}>
            <img src={invite} className="w-6 h-6" alt="smatt" />
          </NavLink>
        </div>
      </div>
  )
}

export default MobileNav