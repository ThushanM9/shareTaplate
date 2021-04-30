import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import SearchTableTemplate from "../../templates/SearchTableTemplate/SearchTableTemplate";
import { AccountDetailsPage as AccDetailsIssuance } from "./ChequebookIssuance/AccountDetailsPage";
import { IssuanceFlow } from "./ChequebookIssuance/IssuanceFlow";
import { IssuanceTable } from "./ChequebookIssuance/IssuanceTable";
import { AccountDetailsPage as AccDetailsPendingCheque } from "./PendingChequebook/AccountDetailsPage";
import { PendingChequebookFlow } from "./PendingChequebook/PendingChequebookFlow";
import { PendingChequebookTable } from "./PendingChequebook/PendingChequebookTable";
import { AccountDetailsPage as AccDetailsPending } from "./PendingRequests/AccountDetailsPage";
import PendingRequests from "./PendingRequests/PendingRequests";
import { PendingRequestsFlow } from "./PendingRequests/PendingRequestsFlow";
import { AccountDetailsPage } from "./RequestChequebook/AccountDetailsPage";
import { columns } from "./RequestChequebook/RequestCheckbookTableColumns";
import { checkbookCustomerData } from "./RequestChequebook/RequestCheckbookTableData";
import { RequestChequebookFlow } from "./RequestChequebook/RequestChequebookFlow";

export const Chequebook = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Redirect exact from={path} to={`${path}/request_chequebook`} />
      <Route exact path={`${path}/request_chequebook`}>
        <SearchTableTemplate columns={columns} data={checkbookCustomerData()} />
      </Route>
      <Route path={`${path}/request_chequebook/account_details`}>
        <AccountDetailsPage />
      </Route>
      <Route path={`${path}/request_chequebook/flow`}>
        <RequestChequebookFlow />
      </Route>
      <Route exact path={`${path}/pending_requests`}>
        <PendingRequests />
      </Route>
      <Route path={`${path}/pending_requests/account_details`}>
        <AccDetailsPending />
      </Route>
      <Route path={`${path}/pending_requests/flow`}>
        <PendingRequestsFlow />
      </Route>
      <Route exact path={`${path}/chequebook_issuance`}>
        <IssuanceTable />
      </Route>
      <Route path={`${path}/chequebook_issuance/account_details`}>
        <AccDetailsIssuance />
      </Route>
      <Route path={`${path}/chequebook_issuance/flow`}>
        <IssuanceFlow />
      </Route>
      <Route exact path={`${path}/pending_chequebook`}>
        <PendingChequebookTable />
      </Route>
      <Route path={`${path}/pending_chequebook/account_details`}>
        <AccDetailsPendingCheque />
      </Route>
      <Route path={`${path}/pending_chequebook/flow`}>
        <PendingChequebookFlow />
      </Route>
    </Switch>
  );
};
