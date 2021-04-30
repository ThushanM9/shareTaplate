import { FeeCharge } from "../../../../sdk/casa-product-bca/interfaces";

export interface OperationsProps {
  operationtype?: string;
  key?: number;
  accountNumber?: number;
  schemeCode?: string;
  casaIdentification?: string;
  customerName?: string;
  status?: string;
  accountType?: "SAVINGS" | "CURRENT_ACCOUNT";
  amountType?: string;
  accountAmount?: number;
  accountOpenBranchDescription?: string;
  currencyId?: number;
  transactionExchangeRate?: number;
  statementReference?: string;
  remarks?: string;
  transactionAmount?: number;
  currencyCode?: string;
  creditorAddress?: string;
  bankId?: number;
  bankName?: string;
  bankBranchId?: number;
  bankCode?: string;
  bankBranchCode?: string;
  bankBranchName?: string;
  identification?: string;
  purpose?: string;
  paymentType?: number;
  paymentMethod?: number;
  creditorAgentSchemeName?: string;
  identificationNumber?: string;
  values?: any;
  debitSubProductId?: string;
  creditorSubProductId?: string;
  productCategoryId?: number;
  fromTransactionCurrencyId?: number;
  fromAccountCurrencyId?: number;
  calculationfrequencycodes?: string;
  perResidentStatusCommonListId?: string;
  cusPersonTypeCommonListId?: string;
  date?: string;
  subProductId?: string;
  customerCategoryCode?: "ORIN" | "ORCO";
  cusOrganizationTypeCode?: "ORIN" | "ORCO";
  chargeData?: FeeCharge[];
  productName?: string;
  productCategory?: string;
  subProductName?: string;
  accountSubType?: string;
  taxEventCode: string;
  customerId?: number;
  selectedtype?: string;
  accountSubTypeId?: string;
  subProductIdentification?: string;
  ctpExternalInterestIncomeAmount?: number;
  secondaryIdentification?: string;
  taxes?: any;
  party?: string;
  actualAmount?: number;
  transactionNumber?: string;
  netAmount?: number;
  denominationDetails?: any;
  balanceAmount?: number;
  fundReservationAmount?: number;
  withdrawableAmount?: number;
  userBranchMappings?: any;
  userId?: string;
  counterPartyName?: string;
  counterPartyIdentification?: string;
  counterPartyAddress?: string;
  counterPartyNotes?: string;
  approvalType?: string;
  approvalPerson?: string;
  transactionType?: string;
  calculationfrequencycodesWithdrawal?: string;
  ctpTaxDeclarationType?:
    | "DECLARED"
    | "NOTDECLARED"
    | "EXEMPTED"
    | "TAXPAYEE"
    | "IRDRATE";
  id?: number;
  debitAccountId?: number;
  debitAccountNo?: string;
  debitAccountSchemeType?: string;
  creditorAccountSchemeName?: string;
  creditorAccountNumber?: number;
  creditorSecondaryIdentification?: string;
  creditorAccountCurrencyId?: number;
  creditorAccountId?: number;
  creditorAccountCurrency?: string;
  beneficiaryName?: string;
}

export interface FundTransferOperatorProps {
  fundTransferType?: string;
  debitAccountId?: number;
  debitAccountNo?: string;
  debitAccountSchemeType?: string;
  creditorAccountSchemeName?: string;
  creditorAccountNumber?: number;
  creditorSecondaryIdentification?: string;
  creditorAccountCurrencyId?: number;
  creditorAccountId?: number;
  creditorAccountCurrency?: string;
  creditorAgentSchemeName?: string;
  bankId?: number;
  bankCode?: number;
  bankName?: string;
  bankBranchId?: number;
  bankBranchCode?: number;
  bankBranchName?: string;
  paymentTypeId?: number;
  paymentMethodId?: number;
  reference?: string;
  transactionAmount?: number;
  transactionCurrencyId?: number;
  transactionCurrency?: string;
  accountAmount?: number;
  accountCurrencyId?: number;
  accountCurrency?: string;
  exchangeRateId?: string;
  amountType?: string;
  exchangeRate?: string;
  beneficiaryName?: string;
  identificationNumber?: string;
}
export interface AccountProps {
  updateState?: any;
  id?: number;
  key?: number;
  accountNumber?: number;
  schemeCode?: string;
  casaIdentification?: string;
  customerName?: string;
  status?: string;
  accountType?: string;
  customerOrganizationType?: string;
  subProductId?: string;
  currencyId?: number;
  currencyCode?: string;
  customerId?: string;
  productCategoryId?: string;
  accountOpenBranchDescription?: string;
  identificationNumber?: string;
}
export interface AmountProps {
  accountAmount?: number;
  transactionAmount?: number;
}

export interface UserProps {
  userName?: string;
  userId?: string;
  userBranchMappings?: any;
}

export interface OptionalFormProps {
  updateState?: any;
}

export interface DepositDetailsFormProps {
  updateState?: any;
  taxData?: any;
  paymentType?: any;
  paymentMethod?: any;
  state?: any;
  chargeData?: FeeCharge[];
  currecyList?: any;
  transactionSubCode?: any;
  exchangeRate?: any;
}

export interface DenominationsProps {
  updateState?: any;
  formArray?: any;
  state?: any;
}
