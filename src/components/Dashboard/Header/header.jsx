import React from "react";
import useDashboard from "../../../providers/dashboard";
import { getDate } from "../../../utils/getDate";

const DashboardHeader = () => {
  const { pageTitle } = useDashboard();

  return (
    <div className="dashboard-header">
      <h1 className="dashboard-header__title">{pageTitle}</h1>
      <p
        className="dashboard-header__text"
        dangerouslySetInnerHTML={{
          __html: `${getDate().htmlSting}`,
        }}
      ></p>
    </div>
  );
};

export default DashboardHeader;
