import { AccountData } from "../casa-account/interfaces";

export interface CounterCashDepositRequestResource {
  accountAmount?: string;
  accountCurrencyCode?: string;
  accountCurrencyId?: string;
  accountExchangeRate?: string;
  accountExchangeRateId?: string;
  accountExchangeRateType?: string;
  accountId?: string;
  accountNumber?: string;
  accountNumberSchemeName?: string;
  accountSubType?: string;
  accountType?: string;
  amountType?: string;
  charge?: string;
  charges?: CounterCashDepositChargesRequestResource[];
  createdBranchId?: string;
  createdBranchName?: string;
  createdUser?: string;
  customerId?: string;
  narrative?: string;
  netAmount?: string;
  statementReference?: string;
  subProductId?: string;
  subProductIdentification?: string;
  tax?: string;
  taxes?: TaxesRequestResource[];
  transactionAmount?: string;
  transactionCurrencyCode?: string;
  transactionCurrencyId?: string;
  transactionDate?: string;
  transactionExchangeRate?: string;
  transactionExchangeRateId?: string;
  transactionExchangeRateType?: string;
  transactionReference?: string;
  valueDate?: string;
}

export interface TaxesRequestResource {
  taxCode: string;
  taxCodeId: string;
  taxCodeName: string;
  taxProfileId: string;
  taxValue: string;
}

export interface CounterCashDepositChargesRequestResource {
  feeAmount: string;
  feeCategoryCode: string;
  feeCategoryId: string;
  feeChargeDetailId: string;
  feeIndicator: string;
  feeRate: string;
  feeTypeCode: string;
  feeTypeId: string;
}

export interface ChequeDepositNonBankRequestResource {
  accountCurrencyCode: string;
  accountCurrencyId: string;
  accountId: string;
  accountNumber: string;
  accountNumberSchemeName: string;
  accountSubType: string;
  accountType: string;
  charge: string;
  charges: ChequeDepositNonBankChargesRequestResource[];
  createdBranchId: string;
  createdBranchName: string;
  customerId: string;
  narrative: string;
  statementReference: string;
  subProductId: string;
  subProductIdentification: string;
  totalNumberOfCheque: string;
  totalValueOfCheques: string;
  transactionDate: string;
  transactionReference: string;
  valueDate: string;
}

export interface ChequeDepositNonBankChargesRequestResource {
  feeAmount: string;
  feeCategoryCode: string;
  feeCategoryId: string;
  feeChargeDetailId: string;
  feeIndicator: string;
  feeRate: string;
  feeTypeCode: string;
  feeTypeId: string;
}

export interface ChequeDepositBatchChequeLeavesBodyRequestResource {
  chequeLeaves: ChequeDepositBatchChequeLeavesRequestResource[];
}

export interface ChequeDepositBatchChequeLeavesRequestResource {
  bankBranchCode: string;
  bankBranchId: string;
  bankCode: string;
  bankId: string;
  bankRoutingNumber: string;
  chequeAmount: string;
  chequeDate: string;
  chequeNumber: string;
  chequeType: string;
  fromAccountId: AccountData;
  fromAccountNo: string;
  fromAccountNoSchemeName: string;
  tax: string;
  taxes: TaxesRequestResource[];
}

export interface ChequeDepositExternalRequestResource {
  accountCurrencyCode: string;
  accountCurrencyId: string;
  accountId: string;
  accountNumber: string;
  accountNumberSchemeName: string;
  accountSubType: string;
  accountType: string;
  charge: string;
  charges: Charge[];
  createdBranchId: string;
  createdBranchName: string;
  customerId: string;
  narrative: string;
  statementReference: string;
  subProductId: string;
  subProductIdentification: string;
  totalNumberOfCheque: string;
  totalValueOfCheques: string;
  transactionDate: string;
  transactionReference: string;
  valueDate: string;
}

export interface Charge {
  feeAmount: string;
  feeCategoryCode: string;
  feeCategoryId: string;
  feeChargeDetailId: string;
  feeIndicator: string;
  feeRate: string;
  feeTypeCode: string;
  feeTypeId: string;
}

export interface OutwardChequeClearenceRequestResource {
  batchCreationMethod: string;
  chequeExternalId: string;
  clearenceHouse: string;
  clearenceHouseId: string;
  createdBranchId: string;
  createdBranchName: string;
  notes: string;
  outwardClearingType: string;
  outwardClearingTypeId: string;
  pdChequeExternalId: string;
  referenceNumber: string;
  totalNumberOfCheque: string;
  totalValueOfCheques: string;
  transactionDate: string;
}

export interface OutwardChequeClearenceBatchUpdateRequestResource {
  batchCreationMethod: string;
  clearenceHouse: string;
  clearenceHouseId: string;
  id: string;
  modifiedUser: string;
  notes: string;
  outwardClearingType: string;
  outwardClearingTypeId: string;
  referenceNumber: string;
  tenantId: string;
  version: string;
}

export interface PdChequeDepositRequestResource {
  accountCurrencyCode: string;
  accountCurrencyId: string;
  accountId: string;
  accountNumber: string;
  accountNumberSchemeName: string;
  accountSubType: string;
  accountType: string;
  charge: string;
  charges: Charge[];
  chequeType: string;
  createdBranchId: string;
  createdBranchName: string;
  customerId: string;
  narrative: string;
  statementReference: string;
  subProductId: string;
  subProductIdentification: string;
  totalNumberOfCheque: string;
  totalValueOfCheques: string;
  transactionDate: string;
  transactionReference: string;
  valueDate: string;
}

export interface PDChequeConfirmRequestResource {
  chequeDepositBatchID: number;
  chequeNumber: string;
  clearingStatus: string;
  remark: string;
}

export interface PdChequeDepositBatchChequeLeavesBodyRequestResource {
  chequeLeaves: PdChequeDepositBatchClearingChequeLeavesRequestResource[];
}

export interface PdChequeDepositBatchClearingChequeLeavesRequestResource {
  accountCurrencyCode: string;
  accountCurrencyId: string;
  accountId: string;
  accountNumber: string;
  accountNumberSchemeName: string;
  chequeLeafStatus: string;
  chequeNumber: string;
  clearingStatus: string;
  narrative: string;
  note: string;
  returnReasonCategoryDesc: string;
  returnReasonCategoryId: string;
  returnReasonDesc: string;
  returnReasonId: string;
  statementReference: string;
  subProductId: string;
  subProductIdentification: string;
  transactionReference: string;
}