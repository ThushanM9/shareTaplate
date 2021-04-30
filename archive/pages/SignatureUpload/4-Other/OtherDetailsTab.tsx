import React from "react";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicSelect from "../../../atoms/BasicSelect.atom";
import SelectDate from "../../../atoms/SelectDate";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const OtherDetailsTab = () => {
  return (
    <DetailsBoxTemplate
      title="Other Details"
      details="Other details of the account"
      item={
        <div className=" pb-32">
          <InputContainer
            className="mt-0"
            title="Status"
            input={<BasicSelect optionArr={["Select"]} />}
            label="This is automatically generated."
          />
          <InputContainer
            className=" mt-4"
            title="Created User"
            input={
              <BasicInput disabled={true} placeholder="Ted Russel"></BasicInput>
            }
            label="This is automatically generated."
          />
          <InputContainer
            className=" mt-6"
            title="Created Date"
            input={<SelectDate disabled={false}></SelectDate>}
            label="This is automatically generated."
          />
        </div>
      }
    />
  );
};
