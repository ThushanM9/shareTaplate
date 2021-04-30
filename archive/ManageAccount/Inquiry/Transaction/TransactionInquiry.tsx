import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LOLCSDK } from "../../../../../../sdk";
import { useSDK } from "../../../../../../utils/hooks/useSDK";
import SmallTableTemplate from "../../../../../templates/SmallTableTemplate";

export interface TransactionInquiryProps {}

const columns = [
  {
    title: "Transaction Number",
    dataIndex: "number",
    key: "number"
  },
  {
    title: "Value Date",
    dataIndex: "vDate",
    key: "vDate"
  },
  {
    title: "Booking Date",
    dataIndex: "bDate",
    key: "bDate"
  },
  {
    title: "Transaction Type",
    dataIndex: "type",
    key: "type"
  },

  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency"
  },
  {
    title: "Reversal Number",
    dataIndex: "rNo",
    key: "rNo"
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount"
  },
  {
    title: "Cheque Number",
    dataIndex: "chequeNumber",
    key: "chequeNumber"
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action"
  }
];

const TransactionInquiry: FC<TransactionInquiryProps> = () => {
  const [searchString, setSearchString] = useState("");
  let { accountId } = useParams();

  const { data: transactions, loading, error } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.TransactionService.getTransactionsByAccountId(accountId, 0, 20),
    [accountId]
  );

  const data = transactions.data
    ? transactions.data.transaction.map(item => {
        return {
          key: "",
          number: item.transactionId,
          vDate: item.valueDateTime.split(" ")[0],
          bDate: item.bookingDateTime.split(" ")[0],
          type: "[N/A]",
          currency: item.amount.currency,
          rNo: "[N/A]",
          amount: item.amount.amount,
          chequeNumber: "[N/A]",

          action: (
            <div>
              <Button type="link" className="text-xxxs p-0 mr-2">
                <Link
                  to={`/AnRkr/view_inquiry/${accountId}/transaction_inquiry/${item.transactionId}/view`}
                >
                  View
                </Link>
              </Button>
            </div>
          )
        };
      })
    : [];

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
          "Loading Transaction data..."
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

export default TransactionInquiry;
