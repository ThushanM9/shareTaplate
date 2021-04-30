import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { BlockingConfirmation } from "./ExtraScreens/BlockingConfirmation";
import { BlockingCreation } from "./ExtraScreens/BlockingCreation";
import { DeactivationConfirmation } from "./ExtraScreens/DeactivationConfirmation";
import { DeactivationCreation } from "./ExtraScreens/DeactivationCreation";
import { ReactivationConfirmation } from "./ExtraScreens/ReactivationConfirmation";
import { ReactivationCreation } from "./ExtraScreens/ReactivationCreation";

export const TestRouter = () => {
  let { path } = useRouteMatch();
  return (
    <div className="h-full">
      <Switch>
        <Redirect exact from="/test" to="/test/account_opening" />

        <Route path={`${path}/deactivation_creation`}>
          <DeactivationCreation />
        </Route>
        <Route path={`${path}/deactivation_confirmation`}>
          <DeactivationConfirmation />
        </Route>
        <Route path={`${path}/blocking_creation`}>
          <BlockingCreation />
        </Route>
        <Route path={`${path}/blocking_confirmation`}>
          <BlockingConfirmation />
        </Route>
        <Route path={`${path}/reactivation_creation`}>
          <ReactivationCreation />
        </Route>
        <Route path={`${path}/reactivation_confirmation`}>
          <ReactivationConfirmation />
        </Route>
      </Switch>
    </div>
  );
};
