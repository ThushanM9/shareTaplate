import React from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { DisplayProductDetailsTab } from "./tabs/DisplayProductDetailsTab";

export const ProductDetailsContainer = ({
  data,
  setCurrentStep,
}: {
  data: any;
  setCurrentStep?: any;
}) => {
  return (
    <RouterDivTemplate
      tab={["Product Details"]}
      content={
        <ScrollTabTemplate
          tabArr={[<DisplayProductDetailsTab account={data.AccountData} />]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep(0);
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(2);
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
