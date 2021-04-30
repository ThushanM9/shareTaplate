import React from "react";
import InformationNameTag from "../../../../organisms/AccountManagement/InformationSection/InformationNameTag";
import { CardTemplate } from "./card-template";

export const ProductDetailsCard = ({
  accountType,
  personType,
}: {
  personType: string;
  accountType: string;
}) => (
  <CardTemplate title="Product Details">
    <div className="pt-4 pb-2">
      <InformationNameTag name="Product Category" info={accountType} />
      <InformationNameTag name="Account Person Type" info={personType} />
    </div>
  </CardTemplate>
);

// ! Show the card after sub product is selected.
