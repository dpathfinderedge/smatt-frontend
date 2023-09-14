import { createContext, useContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  loading: false,
  err: null
};

const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch(action.type) {
    case 'SIGNIN_START':
      return {
        user: null,
        loading: true,
        err: null
      }
    case 'SIGNIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        err: null
      }
    case 'SIGNIN_FAILURE':
      return {
        user: null,
        loading: false,
        err: action.payload
      }
    case 'SIGNOUT':
      return {
        user: null,
        loading: false,
        err: null
      }
    case 'SIGNUP_START':
      return {
        user: null,
        loading: true,
        err: null
      }
    case 'SIGNUP_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        err: null
      }
    case 'SIGNUP_FAILURE':
      return {
        user: null,
        loading: false,
        err: action.payload
      }
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
 
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return(
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      err: state.err,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);