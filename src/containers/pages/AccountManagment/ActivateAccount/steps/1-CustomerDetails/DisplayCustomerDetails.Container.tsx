import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import {
  ApplicantDetail,
  GuardianDetail,
} from "../../../../../../sdk/casa-account/interfaces";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { BasicDisplayComponent } from "../../BasicDisplayComponent";
import { DisplayCustomerDetailsTab } from "./tabs/DisplayCustomerDetailsTab";
import { DisplayGuardianDetailsTab } from "./tabs/DisplayGuardianDetailsTab";
import { DisplayNomineeDetailsTab } from "./tabs/DisplayNomineeDetails";

export const DisplayCustomerDetailsContainer = ({
  data,
  onCreateAccount,
  setCurrentStep,
}: {
  data: any;
  onCreateAccount?: any;
  setCurrentStep?: any;
}) => {
  const [tabLabels, setTableLabels] = useState<string[]>([
    "Customer Details",
    "Disable Notes",
    "Nominee Details",
  ]);
  const [showGuardianCard, setshowGuardianCard] = useState(false);
  console.log("DATA", data);

  useEffect(() => {
    const guardians: GuardianDetail[] = [];
    data.ApplicantDetails?.map((el: ApplicantDetail) => {
      for (const a of el.guardianDetail) {
        guardians.push({ ...a });
      }
    });

    if (guardians.length > 0) {
      setshowGuardianCard(true);
      setTableLabels((prev) => {
        let array = [...prev];
        array.splice(1, 0, "Guardian Details");
        console.log("new tab labels", array);

        return array;
      });
    }
  }, [data.ApplicantDetails]);
  return (
    <React.Fragment>
      {data !== false ? (
        <RouterDivTemplate
          tab={tabLabels}
          content={
            <ScrollTabTemplate
              tabArr={[
                <DisplayCustomerDetailsTab
                  applicantDetails={data ? data.ApplicantDetails : ""}
                  ownershipType={data ? data.AccountData?.ownershipType : ""}
                />,
                showGuardianCard ? (
                  <DisplayGuardianDetailsTab
                    applicantDetails={data ? data.ApplicantDetails : ""}
                  />
                ) : (
                  <div></div>
                ),

                <BasicDisplayComponent
                  currentStep={1}
                  currentCard={2}
                  type="FORM"
                  data={data ? data.AccountData : ""}
                />,

                <DisplayNomineeDetailsTab
                  applicantDetails={data ? data.ApplicantDetails : ""}
                />,
              ]}
            />
          }
          nav={
            <>
              <BottomNavButton
                text="Next"
                disabled={false}
                onClick={() => {
                  setCurrentStep(1);
                }}
              ></BottomNavButton>
            </>
          }
        />
      ) : (
        <Spin style={{ position: "relative", left: "50%", top: "50%" }} />
      )}
    </React.Fragment>
  );
};
