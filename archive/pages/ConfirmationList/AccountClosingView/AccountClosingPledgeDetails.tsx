import React from "react";
import SmallTableTemplate from "../../../templates/SmallTableTemplate";

function AccountClosingPledgeDetails() {
  const tableData = [
    {
      ID: 12312312,
      date: "21/03/2020",
      due: "21/03/2020",
      issue: 20000,

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
      tax: item.tax,
      Iby: item.Iby,
      Aby: item.Aby
    };
  });

  const columns = [
    {
      title: "Contract Number",
      dataIndex: "ID"
    },
    {
      title: "Portion",
      dataIndex: "date"
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
    <div
      className="flex flex-1 flex-col justify-between"
      style={{ height: window.innerHeight - 200 }} // this is a quick fix for this , please fix this if someone sees this
    >
      <SmallTableTemplate fontSize="text-table" columns={columns} data={data} />
    </div>
  );
}

export default AccountClosingPledgeDetails;
