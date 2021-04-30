import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { tenant } from "../../../../Auth0/auth0Client";
import { replacePath } from "../../../../utils/replacePath";
import { NormalButton } from "../../../atoms/Button";
import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";
import { AccountDetailsCard } from "../RequestChequebook/AccountDetailsCard";

export const AccountDetails = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  // const dispatch = useDispatch();
  return (
    <>
      <RouterDivTemplate
        tab={["Account Details"]}
        content={<ScrollTabTemplate tabArr={[<AccountDetailsCard />]} />}
        nav={
          <>
            <NormalButton
              onClick={() => {
                history.push(`${tenant}/cheque/pending_chequebook`);
              }}
              type="default"
              title="Previous"
              className="mr-2"
            />
            <NormalButton
              onClick={() => {
                // dispatch(
                //   UIStateSliceActions.incrementSteps({
                //     category: "signature",
                //     route: "/signature_upload/signature_upload",
                //   })
                // );
                history.push(replacePath(path, "flow"));
              }}
              title="Next"
            />
          </>
        }
      />
    </>
  );
};
