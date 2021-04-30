
export interface Bank {
  bankCode: string;
  bankName: string;
  bankSwiftcode?: any;
  bankCeftCode?: any;
  bankStatus: string;
  bankCreatedUser: string;
  bankCreatedDate: string;
  bankModifiedUser?: any;
  bankModifiedDate: string;
  bankAttribute1?: any;
  bankAttribute2?: any;
  bankAttribute3?: any;
  bankAttribute4?: any;
  bankAttribute5?: any;
  id: number;
  version: number;
  bankTenantId: string;
  bankAddress?: any;
  bankContact?: any;
}

export interface Branch {
  bbrhCode: string;
  bbrhName: string;
  bbrhBankId: string;
  bbrhCategory: string;
  bbrhSwiftcode?: any;
  bbrhCeftCode?: any;
  bbrhStatus: string;
  bbrhCreatedUser: string;
  bbrhCreatedDate: string;
  bbrhModifiedUser?: any;
  bbrhModifiedDate?: any;
  bbrhAttribute1: string;
  bbrhAttribute2: string;
  bbrhAttribute3: string;
  bbrhAttribute4: string;
  bbrhAttribute5?: any;
  bbrhAddress?: any;
  bbrhContact?: any;
  id: number;
  version: number;
  bbrhTenantId: string;
}