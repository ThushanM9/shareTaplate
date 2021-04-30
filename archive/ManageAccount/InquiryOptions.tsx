import React from "react";
import { Link, useParams } from "react-router-dom";
import { tenant } from "../../../../Auth0/auth0Client";

function InquiryOptions() {
  const { accountId } = useParams();
  const dataArr = accountId
    ? [
        {
          title: "Account Inquiry",
          data: "   Popover content goes here and here and here"
        },
        {
          title: "Transaction Inquiry",
          link: `${tenant}/view_inquiry/${accountId}/transaction_inquiry`,
          data: "   Popover content goes here and here and here"
        },
        {
          title: "Fund Reservation Inquiry",
          link: `${tenant}/view_inquiry/${accountId}/fund_reservation_inquiry`,
          data: "   Popover content goes here and here and here"
        },
        {
          title: "Standing Order Inquiry",
          link: `${tenant}/view_inquiry/${accountId}/standing_order_inquiry`,
          data: "   Popover content goes here and here and here"
        },
        {
          title: "Scheduled Payment Inquiry",
          data: "   Popover content goes here and here and here",
          link: `${tenant}/view_inquiry/${accountId}/scheduled_payment`
        },
        {
          title: "Chequebook Inquiry",
          data: "   Popover content goes here and here and here",
          link: `${tenant}/view_inquiry/${accountId}/cheque_book_inquiry/`
        },
        {
          title: "Passbook Inquiry",
          data: "   Popover content goes here and here and here",
          link: `${tenant}/view_inquiry/${accountId}/passbook_inquiry/`
        },
        {
          title: "Statement Inquiry",
          data: "   Popover content goes here and here and here"
        }
      ]
    : [];
  return (
    <div className="bg-white p-4 h-full">
      <h3 className="font-semibold">Inquiry Options</h3>
      <div className="flex flex-wrap mt-10">
        {dataArr.map((item: any, index: number) => {
          return (
            <div key={index} className="w-40 pb-1 mr-10 mb-10">
              <p
                className="text-xxs font-medium pl-2 pb-1"
                style={{ borderBottom: "1px solid #e3e5e8" }}
              >
                <Link to={`${item.link}`}>{item.title}</Link>
              </p>
              <p className="text-xxxs pl-2 pt-1">{item.data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InquiryOptions;
