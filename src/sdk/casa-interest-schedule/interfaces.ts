export interface CreditInterestLog {
  id: number;
  version: number;
  tenantId: string;
  fromDate: string;
  toDate: string;
  lenght: number;
  accountId: number;
  accountNo: string;
  subProductCode: string;
  tierBandMethod: string;
  calculationMethod: string;
  calculationFrequency: string;
  calculationFrequencyType?: any;
  calculationFrequencyUnits: number;
  applicationFrequency: string;
  applicationFrequencyType: string;
  applicationFrequencyUnits: number;
  appliedBalance?: any;
  rate?: any;
  interestAmount: number;
  accumulatedAmount: number;
  status: string;
  applied: string;
  appliedUser?: any;
  appliedDate?: any;
  comment: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
}

export interface AccuredCreditInterest {
  interestAmount: number;
  accumulatedAmount: number;
  calculationFrequency?: any;
  applicationFrequency?: any;
  calculationMethod?: any;
  applied?: any;
  date?: any;
}