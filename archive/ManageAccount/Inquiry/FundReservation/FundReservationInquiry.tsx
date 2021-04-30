import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SmallTableTemplate from "../../../../../templates/SmallTableTemplate";
import { useGetFundReservationsByAccountId } from "./method";

export interface FundReservationInquiryProps {}
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
    title: "Value Date",
    dataIndex: "valueDate",
    key: "valueDate"
  },
  {
    title: "Booking Date",
    dataIndex: "bookingDate",
    key: "bookingDate"
  },

  {
    title: "Transaction Type",
    dataIndex: "transactionType",
    key: "transactionType"
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

const FundReservationInquiry: FC<FundReservationInquiryProps> = () => {
  const [searchString, setSearchString] = useState("");
  const { accountId } = useParams();
  const {
    data: fundReservationData,
    loading
  } = useGetFundReservationsByAccountId(accountId);

  const data = fundReservationData
    ? fundReservationData.fundReservations.map(item => {
        return {
          key: "",
          accountNumber: fundReservationData.accountNo,
          transactionNumber: "[N/A]",
          valueDate: "[N/A]",
          bookingDate: "[N/A]",
          transactionType: "[N/A]",
          currency: fundReservationData.accountCurrencyCode,
          amount: item.fureAmount,
          action: (
            <div>
              <Button type="link" className="text-xxxs p-0 mr-2">
                <Link
                  to={`/AnRkr/view_inquiry/${accountId}/fund_reservation_inquiry/${item.id}/view`}
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
          "Loading Fund Reservation data..."
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

export default FundReservationInquiry;
