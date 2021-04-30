import { Input, Pagination, Table } from "antd";
import { push } from "connected-react-router";
import React from "react";
import { connect } from "react-redux";
import { CONFIG } from "../../../../../config";
import { GenerateColumnDefinitions } from "../../../../../schemas/helpers/generate-column-definition";
import { ClosingConfirmationSchema } from "../Schemas/ClosingConfirmationSchema";

export const _AccountClosingConfirmationList = ({
  navigateToAccountView,
}: ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>) => {
  const cardSchema = ClosingConfirmationSchema.steps![0].cards![0];
  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!, [
    {
      name: "Close",
      onClick: (item: any) => {
        navigateToAccountView(item.casaIdentification);
      },
    },
  ]);
  //   const { data, loading } = useSDK(
  //     (sdk: LOLCSDK) => sdk.AccountService.getPendingAccountClose(),
  //     [],
  //     false,
  //     []
  //   );
  //   console.log(data);

  return (
    <>
      <div className="fill h-full flex flex-row bg-white">
        <div className="relative bg-white flex flex-col w-full mx-4 my-4">
          {/* <div className=" pl-4 pr-4 p-2" style={{ background: "#F8F8F8" }}> */}
          <div className="my-4 mx-2">
            <Input.Search
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

          <div className="relative fill flex flex-col mx-2 mb-4">
            <Table
              className="relative fill"
              columns={columns}
              dataSource={[]}
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
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = (state: any) => ({});

const mapDispatch = (dispatch: any, ownProps: any) => ({
  navigateToAccountView: (accountNo: number) => {
    dispatch(
      push(
        `/web/yard-management/${CONFIG.tenant}/accounts/confirmation-list/reactivate-confirmation-list/${accountNo}`
      )
    );
  },
});

export const AccountClosingConfirmationList = connect(
  mapState,
  mapDispatch
)(_AccountClosingConfirmationList);
