import React, { useState } from "react";
import InformationSection from "../../../organisms/AccountManagement/InformationSection/InformationSection";
import ChequeSteps from "../../../organisms/Cheque/ChequeSteps";
import AccountManagementTemplate from "../../../templates/AccountManagement/AccountManagementTemplate";

const RequestChequebookProcess = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  //   if (selectedCustomer) {
  return (
    <AccountManagementTemplate
      information={<InformationSection />}
      stepsNav={<ChequeSteps />}
      divsContainer={<div>sfsdf</div>}
    ></AccountManagementTemplate>
  );
  //   }
};

export default RequestChequebookProcess;
