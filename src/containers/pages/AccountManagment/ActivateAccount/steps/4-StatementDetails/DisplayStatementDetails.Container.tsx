import React from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { DisplayStatementDetailsTab } from "./tabs/DisplayStatementDetailsTab";

export const DisplayStatementDetailsContainer = ({
  data,
  setCurrentStep,
}: {
  data: any;
  setCurrentStep?: any;
}) => {
  return (
    <RouterDivTemplate
      tab={["Statement Details"]}
      content={
        <ScrollTabTemplate
          tabArr={[<DisplayStatementDetailsTab data={data.StatementStatus} />]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(2);
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(4);
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
