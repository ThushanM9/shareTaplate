export interface interestDetails {
  bankBranchId?: string;
  bankBranchName?: string;
  bankId?: string;
  bankName?: string;
  beneficiaryId?: string;
  beneficiaryName?: string;
  crebitInterestPostAccount?: string;
  crebitInterestPostType?: string;
  debitInterestPostAccount?: string;
  debitInterestPostType?: string;
  otherPostingMethod?: string;
  otherPostingMethodId?: string;
  paymentModeDescription?: string;
  paymentModeId?: string;
  paymentSendMethod?: string;
  paymentSendMethodId?: string;
  propotionRatio?: string;
  status?: string;
}

export interface tableData {
  key: number | string;
  postingMethod: "internal" | "external" | "Select";
  postingMethodId: string;
  postingType: "self" | "other" | "Select";
  accounts: beneficiary_account[];
  addedAccounts: string;
  totalPortion: string;
}

export interface beneficiary_account {
  id: string;
  accountName: string;
  casaIdentification: string;
  portion: string;
}
