export interface ModuleMasterAddResource {
  createdUser?: string;
  id?: string;
  moduleMasterChqMaxBackdys?: string;
  moduleMasterChqNumFormat?: string;
  moduleMasterDaysPerYear: number;
  moduleMasterDefaultCurrency: string;
  moduleMasterDefaultCurrencyId: number;
  moduleMasterDefaultCurrencyNumeric?: string;
  moduleMasterFinYearSdate: string;
  moduleMasterGracePeriod: string;
  moduleMasterHoId: number;
  moduleMasterHoLocation: string;
  moduleMasterName: string;
  moduleMasterPenalIntRate: string;
  moduleMasterStatus: "ACTIVE" | "INACTIVE";
  moduleMasterTenantId?: string;
  moduleMasterWeeksPerYear: number;
}

export interface MasterDetails {
  id: number;
  moduleMasterChqMaxBackdys: string;
  moduleMasterChqNumFormat: string;
  moduleMasterDaysPerYear: number;
  moduleMasterDefaultCurrency: string;
  moduleMasterDefaultCurrencyId: number;
  moduleMasterDefaultCurrencyNumeric: string;
  moduleMasterFinYearSdate: string;
  moduleMasterGracePeriod: string;
  moduleMasterHoId: number;
  moduleMasterHoLocation: string;
  moduleMasterName: string;
  moduleMasterPenalIntRate: string;
  moduleMasterStatus: "ACTIVE" | "INACTIVE";
  moduleMasterTenantId: string;
  moduleMasterWeeksPerYear: number;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  version: number;
}

export interface ModuleMasterUpdateResource {
  id?: string;
  modifiedUser?: string;
  moduleMasterChqMaxBackdys?: string;
  moduleMasterChqNumFormat?: string;
  moduleMasterDaysPerYear: number;
  moduleMasterDefaultCurrency: string;
  moduleMasterDefaultCurrencyId: number;
  moduleMasterDefaultCurrencyNumeric?: string;
  moduleMasterFinYearSdate: string;
  moduleMasterGracePeriod: string;
  moduleMasterHoId: number;
  moduleMasterHoLocation: string;
  moduleMasterName: string;
  moduleMasterPenalIntRate: string;
  moduleMasterStatus: "ACTIVE" | "INACTIVE";
  moduleMasterTenantId?: string;
  moduleMasterWeeksPerYear: number;
  version: string;
}

export interface ModuleFeatureAddResource {
  createdUser?: string;
  id?: string;
  moduleFeatureCode: string;
  moduleFeatureDescription?: string;
  moduleFeatureMasterId: number;
  moduleFeatureName: string;
  moduleFeatureStatus: "ACTIVE" | "INACTIVE";
  moduleFeatureTenantId?: string;
  moduleFeatureType?: "AMOUNT" | "INDICATOR" | "TEXTUAL";
  moduleFeatureTypeAmount?: number;
  moduleFeatureTypeIndicator?: string;
  moduleFeatureTypeTextual?: string;
}

export interface FeatureDetails {
  id: string;
  moduleFeatureCode: string;
  moduleFeatureDescription: string;
  moduleFeatureMasterId: number;
  moduleFeatureName: string;
  moduleFeatureStatus: "ACTIVE" | "INACTIVE";
  moduleFeatureTenantId: string;
  moduleFeatureType: "AMOUNT" | "INDICATOR" | "TEXTUAL";
  moduleFeatureTypeAmount: number;
  moduleFeatureTypeIndicator: string;
  moduleFeatureTypeTextual: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
  version: number;
}

export interface ModuleFeatureUpdateResource {
  id?: string;
  moduleFeatureCode: string;
  moduleFeatureDescription?: string;
  moduleFeatureMasterId: number;
  moduleFeatureName: string;
  moduleFeatureStatus: "ACTIVE" | "INACTIVE";
  moduleFeatureTenantId?: string;
  moduleFeatureType?: "AMOUNT" | "INDICATOR" | "TEXTUAL";
  moduleFeatureTypeAmount?: number;
  moduleFeatureTypeIndicator?: string;
  moduleFeatureTypeTextual?: string;
  version: number;
}

export interface FeatureBenefitEligibilityTypeResponse {
  id: number;
  version: number;
  code: string;
  name: string;
  description: string;
  tenantId: string;
  status: "ACTIVE" | "INACTIVE";
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  createdUser: string;
  createdDate: string;
  modifiedUser: string;
  modifiedDate: string;
}

export interface FeatureBenefitItemEligibilityNotes {
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

export interface FeatureBenefitItemEligibilityNoteResponse {
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
