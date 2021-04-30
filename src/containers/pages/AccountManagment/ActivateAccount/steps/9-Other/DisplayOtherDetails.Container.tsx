import React from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { BasicDisplayComponent } from "../../BasicDisplayComponent";
import { DisplayDocumentUploadTab } from "./tabs/DisplayDocumentUploadTab";
import { DisplayOperationInstructionsTab } from "./tabs/DisplayOperationInstructionsTab";

export const DisplayOtherDetailsContainer = ({
  data,
  setCurrentStep,
}: {
  data: any;
  setCurrentStep?: any;
}) => {
  // console.log("AAAAAA", data);
  return (
    <RouterDivTemplate
      tab={["Document Upload", "Operation Instructions", "Remarks"]}
      content={
        <ScrollTabTemplate
          tabArr={[
            // <BasicDisplayComponent
            //   currentCard={0}
            //   currentStep={9}
            //   type="FORM"
            //   data={data.DocumentDetail}
            // ></BasicDisplayComponent>,
            <DisplayDocumentUploadTab data={data} />,
            <DisplayOperationInstructionsTab data={data} />,
            <BasicDisplayComponent
              currentCard={2}
              currentStep={9}
              type="FORM"
              data={data.AccountRemarks}
            ></BasicDisplayComponent>,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(7);
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(9);
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
