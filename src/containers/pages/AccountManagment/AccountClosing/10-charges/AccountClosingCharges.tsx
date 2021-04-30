import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FormCardTemplate } from "../../../../../schemas/helpers/form-card";
import { setFinalNotes } from "../../../../../store/modules/FinalNotes/FinalNotes.dispatcher";
import BasicInput from "../../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../../atoms/BasicTextArea.atom";
import SelectDate from "../../../../atoms/SelectDate";
import InputContainer from "../../../../organisms/BasicAccountDetails/InputContainer";

const AccountClosingCharges = ({
  data,
  charges,
}: {
  data: any;
  charges: any;
}) => {
  const { user } = useAuth0();
  const [textAreaValue, setTextAreaValue] = useState("");
  const [totalCharges, setTotalCharges] = useState(0);
  useEffect(() => {
    let temp = 0;
    if (charges) {
      for (const charge of charges) {
        temp += charge.feeAmount;
      }
      setTotalCharges(temp);
    }
  }, [charges]);

  return (
    <FormCardTemplate title={"Account Closing"} description={""}>
      <div>
        <InputContainer
          className="mb-6"
          title="Account Closing User"
          input={
            <BasicInput disabled={true} value={user.nickname}></BasicInput>
          }
        ></InputContainer>
        <InputContainer
          className="mb-6"
          title="Account Closing Date"
          input={<SelectDate value={moment()} />}
        ></InputContainer>
        <InputContainer
          className="mb-6"
          title="Closing Reason"
          input={<BasicInput />}
        ></InputContainer>
        <InputContainer
          className="mb-6"
          title="Notes"
          input={
            <BasicTextArea
              onChange={(e: any) => {
                setFinalNotes(e.target.value);
                setTextAreaValue(e.target.value);
              }}
              value={textAreaValue}
            />
          }
        ></InputContainer>
        <InputContainer
          className="mb-6"
          title="Credit Interest Accured Amount"
          input={<BasicInput disabled={true} value={0}></BasicInput>}
        ></InputContainer>
        <InputContainer
          className="mb-6"
          title="Bonus Interest Accured Amount"
          input={<BasicInput disabled={true} value={0}></BasicInput>}
        ></InputContainer>
        <InputContainer
          className="mb-6"
          title="Overdraft Interest"
          input={<BasicInput disabled={true} value={0}></BasicInput>}
        ></InputContainer>
        <InputContainer
          className="mb-6"
          title="Final Withdrawal Amount"
          input={<BasicInput disabled={true} value={0}></BasicInput>}
        ></InputContainer>
        {!!charges && charges.length > 0 ? (
          <div>
            <h1 className="text-md mb-4 font-medium">Charges</h1>
            <InputContainer
              className="mb-6"
              title="Total Charges"
              input={
                <BasicInput
                  disabled={true}
                  value={totalCharges && totalCharges}
                ></BasicInput>
              }
            ></InputContainer>
            {data &&
              data.AccountCharges?.map((item: any, index: number) => {
                return (
                  <div key={index} className="flex w-100 mb-4">
                    <InputContainer
                      title="Charge Type Name"
                      className="w-full"
                      input={
                        <BasicInput
                          disabled={true}
                          value={item.feeTypeName}
                        ></BasicInput>
                      }
                    ></InputContainer>
                    <InputContainer
                      className="w-full"
                      title="Charge Amount"
                      input={
                        <BasicInput
                          disabled={true}
                          value={item.chargeAmount}
                        ></BasicInput>
                      }
                    ></InputContainer>
                  </div>
                );
              })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </FormCardTemplate>
  );
};

export default AccountClosingCharges;
