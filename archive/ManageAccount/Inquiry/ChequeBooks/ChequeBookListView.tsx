import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Tag } from "antd";
import React, { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SmallTableTemplate from "../../../../../templates/SmallTableTemplate";
import { useGetChequeBooksByAccountId } from "./methods";

export interface ChequeBooksListViewProps {}

const columns = [
  {
    title: "Book no.",
    dataIndex: "chequeBookSrlNo",
    key: "chequeBookSrlNo"
  },
  {
    title: "Current Status",
    dataIndex: "statusTag",
    key: "statusTag"
  },
  {
    title: "Issue Date",
    dataIndex: "chequeBookIssueDate",
    key: "chequeBookIssueDate"
  },
  {
    title: "Chequebook Type",
    dataIndex: "chequeBookType",
    key: "chequeBookType"
  },
  {
    title: "Stock Type",
    dataIndex: "stockType",
    key: "stockType"
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action"
  }
];
const ChequeBooksListView: FC<ChequeBooksListViewProps> = () => {
  const [searchString, setSearchString] = useState("");
  const { accountId } = useParams();
  const { data: chequeBooks, loading } = useGetChequeBooksByAccountId(
    accountId
  );

  const data = chequeBooks.map(item => {
    return {
      key: "",
      chequeBookSrlNo: item.chequeBookSrlNo,
      statusTag: (
        <Tag color="green" className="px-4">
          {item.chequeBookStatus}
        </Tag>
      ),
      chequeBookIssueDate: item.chequeBookIssueDate,
      chequeBookType: item.chequeBookType,
      stockType: "[N/A]",
      action: (
        <div>
          <Button type="link" className="text-xxxs p-0 mr-2">
            <Link
              to={`/AnRkr/view_inquiry/${accountId}/cheque_book_inquiry/${item.id}/view`}
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

export default ChequeBooksListView;
