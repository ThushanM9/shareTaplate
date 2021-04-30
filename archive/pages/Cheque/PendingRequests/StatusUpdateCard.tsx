import React from "react";
import BasicSelect from "../../../atoms/BasicSelect.atom";
import BasicTextArea from "../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const StatusUpdateCard = () => {
  return (
    <DetailsBoxTemplate
      title="Chequebook Status Update Details"
      details="These are the details of the guardians"
      item={
        <div className="my-4 pb-24">
          <InputContainer
            className="mb-6 mt-0"
            title="Action"
            input={<BasicSelect optionArr={["Medium Select"]} />}
            label=""
          />
          <InputContainer
            className="mb-6 mt-0"
            title="Reason Type"
            input={<BasicSelect optionArr={["Medium Select"]} />}
            label=""
          />
          <InputContainer
            className="mb-6 mt-0"
            title="Notes"
            input={<BasicTextArea placeholder="Type here..." />}
            label=""
          />
        </div>
      }
    />
  );
};
