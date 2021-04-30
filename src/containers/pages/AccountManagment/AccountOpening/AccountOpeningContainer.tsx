import {
  CheckCircleFilled,
  ExclamationCircleOutlined
} from "@ant-design/icons";
import { Modal, notification, Steps } from "antd";
import _ from "lodash";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AccountResource } from "../../../../sdk/casa-account/interfaces";
import { assets } from "../../../../ui-helpers/assets";
import "../../../../utils/deep-diff";
import { usePrevious } from "../../../../utils/hooks/use-previous";
import { useGetSDK } from "../../../../utils/hooks/useSDK";
import WorkflowSegmentModal from "../../../molecules/Workflow-segment.molecules";
import {
  AccountOpeningContainerContext,
  defaultAccountOpeningContainerState
} from "./AccountOpeningContext";
import {
  AccountOpeningInformationCardContainter,
  InformationCardTypes
} from "./AccountOpeningInformationCardContainer";
import { CutomerDetails_Contianer } from "./steps/1-CustomerDetails/CustomerDetails.container";
import { Charges_Container } from "./steps/10-charges/Charges.container";
import { ProductDetails } from "./steps/2-ProductDetails/ProductDetails.container";
import { AccountDetails_Contianer } from "./steps/3-AccountDetails/AccountDetails.container";
import { StatementDetails_Container } from "./steps/4-StatementDetails/StatementDetails.container";
import { InterestDetails_Container } from "./steps/5-interestDetails/InterestDetails.container";
import { OverdraftDetails_Container } from "./steps/6-OverdraftDetails/OverdraftDetails.container";
import { Preferences_Container } from "./steps/7-Preferences/Preferences.container";
import { CardInformation_Container } from "./steps/8-CardInformation/CardInformation.container";
import { OtherInformation_Container } from "./steps/9-OtherInformation/OtherInformation.container";

export const AccountOpeningContainer = (prop: any) => {
  const [showWorkflow, setshowWorkflow] = useState<{
    visible: boolean;
    data: any;
  }>({
    visible: false,
    data: {},
  });

  const steps = [
    {
      title: "Customer Details",
      description: "Add a customer.",
      container: CutomerDetails_Contianer,
      cards: [
        "SERVICE_OFFICER",

        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
      ] as InformationCardTypes[],
    },
    {
      title: "Product Details",
      description: "Choose a Product.",
      container: ProductDetails,
      cards: [
        "SERVICE_OFFICER",

        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
      ] as InformationCardTypes[],
    },
    {
      title: "Account Details",
      description: "Add in account details.",
      container: AccountDetails_Contianer,
      cards: [
        "SERVICE_OFFICER",

        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
      ] as InformationCardTypes[],
    },
    {
      title: "Statement Details",
      description: "Add in statement details.",
      container: StatementDetails_Container,
      cards: [
        "SERVICE_OFFICER",

        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
      ] as InformationCardTypes[],
    },
    {
      title: "Interest Details",
      description: "Add in interest details.",
      container: InterestDetails_Container,
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
      container: OverdraftDetails_Container,
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
      container: Preferences_Container,
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
      container: CardInformation_Container,
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
      container: OtherInformation_Container,
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
      container: Charges_Container,
      cards: [
        "SERVICE_OFFICER",

        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
        "CREDIT_INTEREST_RATE_CARD",
      ] as InformationCardTypes[],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [accountOpeningState, setAccountOpeningState] = useState(
    defaultAccountOpeningContainerState
  );
  const previosState = usePrevious(accountOpeningState.globalFormState); // For Debugging Purpose
  const SDK = useGetSDK();

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

  const onCreateAccount = () => {
    Modal.confirm({
      title: "Are you sure you want to Activate this account?",
      icon: <ExclamationCircleOutlined />,
      content: (
        <p className="text-xs mb-8">
          Results of this state will go to an approval state for the <br />
          Approval Officer to approve
        </p>
      ),
      okText: "Confirm",
      onOk: () => {
        const serializeData = (data: any) => {
          let object: any = {};
          for (const key in data) {
            if (data[key] instanceof moment) {
              object[key] = data[key].format("YYYY/MM/DD");
            } else {
              if (typeof data[key] === "object") {
                if (Array.isArray(data[key])) {
                  // key is an array
                  object[key] = data[key].map((item: any) =>
                    serializeData(item)
                  );
                } else {
                  // key is an object
                  object[key] = serializeData(data[key]);
                }
              } else {
                // Not an objesct or an array. Probably string/number/boolean
                object[key] = data[key];
              }
            }
          }
          return object;
        };
        const serializedData: AccountResource = serializeData(
          accountOpeningState.globalFormState
        );
        console.log("serializedData", serializedData);
        SDK.AccountService.save(serializedData)
          .then((status) => {
            console.log("status", status);
            setshowWorkflow({ visible: true, data: status });
            onFormSubmitedSuccessfully();
          })
          .catch((error) => {
            console.log("error", error);
            onFormSubmitedFailed(error.response.data.statusText);
          });
      },
      onCancel() {},
      centered: true,
      maskClosable: true,
    });
  };

  useEffect(() => {
    console.log(
      "Account Opening Form State Change: ",
      accountOpeningState,
      (_ as any).diff(accountOpeningState.globalFormState, previosState || {})
    );
  }, [accountOpeningState, previosState]);

  const CurrentStepContaienr = steps[currentStep].container;

  return (
    <AccountOpeningContainerContext.Provider
      value={{ state: accountOpeningState, setState: setAccountOpeningState }}
    >
      <WorkflowSegmentModal
        data={showWorkflow.data}
        visible={showWorkflow.visible}
        toggle={setshowWorkflow}
      />
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
                        disabled={!Boolean(accountOpeningState.customer)}
                      ></Steps.Step>
                    );
                  }
                  )}
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
                  setCurrentStep={setCurrentStep}
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
    </AccountOpeningContainerContext.Provider>
  );
};
