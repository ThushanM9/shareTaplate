import React, { useRef } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { CardInformationTab } from "./tabs/CardInformationTab";

export const CardInformation_Container = ({
  setCurrentStep,
}: {
  setCurrentStep: any;
}) => {
  const CardInformationDetailsRef = useRef();
  return (
    <RouterDivTemplate
      tab={["Card Information"]}
      content={
        <ScrollTabTemplate
          tabArr={[<CardInformationTab ref={CardInformationDetailsRef} />]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep(6);
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
              setCurrentStep(8);
              if (
                CardInformationDetailsRef &&
                CardInformationDetailsRef.current
              ) {
                const errors = (CardInformationDetailsRef.current as any).validateCard();
                console.log("errors", errors);
              }
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
