import React, { FC } from "react";
import BasicInput from "../../../../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";
import { useGetScheduledPaymentById } from "../methods";

export interface ScheduledPaymentDetailsTabProps {
  scheduledPaymentId: string;
}

const ScheduledPaymentDetailsTab: FC<ScheduledPaymentDetailsTabProps> = ({
  scheduledPaymentId
}) => {
  const { data: item, loading } = useGetScheduledPaymentById(
    scheduledPaymentId
  );

  const scheduledPaymentItem = item;
  return (
    <div className="bg-white h-full relative">
      <div className="w-full flex flex-col p-10 flex-wrap">
        <div className="flex flex-1 flex-row mb-6">
          <InputContainer
            className="w-1/5"
            title="Scheduled Payment ID"
            input={
              <BasicInput value={scheduledPaymentId || "-"} disabled={true} />
            }
          />
          <InputContainer
            className="w-1/5"
            title="Scheduled Payment Category"
            input={
              <BasicInput
                value={scheduledPaymentItem.paymentSchedulerCategory || "-"}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5"
            title="Scheduled Payment Date"
            input={
              <BasicInput
                value={scheduledPaymentItem.scheduledDate || "-"}
                disabled={true}
              />
            }
          />

          <InputContainer
            className="w-1/5"
            title="Payment Method"
            input={
              <BasicInput
                value={scheduledPaymentItem.paymentSchedulerMethod || "-"}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5"
            title="Payment Type"
            input={
              <BasicInput
                value={scheduledPaymentItem.scheduledType || "-"}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5"
            title="Amount"
            input={
              <BasicInput
                value={
                  scheduledPaymentItem.instructedAmount?.instructedAmount || "-"
                }
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5"
            title="Reference Details"
            input={
              <BasicInput
                value={scheduledPaymentItem.paymentSchedulerReference || "-"}
                disabled={true}
              />
            }
          />
        </div>
        <div className="flex flex-1 flex-row mb-6">
          <InputContainer
            className="w-1/5 mb-6"
            title="Payment Mode"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 "
            title="Account Type"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 "
            title="Charges"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 "
            title="Tax"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 mb-6"
            title="Beneficiary Name"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 "
            title="Account Number"
            input={
              <BasicInput
                value={scheduledPaymentItem.accountNo || "-"}
                disabled={true}
              />
            }
          />
        </div>

        <div className="flex flex-1 flex-row mb-6">
          <InputContainer
            className="w-1/5 "
            title="Bank/Financial Institution"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />

          <InputContainer
            className="w-1/5 mb-6"
            title="Bank/Financial Institution  Branch"
            input={
              <BasicInput
                value={
                  scheduledPaymentItem.creditorAgentBranch
                    ?.creditorAgentBranchName || "-"
                }
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5"
            title="Created User"
            input={
              <BasicInput
                value={scheduledPaymentItem.createdUser || "-"}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5 "
            title="Created date and time"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 "
            title="Modified User"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 "
            title="Modified date and time"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
        </div>

        <div className="flex flex-row mb-6">
          <InputContainer
            className="w-1/8"
            title="Status"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/8"
            title="Confirm Status"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5"
            title="Notes"
            input={
              <BasicTextArea className="w-auto" value={"[N/A]"} disabled />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduledPaymentDetailsTab;
