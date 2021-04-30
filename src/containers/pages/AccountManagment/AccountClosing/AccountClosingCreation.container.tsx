import {
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Modal, notification, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { LOLCSDK } from "../../../../sdk";
import { iStore } from "../../../../store/store.model";
import { assets } from "../../../../ui-helpers/assets";
import { usePrevious } from "../../../../utils/hooks/use-previous";
import { useGetSDK, useSDK } from "../../../../utils/hooks/useSDK";
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
import { DisplayCardInformationContainer } from "../ActivateAccount/steps/8-CardInformation/DisplayCardInformation.Container";
import { DisplayOtherDetailsContainer } from "../ActivateAccount/steps/9-Other/DisplayOtherDetails.Container";
import AccountClosing from "./10-charges/AccountClosing";
import { PreferencesViewContainer } from "./steps/7-Preferences/PreferencesView.Container";

export const AccountClosingCreationContainer = () => {
  //051100000690
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
        account?.AccountData?.subProductCode
      ),
    [account],
    false,
    []
  );
  return (
    <AccountHolder
      data={!isAccountLoading && account}
      charges={!isChargeLoading && charges}
      disableIndexes={
        //to remove the cards conditionally,pass the card titles that needs to be removed
        !isAccountLoading && account.ATMDetails === null
          ? ["Card Information"]
          : []
      }
    ></AccountHolder>
  );
};

const AccountHolder = ({
  data,
  charges,
  disableIndexes,
}: {
  data: any;
  charges: any;
  disableIndexes?: string[];
}) => {
  const _steps = [
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
      container: PreferencesViewContainer,
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
      title: "Summery",
      description: "View summery details",
      container: AccountClosing,
      cards: [
        "SERVICE_OFFICER",
        "ACCOUNT_CREATION_DATE",
        "CUSTOMER_DETAILS",
        "PRODUCT_DETIALS",
      ] as InformationCardTypes[],
    },
  ];
  const [steps, setSteps] = useState(_steps);
  const [currentStep, setCurrentStep] = useState(0);
  const [statusList, setStatusList] = useState<any>();
  const [accountOpeningState, setAccountOpeningState] = useState(
    defaultAccountOpeningContainerState
  );
  //const [charges, setCharges] = useState<any>();
  const previosState = usePrevious(accountOpeningState.globalFormState);
  const finalNote = useSelector((state: iStore) => state.finalNote.note);
  useEffect(() => {
    // console.log(
    //   "Account Opening Form State Change: ",
    //   accountOpeningState,
    //   (_ as any).diff(accountOpeningState.globalFormState, previosState || {})
    // );
  }, [accountOpeningState, previosState]);

  const { user } = useAuth0();

  const CurrentStepContaienr = steps[currentStep].container;

  const [creditInterest, setCreditInterest] = useState<any>();
  const [bonusInterest, setBonusInterest] = useState<any>();
  const [accountBalance, setAccountBalance] = useState<any>();
  const [currentUser, setCurrentUser] = useState<any>();

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.InterestScheduleService.getAccuredCreditInterest(
        data.AccountData?.id
      ).then((data: any) => {
        setCreditInterest(data);
      }),
    [data],
    false,
    []
  );

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.InterestScheduleService.getAccuredBonusInterest(
        data.AccountData?.id
      ).then((data: any) => {
        setBonusInterest(data);
      }),
    [data],
    false,
    []
  );

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.UserService.getUserByUserUsername(user.nickname).then((data) => {
        const { userId } = data;
        setCurrentUser(userId);
      }),
    [],
    false,
    {}
  );

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.TransactionService.getBalanceWithdrwableByAccountId(
        data.AccountData?.id,
        currentUser
      ).then((data: any) => {
        setAccountBalance(data);
      }),
    [currentUser],
    false,
    []
  );

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

  useEffect(() => {
    console.log("charges:", charges);
    if (!!disableIndexes) {
      for (const a of disableIndexes) {
        setSteps((prev) => prev.filter((item) => item.title !== a));
      }
    }
  }, [charges, disableIndexes]);

  const SDK = useGetSDK();

  const onCreateAccount = () => {
    let [x] = charges;

    let chargeData = {
      chargeAmount: x.feeAmount,
      feeCategoryCode: x.feeCategoryTypeCode,
      feeCategoryId: x.feeCategoryTypeId,
      feeChargeDetailId: x.id,
      feeTypeCode: x.feeTypeCode,
      feeTypeId: x.feeTypeId,
      feeRate: x.feeRate,
      feeIndicator: x.feeIndicator,
      deductIndicator: x.deductIndicator,
    };

    Modal.confirm({
      title: "Are you sure you want to Close this account?",
      icon: <ExclamationCircleOutlined />,
      content: (
        <p className="text-xs mb-8">
          Results of this state will Close the account
        </p>
      ),
      okText: "Confirm",
      onOk() {
        SDK.AccountService.createCloseAccountDetail({
          accountNoId: data.AccountData.id,
          actualAmount: accountBalance ? accountBalance.balanceAmount : 0,
          balanceAmount: accountBalance ? accountBalance.actualAmount : 0,
          bonusInterestAmount: bonusInterest.accumulatedAmount,
          creditInterestAmount: creditInterest.accumulatedAmount,
          overdraftInterestAmount: 0,
          totalChargeAmount: Number(chargeData.chargeAmount),
          charges: [
            {
              feeChargeDetailId: chargeData.feeChargeDetailId,
              feeCategoryId: chargeData.feeCategoryId,
              feeCategoryCode: chargeData.feeCategoryCode,
              feeTypeId: chargeData.feeTypeId,
              feeTypeCode: chargeData.feeTypeCode,
              amount: chargeData.chargeAmount,
              feeRate: chargeData.feeRate.toFixed(2),
              feeIndicator: chargeData.feeIndicator,
              deductIndicator: chargeData.deductIndicator,
            },
          ],
          remark: finalNote,
        })
          .then((status) => {
            console.log("status", status);
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
                data={data}
                cards={steps[currentStep].cards}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
