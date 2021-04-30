import React from "react";
import InformationSection from "../../../organisms/AccountManagement/InformationSection/InformationSection";
import AccountManagementTemplate from "../../../templates/AccountManagement/AccountManagementTemplate";
import { PendingRouter } from "./PendingRouter";
import { PendingSteps } from "./Steps";

export const PendingRequestsFlow = () => {
  return (
    <AccountManagementTemplate
      stepsNav={<PendingSteps />}
      divsContainer={<PendingRouter />}
      information={<InformationSection />}
    />
  );
};
