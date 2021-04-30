export interface PeriodTypeList{
    id: number;
    syncTs: Date;
    version: number;
    tenantId: string;
    code: string;
    name: string;
    description: string;
    type: string;
    unit: number;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser: string;
    modifiedDate: Date;
}