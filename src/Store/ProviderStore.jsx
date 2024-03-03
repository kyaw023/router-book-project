import React from "react";
import ApiContextProvider from "./ApiContextProvider";
import DrawerContextProvider from "./DrawerContextProvider";

const ProviderStore = ({ children }) => {
  return (
    <ApiContextProvider>
      <DrawerContextProvider>{children}</DrawerContextProvider>
    </ApiContextProvider>
  );
};

export default ProviderStore;
