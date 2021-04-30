import { STATUS_TYPE } from "../../utils/common";

export interface ValuationCondition {

    id: number;
    version: number;
    syncTs: string;
    tenantId: string;
    code: string;
    name: string;
    description?: string;
    status: STATUS_TYPE;
    createdUser: string;
    createdDate: string;
    modifiedUser?: string;
    modifiedDate?: string;

}

export interface YardValuationUpdateRequestResource {
    code: string;
    description: string;
    id: string;
    modifiedUser: string;
    name: string;
    status: string;
    tenantId: string;
    version: string;
}

export interface YardValuationRequestResource {
    code: string;
    createdUser: string;
    description: string;
    id: string;
    name: string;
    status: string;
    tenantId: string;
}


// export interface YardExternalDocument {
//     documentId: string;
//     id: string;
//     status: string;
//     yardValuationDetailId: string;
// }

// export interface YardExternalInspectionCondition {
//     commonListId: string;
//     conditionId: string;
//     conditionName: string;
//     id: string;
// }

// export interface YardExternalValuation {
//     id: string;
//     remarks: string;
//     revaluationDate: string;
//     status: string;
//     valuationDate: string;
//     valuationFSV: string;
//     valuationMV: string;
//     valuationReportReceived: string;
//     valuationType: string;
//     valuerCode: string;
//     valuerId: string;
//     yardExternalDocument: YardExternalDocument[];
//     yardExternalInspectionCondition: YardExternalInspectionCondition[];
//     yardValuationId: string;
// }

// export interface YardInternalDocument {
//     documentId: string;
//     id: string;
//     status: string;
//     yardValuationDetailId: string;
// }

// export interface YardInternalInspectionCondition {
//     commonListId: string;
//     conditionId: string;
//     conditionName: string;
//     id: string;
// }

// export interface YardInternalValuation {
//     id: string;
//     remarks: string;
//     revaluationDate: string;
//     status: string;
//     valuationDate: string;
//     valuationFSV: string;
//     valuationMV: string;
//     valuationReportReceived: string;
//     valuationType: string;
//     valuerCode: string;
//     valuerId: string;
//     yardInternalDocument: YardInternalDocument[];
//     yardInternalInspectionCondition: YardInternalInspectionCondition[];
//     yardValuationId: string;
// }

// export interface yardValuationUpdateRequestResource {
//     assetsEntityId: string;
//     assetsEntityReferenceNo: string;
//     status: string;
//     version: string;
//     yardExternalValuation: YardExternalValuation[];
//     yardInDetailId: string;
//     yardInternalValuation: YardInternalValuation[];
// }

// export interface yardValuationRequestResource {
//     assetsEntityId: string;
//     assetsEntityReferenceNo: string;
//     status: string;
//     yardExternalValuation: YardExternalValuation[];
//     yardInDetailId: string;
//     yardInternalValuation: YardInternalValuation[];
// }