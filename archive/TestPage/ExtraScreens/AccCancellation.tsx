import React from "react";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../atoms/BasicTextArea.atom";
import SelectDate from "../../../atoms/SelectDate";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const AccCancellation = () => {
  return (
    <div className="h-full p-4">
      <DetailsBoxTemplate
        title="Account Cancellation"
        details="These are the details of the account"
        item={
          <div className=" pb-32">
            <InputContainer
              title="Cancellation Remarks"
              input={<BasicTextArea placeholder="Type..." />}
              label=""
            />
            <InputContainer
              className=" mt-2"
              title="Cancelled User"
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
              title="Cancelled Date"
              input={<SelectDate disabled={false}></SelectDate>}
              label="This is automatically generated."
            />
          </div>
        }
      />
    </div>
  );
};
