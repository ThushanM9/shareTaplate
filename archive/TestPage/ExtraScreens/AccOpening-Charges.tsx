import React from "react";
import { useParams } from "react-router";
import { setCharges } from "../../../../store/modules/AccountOpening/10-charges/charges.dispatcher";
import BasicInput from "../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../atoms/BasicTextArea.atom";
import SelectDate from "../../../atoms/SelectDate";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const AccOpeningCharges = (props: { data: iCharges }) => {
  const { operation } = useParams();
  return (
    <DetailsBoxTemplate
      title="Account Opening"
      details="These are the details of the account"
      item={
        <div className="px-2">
          <InputContainer
            className="mt-2"
            title="Account Opening User"
            input={
              operation === "account_inquiry" ? (
                <BasicInput
                  className="w-2/5 text-xxxs"
                  disabled={true}
                  value={props.data.openingUser}
                ></BasicInput>
              ) : (
                <BasicInput
                  className="w-2/5 text-xxxs"
                  disabled={true}
                  placeholder="Ted Russel"
                ></BasicInput>
              )
            }
            label="This is automatically generated."
          />
          <InputContainer
            className=" mt-4 "
            title="Card Issue Date"
            input={
              operation === "account_inquiry" ? (
                <BasicInput
                  className="w-2/5 text-xxxs"
                  disabled={true}
                  value={props.data.issueData}
                ></BasicInput>
              ) : (
                <SelectDate
                  onChange={(d, date) => setCharges({ issueDate: date })}
                  className="w-2/5 text-xxxs"
                  disabled={false}
                ></SelectDate>
              )
            }
            label="This is automatically generated."
          />
          <h1 className="my-4 mt-8 font-semibold text-sm">Charges</h1>
          <div className="flex w-full">
            <div className="w-2/5">
              <InputContainer
                className=" mt-4"
                title="Total Charges"
                input={
                  operation === "account_inquiry" ? (
                    <BasicInput
                      className="text-xxxs"
                      disabled={true}
                      value={props.data.totalCharges}
                    ></BasicInput>
                  ) : (
                    <BasicInput
                      onChange={(e: any) =>
                        setCharges({ totalCharges: e.target.value })
                      }
                      className="text-xxxs"
                      placeholder="10,000"
                    ></BasicInput>
                  )
                }
                label="This is automatically generated."
              />
              <InputContainer
                className="mt-4"
                title="Charge Type Name"
                input={
                  operation === "account_inquiry" ? (
                    <BasicInput
                      className="text-xxxs"
                      disabled={true}
                      value={props.data.chargesTypeName}
                    ></BasicInput>
                  ) : (
                    <BasicInput
                      onChange={(e: any) =>
                        setCharges({ chargeType: e.target.value })
                      }
                      className="text-xxxs"
                      placeholder="Activation Charge"
                    ></BasicInput>
                  )
                }
                label="This is automatically generated."
              />
              <InputContainer
                className=" mt-4"
                title="Charges Amount"
                input={
                  operation === "account_inquiry" ? (
                    <BasicInput
                      className="text-xxxs"
                      disabled={true}
                      value={props.data.chargesAmount}
                    ></BasicInput>
                  ) : (
                    <BasicInput
                      onChange={(e: any) =>
                        setCharges({ chargeAmount: e.target.value })
                      }
                      className="text-xxxs"
                      disabled={false}
                      placeholder="10,000"
                    ></BasicInput>
                  )
                }
                label="This is automatically generated."
              />
            </div>
            <div className="w-3/5 p-0">
              <InputContainer
                className="text-xxxs mt-3 ml-8 w-full"
                title="Notes"
                input={
                  operation === "account_inquiry" ? (
                    <BasicTextArea
                      disabled={true}
                      value={props.data.notes}
                    ></BasicTextArea>
                  ) : (
                    <BasicTextArea placeholder="Type..." />
                  )
                }
                label=""
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export interface iCharges {
  openingUser: string;
  issueData: string;
  totalCharges: string;
  chargesTypeName: string;
  chargesAmount: string;
  notes: string;
}
