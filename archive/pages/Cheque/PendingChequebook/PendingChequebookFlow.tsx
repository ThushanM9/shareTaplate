import React from "react";
import InformationSection from "../../../organisms/AccountManagement/InformationSection/InformationSection";
import AccountManagementTemplate from "../../../templates/AccountManagement/AccountManagementTemplate";
import { PendingChequebookRouter } from "./PendingChequebookRouter";
import { PendingChequebookSteps } from "./Steps";

export const PendingChequebookFlow = () => {
  return (
    <AccountManagementTemplate
      stepsNav={<PendingChequebookSteps />}
      divsContainer={<PendingChequebookRouter />}
      information={<InformationSection />}
    />
  );
};
