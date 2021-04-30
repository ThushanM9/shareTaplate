import { Table } from "antd";
import React, { useState } from "react";
import { GenerateColumnDefinitions } from "../../../../../schemas/helpers/generate-column-definition";
import { LOLCSDK } from "../../../../../sdk";
import { useSDK } from "../../../../../utils/hooks/useSDK";
import { ClosingCreationSchema } from "../Schemas/ClosingCreationSchema";

function AccountClosingStandingOrder({ data }: { data: any }) {
  const [tableData, setTableData] = useState<any>();
  const CardSchema = ClosingCreationSchema.steps![0]!.cards![2]!;
  const columns = GenerateColumnDefinitions(CardSchema.fields[0].columns!);

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.StandingOrderService.getAllStandingOrdersByStatus(
        //standingOrderData.AccountData?.customerId,
        479,
        "COMPLETED"
      ).then((data) => {
        setTableData(data);
      }),
    [],
    false,
    []
  );
  return (
    // <FormCardTemplate title="" description="">
    <>
      <Table
        scroll={{
          x: "max-content",
        }}
        columns={columns}
        dataSource={tableData ? tableData : []}
      ></Table>
    </>
    // </FormCardTemplate>
  );
}

export default AccountClosingStandingOrder;
