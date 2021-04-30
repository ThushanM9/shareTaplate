import { Avatar, Table, Tag } from "antd";
import React from "react";

const columns = [
  {
    title: "Customer Name",
    dataIndex: "name",
    key: "name",
    className: "text-sm"
  },
  {
    title: "Customer ID",
    dataIndex: "id",
    key: "id",
    className: "text-sm"
  },
  {
    title: "Date Of Birth",
    dataIndex: "dob",
    key: "dob",
    className: "text-sm"
  },
  {
    title: "Person Reference Code",
    dataIndex: "refCode",
    key: "refCode",
    className: "text-sm"
  },
  {
    title: "Customer Photo",
    dataIndex: "photo",
    key: "photo",
    className: "text-sm",
    render: () => (
      <div className=" flex justify-center">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
    )
  },
  {
    title: "Signatures",
    dataIndex: "signatures",
    key: "signatures",
    className: "text-sm"
  },
  {
    title: "System",
    dataIndex: "system",
    key: "system",
    className: "text-sm"
  },
  {
    title: "Cutomer tag",
    dataIndex: "cusTag",
    key: "cusTag",
    className: "text-sm",
    render: (text: string) => <Tag color="blue">{text}</Tag>
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    id: "000045345634",
    dob: "10/10/1993",
    refCode: "235354546464643",
    signatures: "1",
    system: "Fusion",
    cusTag: "Individual"
  }
];

export const CustomerTable = () => {
  return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};
