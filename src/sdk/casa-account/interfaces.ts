import { PaginatedRequest } from "../utils/common";

export interface AccountActivationAndDeactivationRequest
  extends AccountHelperResource {
  accountCharges?: AccountCharges[];
}
// 976783
export interface Account {
  AccountData: AccountData;
  ApplicantDetails: ApplicantDetail[];
  AccountRemarks: AccountRemark[];
  IntroducerDetails?: any;
  OperatingInstructions: AccountOperatingInstruction[];
  SourceOfFunds: AccountSourceOfFund[];
  purposeDetail: AccountPurposeDetail[];
  ATMDetails: AccountATMDetail[];
  DocumentDetail: AccountDocumentDetail[];
  DebitInterestDetail: DebitInterestDetail[];
  CreditInterestDetail?: any;
  NotificationDetail: AccountNotificationDetail[];
  OverdraftDetail?: any;
  StatementStatus: AccountStatementStatus[];
  AccountCharges?: any;
  AccountValidityStatus?: any;
  productDetails?: any;
}

export interface DebitInterestDetail {
  id: number;
  version: number;
  beneficiaryId: number;
  beneficiaryName: string;
  debitInterest: boolean;
  tenantId: string;
  debitInterestPostType: string;
  debitInterestPostAccount: string;
  crebitInterestPostType: string;
  crebitInterestPostAccount: string;
  otherPostingMethodId: number;
  otherPostingMethod: string;
  paymentModeId: number;
  paymentModeDescription: string;
  paymentSendMethodId: number;
  paymentSendMethod: string;
  bankId: number;
  bankName: string;
  bankBranchId: number;
  bankBranchName: string;
  propotionRatio: number;
  status: string;
  createdUser: string;
  createdDate: string;
  accountId: number;
}

export interface AccountStatementStatus {
  id: number;
  version: number;
  tenantId: string;
  type: number;
  deliveryMethod: number;
  deliveryFrequency: number;
  frequencyCode: string;
  frequencyName: string;
  frequencyDescription: string;
  frequencyType: string;
  frequencyUnit: number;
  frequencyStatus: string;
  remarks: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  accId: number;
}

export interface AccountNotificationDetail {
  id: number;
  version: number;
  contactId: number;
  addressId: number;
  tenantId: string;
  notificationTypes: string;
  customerId: number;
  contactType: number;
  addressType: number;
  eventCategory: string;
  alertEvent: string;
  transactionLimit: number;
  status: string;
  createdUser: string;
  createdDate: string;
  accountId: number;
}

export interface AccountInterestDetail {
  id: number;
  version: number;
  beneficiaryId: number;
  beneficiaryName: string;
  tenantId: string;
  debitInterestPostType: string;
  debitInterestPostAccount: string;
  crebitInterestPostType: string;
  crebitInterestPostAccount: string;
  otherPostingMethodId: number;
  otherPostingMethod: string;
  paymentModeId: number;
  paymentModeDescription: string;
  paymentSendMethodId: number;
  paymentSendMethod: string;
  bankId: number;
  bankName: string;
  bankBranchId: number;
  bankBranchName: string;
  propotionRatio: number;
  status: string;
  createdUser: string;
  createdDate: string;
  accountId: number;
}

export interface AccountDocumentDetail {
  id: number;
  version: number;
  documentType: number;
  documentName: string;
  documentCheckListId: number;
  origin?: any;
  recievedDate: string;
  tenantId: string;
  documentId: number;
  mandatoryStatus: string;
  documentStatus: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  status: string;
  accountId: number;
}

export interface AccountATMDetail {
  id: number;
  version: number;
  collectionPointId: number;
  collectionPointName: string;
  widrawalLimit: number;
  tenantId: string;
  isATMEnabled: string;
  schemeTypeId: number;
  schemeType?: any;
  cardTypeId: number;
  cardType?: any;
  nameOnCard: string;
  posEnabled: string;
  foreignTransactionEnabled: string;
  blockTransactions: string;
  remarks?: any;
  cardIssuedDate: string;
  cardExpireDate: string;
  cardNumber: string;
  issuedBy: string;
  cardCollectionType: string;
  cardFeeEnabled: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  status: string;
  accountId: number;
}

export interface AccountPurposeDetail {
  id: number;
  version: number;
  description: string;
  primaryIndicator: string;
  tenantId: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  status: string;
  accountId: number;
  purposeReferenceId: number;
}

export interface AccountSourceOfFund {
  id: number;
  version: number;
  otherRemarks: string;
  description: string;
  tenantId: string;
  primaryIndicator: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  status: string;
  accountId: number;
  sourceOfFundReferenceId: number;
}

export interface AccountOperatingInstruction {
  id: number;
  version: number;
  tenantId: string;
  amountFrom: number;
  amountTo: number;
  modeOfOperation: string;
  noOfSignature: number;
  notes: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  accountId: number;
  eligiblePersonDetails: AccountEligiblePersonDetail[];
}

