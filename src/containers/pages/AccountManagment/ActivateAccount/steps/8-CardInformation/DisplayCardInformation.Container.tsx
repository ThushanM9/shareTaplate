import React from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { DisplayATMCardsContainer } from "./DisplayATMCards.Container";

export const DisplayCardInformationContainer = ({
  data,
  setCurrentStep,
}: {
  data: any;
  setCurrentStep?: any;
}) => {
  console.log("ATM", data);
  return (
    <RouterDivTemplate
      tab={["Card Information"]}
      content={
        <ScrollTabTemplate
          tabArr={[
            // <DisplayCardInformationTab
            //   data={data.ATMDetails && data.ATMDetails}
            // />,
            <DisplayATMCardsContainer
              atmDetails={data.ATMDetails}
            ></DisplayATMCardsContainer>,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(6);
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(8);
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
