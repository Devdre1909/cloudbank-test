import React, { useEffect } from "react";
import useDashboard from "../../providers/dashboard";

const HomeDashboard = () => {
  const { setPageTitle } = useDashboard();
  useEffect(() => {
    setPageTitle("Home");
  }, []);

  return <div>HomeDashboard</div>;
};

export default HomeDashboard;
