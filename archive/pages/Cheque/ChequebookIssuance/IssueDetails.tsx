import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { UIStateSliceActions } from "../../../../store/modules/ui-state/ui-state.slice";
import { replacePath } from "../../../../utils/replacePath";
import { NormalButton } from "../../../atoms/Button";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";
import { IssueDetailsCard } from "./IssueDetailsCard";

export const IssueDetails = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const dispatch = useDispatch();
  return (
    <>
      <RouterDivTemplate
        tab={["Chequebook Issue Details"]}
        content={<ScrollTabTemplate tabArr={[<IssueDetailsCard />]} />}
        nav={
          <>
            <NormalButton
              onClick={() => {
                history.push(replacePath(path, "request_details"));
                dispatch(
                  UIStateSliceActions.decrementSteps({
                    category: "chequeIssuance",
                    route: replacePath(path, "request_details")
                  })
                );
              }}
              type="default"
              title="Previous"
              className="mr-2"
            />
            <NormalButton
              onClick={() => {
                history.push(replacePath(path, "collection_details"));
                dispatch(
                  UIStateSliceActions.incrementSteps({
                    category: "chequeIssuance",
                    route: replacePath(path, "collection_details")
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
