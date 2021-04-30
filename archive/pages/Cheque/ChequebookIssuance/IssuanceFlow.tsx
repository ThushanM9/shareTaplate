import React from "react";
import InformationSection from "../../../organisms/AccountManagement/InformationSection/InformationSection";
import AccountManagementTemplate from "../../../templates/AccountManagement/AccountManagementTemplate";
import { IssuanceRouter } from "./IssuanceRouter";
import { IssuanceSteps } from "./Steps";

export const IssuanceFlow = () => {
  return (
    <AccountManagementTemplate
      stepsNav={<IssuanceSteps />}
      divsContainer={<IssuanceRouter />}
      information={<InformationSection />}
    />
  );
};
