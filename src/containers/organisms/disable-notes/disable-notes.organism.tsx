import { Card, InputNumber, Select } from "antd";
import React from "react";

export const DisableNotes = () => {
  return (
    <div className=" my-8 shadow rounded overflow-auto max-w-md">
      <Card
        bordered={false}
        title={
          <div>
            <div>Disable Notes</div>
            <div className=" text-xs text-gray-500">
              This is required if the customer's disabled
            </div>
          </div>
        }
      >
        <div>
          <div className=" font-medium my-2">
            Is Visiting this user required?
          </div>
          <Select value="yes">
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
          </Select>
          <div className="mt-4 mb-2 font-medium">How many visits per week?</div>
          <InputNumber min={0} max={100} defaultValue={0} />
        </div>
      </Card>
    </div>
  );
};
