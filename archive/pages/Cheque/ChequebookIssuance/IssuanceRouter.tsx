import React from "react";
import { Redirect, Switch, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from "../../../organisms/PrivateRoute.organism";
import { CollectionDetails } from "./CollectionDetails";
import { DispatchDetails } from "./DispatchDetails";
import { IssueDetails } from "./IssueDetails";
import { RequestDetails } from "./RequestDetails";

export const IssuanceRouter = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Redirect exact from={path} to={`${path}/request_details`} />
      <PrivateRoute category="chequeIssuance" path={`${path}/request_details`}>
        <RequestDetails />
      </PrivateRoute>
      <PrivateRoute category="chequeIssuance" path={`${path}/issue_details`}>
        <IssueDetails />
      </PrivateRoute>
      <PrivateRoute
        category="chequeIssuance"
        path={`${path}/collection_details`}
      >
        <CollectionDetails />
      </PrivateRoute>
      <PrivateRoute category="chequeIssuance" path={`${path}/dispatch_details`}>
        <DispatchDetails />
      </PrivateRoute>
    </Switch>
  );
};
