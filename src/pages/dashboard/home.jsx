import React from "react";
import useDashboard from "../../providers/dashboard";

const HomeDashboard = () => {
  const { setPageTitle } = useDashboard();
  setPageTitle("Home");

  return <div>HomeDashboard</div>;
};

export default HomeDashboard;
