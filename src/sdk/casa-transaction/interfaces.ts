import { PaginatedRequest } from "../utils/common";

export interface TransactionEvent {
    id: number;
    version: number;
    tenantId: string;
    code: string;
    description: string;
    status: string;
}

export interface BankTransactionCode {
    id: number;
    tenantId: string;
    code: string;
    description: string;
    status: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
    version: number;
}

export interface BankTransactionCodeSaveRequest {
    bankTransCode: string;
    description: string;
    status: string;
    createdUser?: string;
}

export interface BankTransactionCodeUpdateRequest {
    bankTransCode: string;
    description: string;
    status: string;
    modifiedUser: string;
    version: string;
}

export interface BankTransactionSubCode {
    id: number;
    tenantId: string;
    codeId: number;
    subCode: string;
    description: string;
    status: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
    version: number;
    postingType: string;
    allowDormant: string;
    transactionCategory: string;
}

export interface BankTransactionSubCodeSaveRequest {
    bankTransSubCode: string;
    description: string;
    postingType: "CREDIT" | "DEBIT" | "REVERSAL";
    allowDormant: "YES" | "NO";
    transactionCategory: "GENERAL" | "CHARGES_FEE";
    status: "ACTIVE" | "INACTIVE";
    createdUser: string;
}

export interface BankTransactionSubCodeUpdateRequest {
    allowDormant: "YES" | "NO",
    bankTransSubCode: string,
    codeId: string,
    description: string,
    id: string,
    modifiedUser?: string,
    postingType: "CREDIT" | "DEBIT" | "REVERSAL",
    status: "ACTIVE" | "INACTIVE",
    transactionCategory: "GENERAL" | "CHARGES_FEE",
    version: string
}

export interface TransactionEventSubCode {
    id: number;
    version: number;
    tenantId: string;
    transEventCode: string;
    subCodeDesc: string;
    currConversionRateType: string;
    status: string;
    createdUser: string;
    createdDate: string;
}

export interface TransactionEventSubCodeSaveRequest {
    transEventId: string;
    transEventCode: string;
    bankTransactionCode: string;
    bankTransactionCodeId: string;
    subCodeId: string;
    subCode: string;
    description: string;
    currConversionRateType: string;
    status: string;
}

export interface TransactionEventSubCodeUpdateRequest {
    transEventId: string;
    transEventCode: string;
    bankTransactionCode: string;
    bankTransactionCodeId: string;
    subCodeId: string;
    subCode: string;
    description: string;
    currConversionRateType: string;
    status: string;
    version: string;
}

export interface TransactionEventAcctStatus {
    id: number;
    version: number;
    tenantId: string;
    transEventCode: string;
    accStatus: string;
    accStatusDesc: string;
    status: string;
    createdUser: string;
    createdDate: string;
}

export interface TransactionEventAcctStatusSaveRequest {
    transEventId: string;
    transEventCode: string;
    accStatus: string;
    accStatusDesc: string;
    status: string;
    createdUser: string;
}

export interface TransactionEventAcctStatusUpdateRequest {
    transEventId: string;
    transEventCode: string;
    accStatus: string;
    accStatusDesc: string;
    status: string;
    modifiedUser: string;
    version: string;
}

export interface ProprietaryBankTransactionCode {
    id: number;
    tenantId: string;
    code: string;
    issuer: string;
    status: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
    version: number;
}

export interface ProprietaryBankTransactionCodeSaveRequest {
    proprietaryBankTransCode: string;
    issuer: string;
    status: string;
}

export interface ProprietaryBankTransactionCodeUpdateRequest {
    proprietaryBankTransCode: string;
    issuer: string;
    status: string;
    modifiedUser?: string;
    version: string;
}

export interface PassbookResource {
    accountId: string;
    accountNoSchemeName?: string;
    accountNumber: string;
    charges?: Array<ChargeAddResource>;
    customerId?: string;
    id?: string;
    linePerPage?: string;
    pagePerPassbook?: string;
    passbookIssueDate?: number;
    passbookNo: string;
    passbookSequenceNo?: string;
    previousPassbookId?: string;
    previousPassbookNo?: string;
    printedLastTransactionNo?: string;
    printedLine?: string;
    printedPagePerPassbook?: string;
    status?: PassbookResource.StatusEnum;
    tenantId?: string;
}

export namespace PassbookResource {
    export enum StatusEnum {
        CANCELLED = <any>'CANCELLED',
        ACTIVE = <any>'ACTIVE',
        COMPLETED = <any>'COMPLETED',
        LOST = <any>'LOST'
    }
}

export interface ChargeAddResource {
    amount: string;
    chargeType?: string;
    deductIndicator?: string;
    feeCategoryCode: string;
    feeCategoryId: string;
    feeChargeDetailId: string;
    feeIndicator: string;
    feeRate?: string;
    feeTypeCode: string;
    feeTypeId: string;
    note?: string;
    processingType?: string;
    standingOrderId?: string;
    status?: string;
    transferType?: string;
}