export interface AccountEligiblePersonDetail {
  id: number;
  version: number;
  accountNo?: any;
  proportion: number;
  tenantId: string;
  personId: number;
  personName: string;
  signatureId?: any;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  operatingInstructionsId: number;
}

export interface AccountRemark {
  id: number;
  version: number;
  casaRemarkForAdditionalAccount?: any;
  casaOtherRemarks: string;
  casaTenant: string;
  casaCreatedUser: string;
  casaCreatedDate: string;
  casaModifiedUser?: any;
  casaModifiedDate?: any;
  casaStatus: string;
  casaAccountId: number;
}

export interface ApplicantDetail {
  id: number;
  version: number;
  casaCustomerId: number;
  casaCustomerCode: string;
  casaOwnershipType: string;
  status: string;
  casaTenant: string;
  casaCraetedUser: string;
  casaCraetedDate: string;
  casaAccountId: number;
  NomineeDetails: NomineeDetail[];
  taxPercentage: number;
  signatureId: number;
  guardianDetail: GuardianDetail[];
}

//! added on 30 sep 2020
export interface FullApplicantDetails {
  id: number;
  version: number;
  signatureDetails: {
    signatureUrl: string;
    signatureType: string;
  };
  customerName: string;
  customerIdentification: string;
  casaCustomerId: number;
  casaCustomerCode: string;
  casaOwnershipType: string;
  status: string;
  casaTenant: string;
  casaCraetedUser: string;
  casaCraetedDate: string;
  casaAccountId: number;
  NomineeDetails: [
    {
      id: number;
      version: number;
      nomineeName: string;
      nomineeIdentification: string;
      customerId: number;
      accountId: null;
      nomineeId: number;
      propotionRatio: number;
      status: string;
      tenantId: string;
      createdUser: string;
      createdDate: string;
      modifiedUser: string;
      modifiedDate: string;
    }
  ];
  taxPercentage: number;
  signatureId: number;
  guardianDetail: [
    {
      id: number;
      version: number;
      guardianName: string;
      guardianIdentification: string;
      tenantId: string;
      guardianId: number;
      status: string;
      createdUser: string;
      createdDate: string;
    }
  ];
}

export interface GuardianDetail {
  id: number;
  version: number;
  tenantId: string;
  guardianId: number;
  status: string;
  createdUser: string;
  createdDate: string;
}

export interface NomineeDetail {
  id: number;
  version: number;
  customerId: number;
  accountId?: any;
  nomineeId: number;
  propotionRatio: number;
  status: string;
  tenantId: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
}

