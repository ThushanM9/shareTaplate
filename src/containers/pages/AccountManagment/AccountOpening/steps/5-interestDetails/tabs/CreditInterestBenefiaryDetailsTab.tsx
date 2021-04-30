import { Button, Form, Modal } from "antd";
import _ from "lodash";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { EditableTableView } from "../../../../../../../schemas/helpers/editable-table.component";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { FormFields } from "../../../../../../../schemas/helpers/form-helpers";
import { InterestDetailsResource } from "../../../../../../../sdk/casa-account/interfaces";
import { GetAccountByAccountNoModal } from "../../../../GetCustomerByAccountNoModal/GetAccountByAccountNoModal";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { EmptyInterestDetailsRecord } from "../../../data/EmptyInterestDetailsRecord";
import { AccountOpeningSchema } from "../../../schema";

export const CreditInterestBenefiaryDetailsTab = forwardRef((props, ref) => {
  //! benefiary name comes as undefined
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 4;
  const currentCard = 2;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const externalPartySchema = AccountOpeningSchema.steps![currentStep]!
    .cards![4];

  const [showSelectBenifitiaryModal, setShowSelectBenifitiaryModal] = useState(
    false
  );
  const [selectedExternalAccounts, setSelectedExternalAccounts] = useState<
    InterestDetailsResource[]
  >([]);
  const [showExternalParty, setShowExternalParty] = useState(false);

  const layout = {
    wrapperCol: { span: 12 },
  };
  // const [selectedAccount, setSelectedAccount] = useState<Account[]>([]);
  const [selectedAccounts, setSelectedAccounts] = useState<
    InterestDetailsResource[]
  >([]);
  const [form] = Form.useForm();
  const [showSelectAccountModal, setShowSelectAccountModal] = useState(false);

  const [addExternalFormData, setAddexternalFormData] = useState({});

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
  //! set otherposting method to external here
  useEffect(() => {
    // console.log("selectedAccountsxxxx", selectedAccounts);
    const newStateChange = {
      interestDetails: selectedAccounts.map((account) => {
        console.log("INTERESTDETAILS", account);
        const record = {
          ...EmptyInterestDetailsRecord,
          ...{
            otherPostingMethod: state.globalFormState.otherPostingMethod,
            otherPostingMethodId: state.globalFormState.otherPostingMethodId,
          },
        };
        (cardSchema.fields[0].spec as any).fields
          .filter((e: any) => !e.noSend)
          .forEach((definition: any) => {
            (record as any)[definition.key!] = (account as any)[definition.key];
            // console.log("DEF", definition);
            if (definition.key === "paymentModeId") {
              console.log("Hello World", "paymentModeId");
              (record as any)["paymentModeDescription"] = (account as any)[
                "paymentModeDescription"
              ];
            }
            // if (definition.key === "otherPostingMethodId") {
            //   (record as any)["otherPostingMethodId"] =
            //     state.globalFormState.otherPostingMethodId;
            // }
            // if (definition.key === "otherPostingMethod") {
            //   (record as any)["otherPostingMethod"] =
            //     state.globalFormState.otherPostingMethod;
            // }
          });

        return record;
      }),
    };

    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...newStateChange,
      },
    });
    console.log(
      "Step 5 -> Credit interest Beneficiary Internal Details Change",
      newStateChange
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAccounts]);

  useEffect(() => {
    console.log();
    const newStateChange = {
      interestDetails: selectedExternalAccounts.map((account) => {
        const record = {
          ...EmptyInterestDetailsRecord,
          // otherPostingMethod: "Internal" ,
        };
        (cardSchema.fields[1].spec as any).fields
          .filter((e: any) => !e.noSend)
          .forEach((definition: any) => {
            (record as any)[definition.targetKey!] = (account as any)[
              definition.key
            ];
          });
        return record;
      }),
    };

    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...newStateChange,
      },
    });
    console.log(
      "Step 5 -> Credit interest Beneficiary External Details Change",
      newStateChange
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExternalAccounts]);

  const onComplete = useMemo(
    () => () => {
      console.log("On Complete");
    },
    []
  );

  const saveData = (data: any) => {
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...data,
      },
    });
  };
  //! AccountData interface
  return (
    <div>
      <GetAccountByAccountNoModal
        isVisible={showSelectBenifitiaryModal}
        onCancel={() => setShowSelectBenifitiaryModal(false)}
        onAccountSelected={(accountDetails) => {
          setSelectedAccounts(
            _.uniqBy(
              [
                ...selectedAccounts,
                {
                  ...EmptyInterestDetailsRecord,
                  ...accountDetails,
                  paymentModeId: undefined,
                },
              ],
              "beneficiaryId"
            )
          );
          // console.log("SelectedAccounts", selectedAccounts);
          setShowSelectBenifitiaryModal(false);
        }}
        selectedCustomers={[0]}
      />
      <FormCardTemplate
        title={cardSchema.title}
        description={cardSchema.description || ""}
        isDisabled={
          cardSchema.displayCondition
            ? !cardSchema.displayCondition(state.globalFormState)
            : false
        }
      >
        <div>
          {/* Internal */}
          {!(
            (state.globalFormState as any).otherPostingMethod === "EXTERNAL"
          ) && (
            <>
              <h1 className='mb-2 font-bold'>{cardSchema.fields[0]!.label}</h1>
              {/*eslint-disable-next-line react/jsx-pascal-case*/}
              <EditableTableView
                data={selectedAccounts}
                schema={(cardSchema.fields[0]!.spec as any).fields as any}
                actions={[
                  {
                    name: "View",
                    onClick: (value) => {
                      // console.log("View Record", value);
                    },
                  },
                  {
                    name: "Remove",
                    onClick: (value) => {
                      setSelectedAccounts(
                        selectedAccounts.filter((item) => {
                          return item.beneficiaryId !== value.beneficiaryId;
                        })
                      );
                    },
                  },
                ]}
                onValueChange={(data) => {
                  console.log("dataxxx", data);
                  setSelectedAccounts(data);
                }}
              />
              <div className='my-4 flex justify-end'>
                <Button
                  type='primary'
                  onClick={() => setShowSelectBenifitiaryModal(true)}
                >
                  Add Another Customer
                </Button>
              </div>
            </>
          )}

          {/* External */}
          {!(
            (state.globalFormState as any).otherPostingMethod === "INTERNAL" &&
            (state.globalFormState as any).crebitInterestPostType === "OTHER"
          ) && (
            <>
              <h1 className='my-4 font-bold'>{cardSchema.fields[1]!.label}</h1>
              <Modal
                title='Add External'
                visible={showExternalParty}
                onOk={() => {
                  setSelectedExternalAccounts([
                    addExternalFormData,
                    ...selectedExternalAccounts,
                  ]);

                  setShowExternalParty(false);
                }}
                okText='Add'
                onCancel={() => setShowExternalParty(false)}
              >
                <Form
                  form={form}
                  {...layout}
                  name='ExternalPartyForm'
                  initialValues={addExternalFormData}
                  preserve={true}
                  onFinish={() => {}}
                  onValuesChange={(data) => {
                    setTimeout(() => {
                      const currentFormValue = form.getFieldsValue();
                      setAddexternalFormData(currentFormValue);
                      // console.log("DDDDDDD", currentFormValue);
                    }, 10);
                  }}
                >
                  <FormFields schema={externalPartySchema.fields} form={form} />
                </Form>
              </Modal>
              {/*eslint-disable-next-line react/jsx-pascal-case*/}
              <EditableTableView
                data={selectedExternalAccounts}
                schema={(cardSchema.fields[1]!.spec as any).fields as any}
                actions={[
                  {
                    name: "View",
                    onClick: (value) => {
                      console.log("View Record", value);
                    },
                  },
                  {
                    name: "Remove",
                    onClick: (value) => {
                      setSelectedExternalAccounts(
                        selectedExternalAccounts.filter((item) => {
                          return item.beneficiaryId !== value.beneficiaryId;
                        })
                      );
                    },
                  },
                ]}
                onValueChange={(data: any[]) => {
                  console.log("Value Changed", data);
                }}
              />
              <div className='my-4 flex justify-end'>
                <Button
                  type='primary'
                  onClick={() => setShowExternalParty(true)}
                >
                  Add Another Method
                </Button>
              </div>
            </>
          )}
        </div>
      </FormCardTemplate>
    </div>
  );
});
