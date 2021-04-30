export interface IndividualPersonType {
  id: number;
  version: number;
  tenantId: string;
  personTypeCode: string;
  personTypeName: string;
  personTypeDescription: string;
  minAplAge: number;
  maxAplAge: number;
  staffIndicator: string;
  guardianIndicator: string;
  personTypeStatus: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  status: string;
}

export interface ContactType {
  id: number;
  version: number;
  cntpCode: string;
  cntpDesc: string;
  cntpTenantId: string;
  cntpStatus: string;
  cntpVisualFormt: string;
  cntpVisualFormtValidtion: string;
  cntpCreatedUser: string;
  cntpCreatedDate: string;
  cntpModifiedUser?: any;
  cntpModifiedDate?: any;
  cntpAttribute1?: any;
  cntpAttribute2?: any;
  cntpAttribute3?: any;
  cntpAttribute4?: any;
  cntpAttribute5?: any;
  cntpMandatory?: any;
  cntpCntryDialCodeRequired?: any;
}