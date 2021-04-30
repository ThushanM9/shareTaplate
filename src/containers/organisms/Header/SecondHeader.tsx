import React from "react";
import { Route, Switch } from "react-router-dom";
import { CONFIG } from "../../../config";
import ActivateAccountHeader from "./ActivateAccountHeader/ActivateAccountHeader";
import HeaderTitle from "./HeaderTitle";

function SecondHeader() {
  return (
    <div className="flex items-center  h-full pl-4 pr-2">
      <Switch>
        <Route exact path="/a">
          <HeaderTitle title="Account Opening"></HeaderTitle>
        </Route>
        <Route path="/pending_requests">
          <ActivateAccountHeader title="Activate Account"></ActivateAccountHeader>
        </Route>
        <Route exact path={`${CONFIG.tenant}/cheque/pending_requests`}>
          <ActivateAccountHeader title="Pening Request"></ActivateAccountHeader>
        </Route>
        <Route path="/AnRkr/activate_account">
          <ActivateAccountHeader title="Activate Account"></ActivateAccountHeader>
        </Route>
        <Route path="/approve_account">
          <ActivateAccountHeader title="Approve Account"></ActivateAccountHeader>
        </Route>
        <Route path="/request_chequebook">
          <HeaderTitle title="Request Chequebook"></HeaderTitle>
        </Route>
      </Switch>
    </div>
  );
}

export default SecondHeader;
