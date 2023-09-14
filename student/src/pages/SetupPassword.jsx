import { useState } from "react";
import { eyeOff, eyeOn, lock, logoDark } from "../assets"
import { Navbar } from "../components"

import axios from 'axios';

import { useAuthContext } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const SetupPassword = () => {
  const [showKey, setShowKey] = useState(false);
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

    dispatch({ type: 'RESET_PASSWORD' })

    try {
      const res = await axios.post('', credentials); 

      if (res.data) {
        dispatch({ type: 'RESET_SUCCESS', payload: res.data.details });

        navigate('/');
      } else (
        dispatch({ type: 'RESET_FAILURE', payload: { message: 'You are not allowed!' } })  
      )
    } catch (err) {
      dispatch({ type: 'RESET_FAILURE', payload: err.response.data })
    }
  };

  return (
    <>
      <Navbar src={logoDark} />
      <div className="w-full md:w-1/3 mx-auto md:px-0 px-4 my-4">
        <div className="flex flex-col space-y-4 items-center h-screen my-auto">
          <div>
            <h2 className="text-3xl font-semibold">Set Up Your New Password</h2>
            <p className="text-sm font-medium mt-2">As a tip, use a combination of numbers, uppercase, lowercase, and special characters.</p>
          </div>

          <div className="flex justify-between items-center w-full border-b mb-2">
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
          <div className="flex items-center space-x-3 w-full border-b mb-2">
            <img src={lock} alt="lock" />
            <input className="w-full bg-inherit text-xs placeholder-[#d5cfcf] text-dimWhite border-0 outline-0" type={showKey ? "text" : "password"} placeholder="Confirm password" id="password" onChange={handleChange} />
          </div>
          <div className="w-full">
            <button className="text-white text-xs font-semibold bg-primary p-2 w-full outline-0 rounded-md" disabled={loading} onClick={handleClick}>Sign Up</button>
            {err && <span className="text-xs text-rose-400 mt-3">{err.message}</span>}
          </div>
        </div>
      </div>
    </>
  )
}

export default SetupPassword;