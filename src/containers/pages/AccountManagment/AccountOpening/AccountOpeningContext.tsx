import React from "react";
import { Customer } from "../../../../sdk/comn-customer/interfaces";
import { AccountCreationEmptyObject } from "./data/emptyFormReqest";

export const defaultAccountOpeningContainerState = {
  customer: undefined as Customer | undefined,
  globalFormState: AccountCreationEmptyObject,
};

export const AccountOpeningContainerContext = React.createContext({
  state: defaultAccountOpeningContainerState,
  setState: (state: typeof defaultAccountOpeningContainerState) => {},
});
