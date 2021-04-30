import { Table } from "antd";
import React, { useState } from "react";
import { GenerateColumnDefinitions } from "../../../../../schemas/helpers/generate-column-definition";
import { LOLCSDK } from "../../../../../sdk";
import { useSDK } from "../../../../../utils/hooks/useSDK";
import { ClosingCreationSchema } from "../Schemas/ClosingCreationSchema";

function AccountClosingFundReservation() {
  const CardSchema = ClosingCreationSchema.steps![0]!.cards![4]!;
  const columns = GenerateColumnDefinitions(CardSchema.fields[0].columns!);

  const [tableData, setTableData] = useState<any>();

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.FundReservationService.getFundReservatinsByAccountId(965118).then(
        (data) => {
          setTableData(data);
        }
      ),
    [],
    false,
    []
  );
  return (
    <Table
      scroll={{
        x: "max-content",
      }}
      columns={columns}
      dataSource={tableData ? tableData.fundReservations : []}
    ></Table>
  );
}

export default AccountClosingFundReservation;
