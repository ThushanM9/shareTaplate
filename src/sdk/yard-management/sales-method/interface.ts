export interface SalesMethod {
    id: number;
    version: number;
    syncTs: Date;
    tenantId: string;
    code: string;
    name: string;
    description?: string;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser?: string;
    modifiedDate?: string;
}

export interface UpdateSalesMethod {
    code: string;
    description: string;
    id: string;
    modifiedUser: string;
    name: string;
    status: string;
    tenantId: string;
    version: string;
}

export interface SaveSalesMethod {
    code: string;
    createdUser: string;
    description: string;
    id: string;
    name: string;
    status: string;
    tenantId: string;
}