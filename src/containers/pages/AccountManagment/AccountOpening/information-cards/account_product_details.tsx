import React from "react";
import InformationNameTag from "../../../../organisms/AccountManagement/InformationSection/InformationNameTag";
import { CardTemplate } from "./card-template";

export const AccountProductDetailsCard = ({
  accountType,
  accountSubType,
  personType,
  productType,
  productCategory,
  subProduct,
}: {
  accountType: string;
  accountSubType: string;
  personType: string;
  productType: string;
  productCategory: string;
  subProduct: string;
}) => {
  const data = [
    {
      name: "Account Type",
      value: accountType,
    },
    {
      name: "Account Sub Type",
      value: accountSubType,
    },
    {
      name: "Account Person Type",
      value: personType,
    },
    {
      name: "Product Type",
      value: productType,
    },
    {
      name: "Product Category",
      value: productCategory,
    },
    {
      name: "Sub Product",
      value: subProduct,
    },
  ];
  return (
    <CardTemplate title="Product Details">
      <div className="pt-4 pb-2">
        {data.map((item, index) => {
          return <InformationNameTag name={item.name} info={item.value} />;
        })}
      </div>
    </CardTemplate>
  );
};
