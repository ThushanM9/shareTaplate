import React from "react";
import { FormCardTemplate } from "../../../../../schemas/helpers/form-card";
import { ClosingCreationSchema } from "../Schemas/ClosingCreationSchema";

function AccountClosingOverdraftDetails() {
  const cardSchema = ClosingCreationSchema.steps![0]!.cards![1]!;
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
      Aby: "Adam Lane",
    },
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
      Aby: item.Aby,
    };
  });

  const columns = [
    {
      title: "OD Issue ID",
      dataIndex: "ID",
    },
    {
      title: "Issue Date",
      dataIndex: "date",
    },
    {
      title: "Due date",
      dataIndex: "due",
    },
    {
      title: "Issue Amount",
      dataIndex: "issue",
    },
    {
      title: "Outstanding Amount",
      dataIndex: "out",
    },
    {
      title: "Capital Amount",
      dataIndex: "cap",
    },
    {
      title: "Interest Amount",
      dataIndex: "interest",
    },
    {
      title: "Changes",
      dataIndex: "changes",
    },
    {
      title: "Tax",
      dataIndex: "tax",
    },
    {
      title: "Issued By",
      dataIndex: "Iby",
    },
    {
      title: "Approved By",
      dataIndex: "Aby",
    },
  ];
  return (
    <FormCardTemplate title={""} description={""}>
      <></>
    </FormCardTemplate>
  );
}

export default AccountClosingOverdraftDetails;
