export interface Product {
  id: number;
  version: number;
  name: string;
  identification: string;
  onSaleIndicator: boolean;
  feeFreeLength: number;
  feeFreeLengthPeriodId: number;
  productCategoryId: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  feeFreeLengthPerid: string;
  productCategory: string;
  brandName: string;
  notes: Note[];
}

export interface OverdraftFeesChargesDetails {
  id: number;
  version: number;
  tenantId: string;
  code?: any;
  negotiableIndicator: boolean;
  overdraftControlIndicator: boolean;
  incrementalBarrowingAmount: number;
  feeIndicator: string;
  deductIndicator: string;
  feeAmount: number;
  feeRate?: any;
  feeTypeId: number;
  feeTypeCode: string;
  feeType: string;
  feeCategoryTypeId?: any;
  feeCategoryTypeCode?: any;
  feeCategoryType?: any;
  feeRateTypeId: number;
  feeRateTypeCode: string;
  feeRateType: string;
  applicationFrequencyId: number;
  applicationFrequencyCode: string;
  applicationFrequency: string;
  calculationFrequencyId: number;
  calculationFrequencyCode: string;
  calculationFrequency: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  overdraftFeesChargesDetailsNotes: any[];
}

export interface ProductSubProduct {
  productId: number;
  productName: string;
  productIdentification: string;
  onSaleIndicator: boolean;
  feeFreeLength: number;
  feeFreeLengthPeridId: number;
  productCategoryId: number;
  feeFreeLengthPerid: number;
  productCategory: string;
  subProductId: number;
  subProductIdentification: string;
  subProductName: string;
  predecessorId: number;
  marketingStateId: number;
  marketingState: string;
  firstMarketedDate: string;
  lastMarketedDate: string;
  stateTenureLength: number;
  stateTenurePeriodId: number;
  stateTenurePeriod: string;
  accountSubTypeId: number;
  accountSubType: string;
  restrictedStatus: string;
  subProductStatus: string;
  productUrl: string;
  productDescription: string;
  currencyId: number;
  currencyCode: string;
  currencyNumeric: number;
  tcsAndCsUrl: string;
  dormantPeriod: number;
  dormantPeriodTypeId: number;
  dormantPeriodType: string;
  withdrawalsAllowedAfter: string;
  withdrawalsAllowedAfterPeriodId: number;
  withdrawalsAllowedAfterPeriod: string;
  monthlyCharge: number;
  stoFullPeriodTypeId: number;
  stoFullPeriodType: string;
  stoFullPeriodLength: number;
  stoPartialPeriodTypeId: number;
  stoPartialPeriodType: string;
  stoPartialPeriodLength: number;
  corProductStatus: string;
  productType: string;
  accountType: string;
  productStatus: string;
}

export interface ProductSaveRequest {
  accountType: string;
  brandId: string;
  createdUser: string;
  feeFreeLength: string;
  feeFreeLengthPeriod: string;
  feeFreeLengthPeriodId: string;
  identification: string;
  name: string;
  onSaleIndicator: string;
  productCategory: string;
  productCategoryId: string;
  productType: string;
  status: string;
  tenantId: string;
}

export interface ProductUpdateRequest {
  brandId: string;
  name: string;
  identification: string;
  onSaleIndicator: string;
  feeFreeLengthPeriodId: string;
  feeFreeLengthPeriod: string;
  feeFreeLength: string;
  productCategoryId: string;
  productCategory: string;
  productType: string;
  accountType: string;
  status: string;
  version: string;
}

