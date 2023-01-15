import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext({
  pageTitle: "",
  setPageTitle: () => {},
});

export const DashboardProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("");

  const value = { pageTitle, setPageTitle };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboard = () => useContext(DashboardContext);

export default useDashboard;
