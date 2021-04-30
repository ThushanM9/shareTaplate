import React from "react";
import FullTabTableTemplate from "../../../templates/FullTabTableTemplate/FullTabTableTemplate";
import TabTableTemplate from "../../../templates/TabTableTemplate/TabTableTemplate";

export const IssuanceTable = () => {
  return <FullTabTableTemplate table={<TabTableTemplate name="cheque" />} />;
};