export interface AccountData {
  customerOrganizationType: string; //! added on 6 oct 2020
  id: number;
  version: number;
  customerId: number;
  customerName: string;
  productId: number;
  productCode: string;
  schemeCode: string;
  productCategoryId: number;
  productCategoryCode: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  currencyId: number;
  currencyCode: string;
  accountOpenBranchId: number;
  accountOpenBranchDescription: string;
  accountName: string;
  accountNo: string;
  officerId?: any;
  kycStatus?: any;
  openedDate: string;
  purpose?: any;
  anticipatedFrequencyId: number;
  anticipatedFrequency: string;
  anticipatedValueId: number;
  anticipatedValue: string;
  createdBranchId: number;
  createdBranchDescription: string;
  accountType: string;
  accountPersonTypeId: number;
  nickname: string;
  tenantId: string;
  allowMinusBalance: string;
  maximumOverdraftLimit: number;
  enableInterestOnOverdraft: string;
  isChequeBookEnabled: string;
  nofChequesPerBook?: any;
  autoChequeBookRequestEnabled: string;
  autoChequeBookRequestPeriod?: any;
  autoChequeBookRequestPeriodFrequencyId?: any;
  autoChequeBookRequestPeriodFrequency?: any;
  restrictedStatus: string;
  minorAccountStatus: string;
  accountCancellationDate?: any;
  accountCancelledUserName?: any;
  cancellationNotes?: any;
  accountCancelApprovedUserName?: any;
  accountCloseCreateDate?: any;
  accountCloseCreateUser?: any;
  accountCloseCancelDate?: any;
  accountCloseCancelUser?: any;
  accountCloseDate?: any;
  accountCloseUser?: any;
  accountCloseNotes?: any;
  accountCloseApproveDate?: any;
  accountCloseApproveUser?: any;
  accountReactivatedDate?: any;
  accountPreReactivateStatus?: any;
  accountReactivatedUser?: any;
  accountReactivationNotes?: any;
  accountReactivationApproveUser?: any;
  accountDeactivatedDate?: any;
  accountDreReactivateStatus?: any;
  accountDeactivatedUser?: any;
  accountDeactivationNotes?: any;
  accountDeactivationApproveUser?: any;
  accountBlockDate?: any;
  accountBlockedUser?: any;
  accountBlockNotes?: any;
  accountBlockApproveUser?: any;
  accountDormantDate?: any;
  accountDormantRevicedDate?: any;
  accountDormantRevicedUser?: any;
  accountDormantNotes?: any;
  accountDormantReversalApproveUser?: any;
  accountDormantReversalApproveDate?: any;
  accountApprovedDate?: any;
  accountApprovedUser?: any;
  accountApprovalNotes?: any;
  accountRejectDate?: any;
  accountRejectUser?: any;
  accountRejectNotes?: any;
  currencyNumeric: number;
  subProductCode: string;
  productGroup: string;
  officerName: string;
  maxAllowedCheckBooksPerRequest?: any;
  stopRequest?: any;
  accountSubTypeDescription: string;
  isATMEnabled: string;
  stopPaymentCreateUser?: any;
  stopPaymentCreateDate?: any;
  stopPaymentCreateApprovalUser?: any;
  stopPaymentCreateApprovalDate?: any;
  stopPaymentReversalCreateUser?: any;
  stopPaymentReversalCreateDate?: any;
  stopPaymentReversalApprovedUser?: any;
  stopPaymentReversalApprovedDate?: any;
  stopPaymentCreateNotes?: any;
  stopPaymentReversalNotes?: any;
  accountReactivateApproveDate?: any;
  accountDeactivateApproveDate?: any;
  accountBlockApproveDate?: any;
  enableDisableInterestCalculation: string;
  interestCalculationStartDate: string;
  specialRate?: any;
  specialRateStatus: string;
  blockReversalCreateUser?: any;
  blockReversalCreateDate?: any;
  blockReversalApprovedUser?: any;
  blockReversalApprovedDate?: any;
  bufferAmount: number;
  recoveryPercentage: number;
  accountDescription: string;
  customerVisitRequired: string;
  noOfVisitPerPeriod: number;
  balanceRestrictedStatus: string;
  otherCurrencyTransactionAllowed: string;
  deactivationType?: any;
  accountOpenBranchOrganizationLevelName: string;
  accountCreateBranchOrganizationLevelName: string;
  specialRateApprovedUser?: any;
  specialRateApprovedDate?: any;
  specialRateNotes?: any;
  sweepingEnabled: string;
  sweepingLimit: number;
  minimumAmountForSweeping: number;
  periodMethod: number;
  reversalLimit: number;
  recurringSweepingAllowed: string;
  ownershipType: string;
  productType: string;
  specialRateCreateUser?: any;
  specialRateCreateDate?: any;
  specialRateModifyUser?: any;
  specialRateModifyDate?: any;
  issuedOverdraftLimit?: any;
  overdraftType?: any;
  overdraftStartDate?: any;
  tenor?: any;
  periodType?: any;
  overdraftExpireDate?: any;
  debitTransactionLimit?: any;
  gracePeriodInDays?: any;
  remarks?: any;
  enableAutoRenewal?: any;
  autoRenewalTenor?: any;
  autoRenewalPeriodType?: any;
  renewalLimit?: any;
  nonPerformingCreateUser?: any;
  nonPerformingCreateDate?: any;
  legalCreateUser?: any;
  legalCreateDate?: any;
  recoveryActivateCreateUser?: any;
  recoveryActivateCreateDate?: any;
  accountSettleCreateUser?: any;
  accountSettleCreateDate?: any;
  casaIdentification: string;
  secondaryIdentification: string;
  subProductId: number; //! added 29 sep 2020 changed from casaSubProductId
  casaPurposeId?: any;
  accountOpenBranchOrganizationLevelId: number;
  accountCreateBranchOrganizationLevelId: number;
  chequeTypeId?: any;
  chequeBookTypeId?: any;
  chequeBookStockTypeId?: any;
}

export interface AccountCharge {
  id: number;
  version: number;
  chargeDetailId: number;
  calculationFrequencyCode: string;
  calculationFrequencyName: string;
  applicationFrequencyCode: string;
  applicationFrequencyName: string;
  subProductCode: string;
  feeTypeId: number;
  feeTypeCode: string;
  feeTypeName: string;
  feeCategoryId: number;
  feeCategoryCode: string;
  feeCategoryName: string;
  transactionCodeId: number;
  transactionSubCodeId: number;
  transactionSubCode: string;
  negotiableIndicator: string;
  chargeAmount: number;
  tenantId: string;
  casaCreatedUser: string;
  casaCreatedDate: string;
  casaModifiedUser?: any;
  casaModifiedDate?: any;
  casaStatus: string;
  casaAccountId: number;
}

export interface AccountRemarks {
  id: number;
  version: number;
  casaRemarkForAdditionalAccount: string;
  casaOtherRemarks: string;
  casaTenant: string;
  casaCreatedUser: string;
  casaCreatedDate: string;
  casaModifiedUser?: any;
  casaModifiedDate: string;
  casaStatus: string;
  casaAccountId: number;
}

export interface CommonList {
  id: number;
  version: number;
  accComnListReferenceCode: string;
  accComnListCode: string;
  accComnListDesc: string;
  accComnListTenantId: string;
  accComnListStatus: string;
  accComnListCreateUser: string;
  accComnListCreateDate: string;
  accComnListModifiedUser?: any;
  accComnListModifiedDate?: any;
  accComnListAttribute1?: any;
  accComnListAttribute2?: any;
  accComnListAttribute3?: any;
  accComnListAttribute4?: any;
  accComnListAttribute5?: any;
  type?: number;
  statementId?: number;
}

