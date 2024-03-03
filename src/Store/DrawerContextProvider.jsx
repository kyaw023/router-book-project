import React, { createContext, useState } from "react";

export const DrawerContext = createContext();

const DrawerContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen, drawerHandler }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
