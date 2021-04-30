import { Alert, Button, Input, Modal, Space, Table } from "antd";
import React, { useState } from "react";
import { LOLCSDK } from "../../../../sdk";
import { AccountData } from "../../../../sdk/casa-account/interfaces";
import { useSDK } from "../../../../utils/hooks/useSDK";
import { P } from "../../../atoms/typography";

// sdk.AccountService.getAccountByAccountNo

export const GetAccountByAccountNoModal = ({
  isVisible,
  onAccountSelected,
  selectedCustomers,
  onCancel,
}: {
  isVisible: boolean;
  onAccountSelected: (account: AccountData) => any;
  selectedCustomers: number[];
  onCancel: () => any;
}) => {
  //051100000207
  const [searchTerm, setSearchTerm] = useState("0");
  const [trigger, setTrigger] = useState("");
  const { data: account, loading: isAccountLoading } = useSDK(
    (sdk: LOLCSDK) => {
      return sdk.AccountService.getAccountByAccountNo(searchTerm);
    },
    [trigger],
    false,
    {}
  );

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      type: "STRING",
    },

    {
      title: "Account Number",
      dataIndex: "casaIdentification",
      type: "STRING",
    },

    {
      title: "Action",
      render: (text: any, record: any) => (
        <Space size="middle" className="cursor-pointer">
          <P color="blue" onClick={() => onAccountSelected(record)}>
            Select
          </P>
        </Space>
      ),
    },
  ];
  return (
    <Modal
      title={"Select Account"}
      visible={isVisible}
      onCancel={onCancel}
      footer={null}
      bodyStyle={{ padding: 0, borderRadius: "5rem" }}
      className="relative w-3/4 overflow-hidden rounded-lg border bg-white pb-0"
      centered={true}
    >
      <div
        className="relative bg-white flex flex-col"
        style={{ minHeight: 500 }}
      >
        <div className=" pl-4 pr-4 p-2" style={{ background: "#F8F8F8" }}>
          <div className="my-4 mx-2 flex">
            <Input
              placeholder="Type..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onPressEnter={(event: any) => {
                setSearchTerm(event.target.value);
                setTrigger(event.target.value);
              }}
            />
            <Button
              type="primary"
              onClick={() => {
                // setSearchTerm("1");
                setTrigger((t) => t + 1);
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="relative fill flex flex-col">
          {searchTerm === "" && isAccountLoading ? (
            <div className="flex justify-center align-middle mt-8">
              <Alert
                message="Type in a keyword and then press search to begin searching (051100000207)"
                type="info"
                showIcon
              />
            </div>
          ) : (
            <Table
              className="relative fill"
              columns={columns}
              dataSource={
                !isAccountLoading && account ? [account.AccountData] : []
              }
              loading={isAccountLoading}
              pagination={false}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};
