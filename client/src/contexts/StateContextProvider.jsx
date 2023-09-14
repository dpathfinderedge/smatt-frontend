import { createContext ,useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  return(
    <StateContext.Provider
        value={{
          activeMenu,
          setActiveMenu,
          isSidebarOpen,
          setIsSidebarOpen,
          screenSize,
          setScreenSize
        }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
