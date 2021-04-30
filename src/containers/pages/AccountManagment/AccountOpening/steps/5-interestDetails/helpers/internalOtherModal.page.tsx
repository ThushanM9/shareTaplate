import { Button, InputNumber, Table, Tag } from "antd";
import Modal from "antd/lib/modal/Modal";
import { find as _find, map as _map, remove as _remove } from "lodash";
import React, { FC } from "react";
import { ResourceSelectorModal } from "../../../../../../../schemas/helpers/resource-selector.modal";
import { P } from "../../../../../../atoms/typography";
import { accountSelectorSchema } from "../../../../selector-schemas/account-selector/account-selector.schemas";
import { tableData } from "./interfaces";

const InternalOtherModal: FC<InternalOtherModalProps> = ({
  isVisible,
  UIActions,
  accountSelectModal,
  totalPortion,
  setTableData,
  selectedIntDet,
  tableData,
}) => {
  const set_table_data = (record: any) => {
    setTableData((prev: tableData[]) => {
      let x = _map(prev, (item: tableData) => {
        if (
          item.postingMethod === selectedIntDet.postingMethod &&
          item.postingType === selectedIntDet.postingType
        ) {
          let x = _remove(
            [...item.accounts],
            (item: any) => item.id !== record.id
          );
          item.accounts = x;
          return item;
        }
        return item;
      });
      return x;
    });
  };

  const addportion_table_data = (record: any, value: any) => {
    setTableData((prev: tableData[]) => {
      let x = _map(prev, (item: tableData) => {
        if (
          item.postingMethod === selectedIntDet.postingMethod &&
          item.postingType === selectedIntDet.postingType
        ) {
          let x = 0;
          item.accounts = _map(item.accounts, (account) => {
            x += Number(account.portion);
            if (account.id === record.id) {
              account.portion = String(value);
              return account;
            }
            return account;
          });

          return {
            ...item,
            totalPortion: String(
              item.accounts.reduce((prev: any, current: any) => {
                console.log("ASDASDASDASD", prev, current);
                return prev + current.portion;
              }, 0)
            ),
          };
        }
        return item;
      });
      return x;
    });
  };

  if (selectedIntDet.postingMethod === "internal") {
    return (
      <>
        <ResourceSelectorModal
          isVisible={accountSelectModal}
          onCancel={UIActions.accountSelector.hide}
          onResourceSelected={(account) => {
            const { accountName, casaIdentification, id } = account;
            setTableData((prev: tableData[]) => {
              let x = _map(prev, (item: tableData) => {
                if (
                  item.postingMethod === selectedIntDet.postingMethod &&
                  item.postingType === selectedIntDet.postingType
                ) {
                  item.accounts = [
                    ...item.accounts,
                    {
                      casaIdentification,
                      id,
                      accountName,
                      portion: "0",
                    },
                  ];
                  return item;
                }
                return item;
              });
              return x;
            });

            UIActions.accountSelector.hide();
          }}
          schema={accountSelectorSchema}
        />
        <Modal
          visible={isVisible}
          onCancel={UIActions.internalModal.hide}
          title={
            <div>
              <P>Internal - Other</P>
              <P fontSize={12}>Adding Portion to Secondary Accounts</P>
            </div>
          }
          width="70%"
        >
          <Tag className={"mb-6"}>
            <P fontSize={16} className="p-1">
              Available Portion {100 - totalPortion}%
            </P>
          </Tag>
          <Table
            columns={[
              {
                title: "ID",
                dataIndex: "id",
                key: "id",
              },
              {
                title: "Account Number",
                dataIndex: "casaIdentification",
                key: "casaIdentification",
              },
              {
                title: "Benefiery Name",
                dataIndex: "accountName",
                key: "accountName",
              },
              {
                title: "Portion",
                dataIndex: "portion",
                key: "portion",
                render: (value: string, record: any) => (
                  <InputNumber
                    formatter={(value) => `${value}%`}
                    parser={(value) => value!.replace("%", "")}
                    style={{ width: "50%" }}
                    size="small"
                    defaultValue={Number(value)}
                    onChange={(value: any) =>
                      addportion_table_data(record, value)
                    }
                  />
                ),
              },
              {
                title: "Action",
                dataIndex: "",
                align: "center",
                key: "",
                render: (value: string, record: any) => {
                  return (
                    <div>
                      <Button type="link">View</Button>
                      <Button
                        type="link"
                        onClick={() => set_table_data(record)}
                      >
                        Remove
                      </Button>
                    </div>
                  );
                },
              },
            ]}
            dataSource={
              _find(
                tableData,
                (item: tableData) =>
                  item.postingMethod === selectedIntDet.postingMethod &&
                  item.postingType === selectedIntDet.postingType
              )?.accounts
            }
          />
          <div className="p-2">
            <Button
              type="primary"
              block
              onClick={UIActions.accountSelector.show}
            >
              Add Account
            </Button>
          </div>
        </Modal>
      </>
    );
  }

  return (
    <Modal
      visible={isVisible}
      onCancel={UIActions.internalModal.hide}
      title={
        <div>
          <P>Exteral</P>
          <P fontSize={12}>Adding Portion to Secondary Accounts</P>
        </div>
      }
      width="70%"
    >
      <p>lol</p>
    </Modal>
  );
};

interface InternalOtherModalProps {
  isVisible: boolean;
  UIActions: any;
  accountSelectModal: boolean;
  selectedAccounts: any;
  totalPortion: number;
  setTableData: any;
  selectedIntDet: any;
  tableData: tableData[];
}

export default InternalOtherModal;
