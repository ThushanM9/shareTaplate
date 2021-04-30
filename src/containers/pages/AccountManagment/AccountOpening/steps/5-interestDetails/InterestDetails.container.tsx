import React, { useRef } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { SimpleFormTab } from "../../helpers/simple-form-tab";
import { CreditInterestPostingDetailsTab } from "./tabs/CreditInterestPostingDetailsTab";
import { DebiInterestPostingDetailsTab } from "./tabs/DebitInterestPostingDetailsTab";

export const InterestDetails_Container = ({
  setCurrentStep,
}: {
  setCurrentStep: any;
}) => {
  const CreditInterestRateDetailsRef = useRef();
  const CreditInterestPostingDetailsRef = useRef();
  const CreditInterestBenefiaryDetailsRef = useRef();
  const DebiInterestPostingDetailsRef = useRef();
  return (
    <RouterDivTemplate
      tab={[
        "Credit Interest Rate Details",
        "Credit Interest",
        // "Debit Interest Benefiary Details",
        "Debit Interest Posting Details",
      ]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <SimpleFormTab
              ref={CreditInterestRateDetailsRef}
              stepIndex={4}
              cardIndex={0}
            />,
            <CreditInterestPostingDetailsTab
              ref={CreditInterestPostingDetailsRef}
            />,
            // <CreditInterestBenefiaryDetailsTab
            //   ref={CreditInterestBenefiaryDetailsRef}
            // />,
            <DebiInterestPostingDetailsTab
              ref={DebiInterestPostingDetailsRef}
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
              setCurrentStep(3);
              // if (disableNotesRef && disableNotesRef.current) {
              //   const errors = (disableNotesRef.current as any).validateCard();
              //   console.log("errors", errors);
              // }
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            className="ml-2"
            disabled={false}
            onClick={() => {
              setCurrentStep(5);
              if (
                CreditInterestRateDetailsRef &&
                CreditInterestRateDetailsRef.current
              ) {
                const errors = (CreditInterestRateDetailsRef.current as any).validateCard();
                console.log("errors", errors);
              }
              if (
                CreditInterestPostingDetailsRef &&
                CreditInterestPostingDetailsRef.current
              ) {
                const errors = (CreditInterestPostingDetailsRef.current as any).validateCard();
                console.log("errors", errors);
              }
              if (
                CreditInterestBenefiaryDetailsRef &&
                CreditInterestBenefiaryDetailsRef.current
              ) {
                const errors = (CreditInterestBenefiaryDetailsRef.current as any).validateCard();
                console.log("errors", errors);
              }
              if (
                DebiInterestPostingDetailsRef &&
                DebiInterestPostingDetailsRef.current
              ) {
                const errors = (DebiInterestPostingDetailsRef.current as any).validateCard();
                console.log("errors", errors);
              }
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
