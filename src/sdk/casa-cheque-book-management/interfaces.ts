
export interface ChequeBookStockType {
    id: number;
    version: number;
    tenantId: string;
    chqBkStockTypeCode: string;
    chqBkStockTypeName: string;
    chqBkStockTypeDescription: string;
    chqBkLeafs: number;
    chqBkTypeStatus: string;
    createdUser: string;
    createdDate: string;
    modifiedUser?: any;
    modifiedDate?: any;
}

export interface AddChequeBookStockTypesRequestResource {
    chqBkLeafs?: string;
    chqBkStockTypeCode?: string;
    chqBkStockTypeDescription?: string;
    chqBkStockTypeName?: string;
    chqBkTypeStatus?: string;
    createdUser?: string;
}

export interface UpdateChequeBookStockTypesRequestResource {
    chqBkLeafs?: string;
    chqBkStockTypeCode?: string;
    chqBkStockTypeDescription?: string;
    chqBkStockTypeName?: string;
    chqBkTypeStatus?: string;
    modifiedUser?: string;
    version?: string;
}

export interface ClearingType {
    id: number;
    version: number;
    tenantId: string;
    code: string;
    name: string;
    description: string;
    category: string;
    status: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
}

export interface AddClearingType {
    category?: string;
    code?: string;
    description?: string;
    name?: string;
    status?: string;
    tenantId?: string;
}

export interface ClearingTypeUpdateRequest {
    code: string;
    name: string;
    description: string;
    category: string;
    status: string;
    version: number;
}

export interface ChequeReturnReason {
    id: number;
    version: number;
    tenantId: string;
    reasonCode: string;
    reasonName: string;
    reasonDescription: string;
    reasonStatus: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
    reasonCategory: number;
}

export interface ChequeReturnReasonResource {
    reasonCode?: string;
    reasonName?: string;
    reasonDescription?: string;
    reasonStatus?: string;
    reasonCategory?: string;
}

export interface ChequeReturnReasonUpdateResource {
    reasonCategory?: string;
    reasonCode?: string;
    reasonDescription?: string;
    reasonName?: string;
    reasonStatus?: string;
    version?: string;
}

export interface ChequeReturnReasonCategory {
    id: number;
    version: number;
    tenantId: string;
    categoryCode: string;
    categoryName: string;
    categoryDescription: string;
    categoryStatus: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
}

export interface ChequeReturnCatogeyResource {
    categoryCode?: string;
    categoryName?: string;
    categoryDescription?: string;
    categoryStatus?: string;
}

export interface ChequeReturnCatogeyUpdateResource {
    version?: number;
    categoryCode?: string;
    categoryName?: string;
    categoryDescription?: string;
    categoryStatus?: string;
}

export interface ChequeWithdrawActionReason {
    id: number;
    version: number;
    tenantId: string;
    reasonCode: string;
    reasonName: string;
    reasonDescription: string;
    reasonStatus: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
}

export interface ChequeWithdrawalActionReasonResource {
    reasonCode?: string;
    reasonName?: string;
    reasonDescription?: string;
    reasonStatus?: string;
}

export interface ChequeWithdrawalActionReasonUpdateResource {
    version?: number;
    reasonCode?: string;
    reasonName?: string;
    reasonDescription?: string;
    reasonStatus?: string;
}

export interface ChequebookCharge {
    id: number;
    version: number;
    code: string;
    tenantId: string;
    productId: number;
    productName: string;
    subProductId: number;
    subProductName: string;
    effectiveDate: string;
    applicationMethod: string;
    applicationLevel: string;
    status: string;
    reasonCode: string;
    reasonDesc: string;
    notes: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
}

export interface ChequebookChargeDetailedResponse extends ChequebookCharge {
    chequeBookFeeChargeDetails: ChequeBookFeeChargeDetail[];
}

export interface ChequeBookFeeChargeDetail {
    id: number;
    version: number;
    code: string;
    tenantId: string;
    feeCategoryId: number;
    feeCategoryName: string;
    feeTypeId: number;
    feeTypeName: string;
    negotiableIndicator: string;
    feeAmount: number;
    maxNegotiableAmount: number;
    minNegotiableAmount: number;
    status: string;
    notes: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
}

