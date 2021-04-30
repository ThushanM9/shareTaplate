import React from "react";
import { CustomerDetails } from "../customer-details/customer-details.organism";
import { DisableNotes } from "../disable-notes/disable-notes.organism";
import { GuardianDetails } from "../guardian-details/guardian-details.organism";

export const CustomerDetailsTab = () => {
  return (
    <div>
      <CustomerDetails />
      <GuardianDetails />
      <DisableNotes />
    </div>
  );
};
