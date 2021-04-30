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
                    category: "chequePendingChequebook",
                    route: replacePath(path, "collection_details")
                  })
                );
              }}
              type="default"
              title="Previous"
              className="mr-2"
            />
            <NormalButton
              onClick={() => {
                history.push(replacePath(path, "status_update"));
                dispatch(
                  UIStateSliceActions.incrementSteps({
                    category: "chequePendingChequebook",
                    route: replacePath(path, "status_update")
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
