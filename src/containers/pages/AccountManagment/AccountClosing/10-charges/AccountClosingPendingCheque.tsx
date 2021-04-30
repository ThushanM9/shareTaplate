import { Table } from "antd";
import React from "react";
import { GenerateColumnDefinitions } from "../../../../../schemas/helpers/generate-column-definition";
import { ClosingCreationSchema } from "../Schemas/ClosingCreationSchema";

function AccountClosingPendingCheque() {
  const cardSchema = ClosingCreationSchema.steps![0]!.cards![5]!;
  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!);
  return (
    <div style={{ height: "80vh" }}>
      <Table columns={columns} dataSource={[]}></Table>
    </div>
  );
}

export default AccountClosingPendingCheque;
