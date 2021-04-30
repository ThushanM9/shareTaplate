import { Button } from "antd";
import React from "react";
import CusotmerButton from "../../../organisms/customerTabs/CustomerButton";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";
import SmallTableTemplate from "../../../templates/SmallTableTemplate";

export const AccountDetailsTab = () => {
  const data = [
    {
      key: 1,
      AccNumber: "0012324242",
      ConNumber: "0772342232",
      TickNumber: "002344242",
      AccName: "John Doe",
      action: (
        <Button type="link" className="text-xxxs p-0">
          Remove
        </Button>
      )
    }
  ];
  const columns = [
    {
      title: "Account Number",
      dataIndex: "AccNumber",
      key: "AccNumber"
    },
    {
      title: "Contact Number",
      dataIndex: "ConNumber",
      key: "ConNumber"
    },
    {
      title: "Ticket Number",
      dataIndex: "TickNumber",
      key: "TickNumber"
    },
    {
      title: "Account Name",
      dataIndex: "AccName",
      key: "AccName"
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action"
    }
  ];
  return (
    <DetailsBoxTemplate
      title="Account Details"
      details="These are the details of the account"
      item={
        <div className=" pb-32">
          <SmallTableTemplate className=" mt-8" columns={columns} data={data} />
          <CusotmerButton className="mt-4" name="Add Account"></CusotmerButton>
        </div>
      }
    />
  );
};
