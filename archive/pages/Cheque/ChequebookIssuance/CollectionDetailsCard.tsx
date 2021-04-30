import React from "react";
import BasicCheckbox from "../../../atoms/BasicCheckbox.atom";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const CollectionDetailsCard = () => {
  return (
    <DetailsBoxTemplate
      title="Collection Details"
      details="These are the details of the guardians"
      item={
        <div className="my-4 pb-24">
          <InputContainer
            title=""
            input={<BasicCheckbox title="Collect" />}
            label=""
          />
          <InputContainer
            title="Collection Date"
            input={<BasicInput disabled placeholder="2141241242412" />}
            label=""
          />
          <InputContainer
            title="Notes"
            input={<BasicTextArea placeholder="Type here..." />}
            label=""
          />
        </div>
      }
    />
  );
};
