import React from "react";
import InformationSection from "../../organisms/AccountManagement/InformationSection/InformationSection";
import AccountManagementTemplate from "../../templates/AccountManagement/AccountManagementTemplate";
import { SignatureSteps } from "../SignatureUpload/Steps";
import { TestRouter } from "./TestRouter";

export const TestPage = () => {
  return (
    <AccountManagementTemplate
      information={<InformationSection />}
      stepsNav={<SignatureSteps />}
      divsContainer={<TestRouter />}
    ></AccountManagementTemplate>
  );
};
