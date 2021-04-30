import React from "react";
import FullTabTableTemplate from "../../../templates/FullTabTableTemplate/FullTabTableTemplate";
import TabTableTemplate from "../../../templates/TabTableTemplate/TabTableTemplate";

function PendingRequests() {
  return <FullTabTableTemplate table={<TabTableTemplate name="cheque" />} />;
}

export default PendingRequests;