export interface TransactionDetails {
    id: number;
    version: number;
    tenantId: string;
    accountId: number;
    accountNumberSchemeName: string;
    accountNumber: string;
    customerId: number;
    transactionReference: string;
    statementReference: string;
    creditDebitIndicator: string;
    status: string;
    bookingDateTime: string;
    valueDateTime: string;
    transactionAmount: number;
    transactionAmountCurrencyId: number;
    transactionAmountCurrencyCode: string;
    transactionAmountCurrencyNumeric: string;
    transactionSourceCurrencyId: number;
    transactionSourceCurrencyCode: string;
    transactionSourceCurrencyNumeric: string;
    transactionTargetCurrencyId: number;
    transactionTargetCurrencyCode: string;
    transactionTargetCurrencyNumeric: string;
    transactionUnitCurrencyId: number;
    transactionUnitCurrencyCode: string;
    transactionUnitCurrencyNumeric: string;
    transactionInstructedAmount: number;
    transactionInstructedCurrencyId: number;
    transactionInstructedCurrencyCode: string;
    transactionInstructedCurrencyNumeric: string;
    contractIdentification: string;
    bankTransactionCode: string;
    bankTransactionSubCode: string;
    balanceAmount: number;
    actualAmount: number;
    balanceCreditDebitIndicator: string;
    balanceType: string;
    debtorAccountSchemeName: string;
    debtorAccountIdentification: string;
    debtorAccountName: string;
    createdUser: string;
    createdDate: string;
}

export interface Transactions {
    data: Data;
}

export interface Data {
    transaction: Transaction[];
}

export interface Transaction {
    accountId: string;
    transactionId: string;
    transactionReference: string;
    amount: Amount;
    creditDebitIndicator: string;
    status: string;
    bookingDateTime: string;
    valueDateTime: string;
    bankTransactionCode: BankTransactionCode;
    balance: Balance;
}

export interface Balance {
    amount: Amount;
    creditDebitIndicator: string;
    type: string;
}

export interface Amount {
    amount: string;
    currency: string;
}

export interface BalanceInquiry extends PaginatedRequest {
    accNo?: number,
    designationId?: number,
    userId?: string
}

export interface TransactionInquiry extends PaginatedRequest {
    fDate?: string,
    tDate?: string,
    accNo?: number,
    transactionId?: number,
    designationId?: number,
    userId?: number
}

export interface TransactionInquiryByCustomer extends PaginatedRequest {
    fDate?: string,
    tDate?: string,
    cusId?: number,
    designationId?: number,
    userId?: number
}

export interface AccountBalanceDetail {
    actualAmount: number,
    balanceAmount: number,
    balanceCreditLimit: number,
}

export interface WithdrawableBalance {
    actualAmount: number,
    balanceAmount: number,
    balanceCreditLimit: number,
    fundReservationAmount: number,
    withdrawableAmount: number
}

export interface AccountBalance {
    actualAmount: number,
    balanceAmount: number,
    balanceCreditLimit: number
}

export interface PDChequeList {
    id: number;
    version: number;
    tenantId: string;
    chequeDepositBatch: ChequeDepositBatch;
    chequeAmount: number;
    chequeNumber: string;
    chequeDate: string;
    bankId: number;
    bankCode: string;
    bankRoutingNumber: string;
    bankBranchId: number;
    bankBranchCode: string;
    chequeClearingStatus: string;
    createdUser: string;
    createdDate: string;
    chequeLeavesType: string;
    chequeType: string;
}

export interface ChequeDepositBatch {
    id: number;
    version: number;
    tenantId: string;
    accountId: number;
    accountNumberSchemeName: string;
    accountNumber: string;
    accountName: string;
    accountCurrencyId: number;
    accountCurrencyCode: string;
    subProductId: number;
    subProductIdentification: string;
    accountType: string;
    accountSubType: number;
    customerId: number;
    transactionReference: string;
    statementReference: string;
    narrative: string;
    transactionDate: string;
    valueDate: string;
    createdBranchId: number;
    createdBranchName: string;
    totalNumberOfCheque: number;
    totalValueOfCheques: number;
    chequeDepositStatus: string;
    chequeDepositType: string;
    createdUser: string;
    createdDate: string;
    chequeType: string;
}

export interface Passbook {
    id: number;
    version: number;
    tenantId: string;
    accountNoId: number;
    accountNoSchemeName: string;
    accName: string;
    accountNo: string;
    customerId: number;
    passbookSequenceNo: number;
    passbookNo: string;
    passbookIssueDate: string;
    pagePerPassbook: number;
    linePerPage: number;
    printedPagePerPassbook: number;
    printedLine: number;
    printedLastTransactionNo?: any;
    previousPassbookId: number;
    previousPassbookNo: string;
    status: string;
    createdUser: string;
    createdDate: string;
    modifiedUser?: any;
    modifiedDate?: any;
    passbookPrintedUser?: any;
    passbookPrintedDate?: any;
    cancelledRemark?: any;
    cancelledUser?: any;
    cancelledDate?: any;
}