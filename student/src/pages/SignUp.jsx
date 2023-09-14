import { useState } from "react";

import { Navbar } from "../components";
import { email, eyeOff, eyeOn, lock, checked, unchecked, logoLight } from "../assets";
import axios from 'axios';

import { useAuthContext } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showKey, setShowKey] = useState(false);
  const [showChecked, setShowChecked] = useState(false);
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const { loading, err, dispatch } = useAuthContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: 'SIGNIN_START' })

    try {
      const res = await axios.post('', credentials); ///auth/signin

      if (res.data) { // res.data.isAdmin
        dispatch({ type: 'SIGNIN_SUCCESS', payload: res.data.details });

        navigate('/');
      } else (
        dispatch({ type: 'SIGNIN_FAILURE', payload: { message: 'You are not allowed!' } })  
      )
    } catch (err) {
      dispatch({ type: 'SIGNIN_FAILURE', payload: err.response.data })
    }
  };

  return (
    <div className="fixed bg-gradient-to-b from-[#005BEA] to-[#00C6FB] bg-fixed w-full h-screen z-[-100]">
      <Navbar src={logoLight} />  
      <div className="w-full md:w-1/3 mx-auto md:px-0 px-4 mt-4">
        <div className="flex justify-center items-center flex-col space-y-8">
          <h2 className="text-lg font-semibold text-white">Create an account</h2> 
          <div className="flex items-center space-x-3 w-full border-b ">
            <img src={email} alt="email" />
            <input className="w-full bg-inherit text-xs placeholder-[#d5cfcf] text-dimWhite border-0 outline-0" type="email" placeholder="Enter your matric number" id="email" onChange={handleChange} />
          </div>
          <div className="flex items-center space-x-3 w-full border-b ">
            <img src={email} alt="email" />
            <input className="w-full bg-inherit text-xs placeholder-[#d5cfcf] text-dimWhite border-0 outline-0" type="email" placeholder="Enter your email address" id="email" onChange={handleChange} />
          </div>
          
          <div className="flex justify-between items-center w-full border-b">
            <div className="flex items-center space-x-3 w-full">
              <img src={lock} alt="lock" />
              <input className="w-full bg-inherit text-xs placeholder-[#d5cfcf] text-dimWhite border-0 outline-0" type={showKey ? "text" : "password"} placeholder="Enter your password" id="password" onChange={handleChange} />
            </div>
            <span 
              onClick={() => setShowKey(!showKey)}
            > 
              {showKey ? <img src={eyeOn} alt="eye" /> : <img src={eyeOff} alt="eye" />}
            </span>
          </div>

          <div className="w-full">
            <div className="flex items-center space-x-3 w-full border-b mb-2">
              <img src={lock} alt="lock" />
              <input className="w-full bg-inherit text-xs placeholder-[#d5cfcf] text-dimWhite border-0 outline-0" type={showKey ? "text" : "password"} placeholder="Confirm password" id="password" onChange={handleChange} />
            </div>
            <div onClick={() => setShowChecked(!showChecked)} className="flex items-center space-x-1 mb-2">
              <img src={showChecked ? checked : unchecked} alt="checkbox" className="w-4 h-4" />
              <span className="text-xs text-white">Remember me</span>
            </div>
          </div>

          <div className="w-full">
            <button className="text-xs text-primary font-semibold bg-white p-2 w-full rounded-lg" disabled={loading} onClick={handleClick}>Sign Up</button>
            {err && <span className="text-xs text-rose-400 mt-3">{err.message}</span>}
          </div>
          
          <span className="text-sm mt-2 text-dimWhite">Already have an account? <button type="button" onClick={() => {}} className="text-white outline-0 border-0">Sign In</button> </span>
        </div>
      </div>
    </div>
  )
}

export default SignUp;                                                                                                                    