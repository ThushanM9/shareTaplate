import React, { useState } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { DisplayChargesTab } from "./tabs/DisplayChargesTab";

export const DisplayChargesContainer = ({
  onCreateAccount,
  data,
  setPostCall,
  setCurrentStep,
}: {
  onCreateAccount: () => any;
  setPostCall: Function;
  data: any;
  setCurrentStep?: any;
}) => {
  const [isConfirm, setisConfirm] = useState(true);

  return (
    <RouterDivTemplate
      tab={["Chrages"]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <DisplayChargesTab
              setisConfirm={setisConfirm}
              setPostCall={setPostCall}
              data={data}
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
              setCurrentStep && setCurrentStep(8);
            }}
          ></BottomNavButton>

          <BottomNavButton
            className="ml-4"
            text="Confirm"
            disabled={isConfirm}
            onClick={() => onCreateAccount()}
          ></BottomNavButton>
        </>
      }
    />
  );
};
