import React from "react";
import InformationNameTag from "../../../../organisms/AccountManagement/InformationSection/InformationNameTag";
import { CardTemplate } from "./card-template";

export const PassbookDetailsCard = ({
  BookNo,
  NoofPages,
  LinesPerPage,
  ProductDetails,
}: {
  BookNo: string;
  NoofPages: string;
  LinesPerPage: string;
  ProductDetails: string;
}) => {
  const data = [
    {
      name: "Book No",
      value: BookNo,
    },
    {
      name: "No of Pages",
      value: NoofPages,
    },
    {
      name: "Lines Per Page",
      value: LinesPerPage,
    },
    {
      name: "Product Details",
      value: ProductDetails,
    },
  ];
  return (
    <CardTemplate title="Passbook Details">
      <div className="pt-4 pb-2">
        {data.map((item, index) => {
          return <InformationNameTag name={item.name} info={item.value} />;
        })}
      </div>
    </CardTemplate>
  );
};
