import React from "react";
import BasicInput from "../../../../atoms/BasicInput.atom";
import { CardTemplate } from "./card-template";
export const AccountNo = ({ accountNo }: { accountNo: string }) => (
  <CardTemplate title="Account No.">
    <BasicInput className="w-full" value={accountNo} disabled={true} />
  </CardTemplate>
);
