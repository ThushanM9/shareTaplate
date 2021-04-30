import React from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { DisplayAlertingRulesTab } from "./tabs/DisplayAlertingRulesTab";
import { DisplayChequebookDetailsTab } from "./tabs/DisplayChequebookDetailsTab";
import { DisplayNotificationMethodsTab } from "./tabs/DisplayNotificationMethodsTab";

export const DisplayPreferencesContainer = ({
  data,
  setCurrentStep,
}: {
  data: any;
  setCurrentStep?: any;
}) => {
  // console.log("NOTIFI", data);
  return (
    <RouterDivTemplate
      tab={["Notification Methods", "Alerting Rules", "Chequebook Details"]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <DisplayNotificationMethodsTab data={data.NotificationDetail} />,
            <DisplayAlertingRulesTab data={data.NotificationDetail} />,
            <DisplayChequebookDetailsTab accountData={data.AccountData} />,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(5);
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            onClick={() => {
              setCurrentStep && setCurrentStep(7);
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
