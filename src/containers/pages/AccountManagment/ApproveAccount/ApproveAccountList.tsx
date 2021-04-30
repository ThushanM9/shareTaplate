import { WarningOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Input } from "antd";
import { push } from "connected-react-router";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { GenerateColumnDefinitions } from "../../../../schemas/helpers/generate-column-definition";
import { LOLCSDK } from "../../../../sdk";
import { AccountData } from "../../../../sdk/casa-account/interfaces";
import { iStore } from "../../../../store/store.model";
import { useSDK } from "../../../../utils/hooks/useSDK";
import { P } from "../../../atoms/typography";
import { ActivateAccountSchema } from "../ActivateAccount/ActivateAccountSchema";

const GetAccounts = (status: string, param: any) => {
  const { data, loading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.searchAll({
        status,
        createdBranchId: 83,
      }),

    [param],
    !param,
    []
  );
  console.log(data);
  return !loading ? data.content : [];
};

export const _ApproveAccountList = ({
  navigateToAccountView,
}: ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>) => {
  const cardSchema = ActivateAccountSchema.steps![0].cards![0];
  const [tableData, setTableData] = useState<AccountData[]>([]);
  const tabKey = useSelector((state: iStore) => {
    return state.tabState.tab.key;
  });
  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!, [
    {
      name: "Approve",
      onClick: (item: any) => {
        navigateToAccountView(item.casaIdentification);
        console.log("item", item);
        // console.log(navigateToAccountView);
      },
    },
  ]);
  // console.log(tabKey);
  const { user } = useAuth0();
  //   console.log(user);
  const { data: userBranch, loading: isuserBranchLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.UserService.getUserByUserUsername(user.nickname),
    [],
    false,
    []
  );
  // console.log(
  //   tabKey === 2
  //     ? GetAccounts("CREATED", userBranch)
  //     : GetAccounts("CANCEL", userBranch)
  // );
  // console.log(tabKey);

  const { data: accounts, loading: isAccountsLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.AccountService.getAllPendingAccountDetails(),

    [],
    false,
    []
  );
  //   console.log(accounts);
  const { data, loading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.searchAll({
        status: "REJECTED",
        createdBranchId: 83,
      }),

    [userBranch],
    !userBranch,
    []
  );
  console.log("DATA", data);

  // useEffect(() => {
  //   // switch (tabKey) {
  //   //   case 1:
  //   //     // return setTableData(GetAccounts("CREATED", userBranch));
  //   //     console.log(GetAccounts("CREATED", userBranch));
  //   //     break;
  //   //   case 2:
  //   //     // return setTableData(GetAccounts("CANCEL", userBranch));
  //   //     console.log(GetAccounts("CANCEL", userBranch));
  //   //     break;
  //   // }
  //   if (tabKey === 1) {
  //     console.log(GetAccounts("CREATED", userBranch));
  //   } else if (tabKey === 2) {
  //     console.log(GetAccounts("CANCEL", userBranch));
  //   }
  //   console.log("E", tabKey);
  // }, [tabKey, userBranch]);

  return (
    <div className="fill h-full flex flex-row bg-white">
      <div className="relative bg-white flex flex-col w-full mx-4 my-4">
        {/* <div className=" pl-4 pr-4 p-2" style={{ background: "#F8F8F8" }}> */}
        <div className="my-4 mx-2">
          <Input.Search
            disabled
            className="w-1/4"
            placeholder="Search..."
            enterButton="Search"
            value={""}
            //   onChange={(event) => setSearchTerm(event.target.value)}
            loading={false}
            //   onSearch={(value) => {
            //     setSearchTrigger(searchTrigger + 1);
            //   }}
          />
        </div>
        {/* </div> */}

        {/* {searchTerm === "" || searchTrigger === 0 ? (
          <div className="flex justify-center align-middle mt-8">
            <Alert
              message="Type in a keyword, Select Search type and then press search to begin searching"
              type="info"
            />
          </div>
        ) : (
          <div className="relative fill flex flex-col">
            <Table
              className="relative fill"
              columns={columns}
              dataSource={dataSource}
              loading={loading}
              pagination={false}
            />
            <div className="flex-row flex justify-end items-center p-4">
              <Pagination
                defaultCurrent={1}
                onChange={onPaginationChange}
                {...paginationConfig}
              />
            </div>
          </div>
        )} */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex felx-row items-center justify-center">
            <WarningOutlined
              style={{ color: "#f1c40f", fontSize: 22, marginRight: 5 }}
            />
            <P>Under Construction</P>
          </div>
          <img
            src={require("../../../../img/under_construction.jpg")}
            alt="underconstruction"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        {/* <div className="relative fill flex flex-col mx-2 mb-4">
          <Table
            className="relative fill"
            columns={columns}
            dataSource={!isAccountsLoading ? accounts.content : []}
            //   loading={loading}
            pagination={false}
          />

          <div className="flex-row flex justify-end items-center p-4">
            <Pagination
              defaultCurrent={1}
              // onChange={onPaginationChange}
              // {...paginationConfig}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

const mapState = (state: any) => ({});

const mapDispatch = (dispatch: any, ownProps: any) => ({
  navigateToAccountView: (accountId: number) => {
    dispatch(
      push(
        `/web/yard-management/AnRkr/accounts/approve-account/${accountId}`
      )
    );
  },
});

export const ApproveAccountList = connect(
  mapState,
  mapDispatch
)(_ApproveAccountList);
