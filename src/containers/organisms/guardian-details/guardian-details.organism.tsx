import { Card } from "antd";
import React from "react";
import { GuardianTable } from "../guardian-table/guardian-table.organism";

export const GuardianDetails = () => {
  return (
    <div className=" my-8 shadow rounded overflow-auto max-w-md">
      <Card
        bordered={false}
        title={
          <div>
            <div>Guardian Details</div>
            <div className=" text-xs text-gray-500">
              These are the details of the guardians
            </div>
          </div>
        }
      >
        <GuardianTable />
      </Card>
    </div>
  );
};
