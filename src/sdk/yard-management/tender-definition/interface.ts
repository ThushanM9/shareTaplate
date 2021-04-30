import { STATUS_TYPE } from "../../utils/common";

export interface TenderDefinition {
  id: number;
  version: number;
  syncTs: Date;
  tenantId: string;
  referenceNo: string;
  startDate: Date;
  expiryDate: Date;
  description: string;
  status: STATUS_TYPE;
  createdUser: string;
  createdDate: Date;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface UpdateTenderDefinitionRequestResource {
  id: number;
  version: number;
  syncTs: Date;
  tenantId: string;
  referenceNo: string;
  startDate: Date;
  expiryDate: Date;
  description: string;
  status: string;
  createdUser: string;
  createdDate: Date;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface addTenderDefinition {
  description: string;
  expiryDate: string;
  referenceNo: string;
  startDate: string;
  status: string;
}
