import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import BasicCheckbox from "../../../atoms/BasicCheckbox.atom";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicSelect from "../../../atoms/BasicSelect.atom";
import { NormalButton } from "../../../atoms/Button";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const IssueDetailsCard = () => {
  return (
    <DetailsBoxTemplate
      title="Chequebook Issue Details"
      details="These are the details of the guardians"
      item={
        <div className="my-4 pb-24">
          <InputContainer
            title="Book no."
            input={<BasicSelect optionArr={["Medium Select"]} />}
            label=""
          />
          <InputContainer
            title="Start Cheque No."
            input={<BasicInput placeholder="12" />}
            label=""
          />
          <InputContainer
            title="End Cheque No."
            input={<BasicInput placeholder="12" />}
            label=""
          />
          <div className=" flex w-3/4">
            <InputContainer
              className="my-4 w-7/12"
              title="Status"
              input={
                <BasicSelect className="w-full" optionArr={["Medium Select"]} />
              }
              label=""
            />
            <NormalButton
              className=" mt-10 mx-12"
              title={
                <div className="flex items-center">
                  <PlusOutlined className=" mx-2" /> Add
                </div>
              }
              onClick={() => {}}
            />
          </div>
          <InputContainer
            title="Charge Type"
            input={<BasicInput disabled placeholder="2342342342342" />}
            label=""
          />
          <InputContainer
            title="Charge Amount"
            input={<BasicInput disabled placeholder="2342342342342" />}
            label=""
          />
          <InputContainer
            title=""
            input={<BasicCheckbox title="Wave off Flag" />}
            label=""
          />
        </div>
      }
    />
  );
};
