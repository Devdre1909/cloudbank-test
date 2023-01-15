import React from "react";

import CloudBankLogo from "../../../assets/brand/cloudbank.png";

import DashboardLogo from "../../../assets/icons/dashboard.svg";
import SendMoneyLogo from "../../../assets/icons/send-money.svg";
import InvestmentLogo from "../../../assets/icons/investment.svg";
import LoanLogo from "../../../assets/icons/loan.svg";
import CardLogo from "../../../assets/icons/cards.svg";
import TransactionLogo from "../../../assets/icons/transaction.svg";
import MarketplaceLogo from "../../../assets/icons/marketplace.svg";
import SettingsLogo from "../../../assets/icons/settings.svg";
import LogoutLogo from "../../../assets/icons/turn-off.svg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isActiveRoute = (path) => location.pathname === path;

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__content">
        <div className="sidebar__brand">
          <img src={CloudBankLogo} alt="Cloud Bank" />
        </div>
        <div className="sidebar__nav">
          <ul className="sidebar__links">
            <Link
              to="/dashboard/home"
              className={`sidebar__link ${
                isActiveRoute("/dashboard/home") && "sidebar__link--active"
              }`}
            >
              <img src={DashboardLogo} alt="Dashboard" />
              <span>Home</span>
            </Link>
            <Link to="/dashboard/send-money" className="sidebar__link">
              <img src={SendMoneyLogo} alt="Send Money" />
              <span>Send Money</span>
            </Link>
            <li className="sidebar__link">
              <img src={InvestmentLogo} alt="Investment" />
              <span>Investment</span>
            </li>
            <li className="sidebar__link">
              <img src={InvestmentLogo} alt="Investment" />
              <span>Investment</span>
            </li>
            <Link
              to="/dashboard/loan"
              className={`sidebar__link ${
                isActiveRoute("/dashboard/loan") && "sidebar__link--active"
              }`}
            >
              <img src={LoanLogo} alt="Loan" />
              <span>Loan</span>
            </Link>
            <li className="sidebar__link">
              <img src={CardLogo} alt="Cards" />
              <span>Cards</span>
            </li>
            <li className="sidebar__link">
              <img src={TransactionLogo} alt="Transactions" />
              <span>Transactions</span>
            </li>
            <li className="sidebar__link">
              <img src={MarketplaceLogo} alt="Marketplace" />
              <span>Marketplace</span>
            </li>
            <li className="sidebar__link">
              <img src={SettingsLogo} alt="Settings" />
              <span>Settings</span>
            </li>
          </ul>
        </div>

        <div className="sidebar__bottom">
          <div className="sidebar__bottom__logout">
            <img src={LogoutLogo} alt="Logout" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
