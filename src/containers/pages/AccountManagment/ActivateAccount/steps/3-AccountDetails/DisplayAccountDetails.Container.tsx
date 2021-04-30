import React from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { BasicDisplayComponent } from "../../BasicDisplayComponent";
import { DisplayAccountPurposeTab } from "./tabs/DisplayAccountPurposeTab";
import { DisplaySourceOfFundsTab } from "./tabs/DisplaySourceOfFundsTab";

export const DisplayAccountDetailsContainer = ({
  data,
  setCurrentStep,
}: {
  data?: any;
  setCurrentStep?: any;
}) => {
  return (
    <RouterDivTemplate
      tab={[
        "Basic Account Details",
        "Control & Restriction",
        "Account Purpose",
        "Source of Funds",
      ]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <BasicDisplayComponent
              currentCard={0}
              currentStep={3}
              data={data?.AccountData}
              type="FORM"
            />,
            <BasicDisplayComponent
              currentCard={1}
              currentStep={3}
              data={data.AccountData}
              type="FORM"
            />,
            <DisplayAccountPurposeTab data={data} />,
            <DisplaySourceOfFundsTab data={data} />,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(1);
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(3);
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
