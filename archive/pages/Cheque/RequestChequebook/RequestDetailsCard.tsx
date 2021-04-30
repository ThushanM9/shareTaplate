import React from "react";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicSelect from "../../../atoms/BasicSelect.atom";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const RequestDetailsCard = () => {
  return (
    <DetailsBoxTemplate
      title="Chequebook Request Details"
      details="These are the details of the guardians"
      item={
        <div className="my-4 pb-24">
          <InputContainer
            title="Request ID"
            input={
              <BasicInput disabled={true} placeholder="xxxxxxx"></BasicInput>
            }
            label="This is automatically generated."
          />
          <InputContainer
            title="No. of Chequebooks"
            input={<BasicSelect optionArr={["Medium Select", "type 2"]} />}
            label=""
          />
          <InputContainer
            title="Stock Type"
            input={<BasicSelect optionArr={["Medium Select", "type 2"]} />}
            label=""
          />
          <InputContainer
            title="Chequebook Type"
            input={<BasicSelect optionArr={["Medium Select", "type 2"]} />}
            label=""
          />
          <InputContainer
            title="Instrument Type"
            input={<BasicSelect optionArr={["Medium Select", "type 2"]} />}
            label=""
          />
        </div>
      }
    />
  );
};