export interface Note {
  id: number;
  version: number;
  notes: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface SubProduct {
  id: number;
  version: number;
  identification: string;
  name: string; //TODO: this was marked as an emptty object in the response
  predecessorId: string;
  marketingStateId: number;
  firstMarketedDate: string;
  lastMarketedDate: string;
  stateTenureLength: number;
  stateTenurePeriodId: number;
  accountTypeId: number;
  restrictedStatus: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  accountType: string;
  marketingState: string;
  stateTenurePeriod: string;
  notes: Note[];
}

export interface SubProductSaveRequest {
  identification: string;
  name: string;
  predecessorId: string;
  marketingStateId: string;
  marketingState: string;
  firstMarketedDate: string;
  lastMarketedDate: string;
  stateTenureLength: string;
  stateTenurePeriodId: string;
  stateTenurePeriod: string;
  accountTypeId: string;
  accountType: string;
  restrictedStatus: string;
  coreProductId: string;
  creditInterestId: string;
  eligibilityId: string;
  overdraftId: string;
  featuresBenefitsId: string;
  status: string;
  createdUser: string;
}

export interface SubProductUpdateRequest {
  identification: string;
  name: string;
  predecessorId: string;
  marketingStateId: string;
  marketingState: string;
  firstMarketedDate: string;
  lastMarketedDate: string;
  stateTenureLength: string;
  stateTenurePeriodId: string;
  stateTenurePeriod: string;
  accountTypeId: string;
  accountType: string;
  restrictedStatus: string;
  coreProductId: string;
  creditInterestId: string;
  eligibilityId: string;
  overdraftId: string;
  featuresBenefitsId: string;
  status: string;
  version: string;
}

export interface SubProductCommonDetails {
  productId: string;
  productName: string;
  productIdentification: string;
  onSaleIndicator: boolean;
  feeFreeLength: string;
  feeFreeLengthPeridId: string;
  productCategoryId: string;
  feeFreeLengthPerid: string;
  productCategory: string;
  subProductId: string;
  subProductIdentification: string;
  subProductName: string;
  predecessorId?: string;
  marketingStateId: string;
  marketingState: string;
  firstMarketedDate: string;
  lastMarketedDate: string;
  stateTenureLength: string;
  stateTenurePeriodId: string;
  stateTenurePeriod: string;
  accountSubTypeId: string;
  accountSubType?: string;
  restrictedStatus: string;
  subProductStatus: string;
  productUrl?: string;
  productDescription?: string;
  currencyId?: string;
  currencyCode?: string;
  currencyNumeric?: string;
  tcsAndCsUrl?: string;
  dormantPeriod?: string;
  dormantPeriodTypeId?: string;
  dormantPeriodType?: string;
  withdrawalsAllowedAfter?: string;
  withdrawalsAllowedAfterPeriodId?: string;
  withdrawalsAllowedAfterPeriod?: string;
  monthlyCharge?: string;
  stoFullPeriodTypeId?: string;
  stoFullPeriodType?: string;
  stoFullPeriodLength?: string;
  stoPartialPeriodTypeId?: string;
  stoPartialPeriodType?: string;
  stoPartialPeriodLength?: string;
  corProductStatus?: string;
  productType: string;
  accountType: string;
  productStatus: string;
}

enum ProductCategory {
  GENERAL = "GENERAL",
  ISLAMIC = "ISLAMIC",
}

export interface FeatureBenifitCardType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface FeatureBenifitCardTypeSaveRequest {
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
}

export interface FeatureBenifitCardTypeUpdateRequest {
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  version: string;
}

export interface FeatureBenifitCardSchema extends FeatureBenifitCardType { }

export interface FeatureBenifitCardSchemaSaveRequest {
  code: string;
  name: string;
  description: string;
  status: string;
}

export interface FeatureBenifitCardSchemaUpdateRequest {
  code: string;
  name: string;
  description: string;
  status: string;
  version: string;
}

export interface ProductBrand {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface ProductBrandSaveRequest {
  code: string;
  name: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface ProductBrandUpdateRequest {
  code: string;
  name: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
  version: string;
}

export interface Segment {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface segmentSaveRequest {
  code: string;
  name: string;
  description: string;
  status: string;
}

export interface segmentUpdateRequest {
  code: string;
  name: string;
  description: string;
  status: string;
  version: string;
}

export interface Frequency {
  id: number;
  version: number;
  tenantId: string;
  code: string;
  name: string;
  description: string;
  type: "MATURITY" | "HOUR" | "DATE" | "WEEK" | "MONTH" | "YEAR";
  unit: number;
  status: "ACTIVE" | "INACTIVE";
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface FrequencyAddResource {
  code: string;
  createdUser?: string;
  description?: string;
  id?: string;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId?: string;
  type: "MATURITY" | "HOUR" | "DATE" | "WEEK" | "MONTH" | "YEAR";
  unit: number;
}

export interface FrequencyUpdateResource {
  code: string;
  description?: string;
  id: string;
  modifiedUser?: string;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId?: string;
  type: "MATURITY" | "HOUR" | "DATE" | "WEEK" | "MONTH" | "YEAR";
  unit: string;
  version: string;
}

export interface CalculationFrequency {
  id: number;
  code: string;
  name: string;
  description: string;
  tnantId: string;
  status: "ACTIVE" | "INACTIVE";
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  version: number;
}

export interface CalculationFrequencySaveRequest {
  code: string;
  name: string;
  description: string;
  frquencyTypeId: number;
  unit: number;
  status: "ACTIVE" | "INACTIVE";
}

export interface CalculationFrequencyUpdateRequest {
  code: string;
  name: string;
  description: string;
  frquencyTypeId: number;
  unit: number;
  version: number;
  status: "ACTIVE" | "INACTIVE";
}

export interface ApplicationFrequency {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  frequencyTypeId: number;
  unit: number;
}

export interface ApplicationFrequencySaveRequest {
  code: string;
  createdUser?: string;
  description: string;
  frquencyTypeId: string;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId?: string;
  unit: string;
}

export interface ApplicationFrequencyUpdateRequest {
  code: string;
  description: string;
  frquencyTypeId: string;
  id?: string;
  modifiedUser?: string;
  name: string;
  status: string;
  tenantId?: string;
  unit: string;
  version: string;
}

export interface OtherBankInterestType {
  id: number;
  code: string;
  name: string;
  description: string;
  tnantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  version: number;
}

export interface OtherBankInterestTypeSaveRequest {
  code: string;
  name: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface OtherBankInterestTypeUpdateRequest {
  code: string;
  name: string;
  description: string;
  version: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface CreditInterestEligibilityType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser?: string;
  createdDate?: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface CreditInterestEligibilityTypeSaveRequest {
  code: string;
  name: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface CreditInterestEligibilityTypeUpdateRequest {
  code: string;
  name: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
  version: number;
}

export interface CreditInterestEligibility {
  id: number;
  version: number;
  name: string;
  description: string;
  amount: number;
  indicator: boolean;
  texual: string;
  periodId: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  notes: Note[];
  typeId: string;
  type: string;
  typeCode: string;
  period: string;
}

export interface CreditInterestEligibilitySaveRequest {
  name: string;
  description?: string;
  typeId: number;
  typeName: string;
  amount?: number;
  indicator?: boolean;
  texual?: string;
  periodId?: number;
  period?: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface CreditInterestEligibilityUpdateRequest {
  name: string;
  description?: string;
  typeId: number;
  typeName: string;
  amount?: number;
  indicator?: boolean;
  texual?: string;
  periodId?: number;
  period?: string;
  status: "ACTIVE" | "INACTIVE";
  version: number;
}

export interface CreditInterestTierBandSet {
  id: number;
  version: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  tierBandSetIdNo: string;
  creditInterestEligibilityIdNo: string;
}

export interface CreditInterestTierBandSetUpdateRequest {
  creditInterestEligibilityId: number;
  status: string;
  version: string;
}

export interface ProductCommonList {
  id: number;
  referenceCode: string;
  code: string;
  description: string;
  status: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  version: number;
}

export interface CreditInterestTemplate {
  id: number;
  version: number;
  code: string;
  templateName: string;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface CreditInterestTemplateSaveRequest {
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  createdUser?: string;
  status: string;
  tenantId?: string;
}

export interface CreditInterestTemplateUpdateRequest {
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  id?: string;
  modifiedUser?: string;
  status: string;
  tenantId?: string;
  version?: string;
}

export interface TierBand {
  id: number;
  version: number;
  identification: string;
  effectiveDate: string;
  tierValueMinimum: number;
  tierValueMaximum?: number;
  depositInterestAppliedCoverageId: number;
  depositInterestApplicableBaseId: number;
  fixedVariableInterestRateTypeId: number;
  aer: number;
  bankInterestRate: number;
  bankIntCalBasisId: number;
  tenantId: string;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  calculationFrequencyId: number;
  calculationFrequency: string;
  applicationFrequencyId: number;
  applicationFrequency: string;
  bankInterestRateTypeId: number;
  bankInterestRateType: string;
  depositInterestApplicableBase: string;
  bankInterestCalBasis: string;
  fixedVariableInterestRateType: string;
  depositInterestAppliedCoverage: string;
  notes: Note[];
}

export interface TierBandSaveRequest {
  identification: string;
  effectiveDate: string;
  tierValueMinimum: number;
  tierValueMaximum: number;
  calculationFrequencyId: number;
  calculationFrequency: string;
  applicationFrequencyId: number;
  applicationFrequency: string;
  depositInterestAppliedCoverageId: number;
  depositInterestAppliedCoverage: string;
  fixedVariableInterestRateTypeId: number;
  fixedVariableInterestRateType: string;
  depositInterestApplicableBaseId: number;
  depositInterestApplicableBase: string;
  bankInterestCalBasisId: number;
  bankInterestCalBasis: string;
  aer: number;
  bankInterestRateTypeId?: number;
  bankInterestRateType?: string;
  bankInterestRate?: string;
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface TierBandUpdateRequest {
  identification: string;
  effectiveDate: string;
  tierValueMinimum: number;
  tierValueMaximum: number;
  calculationFrequencyId: number;
  calculationFrequency: string;
  applicationFrequencyId: number;
  applicationFrequency: string;
  depositInterestAppliedCoverageId: number;
  depositInterestAppliedCoverage: string;
  fixedVariableInterestRateTypeId: number;
  fixedVariableInterestRateType: string;
  depositInterestApplicableBaseId: number;
  depositInterestApplicableBase: string;
  bankInterestCalBasisId: number;
  bankInterestCalBasis: string;
  aer: number;
  bankInterestRateTypeId?: number;
  bankInterestRateType?: string;
  bankInterestRate?: string;
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  code: string;
  id?: string;
  modifiedUser?: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId: string;
  tierBandNotes: TierBandNote[];
  version: number;
}

export interface TierBandSet {
  id: number;
  version: number;
  tierBandMethodId: number;
  calculationMethodId: number;
  destinationId: number;
  attribute1?: string;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface TierBandSetSaveRequest {
  tierBandMethodId: number;
  tierBandMethod: string;
  calculationMethodId: number;
  calculationMethod: string;
  destinationId: number;
  destination: string;
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface TierBandSetUpdateRequest {
  creditInterestId: string;
  tierBandMethodId: string;
  tierBandMethod: string;
  calculationMethodId: string;
  calculationMethod: string;
  destinationId: string;
  destination: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  version: string;
  status: string;
  modifiedUser: string;
}

export interface FeatureBenifitItemType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface FeatureBenifitItemTypeSaveRequest {
  code: string;
  name: string;
  description: string;
  status: string;
}

export interface FeatureBenifitItemTypeUpdateRequest {
  code: string;
  name: string;
  description: string;
  status: string;
  version: string;
}

export interface FeatureBenefitEligibilityType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface FeatureBenefitEligibilityTypeSaveRequest {
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser: string;
}

export interface FeatureBenefitEligibilityTypeUpdateRequest {
  code: string;
  name: string;
  description: string;
  status: string;
  version: string;
}

export interface FeatureBenefitEligibility {
  id: number;
  version: number;
  name: string;
  description: string;
  amount: number;
  indicator: boolean;
  texual: string;
  periodId: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  notes: Note[];
  typeId: string;
  type: string;
  typeCode: string;
  period: string;
}

export interface FeatureBenefitEligibilityUpdateRequest {
  name: string;
  description: string;
  typeId: string;
  typeName: string;
  amount: string;
  indicator: string;
  texual: string;
  periodId: string;
  period: string;
  status: string;
  version: string;
}

export interface FeatureBenefitEligibilitySaveRequest {
  name: string;
  description: string;
  typeId: string;
  typeName: string;
  amount: string;
  indicator: string;
  texual: string;
  periodId: string;
  period: string;
  status: string;
  createdUser: string;
}

export interface FeatureBenefitItem {
  id: number;
  version: number;
  name: string;
  amount: number;
  indicator: boolean;
  texual: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate?: string;
  notes: Note[];
  typeId: string;
  type: string;
  featureBenefitEligibilities: FeatureBenefitEligibility[];
}

export interface FeatureBenefitItemSaveRequest {
  name: string;
  description: string;
  typeId: string;
  typeName: string;
  amount: string;
  indicator: string;
  texual: string;
  status: string;
  createdUser: string;
}

export interface FeatureBenefitItemUpdateRequest {
  name: string;
  typeId: string;
  typeName: string;
  amount: string;
  indicator: string;
  texual: string;
  status: string;
  version: string;
}

export interface FeatureBenefitGroupType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface FeatureBenefitGroupTypeSaveRequest {
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser: string;
}

export interface FeatureBenefitGroupTypeUpdateRequest {
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  version: string;
}

export interface FeatureBenefitGroup {
  id: number;
  version: number;
  name: string;
  benefitGroupNominalValue: number;
  fee: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  calculationFrequencyId?: string;
  calculationFrequency?: string;
  applicationFrequencyId?: string;
  applicationFrequency?: string;
  typeId?: string;
  type?: string;
  typeCode?: string;
  notes?: string;
  featureBenefitItems?: string;
  featureBenefitEligibilities?: string;
}

export interface FeatureBenefitGroupSaveRequest {
  name: string;
  calculationFrequencyId: string;
  calculationFrequency: string;
  applicationFrequencyId: string;
  applicationFrequency: string;
  typeId: string;
  typeName: string;
  benefitGroupNominalValue: string;
  fee: string;
  status: string;
  createdUser: string;
}

export interface FeatureBenefitGroupUpdateRequest {
  name: string;
  calculationFrequencyId: string;
  calculationFrequency: string;
  applicationFrequencyId: string;
  applicationFrequency: string;
  typeId: string;
  typeName: string;
  benefitGroupNominalValue: string;
  fee: string;
  status: string;
  version: string;
}

export interface FeatureBenefitCard {
  id: number;
  version: number;
  contactlessIndicator: boolean;
  maxDialyCardWithdrawalLimit: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  notes: Note[];
  typeId: string;
  type: string;
  typeCode: string;
  schemeId?: string;
}

export interface FeatureBenefitCardUpdateRequest {
  typeId: string;
  typeName: string;
  schemeId: string;
  schemeName: string;
  contactlessIndicator: string;
  maxDailyCardWithdrawalLimit: string;
  status: string;
  modifiedUser: string;
  version: string;
}

export interface FeatureBenefitCardMapUpdateRequest {
  featureBenefitCardId: string,
  id:string,
  modifiedUser: string,
  status: string,
  version: string
}

export interface FeatureBenefitCardSaveRequest {
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  version: string;
}

export interface MobileWalletType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface MobileWalletTypeSaveRequest {
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser: string;
}

export interface MobileWalletTypeUpdateRequest {
  code: string;
  name: string;
  description: string;
  status: string;
  version: string;
}

export interface MobileWallet {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface MobileWalletSaveRequest {
  typeId: string;
  typeName: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  status: string;
  createdUser: string;
}

export interface MobileWalletUpdateRequest {
  typeId: string;
  typeName: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  status: string;
  version: string;
}

export interface FeeCategoryType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  feeCategoryId: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface FeeCategoryTypeUpdateRequest {
  code: string;
  name: string;
  description: string;
  version: string;
  status: string;
}

export interface FeeCategoryTypeSaveRequest {
  code: string;
  name: string;
  description: string;
  feeCategoryId: number;
  status: string;
  createdUser: string;
}

export interface FeeType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  feeCategoryId: number;
  transactionCodeId: number;
  transactionSubCodeId: number;
  transactionSubCode: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface FeeTypeSaveRequest {
  code: string;
  name: string;
  feeCategoryId: string;
  feeCategory: string;
  description: string;
  transactionCodeId: string;
  transactionSubCodeId: string;
  transactionSubCodeDescription: string;
  status: string;
  createdUser: string;
}

export interface FeeTypeUpdateRequest {
  code: string;
  name: string;
  feeCategoryId: string;
  feeCategory: string;
  description: string;
  transactionCodeId: string;
  transactionSubCodeId: string;
  transactionSubCodeDescription: string;
  version: string;
  status: string;
}

export interface OtherFeeRateType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface TariffType {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface TariffTypeSaveRequest {
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser: string;
}

export interface SubProductFeatureBenefit {
  id: number;
  version: number;
  identification: string;
  name: string;
  predecessorId: string;
  marketingStateId: number;
  firstMarketedDate: string;
  lastMarketedDate: string;
  stateTenureLength: number;
  stateTenurePeriodId: number;
  accountTypeId: number;
  restrictedStatus: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  accountType?: string;
  marketingState?: string;
  stateTenurePeriod?: string;
}

export interface SubProductFeeChargeDetail {
  id: number;
  version: number;
  tariffName: string;
  attribute1?: string;
  attribute2?: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  tariffTypeId: string;
  tariffTypeName: string;
  feeChargeDetail: FeeChargeDetail[];
}

export interface FeeChargeDetail {
  id: number;
  version: number;
  negotiableIndicator: boolean;
  feeIndicator: string;
  deductIndicator: string;
  includedInMonthlyChargeIndicator?: string;
  feeAmount: number;
  feeRate: number;
  minimumAmount: number;
  maximumAmount: number;
  minimumRate: number;
  maximumRate: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  calculationFrequencyId: number;
  calculationFrequencyCode: string;
  calculationFrequency: string;
  applicationFrequencyId: number;
  applicationFrequencyCode: string;
  applicationFrequency: string;
  feeCategoryTypeId: number;
  feeCategoryType: string;
  feeCategoryTypeCode: string;
  feeTypeId: number;
  feeTypeCode: string;
  feeType: string;
  feeRateTypeId: number;
  feeRateTypeCode: string;
  feeRateType: string;
  notes: Note[];
}

export interface SalesAccessChannel {
  id: number;
  version: number;
  salesAccessChannelId: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  salesAccessChannel: string;
}

export interface ServiceAccessChannel {
  id: number;
  version: number;
  servicingChannelId: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  servicingChannel: string;
}

export interface FeeChargeCap {
  id: number;
  version: number;
  feeCapOccurrence?: string;
  feeCapAmount: number;
  cappingPeriodId: number;
  minMaxType: string;
  cappingPeriod: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  feeTypeId: number;
  feeType: string;
}

export interface FeeChargeCapSaveRequest {
  feeType: string;
  feeTypeId: string;
  minMaxType: string;
  feeCapOccurance: string;
  feecapAmount: string;
  cappingPeriodId: string;
  cappingPeriod: string;
  status: string;
}

export interface FeeChargeCapUpdateRequest {
  feeType: string;
  feeTypeId: string;
  minMaxType: string;
  feeCapOccurance: string;
  feecapAmount: string;
  cappingPeriodId: string;
  cappingPeriod: string;
  status: string;
  modifiedUser: string;
  version: string;
}

export interface FeeChargeDetailSaveRequest {
  applicationFrequency: string;
  applicationFrequencyId: number;
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  calculationFrequency: string;
  calculationFrequencyId: number;
  createdUser?: string;
  deductIndicator: "YES" | "NO";
  feeAmount: number;
  feeCategoryType: string;
  feeCategoryTypeId: number;
  feeChargeDetailCode: string;
  feeIndicator: "AMOUNT" | "AMOUNTTIER" | "RATE" | "RATETIER";
  feeRate: number;
  feeRateType: string;
  feeRateTypeId: number;
  feeType: string;
  feeTypeId: number;
  includedInMonthlyChargeIndicator: true | false;
  maximumAmount: number;
  maximumRate: number;
  minimumAmount: number;
  minimumRate: number;
  negotiableIndicator: true | false;
  status: "ACTIVE" | "INACTIVE";
  tenantId?: string;
}

export interface FeeChargeDetailUpdateRequest {
  applicationFrequency: string;
  applicationFrequencyId: number;
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  calculationFrequency: string;
  calculationFrequencyId: number;
  deductIndicator: "YES" | "NO";
  feeAmount: number;
  feeCategoryType: string;
  feeCategoryTypeId: number;
  feeChargeDetailCode: string;
  feeIndicator: "AMOUNT" | "AMOUNTTIER" | "RATE" | "RATETIER";
  feeRate: number;
  feeRateType: string;
  feeRateTypeId: number;
  feeType: string;
  feeTypeId: number;
  includedInMonthlyChargeIndicator: true | false;
  maximumAmount: number;
  maximumRate: number;
  minimumAmount: number;
  minimumRate: number;
  negotiableIndicator: true | false;
  status: "ACTIVE" | "INACTIVE";
  version: string;
}

export interface BonusTierBandSetSaveRequest {
  aer: string;
  applicationFrequency: string;
  applicationFrequencyId: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  bankInterestCalBasis: string;
  bankInterestCalBasisId: string;
  bankInterestRate: string;
  bankInterestRateType: string;
  bankInterestRateTypeId: string;
  bonusTierBandSetId: string;
  calculationFrequency: string;
  calculationFrequencyId: string;
  createdUser: string;
  depositInterestApplicableBase: string;
  depositInterestApplicableBaseId: string;
  depositInterestAppliedCoverage: string;
  depositInterestAppliedCoverageId: string;
  effectiveDate: string;
  fixedVariableInterestRateType: string;
  fixedVariableInterestRateTypeId: string;
  status: string;
  tenantId: string;
  tierValueMaximum: string;
  tierValueMinimum: string;
}

export interface BonusTierBandSetUpdateRequest {
  aer: string;
  applicationFrequency: string;
  applicationFrequencyId: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  bankInterestCalBasis: string;
  bankInterestCalBasisId: string;
  bankInterestRate: string;
  bankInterestRateType: string;
  bankInterestRateTypeId: string;
  calculationFrequency: string;
  calculationFrequencyId: string;
  depositInterestApplicableBase: string;
  depositInterestApplicableBaseId: string;
  depositInterestAppliedCoverage: string;
  depositInterestAppliedCoverageId: string;
  effectiveDate: string;
  fixedVariableInterestRateType: string;
  fixedVariableInterestRateTypeId: string;
  id: string;
  modifiedUser: string;
  status: string;
  tenantId: string;
  tierBandNotes: TierBandNote[];
  tierValueMaximum: string;
  tierValueMinimum: string;
  version: string;
}

export interface TierBandNote {
  createdDate?: string;
  createdUser?: string;
  notes: string;
  status: string;
}

export interface NoteSaveRequest {
  createdDate?: string;
  createdUser?: string;
  notes: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface BonusInterestEligibility {
  id: number;
  version: number;
  name: string;
  description: string;
  amount: number;
  indicator: boolean;
  texual: string;
  periodId: number;
  period: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  notes: string[];
  typeId: string;
  type: string;
  typeCode: string;
}

export interface BonusInterestEligibilitySaveRequest {
  amount: string;
  createdUser: string;
  description: string;
  indicator: string;
  name: string;
  period: string;
  periodId: string;
  status: string;
  tenantId: string;
  texual: string;
  typeId: string;
  typeName: string;
}

export interface UpdateBonusInterestEligibilityRequest {
  amount?: string;
  description?: string;
  id?: string;
  indicator?: string;
  modifiedUser?: string;
  name: string;
  period?: string;
  periodId?: string;
  status: string;
  tenantId?: string;
  texual?: string;
  typeId: string;
  typeName: string;
  version: string;
}

export interface NoteUpdateRequest {
  id: string;
  modifiedDate?: ModifiedDate;
  modifiedUser?: string;
  notes: string;
  status: "ACTIVE" | "INACTIVE";
  version: string;
}

interface ModifiedDate {
  date: number;
  day: number;
  hours: number;
  minutes: number;
  month: number;
  nanos: number;
  seconds: number;
  time: number;
  timezoneOffset: number;
  year: number;
}

export interface RateLimitSaveRequest {
  accountType: "SAVINGS" | "CURRENT";
  effectiveDate: string;
  rate?: number;
  rateType: "CREDIT" | "DEBIT";
  status: "ACTIVE" | "INACTIVE";
}

export interface ResidencyEligibility {
  id: number;
  version: number;
  tenantId: string;
  residencyTypeId: number;
  residencyTypeName: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  residencyEligibilityNotes?: ResidencyEligibilityNote[];
}

export interface ResidencyEligibilityNote {
  id: number;
  version: number;
  tenantId: string;
  residencyEligibilityTd: number;
  notes: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface ResidencyEligibilitySaveRequest {
  createdUser: string;
  id: string;
  residencyTypeId: string;
  residencyTypeName: string;
  status: string;
  tenantId: string;
}

export interface ResidencyEligibilityUpdateRequest {
  id: string;
  modifiedUser: string;
  residencyTypeId: string;
  residencyTypeName: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface AgeEligiblitySaveRequest {
  createdUser: string;
  id: string;
  maximumAge: string;
  minimumAge: string;
  status: string;
  tenantId: string;
}

export interface AgeEligiblityUpdateRequest {
  id: string;
  maximumAge: string;
  minimumAge: string;
  modifiedUser: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface OfficerEligibilitySaveRequest {
  createdUser: string;
  designationName: string;
  id: string;
  maxAmount: string;
  minAmount: string;
  officerTypeDesignationId: string;
  status: string;
  tenantId: string;
}

export interface OfficerEligibilityUpdateRequest {
  designationName: string;
  id: string;
  maxAmount: string;
  minAmount: string;
  modifiedUser: string;
  officerTypeDesignationId: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface TradingTypeSaveRequest {
  code: string;
  createdUser: string;
  description: string;
  name: string;
  status: string;
  tenantId: string;
}

export interface TradingTypeUpdateRequest {
  code: string;
  description: string;
  id: string;
  modifiedUser: string;
  name: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface TradingEligibilitySaveRequest {
  amount: string;
  createdUser: string;
  id: string;
  indicator: string;
  minMaxType: string;
  periodId: string;
  periodName: string;
  status: string;
  tenantId: string;
  textual: string;
  trdingTypeId: string;
}

export interface TradingEligibilityUpdateRequest {
  amount: string;
  id: string;
  indicator: string;
  minMaxType: string;
  modifiedUser: string;
  periodId: string;
  periodName: string;
  status: string;
  tenantId: string;
  textual: string;
  trdingTypeId: string;
  version: string;
}

export interface SICCodeSaveRequest {
  code: string;
  createdUser: string;
  description: string;
  name: string;
  status: string;
  tenantId: string;
}

export interface SICCodeUpdateRequest {
  code: string;
  description: string;
  id: string;
  modifiedUser: string;
  name: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface EligibilityTypeSaveRequest {
  ageEligibilityId: string;
  createdUser: string;
  creditCheckEligibilityId: string;
  id: string;
  idEligibilityId: string;
  industryEligibilityId: string;
  status: string;
  tenantId: string;
}

export interface EligibilityTypeUpdateRequest {
  ageEligibilityId: string;
  creditCheckEligibilityId: string;
  id: string;
  idEligibilityId: string;
  industryEligibilityId: string;
  modifiedUser: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface OtherEligibilityTypeSaveRequest {
  code: string;
  createdUser: string;
  description: string;
  name: string;
  status: string;
  tenantId: string;
}

export interface OtherEligibilityTypeUpdateRequest {
  code: string;
  description: string;
  id: string;
  modifiedUser: string;
  name: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface OverdraftSaveRequest {
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  createdUser: string;
  status: string;
  tcsCsUrl: string;
  tenantId: string;
}

export interface OverdraftUpdateRequest {
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  id: string;
  modifiedUser: string;
  status: string;
  tcsCsUrl: string;
  tenantId: string;
  version: string;
}

export interface OverdraftTierBandSaveRequest {
  agreementLengthMaximum: number;
  agreementLengthMinimum: number;
  agreementPeriod: string;
  agreementPeriodId: string;
  bankGuaranteedIndicator: string;
  createdUser: string;
  ear: string;
  overdraftInterestChargingCoverage: string;
  overdraftInterestChargingCoverageId: string;
  overdraftTierBandSetId: string;
  status: string;
  tenantId: string;
  tierValueMaximum: number;
  tierValueMinimum: number;
}

export interface OverdraftTierBandUpdateRequest {
  agreementLengthMaximum: number;
  agreementLengthMinimum: number;
  agreementPeriod: string;
  agreementPeriodId: string;
  bankGuaranteedIndicator: string;
  ear: string;
  id: string;
  modifiedUser: string;
  overdraftInterestChargingCoverage: string;
  overdraftInterestChargingCoverageId: string;
  overdraftTierBandSetId: string;
  status: string;
  tenantId: string;
  tierValueMaximum: number;
  tierValueMinimum: number;
  version: string;
}

export interface OverdraftTierBandSetSaveRequest {
  authorisedIndicator: string;
  authorisedIndicatorId: string;
  bufferAmount: string;
  bufferAmountId: string;
  createdUser: string;
  identificationId: string;
  minimumArrangedOverdraftAmount: string;
  minimumArrangedOverdraftAmountId: string;
  overdraftId: string;
  overdraftType: string;
  overdraftTypeId: string;
  status: string;
  tenantId: string;
  tierBandMethod: string;
  tierBandMethodId: string;
}

export interface OverdraftTierBandSetUpdateRequest {
  authorisedIndicator: string;
  authorisedIndicatorId: string;
  bufferAmount: string;
  bufferAmountId: string;
  id: string;
  minimuArrangedOverdraftAmountId: string;
  minimumArrangedOverdraftAmount: string;
  modifiedUser: string;
  overdraftId: string;
  overdraftType: string;
  overdraftTypeId: string;
  status: string;
  tenantId: string;
  tierBandMethod: string;
  tierBandMethodId: string;
  version: string;
}

export interface OverdraftFeeChargeSaveRequest {
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  createdUser: string;
  status: string;
  tenantId: string;
}

export interface OverdraftFeeChargeUpdateRequest {
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  id: string;
  modifiedUser: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface OverdraftFeeChargeCapSaveRequest {
  cappingPeriod: string;
  cappingPeriodId: string;
  createdUser: string;
  feeCapAmount: string;
  feeCapOccurrence: string;
  feeType: string;
  feeTypeId: string;
  id: string;
  minMaxType: string;
  otherFeeType: string;
  status: string;
  tenantId: string;
}

export interface OverdraftFeeChargeCapUpdateRequest {
  cappingPeriod: string;
  cappingPeriodId: string;
  feeCapAmount: string;
  feeCapOccurrence: string;
  feeType: string;
  feeTypeId: string;
  id: string;
  minMaxType: string;
  modifiedUser: string;
  otherFeeType: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface CreditInterest {
  id: number;
  version: number;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface RateLimitDetails {
  id: number;
  version: number;
  effectiveDate: string;
  accountType: string;
  rateType: string;
  rate: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
}

export interface ResidencyInclude {
  id: number;
  version: number;
  tenantId: string;
  residencyEligibilityId: number;
  residencyIncludeCountryId: number;
  countryCode: string;
  countryName: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface ResidencyIncludeSaveRequest {
  countryName: string;
  createdUser: string;
  id: string;
  residencyEligibilityId: string;
  residencyIncludeCountryId: string;
  status: string;
  tenantId: string;
}

export interface ResidencyIncludeUpdateRequest {
  countryName: string;
  id: string;
  modifiedUser: string;
  residencyEligibilityId: string;
  residencyIncludeCountryId: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface AgeEligibility {
  id: number;
  version: number;
  tenantId: string;
  minimumAge: number;
  maximumAge: number;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface OfficerEligibility {
  id: number;
  version: number;
  tenantId: string;
  officerTypeDesignationId: number;
  designationName: string;
  minAmount: number;
  maxAmount: number;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface TradingType {
  id: number;
  version: number;
  tenantId: string;
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface CreditCheckEligibility {
  id: number;
  version: number;
  tenantId: string;
  scoringType: string;
  status: string;
  createdUser: string;
  createdDate: string;
}

export interface TradingEligibility {
  id: number;
  version: number;
  tenantId: string;
  tradingTypeId: number;
  minMaxType: string;
  amount: number;
  indicator: boolean;
  textual: string;
  periodId: number;
  status: string;
  periodName: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  tradingEligibilityNotes?: TradingEligibilityNote[];
}

export interface TradingEligibilityNote {
  id: number;
  version: number;
  tenantId: string;
  tradingEligibilityId: number;
  notes: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface SICCode {
  id: number;
  version: number;
  tenantId: string;
  code: string;
  name: string;
  description: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface EligibilityType {
  id: number;
  version: number;
  tenantId: string;
  ageEligibilityId: number;
  idEligibilityId: number;
  creditCheckEligibilityId: number;
  industryEligibilityId: number;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface OtherEligibilityType {
  id: number;
  version: number;
  tenantId: string;
  name: string;
  description: string;
  otherEligibilityTypeId: number;
  amount: number;
  indicator: boolean;
  textual: string;
  periodId: number;
  status: string;
  createdUser: string;
  createdDate: string;
}

export interface BonusInterest {
  id: number;
  version: number;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate: string;
}

export interface AddBonusInterestRequest {
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  createdUser?: string;
  status: string;
  tenantId?: string;
}

export interface UpdateBonusInterestRequest {
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  id?: string;
  modifiedUser?: string;
  status: string;
  tenantId?: string;
  version: string;
}

export interface IndustryEligibility {
  id: number;
  version: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface Overdraft {
  id: number;
  version: number;
  tcsCsUrl: string;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  overdraftTierBandSet?: string;
  overdraftTierBand?: string;
  notes?: string;
}

export interface OverdraftFeeCharge {
  id: number;
  version: number;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface OverdraftFeeChargeCap {
  id: number;
  version: number;
  feeCapOccurrence: number;
  feeCapAmount: number;
  cappingPeriodId: number;
  minMaxType: string;
  cappingPeriod: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  feeTypeId: number;
  feeType: string;
}

export interface AddCommonListRequest {
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  code: string;
  createdUser?: string;
  description: string;
  referenceCode: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId?: string;
}

export interface UpdateCommonListRequest {
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  code?: string;
  description: string;
  id?: string;
  modifiedUser?: string;
  referenceCode: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId?: string;
  version: string;
}

export interface PeriodAddResource {
  code: string;
  createdUser?: string;
  description?: string;
  id?: string;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId?: string;
  type: "MATURITY" | "HOUR" | "DATE" | "WEEK" | "MONTH" | "YEAR";
  unit: number;
}

export interface PeriodUpdateResource {
  code: string;
  description?: string;
  id: string;
  modifiedUser?: string;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId?: string;
  type: "MATURITY" | "HOUR" | "DATE" | "WEEK" | "MONTH" | "YEAR";
  unit: number;
  version: number;
}

export interface Period {
  code: string;
  description?: string;
  id: string | number;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId: string;
  type: "MATURITY" | "HOUR" | "DATE" | "WEEK" | "MONTH" | "YEAR";
  unit: number;
  version: number;
}

export interface IdEligibilitySaveRequest {
  id: string;
  status: string;
  url: string;
}

export interface IdEligibility {
  id: number;
  version: number;
  tenantId: string;
  url: string;
  status: string;
  createdUser: string;
  createdDate: string;
  idEligibilityNotes?: IdEligibilityNote[];
}

export interface IdEligibilityNote {
  id: number;
  version: number;
  tenantId: string;
  idEligibilityId: number;
  notes: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
}

export interface IdEligibilityUpdateRequest {
  status: string;
  url: string;
  version: string;
}

export interface ProductSegment {
  id: number;
  version: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  productName?: string;
  segmentName?: string;
  productInfoId?: number;
  segmentId?: number;
}

export interface AddProductSegmentRequest {
  createdUser?: string;
  productId?: string;
  segmentId?: string;
  status: "ACTIVE" | "INACTIVE";
  tenantId?: string;
}

export interface UpdateProductSegmentRequest {
  id: string;
  modifiedUser: string;
  segmentId: string;
  status: string;
  tenantId: string;
  version: string;
}

export interface OtherEligibility {
  id: number;
  version: number;
  tenantId: string;
  name: string;
  description: string;
  otherEligibilityTypeId: number;
  otherEligibilityTypeCode: string;
  amount: number;
  indicator: boolean;
  textual: string;
  periodId: number;
  periodName: string;
  status: string;
  createdUser: string;
  createdDate: string;
}

export interface CoreProduct {
  id: number;
  version: number;
  productUrl: string;
  productDescription?: string;
  currencyId: number;
  currencyCode: string;
  currencyNumeric: string;
  tcsAndCsUrl?: string;
  dormantPeriodTypeId: number;
  dormantPeriodType?: string;
  dormantPeriod: number;
  withdrawalsAllowedAfterPeriodId?: string;
  withdrawalsAllowedAfterPeriod?: string;
  withdrawalsAllowedAfter?: string;
  monthlyCharge: number;
  stoFullPeriodTypeId?: string;
  stoFullPeriodType?: string;
  stoFullPeriodLength?: string;
  stoPartialPeriodTypeId?: string;
  stoPartialPeriodType?: string;
  stoPartialPeriodLength?: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  salesAccessChannels: string[];
  servicingAccessChannels: ServicingAccessChannel[];
  notes: string[];
}

export interface ServicingAccessChannel {
  id: number;
  version: number;
  servicingChannelId: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  servicingChannel: string;
}

export interface AddCoreProductRequest {
  createdUser?: string;
  currencyCode: string;
  currencyId: string;
  currencyNumeric?: string;
  dormantPeriod: string;
  dormantPeriodType: string;
  dormantPeriodTypeId: string;
  monthlyCharge?: string;
  productDescription?: string;
  productUrl?: string;
  status: string;
  stoFullPeriodLength?: string;
  stoFullPeriodType?: string;
  stoFullPeriodTypeId?: string;
  stoPartialPeriodLength?: string;
  stoPartialPeriodType?: string;
  stoPartialPeriodTypeId?: string;
  tcsAndCsUrl?: string;
  tenantId?: string;
  withdrawalsAllowedAfter?: string;
  withdrawalsAllowedAfterPeriod?: string;
  withdrawalsAllowedAfterPeriodId?: string;
}

export interface UpdateCoreProductRequest {
  currencyCode: string;
  currencyId: string;
  currencyNumeric?: string;
  dormantPeriod: string;
  dormantPeriodType: string;
  dormantPeriodTypeId: string;
  id?: string;
  modifiedUser?: string;
  monthlyCharge?: string;
  productDescription?: string;
  productUrl?: string;
  status: string;
  stoFullPeriodLength?: string;
  stoFullPeriodType?: string;
  stoFullPeriodTypeId?: string;
  stoPartialPeriodLength?: string;
  stoPartialPeriodType?: string;
  stoPartialPeriodTypeId?: string;
  tcsAndCsUrl?: string;
  tenantId?: string;
  version: string;
  withdrawalsAllowedAfter?: string;
  withdrawalsAllowedAfterPeriod?: string;
  withdrawalsAllowedAfterPeriodId?: string;
}

export interface CreditInterestRate {
  id: number;
  version: number;
  code?: any;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  tierBandSet: CRTierBandSet[];
}

interface CRTierBandSet {
  id: number;
  version: number;
  code?: any;
  tierBandMethodId: number;
  calculationMethodId: number;
  destinationId: number;
  attribute1?: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: string;
  modifiedDate?: string;
  tierBand: (CRTierBand | TierBand2)[];
  creditInterestEligibility: (
    | CRCreditInterestEligibility
    | CRCreditInterestEligibility2
  )[];
  notes: Note[];
  tierBandMethod?: string;
  calculationMethod?: string;
  destination?: string;
  creditInterestIdNo: string;
}

interface CRCreditInterestEligibility2 {
  id: number;
  version: number;
  code?: any;
  name: string;
  description: string;
  amount: number;
  indicator: boolean;
  texual: string;
  periodId: number;
  period?: any;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  notes: Note[];
  typeId: string;
  type: string;
  typeCode: string;
}

interface CRCreditInterestEligibility {
  id: number;
  version: number;
  code?: any;
  name: string;
  description: string;
  amount?: any;
  indicator: boolean;
  texual: string;
  periodId: number;
  period?: any;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  notes: any[];
  typeId: string;
  type: string;
  typeCode: string;
}

interface TierBand2 {
  id: number;
  version: number;
  code?: any;
  effectiveDate: string;
  tierValueMinimum: number;
  tierValueMaximum: number;
  depositInterestAppliedCoverageId: number;
  depositInterestApplicableBaseId: number;
  fixedVariableInterestRateTypeId: number;
  aer: number;
  bankInterestRate: number;
  bankIntCalBasisId: number;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  calculationFrequencyId: number;
  calculationFrequency: string;
  applicationFrequencyId: number;
  applicationFrequency: string;
  bankInterestRateTypeId: number;
  bankInterestRateType: string;
  depositInterestApplicableBase?: any;
  bankInterestCalBasis?: any;
  fixedVariableInterestRateType?: any;
  depositInterestAppliedCoverage?: any;
  notes: any[];
}

interface CRTierBand {
  id: number;
  version: number;
  code?: any;
  effectiveDate: string;
  tierValueMinimum: number;
  tierValueMaximum: number;
  depositInterestAppliedCoverageId: number;
  depositInterestApplicableBaseId: number;
  fixedVariableInterestRateTypeId: number;
  aer: number;
  bankInterestRate: number;
  bankIntCalBasisId: number;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  calculationFrequencyId: number;
  calculationFrequency: string;
  applicationFrequencyId: number;
  applicationFrequency: string;
  bankInterestRateTypeId: number;
  bankInterestRateType: string;
  depositInterestApplicableBase: string;
  bankInterestCalBasis: string;
  fixedVariableInterestRateType: string;
  depositInterestAppliedCoverage: string;
  notes: Note[];
}

export interface FeeCharge {
  subProductId: string;
  feeChargeDetailId: string;
  subProductCode: string;
  subProductName: string;
  calculationFrequencyCode: string;
  calculationFrequencyName: string;
  applicationFrequencyCode: string;
  applicationFrequencyName: string;
  feeTypeId: string;
  feeTypeCode: string;
  feeTypeName: string;
  feeCategoryId: string;
  feeCategoryCode: string;
  feeCategoryName: string;
  transactionCodeId: string;
  transactionSubCodeId: string;
  transactionSubCode: string;
  feeIndicator: string;
  feeRate: string;
  feeAmount: string;
  negotiableIndicator: string;
  deductIndicator: string;
  chargeBaseAmount: string;
  chargeAmount: string;
  minCapAmount: string;
  maxCapAmount: string;
}

export interface SubProductDetails {
  id: number;
  version: number;
  identification: string;
  name: string;
  predecessorId: string;
  marketingStateId: number;
  firstMarketedDate: string;
  lastMarketedDate: string;
  stateTenureLength: number;
  stateTenurePeriodId: number;
  stateTenurePeriod: string;
  accountTypeId: number;
  restrictedStatus: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  accountType: string;
  marketingState: string;
  notes: any[];
  coreProductDetail: CoreProductDetail;
  creditInterestDetail: CreditInterestDetail;
  featuresBenefitsDetail: FeaturesBenefitsDetail;
  eligibilityDetail: EligibilityDetail;
}

export interface EligibilityDetail {
  id: number;
  version: number;
  tenantId: string;
  ageEligibilityId: number;
  status: string;
  createdUser: string;
  createdDate: string;
}

export interface FeaturesBenefitsDetail {
  id: number;
  version: number;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5: string;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  featureBenefitItems: FeatureBenefitItem[];
  featureBenefitGroups: any[];
}

export interface CreditInterestDetail {
  id: number;
  version: number;
  code?: any;
  attribute1: number;
  attribute2: number;
  attribute3: string;
  attribute4: string;
  attribute5?: any;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
}

export interface CoreProductDetail {
  id: number;
  version: number;
  productUrl: string;
  productDescription: string;
  currencyId: number;
  currencyCode: string;
  currencyNumeric: string;
  tcsAndCsUrl: string;
  dormantPeriodTypeId: number;
  dormantPeriodType?: any;
  dormantPeriod: number;
  withdrawalsAllowedAfterPeriodId: number;
  withdrawalsAllowedAfterPeriod?: any;
  withdrawalsAllowedAfter: number;
  monthlyCharge: number;
  stoFullPeriodTypeId: number;
  stoFullPeriodType: string;
  stoFullPeriodLength: number;
  stoPartialPeriodTypeId: number;
  stoPartialPeriodType: string;
  stoPartialPeriodLength: number;
  tenantId: string;
  status: string;
  createdUser: string;
  createdDate: string;
  modifiedUser?: any;
  modifiedDate?: any;
  salesAccessChannels: any[];
  servicingAccessChannels: any[];
  notes: any[];
}

export interface CreditInterestDetail2 {
  subProductCode: string,
  creditInterestId: number,
  tierBandSetId: number,
  tierBandMethodId: number,
  tierBandMethod: string,
  calculationMethodId: number,
  calculationMethod: string,
  destinationId: number,
  destination: string,
  tierBandSetStatus: string,
  effectiveDate: string,
  tierValueMinimum: number,
  tierValueMaximum: number,
  calculationFrequencyId: number,
  calculationFrequency: string,
  calculationFrequencyType: string,
  calculationFrequencyUnit: number,
  applicationFrequencyId: number,
  applicationFrequency: string,
  applicationFrequencyType: string,
  applicationFrequencyUnit: number,
  bankInterestRateTypeId: number,
  bankInterestRateType: string,
  bankInterestRate: number,
  depositInterestAppliedCoverageId: number,
  depositInterestAppliedCoverage: string,
  depositInterestApplicableBaseId: number,
  depositInterestApplicableBase: string,
  fixedVariableInterestRateTypeId: number,
  fixedVariableInterestRateType: string,
  aer: number,
  bankIntCalBasisId: number,
  bankInterestCalBasis: string,
  tierBandStatus: string
}