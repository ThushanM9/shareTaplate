import { QuestionCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { UIStateSliceActions } from "../../../../store/modules/ui-state/ui-state.slice";
import { NormalButton } from "../../../atoms/Button";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";
import { OtherDetailsTab } from "./OtherDetailsTab";

export const OtherDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleConfirmClick = () => {
    Modal.confirm({
      title: "Are you Sure?",
      icon: <QuestionCircleOutlined />,
      content: "Signature will be added to the database",
      onOk() {
        history.push("/");
        dispatch(UIStateSliceActions.clearSteps("signature"));
      }
    });
  };
  return (
    <>
      <RouterDivTemplate
        tab={["Other Details"]}
        content={<ScrollTabTemplate tabArr={[<OtherDetailsTab />]} />}
        nav={
          <>
            <NormalButton
              onClick={() => {
                dispatch(
                  UIStateSliceActions.decrementSteps({
                    category: "signature",
                    route: "/signature_upload/account_details"
                  })
                );
                history.push("/signature_upload/account_details");
              }}
              type="default"
              title="Previous"
              className="mr-2"
            />
            <NormalButton onClick={handleConfirmClick} title="Next" />
          </>
        }
      />
    </>
  );
};
