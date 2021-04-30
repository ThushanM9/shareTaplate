import {
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Modal, notification, Select, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { LOLCSDK } from "../../../../sdk";
import { setFinalNotes } from "../../../../store/modules/FinalNotes/FinalNotes.dispatcher";
import { iStore } from "../../../../store/store.model";
import { assets } from "../../../../ui-helpers/assets";
import { useGetSDK, useSDK } from "../../../../utils/hooks/useSDK";
import BasicTextArea from "../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import {
  AccountOpeningInformationCardContainter,
  InformationCardTypes,
} from "../AccountOpening/AccountOpeningInformationCardContainer";
import { DisplayCustomerDetailsContainer } from "../ActivateAccount/steps/1-CustomerDetails/DisplayCustomerDetails.Container";
import { ProductDetailsContainer } from "../ActivateAccount/steps/2-ProductDetails/ProductDetailsContainer";
import { DisplayAccountDetailsContainer } from "../ActivateAccount/steps/3-AccountDetails/DisplayAccountDetails.Container";
import { DisplayStatementDetailsContainer } from "../ActivateAccount/steps/4-StatementDetails/DisplayStatementDetails.Container";
import { DisplayInterestDetailsContainer } from "../ActivateAccount/steps/5-InterestDetails/DisplayInterestDetails.Container";
import { DisplayOverdraftDetailsContainer } from "../ActivateAccount/steps/6-OverdraftDetails/DisplayOverdraftDetails.Container";
import { DisplayPreferencesContainer } from "../ActivateAccount/steps/7-Preferences/DisplayPreferences.Container";
import { DisplayCardInformationContainer } from "../ActivateAccount/steps/8-CardInformation/DisplayCardInformation.Container";
import { DisplayOtherDetailsContainer } from "../ActivateAccount/steps/9-Other/DisplayOtherDetails.Container";
import { ApproveAccountCharges } from "./ApproveAccountCharges";
import {
  ApproveAccountContext,
  defaultApproveAccountState,
} from "./ApproveAccountContext";

export const ApproveAccountContainer = () => {
  const params: any = useParams();
  console.log(params.accountId);
  const { data: account, loading: isAccountLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.AccountService.getAccountByAccountNo("051100000690"),
    [],
    false,
    []
  );

  console.log(account);
  return !isAccountLoading ? (
    <AccountHolder data={!isAccountLoading && account}></AccountHolder>
  ) : (
    <p>Loading Approve Account</p>
  );
};

const ApproveModal = ({ onValueChange }: { onValueChange: any }) => {
  const [text, setText] = useState("");
  const [action, setAction] = useState<"Approve" | "Rejected">("Approve");

  useEffect(() => {
    onValueChange({
      text,
      action,
    });
  }, [text, action, onValueChange]);
  return (
    <>
      <p className="text-xs mb-8">
        Results of this state will Approve the account
      </p>
      <div className="flex flex-col">
        <InputContainer
          title="Status Update"
          className="mb-2"
          input={
            <Select
              onChange={(value: "Approve" | "Rejected") => {
                setAction(value);
              }}
              value={action}
              className="w-1/2"
            >
              <Select.Option value="Approve">Approve</Select.Option>
              <Select.Option value="Rejected">Rejected</Select.Option>
            </Select>
          }
        ></InputContainer>
        <InputContainer
          title="Notes"
          input={
            <BasicTextArea
              onChange={(e: any) => {
                setText(e.target.value);
                setFinalNotes(e.target.value);
              }}
              value={text}
              className="w-100"
            ></BasicTextArea>
          }
        ></InputContainer>
      </div>
    </>
  );
};

