import { STATUS_TYPE } from "../../utils/common";



export interface YardInCheckListItems{
    id: number;
    version: number;
    syncTs: Date;
    tenantId: string;
    code: string;
    name: string;
    description: string;
    assetTypeId?: string;
    status: STATUS_TYPE;
    createdUser: string;
    createdDate: Date;
    modifiedUser?: string;
    modifiedDate?: string;
}

export interface UpdateYardInCheckListItemsRequestResource{
    code: string;
    description: string;
    name: string;
    status: string;
    version: string;
}

export interface addYardInCheckListItems{
    code: string;
    description: string;
    name: string;
    status: string;
    version: string;
}