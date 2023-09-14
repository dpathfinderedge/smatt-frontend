import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useAuthContext } from './contexts/AuthContextProvider';
import { Dashboard, FaceCapture, Home, Invite, NotFound, Notifications, Profile, Records, RegisterFace, RegisterFaceReq, ResetPassword, SetUpPassword, Settings, SignIn, SignUp, VerifiedEmail, VerifyEmail } from './pages';
import { useStateContext } from './contexts/StateContextProvider';
import { useEffect } from 'react';

function App() {
  const { user } = useAuthContext();
  const { activeMenu, setActiveMenu, isSidebarOpen, setIsSidebarOpen, screenSize, setScreenSize } = useStateContext();


  const ProtectedRoute = ({children}) => {
    if (!user) {
      return <Navigate to="/signin" />
    }

    return children;
  };

  useEffect(() => {
    
    const handleResize = () => setScreenSize(window.innerWidth);

    
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900 && isSidebarOpen == true) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [screenSize])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="email-verified" element={<VerifiedEmail />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="setup-password" element={<SetUpPassword />} />
          <Route path="register-face" element={<RegisterFace />} />
          <Route path="register-face-req" element={<RegisterFaceReq />} />
          <Route path="face-capture" element={<FaceCapture />} />
          <Route path="*" element={<NotFound />} />

          <Route path="u">
            <Route index element={<Dashboard />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="records" element={<Records />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="invite" element={<Invite />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