const AccountHolder = ({ data }: { data: any }) => {
  const steps = [
    {
      title: "Customer Details",
      description: "Add a customer.",
      container: DisplayCustomerDetailsContainer,
      cards: [
        "SERVICE_OFFICER",
        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
      ] as InformationCardTypes[],
    },
    {
      title: "Product Details",
      description: "Choose a Product.",
      container: ProductDetailsContainer,
      cards: [
        "SERVICE_OFFICER",
        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
      ] as InformationCardTypes[],
    },
    {
      title: "Account Details",
      description: "Add in account details.",
      container: DisplayAccountDetailsContainer,
      cards: [
        "SERVICE_OFFICER",

        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
      ] as InformationCardTypes[],
    },
    {
      title: "Statement Details",
      description: "Add in statement details.",
      container: DisplayStatementDetailsContainer,
      cards: [
        "SERVICE_OFFICER",

        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
      ] as InformationCardTypes[],
    },
    {
      title: "Interest Details",
      description: "Add in interest details.",
      container: DisplayInterestDetailsContainer,
      cards: [
        "SERVICE_OFFICER",
        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
        "CREDIT_INTEREST_RATE_CARD",
      ] as InformationCardTypes[],
    },
    {
      title: "Overdraft Details",
      description: "Add in overfraft details.",
      container: DisplayOverdraftDetailsContainer,
      cards: [
        "SERVICE_OFFICER",
        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
        "CREDIT_INTEREST_RATE_CARD",
      ] as InformationCardTypes[],
    },
    {
      title: "Preferences",
      description: "Add in preferences.",
      container: DisplayPreferencesContainer,
      cards: [
        "SERVICE_OFFICER",
        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
        "CREDIT_INTEREST_RATE_CARD",
      ] as InformationCardTypes[],
    },
    {
      title: "Card Information",
      description: "Add in card info.",
      container: DisplayCardInformationContainer,
      cards: [
        "SERVICE_OFFICER",

        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
        "CREDIT_INTEREST_RATE_CARD",
      ] as InformationCardTypes[],
    },
    {
      title: "Other",
      description: "Add other details.",
      container: DisplayOtherDetailsContainer,
      cards: [
        "SERVICE_OFFICER",
        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
        "CREDIT_INTEREST_RATE_CARD",
      ] as InformationCardTypes[],
    },
    {
      title: "Charges",
      description: "Add charges details.",
      container: ApproveAccountCharges,
      cards: [
        "SERVICE_OFFICER",
        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
        "CREDIT_INTEREST_RATE_CARD",
      ] as InformationCardTypes[],
    },
  ];
  const [approveAccountState, setApproveAccountState] = useState(
    defaultApproveAccountState
  );
  // const { state, setState } = useContext(ApproveAccountContext);
  // const setGlobalState = () => {};
  const setGlobalState = () => {
    setApproveAccountState({
      ...approveAccountState,
      globalFormState: {
        ...approveAccountState.globalFormState,
        ...Object.keys(data.AccountData)
          .filter((key) =>
            Object.keys(approveAccountState.globalFormState).includes(key)
          )
          .reduce((obj: any, key: any) => {
            obj[key] = data.AccountData[key];
            return obj;
          }, {}),
        ...{
          specialRate: 12,
          crebitInterestPostAccount: "GLMN1100000030",
          debitInterestPostAccount: "GLMN1100000030",
          casaPurpose: 19,
          nickName: "nick name",
        },
      },
    });
    console.log("STATE", approveAccountState);
  };
  useEffect(() => {
    console.log("DATA", data);
    console.log("effect", approveAccountState);
  }, [approveAccountState, data]);

  const [currentStep, setCurrentStep] = useState(0);

  const finalNote = useSelector((state: iStore) => state.finalNote.note);

  const CurrentStepContaienr = steps[currentStep].container;

  const onFormSubmitedSuccessfully = () => {
    notification.info({
      message: `Success`,
      description: `Account has been saved successfully!`,
      placement: "bottomRight",
      icon: <CheckCircleFilled style={{ color: assets.color.green }} />,
    });
  };
  const onFormSubmitedFailed = (message?: string) => {
    notification.warn({
      message: "Oops",
      description: message || "Something went wrong",
      placement: "bottomRight",
      icon: <ExclamationCircleOutlined style={{ color: "yellow" }} />,
    });
  };
  // const accountCharges = () => {
  //   let chargeArr: any = [];
  //   (() => {
  //     data.AccountCharges &&
  //       data.AccountCharges.map((item: any, index: number) => {
  //         chargeArr.push({
  //           chargeAmount: Number(item.chargeAmount),
  //           feeTypeCode: String(item.feeTypeCode),
  //         });
  //         // console.log(chargeArr);
  //       });
  //   })();
  //   return chargeArr;
  // };

  const SDK = useGetSDK();
  // const [action, setAction] = useState<"Approve" | "Rejected">("Approve");
  // const [text, setText] = useState("");
  const [modalState, setModalState] = useState<{
    text: string;
    action: string;
  }>({ text: "", action: "" });
  const onCreateAccount = () => {
    Modal.confirm({
      title: "Are you sure you want to Approve this account?",
      icon: <ExclamationCircleOutlined />,
      content: (
        <ApproveModal
          onValueChange={(value: any) => {
            console.log("value", value);
            setModalState(value);
          }}
        />
      ),
      okText: "Confirm",
      onOk() {
        if (modalState.action === "Approve") {
          console.log("activate");
          setGlobalState();
          SDK.AccountService.approve("373", approveAccountState.globalFormState)
            .then((status) => {
              console.log("status", status);
              onFormSubmitedSuccessfully();
            })
            .catch((error) => {
              console.log("error", error);
              onFormSubmitedFailed(error.response.data.statusText);
            });
        } else if (modalState.action === "Rejected") {
          SDK.AccountService.rejectPending("156", { note: finalNote })
            .then((status) => {
              console.log("status", status);
              (() => {
                notification.info({
                  message: `Success`,
                  description: `Account has been cancelled successfully!`,
                  placement: "bottomRight",
                  icon: (
                    <CheckCircleFilled style={{ color: assets.color.green }} />
                  ),
                });
              })();
            })
            .catch((error) => {
              console.log("error", error);
              onFormSubmitedFailed(error.response.data.statusText);
            });
        }
      },
      onCancel() {},
      centered: true,
      maskClosable: true,
    });
  };

  return (
    <ApproveAccountContext.Provider
      value={{ state: approveAccountState, setState: setApproveAccountState }}
    >
      <div className="fill h-full flex flex-row">
        <div
          className="relative h-100 overflow-x-hidden overflow-y-auto bg-white flex flex-col m-2"
          style={{ width: 250 }}
        >
          {/* Steps */}
          <div className="steps-container h-100 overflow-auto">
            <section className="absolute w-full h-full">
              <div className="mt-4 ml-4 w-full origin-top-left duration-75 ">
                <Steps
                  style={{ boxSizing: "border-box" }}
                  direction="vertical"
                  size="small"
                  className="relative"
                  onChange={(stepNumber) => setCurrentStep(stepNumber)}
                  current={currentStep}
                  // status="process"
                >
                  {steps.map((item, index) => {
                    return (
                      <Steps.Step
                        key={index}
                        className=""
                        title={
                          <span className="p-0 m-0 text-xs">{item.title}</span>
                        }
                        description={
                          <span className="p-0 m-0 text-xxs">
                            {item.description}
                          </span>
                        }
                      ></Steps.Step>
                    );
                  })}
                </Steps>
              </div>
            </section>
          </div>
        </div>

        <div className="relative fill bg-white border flex flex-row m-2">
          <div className="relative bg-white fill">
            {/* Container */}
            <div className="inner-container h-100 overflow-auto">
              <div className="absolute w-full h-full">
                <CurrentStepContaienr
                  data={data}
                  onCreateAccount={onCreateAccount}
                />
              </div>
            </div>
          </div>
          <div className="relative bg-white" style={{ width: 250 }}>
            {/* Information Cards */}
            <div className="inner-container h-100 overflow-auto">
              <div className="absolute w-full h-full">
                <AccountOpeningInformationCardContainter
                  cards={steps[currentStep].cards}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApproveAccountContext.Provider>
  );
};
