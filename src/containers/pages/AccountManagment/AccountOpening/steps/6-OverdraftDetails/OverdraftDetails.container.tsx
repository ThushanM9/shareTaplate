import React, { useRef } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { OverdraftDetailsTab } from "./tabs/OverdraftDetailsTab";
import { RecoveryAccountTab } from "./tabs/RecoveryAccountTab";

export const OverdraftDetails_Container = ({
  setCurrentStep,
}: {
  setCurrentStep: any;
}) => {
  const overdraftDetailsRef = useRef();
  const RecoveryAccountRef = useRef();
  return (
    <RouterDivTemplate
      tab={["Overdraft Details", "Recovery Account"]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <OverdraftDetailsTab ref={overdraftDetailsRef} />,
            <RecoveryAccountTab ref={RecoveryAccountRef} />,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep(4);
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
            onClick={() => {
              setCurrentStep(6);
              if (overdraftDetailsRef && overdraftDetailsRef.current) {
                const errors = (overdraftDetailsRef.current as any).validateCard();
                console.log("errors", errors);
              }
              if (RecoveryAccountRef && RecoveryAccountRef.current) {
                const errors = (RecoveryAccountRef.current as any).validateCard();
                console.log("errors", errors);
              }
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
