import React, { FC } from "react";
import BasicInput from "../../../../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";
import { useGetStandingOrderById } from "../methods";

export interface StandingOrderTabProps {
  standingOrderId: string;
}

const StandingOrderTab: FC<StandingOrderTabProps> = ({ standingOrderId }) => {
  const { data: item, loading, error } = useGetStandingOrderById(
    standingOrderId
  );

  const standingOrder = item;
  return (
    <div className="bg-white h-full relative">
      <div className="w-full flex p-10 flex-wrap">
        <InputContainer
          className="w-1/5 mb-6"
          title="Standing Order ID Purpose"
          input={
            <BasicInput value={standingOrder.purpose || "-"} disabled={true} />
          }
        />
        <div className="flex w-1/4 mr-6">
          <InputContainer
            className="w-auto mr-2"
            title="First Payment Date"
            input={
              <BasicInput
                className="w-auto text-xxs"
                value={standingOrder.firstPaymentDate || "-"}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-auto"
            title="Amount"
            input={
              <BasicInput
                className="w-auto text-xxs"
                value={standingOrder.firstPaymentAmount || "-"}
                disabled={true}
              />
            }
          />
        </div>
        <div className="flex w-1/4 mr-6">
          <InputContainer
            className="w-auto"
            title="Recurring Payment Date"
            input={
              <BasicInput
                className="w-auto text-xxs mr-2"
                value={standingOrder.recurringPaymentDate || "-"}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-64"
            title="Amount"
            input={
              <BasicInput
                className="w-auto text-xxs"
                value={standingOrder.recurringPaymentAmount || "-"}
                disabled={true}
              />
            }
          />
        </div>
        <div className="flex w-1/4">
          <InputContainer
            className="w-auto"
            title="Final Payment Date"
            input={
              <BasicInput
                className="w-auto text-xxs mr-2"
                value={standingOrder.finalPaymentDate || "-"}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-auto"
            title="Amount"
            input={
              <BasicInput
                className="w-auto text-xxs"
                value={standingOrder.finalPaymentAmount || "-"}
                disabled={true}
              />
            }
          />
        </div>
        <InputContainer
          className="w-1/5 mb-6"
          title="Frequency"
          input={
            <BasicInput
              value={standingOrder.applicationFrequencyUnit || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Total Number of Payments"
          input={
            <BasicInput
              value={standingOrder.totalNoOfPayments || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Priority"
          input={
            <BasicInput value={standingOrder.priority || "-"} disabled={true} />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Processing Type"
          input={
            <BasicInput
              value={standingOrder.processingType || "-"}
              disabled={true}
            />
          }
        />

        <InputContainer
          className="w-1/5 mb-6"
          title="Payment Mode"
          input={
            <BasicInput
              value={standingOrder.paymentMethodName || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Account Type"
          input={
            <BasicInput
              value={standingOrder.accountType || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Tax Amount"
          input={<BasicInput value={"[N/A]"} disabled={true} />}
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Charge Amount"
          input={<BasicInput value={"[N/A]"} disabled={true} />}
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Status"
          input={
            <BasicInput value={standingOrder.status || "-"} disabled={true} />
          }
        />
        <InputContainer
          className="w-1/5 mb-6"
          title="Beneficiary Type"
          input={<BasicInput value={"[N/A]"} disabled={true} />}
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Scheme Name"
          input={<BasicInput value={"[N/A]"} disabled={true} />}
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Account Number"
          input={
            <BasicInput
              value={standingOrder.accountNo || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Account Name"
          input={<BasicInput value={"[N/A]"} disabled={true} />}
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Bank/Financial Institution"
          input={
            <BasicInput
              value={standingOrder.externalInstitutionName || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5 mb-6"
          title="Bank/Financial Institution  Branch"
          input={
            <BasicInput
              value={standingOrder.extInstitutionBranchName || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Created User"
          input={
            <BasicInput
              value={standingOrder.createdUser || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Created date and time"
          input={
            <BasicInput
              value={standingOrder.createdDate || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Created Branch"
          input={
            <BasicInput
              value={standingOrder.accountCreatedBranchName || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Modified User"
          input={
            <BasicInput
              value={standingOrder.modifiedUser || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Modified date and time"
          input={
            <BasicInput
              value={standingOrder.modifiedDate || "-"}
              disabled={true}
            />
          }
        />
        <InputContainer
          className="w-1/5  mb-6"
          title="Notes"
          input={<BasicTextArea className="w-auto" value={"[N/A]"} disabled />}
        />
      </div>
    </div>
  );
};

export default StandingOrderTab;
