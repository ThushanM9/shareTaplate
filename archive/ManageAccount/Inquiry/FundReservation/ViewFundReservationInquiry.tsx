import { Button } from "antd";
import { goBack } from "connected-react-router";
import React, { FC } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import BasicInput from "../../../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../../../organisms/BasicAccountDetails/InputContainer";
import { useGetFundReservationsByAccountId } from "./method";

export interface ViewFundReservationInquiryProps {
  goBack: () => any;
}

const ViewFundReservationInquiry: FC<ViewFundReservationInquiryProps> = ({
  goBack
}) => {
  const { accountId, fundReservationId } = useParams();

  const {
    data: fundReservationData,
    loading
  } = useGetFundReservationsByAccountId(accountId);

  const reservationItem = fundReservationData
    ? fundReservationData.fundReservations.find(
        item => item.id === Number(fundReservationId)
      )
    : ({} as any);

  return (
    <div className="bg-white h-full relative flex-col flex flex-1">
      <div className="flex flex-col flex-1">
        <div className="w-full flex p-10 flex-wrap">
          <InputContainer
            className="w-1/5 mb-10"
            title="Fund Reservation Date"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Fund Reservation ID"
            input={<BasicInput value={fundReservationId} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Fund Reservation Type"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Fund Reservation Period"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Amount"
            input={
              <BasicInput
                value={reservationItem.fureAmount || ""}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Force Debit"
            input={
              <BasicInput
                value={reservationItem.fureAllowForceDebit || ""}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Priority"
            input={
              <BasicInput
                value={reservationItem.furePriority || ""}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Status"
            input={
              <BasicInput
                value={reservationItem.fureStatus || ""}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Confirm Status"
            input={<BasicInput value={"[N/A]"} disabled={true} />}
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Created User"
            input={
              <BasicInput
                value={reservationItem.fureCreatedUser || ""}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Created Date and Time"
            input={
              <BasicInput
                value={reservationItem.fureCreatedDate || ""}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Modified User"
            input={
              <BasicInput
                value={reservationItem.fureLastApprovedUser || ""}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/5 mb-10"
            title="Modified Date and Time"
            input={
              <BasicInput
                value={reservationItem.fureLastApprovedDate || ""}
                disabled={true}
              />
            }
          />
          <InputContainer
            className="w-1/4 mb-10"
            title="Notes"
            input={
              <BasicTextArea
                className="w-auto"
                value={reservationItem.fureRemark || ""}
              />
            }
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row flex-1 justify-end p-4">
          <Button
            className="text-xxxs"
            type="primary"
            onClick={() => {
              goBack();
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    goBack: () => dispatch(goBack())
  };
};

export default connect(null, mapDispatchToProps)(ViewFundReservationInquiry);
