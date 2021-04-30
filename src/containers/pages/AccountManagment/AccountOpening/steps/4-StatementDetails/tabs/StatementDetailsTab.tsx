import { Form, Select, Switch } from "antd";
import _ from "lodash";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState
} from "react";
import { iDisplayMessage } from "../../../../../../../schemas/card-messages";
import { CardMessages } from "../../../../../../../schemas/helpers/card-messages";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import {
  AddStatementStatusResource,
  CommonList
} from "../../../../../../../sdk/casa-account/interfaces";
import { Period } from "../../../../../../../sdk/casa-product-bca/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const StatementDetailsTab = forwardRef((props, ref) => {
  //! put data into statement details array
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 3;
  const currentCard = 0;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [messages, setMessages] = useState<iDisplayMessage[]>([]);

  const [statementOptions, setStatementOptions] = useState<
    (CommonList & {
      isSelected?: boolean;
      frequencyType?: number;
      deliveryFrequency?: string;
      deliveryFrequencyDesc?: string;
      deliveryMethod?: string;
      deliveryMethodDescription?: string;
    })[]
  >([]);

  const { data: statementTypes, loading: isStatemntTypeLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.AccountService.getStatementTypes(),
    [],
    false,
    []
  );
  const { data: periods, loading: isPeriodsLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.CommonService.getAllPeriods(),
    [],
    false,
    []
  );
  const { data: deliveryMethods, loading: isDeliveryMethodsLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.AccountService.getStatementDevliveryMethods(),

    [],
    false,
    []
  );

  const [form] = Form.useForm();
  useImperativeHandle(ref, () => ({
    async validateCard() {
      return form
        .validateFields()
        .then((d) => {
          console.log("d", d);
          return []
        })
        .catch((e) => {
          console.log("e", e);
          return e.errorFields
        });
    },
  }));

  // Populate Local Data
  useEffect(() => {
    setStatementOptions(
      statementTypes.map((d) => ({
        ...d,
        isSelected: false,
        frequencyType: undefined,
        deliveryFrequency: undefined,
        deliveryFrequencyDesc: undefined,
        deliveryMethod: undefined,
        deliveryMethodDescription: undefined,
      }))
    );
  }, [statementTypes]);

  useEffect(() => {
    let messages: iDisplayMessage[] = [];
    // Validate - for acitve statement option frequency and delivery are selected
    for (let statementOption of statementOptions) {
      if (statementOption.isSelected) {
        if (!statementOption.frequencyType || !statementOption.deliveryMethod) {
          messages = [
            {
              type: "error",
              title: "Statement Option",
              description: "Please select both freqeucny and delivery method",
            },
          ];
        }
      }
    }
    setMessages(messages);
  }, [statementOptions]);

  useEffect(() => {
    const newStateChange = {
      casaStatementStatus: statementOptions
        .filter((item) => item.isSelected)
        .map((item) => {
          return {
            createdUser: item.accComnListCreateUser,
            deliveryFrequency: item.deliveryFrequency,
            deliveryFrequencyDesc: item.deliveryFrequencyDesc,
            deliveryMethod: item.deliveryMethod,
            deliveryMethodDescription: item.deliveryMethodDescription,
            remarks: "",
            status: "ACTIVE",
            type: String(item.id),
            typeDescription: item.accComnListDesc,
          } as AddStatementStatusResource;
        }),
    };

    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...newStateChange,
      },
    });
    console.log("Step 4 ->Statement Details Data Change", statementOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statementOptions]);

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <CardMessages messages={messages} />
        {statementOptions.map((statementOption, index) => {
          // console.log("StatementOption", statementOption);
          return (
            <div className="my-2 p-2 border rounded">
              <Switch
                className=""
                checked={statementOption.isSelected}
                onChange={(e) => {
                  setStatementOptions(
                    statementOptions.map((statementOptionX) => {
                      if (statementOption.id !== statementOptionX.id) {
                        return statementOptionX;
                      }
                      return {
                        ...statementOptionX,
                        isSelected: !statementOption.isSelected,
                      };
                    })
                  );
                }}
                style={{ marginRight: "1rem" }}
              />
              {statementOption.accComnListDesc}
              <div
                style={
                  statementOption.isSelected
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <InputContainer
                  title="Frequency"
                  input={
                    <Select
                      className="w-1/3"
                      value={statementOption.frequencyType}
                      onSelect={(selection: any) => {
                        const selectedFrequency = (_.find(periods, {
                          id: selection,
                        }) as any) as Period;
                        // console.log(selectedFrequency);
                        setStatementOptions(
                          statementOptions.map((statementOptionX) => {
                            if (statementOption.id !== statementOptionX.id) {
                              return statementOptionX;
                            }
                            return {
                              ...statementOptionX,
                              frequencyType: selection,
                              deliveryFrequency: String(selectedFrequency?.id),
                              deliveryFrequencyDesc: String(
                                selectedFrequency?.description
                              ),
                            };
                          })
                        );
                      }}
                    >
                      {periods.map((period, index) => {
                        return (
                          <Select.Option key={index} value={period.id}>
                            {period.type}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  }
                  label="This is automatically generated."
                />
                <InputContainer
                  title="Delivery Method"
                  input={
                    <Select
                      className="w-1/3"
                      value={statementOption.deliveryMethod}
                      onSelect={(selection: any) => {
                        const selectedDeliveryMethod = _.find(deliveryMethods, {
                          id: selection,
                        }) as CommonList;
                        console.log(selectedDeliveryMethod);
                        setStatementOptions(
                          statementOptions.map((statementOptionX: any) => {
                            if (statementOption.id !== statementOptionX.id) {
                              return statementOptionX;
                            }
                            return {
                              ...statementOptionX,
                              deliveryMethod: selection,
                              deliveryMethodDescription: String(
                                selectedDeliveryMethod.accComnListDesc
                              ),
                            };
                          })
                        );
                      }}
                    >
                      {deliveryMethods.map((deliveryMethod, index) => {
                        // console.log("deliveryMethod", deliveryMethod);
                        return (
                          <Select.Option key={index} value={deliveryMethod.id}>
                            {deliveryMethod.accComnListDesc}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  }
                  label="This is automatically generated."
                />
              </div>
            </div>
          );
        })}
      </>
    </FormCardTemplate>
  );
});
