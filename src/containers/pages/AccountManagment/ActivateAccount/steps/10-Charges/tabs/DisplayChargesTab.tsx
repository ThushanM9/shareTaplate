import { useAuth0 } from "@auth0/auth0-react";
import { Input, InputNumber, Select } from "antd";
import _ from "lodash";
import moment from "moment";
import React, { useState } from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import { setFinalNotes } from "../../../../../../../store/modules/FinalNotes/FinalNotes.dispatcher";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import BasicInput from "../../../../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../../../../atoms/BasicTextArea.atom";
import SelectDate from "../../../../../../atoms/SelectDate";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayChargesTab = ({
  data,
  setPostCall,
  setisConfirm,
}: {
  data: any;
  setPostCall: Function;
  setisConfirm: (status: boolean) => any;
}) => {
  const cardSchema = ActivateAccountSchema.steps![10]!.cards![0];
  const [showFields, setShowFields] = useState(false);

  const [charges, setCharges] = useState<any>();

  const [textAreaValue, setTextAreaValue] = useState("");

  const totalCharges = _.sumBy(charges, "chargeAmount");

  useSDK(
    async (sdk: LOLCSDK) =>
      sdk.ProductBCAService.getChargeAmountDetails(
        data.AccountData.subProductId,
        "FEAA",
        0
      ).then((data: any) => {
        setCharges(data);
      }),
    [],
    false,
    []
  );

  const { user } = useAuth0();

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <div className="flex flex-col">
        <InputContainer
          title="Status Update"
          input={
            <Select
              className="w-1/2"
              defaultActiveFirstOption={true}
              onChange={(value) => {
                setisConfirm(false);
                setPostCall(value);
                value === "Cancel" ? setShowFields(true) : setShowFields(false);
              }}
            >
              <Select.Option value="Approve">Approve</Select.Option>
              <Select.Option value="Cancel">Cancel</Select.Option>
            </Select>
          }
        ></InputContainer>
        {/* //approve */}
        <div style={!showFields ? { display: "block" } : { display: "none" }}>
          <InputContainer
            title="Account Opening User"
            input={
              <BasicInput disabled={true} value={user.nickname}></BasicInput>
            }
          ></InputContainer>
          <InputContainer
            title="Card Issue Date"
            input={<SelectDate disabled={true} value={moment()} />}
          ></InputContainer>
          <>
            <h1 className="text-md mb-4 font-medium">Charges</h1>

            <InputContainer
              className="mb-6"
              title="Total Charges"
              input={
                <InputNumber
                  className="w-2/4 text-xs"
                  disabled={true}
                  precision={2}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
                  min={0}
                  value={totalCharges}
                />
              }
            ></InputContainer>
            {charges ? (
              charges.map((item: any, index: number) => {
                return (
                  <div key={index} className="flex w-100 mb-4">
                    <InputContainer
                      title="Charge Type Name"
                      className="w-full"
                      input={
                        <Input
                          className="w-2/4 text-xs pb-1 pt-1"
                          disabled={true}
                          value={item.feeTypeName}
                        ></Input>
                      }
                    ></InputContainer>
                    <InputContainer
                      className="w-full"
                      title="Charge Amount"
                      input={
                        <InputNumber
                          className="w-2/4 text-xs"
                          disabled={true}
                          precision={2}
                          formatter={(value) =>
                            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          }
                          parser={(value: any) =>
                            value.replace(/\$\s?|(,*)/g, "")
                          }
                          min={0}
                          value={item.chargeAmount}
                        />
                      }
                    ></InputContainer>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-row flex-1 justify-center text-md font-semibold py-4">
                No Charges information available
              </div>
            )}
          </>
        </div>
        {/* cancel */}
        <div style={showFields ? { display: "block" } : { display: "none" }}>
          <InputContainer
            className="w-full"
            title="Cancelation Remarks"
            input={
              <BasicTextArea
                onChange={(e: any) => {
                  setTextAreaValue(e.target.value);
                  setFinalNotes(e.target.value);
                }}
                value={textAreaValue}
              ></BasicTextArea>
            }
          ></InputContainer>
          <InputContainer
            className="w-full"
            title="Cancelled User"
            input={
              <BasicInput value={user.nickname} disabled={true}></BasicInput>
            }
          ></InputContainer>
          <InputContainer
            title="Cancelled Date"
            input={<SelectDate disabled={true} value={moment()} />}
          ></InputContainer>
        </div>
      </div>
    </FormCardTemplate>
  );
};