export interface AddChequeBookFeeChargeRequestResource {
    applicationLevel?: string;
    applicationMethod?: string;
    caclDesc?: string;
    chequeBookStockTypeId?: string;
    chequeBookStockTypeName?: string;
    chequeBookTypeId?: string;
    chequeBookTypeName?: string;
    createdUser?: string;
    effectiveDate?: string;
    notes?: string;
    productDesc?: string;
    productId?: string;
    productName?: string;
    reasonCode?: string;
    reasonCodeId?: string;
    reasonDesc?: string;
    status?: string;
    statusType?: string;
    subProductCode?: string;
    subProductId?: string;
    subProductName?: string;
}

export interface UpdateChequeBookFeeChargeRequestResource {
    applicationLevel?: string;
    applicationMethod?: string;
    caclDesc?: string;
    chequeBookStockTypeId?: string;
    chequeBookStockTypeName?: string;
    chequeBookTypeId?: string;
    chequeBookTypeName?: string;
    effectiveDate?: string;
    modifiedUser?: string;
    notes?: string;
    productDesc?: string;
    productId?: string;
    productName?: string;
    reasonCode?: string;
    reasonCodeId?: string;
    reasonDesc?: string;
    status?: string;
    statusType?: string;
    subProductCode?: string;
    subProductId?: string;
    subProductName?: string;
    version?: string;
}

export interface AddChequeBookRequest {
    accountCurrencyCode?: string;
    accountCurrencyId?: string;
    accountCurrencyNumericId?: string;
    accountId?: string;
    accountIdentification?: string;
    accountSchemeName?: string;
    chequeBookDetails?: ChequeBookDetails;
    dispatchDetails?: DispatchDetails;
    requestedUser?: string;
}

export interface DispatchDetails {
  addressId?: string;
  addressType?: string;
  branchCode?: string;
  branchId?: string;
  dispatchToFlag?: string;
  organizationLevel?: string;
  organizationLevelId?: string;
}

export interface ChequeBookDetails {
  chequeBookSrlNo: string;
  chequeBookType: string;
  chequeType: string;
  chequeTypeId: string;
  noOfChequeBooks: string;
  noOfChequeLeaves: string;
  noOfChequeLeavesId: string;
}

export interface IssuedChequeBook {
    id: number;
    version: string;
    tenantId: string;
    accountId: string;
    customerId: string;
    accountSchemeName: string;
    accountIdentification: string;
    accountCurrencyId: string;
    accountCurrencyCode: string;
    accountCurrencyNumericId: string;
    chequeBookReqNo: string;
    chequeBookSrlNo: string;
    chequeBookType: string;
    chequeStartNo: string;
    chequeEndNo: string;
    noOfChequeLeaves: string;
    chequeType: string;
    instrumentType: string;
    dispatchToFlag: string;
    branchCode: string;
    branchId: string;
    chequeTransacionCode: string;
    smallClearingAcNo: string;
    generateHandoff: string;
    chequeBookChargeTypeId: string;
    chequeBookChargeType: string;
    chequeBookChargeAmount: string;
    waiveServiceCharge: string;
    chequeBookIssueDate: string;
    chequeBookStatus: string;
    chequeLeavesStatus: string;
    issuedBy: string;
    issuedDate: string;
    stopedBy: string;
    stopedTRemark: string;
    stopedDate: string;
    canceledUser: string;
    canceledRemark: string;
    canceledDate: string;
    approvedBy: string;
    approvedDate: string;
}

export interface AddIssuedChequeBook {
    accountCurrencyCode?: string;
    accountCurrencyId?: string;
    accountCurrencyNumericId?: string;
    accountId?: string;
    accountIdentification?: string;
    accountSchemeName?: string;
    charges?: Array<{
        applicationLevel?: string;
        applicationMethod?: string;
        chequeBookChargeAmount?: string;
        chequeBookChargeType?: string;
        feeTypeId?: string;
        reasonCode?: string;
        statusType?: string;
        waiveServiceCharge?: string;
    }>;
    chequeBookDetails?: IssuedChequeBookResource;
    chequeBookReqNo?: string;
    customerId?: string;
    issuedBy?: string;
}

export interface IssuedChequeBookResource {
    branchCode?: string;
    branchId?: string;
    chequeBookIssueDate?: string;
    chequeBookReqNo?: string;
    chequeBookSrlNo?: string;
    chequeBookStatus?: string;
    chequeBookType?: string;
    chequeEndNo?: string;
    chequeLeavesStatus?: string;
    chequeStartNo?: string;
    chequeTransacionCode?: string;
    chequeType?: string;
    chequeTypeId?: string;
    dispatchToFlag?: string;
    generateHandoff?: string;
    instrumentType?: string;
    noOfChequeLeaves?: string;
    noOfChequeLeavesId?: string;
    smallClearingAcNo?: string;
}

