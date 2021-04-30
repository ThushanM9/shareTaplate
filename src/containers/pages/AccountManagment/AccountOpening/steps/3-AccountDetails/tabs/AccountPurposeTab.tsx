import { Form, Select } from "antd";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState
} from "react";
import { iDisplayMessage } from "../../../../../../../schemas/card-messages";
import { CardMessages } from "../../../../../../../schemas/helpers/card-messages";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import {
  CommonList,
  PurposeResource
} from "../../../../../../../sdk/casa-account/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import BasicCheckbox from "../../../../../../atoms/BasicCheckbox.atom";
import BasicTextArea from "../../../../../../atoms/BasicTextArea.atom";
import Ptag from "../../../../../../atoms/Ptag.atom";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const AccountPurposeTab = forwardRef((props, ref) => {
  //! put purpose data into purposeDetails array
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 2;
  const currentCard = 2;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [textAreaValue, setTextAreaValue] = useState("");
  const [messages, setMessages] = useState<iDisplayMessage[]>([]);

  const [form] = Form.useForm();

  const layout = {
    wrapperCol: { span: 12 },
  };

  const [formData, _setFormData] = useState({
    casaPurposeDescription: "",
    casaPurposeId: 0,
    casaStatus: "",
    primaryIndicator: "Yes",
    casaRemarkForAdditionalAccount: "",
  });
  const setFormData = (edits: Partial<typeof formData>) =>
    _setFormData({ ...formData, ...edits });

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

  // console.log(
  //   "state.globalFormState.purposeDetails",
  //   state.globalFormState.purposeDetails
  // );

  const [accountPurposes, setAccountPurposes] = useState<
    (CommonList & {
      isActivated: boolean;
      primaryIndicator: "No" | "Yes";
    } & any)[]
  >([]);

  useEffect(() => {
    console.log("accountPurposes -> 🏧", accountPurposes);
  }, [accountPurposes]);

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

  const { data, loading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.getCommonListByStatusAndReferenceCode(
        "PURP",
        "ACTIVE"
      ),
    [],
    false,
    []
  );

  useEffect(() => {
    setAccountPurposes(
      data?.map((d, index) => {
        let x: any = state.globalFormState.purposeDetails!.find(
          (item: any) => item.casaPurposeId === d.id
        );
        console.log("AAAAAAA, index", index, x);
        if (x) {
          return {
            ...d,
            isActivated: x.isActivated,
            primaryIndicator: x.primaryIndicator,
          };
        }
        return {
          ...d,
          isActivated: false,
          primaryIndicator: "No",
        };
      })
    );
  }, [data, state.globalFormState.purposeDetails]);

  useEffect(() => {
    const newStateChange = {
      purposeDetails: accountPurposes
        .filter((item) => item.isActivated)
        .map((item: any) => {
          return {
            isActivated: item.isActivated,
            primaryIndicator: item.primaryIndicator,
            casaPurposeDescription: item.accComnListDesc,
            casaPurposeId: item.id,
            casaStatus: "ACTIVE",
          } as PurposeResource;
        }),
    };
    !!newStateChange.purposeDetails.length &&
      setState({
        ...state,
        globalFormState: {
          ...state.globalFormState,
          ...newStateChange,
        },
      });
    console.log("Step 3 -> Account Purpose Data Change", formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  // Custom Validations - Start
  useEffect(() => {
    const messages: iDisplayMessage[] = [];
    // Validate - There can only be one primary account purpose
    let isPrimaryAccountPurposeFound = false;
    for (let accountPurpose of accountPurposes) {
      if (accountPurpose.primaryIndicator === "Yes") {
        if (isPrimaryAccountPurposeFound) {
          // Show error message
          messages.push({
            type: "error",
            title: "Primary Account Purpose",
            description: "There can only be a single primary account purpose",
          });
        } else {
          isPrimaryAccountPurposeFound = true;
        }
      }
    }
    if (!isPrimaryAccountPurposeFound) {
      // Show error
      messages.push({
        type: "error",
        title: "Primary Account Purpose",
        description: "There needs to be atleast one primary account purpose",
      });
    }

    setMessages(messages);
  }, [accountPurposes]);
  // Custom Validations - End
  // console.log(formData);

  // const eg = [{id:'',label:'',isActivated:false,,status:'IS_PRIMARY'}]

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        {/* Message Box */}
        <CardMessages messages={messages} />
        <div>
          <div className="w-3/4 flex flex-col">
            {!loading ? (
              accountPurposes.map((accountPurpose, index: number) => {
                // console.log(item);
                return (
                  <div className="flex mb-4">
                    <BasicCheckbox
                      key={index}
                      className="mt-4 mx-0 w-1/2"
                      checked={accountPurpose.isActivated}
                      title={accountPurpose.accComnListDesc}
                      onChange={() => {
                        setAccountPurposes(
                          accountPurposes.map((accountPurposeX) => {
                            if (accountPurpose.id !== accountPurposeX.id) {
                              return accountPurposeX;
                            }
                            return {
                              ...accountPurpose,
                              isActivated: !accountPurpose.isActivated,
                            };
                          })
                        );
                        console.log(accountPurpose);
                        setFormData({
                          casaPurposeDescription:
                            accountPurpose.accComnListDesc,
                          casaPurposeId: accountPurpose.id,
                        });
                      }}
                    />
                    <Select
                      className="w-1/2"
                      value={accountPurpose.primaryIndicator}
                      disabled={!accountPurpose.isActivated}
                      onChange={(change) => {
                        setAccountPurposes(
                          accountPurposes.map((accountPurposeX) => {
                            if (accountPurpose.id !== accountPurposeX.id) {
                              return accountPurposeX;
                            }
                            return {
                              ...accountPurpose,
                              primaryIndicator: change,
                            };
                          })
                        );
                        setFormData({
                          primaryIndicator: change,
                        });
                      }}
                    >
                      <Select.Option value="Yes">Primary</Select.Option>
                      <Select.Option value="No">Secondary</Select.Option>
                    </Select>
                  </div>
                );
              })
            ) : (
                <p className="text-xxs">loading account purpose...</p>
              )}
          </div>
          <div className="mt-4">
            <Ptag title="Remarks on Additional Account Opening"></Ptag>
            <BasicTextArea
              className="w-3/4"
              value={
                state.globalFormState?.casaAccountRemarks![0]
                  ?.casaRemarkForAdditionalAccount
              }
              onChange={(e: any) => {
                setTextAreaValue(e.target.value);
                setState({
                  ...state,
                  globalFormState: {
                    ...state.globalFormState,
                    casaAccountRemarks: [
                      {
                        ...state.globalFormState.casaAccountRemarks![0],
                        casaRemarkForAdditionalAccount: e.target.value,
                      },
                    ],
                  },
                });
                setFormData({
                  casaRemarkForAdditionalAccount: e.target.value,
                });
              }}
            ></BasicTextArea>
          </div>
        </div>
      </>
    </FormCardTemplate>
  );
});
