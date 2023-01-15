import React, { useEffect } from "react";
import Card from "../../components/Card/card";

import OneMonthImage from "../../assets/dashboard/one-month.png";
import WorkingCaptImage from "../../assets/dashboard/working-capt.png";
import OperationOverdraftImage from "../../assets/dashboard/operation-overdraft.png";
import TandTImage from "../../assets/dashboard/t&t.png";
import InfrastructureLoanImage from "../../assets/dashboard/infrastructure.png";
import PersonalLoanImage from "../../assets/dashboard/personal.png";
import PawnLoanImage from "../../assets/dashboard/pawn.png";
import FXLineImage from "../../assets/dashboard/fx.png";
import useDashboard from "../../providers/dashboard";

const LoanDashboard = () => {
  const { setPageTitle } = useDashboard();
  useEffect(()=>{
    setPageTitle("Loans")
  }, [])

  return (
    <div className="dashboard-home">
      <div className="dashboard-home__container">
        <Card
          img={OneMonthImage}
          title="One Month Loan"
          caption="Access funds for personal upkeep for 30 days only"
        />
        <Card
          img={WorkingCaptImage}
          title="Working Capital Overdraft"
          caption="Access continuous funds to grow your business stocks and inventory"
        />
        <Card
          img={OperationOverdraftImage}
          title="Operation Overdraft"
          caption="Financing for your business operations"
        />
        <Card
          img={TandTImage}
          title="T and T Spread Loan"
          caption="Purchase phones, generators and vehicles on a reasonable payment plan from T and T Deals Market"
        />
        <Card
          img={InfrastructureLoanImage}
          title="Infrastrusture Loan"
          caption="Facility for your business to purchase vehicles, assets, and building upgrades."
        />
        <Card
          img={PersonalLoanImage}
          title="Personal Loan"
          caption="Instant funds for your personal expenses."
        />
        <Card
          img={PawnLoanImage}
          title="Pawn Loan"
          caption="Get cash value on temporary sale of your items within 72hours."
        />
        <Card
          img={FXLineImage}
          title="FX Line"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
      </div>
    </div>
  );
};

export default LoanDashboard;
