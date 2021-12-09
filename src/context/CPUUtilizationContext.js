import React, { createContext, useState } from "react";

export const CPUContext = createContext(undefined);
CPUContext.displayName = "CPUContext";

export const CPUContextProvider = ({ children }) => {
  const [CPUUtilization, setCPUUtilization] = useState(undefined);

  return (
    <CPUContext.Provider value={[CPUUtilization, setCPUUtilization]}>
      {children}
    </CPUContext.Provider>
  );
};
