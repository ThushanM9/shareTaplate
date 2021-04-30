import React from "react";
import InformationSection from "../../../organisms/AccountManagement/InformationSection/InformationSection";
import { ChequeTemplate } from "../../../templates/ChequebookManagement/ChequeTemplate";
import { AccountDetails } from "./AccountDetails";

export const AccountDetailsPage = () => {
  return (
    <ChequeTemplate
      divsContainer={<AccountDetails />}
      information={<InformationSection />}
    />
  );
};
