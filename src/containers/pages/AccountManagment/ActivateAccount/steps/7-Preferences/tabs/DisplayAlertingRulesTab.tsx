import { Table } from "antd";
import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayAlertingRulesTab = ({ data }: { data: any }) => {
  const cardSchema = ActivateAccountSchema.steps![7]!.cards![1];
  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!);
  // console.log("XXXXX", data);
  const dataSource = () => {
    const tableData: any = [];
    data &&
      data.map((item: any, index: number) => {
        tableData.push(...item.alertingDetails);
      });
    return tableData;
  };

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <Table columns={columns} dataSource={dataSource()}></Table>
      </>
    </FormCardTemplate>
  );
};
