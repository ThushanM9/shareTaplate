import React from "react";
import SmallTableTemplate from "../../../templates/SmallTableTemplate";

function AccountClosingFundReservation() {
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
      title: "Fund Reservation ID",
      dataIndex: "ID"
    },
    {
      title: "Activated Date",
      dataIndex: "date"
    },
    {
      title: "Reservation date",
      dataIndex: "due"
    },
    {
      title: "Reservation Amount",
      dataIndex: "issue"
    },
    {
      title: "Changes",
      dataIndex: "out"
    },

    {
      title: "Tax",
      dataIndex: "tax"
    },
    {
      title: "Issued By",
      dataIndex: "Iby"
    },
    {
      title: "Approved By",
      dataIndex: "Aby"
    }
  ];
  return (
    <div style={{ height: "80vh" }}>
      <SmallTableTemplate fontSize="text-table" columns={columns} data={data} />
    </div>
  );
}

export default AccountClosingFundReservation;
