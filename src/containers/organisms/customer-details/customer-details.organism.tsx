import { CloseOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import { CustomerTable } from "../customer-table/customer-table.organism";

export const CustomerDetails = () => {
  return (
    <div className=" my-8 shadow rounded overflow-auto">
      <Card
        bordered={false}
        title={
          <div>
            <div>Customer Details</div>
            <div className=" text-xs text-gray-500">
              Add an Existing or New Customer
            </div>
          </div>
        }
        extra={
          <div className="flex">
            <Button className="mr-4 text-sm" type="primary">
              Change Selected Customer
            </Button>
            <div className="flex flex-col justify-center cursor-pointer">
              <CloseOutlined />
            </div>
          </div>
        }
      >
        <CustomerTable />
      </Card>
    </div>
  );
};
