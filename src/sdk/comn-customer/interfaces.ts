/*******************
 * CUSTOMER OBJECT *
 *******************/

import { PaginatedRequest } from "../utils/common";

export interface Customer {
  perId: number;
  perCode: string;
  perFullName: string;
  perTitleCommonListId: number;
  perTitleDesc: string;
  perFirstName: string;
  perMiddleName: string;
  perLastName: string;
  perPreferredName: string;
  perOtherName: string;
  perGenderCommonListId: number;
  perCompanyName?: string;
  perGenderDesc: string;
  perBirthPlace: string;
  perDateOfBirth: string;
  perBirthCountryId: number;
  perBirthCountryDesc: string;
  perNationality1CommonListId: number;
  perNationality1Desc: string;
  perNationality2CommonListId: number;
  perNationality2Desc: string;
  perNationality3CommonListId: number;
  perNationality3Desc: string;
  perNationality1CountryId: number;
  perNationality1CountryDesc: string;
  perNationality2CountryId: number;
  perNationality2CountryDesc: string;
  perNationality3CountryId: number;
  perNationality3CountryDesc: string;
  perMaritalStatusCommonListId: number;
  perMaritalStatusDesc: string;
  perResidentStatusCommonListId: number;
  perResidentStatusDesc: string;
  perResidentStatusCode: string;
  perResident1CountryId: number;
  perResident1CountryDesc: string;
  perResident2CountryId: number;
  perResident2CountryDesc: string;
  perResident3CountryId: number;
  perResident3CountryDesc: string;
  perEducationalLevelCommonListId: number;
  perEducationalLevelDesc: string;
  perPreferredLanguageId: number;
  perPreferredLanguageDesc: string;
  perContactPerson: string;
  perAttribute1: string; // Customer photo
  perAttribute2: string;
  perAttribute3: string;
  perAttribute4: string;
  perAttribute5: string;
  perAttribute6: string;
  perAttribute7: string;
  perAttribute8: string;
  perAttribute9: string;
  perAttribute10: string;
  perAttribute11: string;
  perAttribute12: string;
  perAttribute13: string;
  perAttribute14: string;
  perAttribute15: string;
  perAttribute16: string;
  perAttribute17: string;
  perAttribute18: string;
  perAttribute19: string;
  perKYCId: number;
  perRiskProfileId: number;
  perPepStatus: string;
  perPepComment: string;
  perIdentifications: PerIdentification[];
  perAddresses: PerAddress[];
  perContacts: PerContact[];
  perBankAccounts: PerBankAccount[];
  id: number;
  cusReferenceCode: string;
  cusOrganizationTypeCommonListId: number;
  cusOrganizationTypeDesc: string;
  cusOrganizationTypeCode: string;
  cusOriginationMethodCommonListId: number;
  cusOriginationMethodDesc: string;
  cusPreferredDay: string;
  cusPreferredTime: string;
  cusLocationLongitude: string;
  cusLocationLatitude: string;
  cusWithinBranchArea: string;
  cusComment: string;
  cusSectorId: number;
  cusSectorCode: string;
  cusSectorDesc: string;
  cusSubSectorId: number;
  cusSubSectorCode: string;
  cusSubSectorDesc: string;
  cusNotesOnBusiness: string;
  cusIndividualAnnualTurnoverId: number;
  cusIndividualAnnualTurnoverDesc: string;
  cusBusinessAnnualTurnoverId: number;
  cusBusinessAnnualTurnoverDesc: string;
  cusRelatedPartyStatus: string;
  cusRelatedPartyTypeCommonListId: number;
  cusRelatedPartyTypeDesc: string;
  cusRelatedPartyComment: string;
  cusKMPStatus: string;
  cusAreaId: number;
  cusAreaDesc: string;
  cusSecondaryDivisionId: number;
  cusSecondaryDivisionDesc: string;
  cusSmsAlertStatus: string;
  cusStatus: string;
  cusFatherName: string;
  cusSpouseName: string;
  cusGuardianName: string;
  cusMajorOccupationId: number;
  cusMajorOccupationCode: string;
  cusMajorOccupationDesc: string;
  cusSubOccupationId: number;
  cusSubOccupationCode: string;
  cusSubOccupationDesc: string;
  cusOccupationId: number;
  cusOccupationDesc: string;
  cusOccupationCode: string;
  cusResidentialStatusCommonListId: number;
  cusResidentialStatusDesc: string;
  cusLivingCategory: string;
  cusPhysicallyChallenged: string;
  cusDeceaseStatus: string;
  cusDeceaseDate: string;
  cusPersonTypeCommonListId: number;
  perCorporateCategoryCommonListId: number;
  cusPersonTypeDesc: string;
  cusPersonTypeCode: string;
  cusLivingConditionCommonListId: number;
  cusLivingConditionDesc: string;
  cusCreatedUser: string;
  cusCreatedDate: string;
  cusModifiedUser: string;
  cusModifiedDate: string;
  cusLastApprovedUser: string;
  cusLastApprovedDate: string;
  cusKeyPersons: any[];
  cusRelationships: CusRelationship[];
  cusPowerOfAttorney: CusPowerOfAttorney;
  cusEmploymentDetails: CusEmploymentDetail[];
  cusTaxProfile: CusTaxProfile;
  cusSanctionDetail: CusSanctionDetail;
  cusOtherCountryTaxes: CusOtherCountryTax[];
  cusOtherKycDetails: CusOtherKycDetail[];
  cusDocumentDetails: CusDocumentDetail[];
}

