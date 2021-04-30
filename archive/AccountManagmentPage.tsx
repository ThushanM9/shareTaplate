import React from "react";
import InformationSection from "../../organisms/AccountManagement/InformationSection/InformationSection";
import StepsSection from "../../organisms/AccountManagement/StepsSection";
import AccountManagementTemplate from "../src/containers/templates/AccountManagement/AccountManagementTemplate";
import AccountOpeningRouter from "./AccountOpeningRouter";

function AccountManagmentPage() {
  return (
    <AccountManagementTemplate
      // information={<p>sds</p>}
      information={<InformationSection />}
      stepsNav={<StepsSection />}
      divsContainer={<AccountOpeningRouter />}
    ></AccountManagementTemplate>
  );
}

export default AccountManagmentPage;
