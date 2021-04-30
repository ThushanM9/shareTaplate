import { STATUS_TYPE, YESNO_TYPE } from "../../utils/common";



export interface YardLevelDefinition{
    id: number;
    version: number;
    syncTs: string,
    tenantId: string;
    code: string;
    name: string;
    branchLevelName: string;
    description?: string;
    levelSequnce: number;
    branchLevelApplicability: YESNO_TYPE;
    branchLevelId?: string;
    status:STATUS_TYPE ;
    createdUser: string;
    createdDate: Date;
    modifiedUser: string;
    modifiedDate: Date;
}

export interface UpdateYardLevelDefinitionRequestResource {

    branchLevelApplicability: string;
    branchLevelId: string;
    branchLevelName: string;
    code: string;
    description: string;
    levelSequnce: string;
    name: string;
    status: string;
    version: string;
}

export interface addYardLevelDefinition{
    branchLevelApplicability: string;
    branchLevelId: string;
    branchLevelName: string;
    code: string;
    description: string;
    levelSequnce: string;
    name: string;
    status: string;
    version: string;
}