import { useAuth0 } from "@auth0/auth0-react";
import _ from "lodash";
import moment from "moment";
import React from "react";
import { FormCardTemplate } from "../../../../schemas/helpers/form-card";
import BasicInput from "../../../atoms/BasicInput.atom";
import { BottomNavButton } from "../../../atoms/BottomNavButton";
import SelectDate from "../../../atoms/SelectDate";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";

const Charges = ({ data }: { data: any }) => {
  const { user } = useAuth0();
  const totalCharges = _.sumBy(data.AccountCharges, "chargeAmount");
  return (
    <FormCardTemplate title={"Charges"} description={""}>
      <>
        <InputContainer
          title="Approve Account User"
          input={
            <BasicInput disabled={true} value={user.nickname}></BasicInput>
          }
        ></InputContainer>
        <InputContainer
          title="Account Approvel Date"
          input={<SelectDate value={moment()} />}
        ></InputContainer>

        <h1 className="text-md mb-4 font-medium">Charges</h1>
        <InputContainer
          className="mb-6"
          title="Total Charges"
          input={<BasicInput disabled={true} value={totalCharges}></BasicInput>}
        ></InputContainer>
        {data.AccountCharges.map((item: any, index: number) => {
          // setTimeout(() => setTotalCharges(item.chargeAmount), 10);
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
      </>
    </FormCardTemplate>
  );
};

export const ApproveAccountCharges = ({
  onCreateAccount,
  data,
}: {
  onCreateAccount: () => any;
  data: any;
}) => {
  return (
    <RouterDivTemplate
      tab={["Charges"]}
      content={<ScrollTabTemplate tabArr={[<Charges data={data} />]} />}
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {}}
          ></BottomNavButton>
          <BottomNavButton
            className="ml-4"
            text="Confirm"
            disabled={false}
            onClick={() => {
              onCreateAccount();
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
