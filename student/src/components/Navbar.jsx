import { NavLink } from 'react-router-dom';

const Navbar = ({ src }) => {
  return (
    <nav className="flex items-center w-full max-w-[1200px] mx-auto h-16 md:px-0 px-4">
      <NavLink to="/">
        <img src={src} alt="smatt" className="w-24 h-full" />
      </NavLink>
    </nav>
  )
}

export default Navbar;