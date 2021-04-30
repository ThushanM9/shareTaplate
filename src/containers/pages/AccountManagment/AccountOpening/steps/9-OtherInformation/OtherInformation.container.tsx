import React, { useRef } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { DocumentUpload } from "./tabs/DocumentUploadNew/DocumentUpload";
import { OperationInstructionsTab } from "./tabs/OperationInstructionsTab";
import { RemarksTab } from "./tabs/RemarksTab";

export const OtherInformation_Container = ({
  setCurrentStep,
}: {
  setCurrentStep: any;
}) => {
  const DocumentUploadTabRef = useRef();
  const OperationInstructionsTabRef = useRef();
  const RemarksTabRef = useRef();
  return (
    <RouterDivTemplate
      tab={[
        // "Introducer Information",
        "Document Upload",
        "Operation Instructions",
        // "Manual Wrokflow",
        "Remarks",
      ]}
      content={
        <ScrollTabTemplate
          tabArr={[
            // <IntroducerInformationTab />,
            // <DocumentUploadTab ref={DocumentUploadTabRef} />,
            <DocumentUpload />,
            <OperationInstructionsTab ref={OperationInstructionsTabRef} />,
            // <ManualWorkflowTab />,
            <RemarksTab ref={RemarksTabRef} />,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep(7);
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
              setCurrentStep(9);
              if (DocumentUploadTabRef && DocumentUploadTabRef.current) {
                const errors = (DocumentUploadTabRef.current as any).validateCard();
                console.log("errors", errors);
              }
              if (
                OperationInstructionsTabRef &&
                OperationInstructionsTabRef.current
              ) {
                const errors = (OperationInstructionsTabRef.current as any).validateCard();
                console.log("errors", errors);
              }
              if (RemarksTabRef && RemarksTabRef.current) {
                const errors = (RemarksTabRef.current as any).validateCard();
                console.log("errors", errors);
              }
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
