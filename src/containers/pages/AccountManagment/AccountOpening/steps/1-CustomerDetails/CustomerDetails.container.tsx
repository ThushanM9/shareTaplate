import moment from "moment";
import React, { useContext, useRef } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { AccountOpeningContainerContext } from "../../AccountOpeningContext";
import { SelectCustomer } from "./components/select-customer.container";
import { CustomerDetailsTab } from "./tabs/CustomerDetails";
import { DisableNotesDetailsTab } from "./tabs/DisableNotes";
import { GuardianDetailsTab } from "./tabs/GuardianDetails";
import { NomineeDetailsTab } from "./tabs/NomineeDetails";

export const CutomerDetails_Contianer = ({
  setCurrentStep,
}: {
  setCurrentStep: any;
}) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);

  const disableNotesRef = useRef();

  if (!state.customer) {
    return <SelectCustomer />;
  }

  return (
    <RouterDivTemplate
      tab={
        !(
          state.customer!.cusOrganizationTypeCode !== "ORCO" &&
          18 >= moment().diff(state.customer!.perDateOfBirth, "years")
        )
          ? ["Customer Details", "Disability Notes", "Nominee Details"]
          : [
              "Customer Details",
              "Guardian Details",
              "Disability Notes",
              "Nominee Details",
            ]
      }
      content={
        <ScrollTabTemplate
          tabArr={
            !(
              state.customer!.cusOrganizationTypeCode !== "ORCO" &&
              18 >= moment().diff(state.customer!.perDateOfBirth, "years")
            )
              ? [
                  <CustomerDetailsTab />,
                  <DisableNotesDetailsTab ref={disableNotesRef} />,
                  <NomineeDetailsTab />,
                ]
              : [
                  <CustomerDetailsTab />,
                  <GuardianDetailsTab />,
                  <DisableNotesDetailsTab ref={disableNotesRef} />,
                  <NomineeDetailsTab />,
                ]
          }
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Next"
            disabled={false}
            onClick={() => {
              var errorCount;
              setCurrentStep(1);
              if (disableNotesRef && disableNotesRef.current) {
                const errors = (disableNotesRef.current as any).validateCard();
                errorCount = errorCount + errors;
                console.log("errors", errors);
              }
              // if (errorCount <= 0) {
              //   setCurrentStep(1);
              // }
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
