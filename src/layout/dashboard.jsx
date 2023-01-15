import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/Dashboard/Header/header";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

import CloudbankLogo from "../assets/brand/cloudbank-icon-only.png";
import MenuLogo from "../assets/icons/menu.svg";
import { DashboardProvider } from "../providers/dashboard";

const Dashboard = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const handleMobileNav = () => {
    // setIsMobileNavOpen(!isMobileNavOpen);
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    handleMobileNav();
  }, [isMobileNavOpen]);

  return (
    <DashboardProvider>
      <div className="dashboard-container">
        <div className="dashboard-container__sidebar">
          <Sidebar />
        </div>
        <div
          className={`dashboard-container__sidebar__mobile ${
            isMobileNavOpen
              ? "dashboard-container__sidebar__mobile--active"
              : ""
          }`}
        >
          <Sidebar />
        </div>
        <div className="dashboard-container__header">
          <div onClick={() => setIsMobileNavOpen(true)}>
            <img src={MenuLogo} alt="Menu" />
          </div>
          <div>
            <img src={CloudbankLogo} alt="Cloud bank" />
          </div>
          <div onClick={() => setIsMobileNavOpen(false)}>
            {isMobileNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                style={{ width: "1.5rem", height: "1.5rem" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : null}
          </div>
        </div>
        <div className="dashboard-container__main">
          <div className="dashboard-container__main-content">
            <DashboardHeader />
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;
