import React from "react";
import { EmptyApproveAccountData } from "./other/EmptyApproveAccountData";

export const defaultApproveAccountState = {
  globalFormState: EmptyApproveAccountData,
};

export const ApproveAccountContext = React.createContext({
  state: defaultApproveAccountState,
  setState: (state: typeof defaultApproveAccountState) => {},
});