export interface SourceOfFund {
  id: number;
  version: number;
  description: string;
  tenantId: string;
  primaryIndicator: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  status: string;
  accountId: number;
  sourceOfFundReferenceId: number;
}

export interface Purpose {
  id: number;
  version: number;
  description: string;
  primaryIndicator: string;
  tenantId: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  status: string;
  accountId: number;
  purposeReferenceId: number;
}

export interface AccountSearchRequest extends PaginatedRequest {
  accountName?: string;
  accountNo?: string;
  customerCode?: string;
  customerId?: string;
}

export interface SearchAllAccount extends AccountData, PaginatedRequest {}

export interface AccountResource {
  accountCharges?: Array<AccountCharges>;
  accountCreateBranchOrganizationLevelId: number;
  accountCreateBranchOrganizationLevelName?: string;
  accountDescription?: string;
  accountOpenBranchOrganizationLevelId: number;
  accountOpenBranchOrganizationLevelName?: string;

  accountProductCategoryCode: string;
  accountProductCode: string;
  accountSubType?: number;
  accountType: string;
  balanceRestrictedStatus?: "Yes" | "No";
  bufferAmount?: string;
  casaAccountName?: string;
  casaAccountOpenedDate: string;
  casaAccountRemarks?: Array<AccountRemarksResource>;
  casaAccountSubType: string;
  casaAccountSubTypeId: number;
  casaAccountTypeDescription?: string;
  casaAllowMinusBalance: "Yes" | "No";
  casaAnticipatedFrequencyId: number;
  casaAnticipatedValue: string;
  casaAnticipatedValueId: number;
  casaApplicantDetails: Array<ApplicantDetailsResource>;
  casaAtmDetails?: Array<ATMCardDetailsResource>;
  casaAutoChequeBookRequestEnabled?: "Yes" | "No";
  casaAutoChequeBookRequestPeriod?: string;
  casaAutoChequeBookRequestPeriodFrequency?: "Day" | "Week" | "Month" | "Year";
  casaCreatedBranch: number;
  casaCurrency: number;
  casaCurrencyCode: string;
  casaCurrencyNumeric: number;
  casaCustomer: number;
  casaEnableDisableInterestCalculation: "Yes" | "No";
  casaEnableInterestOnOverdraft?: "Yes" | "No";
  casaIntroducerDetails?: Array<IntroducerDetailsResource>;
  casaIsATMEnabled?: "Yes" | "No";
  casaIsChequeBookEnabled: "Yes" | "No";
  casaKycStatus: "Yes" | "No";
  casaMaxAllowedCheckBooksPerRequest: number;
  casaMaxOverdraftLimit?: number;
  casaMinorAccountStatus:
    | "Minor with restrictions"
    | "Minor without restrictions";
  casaNickName?: string;
  casaNoOfChequesPerBook?: number;
  casaNomineeDetails?: Array<NomineeDetailsResource>;
  casaOfficerName: string;
  casaOpenBranch: number;
  casaOperationInstructionsDetails?: Array<OperationInstructionsResources>;
  casaOwnershipType:
    | "SOLE OWNER"
    | "JOINT AND FIRST"
    | "JOINT AND OTHER"
    | "DELIGATE";
  casaProduct: number;
  casaProductCategory: number;
  casaRestrictedStatus: "Yes" | "No";
  casaSchemeCode: string;
  casaSourceOfFundsDetails?: Array<SourceOfFundsResource>;
  casaStatementStatus?: Array<AddStatementStatusResource>;
  casaStopRequest: string;
  casaSubProductCode: string;
  casaSubProductId: number;
  checkBookcategory?: string;
  chequeBookStockTypeId?: number;
  chequeBookTypeId?: number;
  chequeTypeId?: number;
  customerVisitRequired: "Yes" | "No";
  documentDetails?: Array<DocumentsResource>;
  draftId?: number;
  interestCalculationStartDate?: string;
  interestDetails?: Array<InterestDetailsResource>;
  minimumAmountForSweeping?: number;
  noOfVisitPerPeriod?: number;
  notificationDetails?: Array<NotificationDetailsResource>;
  officerId: number;
  otherCurrencyTransactionAllowed: "Yes" | "No";
  overdraftAgreementDetails?: OverdraftAgreementDetailsResource;
  overdraftDetails?: Array<OverDraftDetailsResource>;
  periodMethod?: number;
  productType: string;
  purposeDetails?: Array<PurposeResource>;
  recoveryAccountId?: string;
  recoveryPercentage?: number;
  recurringSweepingAllowed?: "Yes" | "No";
  reversalLimit?: number;
  secondaryAccountNo?: string;
  specialRate?: string;
  sweepingEnabled: "Yes" | "No";
  sweepingLimit?: number;
}

