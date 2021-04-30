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
import { usePrevious } from "../../../../utils/hooks/use-previous";
import { useGetSDK, useSDK } from "../../../../utils/hooks/useSDK";
import BasicTextArea from "../../../atoms/BasicTextArea.atom";
import InputContainer from "../../../organisms/BasicAccountDetails/InputContainer";
import { defaultAccountOpeningContainerState } from "../AccountOpening/AccountOpeningContext";
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
import AccountClosing from "./10-charges/AccountClosing";

export const AccountClosingConfirmationContainer = () => {
  const { accountId } = useParams<any>();

  const { data: account, loading: isAccountLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.AccountService.getAccountByAccountNo(accountId),
    [],
    false,
    []
  );
  const { data: charges, loading: isChargeLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.ProductBCAService.getSubProductAccountCloseCharges(
        account.AccountData?.subProductCode
      ),
    [account],
    false,
    []
  );

  return (
    <AccountHolder
      data={!isAccountLoading && account}
      charges={!isChargeLoading && charges}
    ></AccountHolder>
  );
};

const AccountHolder = ({ data, charges }: { data: any; charges: any }) => {
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
      container: AccountClosing,
      cards: [
        "SERVICE_OFFICER",
        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
        "PRODUCT_DETIALS",
      ] as InformationCardTypes[],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [statusList, setStatusList] = useState<any>();
  const [accountOpeningState, setAccountOpeningState] = useState(
    defaultAccountOpeningContainerState
  );
  const previosState = usePrevious(accountOpeningState.globalFormState);
  const finalNote = useSelector((state: iStore) => state.finalNote.note);
  useEffect(() => {
    // console.log(
    //   "Account Opening Form State Change: ",
    //   accountOpeningState,
    //   (_ as any).diff(accountOpeningState.globalFormState, previosState || {})
    // );
  }, [accountOpeningState, previosState]);

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

  const SDK = useGetSDK();

  useSDK(
    async (sdk: LOLCSDK) =>
      sdk.AccountService.getApprovedWithdrawalAccountClose().then(
        (data: any) => {
          setStatusList(data);
        }
      ),
    [data],
    false,
    []
  );

  let filteredObj: any;
  if (statusList) {
    filteredObj = statusList.find((status: any) => {
      return status.accountNoId === data.AccountData?.id;
    });
  }

  const [selectValue, setSelectValue] = useState<"Approve" | "Rejected">(
    "Approve"
  );
  const [text, setText] = useState("");
  const onCreateAccount = () => {
    Modal.confirm({
      title: "Are you sure you want to Close this account?",
      icon: <ExclamationCircleOutlined />,
      content: (
        <>
          <div>
            <p className="text-xs mb-8">
              Results of this state will close the account
            </p>
            <div className="flex flex-col">
              <InputContainer
                title="Status Update"
                className="mb-2"
                input={
                  <Select
                    onChange={(value: "Approve" | "Rejected") => {
                      setSelectValue(value);
                    }}
                    defaultValue={selectValue}
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
          </div>
        </>
      ),
      okText: "Confirm",
      onOk() {
        if (selectValue === "Approve") {
          SDK.AccountService.closeAccount(filteredObj?.id, {
            version: filteredObj?.version,
          })
            .then((status) => {
              console.log("status", status);
              onFormSubmitedSuccessfully();
            })
            .catch((error) => {
              console.log("error", error);
              onFormSubmitedFailed(error.response.data.statusText);
            });
        } else if (selectValue === "Rejected") {
          SDK.AccountService.cancelCloseAccount(filteredObj?.id, {
            remark: finalNote,
            version: filteredObj?.version + 1,
          })
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
      width: 650,
      closable: true,
    });
  };

  return (
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
                charges={charges}
                onCreateAccount={onCreateAccount}
                setCurrentStep={setCurrentStep}
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
  );
};
