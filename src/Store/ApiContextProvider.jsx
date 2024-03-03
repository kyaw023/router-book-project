import React, { createContext, useState } from "react";
import useFetch from "../hook/useFetch";
import { getBookData } from "../service/book.service";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  const { data, loading, error } = useFetch(getBookData, "books");

  

  return (
    <ApiContext.Provider
      value={{ data, loading}}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
