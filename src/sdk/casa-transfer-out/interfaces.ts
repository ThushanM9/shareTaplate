import { TaxesRequestResource } from "../casa-transfer-in/interfaces";

export interface CounterCashWithdrawalRequestResource {
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
  actualBalance?: string;
  amountType?: string;
  charge?: string;
  charges?: CounterCashWithdrawalChargesRequestResource[];
  createdBranchId?: string;
  createdBranchName?: string;
  createdUser?: string;
  customerId?: string;
  fundReservationAmount?: string;
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

export interface CounterCashWithdrawalChargesRequestResource {
  feeAmount: string;
  feeCategoryCode: string;
  feeCategoryId: string;
  feeChargeDetailId: string;
  feeIndicator: string;
  feeRate: string;
  feeTypeCode: string;
  feeTypeId: string;
}

export interface ChequeWithdrawalRequestResource {
  accountCurrencyCode: string;
  accountCurrencyId: string;
  accountId: string;
  accountNumber: string;
  accountNumberSchemeName: string;
  accountSubType: string;
  accountType: string;
  actualBalance: string;
  charge: string;
  charges: ChequeWithdrawalChargesRequestResource[];
  chequeDate: string;
  chequeLeafStatus: string;
  chequeNumber: string;
  createdBranchId: string;
  createdBranchName: string;
  createdUser: string;
  customerId: string;
  fundReservationAmount: string;
  narrative: string;
  netAmount: string;
  overDraftBalance: string;
  overdraftAmount: string;
  statementReference: string;
  subProductId: string;
  subProductIdentification: string;
  tax: string;
  taxes: TaxesRequestResource[];
  transactionAmount: string;
  transactionDate: string;
  transactionReference: string;
  valueDate: string;
}

export interface ChequeWithdrawalChargesRequestResource {
  feeAmount: string;
  feeCategoryCode: string;
  feeCategoryId: string;
  feeChargeDetailId: string;
  feeIndicator: string;
  feeRate: string;
  feeTypeCode: string;
  feeTypeId: string;
}

export interface ChequeWithdrawalFinalActionRequestResource {
  finalAction: string;
  finalActionNote: string;
  finalActionReasonDesc: string;
  finalActionReasonId: string;
  modifiedUser: string;
}

export interface ChequeWithdrawalReturnRequestResource {
  modifiedUser: string;
  returnNote: string;
  returnReasonCategoryDesc: string;
  returnReasonCategoryId: string;
  returnReasonDesc: string;
  returnReasonId: string;
}

export interface InwardChequeClearenceRequestResource {
  batchCreationMethod: string;
  clearenceHouse: string;
  clearenceHouseId: string;
  createdBranchId: string;
  createdBranchName: string;
  inwardClearingType: string;
  inwardClearingTypeId: string;
  narrative: string;
  notes: string;
  referenceNumber: string;
  statementReference: string;
  totalNumberOfCheque: string;
  totalValueOfCheques: string;
  transactionDate: string;
  transactionReference: string;
  valueDate: string;
}

export interface InwardClearenceBatch {
  id: number;
  version: number;
  tenantId: string;
  notes: string;
  batchCreationMethod: string;
  clearingHouse: string;
  inwardClearingType: string;
  referenceNumber: string;
  transactionDate: string;
  createdBranchId: number;
  createdBranchName: string;
  totalNumberOfCheque: number;
  totalValueOfCheques: number;
  inwardChequeClearenceStatus: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  inwardChequeClearenceErrorStatus: string;
}

export interface InwardChequeClearenceBatchUpdateRequestResource {
  batchCreationMethod: string;
  clearenceHouse: string;
  clearenceHouseId: string;
  id: string;
  inwardClearingType: string;
  inwardClearingTypeId: string;
  modifiedUser: string;
  notes: string;
  referenceNumber: string;
  tenantId: string;
  version: string;
}

export interface InwardChequeClearenceBatchLeavesClearingRequestBodyResource {
  chequeLeaves: InwardChequeClearenceBatchLeavesClearingRequestResource[];
  inwardChequeClearenceBatchId: string;
}

export interface InwardChequeClearenceBatchLeavesClearingRequestResource {
  chequeLeavesId: string;
  chequeNumber: string;
  clearingStatus: string;
  note: string;
  returnReasonCategoryDesc: string;
  returnReasonCategoryId: string;
  returnReasonDesc: string;
  returnReasonId: string;
}