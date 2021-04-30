import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { UIStateSliceActions } from "../../../../store/modules/ui-state/ui-state.slice";
import { NormalButton } from "../../../atoms/Button";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";
import { SignatureUploadTab } from "./SignatureUploadTab";

export const SignatureUpload = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <RouterDivTemplate
        tab={["Signature Upload"]}
        content={<ScrollTabTemplate tabArr={[<SignatureUploadTab />]} />}
        nav={
          <>
            <NormalButton
              onClick={() => {
                dispatch(
                  UIStateSliceActions.decrementSteps({
                    category: "signature",
                    route: "/signature_upload/customer_details",
                  })
                );
                history.push("/signature_upload/customer_details");
              }}
              type="default"
              title="Previous"
              className="mr-2"
            />
            <NormalButton
              onClick={() => {
                dispatch(
                  UIStateSliceActions.incrementSteps({
                    category: "signature",
                    route: "/signature_upload/account_details",
                  })
                );
                history.push("/signature_upload/account_details");
              }}
              title="Next"
            />
          </>
        }
      />
    </>
  );
};
