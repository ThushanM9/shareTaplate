import { Button, Input, InputNumber, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import * as _ from "lodash";
import { find as _find } from "lodash";
import React, { forwardRef, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import { CommonList } from "../../../../../../../sdk/casa-account/interfaces";
import { isArrayEqual } from "../../../../../../../utils/deep-dif-a-two-arrays";
import { useGetSDK, useSDK } from "../../../../../../../utils/hooks/useSDK";
import DropDown from "../../../../../../atoms/BasicDropdown.atom";
import { P as _P } from "../../../../../../atoms/typography";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";
import ExternalModal from "../helpers/externalModal.page";
import { interestDetails, tableData } from "../helpers/interfaces";
import InternalOtherModal from "../helpers/internalOtherModal.page";

const P = styled(_P)`
  font-size: 14px;
`;

export const CreditInterestPostingDetailsTab = forwardRef((props, ref) => {
  const SDK = useGetSDK();

  const { state, setState } = useContext(AccountOpeningContainerContext);
  const [accountSelectModal, setaccountSelectModal] = useState(false);
  const [selectedIntDet, setselectedIntDet] = useState<{
    postingType: string;
    postingMethod: string;
  }>({
    postingType: "",
    postingMethod: "",
  });
  const [internalModal, setInternalModal] = useState(false);
  const [externalModal, setExternalModal] = useState(false);
  const [portion, setPortion] = useState(0);
  const [interestDetails, setInterestDetails] = useState<interestDetails[]>([]);
  const [selectedAccounts, setSelectedAccounts] = useState<
    | {
        key: number;
        accountName: string;
        casaIdentification: string;
      }[]
    | null
  >(null);

  const [tableData, setTableData] = useState<tableData[]>([]);

  const { payload }: { payload: any } = useSDK(
    async (sdk: LOLCSDK) => {
      const res = await sdk.AccountService.getOtherPostingMethod();
      setTableData([
        {
          key: 0,
          postingMethod: "internal",
          postingMethodId: String(
            _find(
              res,
              (item: CommonList) => item.accComnListDesc === "Internal"
            )?.id
          ),
          postingType: "self",
          accounts: [],
          addedAccounts: "1",
          totalPortion: "100",
        },
        {
          key: 1,
          postingMethod: "Select",
          postingMethodId: "Select",
          postingType: "Select",
          accounts: [],
          addedAccounts: "0",
          totalPortion: "0",
        },
      ]);
      return res;
    },
    [],
    false,
    {}
  );

  const mainTableColumns: ColumnsType<any> = [
    {
      key: "postingMethod",
      dataIndex: "postingMethod",
      title: "Posting Method",
      // shouldCellUpdate: (record: any, prevRecord: any) => false,
      render: (value: string, record: any, index: number) => {
        let internal = 0;
        let external = 0;
        for (const item of tableData) {
          if (item.postingMethod === "internal") {
            internal += 1;
          }
          if (item.postingMethod === "external") {
            external += 1;
          }
        }

        return (
          <DropDown
            data={[
              {
                key: "internal",
                name: "Internal",
                disabled: internal === 2 ? true : false,
              },
              {
                key: "external",
                name: "External",
                disabled: external === 2 ? true : false,
              },
            ]}
            defaultKey={record.postingMethod}
            onChange={(item: string) => {
              let x = [...tableData];
              if (x[index]?.postingMethod !== item) {
                let _ie = item === "internal" ? "Internal" : "External";
                setTableData((prevState: any) => {
                  prevState[index].postingMethod = item;
                  prevState[index].postingMethodId = String(
                    _find(
                      payload.data,
                      (item: CommonList) => item.accComnListDesc === _ie
                    )?.id
                  );
                  prevState[index].key = index;
                  return [...prevState];
                });
              }
            }}
          />
        );
      },
    },
    {
      key: "postingType",
      dataIndex: "postingType",
      title: "Posting Type",
      render: (value: string, record: any, index: number) => {
        let self = tableData.reduce((accumulator: number, current: any) => {
          let x = accumulator;
          if (record.postingMethod === "internal") {
            if (
              current.postingMethod === "internal" &&
              current.postingType === "self"
            ) {
              x += 1;
            }
          } else {
            if (
              current.postingMethod === "external" &&
              current.postingType === "self"
            ) {
              x += 1;
            }
          }
          return x;
        }, 0);
        let other = tableData.reduce((accumulator: number, current: any) => {
          let x = accumulator;
          if (record.postingMethod === "internal") {
            if (
              current.postingMethod === "internal" &&
              current.postingType === "other"
            ) {
              x += 1;
            }
          } else {
            if (
              current.postingMethod === "external" &&
              current.postingType === "other"
            ) {
              x += 1;
            }
          }
          return x;
        }, 0);

        return (
          <DropDown
            data={[
              {
                key: "self",
                name: "Self",
                disabled: self === 1,
              },
              {
                key: "other",
                name: "Other",
                disabled: other === 1,
              },
            ]}
            defaultKey={record.postingType}
            disabled={record.postingMethod === "Select"}
            onChange={(item: string) => {
              let x = [...tableData];
              if (x[index]?.postingType !== item) {
                setTableData((prevState: any) => {
                  prevState[index].postingType = item;
                  return [...prevState];
                });
              }
            }}
          />
        );
      },
    },
    {
      key: "accounts",
      dataIndex: "accounts",
      title: "Accounts",
      render: (value: string, record: tableData) => (
        <Button
          disabled={
            record.postingMethod === "internal" && record.postingType === "self"
          }
          onClick={() => {
            setselectedIntDet({
              postingMethod: record.postingMethod,
              postingType: record.postingType,
            });
            if (
              record.postingMethod === "internal" &&
              record.postingType === "other"
            ) {
              UIActions.internalModal.show();
            }

            if (record.postingMethod === "external") {
              UIActions.externalModal.show();
            }
          }}
        >
          Configure
        </Button>
      ),
    },
    {
      key: "addedAccounts",
      dataIndex: "addedAccounts",
      title: "Added Accounts",
      render: (value: string, record: tableData) => {
        if (!record.accounts.length) {
          return <P>1</P>;
        }
        return <P>{record.accounts.length}</P>;
      },
    },
    {
      key: "totalPortion",
      dataIndex: "totalPortion",
      title: "Total Portion",
      render: (value: string, record: any) => {
        if (
          record.postingMethod === "internal" &&
          record.postingType === "self"
        ) {
          return (
            <InputNumber
              defaultValue={Number(value)}
              disabled={
                !(
                  record.postingMethod === "internal" &&
                  record.postingType === "self"
                )
              }
              formatter={(value) => `${value}%`}
              parser={(value) => value!.replace("%", "")}
              style={{ width: "50%" }}
              onChange={(val: any) => {
                setTableData((prev: any) => {
                  let x = prev.map((item: any) => {
                    if (_.isEqual(item, record)) {
                      item.totalPortion = String(val);
                      return item;
                    }
                    return item;
                  });
                  return x;
                });
              }}
              max={100}
            />
          );
        } else {
          return (
            <InputNumber
              disabled={
                !(
                  record.postingMethod === "internal" &&
                  record.postingType === "self"
                )
              }
              value={Number(value)}
              formatter={(value) => `${value}%`}
              parser={(value) => value!.replace("%", "")}
            />
          );
        }
      },
    },
    {
      key: "action",
      dataIndex: "action",
      title: "Action",
      render: (value: string, record: any) => (
        <Button
          type="text"
          disabled={record.postingMethod === "Select"}
          onClick={() => {
            let x = _.remove(
              [...tableData],
              (item: any) => !_.isEqual(item, record)
            );
            setTableData(x);
          }}
        >
          Remove
        </Button>
      ),
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _setintdet = (data: tableData[]) => {
    let x: any = [];
    for (const item1 of data) {
      if (item1.postingMethod === "internal" && item1.postingType === "self") {
        x.push({
          crebitInterestPostType: "Self",
          otherPostingMethod: "Internal",
          otherPostingMethodId: item1.postingMethodId,
          propotionRatio: item1.totalPortion,
        });
      }

      if (item1.postingMethod === "internal" && item1.postingType === "other") {
        for (const item2 of item1.accounts) {
          x.push({
            beneficiaryId: item2.id,
            beneficiaryName: item2.accountName,
            crebitInterestPostAccount: item2.casaIdentification,
            crebitInterestPostType: "Other",
            otherPostingMethod: "Internal",
            otherPostingMethodId: item1.postingMethodId,
            propotionRatio: item2.portion,
          });
        }
      }

      if (item1.postingMethod === "external" && item1.postingType === "self") {
        for (const item2 of item1.accounts) {
          x.push({
            ...{
              crebitInterestPostType: "Self",
              otherPostingMethod: "External",
              otherPostingMethodId: item1.postingMethodId,
            },
            ...item2,
          });
        }
      }

      if (item1.postingMethod === "external" && item1.postingType === "other") {
        for (const item2 of item1.accounts) {
          x.push({
            ...{
              crebitInterestPostType: "Other",
              otherPostingMethod: "External",
              otherPostingMethodId: item1.postingMethodId,
            },
            ...item2,
          });
        }
      }
    }

    saveData(x);
  };

  useEffect(() => {
    _setintdet(tableData);
    console.log("tableData :", tableData);
  }, [_setintdet, tableData]);

  useEffect(() => {
    if (
      !!tableData.length &&
      tableData.length < 4 &&
      tableData[tableData.length - 1].postingMethod !== "Select"
    ) {
      setTableData([
        ...tableData.map((item: any, index: any) => {
          item.key = index;
          return item;
        }),
        {
          key: "sc",
          postingMethod: "Select",
          postingType: "Select",
          accounts: [],
          addedAccounts: "0",
          totalPortion: "0",
        },
      ]);
    }

    let totalPortion = tableData.reduce((prev: any, current: any) => {
      return Number(prev) + Number(current.totalPortion);
    }, 0);
    setPortion(totalPortion);
  }, [tableData]);

  const currentStep = 4;
  const currentCard = 1;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];

  const saveData = (interestDetails: any) => {
    const hhh = isArrayEqual(
      interestDetails,
      state.globalFormState.interestDetails
    );

    if (!hhh) {
      setState({
        ...state,
        globalFormState: {
          ...state.globalFormState,
          interestDetails,
        },
      });
    }
  };

  const UIActions = {
    accountSelector: {
      show: () => {
        setaccountSelectModal(true);
      },
      hide: () => {
        setaccountSelectModal(false);
        _setintdet(tableData);
      },
    },
    internalModal: {
      show: () => {
        setInternalModal(true);
      },
      hide: () => {
        setInternalModal(false);
      },
    },
    externalModal: {
      show: () => {
        setExternalModal(true);
      },
      hide: () => {
        setExternalModal(false);
      },
    },
  };

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
      isDisabled={
        cardSchema.displayCondition
          ? !cardSchema.displayCondition(state.globalFormState)
          : false
      }
    >
      <InternalOtherModal
        isVisible={internalModal}
        UIActions={UIActions}
        accountSelectModal={accountSelectModal}
        selectedAccounts={selectedAccounts}
        totalPortion={portion}
        setTableData={setTableData}
        tableData={tableData}
        selectedIntDet={selectedIntDet}
      />
      <ExternalModal
        isVisible={externalModal}
        UIActions={UIActions}
        accountSelectModal={accountSelectModal}
        selectedAccounts={selectedAccounts}
        totalPortion={portion}
        setTableData={setTableData}
        tableData={tableData}
        selectedIntDet={selectedIntDet}
      />

      <div className="flex flex-1 flex-row justify-between items-center">
        <div className="px-2">
          <P>
            Every section except Internal - Self needs to change the portion
            inside Accounts configuration
          </P>
        </div>
        <div>
          {/* <Button onClick={() => console.log("Table Data : ", tableData)}>
            Table Date
          </Button>
          <Button
            onClick={() =>
              console.log(
                "Table Data : ",
                state.globalFormState.interestDetails
              )
            }
          >
            Interest Details
          </Button> */}
          <P fontSize={14}>Portion Available</P>
          <Input
            disabled
            size="small"
            value={
              100 -
              (interestDetails?.reduce((prev: any, curren: any, index) => {
                if (curren.propotionRatio) {
                  return prev + Number(curren.propotionRatio);
                }
                return prev + curren;
              }, 0) as any)
            }
          />
        </div>
      </div>

      <Table
        scroll={{
          x: "max-content",
        }}
        columns={mainTableColumns}
        dataSource={tableData}
        pagination={false}
      />
    </FormCardTemplate>
  );
});

// {
//   "bankBranchId": "string",
//   "bankBranchName": "string",
//   "bankId": "string",
//   "bankName": "string",
//   "beneficiaryId": "string",
//   "beneficiaryName": "string",
//   "crebitInterestPostAccount": "string",
//   "crebitInterestPostType": "string",
//   "debitInterestPostAccount": "string",
//   "debitInterestPostType": "string",
//   "otherPostingMethod": "string",
//   "otherPostingMethodId": "string",
//   "paymentModeDescription": "string",
//   "paymentModeId": "string",
//   "paymentSendMethod": "string",
//   "paymentSendMethodId": "string",
//   "propotionRatio": "string",
//   "status": "string"
// }

// ** credit internal - self
// {
//   "crebitInterestPostType": "SELF",
//   "otherPostingMethod": "INTERNAL",
//   "otherPostingMethodId": "<id>", // this is an API
//   "propotionRatio": "<portion percentage>",
// }

// ** credit internal - other
// {
//   "beneficiaryId": "<id>",
//   "beneficiaryName": "<account name>",
//   "crebitInterestPostAccount": "<account number>",
//   "crebitInterestPostType": "OTHER",
//   "otherPostingMethod": "INTERNAL",
//   "otherPostingMethodId": "<id>", // this is an API
//   "propotionRatio": "<portion percentage>",
// }

// ** credit external - self
// {
//   "bankBranchId": "string", //!d
//   "bankBranchName": "string", //!d
//   "bankId": "string",//!d
//   "bankName": "string",//!d
//   "beneficiaryId": "string", //! no need
//   "beneficiaryName": "string", //! ?
//   "crebitInterestPostAccount": "string", //! account number
//   "crebitInterestPostType": "SELF",
//   "otherPostingMethod": "EXTERNAL",
//   "otherPostingMethodId": "<id>", // this is an API
//   "paymentModeDescription": "string",
//   "paymentModeId": "string", // this is an API
//   "paymentSendMethod": "string",
//   "paymentSendMethodId": "string",
//   "propotionRatio": "string",
// }

// ** credit external - other
// {
//   "bankBranchId": "string",
//   "bankBranchName": "string",
//   "bankId": "string",
//   "bankName": "string",
//   "beneficiaryId": "string",
//   "beneficiaryName": "string",
//   "crebitInterestPostAccount": "string",
//   "crebitInterestPostType": "OTHER",
//   "otherPostingMethod": "EXTERNAL",
//   "otherPostingMethodId": "<id>", // this is an API
//   "paymentModeDescription": "string",
//   "paymentModeId": "string", // this is an API
//   "paymentSendMethod": "string",
//   "paymentSendMethodId": "string",
//   "propotionRatio": "string",
// }

// ** debit interest - self
// {
//   "debitInterestPostType": "SELF",
//   "propotionRatio": "string",
// }

// ** debit interest - other
// {
//   "beneficiaryId": "string",
//   "beneficiaryName": "string",
//   "debitInterestPostAccount": "<account number>",
//   "debitInterestPostType": "OTHER",
//   "propotionRatio": "string",
// }