export interface CheckbookChargeResponse {
    id: number;
    version: number;
    code: string;
    tenantId: string;
    productId: number;
    productName: string;
    subProductId: number;
    subProductName: string;
    effectiveDate: string;
    applicationMethod: string;
    applicationLevel: string;
    status: string;
    reasonCode: string;
    reasonDesc: string;
    notes: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
    chequeBookFeeChargeDetails: ChequeBookFeeChargeDetail[];
}

export interface AddChequeBookTypesRequestResource {
    chequeBookTypeCode?: string;
    chequeBookTypeDescription?: string;
    chequeBookTypeName?: string;
    chequeBookTypeStatus?: string;
    chequeStockCategoryDescription?: string;
    chequeStockCategoryId?: string;
    createdUser?: string;
}

export interface UpdateChequeBookTypesRequestResource {
    chequeBookTypeCode?: string;
    chequeBookTypeDescription?: string;
    chequeBookTypeName?: string;
    chequeBookTypeStatus?: string;
    chequeStockCategoryDescription?: string;
    chequeStockCategoryId?: string;
    modifiedUser?: string;
    version?: string;
}

export interface ChequebookType {
  id: number;
  version: number;
  tenantId: string;
  chequeBookTypeCode: string;
  chequeBookTypeName: string;
  chequeBookTypeDescription: string;
  chequeStockCategoryId: number;
  chequeBookTypeStatus: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
}

export interface ClearingHouseDetails {
  id: number;
  version: number;
  tenantId: string;
  code: string;
  name: string;
  description: string;
  branchId: number;
  branchAllocationStatus: string;
  branchName: string;
  organizationLevelId: number;
  organizationLevelName: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  clearingHouseTimeTableDetails?: ClearingHouseTimeTableDetail[];
}

export interface ClearingHouseTimeTableDetail {
  id: number;
  version: number;
  tenantId: string;
  clearingTypeName: string;
  clearingMethod: string;
  windowOpenTime: string;
  windowCloseTime: string;
  windowCloseTimeType: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
}

export interface AddClearingHouseDetailsRequestResource {
    branchAllocationStatus?: string;
    branchId?: string;
    branchName?: string;
    code?: string;
    createdUser?: string;
    description?: string;
    name?: string;
    organizationLevelId?: string;
    organizationLevelName?: string;
    status?: string;
    timeTableDetails?: Array<AddClearingHouseTimeTableDetailsRequestResource>;
}

export interface AddClearingHouseTimeTableDetailsRequestResource {
    clearingHouseDetailsId?: string;
    clearingMethod?: string;
    clearingTypeId?: string;
    clearingTypeName?: string;
    createdUser?: string;
    status?: string;
    windowCloseTime?: string;
    windowCloseTimeType?: string;
    windowOpenTime?: string;
}

export interface UpdateClearingHouseDetailsRequestResource {
    branchAllocationStatus?: string;
    branchId?: string;
    branchName?: string;
    code?: string;
    description?: string;
    modifiedUser?: string;
    name?: string;
    organizationLevelId?: string;
    organizationLevelName?: string;
    status?: string;
    timeTableDetails?: Array<AddClearingHouseTimeTableDetailsRequestResource>;
    version?: string;
}

export interface ChequebookRequest {
  id: number;
  version: number;
  tenantId: string;
  accountId: string;
  customerId: string;
  accountSchemeName: string;
  accountIdentification: string;
  accountCurrencyId: number;
  accountCurrencyCode: string;
  accountCurrencyNumericId: number;
  subProductId: number;
  productId: number;
  noOfChequeBooks: number;
  noOfChequeLeaves: number;
  noOfChequeLeavesId: number;
  chequeType: string;
  chequeTypeId: number;
  chequeBookType: string;
  dispatchToFlag: string;
  addressType: string;
  addressId: number;
  branchCode: string;
  branchId: number;
  chequeBookStatus: string;
  requestedUser: string;
  requestedDate: string;
  canceledUser?: any;
  canceledRemark?: any;
  canceledDate?: any;
  completedUser?: any;
  completedDate?: any;
  completedRemark?: any;
  organizationLevelId?: any;
  organizationLevel?: any;
}