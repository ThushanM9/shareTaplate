export interface CommonBranchList{
    id: number;
    version: number;
    tenantId: string;
    code: string;
    name: string;
    description: string;
    level: number;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser?: string;
    modifiedDate?: Date;
}