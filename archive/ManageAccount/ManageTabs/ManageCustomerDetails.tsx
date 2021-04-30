import { Avatar, Button } from "antd";
import React, { useState } from "react";
import BasicInput from "../../../../atoms/BasicInput.atom";
import BasicSelect from "../../../../atoms/BasicSelect.atom";
import BasicTextArea from "../../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../../organisms/BasicAccountDetails/InputContainer";

function ManageCustomerDetails() {
  const [enable, setEnable] = useState(true);
  return (
    <div className="pt-2">
      <h3 className="text-xs font-medium">Personal Details</h3>
      <div className="flex">
        <div className="w-1/2">
          <InputContainer
            title="Email address"
            input={<BasicInput disabled={enable} placeholder="xyz@gmail.com" />}
          />
          <InputContainer
            title="Name"
            input={<BasicInput disabled={enable} placeholder="John Doe" />}
          />
          <InputContainer
            title="Name"
            input={
              <BasicTextArea
                disabled={enable}
                placeholder="Ted Russel is an Individual account"
              />
            }
          />
          <InputContainer
            title="Name"
            input={
              <BasicSelect
                disabled={enable}
                optionArr={["Sri Lanka", "India"]}
              />
            }
          />
          <InputContainer
            title="Address"
            input={
              <BasicInput
                disabled={enable}
                placeholder="Example Address, 12345"
              />
            }
          />
          <Button
            onClick={() => setEnable(enable ? false : true)}
            className="text-xxxs"
            size="small"
            type="primary"
          >
            Update Personal Details
          </Button>
        </div>
        <div>
          <p className="text-xxxs">Avatar</p>
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
}

export default ManageCustomerDetails;
