
export interface Designation {
    id: number;
    desgCode: string;
    desgName: string;
    desgDesc: string;
    desgTenantId: string;
    desgStatus: string;
    desgCreatedUser: string;
    desgCreatedDate: string;
    desgModifiedUser: string;
    desgModifiedDate: string;
    version: number;
}

export interface DesignationSaveRequest {
    desgCode: string;
    desgName: string;
    desgDesc?: string;
    desgStatus: "ACTIVE" | "INACTIVE";
    desgCreatedUser?: string;
}

export interface DesignationUpdateRequest {
    desgCode: string;
    desgName: string;
    desgDesc?: string;
    desgStatus: "ACTIVE" | "INACTIVE";
    desgModifiedUser?: string;
    version: number;
}