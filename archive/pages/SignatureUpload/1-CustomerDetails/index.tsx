import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { UIStateSliceActions } from "../../../../store/modules/ui-state/ui-state.slice";
import { NormalButton } from "../../../atoms/Button";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";

export const CustomerDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <RouterDivTemplate
        tab={["Customer Details"]}
        content={<ScrollTabTemplate tabArr={[<p />]} />}
        nav={
          <>
            <NormalButton
              onClick={() => {}}
              disabled={true}
              type="default"
              title="Previous"
              className="mr-2"
            />
            <NormalButton
              onClick={() => {
                dispatch(
                  UIStateSliceActions.incrementSteps({
                    category: "signature",
                    route: "/signature_upload/signature_upload"
                  })
                );
                history.push("/signature_upload/signature_upload");
              }}
              title="Next"
            />
          </>
        }
      />
    </>
  );
};
