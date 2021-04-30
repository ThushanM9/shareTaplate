import React from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { BasicDisplayComponent } from "../../BasicDisplayComponent";
import { DisplayCreditInterestBenefiaryDetailsTab } from "./tabs/DisplayCreditInterestBenefiaryDetailsTab";
import { DisplayDebitInterestPostingDetailsTab } from "./tabs/DisplayDebitInterestPostingDetailsTab";

export const DisplayInterestDetailsContainer = ({
  data,
  setCurrentStep,
}: {
  data: any;
  setCurrentStep?: any;
}) => {
  return (
    <RouterDivTemplate
      tab={[
        "Credit Interest",
        "Debit Interest",
        "Credit Interest Beneficiary Details",
        "Debit Interest Posting Details",
      ]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <BasicDisplayComponent
              currentStep={5}
              currentCard={0}
              type="FORM"
              data={data.AccountData}
            />,

            <DisplayCreditInterestBenefiaryDetailsTab
              data={data.CreditInterestDetail}
            />,
            <DisplayDebitInterestPostingDetailsTab
              data={data.DebitInterestDetail}
            />,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(3);
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(5);
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
