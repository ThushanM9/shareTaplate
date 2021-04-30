import { TaxesRequestResource } from "../casa-transfer-in/interfaces";
import { PaginatedRequest } from "../utils/common";

export interface BatchTypeDetail {
  id: number;
  version: number;
  batchTypeTenantId: string;
  batchTypeCode: string;
  batchTypeName: string;
  batchTypeDescription: string;
  batchTypeIndicator: string;
  bankTrnCode: number;
  bankTrnSubCode: number;
  batchTypeStatus: string;
  batchTypeCreatedUser: string;
  batchTypeCreatedDate: string;
  batchTypeModifiedUser: string;
  batchTypeModifiedDate: string;
}

export interface BatchTypeDetailSaveRequest {
  bankTrnCode: string,
  bankTrnCodeDescription: string,
  bankTrnSubCode: string,
  bankTrnSubCodeDescription: string,
  batchTypeCode: string,
  batchTypeCreatedUser: string,
  batchTypeDescription: string,
  batchTypeIndicator: string,
  batchTypeName: string,
  batchTypeStatus: string
}

export interface BatchTypeDetailUpdateRequest {
  batchTypeCode: number;
  batchTypeName: string;
  batchTypeDescription: string;
  batchTypeIndicator: string;
  bankTrnCode: number;
  bankTrnSubCode: number;
  batchTypeStatus: string;
  batchTypeModifiedUser: string;
}

