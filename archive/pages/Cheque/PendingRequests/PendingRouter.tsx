import React from "react";
import { Redirect, Switch, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from "../../../organisms/PrivateRoute.organism";
import { DispatchDetails } from "./DispatchDetails";
import { RequestDetails } from "./RequestDetails";
import { StatusUpdateDetails } from "./StatusUpdateDetails";

export const PendingRouter = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Redirect exact from={path} to={`${path}/request_details`} />
      <PrivateRoute
        category="chequePendingRequest"
        path={`${path}/request_details`}
      >
        <RequestDetails />
      </PrivateRoute>
      <PrivateRoute
        category="chequePendingRequest"
        path={`${path}/dispatch_details`}
      >
        <DispatchDetails />
      </PrivateRoute>
      <PrivateRoute
        category="chequePendingRequest"
        path={`${path}/status_update`}
      >
        <StatusUpdateDetails />
      </PrivateRoute>
    </Switch>
  );
};
