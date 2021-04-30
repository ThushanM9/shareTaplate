export interface ScheduledPayment {
    createdUser: string;
    accountSchemeName: string;
    paymentSchedulerCategory: string;
    accountId: string;
    accountNo: string;
    scheduledDate: string;
    scheduledType: string;
    paymentSchedulerMethod: string;
    paymentSchedulerReference: string;
    instructedAmount: InstructedAmount;
    creditorAgent: CreditorAgent;
    creditorAgentBranch: CreditorAgentBranch;
    creditorAccount: CreditorAccount;
}

export interface CreditorAccount {
    creditorAccSchemeName: string;
    creditorAccIdentification: string;
    creditorAccName: string;
    creditorAccSecondaryIdentification: string;
}

export interface CreditorAgentBranch {
    creditorAgentBranchId: string;
    creditorAgentBranchName: string;
    creditorAgentBranchCode: string;
}

export interface CreditorAgent {
    creditorAgentId: string;
    creditorAgentSchemeName: string;
    creditorAgentIdentification: string;
}

export interface InstructedAmount {
    instructedAmount: string;
    instructedCurrencyId: string;
    instructedCurrencyCode: string;
    instructedCurrencyNumericId: string;
}

export interface ScheduledPaymentSaveRequest {
    accountSchemeName: string;
    accountId: string;
    accountNo: string;
    scheduledDate: string;
    scheduledType: string;
    createdUser: string,
    paymentSchedulerCategory: string;
    paymentSchedulerMethod: string;
    paymentSchedulerReference: string;
    paymentSchedulerStatus: string,
    instructedAmount: InstructedAmount;
    creditorAgent: CreditorAgent;
    creditorAgentBranch: CreditorAgentBranch;
    creditorAccount: CreditorAccount;
    charges: Charge[];
}

export interface Charge {
    feeChargeDetailId: number;
    feeCategoryId: string;
    feeCategoryCode: string;
    feeTypeId: string;
    feeTypeCode: string;
    feeAmount: string;
    feeRate: string;
    feeIndicator: string;
    deductIndicator: string;
}