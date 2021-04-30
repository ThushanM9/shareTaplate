import React from "react";
import SmallTableTemplate from "../../../templates/SmallTableTemplate";

function AccountClosingStandingOrder() {
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
      cap: item.cap,
      interest: item.interest,
      changes: item.changes,
      tax: item.tax,
      Iby: item.Iby,
      Aby: item.Aby
    };
  });

  const columns = [
    {
      title: "STO Issue ID",
      dataIndex: "ID"
    },
    {
      title: "Issue Date",
      dataIndex: "date"
    },
    {
      title: "Next date",
      dataIndex: "due"
    },
    {
      title: "Issue Amount",
      dataIndex: "issue"
    },
    {
      title: "STO Amount",
      dataIndex: "out"
    },
    {
      title: "Party Name",
      dataIndex: "cap"
    },
    {
      title: "Party Amount no.",
      dataIndex: "interest"
    },
    {
      title: "Changes",
      dataIndex: "changes"
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
      <SmallTableTemplate fontSize="text-tiny" columns={columns} data={data} />
    </div>
  );
}

export default AccountClosingStandingOrder;
