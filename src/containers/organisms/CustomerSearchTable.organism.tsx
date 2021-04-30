import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table/interface";
import React from "react";
import SelectMenu from "../pages/AccountManagment/AccountOpening_Old/1-CustomerDetails/ExistingCutomerModal/SelectMenu";

interface Customer {
  key: string;
  name: string;
  id: string;
  dob: string;
  refCode: string;
  photo: string;
  signatures: string;
  system: string;
}

const CustomerSearchTable: React.FC<{
  setSelectedCustomer: (customer: string) => void;
}> = ({ setSelectedCustomer }) => {
  const columns: ColumnsType<Customer> = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Customer ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date Of Birth",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Person Reference Code",
      dataIndex: "refCode",
      key: "refCode",
    },
    {
      title: "Customer Photo",
      key: "photo",
      dataIndex: "photo",
      render: (url: string) => (
        <div className="text-center">
          <Avatar src={url} />
        </div>
      ),
    },
    {
      title: "Signatures",
      dataIndex: "signatures",
      key: "signatures",
    },
    {
      title: "System",
      dataIndex: "system",
      key: "system",
    },
    {
      title: "Customer Tag",
      key: "tag",
      render: () => <Tag color="blue">Individual</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="link" onClick={() => setSelectedCustomer(record.name)}>
          Select
        </Button>
      ),
    },
  ];

  const data: Customer[] = [
    {
      key: "1",
      name: "John Brown",
      id: "0000987898",
      dob: "10/10/1993",
      refCode: "124234235235",
      photo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      signatures: "1",
      system: "Fusion X",
    },
    {
      key: "2",
      name: "John Brown",
      id: "0000987898",
      dob: "10/10/1993",
      refCode: "124234235235",
      photo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      signatures: "1",
      system: "Fusion X",
    },
    {
      key: "3",
      name: "John Brown",
      id: "0000987898",
      dob: "10/10/1993",
      refCode: "124234235235",
      photo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      signatures: "1",
      system: "Fusion X",
    },
    {
      key: "4",
      name: "John Brown",
      id: "0000987898",
      dob: "10/10/1993",
      refCode: "124234235235",
      photo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      signatures: "1",
      system: "Fusion X",
    },
    {
      key: "5",
      name: "John Brown",
      id: "0000987898",
      dob: "10/10/1993",
      refCode: "124234235235",
      photo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      signatures: "1",
      system: "Fusion X",
    },
    {
      key: "6",
      name: "John Brown",
      id: "0000987898",
      dob: "10/10/1993",
      refCode: "124234235235",
      photo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      signatures: "1",
      system: "Fusion X",
    },
  ];
  const options = [
    {
      name: "Customer ID",
      value: 1,
    },
    {
      name: "Account Number",
      value: 2,
    },
  ];

  return (
    <div className="flex flex-col justify-center rounded-lg shadow bg-white pb-32 pt-10">
      <div
        style={{ background: "#F8F8F8" }}
        className="flex justify-between px-2 pl-4 py-2"
      >
        <Input className="w-1/2" placeholder="Search..." />
        <div className="flex ">
          <SelectMenu placeholder="All Systems" optionArr={options} />
          <Button className="h-full ml-1" type="primary">
            Search
            <SearchOutlined />
          </Button>
        </div>
      </div>
      <Table
        size="small"
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default CustomerSearchTable;
