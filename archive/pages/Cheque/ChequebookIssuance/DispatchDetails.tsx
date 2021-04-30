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
import { DispatchDetailsCard } from "../RequestChequebook/DispatchDetailsCard";

export const DispatchDetails = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const dispatch = useDispatch();

  const handleConfirmClick = () => {
    Modal.confirm({
      title: "Confirm Chequebook Issuance?",
      icon: <QuestionCircleOutlined />,
      content: "Chequebook will be issued to John Doe",
      onOk() {
        history.push("/");
        dispatch(UIStateSliceActions.clearSteps("chequeIssuance"));
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
                history.push(replacePath(path, "collection_details"));
                dispatch(
                  UIStateSliceActions.decrementSteps({
                    category: "chequeIssuance",
                    route: replacePath(path, "collection_details")
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
