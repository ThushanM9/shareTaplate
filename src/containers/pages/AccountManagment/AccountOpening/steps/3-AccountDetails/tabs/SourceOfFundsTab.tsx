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
  SourceOfFundsResource
} from "../../../../../../../sdk/casa-account/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import BasicCheckbox from "../../../../../../atoms/BasicCheckbox.atom";
import BasicTextArea from "../../../../../../atoms/BasicTextArea.atom";
import Ptag from "../../../../../../atoms/Ptag.atom";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const SourceOfFundsTab = forwardRef((props, ref) => {
  //! put data into casaSourceOfFundsDetails array
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 2;
  const currentCard = 3;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [form] = Form.useForm();
  const [messages, setMessages] = useState<iDisplayMessage[]>([]);
  const [checked, setChecked] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const [formData, _setFormData] = useState({
    casaSourceOfFundDescription: "",
    casaSourceOfFundId: 0,
    casaStatus: "ACTIVE",
    otherRemarks: "",
    primaryIndicator: "Yes",
  });
  const setFormData = (edits: Partial<typeof formData>) =>
    _setFormData({ ...formData, ...edits });

  const [sourceOfFunds, setSourceOfFunds] = useState<
    (CommonList & {
      isActivated: boolean;
      primaryIndicator: "No" | "Yes";
    })[]
  >([]);
  const layout = {
    wrapperCol: { span: 12 },
  };

  const onComplete = useMemo(
    () => () => {
      console.log("On Complete");
    },
    []
  );

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

  const { data, loading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.getCommonListByStatusAndReferenceCode(
        "SOFU",
        "ACTIVE"
      ),
    [],
    false,
    []
  );

  useEffect(() => {
    setSourceOfFunds(
      data?.map((d, index) => {
        // console.log("d", d);

        let x: any = state.globalFormState.casaSourceOfFundsDetails!.find(
          (item: any) => {
            console.log("item", item.casaSourceOfFundId === d.id);
            return item.casaSourceOfFundId === d.id;
          }
        );

        console.log("xxxx", index, x);
        if (x) {
          return {
            ...d,
            isActivated: true, // x.casaStatus === "ACTIVE" ? true : false ,
            primaryIndicator: x.primaryIndicator,
            otherRemarks: x.otherRemarks,
          };
        }
        return {
          ...d,
          isActivated: false,
          primaryIndicator: "No",
          otherRemarks: "",
        };
      })
    );
  }, [data, state.globalFormState.casaSourceOfFundsDetails]);

  useEffect(() => {
    const messages: iDisplayMessage[] = [];
    // Validate - There can only be one primary account purpose
    let isPrimaryAccountPurposeFound = false;
    for (let sourceOfFund of sourceOfFunds) {
      if (sourceOfFund.primaryIndicator === "Yes") {
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
  }, [sourceOfFunds]);

  useEffect(() => {
    const newStateChange = {
      casaSourceOfFundsDetails: sourceOfFunds
        .filter((item) => item.isActivated)
        .map((item: any) => {
          // if (item.casaSourceOfFundDescription === "Other") {
          //   if(item.)
          // }
          return {
            casaSourceOfFundDescription: item.accComnListDesc,
            casaSourceOfFundId: item.id,
            casaStatus: "ACTIVE",
            otherRemarks: item.otherRemarks,
            primaryIndicator: item.primaryIndicator,
            isActivated: item.isActivated,
          } as SourceOfFundsResource;
        }),
    };
    !!newStateChange.casaSourceOfFundsDetails.length &&
      setState({
        ...state,
        globalFormState: {
          ...state.globalFormState,
          ...newStateChange,
        },
      });
    console.log("Step 3 -> Source of Funds Data Change", formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <div>
        <CardMessages messages={messages} />
        <div className="w-3/4 flex flex-col">
          {!loading ? (
            sourceOfFunds.map((source, index: number) => {
              return (
                <div className="flex mb-4">
                  <BasicCheckbox
                    key={index}
                    className="mt-4 mx-0 w-1/2"
                    checked={source.isActivated}
                    title={source.accComnListDesc}
                    onChange={(e) => {
                      setSourceOfFunds(
                        sourceOfFunds.map((sourceOfFundX) => {
                          if (source.id !== sourceOfFundX.id) {
                            return sourceOfFundX;
                          }
                          return {
                            ...sourceOfFundX,
                            isActivated: !source.isActivated, //e.target.checked,
                          };
                        })
                      );
                      setFormData({
                        casaSourceOfFundDescription: source.accComnListDesc,
                        casaSourceOfFundId: source.id,
                      });
                    }}
                  />
                  <Select
                    className="w-1/2"
                    value={source.primaryIndicator}
                    disabled={!source.isActivated}
                    onChange={(change) => {
                      setSourceOfFunds(
                        sourceOfFunds.map((sourceOfFundX) => {
                          if (source.id !== sourceOfFundX.id) {
                            return sourceOfFundX;
                          }
                          return {
                            ...sourceOfFundX,
                            // isActivated: !sourceOfFundX.isActivated,
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
              <p className="text-xxs">loading source of funds...</p>
            )}
        </div>
        <div className="mt-4">
          <Ptag title="Other"></Ptag>
          <BasicTextArea
            disabled={
              !sourceOfFunds.find(
                (item) => item.accComnListCode === "OTH" && item.isActivated
              )
            }
            className="w-3/4"
            value={
              textAreaValue.length > 0
                ? textAreaValue
                : state.globalFormState?.casaSourceOfFundsDetails!.find(
                  (item: any) => item.casaSourceOfFundDescription === "Other"
                )?.otherRemarks
            }
            onChange={(e: any) => {
              console.log("EEEEE", e);
              setTextAreaValue(e.target.value);
              if (!!textAreaValue.length) {
                setSourceOfFunds((prev: any) =>
                  prev.map((item: any) => {
                    if (item.accComnListCode === "OTH") {
                      item.otherRemarks = textAreaValue;
                      return item;
                    }
                    return item;
                  })
                );
              }
              setFormData({
                otherRemarks: e.target.value,
              });
            }}
          ></BasicTextArea>
        </div>
      </div>
    </FormCardTemplate>
  );
});
