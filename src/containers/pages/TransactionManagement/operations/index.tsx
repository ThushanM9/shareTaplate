import { QuestionCircleOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Modal } from "antd";
import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { LOLCSDK } from "../../../../sdk";
import { useGetSDK, useSDK } from "../../../../utils/hooks/useSDK";
import Accordion, { accordionProp } from "../../../atoms/Accordion.atom";
import Container from "../../../atoms/Container.atom";
import { P } from "../../../atoms/typography";
import Account from "./account/account";
import CounterPartyForm from "./counterPartyDetailsForm/counterPartyDetailsForm";
import Denominations from "./denominations/denominations";
import DepositDetailsForm from "./depositDetailsForm/depositDetailsForm";
import FundTransferAccount from "./fundTransferAccount/fundTransferAccount";
import FundTransferInformationTab from "./fundTransferInformationTab/fundTransferInformationTab";
import TypeSelector from "./helpers/TypeSelector.atom";
import InformationTab from "./informationTab/informationTab";
import {
  AmountProps,
  FundTransferOperatorProps,
  OperationsProps,
  UserProps,
} from "./interfaces";
import SpecialApprovalForm from "./specialApprovalForm/specialApprovalForm";
import TransferDetailsForm from "./transferDetailsForm/transferDetailsForm";
import TransferTypeForm from "./transferTypeForm/transferTypeForm";
import WithdrawalDetailsForm from "./withdrawalDetailsForm/withdrawalDetailsForm";

const StyledModal = styled(Modal)`
  & .ant-modal-footer {
    border-top-width: 0;
  }
`;

