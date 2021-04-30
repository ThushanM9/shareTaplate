import { Avatar, Button, Tag } from "antd";
import React from "react";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";
import SmallTableTemplate from "../../../templates/SmallTableTemplate";

const dataSource = [
  {
    key: "1",
    name: "Shawn Robertson",
    nic: "342273249v",
    scheme: "Scheme 1",
    accNumber: "12321312323",
    accID: "875786576",
    status: (
      <Tag color="green" className="transform scale-75">
        Active
      </Tag>
    ),
    photo: (
      <div className="">
        {" "}
        <Avatar icon="U"></Avatar>{" "}
      </div>
    ),
    signature: "1",
    action: (
      <div>
        <Button type="link" className="text-xxxs p-0 mr-2">
          Update
        </Button>
        <Button type="link" className="text-xxxs p-0">
          View
        </Button>
      </div>
    )
  }
];
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "NIC",
    dataIndex: "nic",
    key: "nic"
  },
  {
    title: "Scheme Name",
    dataIndex: "scheme",
    key: "scheme"
  },
  {
    title: "Account Number",
    dataIndex: "accNumber",
    key: "accNumber"
  },
  {
    title: "Account ID",
    dataIndex: "accID",
    key: "accID"
  },

  {
    title: "Account Status",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Customer Photo",
    dataIndex: "photo",
    key: "photo"
  },
  {
    title: "Signature",
    dataIndex: "signature",
    key: "signature"
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action"
  }
];

export const AccountDetailsCard = () => {
  return (
    <DetailsBoxTemplate
      title="Account Details"
      details="Add an Existing or New Customer"
      btn
      item={
        <div className="my-4 pb-24">
          <h1 className="text-xs  font-semibold">Selected Account</h1>
          <SmallTableTemplate columns={columns} data={dataSource} />
        </div>
      }
    />
  );
};
