
export interface YardCreation {
    id: number;
    version: number;
    syncTs: string;
    tenantId: string;
    code: string;
    name: string;
    description?: string;
    yardLocationId: number;
    yardInChargeId: number;
    parentalYardId: number;
    status: string;
    createdUser: string;
    createdDate: string;
    modifiedUser?: string;
    modifiedDate?: string;
    levelId: number;
    levelName: string;
    securityFirmId?: string;
    securityFirmCode?: string;
    securityFirmPersonId?: string;
    yardLevelType?: string;
}

export interface YardCreationRequestResource {
    code: string;
    description: string;
    name: string;
    parentalYardId: string;
    securityFirmCode: string;
    securityFirmId: string;
    status: string;
    version: string;
    yardInChargeId: string;
    yardInChargeName: string;
    yardLevelName: string;
    yardLevelType: string;
    yardLevels: string;
    yardLocationId: string;
    yardLocationName: string;
}

export interface SecrityFirm {
    id: number;
    supOrganizationTypeCommonListId: number;
    supOrganizationTypeDesc: string;
    supOrganizationTypeCode: string;
    perId: number;
    perCode: string;
    perCompanyName: string;
    perGroupCompanyName: string;
    perBusinessRegNo: string;
    perTaxNo: string;
    supReferenceCode: string;
    supLocationLongitude: string;
    supLocationLatitude: string;
    supComment: string;
    supStatus: string;
    supCreatedUser: string;
    supCreatedDate: Date;
}

export interface YardInCharge {
    id: number;
    version: number;
    tenantId: string;
    userId: string;
    userName: string;
    userRoleId: number;
    userRole: string;
    userTypeId: number;
    userType: string;
    designationId: number;
    designation: string;
    employeeNumber: string;
    email: string;
    userStatus: string;
    profileStatus: string;
    functionalSuperiorName?: any;
    functionalSuperiorId?: any;
    administrativeSupervisorName?: any;
    administrativeSupervisorId?: any;
    createdDate: Date;
    createdBy: string;
    modifiedDate?: any;
    modifiedUser?: any;
    inactivatedDate?: any;
    inactivatedUser?: any;
    departmentId: number;
    profilePictureId: number;
    department: string;
}

export interface YardSupplier {
    id: number;
    supOrganizationTypeCommonListId: number;
    supOrganizationTypeDesc: string;
    supOrganizationTypeCode: string;
    perId: number;
    perCode: string;
    perFirstName: string;
    perLastName: string;
    perFullName: string;
    perInitials: string;
    perPreferredName: string;
    perOtherName: string;
    perDateOfBirth: Date;
    perTitleDesc: string;
    perGenderDesc: string;
    supReferenceCode: string;
    supLocationLongitude: string;
    supLocationLatitude: string;
    supComment: string;
    supStatus: string;
    supCreatedUser: string;
    supCreatedDate: Date;
}

export interface CommonBranch {
    id: number;
    syncTs: Date;
    version: number;
    brhTenantId: string;
    organizationLevelId: number;
    parentBranchId?: any;
    brhCode: string;
    name: string;
    brhDesc: string;
    brhAddress01: string;
    brhAddress02: string;
    brhAddress03: string;
    brhAddress04: string;
    brhAddressCity: string;
    brhAddressCountryId: number;
    brhAddressPostalCode?: any;
    brhTel01: string;
    brhTel02: string;
    brhTel03: string;
    brhTel04: string;
    brhTel05: string;
    brhFax01: string;
    brhFax02: string;
    brhEmail01: string;
    brhEmail02: string;
    brhCategory01CommonId: number;
    brhCategory02CommonId: number;
    brhGeoLevelId: number;
    brhGeoHierarchyId: number;
    brhSalesLevelId?: any;
    brhSalesHierarchyId?: any;
    brhAttribute1: string;
    brhAttribute2: string;
    brhAttribute3: string;
    brhAttribute4: string;
    brhAttribute5: string;
    brhStatus: string;
    brhGeoLocation?: any;
    openBankingBrhCode?: any;
    localBrhCode: string;
    brhCreatedUser: string;
    brhCreatedDate: Date;
    brhModifiedUser?: any;
    brhModifiedDate?: any;
    organizationLevelCode: string;
    organizationLevelName: string;
    address?: string;
}

export interface YardLevel {
    id: number;
    version: number;
    syncTs: Date;
    tenantId: string;
    code: string;
    name: string;
    description: string;
    levelSequnce: number;
    branchLevelApplicability: string;
    branchLevelId: number;
    status: string;
    createdUser: string;
    createdDate: Date;
    modifiedUser: string;
    modifiedDate: Date;
    branchLevelName?: string;
    levelPlusName?: string
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
    cntpCreatedDate: Date;
    cntpModifiedUser: string;
    cntpModifiedDate: Date;
    cntpAttribute1?: any;
    cntpAttribute2?: any;
    cntpAttribute3?: any;
    cntpAttribute4?: any;
    cntpAttribute5?: any;
    cntpMandatory: string;
    cntpCntryDialCodeRequired: string;
}
