import React from "react";
import BasicInput from "../../../../atoms/BasicInput.atom";
import { CardTemplate } from "./card-template";
export const AccountNameCard = ({ accountName }: { accountName: string }) => (
  <CardTemplate title="Account Creation Date">
    <BasicInput className="w-full" value={accountName} disabled={true} />
  </CardTemplate>
);