export interface CusDocumentDetail {
  id: number;
  version: number;
  cddTenantId: string;
  cddDocumentDetailId: number;
  cddDocumentUrl: string;
  cddUploadedDate: string;
  cddStatus: string;
  cddCreatedUser: string;
  cddCreatedDate: string;
  cddDocumentTypeIdId: number;
  cddDocumentTypeDesc: string;
}

export interface CusOtherKycDetail {
  id: number;
  version: number;
  cokdTenantId: string;
  cokdRiskProfileCategory: string;
  cokdRiskScore: number;
  cokdRiskProfileChangedUser: string;
  cokdRiskProfileChangedDate: string;
  cokdRiskProfileChangedRemark: string;
  cokdKycStatus: string;
  cokdKycStatusUpdatedDate: string;
  cokdKycReviwedDate: string;
  cokdNextReviwDate: string;
  cokdCustomerVisitStatus: string;
  cokdKycRequirementObtained: string;
  cokdKycDoneUserId: number;
  cokdKycDoneUser: string;
  cokdAdditionalInformation: string;
  cokdStatus: string;
  cokdCreatedUser: string;
  cokdCreatedDate: string;
}

export interface CusOtherCountryTax {
  id: number;
  version: number;
  coctTenantId: string;
  coctCountryId: number;
  coctTaxNumberTypeCommonListId: number;
  coctTaxNumber: string;
  coctIssueDate: string;
  coctExpiryDate: string;
  coctStatus: string;
  coctCreatedUser: string;
  coctCreatedDate: string;
  coctCountryDesc: string;
  coctTaxNumberTypeDesc: string;
}

export interface CusSanctionDetail {
  id: number;
  version: number;
  csdTenantId: string;
  csdSanctionType: string;
  csdSanctionOriginator: string;
  csdSearchMethod: string;
  csdSanctionStatus: string;
  csdApprovedUser: string;
  csdApprovedDate: string;
  csdRejectedUser: string;
  csdRejectedDate: string;
  csdRevertUser: string;
  csdRevertDate: string;
  csdRevertRemark: string;
  csdCreatedUser: string;
  csdCreatedDate: string;
  csdModifiedUser: string;
  csdModifiedDate: string;
}

export interface CusTaxProfile {
  id: number;
  version: number;
  ctpTenantId: string;
  ctpTaxDeclarationType: string;
  ctpTaxDeclarationDate: string;
  ctpExternalInterestIncomeAmount: number;
  ctpFatcaStatus: string;
  ctpFatcaSubmitFlag: string;
  ctpFatcaSubmitDate: string;
  ctpFatcaReSubmitFlag: string;
  ctpFatcaReSubmitDate: string;
  ctpIrdRate: number;
  ctpStatus: string;
  ctpCreatedUser: string;
  ctpCreatedDate: string;
  ctpFatcaId: number;
  ctpFatcaDesc: string;
}

