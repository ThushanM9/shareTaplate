import React from "react";
import SmallTableTemplate from "../../../templates/SmallTableTemplate";

function AccountClosingPendingCheque() {
  const tableData = [
    {
      ID: 12312312,
      date: "21/03/2020",
      due: "21/03/2020",
      issue: 20000,
      out: 10000,
      cap: 10000,
      interest: 10000,
      changes: 10000,
      tax: "2%",
      Iby: "John Doe",
      Aby: "Adam Lane"
    }
  ];
  const data = tableData.map((item: any, index) => {
    return {
      ID: item.ID,
      date: item.date,
      due: item.due,
      issue: item.issue,
      out: item.out,

      tax: item.tax,
      Iby: item.Iby,
      Aby: item.Aby
    };
  });

  const columns = [
    {
      title: "Batch ID",
      dataIndex: "ID"
    },
    {
      title: "Transaction Date",
      dataIndex: "date"
    },
    {
      title: "Cheque Number",
      dataIndex: "due"
    },
    {
      title: "Cheque Amount",
      dataIndex: "issue"
    },
    {
      title: "Bank",
      dataIndex: "out"
    },

    {
      title: "Created By",
      dataIndex: "Iby"
    }
  ];
  return (
    <div style={{ height: "80vh" }}>
      <SmallTableTemplate fontSize="text-table" columns={columns} data={data} />
    </div>
  );
}

export default AccountClosingPendingCheque;
