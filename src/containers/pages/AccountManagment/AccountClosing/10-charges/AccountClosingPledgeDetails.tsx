import { Table } from "antd";
import React from "react";
import { GenerateColumnDefinitions } from "../../../../../schemas/helpers/generate-column-definition";
import { ClosingCreationSchema } from "../Schemas/ClosingCreationSchema";

function AccountClosingPledgeDetails() {
  const cardSchema = ClosingCreationSchema.steps![0]!.cards![6]!;
  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!);
  return (
    <div>
      <Table columns={columns} dataSource={[]}></Table>
    </div>
  );
}

export default AccountClosingPledgeDetails;
