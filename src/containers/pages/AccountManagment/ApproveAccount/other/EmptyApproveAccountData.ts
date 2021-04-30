import { UpdateAccountResourceApproved } from "../../../../../sdk/casa-account/interfaces";

export const EmptyApproveAccountData: UpdateAccountResourceApproved = {
  accountName: "",
  allowMinusBalance: "Yes",
  anticipatedFrequencyId: 0,
  anticipatedValue: "",
  anticipatedValueId: 0,
  autoChequeBookRequestEnabled: "Yes",
  autoChequeBookRequestPeriod: 0,
  autoChequeBookRequestPeriodFrequency: "Day",
  crebitInterestPostAccount: "",
  crebitInterestPostType: "Self",
  debitInterestPostAccount: "",
  debitInterestPostType: "Self",
  casaEmailEnabled: "Yes",
  enableDisableInterestCalculation: "Yes",
  enableInterestOnOverdraft: "Yes",
  interestCalculationStartDate: "",
  isATMEnabled: "",
  isChequeBookEnabled: "Yes",
  kycStatus: "YES",
  maxAllowedCheckBooksPerRequest: 0,
  maximumOverdraftLimit: 0,
  minorAccountStatus: "Minor with restrictions",
  nickName: "",
  nofChequesPerBook: 0,
  officerName: "",
  ownershipType: "SOLE OWNER",
  casaPurpose: 0, //purposeReferenceId
  restrictedStatus: "Yes",
  casaSMSEnabled: "Yes",
  casaStatementDeliveryMethod: "POST", // 4-
  casaStatementStatus: "Statement", //
  stopRequest: "Yes",
  chequeBookStockTypeId: 0,
  chequeBookTypeId: 0,
  chequeTypeId: 0,
  minimumAmountForSweeping: 0,
  otherCurrencyTransactionAllowed: "Yes",
  periodMethod: 0,
  recurringSweepingAllowed: "Yes",
  reversalLimit: 0,
  specialRate: 0,
  sweepingEnabled: "Yes",
  sweepingLimit: 0,
  version: 0, // account data.version
};