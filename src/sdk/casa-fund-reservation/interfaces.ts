
export interface AccountFundReservation {
    id: number;
    accountSchemeName: string;
    accountId: string;
    accountNo: string;
    accountName: string;
    accountCurrencyId: number;
    accountCurrencyCode: string;
    accountCurrencyNumeric: string;
    fundReservations: FundReservation[];
}

export interface FundReservation {
    id: number;
    fureAmount: number;
    fureStartDate: string;
    fureExpiryDate: string;
    fureTypeCommonListId: number;
    fureTypeDesc: string;
    fureRemark: string;
    furePriority: number;
    fureAllowForceDebit: string;
    fureStatus: string;
    fureCancellationRemark: string;
    fureCreatedUser: string;
    fureCreatedDate: string;
    fureModifiedUser: string;
    fureModifiedDate: string;
    fureLastApprovedUser: string;
    fureLastApprovedDate: string;
    fureCancelledUser: string;
    fureCancelledDate: string;
    version: number;
}

export interface FundReservationSaveRequest {
    accountSchemeName: string;
    accountId: string;
    accountNo: string;
    accountName: string;
    accountCurrencyId: number;
    accountCurrencyCode: string;
    accountCurrencyNumeric: string;
    subProductId: string;
    subProductIdentification: string;
    fureAmount: number;
    fureStartDate: string;
    fureExpiryDate: string;
    fureTypeCommonListId: number;
    fureTypeDesc: string;
    fureRemark: string;
    furePriority: number;
    fureAllowForceDebit: string;
    fureCreatedUser: string;
}

export interface FundReservationUpdateRequest {
    FundReservationSaveRequest: string;
    accountId: string;
    accountNo: string;
    accountName: string;
    accountCurrencyId: number;
    accountCurrencyCode: string;
    accountCurrencyNumeric: string;
    subProductId: string;
    subProductIdentification: string;
    fureAmount: number;
    fureStartDate: string;
    fureExpiryDate: string;
    fureTypeCommonListId: number;
    fureTypeDesc: string;
    fureRemark: string;
    furePriority: number;
    fureAllowForceDebit: string;
    fureModifiedUser: string;
}