export interface CusEmploymentDetail {
  id: number;
  version: number;
  cueTenantId: string;
  cueEmploymentTypeCommonListId: number;
  cueEmploymentCategoryCommonListId: number;
  cueDesignationId: number;
  cueEmployerName: string;
  cueWorkingYears: number;
  cueWorkingMonths: number;
  cueJoinedDate: string;
  cueConfirmedDate: string;
  cueClosingDate: string;
  cueContactNo: string;
  cueReferenceNo: string;
  cueStatus: string;
  cueCreatedUser: string;
  cueCreatedDate: string;
  cueEmploymentTypeDesc: string;
  cueEmploymentCategoryDesc: string;
  cueDesignationDesc: string;
}

export interface CusPowerOfAttorney {
  perId: number;
  perCode: string;
  perTitleCommonListId: number;
  perTitleDesc: string;
  perFirstName: string;
  perMiddleName: string;
  perLastName: string;
  perFullName: string;
  perInitials: string;
  perPreferredName: string;
  perOtherName: string;
  perGenderCommonListId: number;
  perGenderDesc: string;
  perBirthPlace: string;
  perDateOfBirth: string;
  perBirthCountryId: number;
  perBirthCountryDesc: string;
  perNationality1CommonListId: number;
  perNationality1Desc: string;
  perNationality2CommonListId: number;
  perNationality2Desc: string;
  perNationality3CommonListId: number;
  perNationality3Desc: string;
  perNationality1CountryId: number;
  perNationality1CountryDesc: string;
  perNationality2CountryId: number;
  perNationality2CountryDesc: string;
  perNationality3CountryId: number;
  perNationality3CountryDesc: string;
  perMaritalStatusCommonListId: number;
  perMaritalStatusDesc: string;
  perResidentStatusCommonListId: number;
  perResidentStatusDesc: string;
  perResidentStatusCode: string;
  perResident1CountryId: number;
  perResident1CountryDesc: string;
  perResident2CountryId: number;
  perResident2CountryDesc: string;
  perResident3CountryId: number;
  perResident3CountryDesc: string;
  perEducationalLevelCommonListId: number;
  perEducationalLevelDesc: string;
  perPreferredLanguageId: number;
  perPreferredLanguageDesc: string;
  perContactPerson: string;
  perComment: string;
  perPepStatus: string;
  perPepComment: string;
  perIdentifications: PerIdentification[];
  perAddresses: PerAddress2[];
  perContacts: PerContact[];
  culpId: number;
  cuaFromDate: string;
  cuaToDate: string;
  cuaStatus: string;
  cuaReferenceNumber: string;
  culpCreatedUser: string;
  culpCreatedDate: string;
}

export interface CusRelationship {
  perId: number;
  perCode: string;
  perTitleCommonListId: number;
  perTitleDesc: string;
  perFirstName: string;
  perMiddleName: string;
  perLastName: string;
  perFullName: string;
  perInitials: string;
  perPreferredName: string;
  perOtherName: string;
  perGenderCommonListId: number;
  perGenderDesc: string;
  perBirthPlace: string;
  perDateOfBirth: string;
  perBirthCountryId: number;
  perBirthCountryDesc: string;
  perNationality1CommonListId: number;
  perNationality1Desc: string;
  perNationality2CommonListId: number;
  perNationality2Desc: string;
  perNationality3CommonListId: number;
  perNationality3Desc: string;
  perNationality1CountryId: number;
  perNationality1CountryDesc: string;
  perNationality2CountryId: number;
  perNationality2CountryDesc: string;
  perNationality3CountryId: number;
  perNationality3CountryDesc: string;
  perMaritalStatusCommonListId: number;
  perMaritalStatusDesc: string;
  perResidentStatusCommonListId: number;
  perResidentStatusDesc: string;
  perResidentStatusCode: string;
  perResident1CountryId: number;
  perResident1CountryDesc: string;
  perResident2CountryId: number;
  perResident2CountryDesc: string;
  perResident3CountryId: number;
  perResident3CountryDesc: string;
  perEducationalLevelCommonListId: number;
  perEducationalLevelDesc: string;
  perPreferredLanguageId: number;
  perPreferredLanguageDesc: string;
  perContactPerson: string;
  perComment: string;
  perPepStatus: string;
  perPepComment: string;
  perIdentifications: PerIdentification[];
  perAddresses: PerAddress2[];
  perContacts: PerContact[];
  culpId: number;
  curRelationshipTypeCommonListId: number;
  curRelationshipTypeDesc: string;
  curRelationshipTypeCode: string;
  curDependentStatus: string;
  curNomineeStatus: string;
  curProportionForTheNominee: number;
  curStatus: string;
  culpCreatedUser: string;
  culpCreatedDate: string;
}

