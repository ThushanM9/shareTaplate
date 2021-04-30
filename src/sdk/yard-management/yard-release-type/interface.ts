import { STATUS_TYPE } from "../../utils/common";

export interface YardReleaseType {
  id: number;
  version: number;
  syncTs: Date;
  yardReleaseType: string;
  code: string;
  name: string;
  description: string;
  status: STATUS_TYPE;
  createdUser: string;
  createdDate: Date;
  modifiedUser?: string;
  modifiedDate?: string;
  tenantId: string;
}

export interface UpdateYardReleaseTypeRequestResource {
  code: string;
  description?: string;
  id: string;
  name: string;
  status: string;
  version: string;
  yardReleaseType: string;
}

export interface AddYardReleaseType {
  code: string;
  description?: string;
  id: string;
  name: string;
  status: string;
  version: string;
  yardReleaseType: string;
}