export interface ChequeDepositBankInHouseRequestResource {
  accountCurrencyCode: string;
  accountCurrencyId: string;
  accountId: string;
  accountNumber: string;
  accountNumberSchemeName: string;
  accountSubType: string;
  accountType: string;
  charge: string;
  charges: ChequeDepositBankInHouseChargesRequestResource[];
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

export interface ChequeDepositBankInHouseChargesRequestResource {
  feeAmount: string;
  feeCategoryCode: string;
  feeCategoryId: string;
  feeChargeDetailId: string;
  feeIndicator: string;
  feeRate: string;
  feeTypeCode: string;
  feeTypeId: string;
}

export interface ChequeDepositInHouseChequeLeavesBodyRequestResource {
  chequeLeaves: DepositBatchInHouseChequeLeaves[];
}

export interface DepositBatchInHouseChequeLeaves {
  accountId: string;
  accountNumber: string;
  accountNumberSchemeName: string;
  chequeAmount: string;
  chequeDate: string;
  chequeNumber: string;
  tax: string;
  taxes: TaxesRequestResource[];
}

export interface chequeDepositBatchClearingChequeLeavesBodyRequestResource {
  chequeLeaves: ChequeDepositBatchClearingChequeLeavesRequestResource[];
}

export interface ChequeDepositBatchClearingChequeLeavesRequestResource {
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

export interface FundTransferDetailsResource {
  accountAmount?: string;
  accountCurrency?: string;
  accountCurrencyId?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  addressLine4?: string;
  bankBranchCode?: string;
  bankBranchId?: string;
  bankBranchName?: string;
  bankCode?: string;
  bankId?: string;
  bankName?: string;
  beneficiaryName?: string;
  charges?: ChargeDetail[];
  country?: string;
  creditorAccountCurrency?: string;
  creditorAccountNumber?: string;
  creditorAccountSchemeName?: string;
  creditorAgentSchemeName?: string;
  creditorSecondaryIdentification?: string;
  debitAccountId?: string;
  debitAccountNo?: string;
  debitAccountSchemeType?: string;
  exchangeRate?: string;
  exchangeRateId?: string;
  fundTransferType?: string;
  identificationNumber?: string;
  notes?: string;
  paymentMethodId?: string;
  paymentTypeId?: string;
  postalCode?: string;
  purposeId?: string;
  reference?: string;
  transactionAmount?: string;
  transactionCurrency?: string;
  transactionCurrencyId?: string;
}

export interface ChargeDetail {
  bankTransactionSubCode: BankTransactionSubCode;
  chargeAmount: number;
  chargeRecoveryMethod: string;
  chargeStatus: 'FULL' | 'PARTIAL' | 'UNRECOVERABLE';
  feeChargeDetailId: number;
  partialUnrecoverableAmount: number;
}

interface BankTransactionSubCode {
  codeId: number;
  createdDate: string;
  createdUser: string;
  description: string;
  id: number;
  modifiedDate: string;
  modifiedUser: string;
  postingType: string;
  status: string;
  subCode: string;
  tenantId: string;
  version: number;
}

export interface FundTransferSearchRequest extends PaginatedRequest {
  creditAccountNo?: string,
  debitAccountNo?: string,
  status?: string,
  transactionNo?: string
}

export interface FundTransferDetails {
  id: number;
  version: number;
  tenantId: string;
  transactionNumber: string;
  fundTransferType: string;
  debitAccountNo: string;
  debitAccountId: number;
  debitAccountSchemeType: string;
  creditorAccountSchemeName: string;
  creditorAccountNumber: string;
  creditorSecondaryIdentification?: any;
  creditorAccountCurrency: string;
  creditorAgentSchemeName?: any;
  bankId: number;
  bankCode?: any;
  bankBranchId?: any;
  bankBranchCode?: any;
  paymentTypeId: number;
  paymentDate: string;
  paymentMethodId: number;
  reference?: any;
  transactionAmount: number;
  transactionCurrencyId: number;
  transactionCurrency: string;
  accountAmount: number;
  accountCurrencyId: number;
  accountCurrency: string;
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
  status: string;
  createdUser: string;
  createdDate: string;
  approvedUser: string;
  approvedDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface FundTransferProcessHelperResource {
  charges: ChargeDetail[];
  notes: string;
}

export interface BatchRequestResource {
  batchTypeDescription: string;
  batchTypeId: string;
  currencyCode: string;
  currencyId: string;
  totalNoOfCredit: string;
  totalNoOfDebit: string;
  totalValueOfCredit: string;
  totalValueOfDebit: string;
}

export interface BatchDetailList {
  batchDetail: BatchDetailRequestResource[];
}

export interface BatchDetailRequestResource {
  accountNo: string;
  amount: string;
  batchCreatedUser: string;
}

export interface Batch {
  id: number;
  version: number;
  batchTenantId: string;
  batchDate: string;
  totalNoOfCredit: number;
  totalNoOfDebit: number;
  totalValueOfCredit?: any;
  totalValueOfDebit: number;
  batchStatus: string;
  currencyId: number;
  currencyCode: string;
  codeNumeric: string;
  batchRemark?: any;
  batchCreatedUser: string;
  batchCreatedDate: string;
  batchModifiedUser?: any;
  batchModifiedDate?: any;
  batchCanceledUser?: any;
  batchCancelledDate?: any;
  batchApprovedUser?: any;
  batchApprovedDate?: any;
  batchRejectedUser?: any;
  batchRejectedDate?: any;
}

export interface BatchDetail {
  id: number;
  version: number;
  tenantId: string;
  batchStatus: string;
  accountNoId: number;
  accountNo: string;
  schmCode: string;
  errorFlag: string;
  errorRemark: string;
  purpose?: any;
  creditAmount: number;
  debitAmount: number;
  currencyId: number;
  currencyCode: string;
  codeNumeric: string;
  accType: string;
  accSubType: number;
  batchCreatedUser: string;
  canceledUser?: any;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  cancelledDate?: any;
  approvedUser: string;
  approvedDate: string;
  rejectedUser?: any;
  rejectedDate?: any;
  transactionReference: number;
}

export interface CreateTransactionReversalRequestResource {
  accountCurrencyCode: string;
  accountCurrencyId: string;
  accountId: string;
  accountNumber: string;
  accountNumberSchemeName: string;
  accountSubType: string;
  accountType: string;
  actualAmount: string;
  balanceAmount: string;
  createdBranchId: string;
  createdBranchName: string;
  createdDate: string;
  createdUser: string;
  creditDebitIndicator: string;
  narrative: string;
  reversalCreationNote: string;
  subProductId: string;
  subProductIdentification: string;
  transactionAmount: string;
  transactionDate: string;
  transactionId: string;
  userReferenceNumber: string;
  valueDate: string;
}

export interface TransactionReversal {
  id: number;
  version: number;
  tenantId: string;
  accountNumberSchemeName: string;
  accountId: number;
  accountNumber: string;
  accountCurrencyId: number;
  accountCurrencyCode: string;
  actualAmount: number;
  balanceAmount: number;
  accountType: string;
  accountSubType: string;
  transactionAmount: number;
  creditDebitIndicator: string;
  userReferenceNumber: string;
  narrative: string;
  transactionDate: string;
  valueDate: string;
  status: string;
  reversalCreationNote: string;
  createdUser: string;
  createdDate: string;
  createdBranchId: number;
  createdBranchName: string;
  reversalConfirmNote: string;
  modifiedUser: string;
  modifiedDate: string;
  modifiedBranchId: number;
  modifiedBranchName: string;
}

export interface ApproveTransactionReversalRequestResource {
  approvalStatus: string;
  modifiedBranchId: string;
  modifiedBranchName: string;
  modifiedUser: string;
  reversalConfirmNote: string;
  version: string;
}