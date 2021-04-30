
export interface Branch {
    id: number;
    version: number;
    brhTenantId: string;
    parentBranchId: string;
    brhCode: string;
    name: string;
    brhDesc: string;
    brhAddress01: string;
    brhAddress02: string;
    brhAddress03: string;
    brhAddress04: string;
    brhAddressCity: string;
    brhAddressCountryId: number;
    brhAddressPostalCode: string;
    brhTel01: string;
    brhTel02: string;
    brhTel03: string;
    brhTel04: string;
    brhTel05: string;
    brhFax01: string;
    brhFax02: string;
    brhEmail01: string;
    brhEmail02: string;
    brhCategory01CommonId?: any;
    brhCategory02CommonId?: any;
    brhGeoLevelId?: any;
    brhGeoHierarchyId?: any;
    brhSalesLevelId?: any;
    brhSalesHierarchyId?: any;
    brhAttribute1: string;
    brhAttribute2: string;
    brhAttribute3: string;
    brhAttribute4: string;
    brhAttribute5: string;
    brhStatus: string;
    brhGeoLocation: string;
    brhCreatedUser: string;
    brhCreatedDate: string;
    brhModifiedUser: string;
    brhModifiedDate: string;
}

export interface OrganizationLevel {
  id: number;
  version: number;
  tenantId: string;
  code: string;
  name: string;
  description: string;
  level: number;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}