export interface AddStatementStatusResource {
  createdUser?: string;
  deliveryFrequency: string;
  deliveryFrequencyDesc: string;
  deliveryMethod: string;
  deliveryMethodDescription: string;
  remarks?: string;
  status: "ACTIVE" | "INACTIVE";
  type: string;
  typeDescription: string;
}

export interface OverdraftAgreementDetailsResource {
  autoRenewalPeriodType?: number;
  autoRenewalTenor?: number;
  debitTransactionLimit?: number;
  enableAutoRenewal?: "Yes" | "No";
  gracePeriodInDays?: number;
  overdraftStartDate: string;
  overdraftType: "Permanenant" | "Periodic";
  periodType?: number;
  remarks?: string;
  renewalLimit?: number;
  tenor: number;
}

export interface ATMCardDetailsResource {
  blockTransactions: "Yes" | "No";
  cardCollectionType: "Branch" | "Post";
  cardExpireDate: string;
  cardFeeEnabled: "Yes" | "No";
  cardIssuedDate: string;
  cardNumber: string;
  cardType: string;
  cardTypeId: number;
  collectionPoint: string;
  collectionPointId: string;
  foreignTransactionEnabled: "Yes" | "No";
  issuedBy: string;
  nameOnCard: string;
  posEnabled: "Yes" | "No";
  remarks?: string;
  schemeType: string;
  schemeTypeId: number;
  status: "ACTIVE";
  widrawalLimit: number;
}
export interface AccountCharges {
  chargeAmount?: number;
  feeTypeCode?: string;
}
export interface AccountRemarksResource {
  casaOtherRemarks?: string;
  casaRemarkForAdditionalAccount?: string;
  casaStatus?: string;
}

export interface ApplicantDetailsResource {
  casaAccountRole?: string;
  casaApplicantStatus?: "ACTIVE";
  casaBeneficialOwnership?: string;
  casaCustomerCode: string;
  casaCustomerId: number;
  casaCustomerName: string;
  casaFullLegalName: string;
  casaOwnershipType:
    | "SOLE OWNER"
    | "JOINT AND FIRST"
    | "JOINT AND OTHER"
    | "DELIGATE";
  guardianDetail?: Array<GuardianResource>;
  signatureId?: number;
  taxPercerntage: number;
}

export interface GuardianResource {
  guardianId: number;
  guardianName: string;
  curRelationshipTypeDesc?: string;
  primaryIdentificationNumber?: string | number;
}
export interface IntroducerDetailsResource {
  casaBenefitPercentage: number;
  casaIntroducerCategoryId: number;
  casaIntroducerCode?: string;
  casaIntroducerStatus: "ACTIVE";
}
export interface NomineeDetailsResource {
  casaCustomerId: number;
  casaNomineeId: number;
  casaNomineeName: string;
  casaNomineeStatus: string;
  casaPropotionRatio: string;
  identification?: string;
}
export interface OperationInstructionsResources {
  casaAmountFrom?: string;
  casaAmountTo?: string;
  casaModelOfOperation?: string;
  casaNoOfSignatures?: string;
  casaNotes?: string;
  casaStatus?: string;
  eligiblePersonDetails?: Array<OperatingInstructionsDetailResource>;
}

export interface UpdateOperationInstructionsResources {
  casaStatus?: "ACTIVE" | "INACTIVE";
  eligiblePersonDetails?: EligiblePersonDetail[];
  version: number;
}

export interface EligiblePersonDetail {
  proportion?: number;
  eligiblePersonId?: number;
  signatureId?: number;
  status?: "ACTIVE" | "INACTIVE";
}
export interface SourceOfFundsResource {
  casaSourceOfFundDescription: string;
  casaSourceOfFundId: number;
  casaStatus: "ACTIVE";
  otherRemarks: string;
  primaryIndicator: "Yes" | "No";
}
export interface UpdateInterestDetailsResource {
  status: string;
  version: string;
}

//! changed on 25 sep 2020
export interface DocumentsResource {
  documentList: [
    {
      fileDownloadUri: string;
      fileName: string;
      fileType: string;
      id: number;
      size: number;
    }
  ];
  documentName?: string;
  documentStatus: "Received" | "Not Received" | "Removed";
  documentType: number;
  mandatoryStatus: "Yes" | "No";
  // origin:string;
  // checkListId:string;
  // checkPoint: "KYC" | "ACCOUNT OPENING";
  // imagePath: string;
  recievedDate: string;
  status: "ACTIVE";
}

export interface DocumentsUpdateResource {
  documentId: number;
  documentStatus?: "Received" | "Not Received" | "Removed";
  mandatoryStatus?: "Yes" | "No";
  checkPoint?: "KYC" | "ACCOUNT OPENING";
  version: number;
  status?: "ACTIVE" | "INACTIVE";
}

