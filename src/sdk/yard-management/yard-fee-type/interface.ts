
export interface GetAllYardFeeType {
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
    assetType: string;
}

export interface UpdateYardFeeType {

    assetTypeId: string;
    assetTypeName: string;
    code: string;
    description: string;
    module: string;
    name: string;
    status: string;
    transactionSubCode: string;
    transactionSubCodeId: string;
    version: string;

}

export interface SaveYardFeeType {
    assetTypeId: string;
    assetTypeName: string;
    code: string;
    description: string;
    module: string;
    name: string;
    status: string;
    transactionSubCode: string;
    transactionSubCodeId: string;
}

export interface GetAllYardFeeTypeById {
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
    assetType: string;
}
