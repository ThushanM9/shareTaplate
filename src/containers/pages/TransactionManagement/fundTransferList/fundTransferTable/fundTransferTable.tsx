import { Table } from "antd";
import React from "react";
import { FundTransferTableProps } from "../interfaces";

const FundTransferForm: React.FC<FundTransferTableProps> = ({
  state,
  credit,
  debit,
}) => {
  const columns = [
    {
      title: "Scheme Name",
      dataIndex: debit ? "debitAccountSchemeType" : "creditorAccountSchemeName",
      key: debit ? "debitAccountSchemeType" : "creditorAccountSchemeName",
    },
    {
      title: "Account Number",
      dataIndex: debit ? "debitAccountNo" : "creditorAccountNumber",
      key: debit ? "debitAccountNo" : "creditorAccountNumber",
    },
    {
      title: "Account Name",
      dataIndex: debit ? "debitAccountName" : "creditorAccountName",
      key: debit ? "debitAccountName" : "creditorAccountName",
    },
    {
      title: "Identification",
      dataIndex: "identificationNumber",
      key: "identificationNumber",
    },
    {
      title: "Signature",
      dataIndex: "netAmount",
      key: "netAmount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={[state]} pagination={false} />
    </>
  );
};

export default FundTransferForm;
