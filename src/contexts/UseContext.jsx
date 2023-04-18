import { createContext } from "react";
import { useState } from "react";

export const UseContext = createContext();


function UseContextProvider({ children }) {
  return (
    <UseContext.Provider value={{  }}>
      {children}
    </UseContext.Provider>
  );
}

export default UseContextProvider;