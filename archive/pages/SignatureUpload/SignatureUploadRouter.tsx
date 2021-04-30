import React from "react";
import { Redirect, Switch, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from "../../organisms/PrivateRoute.organism";
import { CustomerDetails } from "./1-CustomerDetails";
import { SignatureUpload } from "./2-SignatureUpload";
import { AccountDetails } from "./3-AccountDetails";
import { OtherDetails } from "./4-Other";

export const SignatureUploadRouter = () => {
  let { path } = useRouteMatch();

  return (
    <div className="relative w-full h-full">
      <Switch>
        <Redirect
          exact
          from="/signature_upload"
          to="/signature_upload/customer_details"
        />
        <PrivateRoute path={`${path}/customer_details`} category="signature">
          <CustomerDetails />
        </PrivateRoute>
        <PrivateRoute path={`${path}/signature_upload`} category="signature">
          <SignatureUpload />
        </PrivateRoute>
        <PrivateRoute path={`${path}/account_details`} category="signature">
          <AccountDetails />
        </PrivateRoute>
        <PrivateRoute path={`${path}/other_details`} category="signature">
          <OtherDetails />
        </PrivateRoute>
      </Switch>
    </div>
  );
};
