import React, { useRef } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { ChequebookDetailsTab } from "./tabs/ChequebookDetails";
import { NotificationTableTab } from "./tabs/NotificationTableTab";

export const Preferences_Container = ({
  setCurrentStep,
}: {
  setCurrentStep: any;
}) => {
  const NotificationTableRef = useRef();
  const AlertingRulesRef = useRef();
  const ChequebookDetailsRef = useRef();
  return (
    <RouterDivTemplate
      tab={[
        "Notification Methods",
        "Chequebook Details",
        // "Passbook Details",
        // "Sweep Instructions",
      ]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <NotificationTableTab ref={NotificationTableRef} />,
            // <AlertingRulesTab ref={AlertingRulesRef} />,
            <ChequebookDetailsTab ref={ChequebookDetailsRef} />,
            // <PassbookDetailsTab />,
            // <SweepInstructionsTab />,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep(5);
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
              setCurrentStep(7);
              if (NotificationTableRef && NotificationTableRef.current) {
                const errors = (NotificationTableRef.current as any).validateCard();
                console.log("errors", errors);
              }

              if (AlertingRulesRef && AlertingRulesRef.current) {
                const errors = (AlertingRulesRef.current as any).validateCard();
                console.log("errors", errors);
              }
              if (ChequebookDetailsRef && ChequebookDetailsRef.current) {
                const errors = (ChequebookDetailsRef.current as any).validateCard();
                console.log("errors", errors);
              }
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
