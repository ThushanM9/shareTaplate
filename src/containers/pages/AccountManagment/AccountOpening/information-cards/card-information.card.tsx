import React from "react";
import InformationNameTag from "../../../../organisms/AccountManagement/InformationSection/InformationNameTag";
import { CardTemplate } from "./card-template";
export const CardInformationCard = ({ value }: { value: string }) => (
  <CardTemplate title="Card Information">
    <>
      <InformationNameTag name="Card Fee Details" info={value} />
    </>
  </CardTemplate>
);

//! keep this disabled . 15/07/2020
// ! two more fields need to be added.
