import React from "react";
import { getDob } from "../../../../../utils/get-dob";
import InformationNameTag from "../../../../organisms/AccountManagement/InformationSection/InformationNameTag";
import { CardTemplate } from "./card-template";
export const CustomerDetailsCard = ({
  name,
  id,
  dob,
  code,
}: {
  name: string;
  id: string;
  dob: string;
  code: string;
}) => {
  return (
    <CardTemplate title="Customer Details">
      <div className="pt-4 pb-2">
        <InformationNameTag name="Name" info={name} />
        <InformationNameTag name="Customer ID" info={id} />
        <InformationNameTag name="Date of Birth" info={getDob(dob)} />
        <InformationNameTag name="Person Reference Code" info={code} />
      </div>
    </CardTemplate>
  );
};
