import { QuestionCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { UIStateSliceActions } from "../../../../store/modules/ui-state/ui-state.slice";
import { replacePath } from "../../../../utils/replacePath";
import { NormalButton } from "../../../atoms/Button";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";
import { StatusUpdateCard } from "../PendingRequests/StatusUpdateCard";

export const StatusUpdateDetails = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const dispatch = useDispatch();

  const handleConfirmClick = () => {
    Modal.confirm({
      title: "Update Chequebook Issuance Status?",
      icon: <QuestionCircleOutlined />,
      content: "Chequebook issuance status will be updated",
      onOk() {
        history.push("/");
        dispatch(UIStateSliceActions.clearSteps("chequePendingChequebook"));
      }
    });
  };
  return (
    <>
      <RouterDivTemplate
        tab={["Chequebook Status Update Details"]}
        content={<ScrollTabTemplate tabArr={[<StatusUpdateCard />]} />}
        nav={
          <>
            <NormalButton
              onClick={() => {
                history.push(replacePath(path, "dispatch_details"));
                dispatch(
                  UIStateSliceActions.decrementSteps({
                    category: "chequePendingChequebook",
                    route: replacePath(path, "dispatch_details")
                  })
                );
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
