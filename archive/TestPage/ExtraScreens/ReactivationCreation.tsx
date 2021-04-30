import React from "react";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicSelect from "../../../atoms/BasicSelect.atom";
import SelectDate from "../../../atoms/SelectDate";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const ReactivationCreation = () => {
  return (
    <div className="h-full p-4">
      <DetailsBoxTemplate
        title="Account Reactivation"
        details="These are the details of the account"
        item={
          <div className=" pb-32">
            <InputContainer
              className=" mt-2"
              title="Account Reactivation User"
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
              title="Account Reactivation Date"
              input={<SelectDate disabled={false}></SelectDate>}
              label="This is automatically generated."
            />
            <InputContainer
              className="mt-4"
              title="Reactivation Reason"
              input={<BasicSelect optionArr={["Primary", "Secondary"]} />}
              label=""
            />
          </div>
        }
      />
    </div>
  );
};