const Operations: FC<OperationsProps> = ({}) => {
  const [state, setState] = useState<OperationsProps>({
    amountType: "accountAmount",
    taxEventCode: "CADE",
  });

  const [visible, setVisible] = useState(false);

  const { user } = useAuth0();

  const SDK = useGetSDK();

  const [confirmLoading, setConfirmLoading] = useState(false);

  const [allCurrencies, setAllCurrencies] = useState<any>();

  const [exchangeRate, setExchangeRate] = useState<any>();

  const [chargeData, setChargeData] = useState<any>();

  const [debitChargeData, setDebitChargeData] = useState<any>();

  const [creditChargeData, setCreditChargeData] = useState<any>();

  const [signatures, setSignatures] = useState<any>();

  const [currentUser, setCurrentUser] = useState<UserProps>();

  const [paymentMethod, setPaymentMethod] = useState<any>();

  const [taxData, setTaxData] = useState<any>();

  const [paymentType, setPaymentType] = useState<any>();

  const [refersh, setRefresh] = useState(0);

  const [fundTransferState, setFundTrasferState] = useState<
    FundTransferOperatorProps
  >();

  const [amount, setAmount] = useState<AmountProps>({
    accountAmount: 0,
    transactionAmount: 0,
  });

  const [transactionSubCode, setTransactionSubCode] = useState<any>();

  const showModal = () => {
    setVisible(true);
  };

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.UserService.getUserByUserUsername(user.nickname).then((data) => {
        const { userBranchMappings, userId, userName } = data;

        setCurrentUser({
          userId,
          userBranchMappings,
          userName,
        });
      }),
    [],
    false,
    {}
  );

  const handleDepositOk = async () => {
    const currentDate = moment().format("YYYY-MM-DD hh:mm:ss");
    const accountAmount = Number(state.accountAmount).toFixed(2);
    const transactionAmount = Number(state.transactionAmount).toFixed(2);
    const netAmount = Number(state.netAmount).toFixed(2);

    let accountTransactionAmount, transactionCurrencyCode;

    if (
      state.amountType === "transactionAmount" &&
      transactionSubCode.currConversionRateType === "SELLING_RATE"
    ) {
      accountTransactionAmount =
        state.transactionAmount! * exchangeRate.exrtSellingRate;
    } else if (
      state.amountType === "transactionAmount" &&
      transactionSubCode.currConversionRateType !== "SELLING_RATE"
    ) {
      accountTransactionAmount =
        state.transactionAmount! * exchangeRate.exrtBuyingRate;
    }

    let currentLoggedInUser = currentUser!.userBranchMappings.find(
      (user: any) => {
        return user.userBranchType === "DEFAULT";
      }
    );

    transactionCurrencyCode = allCurrencies.find((currency: any) => {
      return currency.currencyId === state.fromTransactionCurrencyId!;
    });

    console.log(currentLoggedInUser, "currentLoggedInUser");
    console.log(currentUser, "currentUser");

    const objToSend = {
      accountId: state.id?.toString(),
      accountNumberSchemeName: state.schemeCode,
      accountNumber: state.casaIdentification,
      accountCurrencyId: state.currencyId?.toString(),
      accountCurrencyCode: state.currencyCode,
      subProductId: state.subProductId,
      subProductIdentification: state.subProductIdentification,
      accountType: state.accountType,
      accountSubType: state.accountSubTypeId,
      customerId: state.customerId?.toString(),
      transactionCurrencyId:
        state.amountType === "transactionAmount"
          ? state.fromTransactionCurrencyId?.toString()
          : state.currencyId?.toString(),
      transactionCurrencyCode:
        state.amountType === "transactionAmount"
          ? transactionCurrencyCode.currencyCode
          : state.currencyCode?.toString(),
      accountExchangeRateId:
        state.amountType === "transactionAmount"
          ? exchangeRate.id.toString()
          : "2",
      accountExchangeRate:
        state.amountType === "transactionAmount"
          ? transactionSubCode.currConversionRateType === "SELLING_RATE"
            ? Number(exchangeRate.exrtSellingRate)
                .toFixed(2)
                .toString()
            : Number(exchangeRate.exrtBuyingRate)
                .toFixed(2)
                .toString()
          : "1.00",
      accountExchangeRateType:
        state.amountType === "transactionAmount"
          ? transactionSubCode.currConversionRateType === "SELLING_RATE"
            ? "SELLING"
            : "BUYING"
          : "SELLING",
      transactionExchangeRateId:
        state.amountType === "transactionAmount"
          ? exchangeRate.id?.toString()
          : "",
      transactionExchangeRate:
        state.amountType === "transactionAmount"
          ? transactionSubCode.currConversionRateType === "SELLING_RATE"
            ? Number(exchangeRate.exrtSellingRate).toFixed(2)
            : Number(exchangeRate.exrtBuyingRate).toFixed(2)
          : "",
      transactionExchangeRateType:
        state.amountType === "transactionAmount"
          ? transactionSubCode.currConversionRateType === "SELLING_RATE"
            ? "SELLING"
            : "BUYING"
          : "",
      amountType:
        state.amountType === "accountAmount"
          ? "ACOUNTAMOUNT"
          : "TRANSACTIONAMOUNT",
      accountAmount:
        state.amountType === "accountAmount"
          ? accountAmount?.toString()
          : accountTransactionAmount?.toFixed(2).toString(),
      transactionAmount:
        state.amountType === "accountAmount"
          ? accountAmount?.toString()
          : transactionAmount?.toString(),
      netAmount: state.netAmount
        ? netAmount?.toString()
        : transactionAmount?.toString(),
      transactionReference: "001",
      statementReference: "001",
      narrative: "001",
      transactionDate: currentDate,
      valueDate: currentDate,
      createdBranchId: "1",
      createdBranchName: "Gampaha",
      // createdBranchId: currentLoggedInUser.branchId,
      // createdBranchName: currentLoggedInUser.branchName,
      taxes: taxData,
      denominationDetails: state.denominationDetails,
      charges: chargeData,
    };

    if (objToSend && state.operationtype === "Deposit") {
      setConfirmLoading(true);

      await SDK.TransferInService.counterCashDeposit(objToSend).then((data) => {
        setVisible(false);
        setConfirmLoading(false);
        window.location.reload(true);
      });
    } else {
      handleDepositOk();
    }
  };

  const handleWithdrawalOk = async () => {
    const currentDate = moment().format("YYYY-MM-DD hh:mm:ss");
    const accountAmount = Number(state.accountAmount).toFixed(2);
    const transactionAmount = Number(state.transactionAmount).toFixed(2);
    const netAmount = Number(state.netAmount).toFixed(2);

    let accountTransactionAmount, transactionCurrencyCode;

    if (
      state.amountType === "transactionAmount" &&
      transactionSubCode.currConversionRateType === "SELLING_RATE"
    ) {
      accountTransactionAmount =
        state.transactionAmount! * exchangeRate.exrtSellingRate;
    } else if (
      state.amountType === "transactionAmount" &&
      transactionSubCode.currConversionRateType !== "SELLING_RATE"
    ) {
      accountTransactionAmount =
        state.transactionAmount! * exchangeRate.exrtBuyingRate;
    }

    let currentLoggedInUser = currentUser!.userBranchMappings.find(
      (user: any) => {
        return user.userBranchType === "DEFAULT";
      }
    );

    transactionCurrencyCode = allCurrencies.find((currency: any) => {
      return currency.currencyId === state.fromTransactionCurrencyId!;
    });

    const objToSend = {
      accountId: state.id?.toString(),
      accountNumberSchemeName: state.schemeCode,
      accountNumber: state.casaIdentification,
      accountCurrencyId: state.currencyId?.toString(),
      accountCurrencyCode: state.currencyCode,
      actualBalance: Number(state.balanceAmount)
        .toFixed(2)
        .toString(),
      fundReservationAmount: Number(state.fundReservationAmount)
        .toFixed(2)
        .toString(),
      subProductId: state.subProductId,
      subProductIdentification: state.subProductIdentification,
      accountType: state.accountType,
      accountSubType: state.accountSubTypeId,
      customerId: state.customerId?.toString(),
      transactionCurrencyId:
        state.amountType === "transactionAmount"
          ? state.fromTransactionCurrencyId?.toString()
          : state.currencyId?.toString(),
      transactionCurrencyCode:
        state.amountType === "transactionAmount"
          ? transactionCurrencyCode.currencyCode
          : state.currencyCode?.toString(),
      accountExchangeRateId:
        state.amountType === "transactionAmount"
          ? exchangeRate.id.toString()
          : "2",
      accountExchangeRate:
        state.amountType === "transactionAmount"
          ? transactionSubCode.currConversionRateType === "SELLING_RATE"
            ? Number(exchangeRate.exrtSellingRate)
                .toFixed(2)
                .toString()
            : Number(exchangeRate.exrtBuyingRate)
                .toFixed(2)
                .toString()
          : "1.00",
      accountExchangeRateType:
        state.amountType === "transactionAmount"
          ? transactionSubCode.currConversionRateType === "SELLING_RATE"
            ? "SELLING"
            : "BUYING"
          : "SELLING",
      transactionExchangeRateId:
        state.amountType === "transactionAmount"
          ? exchangeRate.id?.toString()
          : "",
      transactionExchangeRate:
        state.amountType === "transactionAmount"
          ? transactionSubCode.currConversionRateType === "SELLING_RATE"
            ? Number(exchangeRate.exrtSellingRate).toFixed(2)
            : Number(exchangeRate.exrtBuyingRate).toFixed(2)
          : "",
      transactionExchangeRateType:
        state.amountType === "transactionAmount"
          ? transactionSubCode.currConversionRateType === "SELLING_RATE"
            ? "SELLING"
            : "BUYING"
          : "",
      amountType:
        state.amountType === "accountAmount"
          ? "ACOUNTAMOUNT"
          : "TRANSACTIONAMOUNT",
      accountAmount:
        state.amountType === "accountAmount"
          ? accountAmount?.toString()
          : accountTransactionAmount?.toFixed(2).toString(),
      transactionAmount:
        state.amountType === "accountAmount"
          ? accountAmount?.toString()
          : transactionAmount?.toString(),
      netAmount: state.netAmount
        ? netAmount?.toString()
        : transactionAmount?.toString(),
      transactionReference: "001",
      statementReference: "001",
      narrative: "001",
      transactionDate: currentDate,
      valueDate: currentDate,
      createdBranchId: "1",
      createdBranchName: "Gampaha",
      // createdBranchId: currentLoggedInUser.branchId,
      // createdBranchName: currentLoggedInUser.branchName,
      taxes: taxData,
      denominationDetails: state.denominationDetails,
      charges: chargeData,
    };

    if (objToSend && state.operationtype === "Withdrawal") {
      setConfirmLoading(true);

      await SDK.TransferOutService.counterCashWithdraw(objToSend).then(
        (data) => {
          if (data) {
            setVisible(false);
            setConfirmLoading(false);
            window.location.reload(true);
          }
        }
      );
    } else {
      handleWithdrawalOk();
    }
  };

  const handleTransferOk = async () => {
    const accountAmount = Number(state.accountAmount).toFixed(2);
    const transactionAmount = Number(state.transactionAmount).toFixed(2);

    let accountTransactionAmount, transactionCurrencyCode;

    if (
      state.amountType === "transactionAmount" &&
      transactionSubCode.currConversionRateType === "SELLING_RATE"
    ) {
      accountTransactionAmount =
        state.transactionAmount! * exchangeRate.exrtSellingRate;
    } else if (
      state.amountType === "transactionAmount" &&
      transactionSubCode.currConversionRateType !== "SELLING_RATE"
    ) {
      accountTransactionAmount =
        state.transactionAmount! * exchangeRate.exrtBuyingRate;
    }

    let currentLoggedInUser = currentUser!.userBranchMappings.find(
      (user: any) => {
        return user.userBranchType === "DEFAULT";
      }
    );

    transactionCurrencyCode = allCurrencies.find((currency: any) => {
      return currency.currencyId === state.fromTransactionCurrencyId!;
    });

    let debitCharges = {
      feeChargeDetailId: "",
      feeCategoryId: "",
      feeCategoryCode: "",
      feeTypeId: "",
      feeTypeCode: "",
      amount: "",
      feeRate: "",
      feeIndicator: "",
      deduactIndicator: "",
    };

    let creditCharges = {
      feeChargeDetailId: "",
      feeCategoryId: "",
      feeCategoryCode: "",
      feeTypeId: "",
      feeTypeCode: "",
      amount: "",
      feeRate: "",
      feeIndicator: "",
      deduactIndicator: "",
    };

    chargeData.map((data: any) => {
      debitCharges.feeChargeDetailId = data.feeChargeDetailId;
      debitCharges.feeCategoryId = data.feeCategoryId;
      debitCharges.feeCategoryCode = data.feeCategoryCode;
      debitCharges.feeTypeId = data.feeTypeId;
      debitCharges.feeTypeCode = data.feeTypeCode;
      debitCharges.amount = data.feeAmount;
      debitCharges.feeRate = data.feeRate || "0";
      debitCharges.feeIndicator = data.feeIndicator;
      debitCharges.deduactIndicator = data.deductIndicator;
    });

    if (creditChargeData) {
      creditChargeData.map((data: any) => {
        creditCharges.feeChargeDetailId = data.feeChargeDetailId;
        creditCharges.feeCategoryId = data.feeCategoryId;
        creditCharges.feeCategoryCode = data.feeCategoryCode;
        creditCharges.feeTypeId = data.feeTypeId;
        creditCharges.feeTypeCode = data.feeTypeCode;
        creditCharges.amount = data.feeAmount;
        creditCharges.feeRate = data.feeRate || "0";
        creditCharges.feeIndicator = data.feeIndicator;
        creditCharges.deduactIndicator = data.deductIndicator;
      });
    }

    const objToSend = {
      fundTransferType:
        state.transactionType === "Internal Own"
          ? state.party
          : state.transactionType,
      debitAccountId: state.debitAccountId?.toString(),
      debitAccountNo: state.debitAccountNo,
      debitAccountSchemeType: state.debitAccountSchemeType,
      creditorAccountSchemeName: state.creditorAccountSchemeName,
      creditorAccountNumber:
        state.transactionType === "External"
          ? state.creditorAccountId?.toString()
          : state.creditorAccountNumber?.toString(),
      creditorSecondaryIdentification: state.creditorSecondaryIdentification?.toString(),
      creditorAccountCurrencyId: state.creditorAccountCurrencyId?.toString(),
      creditorAccountId:
        state.transactionType === "External"
          ? ""
          : state.creditorAccountId?.toString(),
      creditorAccountCurrency: state.creditorAccountCurrency,
      creditorAgentSchemeName: state.creditorAgentSchemeName!,
      bankId:
        state.transactionType === "External" ? state.bankId?.toString() : "",
      bankCode: state.transactionType === "External" ? state.bankCode : "",
      bankName: state.transactionType === "External" ? state.bankName : "",
      bankBranchId:
        state.transactionType === "External"
          ? state.bankBranchId?.toString()
          : "",
      bankBranchCode:
        state.transactionType === "External" ? state.bankBranchCode : "",
      bankBranchName:
        state.transactionType === "External" ? state.bankBranchName : "",
      paymentTypeId: state.paymentType?.toString(),
      paymentMethodId: state.paymentMethod?.toString(),
      reference: "",
      transactionAmount:
        state.amountType === "accountAmount"
          ? accountAmount?.toString()
          : transactionAmount?.toString(),
      transactionCurrencyId:
        state.amountType === "transactionAmount"
          ? transactionCurrencyCode.currencyId.toString()
          : state.currencyId?.toString(),
      transactionCurrency:
        state.amountType === "transactionAmount"
          ? transactionCurrencyCode.currencyCode
          : state.currencyCode,
      accountAmount:
        state.amountType === "accountAmount"
          ? accountAmount?.toString()
          : accountTransactionAmount?.toFixed(2).toString(),
      accountCurrencyId: state.currencyId?.toString(),
      accountCurrency: state.currencyCode,
      exchangeRateId:
        state.amountType === "transactionAmount"
          ? exchangeRate.id?.toString()
          : "",
      amountType:
        state.amountType === "transactionAmount"
          ? "TRANSACTIONAMOUNT"
          : "ACOUNTAMOUNT",
      exchangeRate:
        state.amountType === "transactionAmount"
          ? transactionSubCode.currConversionRateType === "SELLING_RATE"
            ? Number(exchangeRate.exrtSellingRate).toFixed(2)
            : Number(exchangeRate.exrtBuyingRate).toFixed(2)
          : "",
      beneficiaryName: "TEST",
      identificationNumber: "TEST",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      addressLine4: "",
      postalCode: "",
      country: "",
      //debitAccountCharges: chargeData,
      //creditAccountCharges: creditChargeData,
      debitAccountCharges: [debitCharges],
      creditAccountCharges:
        state.transactionType === "External" ? [] : [creditCharges],
      purposeId: "1619",
      notes: "",
    };

    setConfirmLoading(true);

    await SDK.TransactionInOutService.saveFundTransfer(objToSend).then(
      (data) => {
        if (data) {
          setVisible(false);
          setConfirmLoading(false);
          window.location.reload(true);
        }
      }
    );
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const getMainAccountDetails = async () => {
    if (state.customerId) {
      const accountBalance = await SDK.TransactionService.getBalanceWithdrwableByAccountId(
        state.id!.toString(),
        currentUser!.userId!
      );

      const productData = await SDK.ProductBCAService.getSubProductCommonDetailsById(
        state.subProductId!
      );

      const currencyData = await SDK.CurrencyDetailService.getAllCurrencies();

      const customerData = await SDK.CustomerService.getBasicInformationById(
        state.customerId!.toString()
      );

      const customerTaxProfileData = await SDK.CustomerService.getTaxProfileInformation(
        state.customerId!.toString()
      );

      const {
        productName,
        productCategory,
        subProductName,
        accountSubType,
        accountSubTypeId,
        subProductIdentification,
      } = productData;

      const {
        cusPersonTypeCommonListId,
        perResidentStatusCommonListId,
        cusOrganizationTypeCode,
      } = customerData;

      const {
        ctpExternalInterestIncomeAmount,
        ctpTaxDeclarationType,
      } = customerTaxProfileData;

      const {
        actualAmount,
        balanceAmount,
        fundReservationAmount,
        withdrawableAmount,
      } = accountBalance;

      if (currencyData) {
        setAllCurrencies(currencyData);
      }

      if (productData && customerData && customerTaxProfileData) {
        setState({
          ...state,
          productName,
          productCategory,
          subProductName,
          accountSubType,
          accountSubTypeId,
          subProductIdentification,
          cusPersonTypeCommonListId,
          perResidentStatusCommonListId,
          cusOrganizationTypeCode,
          ctpExternalInterestIncomeAmount,
          ctpTaxDeclarationType,
          actualAmount,
          balanceAmount,
          fundReservationAmount,
          withdrawableAmount,
        });
      }
    }
  };

  const getCurrentExchangeRate = async (fromTransactionCurrencyId: number) => {
    const date = moment().format("DD-MM-YYYY");

    if (state.fromTransactionCurrencyId) {
      await SDK.CurrencyDetailService.getCurrencyExchangeByEffectiveDate(
        fromTransactionCurrencyId,
        state.currencyId ? state.currencyId : 1,
        date
      ).then((data) => {
        if (data) {
          setExchangeRate(data);
          getTransactionEvenSubCode();
        }
      });
    } else {
      await SDK.CurrencyDetailService.getCurrencyExchangeByEffectiveDate(
        state.currencyId ? state.currencyId : 1,
        state.currencyId ? state.currencyId : 1,
        date
      ).then((data) => {
        if (data) {
          setExchangeRate(data);
          getTransactionEvenSubCode();
        }
      });
    }
  };

  const getTransactionEvenSubCode = async () => {
    if (state.fromTransactionCurrencyId) {
      await SDK.TransactionService.getTransactionEventSubCode().then((data) => {
        setTransactionSubCode(data);
      });
    }
  };

  const getCharges = async (accountAmount: number) => {
    if (state.operationtype === "Deposit") {
      await SDK.ProductBCAService.getChargeAmountDetails(
        state.subProductId!,
        "FEDP,FEWD",
        accountAmount
      ).then((chargeData) => {
        if (chargeData) {
          setChargeData(chargeData);
          getTaxData(chargeData);
        }
      });
    } else if (state.operationtype === "Withdrawal") {
      await SDK.ProductBCAService.getChargeAmountDetails(
        state.subProductId!,
        "FEWT,FEWD",
        accountAmount
      ).then((chargeData) => {
        if (chargeData) {
          setChargeData(chargeData);
          getTaxData(chargeData);
        }
      });
    } else if (state.operationtype === "Transfer") {
      await SDK.ProductBCAService.getChargeAmountDetails(
        state.debitSubProductId!,
        "FTOU",
        accountAmount
      ).then((chargeData) => {
        console.log(chargeData, "CHARGES DEBIT");
        if (chargeData) {
          setChargeData(chargeData);
          getTaxData(chargeData);
        }
      });

      if (state.transactionType !== "External") {
        await SDK.ProductBCAService.getChargeAmountDetails(
          state.creditorSubProductId!,
          "FTIN",
          accountAmount
        ).then((chargeData) => {
          if (chargeData) {
            setCreditChargeData(chargeData);
          }
        });
      }
    }
  };

  const getTaxData = async (data: any) => {
    if (
      data && state.operationtype === "Deposit"
        ? "FEWT,FEWD"
        : state.operationtype === "Withdrawal"
        ? "FEWT,FEWD"
        : state.operationtype === "Transfer" && state.debitAccountId
        ? "FTOU"
        : "FTIN" &&
          state.productCategoryId &&
          (state.accountAmount || state.transactionAmount)
    ) {
      const baseAmount = Number(amount.accountAmount).toFixed(2);
      const otherInterestIncome = Number(
        state.ctpExternalInterestIncomeAmount
      ).toFixed(2);

      const calculateTaxData = {
        taxEventCode: state.operationtype === "Deposit" ? "CADE" : "CAWI",
        baseAmount: baseAmount?.toString(),
        productCategoryComnListId: state.productCategoryId!.toString(),
        applicableAccType: state.accountType!,
        applicableProductId: state.subProductId?.toString(),
        declarationType: state.ctpTaxDeclarationType,
        customerCategoryCode: state.cusOrganizationTypeCode,
        customerSubTypeId: state.cusPersonTypeCommonListId?.toString(),
        customerResidentTypeId: state.perResidentStatusCommonListId?.toString(),
        customerDob: "1985-03-25",
        otherInterestIncome: otherInterestIncome?.toString(),
      };

      await SDK.TaxService.calculateTax(calculateTaxData).then((taxes) => {
        setTaxData(taxes);
      });
    }
  };

  const updateState = (values: {
    key: number;
    id: number;
    accountNumber: number;
    accountOpenBranchDescription: string;
    accountType: "SAVINGS" | "CURRENT_ACCOUNT";
    casaIdentification: string;
    currencyCode: string;
    currencyId: number;
    customerName: string;
    schemeCode: string;
    status: string;
    subProductId: string;
    customerId: number;
    productCategoryId: number;
    secondaryIdentification: string;
  }) => {
    if (values) {
      let {
        key,
        id,
        accountNumber,
        accountOpenBranchDescription,
        accountType,
        casaIdentification,
        currencyCode,
        currencyId,
        customerName,
        schemeCode,
        status,
        subProductId,
        customerId,
        productCategoryId,
        secondaryIdentification,
      } = values;

      if (state.operationtype !== "Transfer") {
        setState({
          ...state,
          key,
          id,
          accountNumber,
          accountOpenBranchDescription,
          accountType,
          casaIdentification,
          currencyCode,
          currencyId,
          customerName,
          schemeCode,
          status,
          subProductId,
          customerId,
          productCategoryId,
          secondaryIdentification,
        });
      } else {
        setState({
          ...state,
          id,
          key,
          debitAccountId: id,
          debitAccountNo: casaIdentification,
          debitAccountSchemeType: schemeCode,
          debitSubProductId: subProductId,
          accountOpenBranchDescription,
          casaIdentification,
          schemeCode,
          accountType,
          currencyCode,
          currencyId,
          customerName,
          status,
          subProductId,
          customerId,
          productCategoryId,
          secondaryIdentification,
        });
      }
    } else {
      let key,
        id,
        accountNumber,
        accountOpenBranchDescription,
        accountType,
        casaIdentification,
        currencyCode,
        currencyId,
        customerName,
        schemeCode,
        status,
        subProductId,
        customerId,
        productCategoryId = undefined;

      setState({
        ...state,
        key,
        id,
        accountNumber,
        accountOpenBranchDescription,
        accountType,
        casaIdentification,
        currencyCode,
        currencyId,
        customerName,
        schemeCode,
        status,
        subProductId,
        customerId,
        productCategoryId,
      });
    }
  };

  const updateFundTransferState = (values: {
    casaIdentification: number;
    schemeCode: string;
    currencyId: number;
    currencyCode: string;
    customerName: string;
    secondaryIdentification: string;
    subProductId: string;
    id: number;
  }) => {
    if (values) {
      setState({
        ...state,
        creditorAccountSchemeName: values.schemeCode,
        creditorAccountNumber: values.casaIdentification,
        creditorSecondaryIdentification: values.secondaryIdentification,
        creditorAccountCurrencyId: values.currencyId,
        creditorAccountId: values.id,
        creditorAccountCurrency: values.currencyCode,
        creditorSubProductId: values.subProductId,
        beneficiaryName: values.customerName,
      });

      if (values.casaIdentification) {
        getPaymentType();
      }
    }
  };

  const getPaymentType = async () => {
    await SDK.AccountService.getPaymentTypeMethod().then((data) => {
      setPaymentType(data);
      getPaymentMethod();
    });
  };

  const getPaymentMethod = async () => {
    await SDK.AccountService.getPaymentSendMethod().then((data) => {
      setPaymentMethod(data);
    });
  };

  const updateStateDepositForm = (values: any) => {
    const {
      amountType,
      accountAmount,
      transactionAmount,
      fromTransactionCurrencyId,
      fromAccountCurrencyId,
      transactionExchangeRate,
      statementReference,
      remarks,
      netAmount,
    } = values;

    if (accountAmount) {
      setAmount({ ...amount, accountAmount });
      getCurrentExchangeRate(state.currencyId!);
      getCharges(accountAmount);
    } else {
      setAmount({ ...amount, transactionAmount });
      getCurrentExchangeRate(fromTransactionCurrencyId!);

      if (
        transactionAmount &&
        exchangeRate &&
        transactionSubCode &&
        transactionSubCode.currConversionRateType === "SELLING_RATE"
      ) {
        getCharges(
          transactionAmount * (exchangeRate ? exchangeRate.exrtSellingRate : 1)
        );
      } else {
        getCharges(
          transactionAmount * (exchangeRate ? exchangeRate.exrtBuyingRate : 1)
        );
      }
    }

    setState((prev: any) => ({
      ...prev,
      amountType,
      accountAmount,
      transactionAmount,
      fromTransactionCurrencyId,
      fromAccountCurrencyId,
      transactionExchangeRate,
      statementReference,
      netAmount,
      remarks,
    }));
  };

  const updateDenominationState = (values: any) => {
    setState({ ...state, denominationDetails: values });
  };

  const updateCounterPartyForm = (values: any) => {
    const {
      counterPartyName,
      counterPartyIdentification,
      counterPartyAddress,
      counterPartyNotes,
    } = values;

    setState({
      ...state,
      counterPartyName,
      counterPartyIdentification,
      counterPartyAddress,
      counterPartyNotes,
    });
  };

  const updateSpecialApprovalForm = (values: any) => {
    const { approvalType, approvalPerson } = values;

    setState({
      ...state,
      approvalType,
      approvalPerson,
    });
  };

  const updateTransferTypeForm = (values: any) => {
    const { transactionType } = values;

    setState({
      ...state,
      transactionType,
    });
  };

  const updateTransferDetailsForm = (values: {
    accountAmount: number;
    amountType: string;
    statementReference: string;
    date: any;
    transactionAmount: number;
    fromTransactionCurrencyId: number;
    fromAccountCurrencyId: number;
    transactionExchangeRate: number;
    netAmount: number;
    remarks: string;
    transactionNumber: string;
    paymentType: number;
    transactionMethod: number;
  }) => {
    console.log(values, "VALUES");
    if (values.accountAmount) {
      setAmount({ ...amount, accountAmount: values.accountAmount });
      getPaymentType();
      getCurrentExchangeRate(state.currencyId!);
      getCharges(values.accountAmount);
    } else {
      setAmount({ ...amount, transactionAmount: values.transactionAmount });
      getPaymentType();
      getCurrentExchangeRate(values.fromTransactionCurrencyId!);

      if (
        values.transactionAmount &&
        exchangeRate &&
        transactionSubCode &&
        transactionSubCode.currConversionRateType === "SELLING_RATE"
      ) {
        getCharges(
          values.transactionAmount *
            (exchangeRate ? exchangeRate.exrtSellingRate : 1)
        );
      } else {
        getCharges(
          values.transactionAmount *
            (exchangeRate ? exchangeRate.exrtBuyingRate : 1)
        );
      }
    }

    setState({
      ...state,
      amountType: values.amountType,
      accountAmount: values.accountAmount,
      transactionAmount: values.transactionAmount,
      fromTransactionCurrencyId: values.fromTransactionCurrencyId,
      fromAccountCurrencyId: values.fromAccountCurrencyId,
      transactionExchangeRate: values.transactionExchangeRate,
      statementReference: values.statementReference,
      netAmount: values.netAmount,
      remarks: values.remarks,
      transactionNumber: values.transactionNumber,
      paymentMethod: values.transactionMethod,
      paymentType: values.paymentType,
    });
  };

  const updateFundTransferAccount = (values: {
    partyType: string;
    amountType: string;
    account: string;
    address: string;
    bankName: string;
    bankCode: string;
    bankId: number;
    identification: string;
    name: string;
    purpose: string;
    remarks: string;
    bankBranchId: number;
    bankBranchName: string;
    bankBranchCode: string;
  }) => {
    if (values) {
      setState({
        ...state,
        creditorAccountId: Number(values.account),
        creditorAddress: values.address,
        bankId: values.bankId,
        bankCode: values.bankCode,
        bankName: values.bankName,
        bankBranchId: values.bankBranchId,
        bankBranchCode: values.bankBranchCode,
        bankBranchName: values.bankBranchName,
        identification: values.identification,
        purpose: values.purpose,
        remarks: values.remarks,
      });
    }
  };

  const Operations: accordionProp[] = [
    {
      key: "1",
      title: `1. Operation Type ${
        state.operationtype ? `(${state.operationtype})` : ""
      }`,
      component: (
        <TypeSelector
          options={[
            { label: "Deposit", value: "Deposit" },
            { label: "Withdrawals", value: "Withdrawal" },
            { label: "Fund Transfer", value: "Transfer" },
          ]}
          defaultValue={state.operationtype}
          onChange={(e) => setstate("operationtype", e)}
        />
      ),
      disabled: false,
      style: { paddingBottom: 15 },
    },
    {
      key: "2",
      title: (state: any) =>
        `2. ${state.operationtype || ""} Type ${
          state.selectedtype ? `(${state.selectedtype})` : ""
        }`,
      component: (
        <TypeSelector
          options={[
            { label: "Cash", value: "Cash" },
            { label: "Cheque", value: "Cheque" },
          ]}
          onChange={(e) => setstate("selectedtype", e)}
        />
      ),
      disabled: state.operationtype !== "Transfer" ? false : true,
      style: { paddingBottom: 15 },
      collapsible: state.operationtype ? false : true,
    },
    {
      key: "2",
      title: (state: any) =>
        `2. ${state.operationtype} Type ${
          state.transactionType === "Internal Own"
            ? "(Domestic Internal)"
            : state.transactionType === "External"
            ? "(Domestic External)"
            : ""
        }`,
      component: <TransferTypeForm updateState={updateTransferTypeForm} />,
      disabled: state.operationtype === "Transfer" ? false : true,
      style: { paddingBottom: 15 },
      collapsible: state.operationtype ? false : true,
    },
    {
      key: "3",
      title: (state: any) =>
        `3. Party Type ${state.party ? `(${state.party})` : ""}`,
      component: (
        <TypeSelector
          options={[
            { label: "Own", value: "Own" },
            { label: "Other Party", value: "Other Party" },
          ]}
          onChange={(e) => setstate("party", e)}
        />
      ),
      disabled:
        state.operationtype === ("Deposit" || "Withdrawal") ? false : true,
      style: { paddingBottom: 15 },
      collapsible: state.selectedtype || state.transactionType ? false : true,
    },
    {
      key: "3",
      title: (state: any) =>
        `3. Party Type ${state.party ? `(${state.party})` : ""}`,
      component: (
        <TypeSelector
          options={[
            { label: "Own", value: "Internal Own" },
            { label: "Other Party", value: "Internal Third Party" },
          ]}
          onChange={(e) => setstate("party", e)}
        />
      ),
      disabled: state.operationtype === "Transfer" ? false : true,
      style: { paddingBottom: 15 },
      collapsible: state.selectedtype || state.transactionType ? false : true,
    },
    {
      key: "4",
      title: (state: any) =>
        state.operationtype === "Transfer"
          ? `${!state.operationtype ? "3. " : "4. "}From Account ${
              state.casaIdentification ? `(${state.casaIdentification})` : ""
            }`
          : state.operationtype === "Withdrawal"
          ? `3. Account ${
              state.casaIdentification ? `(${state.casaIdentification})` : ""
            }`
          : `${!state.operationtype ? "3. " : "4. "}Account ${
              state.casaIdentification ? `(${state.casaIdentification})` : ""
            }`,
      component: <Account updateState={updateState} />,
      disabled: false,
      style: { paddingBottom: 30, paddingLeft: 30, paddingRight: 30 },
      collapsible: state.party === "Own" || "Other Party" ? false : true,
    },
    {
      key: "5",
      title: (state: any) =>
        `5. To Account ${
          state.creditorAccountNumber ? `(${state.creditorAccountNumber})` : ""
        } `,
      component: <Account updateState={updateFundTransferState} />,
      disabled:
        state.operationtype === "Transfer" &&
        state.transactionType !== "External"
          ? false
          : true,
      style: { paddingBottom: 30, paddingLeft: 30, paddingRight: 30 },
      collapsible: state.party ? false : true,
    },
    {
      key: "5",
      title: (state: any) => `5. To Account`,
      component: (
        <FundTransferAccount
          updateState={updateFundTransferAccount}
          state={state}
        />
      ),
      disabled:
        state.operationtype === "Transfer" &&
        state.transactionType === "External"
          ? false
          : true,
      style: { padding: 0, paddingBottom: 0 },
      collapsible: state.party ? false : true,
    },
    {
      key: "5",
      title: (state: any) =>
        `5. ${state.operationtype} Details ${
          state.accountAmount || state.transactionAmount
            ? `(${state.accountAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })})` ||
              `(${state.transactionAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })})`
            : ""
        }`,
      component: (
        <>
          <DepositDetailsForm
            currecyList={allCurrencies}
            transactionSubCode={transactionSubCode}
            state={state}
            chargeData={chargeData}
            exchangeRate={exchangeRate}
            taxData={taxData}
            updateState={updateStateDepositForm}
          />
        </>
      ),
      style: { padding: 0, paddingBottom: 0 },
      disabled: state.operationtype === "Deposit" ? false : true,
      collapsible: state.customerId && state.subProductName ? false : true,
    },
    {
      key: "5",
      title: (state: any) =>
        `4. ${state.operationtype} Details ${
          state.accountAmount || state.transactionAmount
            ? `(${state.accountAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })})` ||
              `(${state.transactionAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })})`
            : ""
        }`,
      component: (
        <>
          <WithdrawalDetailsForm
            currecyList={allCurrencies}
            transactionSubCode={transactionSubCode}
            state={state}
            chargeData={chargeData}
            taxData={taxData}
            exchangeRate={exchangeRate}
            updateState={updateStateDepositForm}
          />
        </>
      ),
      style: { padding: 0, paddingBottom: 0 },
      disabled: state.operationtype === "Withdrawal" ? false : true,
      collapsible: state.customerId && state.subProductName ? false : true,
    },
    {
      key: "6",
      title: (state: any) =>
        state.operationtype === "Withdrawal"
          ? `5. Denominations`
          : `${!state.operationtype ? "4. " : "6. "}Denominations`,
      component: (
        <Denominations updateState={updateDenominationState} state={state} />
      ),
      disabled: state.operationtype === "Transfer" ? true : false,
      style: { paddingBottom: 30, paddingLeft: 30, paddingRight: 30 },
      collapsible:
        state.accountAmount || state.transactionAmount ? false : true,
    },
    {
      key: "6",
      title: (state: any) =>
        `6. Fund Transfer Details ${
          state.accountAmount || state.transactionAmount
            ? `(${state.accountAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })})` ||
              `(${state.transactionAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })})`
            : ""
        }`,
      component: (
        <TransferDetailsForm
          currecyList={allCurrencies}
          transactionSubCode={transactionSubCode}
          state={state}
          chargeData={chargeData}
          exchangeRate={exchangeRate}
          paymentType={paymentType}
          taxData={taxData}
          paymentMethod={paymentMethod}
          updateState={updateTransferDetailsForm}
        />
      ),
      disabled: state.operationtype === "Transfer" ? false : true,
      style: { padding: 0, paddingBottom: 0 },
      collapsible: false,
    },
    {
      key: "7",
      title: (state: any) => `7. Counter Party Details`,
      component: <CounterPartyForm updateState={updateCounterPartyForm} />,
      disabled:
        (state.operationtype === "Deposit" && state.party === "Other Party") ||
        (state.operationtype === "Transfer" &&
          state.transactionType === "International")
          ? false
          : true,
      style: { paddingBottom: 30 },
      collapsible: state.denominationDetails ? false : true,
    },
    {
      key: "7",
      title: (state: any) => `6. Special Approval`,
      component: (
        <SpecialApprovalForm updateState={updateSpecialApprovalForm} />
      ),
      disabled: state.operationtype === "Withdrawal" ? false : true,
      style: { paddingBottom: 30 },
      collapsible: state.denominationDetails ? false : true,
    },
  ];

  const setstate = (key: string, value: any) => {
    setState((prevState: any) => ({ ...prevState, [key]: value }));
  };

  useEffect(() => {
    getMainAccountDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.customerId]);
  useEffect(() => {
    console.log("state", state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <Container
      cards={
        state.operationtype === "Transfer" ? (
          <FundTransferInformationTab state={state} currentUser={currentUser} />
        ) : (
          <InformationTab
            state={state}
            currentUser={currentUser}
            chargeData={chargeData}
          />
        )
      }
      confirmButtonAlt={{
        name: "Confirm",
        onClick: () => showModal(),
      }}
      className="p-5"
    >
      <Accordion data={Operations} state={state} />

      <StyledModal
        visible={visible}
        onOk={() => {
          state.operationtype === "Deposit"
            ? handleDepositOk()
            : state.operationtype === "Transfer"
            ? handleTransferOk()
            : handleWithdrawalOk();
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={600}
        cancelText={"Previous"}
        okText={"Create and Print"}
        bodyStyle={{ padding: 40 }}
      >
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <QuestionCircleOutlined
              style={{ fontSize: 18, color: "#F1B94F", marginRight: 20 }}
            />

            {state.operationtype === "Deposit" && (
              <P className="mb-3" fontSize={14} color="black" bold>
                You are about to create a Deposit Request
              </P>
            )}
            {state.operationtype === "Withdrawal" && (
              <P className="mb-3" fontSize={14} color="black" bold>
                You are about to create a Withdrawal
              </P>
            )}
            {state.operationtype === "Transfer" && (
              <P className="mb-3" fontSize={14} color="black" bold>
                You are about to create a Fund Transfer Request
              </P>
            )}
          </div>

          <div style={{ marginLeft: 38, paddingBottom: 20 }}>
            <P fontSize={14} color="black">
              Are you sure you want to proceed?
            </P>
          </div>
        </div>
      </StyledModal>
    </Container>
  );
};

export default Operations;
