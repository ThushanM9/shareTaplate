import { Radio } from "antd";
import React from "react";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicSelect from "../../../atoms/BasicSelect.atom";
import BasicTextArea from "../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const DispatchDetailsCard = () => {
  return (
    <DetailsBoxTemplate
      title="Dispatch Details"
      details="These are the details of the guardians"
      item={
        <div className="my-4 pb-24">
          <Radio className="text-xs">Send to Customer Address</Radio>
          <InputContainer
            className="mb-6 mt-0"
            title=""
            input={
              <BasicInput
                disabled={true}
                placeholder="23 Miles Road"
              ></BasicInput>
            }
            label="This is automatically generated."
          />
          <Radio className="text-xs">Send to Branch</Radio>
          <InputContainer
            className="mb-6 mt-0"
            title=""
            input={<BasicSelect optionArr={["Select Branch", "type 2"]} />}
            label=""
          />
          <InputContainer
            className="mb-6 mt-0"
            title="Notes"
            input={<BasicTextArea placeholder="Type here.." />}
            label=""
          />
          <InputContainer
            className="mt-0"
            title="Status"
            input={<BasicInput disabled placeholder="Created" />}
            label="This field is auto-filled"
          />
        </div>
      }
    />
  );
};
