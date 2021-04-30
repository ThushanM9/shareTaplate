import React, { useRef } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { AccountPurposeTab } from "./tabs/AccountPurposeTab";
import { BasicAccountDetailsTab } from "./tabs/BasicAccountDetailsTab";
import { ControlandRestrictionTab } from "./tabs/ControlandRestrictionTab";
import { SourceOfFundsTab } from "./tabs/SourceOfFundsTab";

export const AccountDetails_Contianer = ({
  setCurrentStep,
}: {
  setCurrentStep: any;
}) => {
  const BasicAccountDetailsRef = useRef();
  const ControlAndRestrictionRef = useRef();
  const AccountPurposeRef = useRef();
  const FieldValidation = async () => {
    let errorCount: number = 0;
    if (BasicAccountDetailsRef && BasicAccountDetailsRef.current) {
      const errors: any[] = await (BasicAccountDetailsRef.current as any).validateCard();
      errorCount += errors.length;
      console.log("errorBasic", errors);
    }
    if (ControlAndRestrictionRef && ControlAndRestrictionRef.current) {
      const errors: any[] = await (ControlAndRestrictionRef.current as any).validateCard();
      errorCount += errors.length;
      console.log("errorControl", errors);
    }
    if (AccountPurposeRef && AccountPurposeRef.current) {
      const errors: any[] = await (AccountPurposeRef.current as any).validateCard();
      errorCount += errors.length;
      console.log("errorPurpose", errors);
    }
    if (errorCount == 0 || errorCount == null) {
      console.log("errorCount", errorCount);
      setCurrentStep(3);
    }
  };
  return (
    <RouterDivTemplate
      tab={[
        "Basic Account Details",
        "Control & Restriction",
        "Account Purpose",
        "Source Of Funds",
      ]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <BasicAccountDetailsTab ref={BasicAccountDetailsRef} />,
            <ControlandRestrictionTab ref={ControlAndRestrictionRef} />,
            <AccountPurposeTab ref={AccountPurposeRef} />,
            <SourceOfFundsTab />,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep(1);
              // if (disableNotesRef && disableNotesRef.current) {
              //   const errors = (disableNotesRef.current as any).validateCard();
              //   console.log("errors", errors);
              // }
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            className="ml-2"
            onClick={FieldValidation}
          ></BottomNavButton>
        </>
      }
    />
  );
};
