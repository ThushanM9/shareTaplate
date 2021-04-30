import React, { useState } from "react";
import BasicInput from "../../../../atoms/BasicInput.atom";
import BasicSelect from "../../../../atoms/BasicSelect.atom";
import BasicTextArea from "../../../../atoms/BasicTextArea.atom";
import SelectDate from "../../../../atoms/SelectDate";
import InputContainer from "../../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../../templates/DetailsBoxTemplate";

export const ActivateCharges = () => {
  const [selectValue, setSelectValue] = useState("Approve");
  return (
    <DetailsBoxTemplate
      title="Account Opening"
      details="These are the details of the account"
      item={
        <div className="px-2">
          <InputContainer
            className="mt-2"
            title="Status Update"
            input={
              <BasicSelect
                className="w-2/5 text-xxxs"
                optionArr={["Approve", "Cancel"]}
                onChange={(val: string) => setSelectValue(val)}
              />
            }
            label="This is automatically generated."
          />
          {selectValue === "Approve" ? (
            <>
              <InputContainer
                className="mt-2"
                title="Account Opening User"
                input={
                  <BasicInput
                    className="w-2/5 text-xxxs"
                    disabled={true}
                    placeholder="Ted Russel"
                  ></BasicInput>
                }
                label="This is automatically generated."
              />
              <InputContainer
                className=" mt-4 "
                title="Card Issue Date"
                input={
                  <SelectDate
                    className="w-2/5 text-xxxs"
                    disabled={false}
                  ></SelectDate>
                }
                label="This is automatically generated."
              />
              <h1 className="my-4 mt-8 font-semibold text-sm">Charges</h1>
              <div className="flex w-full">
                <div className="w-2/5">
                  <InputContainer
                    className=" mt-4"
                    title="Total Charges"
                    input={
                      <BasicInput
                        className="text-xxxs"
                        disabled={true}
                        placeholder="10,000"
                      ></BasicInput>
                    }
                    label="This is automatically generated."
                  />
                  <InputContainer
                    className="mt-4"
                    title="Charge Type Name"
                    input={
                      <BasicInput
                        className="text-xxxs"
                        disabled={true}
                        placeholder="Activation Charge"
                      ></BasicInput>
                    }
                    label="This is automatically generated."
                  />
                  <InputContainer
                    className=" mt-4"
                    title="Charges Amount"
                    input={
                      <BasicInput
                        className="text-xxxs"
                        disabled={false}
                        placeholder="10,000"
                      ></BasicInput>
                    }
                    label="This is automatically generated."
                  />
                </div>
                <div className="w-3/5 p-0">
                  <InputContainer
                    className="text-xxxs mt-3 ml-8 w-full"
                    title="Notes"
                    input={<BasicTextArea placeholder="Type..." />}
                    label=""
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <InputContainer
                className="text-xxxs mt-3 w-full"
                title="Cancellation Remarks"
                input={<BasicTextArea placeholder="Type..." />}
                label=""
              />
              <InputContainer
                className=" mt-4"
                title="Cancelled User"
                input={
                  <BasicInput
                    className="w-2/5 text-xxxs"
                    disabled={false}
                    placeholder="Ted Russel"
                  ></BasicInput>
                }
                label="This is automatically generated."
              />
              <InputContainer
                className=" mt-4 "
                title="Cancelled Date"
                input={
                  <SelectDate
                    className="w-2/5 text-xxxs"
                    disabled={false}
                  ></SelectDate>
                }
                label="This is automatically generated."
              />
            </>
          )}
        </div>
      }
    />
  );
};
