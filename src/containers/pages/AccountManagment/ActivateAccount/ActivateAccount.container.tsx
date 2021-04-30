import {
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Modal, notification, Steps } from "antd";
import { push } from "connected-react-router";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { CONFIG } from "../../../../config";
import { LOLCSDK } from "../../../../sdk";
import { iStore } from "../../../../store/store.model";
import { assets } from "../../../../ui-helpers/assets";
import { usePrevious } from "../../../../utils/hooks/use-previous";
import { useGetSDK, useSDK } from "../../../../utils/hooks/useSDK";
import { defaultAccountOpeningContainerState } from "../AccountOpening/AccountOpeningContext";
import {
  AccountActivationInformationCardContainter,
  InformationCardTypes,
} from "./AccountActivationInformationCardContainer";
import { DisplayCustomerDetailsContainer } from "./steps/1-CustomerDetails/DisplayCustomerDetails.Container";
import { DisplayChargesContainer } from "./steps/10-Charges/DisplayCharges.Container";
import { ProductDetailsContainer } from "./steps/2-ProductDetails/ProductDetailsContainer";
import { DisplayAccountDetailsContainer } from "./steps/3-AccountDetails/DisplayAccountDetails.Container";
import { DisplayStatementDetailsContainer } from "./steps/4-StatementDetails/DisplayStatementDetails.Container";
import { DisplayInterestDetailsContainer } from "./steps/5-InterestDetails/DisplayInterestDetails.Container";
import { DisplayOverdraftDetailsContainer } from "./steps/6-OverdraftDetails/DisplayOverdraftDetails.Container";
import { DisplayPreferencesContainer } from "./steps/7-Preferences/DisplayPreferences.Container";
import { DisplayCardInformationContainer } from "./steps/8-CardInformation/DisplayCardInformation.Container";
import { DisplayOtherDetailsContainer } from "./steps/9-Other/DisplayOtherDetails.Container";

const ActivateAccountContainer = (props: { goToTab: any }) => {
  const params: any = useParams();
  console.log(params.accountId);
  const { data: account, loading: isAccountLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.getAccountByAccountNo(params.accountId), //051100000690
    [],
    false,
    []
  );

  console.log("Account", account, isAccountLoading);
  return !isAccountLoading && Object.keys(account).length !== 0 ? (
    <AccountHolder
      goToTab={props.goToTab}
      data={!isAccountLoading && account}
    ></AccountHolder>
  ) : (
    <p>Loading Activate Account</p>
  );
};

const AccountHolder = ({ data, goToTab }: { data: any; goToTab: any }) => {
  console.log("data check this ✅ :", data);
  const history = useHistory();

  const [callType, setCallType] = useState("");

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
      container: DisplayChargesContainer,
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
  const previosState = usePrevious(accountOpeningState.globalFormState);
  const finalNote = useSelector((state: iStore) => state.finalNote.note);
  const [charges, setCharges] = useState<any>();
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
  const accountCharges = () => {
    let chargeArr: any = [];
    (() => {
      data.AccountCharges &&
        data.AccountCharges.map((item: any, index: number) => {
          chargeArr.push({
            chargeAmount: Number(item.chargeAmount),
            feeTypeCode: String(item.feeTypeCode),
          });
          console.log(chargeArr);
        });
    })();
    return chargeArr;
  };

  useSDK(
    async (sdk: LOLCSDK) =>
      sdk.ProductBCAService.getChargeAmountDetails(
        data.AccountData.subProductId,
        "FEAA",
        0
      ).then((data: any) => {
        setCharges(data);
      }),
    [],
    false,
    []
  );

  const SDK = useGetSDK();
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
      onOk() {
        if (callType === "Approve") {
          console.log("activate");
          SDK.AccountService.activateAccount(data?.AccountData?.id, {
            accountCharges: charges ?? charges,
            hasApproval: "Yes",
          })
            .then((status) => {
              console.log("status", status);
              onFormSubmitedSuccessfully();
              goToTab(
                `/web/yard-management/${CONFIG.tenant}/accounts/activate-account`
              );
            })
            .catch((error) => {
              notification.info({
                message: `Error`,
                description: `Cannot Approve because Initial Deposit hasn't been done yet`,
                placement: "bottomRight",
                icon: <CheckCircleFilled style={{ color: assets.color.red }} />,
              });
              onFormSubmitedFailed(error);
            });
        } else if (callType === "Cancel") {
          SDK.AccountService.cancelAccount(data?.AccountData?.id, {
            hasApproval: "No",
            note: finalNote,
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
                goToTab(
                  `/web/yard-management/${CONFIG.tenant}/accounts/activate-account`
                );
              })();
            })
            .catch((error) => {
              console.log("error", error);
              onFormSubmitedFailed(error);
            });
        }
      },
      onCancel() {},
      centered: true,
      maskClosable: true,
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
                setCurrentStep={setCurrentStep}
                data={data}
                onCreateAccount={onCreateAccount}
                setPostCall={setCallType}
              />
            </div>
          </div>
        </div>
        <div className="relative bg-white" style={{ width: 250 }}>
          {/* Information Cards */}
          <div className="inner-container h-100 overflow-auto">
            <div className="absolute w-full h-full">
              <AccountActivationInformationCardContainter
                cards={steps[currentStep].cards}
                data={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (disaptch: any) => ({
  goToTab: (tab: string) => {
    disaptch(push(tab));
  },
});

export default connect(null, mapDispatchToProps)(ActivateAccountContainer);
