import { Table } from "antd";
import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayDebitInterestPostingDetailsTab = ({
  data,
}: {
  data: any;
}) => {
  const cardSchema = ActivateAccountSchema.steps![5]!.cards![2];
  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!);

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        {/* <InputContainer
          title={`${cardSchema.fields[0].label}`}
          input={<BasicInput value={""} disabled={true}></BasicInput>}
        /> */}

        <div className="mb-2">
          <Table columns={columns} dataSource={data} pagination={false}></Table>
        </div>
      </>
    </FormCardTemplate>
  );
};
