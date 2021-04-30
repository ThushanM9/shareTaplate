import { Select } from "antd";
import React, { FC } from "react";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../atoms/BasicTextArea.atom";
import SelectDate from "../../../atoms/SelectDate";
import TabHeader from "../../../atoms/TabHeader";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";
import GetTempAccount from "./services/useGetTempAccountForTesting";

const AccountClosingCharges: FC<AccountClosingChargesProps> = ({}) => {
  const { Option } = Select;

  const getTempAccount = GetTempAccount().data;
  // const getCharges = GetAccountClosingCharges("64547668").data;
  // const getAmounts = GetCloingAccountAmounts(Number("64547668"));

  return (
    <div
      className="flex flex-1 flex-row justify-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="flex flex-col flex-1">
        <DetailsBoxTemplate
          className="w-3/4"
          title="Account Opening"
          details="These are the details of the account"
          item={
            <div className="px-2">
              <InputContainer
                className="mt-2"
                title="Account Opening User"
                input={
                  <BasicInput
                    className="w-2/5 text-xxxs"
                    disabled={true}
                    placeholder={getTempAccount.AccountData?.casaAccountName}
                  ></BasicInput>
                }
                label="This is automatically generated."
              />

              <InputContainer
                className=" mt-4 "
                title="Card Issue Date"
                input={
                  <SelectDate
                    className="w-2/5 text-xxxs"
                    disabled={false}
                  ></SelectDate>
                }
                label="This is automatically generated."
              />
              <InputContainer
                className=" mt-4 "
                title="Closing reason"
                input={
                  <Select defaultValue="Choose" style={{ width: 120 }}>
                    <Option value="1">Reason 1</Option>
                    <Option value="2">Reason 2</Option>
                    <Option value="3">Reason 1</Option>
                  </Select>
                }
                label="This is automatically generated."
              />

              <InputContainer
                className="text-xxxs w-full mt-4"
                title="Notes"
                input={<BasicTextArea placeholder="Type..." />}
                label=""
              />

              <div className="flex w-full">
                <div className="w-2/5">
                  <InputContainer
                    className="mt-4"
                    title="Credit Interst Accrued Amount"
                    input={
                      <BasicInput
                        disabled
                        className="text-xxxs"
                        placeholder="10,000"
                      ></BasicInput>
                    }
                    label="This is automatically generated."
                  />
                  <InputContainer
                    className="mt-4"
                    title="Bonus Intrest Accrued Amount"
                    input={
                      <BasicInput
                        disabled
                        className="text-xxxs"
                        placeholder="Activation Charge"
                      ></BasicInput>
                    }
                    label="This is automatically generated."
                  />
                  <InputContainer
                    className=" mt-4"
                    title="Overdaft Inerest"
                    input={
                      <BasicInput
                        className="text-xxxs"
                        disabled
                        placeholder="10,000"
                      ></BasicInput>
                    }
                    label="This is automatically generated."
                  />
                  <InputContainer
                    className=" mt-4"
                    title="Final Withdrawl Amount"
                    input={
                      <BasicInput
                        className="text-xxxs"
                        disabled
                        placeholder="10,000"
                      ></BasicInput>
                    }
                    label="This is automatically generated."
                  />
                </div>
              </div>
            </div>
          }
        />
        {/* fixed height is given to give the scroll feeling a clean page look */}
        <div className="pt-10" style={{ width: "50%" }}>
          <div className="col-start-2 col-span-8 rounded border p-4 shadow-xs">
            <TabHeader title="Charges"></TabHeader>
            <InputContainer
              title="Total Charges"
              label="This is automatically generated."
              input={
                <BasicInput disabled={true} placeholder="10000"></BasicInput>
              }
            ></InputContainer>
            <InputContainer
              title="Charge Type Name"
              label="This is automatically generated."
              input={
                <BasicInput
                  disabled={true}
                  placeholder="Closing Charge"
                ></BasicInput>
              }
            ></InputContainer>
            <InputContainer
              title="Charge Type Name"
              label="This is automatically generated."
              input={
                <BasicInput
                  disabled={true}
                  placeholder="Closing Charge"
                ></BasicInput>
              }
            ></InputContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface AccountClosingChargesProps {}

export default AccountClosingCharges;
