import React from "react";
import { BottomNavButton } from "../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../templates/AccountManagement/ScrollTabTemplate";
import AccountClosingCharges from "./AccountClosingCharges";
import AccountClosingFundReservation from "./AccountClosingFundReservation";
import AccountClosingShedulePayment from "./AccountClosingSchedulePayment";
import AccountClosingStandingOrder from "./AccountClosingStandingOrder";

function AccountClosing({
  onCreateAccount,
  data,
  charges,
}: {
  onCreateAccount: any;
  data: any;
  charges: any;
}) {
  return (
    <>
      <RouterDivTemplate
        tab={[
          "Charges",
          // "Overdraft Details",
          "Standing Order",
          "Schedule Payment",
          "Fund Reservation",
          // "Pending Cheque Realization",
          // "Pledging Details",
        ]}
        content={
          <ScrollTabTemplate
            tabArr={[
              <AccountClosingCharges data={data} charges={charges} />,
              // <AccountClosingOverdraftDetails />,
              <AccountClosingStandingOrder data={data} />,
              <AccountClosingShedulePayment data={data} />,
              <AccountClosingFundReservation />,
              // <AccountClosingPendingCheque />,
              // <AccountClosingPledgeDetails />,
            ]}
          />
        }
        nav={
          <>
            <BottomNavButton text="Previous" disabled={false}></BottomNavButton>

            <BottomNavButton
              className="ml-4"
              text="Confirm"
              disabled={false}
              onClick={() => onCreateAccount()}
            ></BottomNavButton>
          </>
        }
      />
    </>
  );
}

export default AccountClosing;
