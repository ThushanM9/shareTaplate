import { Table } from "antd";
import React, { useState } from "react";
import { GenerateColumnDefinitions } from "../../../../../schemas/helpers/generate-column-definition";
import { LOLCSDK } from "../../../../../sdk";
import { useSDK } from "../../../../../utils/hooks/useSDK";
import { ClosingCreationSchema } from "../Schemas/ClosingCreationSchema";

function AccountClosingShedulePayment({ data }: { data: any }) {
  const CardSchema = ClosingCreationSchema.steps![0]!.cards![3]!;
  const columns = GenerateColumnDefinitions(CardSchema.fields[0].columns!);

  const [tableData, setTableData] = useState<any>();

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.ScheduledPaymentService.getScheduledPaymentsByAccountId("479").then(
        (data) => {
          setTableData(data);
        }
      ),
    [],
    false,
    []
  );

  return (
    <>
      <Table
        scroll={{
          x: "max-content",
        }}
        columns={columns}
        dataSource={tableData ? tableData.content : []}
      ></Table>
    </>
  );
}

export default AccountClosingShedulePayment;
