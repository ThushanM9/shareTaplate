import { useAuth0 } from "@auth0/auth0-react";
import { Input, Select, Spin, Table } from "antd";
import { push } from "connected-react-router";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { GenerateColumnDefinitions } from "../../../../../schemas/helpers/generate-column-definition";
import { LOLCSDK } from "../../../../../sdk";
import { iStore } from "../../../../../store/store.model";
import { useSDK } from "../../../../../utils/hooks/useSDK";
import { ActivateAccountSchema } from "../ActivateAccountSchema";

export const _SelectActivateAccounts = ({
  navigateToAccountView,
}: ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>) => {
  const [status, setStatus] = useState("CREATED");
  const [searchTerm, setSearchTerm] = useState("");
  const [tableLoading, setTableLoading] = useState<boolean>(false);
  const [content, setContent] = useState<any>();
  const [paginationConfig, setPaginationConfig] = useState({
    total: 0,
    defaultPageSize: 10,
    pageSize: 10,
    current: 1,
  });

  const [searchType, setSearchType] = useState<string>("accountNo");
  const tabKey = useSelector((state: iStore) => {
    return state.tabState.tab.key;
  });

  //!branch id cannot be zero if so rewrite logic
  const [accountCall, setAccountCall] = useState<{
    branchId: number;
    pageNumber: number;
  }>({ branchId: 0, pageNumber: 0 });
  const { user } = useAuth0();

  const { data: userBranch, loading: isuserBranchLoading = true } = useSDK(
    (sdk: LOLCSDK) => sdk.UserService.getUserByUserUsername(user.nickname),
    [],
    false,
    []
  );

  useEffect(() => {
    setAccountCall({
      branchId: userBranch.userBranchMappings?.filter(
        (item) => item.userBranchType === "DEFAULT"
      )[0].branchId,
      pageNumber: 0,
    });
  }, [userBranch.userBranchMappings]);

  const { loading } = useSDK(
    async (sdk: LOLCSDK) => {
      setTableLoading(true);
      let data: any = await sdk.AccountService.searchAll(
        !!searchTerm.length
          ? {
              status,
              createdBranchId: accountCall.branchId,
              size: paginationConfig.pageSize,
              page: paginationConfig.current - 1,
              [searchType]: searchTerm,
            }
          : {
              status,
              createdBranchId: accountCall.branchId,
              size: paginationConfig.pageSize,
              page: paginationConfig.current - 1,
            }
      );

      setContent(
        data?.content?.map((item: any) => ({
          ...item,
          key: item.id,
        }))
      );

      setPaginationConfig({
        ...paginationConfig,
        current: data.number + 1,
        pageSize: data.size,
        total: data.totalElements,
      });

      setTableLoading(false);
      return data;
    },
    [paginationConfig.current, paginationConfig.pageSize, searchTerm],
    false,
    []
  );
  const onPaginationChange = (page: number, pageSize?: number) => {
    const newPaginationConfig = { ...paginationConfig, current: page };
    if (pageSize) {
      newPaginationConfig.pageSize = pageSize;
    }
    setPaginationConfig(newPaginationConfig);
  };

  const cardSchema = ActivateAccountSchema.steps![0].cards![0];

  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!, [
    {
      name: tabKey === ("1" as any) ? "Activate" : "View",
      onClick: (item: any) => {
        navigateToAccountView(item.casaIdentification);
      },
    },
  ]);

  useEffect(() => {
    if (tabKey === ("1" as any)) {
      setStatus("CREATED");
    } else if (tabKey === ("2" as any)) {
      setStatus("CANCEL");
    }
  }, [tabKey]);

  const selectAfter = (
    <Select
      onChange={(value: string) => setSearchType(value)}
      value={searchType}
    >
      <Select.Option value="accountNo">Account Number</Select.Option>
      <Select.Option value="accountName">Account Name</Select.Option>
      <Select.Option value="customerId">Customer Id</Select.Option>
    </Select>
  );

  return (
    <div className="fill h-full flex flex-row bg-white">
      <div className="relative bg-white flex flex-col w-full mx-4 my-4">
        <div className="my-4 mx-2">
          <Input
            className="w-1/2"
            placeholder="Search..."
            addonAfter={selectAfter}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        <Spin spinning={loading}>
          <div className="relative fill flex flex-col mx-2 mb-4">
            <Table
              loading={tableLoading}
              className="relative fill"
              columns={columns}
              dataSource={content && content}
              pagination={{
                ...paginationConfig,
                defaultCurrent: 1,
                onChange: onPaginationChange,
              }}
            />
          </div>
        </Spin>
      </div>
    </div>
  );
};

const mapState = (state: any) => ({});

const mapDispatch = (dispatch: any, ownProps: any) => ({
  navigateToAccountView: (accountId: number) => {
    dispatch(
      push(
        `/web/yard-management/AnRkr/accounts/activate-account/${accountId}`
      )
    );
  },
});

export const SelectActivateAccounts = connect(
  mapState,
  mapDispatch
)(_SelectActivateAccounts);
