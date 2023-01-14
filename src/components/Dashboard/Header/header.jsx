import React from "react";
import { getDate } from "../../../utils/getDate";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h1 className="dashboard-header__title">Loans</h1>
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
