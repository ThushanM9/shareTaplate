export interface AssestTypeList {
    id: number;
    syncTs: Date;
    version: number;
    code: string;
    name: string;
    description: string;
    typeId: number;
    assetClassTypeName: string;
    makeModelRequired: string;
    investigationRequired: string;
    valuationRequired: string;
    insuranceRequired: string;
    legalConfirmationRequired: string;
    tenantId: string;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser?: string;
    modifiedDate?: string;
}

export interface AssestSubTypeList {
    id: number;
    syncTs: Date;
    version: number;
    tenantId: string;
    code: string;
    name: string;
    description: string;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser?: string;
    modifiedDate?: string;
}
