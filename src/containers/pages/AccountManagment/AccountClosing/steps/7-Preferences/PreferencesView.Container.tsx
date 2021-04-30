import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { iChangesListState } from "../../../../../../store/modules/ChangesList/ChangesList.model";
import { iStore } from "../../../../../../store/store.model";
import { useGetSDK } from "../../../../../../utils/hooks/useSDK";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { CheckbookDetailsInquiry } from "./ChequebookDetailsInquiry";
import { NotifcationMethodsInquiry } from "./NotificationMethodsInquiry";
import { PassbookDetailsInquiry } from "./PassbookDetailsInquiry";
import { SweepInstructionsInquiry } from "./SweepInstructionsInquiry";

export const PreferencesViewContainer = ({
  data,
  setCurrentStep,
}: {
  data: any;
  setCurrentStep?: any;
}) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  const state: iChangesListState = useSelector(
    (store: iStore) => store.changesList
  );
  const SDK = useGetSDK();
  return (
    <RouterDivTemplate
      tab={[
        "Notification Methods",
        "Chequebook Details",
        "Passbook Details",
        "Sweep Instructions",
      ]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <NotifcationMethodsInquiry data={data} />,
            <CheckbookDetailsInquiry data={data} />,
            <PassbookDetailsInquiry data={data} />,
            <SweepInstructionsInquiry data={data} />,
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
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
