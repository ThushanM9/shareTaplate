import { Button, Form, InputNumber, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import _, { find as _find } from "lodash";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { FormFields } from "../../../../../../../schemas/helpers/form-helpers";
import { LOLCSDK } from "../../../../../../../sdk";
import {
  CommonList,
  InterestDetailsResource,
} from "../../../../../../../sdk/casa-account/interfaces";
import { isArrayEqual } from "../../../../../../../utils/deep-dif-a-two-arrays";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import DropDown from "../../../../../../atoms/BasicDropdown.atom";
import { P as _P } from "../../../../../../atoms/typography";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";
import ExternalDebitModal from "../helpers/externalDebitModal.page";
import { tableData } from "../helpers/interfaces";
import InternalOtherModal from "../helpers/internalOtherModal.page";

const P = styled(_P)`
  font-size: 14px;
`;

export const DebiInterestPostingDetailsTab = forwardRef((props, ref) => {
  //! benefiary name comes as empty
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 4;
  const currentCard = 3;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [debitPostType, setDebitPostType] = useState<any>("Self");
  const [tableData, setTableData] = useState<tableData[]>([]);
  const [internalModal, setInternalModal] = useState(false);
  const [selectedIntDet, setselectedIntDet] = useState<{
    postingType: string;
    postingMethod: string;
  }>({
    postingType: "",
    postingMethod: "",
  });
  const [externalModal, setExternalModal] = useState(false);
  const [accountSelectModal, setaccountSelectModal] = useState(false);
  const [showSelectBenifitiaryModal, setShowSelectBenifitiaryModal] = useState(
    false
  );
  const [selectedAccounts, setSelectedAccounts] = useState<
    InterestDetailsResource[]
  >([]);
  const [showSelectAccountModal, setShowSelectAccountModal] = useState(false);
  const [portion, setPortion] = useState(0);

  // console.log(cardSchema);
  useImperativeHandle(ref, () => ({
    validateCard() {
      form
        .validateFields()
        .then((d) => {
          console.log("d", d);
        })
        .catch((e) => {
          console.log("e", e);
        });
      return form.getFieldsError();
    },
  }));
  const [form] = Form.useForm();
  const layout = {
    wrapperCol: { span: 12 },
  };

  const onComplete = useMemo(
    () => () => {
      console.log("On Complete");
    },
    []
  );

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

  const saveSelfData = (interestDetails: any) => {
    console.log(interestDetails, "DEBIT DATA");
    setDebitPostType(interestDetails.debitInterestPostType);
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...interestDetails,
      },
    });
  };

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
            if (record.postingMethod === "external" || "External") {
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
      render: (value: string, record: any) => (
        <InputNumber
          defaultValue={Number(value)}
          disabled={
            record.postingMethod !== "internal" && record.postingType !== "self"
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
      ),
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
          debitInterestPostType: "SELF",
          otherPostingMethod: "INTERNAL",
          otherPostingMethodId: item1.postingMethodId,
          propotionRatio: item1.totalPortion,
        });
      }

      if (item1.postingMethod === "internal" && item1.postingType === "other") {
        for (const item2 of item1.accounts) {
          x.push({
            beneficiaryId: item2.id,
            beneficiaryName: item2.accountName,
            debitInterestPostAccount: item2.casaIdentification,
            debitInterestPostType: "OTHER",
            otherPostingMethod: "INTERNAL",
            otherPostingMethodId: item1.postingMethodId,
            propotionRatio: item2.portion,
          });
        }
      }

      if (item1.postingMethod === "external" && item1.postingType === "self") {
        for (const item2 of item1.accounts) {
          x.push({
            ...{
              debitInterestPostType: "SELF",
              otherPostingMethod: "EXTERNAL",
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
              debitInterestPostType: "SELF",
              otherPostingMethod: "OTHER",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableData]);

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

  // TODO: Internal Self says creditInterest instead of DebitInterest needs to be fixed
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
    <div>
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
      <ExternalDebitModal
        isVisible={externalModal}
        UIActions={UIActions}
        accountSelectModal={accountSelectModal}
        selectedAccounts={selectedAccounts}
        totalPortion={portion}
        setTableData={setTableData}
        tableData={tableData}
        selectedIntDet={selectedIntDet}
      />
      <FormCardTemplate
        title={cardSchema.title}
        description={cardSchema.description || ""}
      >
        <>
          <Form
            form={form}
            {...layout}
            name="accountPurposeForm"
            // initialValues={initialData}
            onFinish={onComplete}
            onValuesChange={() => {
              setTimeout(() => {
                saveSelfData(form.getFieldsValue());
                console.log(form.getFieldsValue().debitInterestPostType);
              }, 200);
            }}
            // onFieldsChange={validateForm}
          >
            <FormFields schema={[cardSchema.fields[0]]} form={form} />
            {debitPostType === "Self" && (
              <FormFields schema={[cardSchema.fields[1]]} form={form} />
            )}
          </Form>

          {/* Table */}
          {debitPostType !== "Self" && (
            <>
              <Table
                scroll={{
                  x: "max-content",
                }}
                columns={mainTableColumns}
                dataSource={tableData}
                pagination={false}
              />
              <div className="my-4 w-full flex justify-end">
                <Button
                  className=""
                  type="primary"
                  onClick={() => setShowSelectBenifitiaryModal(true)}
                >
                  Add Benefiary
                </Button>
              </div>
            </>
          )}
        </>
      </FormCardTemplate>
    </div>
  );
});
