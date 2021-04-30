export interface yardInCondition{
    id: number;
    version: number;
    syncTs: Date;
    tenantId: string;
    code: string;
    name: string;
    description: string;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser: string;
    modifiedDate: Date;
    checkDateType:string;
}

export interface UpdateYardInConditionRequestResource{
    checkDateType: string;
    code: string;
    description: string;
    id: string;
    modifiedUser: string;
    name: string;
    status: string;
    tenantId: string;
    version: string;
}

export interface addYardInCondition{
    checkDateType: string;
    code: string;
    description: string;
    id: string;
    modifiedUser: string;
    name: string;
    status: string;
    tenantId: string;
    version: string;
}