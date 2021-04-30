import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { tenant } from "../../../../Auth0/auth0Client";
import { UIStateSliceActions } from "../../../../store/modules/ui-state/ui-state.slice";
import { replacePath } from "../../../../utils/replacePath";
import { NormalButton } from "../../../atoms/Button";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";
import { RequestDetailsCard } from "../RequestChequebook/RequestDetailsCard";

export const RequestDetails = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const dispatch = useDispatch();
  return (
    <>
      <RouterDivTemplate
        tab={["Chequebook Request Details"]}
        content={<ScrollTabTemplate tabArr={[<RequestDetailsCard />]} />}
        nav={
          <>
            <NormalButton
              onClick={() => {
                history.push(
                  `${tenant}/cheque/pending_requests/account_details`
                );
              }}
              type="default"
              title="Previous"
              className="mr-2"
            />
            <NormalButton
              onClick={() => {
                history.push(replacePath(path, "dispatch_details"));
                dispatch(
                  UIStateSliceActions.incrementSteps({
                    category: "chequePendingRequest",
                    route: replacePath(path, "dispatch_details")
                  })
                );
              }}
              title="Next"
            />
          </>
        }
      />
    </>
  );
};
