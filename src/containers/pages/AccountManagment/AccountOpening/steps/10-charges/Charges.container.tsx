import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import React, { useContext, useEffect, useRef } from "react";
import { LOLCSDK } from "../../../../../../sdk";
import { useSDK } from "../../../../../../utils/hooks/useSDK";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import { AccountOpeningContainerContext } from "../../AccountOpeningContext";
import { ChargesDetailsTab } from "./tabs/ChargesDetailsTab";

export const Charges_Container = ({
  onCreateAccount,
  setCurrentStep,
}: {
  onCreateAccount: () => any;
  setCurrentStep: any;
}) => {
  const ChargesDetailsTabRef = useRef();
  const { user } = useAuth0();

  const { state, setState } = useContext(AccountOpeningContainerContext);
  const { data: userBranch, loading: isUserBranchLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.UserService.getUserByUserUsername(user.nickname).then(
        (userBranch) => {
          setState({
            ...state,
            globalFormState: {
              ...state.globalFormState,
              accountCreateBranchOrganizationLevelId: userBranch.userBranchMappings?.filter(
                (item: any) => item.userBranchType === "DEFAULT"
              )[0].organizationLevelId,
              accountCreateBranchOrganizationLevelName: userBranch.userBranchMappings?.filter(
                (item: any) => item.userBranchType === "DEFAULT"
              )[0].organizationLevel,
              accountOpenBranchOrganizationLevelId: userBranch.userBranchMappings?.filter(
                (item: any) => item.userBranchType === "DEFAULT"
              )[0].organizationLevelId,
              accountOpenBranchOrganizationLevelName: userBranch.userBranchMappings?.filter(
                (item: any) => item.userBranchType === "DEFAULT"
              )[0].organizationLevel,
              casaOfficerName: user.nickname,
              officerId: 1,
              casaAccountOpenedDate: moment().format("YYYY/MM/DD"),
              casaOpenBranch: userBranch.userBranchMappings?.filter(
                (item: any) => item.userBranchType === "DEFAULT"
              )[0].branchId,
              casaCreatedBranch: userBranch.userBranchMappings?.filter(
                (item: any) => item.userBranchType === "DEFAULT"
              )[0].branchId,
            },
          });
        }
      ),
    [user],
    false,
    []
  );

  useEffect(() => {
    // this should be removed and fixed
    if (
      ChargesDetailsTabRef &&
      ChargesDetailsTabRef.current &&
      state.globalFormState.accountCreateBranchOrganizationLevelId !== null
    ) {
      const errors = (ChargesDetailsTabRef.current as any).validateCard();
    }
  }, [
    onCreateAccount,
    state.globalFormState.accountCreateBranchOrganizationLevelId,
  ]);

  useEffect(() => {}, [setState, state, user.nickname, userBranch]);

  return (
    <RouterDivTemplate
      tab={["Charges"]}
      content={
        <ScrollTabTemplate
          tabArr={[<ChargesDetailsTab ref={ChargesDetailsTabRef} />]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep(8);
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Confirm"
            className="ml-2"
            onClick={async () => {
              onCreateAccount();
            }}
          />
        </>
      }
    />
  );
};