export interface InterestDetailsResource {
  casaIdentification?: string;
  bankBranchId?: number;
  bankBranchName?: string;
  bankId?: number;
  bankName?: string;
  beneficiaryId?: number;
  beneficiaryName?: string;
  crebitInterestPostAccount?: string;
  crebitInterestPostType?: "Self" | "Other" | "";
  debitInterestPostAccount?: string;
  debitInterestPostType?: "Self" | "Other" | "";
  otherPostingMethod?: "External" | "Internal";
  otherPostingMethodId?: number;
  paymentModeDescription?: string;
  paymentModeId?: number;
  paymentSendMethod?: string;
  paymentSendMethodId?: number;
  propotionRatio?: number;
  status?: string; //! changed "ACTIVE" | "INACTIVE";
}
export interface OverDraftDetailsResource {
  accountName: string;
  accountNo: string;
  casaStatus?: "ACTIVE" | "INACTIVE";
  propotion: number;
}
export interface NotificationDetailsResource {
  addressId?: number;
  addressType?: number;
  contactType?: number;
  customerId: number;
  alertDetail: AlertDetails[];
  notificationTypes?: string;
  status?: string;
  contactId?: number;
}

export interface AlertDetails {
  id?: string; // Added this to handle remove item from list
  eventCategory?: "Transactional" | "Promotional";
  alertEvent?: string;
  transactionLimit?: number;
  status?: "ACTIVE" | "INACTIVE";
}
export interface PurposeResource {
  casaPurposeDescription: string;
  casaPurposeId: number;
  casaStatus: string;
  primaryIndicator: "Yes" | "No";
}
export interface OperatingInstructionsDetailResource {
  accountNo: string;
  personId: number;
  personName?: string;
  proportion: number;
  signatureId: number;
  status?: "ACTIVE";
  casaAmountFrom?: number;
  casaAmountTo?: number;
  casaModelOfOperation?: string;
}

export interface SpecialRateDetailsResource {
  notes?: string;
  specialRate: string;
}

export interface UpdateAccountResourceCreated {
  casaOperationInstructionsDetails?: any[];
  accountDescription?: string; //!3- basic account details
  accountOpenBranchOrganizationLevelId: number;
  accountOpenBranchOrganizationLevelName?: string;
  accountPersonType?: string;
  balanceRestrictedStatus?: "Yes" | "No"; //!3- control
  bufferAmount?: number;
  casaAccountName?: string; //!3- basic account details
  casaAccountOpenedDate?: string;
  casaAllowMinusBalance?: "Yes" | "No";
  casaAnticipatedFrequencyId: number; //!3- basic account details
  casaAnticipatedValue?: string; //!3- basic account details
  casaAnticipatedValueId: number; //!3- basic account details
  casaAutoChequeBookRequestEnabled?: "Yes" | "No";
  casaAutoChequeBookRequestPeriod?: number;
  casaAutoChequeBookRequestPeriodFrequency?: "Day" | "Week" | "Month" | "Year";
  casaCreditInterestPostingAccount?: string;
  casaCreditInterestPostingType?: "Self" | "Other";
  casaCurrencyNumeric?: number;
  casaCustomer?: number;
  casaDebitInterestPostingAccount?: string;
  casaDebitInterestPostingType?: "Self" | "Other";
  casaEnableDisableInterestCalculation?: "Yes" | "No";
  casaEnableInterestOnOverdraft?: "Yes" | "No";
  casaInterestCalculationStartDate?: string;
  casaIsATMEnabled?: string;
  casaIsChequeBookEnabled: "Yes" | "No";
  casaKycStatus?: "Yes" | "No";
  casaMaxAllowedCheckBooksPerRequest?: number;
  casaMaxOverdraftLimit?: number;
  casaMinorAccountStatus?: //!3- control
  "Minor with restrictions" | "Minor without restrictions";
  casaNickName?: string; //!3- basic account details
  casaNoOfChequesPerBook?: number;
  casaOfficerName?: string;
  casaOpenBranch?: number;
  casaOwnershipType?:
    | "SOLE OWNER"
    | "JOINT AND FIRST"
    | "JOINT AND OTHER"
    | "DELIGATE";
  casaProductGroup?: string;
  casaRestrictedStatus?: "Yes" | "No"; //!3- control
  casaStopRequest?: "Yes" | "No";
  casaSubProductId?: number;
  chequeBookStockTypeId?: number;
  chequeBookTypeId?: number;
  chequeTypeId?: number;
  customerVisitRequired?: "Yes" | "No";
  minimumAmountForSweeping?: number;
  noOfVisitPerPeriod?: number;
  otherCurrencyTransactionAllowed?: "Yes" | "No"; //!3- control
  periodMethod?: number;
  recoveryPercentage?: number;
  recurringSweepingAllowed?: "Yes" | "No";
  reversalLimit?: number;
  specialRate?: number;
  sweepingEnabled: "Yes" | "No";
  sweepingLimit?: number;
  version: number;
  notificationDetails: any;
}

