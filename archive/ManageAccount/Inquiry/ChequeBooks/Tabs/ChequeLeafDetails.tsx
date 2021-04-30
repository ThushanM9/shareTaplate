import { SearchOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Tag } from "antd";
import React, { FC, useState } from "react";
import SmallTableTemplate from "../../../../../../templates/SmallTableTemplate";
import { useGetChequeBookLeavesById } from "../methods";

export interface ChequeLeafDetailsProps {
  chequeBookId: string;
}

const columns = [
  {
    title: "Cheque Leaf No.",
    dataIndex: "leafNo",
    key: "leafNo"
  },
  {
    title: "Current Status",
    dataIndex: "statusTag",
    key: "statusTag"
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action"
  },
  {
    title: "Charge Type",
    dataIndex: "chargeType",
    key: "chargeType"
  },
  {
    title: "Charge Amount",
    dataIndex: "chargeAmount",
    key: "chargeAmount"
  },
  {
    title: " ",
    dataIndex: "checkbox",
    key: "checkbox"
  }
];

const ChequeLeafDetails: FC<ChequeLeafDetailsProps> = ({ chequeBookId }) => {
  const [searchString, setSearchString] = useState("");
  let { data: chequeBookDetails, loading } = useGetChequeBookLeavesById(
    chequeBookId
  );
  chequeBookDetails = [
    {
      leafNo: "111",
      status: "ACTIVE",
      chargeType: "AA",
      chargeAmount: "200"
    },
    {
      leafNo: "222",
      status: "INACTIVE",
      chargeType: "BB",
      chargeAmount: "400"
    },
    {
      leafNo: "333",
      status: "ACTIVE",
      chargeType: "type",
      chargeAmount: "200"
    },
    {
      leafNo: "4444",
      status: "INACTIVE",
      chargeType: "BB",
      chargeAmount: "400"
    }
  ];
  const data = chequeBookDetails.map((item: any) => {
    return {
      key: "",
      leafNo: item.leafNo,
      statusTag: (
        <Tag color={item.status === "ACTIVE" ? "green" : "red"}>
          {item.status}
        </Tag>
      ),
      action: (
        <Button type="link" className="text-xxs p-0 mr-2" disabled>
          {item.status}
        </Button>
      ),
      chargeType: item.chargeType,
      chargeAmount: item.chargeAmount,
      checkbox: <Checkbox disabled />
    };
  });

  return (
    <div className="bg-white p-4">
      <div className="mb-4">
        <Input
          className="chequeInput w-1/6 text-xxxs py-1"
          placeholder="Search"
          size="small"
          prefix={<SearchOutlined className="mr-1" />}
          onChange={e => setSearchString(e.target.value)}
        />
      </div>
      <div>
        {loading ? (
          "Loading Cheque books data..."
        ) : (
          <SmallTableTemplate
            columns={columns}
            data={searchString === "" ? data : []}
            pagination={{ defaultPageSize: 8 }}
          />
        )}
      </div>
    </div>
  );
};

export default ChequeLeafDetails;
