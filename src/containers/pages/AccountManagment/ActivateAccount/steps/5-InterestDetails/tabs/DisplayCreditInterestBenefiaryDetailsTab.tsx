import { Table } from "antd";
import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayCreditInterestBenefiaryDetailsTab = ({
  data,
}: {
  data: any;
}) => {
  const cardSchema = ActivateAccountSchema.steps![5]!.cards![1];
  const internalPartyColumns = GenerateColumnDefinitions(
    cardSchema.fields[0].columns!
  );
  const externalPartyColumns = GenerateColumnDefinitions(
    cardSchema.fields[1].columns!
  );
  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <div className="mb-2">
          <h1 className="mb-2">Internal Party</h1>
          <Table
            columns={internalPartyColumns}
            dataSource={
              data
                ? data.map((item: any, index: number) => {
                    if (item.otherPostingMethod === "Internal") {
                      return item;
                    } else {
                      return [];
                    }
                  })
                : []
            }
            pagination={false}
          ></Table>
        </div>
        <div className="mb-2">
          <h1 className="mb-2">External Party</h1>
          <Table
            columns={externalPartyColumns}
            dataSource={
              data
                ? data.map((item: any, index: number) => {
                    if (item.otherPostingMethod === "External") {
                      return item;
                    } else {
                      return [];
                    }
                  })
                : []
            }
            pagination={false}
          ></Table>
        </div>
      </>
    </FormCardTemplate>
  );
};
