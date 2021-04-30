import { Button, Tabs } from "antd";
import { goBack } from "connected-react-router";
import React, { FC } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ScheduledPaymentDetailsTab from "./Tabs/ScheduledPaymentDetailsTab";
import TransactionDetailsTab from "./Tabs/TransactionDetailsTab";
export interface ScheduledPaymentItemViewProps {
  goBack: () => any;
}

const ScheduledPaymentItemView: FC<ScheduledPaymentItemViewProps> = ({
  goBack
}) => {
  const { accountId, scheduledPaymentId } = useParams();

  return (
    <div className="bg-white h-full flex flex-col p-2">
      <div className="flex flex-col flex-1">
        <Tabs flex-1 defaultActiveKey="1">
          <Tabs.TabPane
            tab="Scheduled Payment Details"
            key="1"
            className="px-4"
          >
            <ScheduledPaymentDetailsTab
              scheduledPaymentId={scheduledPaymentId}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Transaction Details" key="2">
            <TransactionDetailsTab />
          </Tabs.TabPane>
        </Tabs>
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

export default connect(null, mapDispatchToProps)(ScheduledPaymentItemView);
