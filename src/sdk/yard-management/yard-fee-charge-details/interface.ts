export interface YardFeeChargeDetails {
    id: number;
    version: number;
    syncTs: Date;
    tenantId: string;
    assetTypeId: number;
    assetSubTypeId: number;
    applicableFrequency: string;
    feeTypeId: number;
    feeTypeName: string;
    feeSubType: string;
    autoCalculationFrequency: string;
    periodTypeId?: string;
    periodTypeName?: string;
    amount: string;
    mandatory: string;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser: string;
    modifiedDate: Date;
    referenceNo: number;
}

export interface SaveYardFeeChargeDetails {
    amount: string;
    applicableFrequency: string;
    assetSubTypeId: string;
    assetSubTypeName: string;
    assetTypeId: string;
    assetTypeName: string;
    autoCalculationFrequency: string;
    feeSubType: string;
    id: string;
    mandatory: string;
    periodTypeId: string;
    periodTypeName: string;
    status: string;
    version: string;
    yardFeeTypeId: string;
    yardFeeTypeName: string;
}

export interface UpdateYardFeeChargeDetails {
    amount: string;
    applicableFrequency: string;
    assetSubTypeId: string;
    assetSubTypeName: string;
    assetTypeId: string;
    assetTypeName: string;
    autoCalculationFrequency: string;
    feeSubType: string;
    id: string;
    mandatory: string;
    periodTypeId: string;
    periodTypeName: string;
    status: string;
    version: string;
    yardFeeTypeId: string;
    yardFeeTypeName: string;
}

export interface GetYardFeeChargeDetailsById {
    id: number;
    version: number;
    syncTs: Date;
    tenantId: string;
    assetTypeId: number;
    assetSubTypeId: number;
    applicableFrequency: string;
    feeTypeId: string;
    feeTypeName: string;
    feeSubType: string;
    autoCalculationFrequency: string;
    periodTypeId?: string;
    periodTypeName?: string;
    amount: string;
    mandatory: string;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser: string;
    modifiedDate: Date;
    referenceNo: number;
}


export interface GetYardFeeTypeByStatus{
    id: number;
    version: number;
    syncTs: Date;
    tenantId: string;
    code: string;
    assetTypeId: string;
    name: string;
    description: string;
    transactionSubCodeId: number;
    module?: string;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser?: string;
    modifiedDate?: string;


}