//! removed casa from front of the name
export interface UpdateAccountResourceApproved {
  accountName?: string;
  allowMinusBalance?: "Yes" | "No";
  anticipatedFrequencyId?: number;
  anticipatedValue?: string;
  anticipatedValueId?: number;
  autoChequeBookRequestEnabled?: "Yes" | "No";
  autoChequeBookRequestPeriod?: number;
  autoChequeBookRequestPeriodFrequency?: "Day" | "Week" | "Month" | "Year";
  crebitInterestPostAccount?: string;
  casaOwnershipType?: string;
  casaAccountName?: string;
  casaNickName?: string;
  casaAnticipatedFrequencyId?: number;
  crebitInterestPostType?: "Self" | "Other";
  debitInterestPostAccount?: string;
  debitInterestPostType?: "Self" | "Other";
  casaEmailEnabled?: "Yes" | "No";
  enableDisableInterestCalculation?: "Yes" | "No";
  enableInterestOnOverdraft?: "Yes" | "No";
  interestCalculationStartDate?: string;
  isATMEnabled?: string;
  isChequeBookEnabled?: "Yes" | "No";
  kycStatus?: "YES" | "NO";
  maxAllowedCheckBooksPerRequest?: number;
  maximumOverdraftLimit?: number;
  minorAccountStatus?: "Minor with restrictions" | "Minor without restrictions";
  nickName?: string;
  nofChequesPerBook?: number;
  officerName?: string;
  ownershipType?:
    | "SOLE OWNER"
    | "JOINT AND FIRST"
    | "JOINT AND OTHER"
    | "DELIGATE";
  casaPurpose?: number;
  restrictedStatus?: "Yes" | "No";
  casaSMSEnabled?: "Yes" | "No";
  casaStatementDeliveryMethod?: "POST" | "EMAIL" | "E-STATEMENT";
  casaStatementStatus?: "Statement" | "Passbook";
  stopRequest?: "Yes" | "No";
  chequeBookStockTypeId?: number;
  chequeBookTypeId?: number;
  chequeTypeId?: number;
  minimumAmountForSweeping?: number;
  otherCurrencyTransactionAllowed?: string;
  periodMethod?: number;
  recurringSweepingAllowed?: "Yes" | "No";
  reversalLimit?: number;
  specialRate?: number;
  sweepingEnabled?: "Yes" | "No";
  sweepingLimit?: number;
  version: number;
}

export interface AccountHelperResource {
  hasApproval?: string;
  note?: string;
}

