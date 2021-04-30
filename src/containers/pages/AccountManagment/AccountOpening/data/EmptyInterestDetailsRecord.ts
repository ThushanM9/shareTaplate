import { InterestDetailsResource } from "../../../../../sdk/casa-account/interfaces";

export const EmptyInterestDetailsRecord: InterestDetailsResource = {
  bankBranchId: 0,
  bankBranchName: "",
  bankId: 0,
  bankName: "",
  beneficiaryId: 0,
  beneficiaryName: "",
  crebitInterestPostAccount: "",
  crebitInterestPostType: "",
  debitInterestPostAccount: "",
  debitInterestPostType: "",
  otherPostingMethod: "Internal",
  otherPostingMethodId: 0,
  paymentModeDescription: "",
  paymentModeId: 0,
  paymentSendMethod: "",
  paymentSendMethodId: 0,
  propotionRatio: 0,
  status: "ACTIVE",
};
