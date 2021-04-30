import React from "react";
import { Redirect, Switch, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from "../../../organisms/PrivateRoute.organism";
import { DispatchDetails } from "./DispatchDetails";
import { RequestDetails } from "./RequestDetails";

export const RequestChequebookRouter = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Redirect exact from={path} to={`${path}/request_details`} />
      <PrivateRoute category="chequeRequest" path={`${path}/request_details`}>
        <RequestDetails />
      </PrivateRoute>
      <PrivateRoute category="chequeRequest" path={`${path}/dispatch_details`}>
        <DispatchDetails />
      </PrivateRoute>
    </Switch>
  );
};
