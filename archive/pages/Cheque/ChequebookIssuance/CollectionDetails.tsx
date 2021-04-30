import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { UIStateSliceActions } from "../../../../store/modules/ui-state/ui-state.slice";
import { replacePath } from "../../../../utils/replacePath";
import { NormalButton } from "../../../atoms/Button";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";
import { CollectionDetailsCard } from "./CollectionDetailsCard";

export const CollectionDetails = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const dispatch = useDispatch();
  return (
    <>
      <RouterDivTemplate
        tab={["Collection Details"]}
        content={<ScrollTabTemplate tabArr={[<CollectionDetailsCard />]} />}
        nav={
          <>
            <NormalButton
              onClick={() => {
                history.push(replacePath(path, "issue_details"));
                dispatch(
                  UIStateSliceActions.decrementSteps({
                    category: "chequeIssuance",
                    route: replacePath(path, "issue_details")
                  })
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
                    category: "chequeIssuance",
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
