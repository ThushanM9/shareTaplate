import React from "react";
import InformationSection from "../../organisms/AccountManagement/InformationSection/InformationSection";
import AccountManagementTemplate from "../../templates/AccountManagement/AccountManagementTemplate";
import { SignatureUploadRouter } from "./SignatureUploadRouter";
import { SignatureSteps } from "./Steps";

export const SignatureUploadPage = () => {
  return (
    <AccountManagementTemplate
      information={<InformationSection />}
      stepsNav={<SignatureSteps />}
      divsContainer={<SignatureUploadRouter />}
    ></AccountManagementTemplate>
  );
};
