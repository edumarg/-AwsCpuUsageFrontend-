import React, { createContext, useState } from "react";

export const LoadingContext = createContext(undefined);
LoadingContext.displayName = "LoadingContext";

export const LoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {children}
    </LoadingContext.Provider>
  );
};
