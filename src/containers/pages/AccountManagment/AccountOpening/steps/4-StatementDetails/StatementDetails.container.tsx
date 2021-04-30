import React, { useRef } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { StatementDetailsTab } from "./tabs/StatementDetailsTab";

export const StatementDetails_Container = ({
  setCurrentStep,
}: {
  setCurrentStep: any;
}) => {
  const StatementDetailsRef = useRef();
  const FieldValidation = async () => {
    let errorCount: number = 0;
    if (StatementDetailsRef && StatementDetailsRef.current) {
      const errors: any[] = await (StatementDetailsRef.current as any).validateCard();
      errorCount += errors.length
      console.log("errors", errors);
    }
    if (errorCount <= 0 || errorCount == null) {
      setCurrentStep(4);
    }


  }
  return (
    <RouterDivTemplate
      tab={["Statement Details"]}
      content={
        <ScrollTabTemplate
          tabArr={[<StatementDetailsTab ref={StatementDetailsRef} />]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep(2);
              // if (StatementDetailsRef && StatementDetailsRef.current) {
              //   const errors = (StatementDetailsRef.current as any).validateCard();
              //   console.log("errors", errors);
              // }
            }}
          ></BottomNavButton>
          <BottomNavButton
            className="ml-2"
            text="Next"
            disabled={false}
            onClick={
              FieldValidation
            }
          ></BottomNavButton>
        </>
      }
    />
  );
};
