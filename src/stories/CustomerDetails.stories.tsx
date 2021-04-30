import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { CustomerDetails } from "../containers/organisms/customer-details/customer-details.organism";
import { CustomerTable } from "../containers/organisms/customer-table/customer-table.organism";
import "../index.css";

export default {
  component: CustomerDetails,
  title: "Customer Details",
  decorators: [withKnobs]
};

export const Wrapped = () => {
  return <CustomerDetails />;
};

export const Default = () => {
  return (
    <div className="py-16">
      <CustomerTable />
    </div>
  );
};
