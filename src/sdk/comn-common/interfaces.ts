export interface DocumentTypeDetails {
  id: number;
  version: number;
  documentTypeTenantId: string;
  documentTypeCode: string;
  documentTypeName: string;
  documentTypeDescription: string;
  documentTypeCategoryId: string;
  documentTypeStatus: "ACTIVE" | "INACTIVE";
  documentTypeCreatedUser: string;
  documentTypeCreatedDate: string;
  documentTypeModifiedUser?: any;
  documentTypeModifiedDate?: any;
}

export interface DocumentTypeSaveRequest {
  documentTypeCategoryDescription: string;
  documentTypeCategoryId: string;
  documentTypeCode: string;
  documentTypeCreatedUser?: string;
  documentTypeDescription?: string;
  documentTypeName: string;
  documentTypeStatus: "ACTIVE" | "INACTIVE";
  documentTypeUser?: string;
}

export interface DocumentTypeUpdateRequest {
  documentTypeCategoryDescription: string;
  documentTypeCategoryId: string;
  documentTypeCode: string;
  documentTypeDescription?: string;
  documentTypeModifiedUser: string;
  documentTypeName: string;
  documentTypeStatus: "ACTIVE" | "INACTIVE";
  documentTypeVersion: string;
}

export interface ResidencyType {
  id: number;
  version: number;
  tenantId: string;
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
}

export interface ResidencyTypeSaveRequest {
  code: string;
  createdUser?: string;
  description: string;
  name: string;
  status: string;
  tenantId?: string;
}

export interface ResidencyTypeUpdateRequest {
  code: string;
  description: string;
  id: string;
  name: string;
  status: string;
  version: string;
}

export interface LeagalStructure {
  id: number;
  version: number;
  tenantId: string;
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface LeagalStructureUpdateRequest {
  code: string;
  description: string;
  id?: string;
  name: string;
  status: string;
  version: string;
}

export interface LeagalStructureSaveRequest {
  code: string;
  createdUser?: string;
  description: string;
  name: string;
  status: string;
  tenantId?: string;
}