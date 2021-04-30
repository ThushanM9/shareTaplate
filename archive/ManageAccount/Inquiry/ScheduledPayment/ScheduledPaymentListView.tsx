import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SmallTableTemplate from "../../../../../templates/SmallTableTemplate";
import { useGetAllScheduledPaymentByAccountId } from "./methods";

export interface ScheduledPaymentListViewProps {}
const columns = [
  {
    title: "Account Number",
    dataIndex: "accountNumber",
    key: "accountNumber"
  },
  {
    title: "Transaction Number",
    dataIndex: "transactionNumber",
    key: "transactionNumber"
  },
  {
    title: "Transaction Date",
    dataIndex: "transactionDate",
    key: "transactionDate"
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency"
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount"
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action"
  }
];

const ScheduledPaymentListView: FC<ScheduledPaymentListViewProps> = () => {
  const [searchString, setSearchString] = useState("");
  const { accountId } = useParams();
  const {
    data: scheduledPaymentData,
    loading
  } = useGetAllScheduledPaymentByAccountId(accountId);

  const data: any[] = scheduledPaymentData
    ? scheduledPaymentData.content.map((item: any) => {
        return {
          key: "",
          accountNumber: item.accountNo,
          transactionNumber: "[N/A]",
          transactionDate: "[N/A]",
          currency: item.instructedCurrencyCode,
          amount: item.instructedAmount,
          action: (
            <div>
              <Button type="link" className="text-xxxs p-0 mr-2">
                <Link
                  to={`/AnRkr/view_inquiry/${accountId}/scheduled_payment/${item.id}/view`}
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
          "Loading Scheduled Payment data..."
        ) : (
          <SmallTableTemplate
            columns={columns}
            data={searchString === "" ? data : []}
            pagination={{ defaultPageSize: 10 }}
          />
        )}
      </div>
    </div>
  );
};

export default ScheduledPaymentListView;
