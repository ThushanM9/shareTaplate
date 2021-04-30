import { Button } from "antd";
import { goBack } from "connected-react-router";
import React, { FC } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetPassbookById } from "./methods";

export interface PassbookItemViewProps {
  goBack: () => any;
}

const PassbookItemView: FC<PassbookItemViewProps> = ({ goBack }) => {
  const { accountId, passbookId } = useParams();

  const { data: passbookItem } = useGetPassbookById(passbookId);

  return (
    <div className="bg-white h-full p-4">
      <div> [Design have to be clarified]</div>
      <div>
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

export default connect(null, mapDispatchToProps)(PassbookItemView);
