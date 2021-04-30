import React from "react";
import InformationNameTag from "../../../../organisms/AccountManagement/InformationSection/InformationNameTag";
import { CardTemplate } from "./card-template";

export const AccountDetailsCard = ({
  scheme,
  type,
  number,
  name,
  currency,

  status,
}: {
  scheme: string;
  type: string;
  number: string;
  name: string;
  currency: string;

  status: string;
}) => {
  const data = [
    {
      name: "Scheme Type",
      value: scheme,
    },
    {
      name: "Account Type",
      value: type,
    },
    {
      name: "Account Number",
      value: number,
    },
    {
      name: "Account Name",
      value: name,
    },
    {
      name: "Account Currency",
      value: currency,
    },
    {
      name: "Account Status",
      value: status,
    },
  ];
  return (
    <CardTemplate title="Account Details">
      <div className="pt-4 pb-2">
        {data.map((item, index) => {
          return <InformationNameTag name={item.name} info={item.value} />;
        })}
      </div>
    </CardTemplate>
  );
};
