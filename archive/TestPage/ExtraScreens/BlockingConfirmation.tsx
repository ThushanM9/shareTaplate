import React from "react";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicSelect from "../../../atoms/BasicSelect.atom";
import BasicTextArea from "../../../atoms/BasicTextArea.atom";
import SelectDate from "../../../atoms/SelectDate";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const BlockingConfirmation = () => {
  return (
    <div className="h-full p-4">
      <DetailsBoxTemplate
        title="Account Block"
        details="These are the details of the account"
        item={
          <div className=" pb-32">
            <InputContainer
              className=" mt-2"
              title="Account Blocking User"
              input={
                <BasicInput
                  disabled={true}
                  placeholder="Ted Russel"
                ></BasicInput>
              }
              label="This is automatically generated."
            />
            <InputContainer
              className=" mt-4"
              title="Account Blocking Date"
              input={<SelectDate disabled={false}></SelectDate>}
              label="This is automatically generated."
            />
            <InputContainer
              className="mt-4"
              title="Blocking Reason"
              input={<BasicSelect optionArr={["Primary", "Secondary"]} />}
              label=""
            />
            <InputContainer
              className=" mt-4"
              title="Account Blocking Approval User"
              input={
                <BasicInput
                  disabled={true}
                  placeholder="Ted Russel"
                ></BasicInput>
              }
              label="This is automatically generated."
            />
            <InputContainer
              className=" mt-4"
              title="Account Blocking Approval Date"
              input={<SelectDate disabled={false}></SelectDate>}
              label="This is automatically generated."
            />
            <h1 className="my-4 mt-8 font-semibold text-sm">Charges</h1>
            <div className="flex justify-between">
              <div className="flex-1">
                <InputContainer
                  className=" mt-4"
                  title="Total Charges"
                  input={
                    <BasicInput
                      disabled={true}
                      placeholder="10,000"
                    ></BasicInput>
                  }
                  label="This is automatically generated."
                />
                <InputContainer
                  className=" mt-4"
                  title="Charge Type Name"
                  input={
                    <BasicInput
                      disabled={true}
                      placeholder="Blocking Charge"
                    ></BasicInput>
                  }
                  label="This is automatically generated."
                />
                <InputContainer
                  className=" mt-4"
                  title="Charges Amount"
                  input={
                    <BasicInput
                      disabled={false}
                      placeholder="10,000"
                    ></BasicInput>
                  }
                  label="This is automatically generated."
                />
              </div>
              <div className="flex-1">
                <InputContainer
                  title="Notes"
                  input={<BasicTextArea placeholder="Type..." />}
                  label=""
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
