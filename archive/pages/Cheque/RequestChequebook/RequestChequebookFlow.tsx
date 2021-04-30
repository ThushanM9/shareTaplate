import React from "react";
import InformationSection from "../../../organisms/AccountManagement/InformationSection/InformationSection";
import AccountManagementTemplate from "../../../templates/AccountManagement/AccountManagementTemplate";
import { RequestChequebookRouter } from "./RequestChequebookRouter";
import { RequestSteps } from "./Steps";

export const RequestChequebookFlow = () => {
  return (
    <AccountManagementTemplate
      stepsNav={<RequestSteps />}
      divsContainer={<RequestChequebookRouter />}
      information={<InformationSection />}
    />
  );
};