export interface PerAddress2 {
  id: number;
  paddTenantId: string;
  paddAddressTypeCommonListId: number;
  paddAddressTypeDesc: string;
  paddAddressTypeCode: string;
  paddAddress01: string;
  paddAddress02: string;
  paddAddress03: string;
  paddAddress04: string;
  paddAddressGeoLevelId: number;
  paddAddressGeoLevelDesc: string;
  paddAddressCountryId: number;
  paddAddressCountryDesc: string;
  paddAddressPostalCode: string;
  paddStatus: string;
  paddAttribute1: string;
  paddAttribute2: string;
  paddAttribute3: string;
  paddAttribute4: string;
  paddAttribute5: string;
  paddCreatedUser: string;
  paddCreatedDate: string;
  version: number;
}

export interface PerBankAccount {
  id: number;
  pbanTenantId: string;
  pbanBankId: number;
  pbanBankDesc: string;
  pbanBranchId: number;
  pbanBranchDesc: string;
  pbanAccountType: string;
  pbanFundsTransferType: string;
  pbanAccountNo: string;
  pbanBeneficiaryName: string;
  pbanStatus: string;
  pbanAttribute1: string;
  pbanAttribute2: string;
  pbanAttribute3: string;
  pbanAttribute4: string;
  pbanAttribute5: string;
  pbanCreatedUser: string;
  pbanCreatedDate: string;
  version: number;
}

export interface PerContact {
  id: number;
  pconTenantId: string;
  pconContactTypeId: number;
  pconContactTypeDesc: string;
  pconContactTypeCode: string;
  pconValue: string;
  pconStatus: string;
  pconAttribute1: string;
  pconAttribute2: string;
  pconAttribute3: string;
  pconAttribute4: string;
  pconCreatedUser: string;
  pconCreatedDate: string;
  version: number;
}

export interface PerAddress {
  id: number;
  paddTenantId: string;
  paddAddressTypeCommonListId: number;
  paddAddressTypeDesc: string;
  paddAddressTypeCode: string;
  paddAddress01: string;
  paddAddress02: string;
  paddAddress03: string;
  paddAddress04: string;
  paddAddressGeoLevelId: number;
  paddAddressGeoLevelDesc: string;
  paddAddressCountryId: number;
  paddAddressCountryDesc: string;
  paddAddressPostalCode: string;
  paddStatus: string;
  paddAttribute1?: string;
  paddAttribute2?: string;
  paddAttribute3?: string;
  paddAttribute4?: string;
  paddCreatedUser: string;
  paddCreatedDate: string;
  version: number;
}

export interface PerIdentification {
  id: number;
  pidtTenantId: string;
  pidtIdentificationTypeId: number;
  pidtIdentificationTypeDesc: string;
  pidtIdentificationTypeCode: string;
  pidtIdentificationNo: string;
  pidtIssueDate: string;
  pidtExpiryDate: string;
  pidtDocumentUrl: string;
  pidtExemptedStatus: string;
  pidtExemptedRemark: string;
  pidtStatus: string;
  pidtCreatedUser: string;
  pidtCreatedDate: string;
  version: number;
}

export interface AddressResponse {
  id: number;
  paddAddressTypeCommonListId: number;
  paddAddress01: string;
  paddAddress02: string;
  paddAddress03: string;
  paddAddress04: string;
  paddAddressGeoLevelId: string;
  paddAddressCountryId: number;
  paddAddressPostalCode: string;
  paddStatus: string;
  paddAttribute1: string;
  paddAttribute2: string;
  paddAttribute3: string;
  paddAttribute4: string;
  paddAttribute5: string;
  paddCreatedUser: string;
  paddCreatedstring: string;
  paddModifiedUser: string;
  paddModifiedstring: string;
  version: number;
}

