import React from "react";
import FullTabTableTemplate from "../../../templates/FullTabTableTemplate/FullTabTableTemplate";
import TabTableTemplate from "../../../templates/TabTableTemplate/TabTableTemplate";

function ApproveAccount() {
  return (
    <FullTabTableTemplate table={<TabTableTemplate name="approveAccount" />} />
  );
}

export default ApproveAccount;
