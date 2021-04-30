import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Tag } from "antd";
import React, { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SmallTableTemplate from "../../../../../templates/SmallTableTemplate";
import { useGetIssuedPassbooksByAccountID } from "./methods";

export interface PassbookListViewProps {}

const columns = [
  {
    title: "Account Name",
    dataIndex: "accountName",
    key: "accountName"
  },
  {
    title: "Account No.",
    dataIndex: "accountNo",
    key: "accountNo"
  },
  {
    title: "Issue Date",
    dataIndex: "passbookIssueDate",
    key: "passbookIssueDate"
  },
  {
    title: "Book No.",
    dataIndex: "passbookNo",
    key: "passbookNo"
  },

  {
    title: "Status",
    dataIndex: "statusTag",
    key: "statusTag"
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action"
  }
];

const PassbookListView: FC<PassbookListViewProps> = props => {
  const [searchString, setSearchString] = useState("");
  const { accountId } = useParams();
  const { data: passbookList, loading } = useGetIssuedPassbooksByAccountID(
    accountId
  );

  const data = passbookList.map(item => {
    return {
      accountName: "[N/A]",
      accountNo: item.accountNo,
      passbookIssueDate: item.passbookIssueDate,
      passbookNo: item.passbookNo,
      statusTag:
        item.status === "ACTIVE" ? (
          <Tag color="green" className="px-4">
            Active
          </Tag>
        ) : (
          <Tag color="red" className="px-4">
            Inactive
          </Tag>
        ),
      action: (
        <div>
          <Button type="link" className="text-xxxs p-0 mr-2">
            <Link
              to={`/AnRkr/view_inquiry/${accountId}/passbook_inquiry/${item.id}/view`}
            >
              View
            </Link>
          </Button>
        </div>
      )
    };
  });

  return (
    <div className="bg-white h-full p-4">
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
          "Loading Passbook data..."
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

export default PassbookListView;
