import React, { useState } from "react";
import SearchTableTemplate from "../../../templates/SearchTableTemplate/SearchTableTemplate";
import { columns } from "./RequestCheckbookTableColumns";
import { checkbookCustomerData } from "./RequestCheckbookTableData";

const RequestChequebook = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  if (selectedCustomer) {
    return (
      <div></div>
      // <AccountManagementTemplate
      //   information={<InformationSection />}
      //   stepsNav={<ChequeSteps />}
      //   divsContainer={
      //     <Tabs
      //       selectedCustomer={selectedCustomer}
      //       setSelectedCustomer={setSelectedCustomer}
      //     />
      //   }
      // ></AccountManagementTemplate>
    );
  }
  return (
    <SearchTableTemplate columns={columns} data={checkbookCustomerData()} />
  );
};

export default RequestChequebook;
