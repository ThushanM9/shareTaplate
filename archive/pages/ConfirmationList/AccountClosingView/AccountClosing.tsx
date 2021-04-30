import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, notification, Select } from "antd";
import React from "react";
import { useParams } from "react-router";
import { setCurrentStep } from "../../../../store/modules/steps-state/steps-state.dispatchers";
import { assets } from "../../../../ui-helpers/assets";
import BasicInput from "../../../atoms/BasicInput.atom";
import NavButton from "../../../atoms/NavButton";
import { P } from "../../../atoms/typography";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";
import AccountClosingCharges from "./AccountClosingCharges";
import AccountClosingFundReservation from "./AccountClosingFundReservation";
import AccountClosingOverdraftDetails from "./AccountClosingOverdraftDetails";
import AccountClosingPendingCheque from "./AccountClosingPendingCheque";
import AccountClosingPledgeDetails from "./AccountClosingPledgeDetails";
import AccountClosingShedulePayment from "./AccountClosingSchedulePayment";
import AccountClosingStandingOrder from "./AccountClosingStandingOrder";

const closedAccounts = true;

function AccountClosing() {
  const { confirm } = Modal;
  const { customer_id, operation, account_no } = useParams();

  const accountCloseRequest = () => {
    if (closedAccounts) {
      confirm({
        title: "Are you sure you want to Close this account ?",
        icon: <ExclamationCircleOutlined />,
        content: (
          <div>
            <P className="text-xs">Result of this will close the account</P>
            <InputContainer
              className=" mt-4 "
              title="Closing reason"
              input={
                <Select
                  size="small"
                  defaultValue="Choose"
                  style={{ width: 120 }}
                >
                  <Select.Option value="1">Cancel</Select.Option>
                  <Select.Option value="2">Close</Select.Option>
                </Select>
              }
              label="This is automatically generated."
            />
          </div>
        ),
        onOk() {
          // onSave();
        },
        onCancel() {}
      });
    } else {
      confirm({
        title: "Are you sure you want to Close this account ?",
        icon: <ExclamationCircleOutlined />,
        content: (
          <div>
            <P className="text-xs">Result of this will close the account</P>
            <InputContainer
              className="mt-4"
              title="Withdrawl Amount"
              input={
                <BasicInput
                  disabled
                  className="text-xxxs"
                  placeholder="10,000"
                ></BasicInput>
              }
              label="This is automatically generated."
            />
          </div>
        ),
        onOk() {
          // onSave();
        },
        onCancel() {}
      });
    }
  };

  const onSave = () => {
    try {
      //write a common module for notifications
      notification.info({
        message: `Success`,
        description: `Something went wrong!`,
        placement: "bottomRight",
        icon: (
          <ExclamationCircleOutlined style={{ color: assets.color.green }} />
        )
      });
    } catch (error) {
      notification.error({
        message: `Oops`,
        description: `Something went wrong!`,
        placement: "bottomRight",
        icon: <ExclamationCircleOutlined style={{ color: assets.color.red }} />
      });
    }
  };

  return (
    <>
      <RouterDivTemplate
        tab={[
          "Charges",
          "Overdraft Details",
          "Standing Order",
          "Schedule Payment",
          "Fund Reservation",
          "Pending Cheque Realization",
          "Pledging Details"
        ]}
        content={
          <ScrollTabTemplate
            tabArr={[
              <AccountClosingCharges />,
              <AccountClosingOverdraftDetails />,
              <AccountClosingStandingOrder />,
              <AccountClosingShedulePayment />,
              <AccountClosingFundReservation />,
              <AccountClosingPendingCheque />,
              <AccountClosingPledgeDetails />
            ]}
          />
        }
        nav={
          <>
            <NavButton
              onClick={() => setCurrentStep(8)}
              disabled={false}
              style={{ marginRight: ".5rem" }}
              type=""
              title="Previous"
              to={`/AnRkr/a/other_details/${customer_id}`}
            />
            <Button
              type="primary"
              className="w-20 text-xs pt-0 pb-0 h-6"
              size="small"
              onClick={() => accountCloseRequest()}
            >
              Next
            </Button>
          </>
        }
      />
    </>
  );
}

export default AccountClosing;
