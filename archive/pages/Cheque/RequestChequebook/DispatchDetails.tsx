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
import { DispatchDetailsCard } from "./DispatchDetailsCard";

export const DispatchDetails = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const dispatch = useDispatch();

  const handleConfirmClick = () => {
    Modal.confirm({
      title: "Request Chequebook?",
      icon: <QuestionCircleOutlined />,
      content: "Chequebook request will be added to pending list",
      onOk() {
        history.push("/");
        dispatch(UIStateSliceActions.clearSteps("chequeRequest"));
      }
    });
  };
  return (
    <>
      <RouterDivTemplate
        tab={["Dispatch Details"]}
        content={<ScrollTabTemplate tabArr={[<DispatchDetailsCard />]} />}
        nav={
          <>
            <NormalButton
              onClick={() => {
                history.push(replacePath(path, "request_details"));
                dispatch(
                  UIStateSliceActions.decrementSteps({
                    category: "chequeRequest",
                    route: replacePath(path, "request_details")
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
