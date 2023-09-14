import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useAuthContext } from './contexts/AuthContextProvider';
import { Dashboard, Home, SignIn } from './pages';

function App() {
  const { user } = useAuthContext();

  // console.log(user);

  const ProtectedRoute = ({children}) => {
    if (!user) {
      return <Navigate to="/signin" />
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
