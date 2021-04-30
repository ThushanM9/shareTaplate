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

export interface ListProps {
  updateState?: any;
}

export interface UserProps {
  userName?: string;
  userId?: string;
  userBranchMappings?: any;
}

export interface FundTransferDetailsProps {
  data?: any;
  id?: number;
  amountType?: string;
  version?: number;
  tenantId?: string;
  transactionNumber?: string;
  fundTransferType?: string;
  debitAccountNo?: string;
  debitAccountId?: number;
  debitAccountSchemeType?: string;
  creditorAccountSchemeName?: string;
  creditorAccountNumber?: string;
  creditorSecondaryIdentification?: any;
  creditorAccountCurrency: string;
  creditorAgentSchemeName?: any;
  fromAccountCurrencyId?: number;
  fromTransactionCurrencyId?: number;
  transactionExchangeRate?: number;
  bankId?: number;
  bankCode?: any;
  fundPartyType?: string;
  bankBranchId?: any;
  bankBranchCode?: any;
  paymentType?: number;
  paymentMethod?: number;
  paymentTypeId?: number;
  paymentDate?: string;
  paymentMethodId?: number;
  reference?: any;
  transactionAmount?: number;
  transactionCurrencyId?: number;
  transactionCurrency?: string;
  accountAmount?: number;
  accountCurrencyId?: number;
  accountCurrency?: string;
  exchangeRateId?: any;
  exchangeRate?: any;
  beneficiaryName?: any;
  identificationNumber: string;
  addressLine1?: any;
  addressLine2?: any;
  addressLine3?: any;
  addressLine4?: any;
  postalCode?: any;
  country?: any;
  purposeId: number;
  notes?: any;
  status?: string;
  createdUser?: string;
  createdDate?: string;
  approvedUser?: string;
  approvedDate?: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface FundTransferTableProps {
  state?: any;
  debit?: boolean;
  credit?: boolean;
}

export interface FundTransferDetailsForm {
  updateState?: any;
  state?: any;
  currecyList?: any;
  paymentMethod?: any;
  paymentType?: any;
}

export interface OptionalFormProps {
  updateState?: any;
  state?: any;
}