export interface CustomerSearchRequest extends PaginatedRequest {
  cusBusinessRegNo?: string;
  cusContactMobileNumber?: string;
  cusFullName?: string;
  cusIdentificationNo?: string;
  cusReferenceCode?: string;
  cusStatus?: string;
}

export interface AllCustomerResponseResource {
  cusComment?: string;
  cusContactMobileNumber?: string;
  cusCreatedstring?: string;
  cusCreatedUser?: string;
  cusDeceasestring?: string;
  cusDeceaseStatus?: string;
  cusFatherName?: string;
  cusGuardianName?: string;
  cusImageUrl?: string;
  cusKycStatus?: string;
  cusLocationLatitude?: string;
  cusLocationLongitude?: string;
  cusModifiedstring?: string;
  cusModifiedUser?: string;
  cusMotherMaidenName?: string;
  cusOperationStartstring?: string;
  cusOrganizationTypeCode?: string;
  cusOrganizationTypeCommonListId?: number;
  cusOrganizationTypeDesc?: string;
  cusPhysicallyChallenged?: string;
  cusPreferredDay?: string;
  cusPreferredTime?: string;
  cusReferenceCode?: string;
  cusRegisteredstring?: string;
  cusSpouseName?: string;
  cusStatus?: string;
  cusiIdentificationNo?: string;
  id?: number;
  perBusinessRegNo?: string;
  perCode?: string;
  perCompanyName?: string;
  perstringOfBirth?: string;
  perFirstName?: string;
  perFullName?: string;
  perGenderDesc?: string;
  perGroupCompanyName?: string;
  perId?: number;
  perInitials?: string;
  perLastName?: string;
  perMiddleName?: string;
  perOtherName?: string;
  perPreferredName?: string;
  perTaxNo?: string;
  perTitleDesc?: string;
}

export interface Turnover {
  id: number;
  version: number;
  turnTenantId: string;
  turnReferenceCode: string;
  turnCode: string;
  turnDesc: string;
  turnFromAmount: number;
  turnToAmount: number;
  turnStatus: string;
  turnCreatedUser: string;
  turnCreatedDate: string;
  turnModifiedUser: string;
  turnModifiedDate: string;
}

export interface CustomerIdentification {
  id: number;
  pidtTenantId: string;
  pidtIdentificationTypeId: number;
  pidtIdentificationTypeDesc: string;
  pidtIdentificationTypeCode: string;
  pidtIdentificationNo: string;
  pidtIssueDate: string;
  pidtExpiryDate: string;
  pidtDocumentUrl: string;
  pidtExemptedStatus: string;
  pidtExemptedRemark: string;
  pidtStatus: string;
  pidtCreatedUser: string;
  pidtCreatedDate: string;
  version: number;
}

export interface KeyPerson {
  id: number;
  perId: number;
  signatureId: string;
  perCode: string;
  perTitleCommonListId: number;
  perTitleDesc: string;
  perFirstName: string;
  perMiddleName: string;
  perLastName: string;
  perFullName: string;
  perInitials: string;
  perPreferredName: string;
  perOtherName: string;
  perGenderCommonListId: number;
  perGenderDesc: string;
  perBirthPlace: string;
  perDateOfBirth: string;
  perBirthCountryId: number;
  perBirthCountryDesc: string;
  perNationality1CommonListId: number;
  perNationality1Desc: string;
  perNationality2CommonListId: number;
  perNationality2Desc: string;
  perMaritalStatusCommonListId: number;
  perMaritalStatusDesc: string;
  perResidentStatusCommonListId: number;
  perResidentStatusDesc: string;
  perResidentStatusCode: string;
  perPepStatus: string;
  culpId: number;
  ckpStatus: string;
  ckpKeyPersonTypeId: number;
  ckpKeyPersonTypeDesc: string;
  ckpKeyPersonTypeCode: string;
}
