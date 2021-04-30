export interface SignatureSaveRequest {
  customerCode: string;
  customerId: string;
  customerType: string;
  remarks: string;
  signatureDetails: SignatureSaveDetail[];
}

export interface SignatureSaveDetail {
  origin: string;
  personCode: string;
  personId: string;
  remarks: string;
  signatureId: string;
  signatureType: string;
  signatureUrl: string;
}

export interface FileDownload {
  approvedDate: string;
  approvedUser: string;
  createdDate: string;
  createdUser: string;
  id: number;
  modifiedDate: null;
  modifiedUser: null;
  origin: string;
  personCode: string;
  personId: number;
  remarks: string;
  signatureId: number;
  signatureType: string;
  signatureUrl: string;
  signatureUrlId: number;
  status: "ACTIVE";
  tenantId: string;
  version: number;
}

export interface Signature {
  id: number;
  version: number;
  signatureDetails: SignatureDetail[];
  tenantId: string;
  customerType: string;
  customerId: number;
  customerCode: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate?: any;
  status: string;
  approvedUser: string;
  approvedDate: string;
}

export interface SignatureDetail {
  id: number;
  version: number;
  signatureId: number;
  origin: string;
  tenantId: string;
  personId: number;
  personCode: string;
  signatureUrl: string;
  signatureUrlId: string;
  signatureType: string;
  remarks: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  status: string;
  approvedUser: string;
  approvedDate: string;
}

export interface FileUploadResponse {
  fileDownloadUri: string;
  fileName: string;
  fileType: string;
  id: number;
  size: number;
  version: number;
}

export interface SignatureAccountDetails {
  id: number;
  version: number;
  tenantId: string;
  signatureDetail: {
    id: number;
    version: number;
    signatureUrlId: number;
    origin: string;
    hibernateLazyInitializer: {};
    signatureId: number;
    tenantId: string;
    personId: number;
    personCode: string;
    signatureUrl: string;
    signatureType: string;
    remarks: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
    status: string;
    approvedUser: string;
    approvedDate: string;
  };
  module: string;
  subModule: string;
  mappedRecordId: number;
  recordStatus: string;
  mappedPath: string;
  createdUser: string;
  modifiedUser: string;
  status: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  accountId: string;
  accountNo: string;
  createdDate: string;
  modifiedDate: string;
}
