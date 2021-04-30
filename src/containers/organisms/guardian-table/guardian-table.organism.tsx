import { Table } from "antd";
import React from "react";

const columns = [
  {
    title: "Relationship",
    dataIndex: "relationship",
    key: "relationship",
    className: "text-sm"
  },
  {
    title: "Account Name",
    dataIndex: "accName",
    key: "accName",
    className: "text-sm"
  },
  {
    title: "NIC",
    dataIndex: "nic",
    key: "nic",
    className: "text-sm"
  }
];

const data = [
  {
    key: "1",
    relationship: "Father",
    accName: "James Doe",
    nic: "234235235233"
  }
];

export const GuardianTable = () => {
  return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};