export interface AccountCloseDetResource {
  accountNoId: number;
  actualAmount: number;
  balanceAmount: number;
  bonusInterestAmount: number;
  charges: ChargeAddResource[];
  creditInterestAmount: number;
  id?: number;
  overdraftInterestAmount: number;
  remark: string;
  tenantId?: string;
  totalChargeAmount: number;
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

export interface AccountCloseCreateTaxResource {
  closeAccountTaxId: string;
  taxAmount: string;
  taxDescription: string;
}

export interface AccountCloseResource {
  id?: string;
  remark?: string;
  version: string;
}

export interface CommonListResource {
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  code: string;
  description: string;
  referenceCode: string;
  status: string;
}

export interface UpdateCommonListResource {
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  code?: string;
  description?: string;
  referenceCode?: string;
  status?: string;
  version: string;
}

export interface DocumentCheckListResource {
  accountSubtype: string;
  accountType: string;
  customerSubType?: string;
  customerSubTypeDescription?: string;
  docCheckListversion?: string;
  documentCheckListStatus: string;
  productAll?: string;
  productCategory: string;
  productCategoryDescription: string;
  productCode?: string;
  productCodeDescription?: string;
}

export interface DocumentCheckList {
  id: number;
  version: number;
  tenantId: string;
  productCategory: number;
  accountType: string;
  accountSubType: string;
  customerSubType: number;
  productAll: string;
  productCode?: any;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
}

//! added on 22 sep 2020
export interface DocumentChecklistDetails {
  accountSubType: string;
  accountType: string;
  checkListDetail: checkListDetailResource[];
  createdDate: string;
  createdUser: string;
  customerSubType: number;
  id: number;
  modifiedDate: string;
  modifiedUser: string;
  productAll: string;
  productCategory: number;
  productCode: number;
  status: string;
  tenantId: string;
  version: number;
}
//! added on 22 sep 2020
export interface checkListDetailResource {
  applicableLevel: string;
  createdDate: string;
  createdUser: string;
  documentTypeCode: string;
  documentTypeDescription: string;
  documentCheckListId: number;
  documentTypeId: number;
  id: number;
  mandatoryIndicator: string;
  modifiedDate: null;
  modifiedUser: null;
  status: string;
  tenantId: string;
  version: number;
}

export interface AccountDraftResponse {
  id: number;
  version: number;
  draftAccount: DraftAccount;
  tenantId: string;
  customerId: number;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface DraftAccount {
  customerId: string;
  draft: Draft;
}

export interface Draft {
  casaCustomer: string;
  casaProduct: string;
  casaProductCategory: string;
  casaAccountSubType: string;
  casaSchemeCode: string;
  casaCurrency: string;
  casaOpenBranch: string;
  casaAccountName: string;
  casaOfficerName: string;
  casaKycStatus: string;
  casaAnticipatedFrequencyId: string;
  casaAnticipatedValueId: string;
  casaAnticipatedValue: string;
  casaCreatedBranch: string;
  productType: string;
  accountType: string;
  casaAccountSubTypeId: string;
  casaNickName: string;
  casaAllowMinusBalance: string;
  casaMaxOverdraftLimit: string;
  casaEnableInterestOnOverdraft: string;
  interestCalculationStartDate: string;
  casaEnableDisableInterestCalculation: string;
  casaIsChequeBookEnabled: string;
  casaNoOfChequesPerBook: string;
  casaAutoChequeBookRequestEnabled: string;
  casaAutoChequeBookRequestPeriod: string;
  casaAutoChequeBookRequestPeriodFrequency: string;
  casaMinorAccountStatus: string;
  casaAccountOpenedDate: string;
  casaCurrencyCode: string;
  casaCurrencyNumeric: number;
  accountProductCode: string;
  accountProductCategoryCode: string;
  casaSubProductId: number;
  casaSubProductCode: string;
  casaMaxAllowedCheckBooksPerRequest: number;
  casaStopRequest: string;
  casaProductGroup: string;
  casaRestrictedStatus: string;
  casaAccountTypeDescription: string;
  casaIsATMEnabled: string;
  bufferAmount: number;
  recoveryPercentage: number;
  customerVisitRequired: string;
  noOfVisitPerPeriod: number;
  otherCurrencyTransactionAllowed: string;
  accountOpenBranchOrganizationLevelName: string;
  accountCreateBranchOrganizationLevelId: string;
  accountCreateBranchOrganizationLevelName: string;
  sweepingEnabled: string;
  sweepingLimit: number;
  minimumAmountForSweeping: string;
  periodMethod: number;
  reversalLimit: number;
  recurringSweepingAllowed: string;
  specialRate: number;
  secondaryAccountNo: string;
  casaOwnershipType: string;
  accountCharges: Array<AccountCharges>;
  casaAccountRemarks: Array<AccountRemarksResource>;
  casaApplicantDetails: Array<ApplicantDetailsResource>;
  casaNomineeDetails: Array<NomineeDetailsResource>;
  casaSourceOfFundsDetails: Array<SourceOfFundsResource>;
  casaOperationInstructionsDetails: Array<OperationInstructionsResources>;
  documentDetails: Array<DocumentsResource>;
  purposeDetails: Array<PurposeResource>;
  overdraftDetails: Array<OverDraftDetailsResource>;
  notificationDetails: Array<NotificationDetailsResource>;
  interestDetails: Array<InterestDetailsResource>;
}

export enum AccountCloseStatus {
  CLOSE_PENDING = "CLOSE_PENDING",
  CLOSE_CANCELLED = "CLOSE_CANCELLED",
  APPROVED_FINAL_WITHDRAWAL = "APPROVED_FINAL_WITHDRAWAL",
  CLOSED = "CLOSED",
}

export interface AccountCloseResponse {
  id: number;
  version: number;
  tenantId: string;
  accountNoId: number;
  balanceAmount: number;
  actualAmount: number;
  interestAmount: number;
  bonusInterestAmount: number;
  odInterestAmount: number;
  totalTaxAmount: string;
  totalChargeAmount: number;
  remark: string;
  cancelledRemark: string;
  status: string;
  accountCloseCreatedUser: string;
  accountCloseCreatedDate: string;
  accountCloseCancelledUser: string;
  accountCloseCancelledDate: string;
  finalWithdrawalApprovalUser: string;
  finalWithdrawalApprovalDate: string;
  accountCloseUser: string;
  accountCloseDate: string;
  accountCloseRefNo: string;
  accountCloseChargeDet: AccountCloseChargeDet[];
}

export interface AccountCloseChargeDet {
  id: number;
  version: number;
  tenantId: string;
  chargeType: string;
  processingType: string;
  feeChargeDetailId: number;
  feeCategoryId: number;
  feeCategoryCode: string;
  feeTypeId: number;
  feeTypeCode: string;
  amount: number;
  feeRate: string;
  feeIndicator: string;
  deductIndicator: string;
  transactionId?: string;
  transferId?: string;
  note?: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  finalWithdrawalApprovalUser?: string;
  finalWithdrawalApprovalDate?: string;
  accountCloseUser: string;
  accountCloseDate: string;
}

export interface AtmCardDetailsResource {
  ATMDetails: ATMDetail[];
}

export interface ATMDetail {
  blockTransactions: "Yes" | "No";
  cardCollectionType: "Branch" | "Post";
  cardExpireDate: string;
  cardFeeEnabled: "Yes" | "No";
  cardIssuedDate: string;
  cardNumber: string;
  cardType: string;
  cardTypeId: number;
  collectionPoint: string;
  collectionPointId: number;
  foreignTransactionEnabled: "Yes" | "No";
  issuedBy: string;
  nameOnCard: string;
  posEnabled: "Yes" | "No";
  remarks: string;
  schemeType: string;
  schemeTypeId: number;
  status: "ACTIVE";
  widrawalLimit: number;
}

export interface OverdraftDetails {
  accountName: string;
  accountNo: string;
  casaStatus?: string;
  propotion?: string;
}
