import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/Dashboard/Header/header";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-container__sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-container__main">
        <div className="dashboard-container__main-content">
          <DashboardHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
