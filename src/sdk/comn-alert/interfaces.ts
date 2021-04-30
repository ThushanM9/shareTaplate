export interface AlertEvent {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  transactionEventId: number;
  transactionEvent?: any;
  eventCategory: string;
  module: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  tenantId: string;
}

export interface AlertLimit {
  id: number;
  version: number;
  eventId: number;
  eventName: string;
  alertLimitCode: string;
  alertLimitName: string;
  alertLimitDescription: string;
  fromAmount: number;
  toAmount: number;
  alertLimitStatus: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  tenantId: string;
}

export interface AlertType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  tenantId: string;
}