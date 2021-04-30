import { Select } from "antd";
import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import BasicCheckbox from "../../../../../../atoms/BasicCheckbox.atom";
import BasicTextArea from "../../../../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayAccountPurposeTab = ({ data }: { data: any }) => {
  const cardSchema = ActivateAccountSchema.steps![3]!.cards![2];
  console.log(data);
  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <div className="flex mb-4 flex-col">
          <div className="mb-8">
            {data
              ? data.purposeDetail
                ? data.purposeDetail.map((item: any, index: number) => {
                    return (
                      <>
                        <BasicCheckbox
                          className="mt-4 mx-0 w-1/2"
                          checked={true}
                          title={item.description}
                        />
                        <Select
                          className="w-1/2"
                          value={
                            item.primaryIndicator === "Yes"
                              ? "Primary"
                              : "Secondary"
                          }
                          disabled={true}
                        ></Select>
                      </>
                    );
                  })
                : ""
              : "Loading..."}
          </div>
          <InputContainer
            title={`${cardSchema.fields[2].label}`}
            input={<BasicTextArea className="w-100" value={""}></BasicTextArea>}
          />
        </div>
      </>
    </FormCardTemplate>
  );
};
