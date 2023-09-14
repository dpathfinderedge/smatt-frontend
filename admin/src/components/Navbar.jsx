import { NavLink } from 'react-router-dom';
// import { heroImage, logo } from '../assets';

const Navbar = () => {
  return (
    <nav className="max-w-[1170px] w-full mx-auto py-6 h-8 shrink-0">
      <NavLink to="/">
        <img src={logo} alt="smatt" className="w-[124px] h-[32px]" />
        {/* <img src={heroImage} alt="smatt" className="w-[124px] h-[32px]" /> */}
      </NavLink>
    </nav>
  )
}

export default Navbar;