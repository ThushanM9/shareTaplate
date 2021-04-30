import { Button, InputNumber, Table, Tag } from "antd";
import Modal from "antd/lib/modal/Modal";
import { find as _find, map as _map, remove as _remove } from "lodash";
import React, { FC } from "react";
import { P } from "../../../../../../atoms/typography";
import ExteranlFormInterestDetails from "./externalForm.page";
import { tableData } from "./interfaces";

const ExternalDebitModal: FC<ExternalModalProps> = ({
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

  // setTableData((prev: tableData[]) => {
  //   let x = _map(prev, (item: tableData) => {
  //     if (
  //       item.postingMethod === selectedIntDet.postingMethod &&
  //       item.postingType === selectedIntDet.postingType
  //     ) {
  //       item.accounts = [
  //         ...item.accounts,
  //         {
  //           casaIdentification,
  //           id,
  //           accountName,
  //           portion: "0",
  //         },
  //       ];
  //       return item;
  //     }
  //     return item;
  //   });
  //   return x;
  // });

  if (selectedIntDet.postingMethod === "external") {
    return (
      <Modal
        visible={isVisible}
        onCancel={UIActions.externalModal.hide}
        onOk={UIActions.externalModal.hide}
        title={
          <div>
            <P>External - SMTH</P>
            <P fontSize={12}>Adding Portion to Secondary Accounts</P>
          </div>
        }
        width="70%"
      >
        {!accountSelectModal ? (
          <>
            <Tag className={"mb-6"}>
              <P fontSize={16} className="p-1">
                Available Portion {100 - totalPortion}%
              </P>
            </Tag>
            <Table
              columns={[
                {
                  title: "Financial Institution",
                  dataIndex: "bankName",
                  key: "bankName",
                },
                {
                  title: "Branch Name",
                  dataIndex: "bankBranchName",
                  key: "bankBranchName",
                },
                {
                  title: "Payment Mode",
                  dataIndex: "paymentModeDescription",
                  key: "paymentModeDescription",
                },
                {
                  title: "Payment Send Method",
                  dataIndex: "paymentSendMethod",
                  key: "paymentSendMethod",
                },
                {
                  title: "Account Number",
                  dataIndex: "debitInterestPostAccount",
                  key: "debitInterestPostAccount",
                },
                {
                  title: "Portion",
                  dataIndex: "propotionRatio",
                  key: "propotionRatio",
                  render: (value: string) => (
                    <InputNumber
                      formatter={(value) => `${value}%`}
                      parser={(value) => value!.replace("%", "")}
                      style={{ width: "50%" }}
                      size="small"
                      value={Number(value)}
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
          </>
        ) : (
          <ExteranlFormInterestDetails
            UIActions={UIActions}
            setTableData={setTableData}
            selectedIntDet={selectedIntDet}
          />
        )}
      </Modal>
    );
  }

  return (
    <Modal
      visible={isVisible}
      onCancel={UIActions.externalModal.hide}
      onOk={UIActions.externalModal.hide}
      title={
        <div>
          <P>Exteral</P>
          <P fontSize={12}>Adding Portion to Secondary Accounts</P>
        </div>
      }
      width="70%"
    >
      <p>
        Something went wrong, close the modal, select another posting method and
        type
      </p>
    </Modal>
  );
};

interface ExternalModalProps {
  isVisible: boolean;
  UIActions: any;
  accountSelectModal: boolean;
  selectedAccounts: any;
  totalPortion: number;
  setTableData: any;
  selectedIntDet: any;
  tableData: tableData[];
}

export default ExternalDebitModal;
