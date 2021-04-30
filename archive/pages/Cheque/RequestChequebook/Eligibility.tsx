import React from "react";
import BasicSelect from "../../../atoms/BasicSelect.atom";
import TabHeader from "../../../atoms/TabHeader";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";

const Eligibility = () => {
  return (
    <div className="border rounded p-4 shadow-xs">
      <TabHeader
        title="Eligibility Details"
        details="These are the details of the guardians"
      ></TabHeader>
      <InputContainer
        title="No. of Chequebooks Allowed"
        input={<BasicSelect optionArr={["Medium Select", "type 2"]} />}
        label=""
      />
      <InputContainer
        title="Book Stock Type"
        input={<BasicSelect optionArr={["Medium Select", "type 2"]} />}
        label=""
      />
    </div>
  );
};

export default Eligibility;
