import { STATUS_TYPE } from "../../utils/common";

export interface CommonListItem {
  id: number;
  version: number;
  syncTs: Date;
  referenceCode: string;
  code: string;
  name: string;
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  tenantId: string;
  status: STATUS_TYPE;
  createdUser: string;
  createdDate: Date;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface UpdateCommonListItemRequestResource {
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  code: string;
  id: string;
  name: string;
  referenceCode: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface AddCommonListItem{
    attribute1: string;
    attribute2: string;
    attribute3: string;
    attribute4: string;
    attribute5: string;
    code: string;
    name: string;
    referenceCode: string;
    status: string;
    tenantId: string;

}
