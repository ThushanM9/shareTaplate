import React from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { BasicDisplayComponent } from "../../BasicDisplayComponent";

export const DisplayOverdraftDetailsContainer = ({
  data,
  setCurrentStep,
}: {
  data: any;
  setCurrentStep?: any;
}) => {
  return (
    <RouterDivTemplate
      tab={["Overdraft Details", "Recovery Account"]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <BasicDisplayComponent
              currentStep={6}
              currentCard={0}
              type="FORM"
              data={data.AccountData}
            />,
            <BasicDisplayComponent
              currentStep={6}
              currentCard={1}
              type="TABLE"
              data={data.OverdraftDetail}
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
              setCurrentStep && setCurrentStep(4);
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(6);
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
