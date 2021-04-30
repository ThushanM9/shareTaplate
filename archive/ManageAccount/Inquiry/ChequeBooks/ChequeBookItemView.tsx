import { Button, Tabs } from "antd";
import { goBack } from "connected-react-router";
import React, { FC } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ChequeBookDetails from "./Tabs/ChequeBookDetails";
import ChequeLeafDetails from "./Tabs/ChequeLeafDetails";
export interface ChequeBooksItemViewProps {
  goBack: () => any;
}

const ChequeBooksItemView: FC<ChequeBooksItemViewProps> = ({ goBack }) => {
  const { accountId, chequeBookId } = useParams();
  return (
    <div className="bg-white h-full flex flex-col p-2">
      <div className="flex flex-col flex-1">
        <Tabs
          flex-1
          defaultActiveKey="1"
          style={{ width: "100%", height: "100%" }}
        >
          <Tabs.TabPane tab="Chequebook Details" key="1" className="px-4">
            <ChequeBookDetails chequeBookId={chequeBookId} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Checkbook Leafs" key="2">
            <ChequeLeafDetails chequeBookId={chequeBookId} />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-end pb-2 pr-2">
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

export default connect(null, mapDispatchToProps)(ChequeBooksItemView);
