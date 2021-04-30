
export interface TaxCode {
    id: number;
    taxCodeTenantId: string;
    taxCode: string;
    taxCodeName: string;
    taxCategoryCommonListId: string;
    taxCategoryDesc: string;
    taxCodeDesc: string;
    transCodeId: string;
    transCodeDesc: string;
    transSubCodeId: string;
    transSubCodeDesc: string;
    taxCodeStatus: string;
    taxCodeCreatedUser: string;
    taxCodeCreatedDate: string;
    taxCodeModifiedUser: string;
    taxCodeModifiedDate: string;
    version: number;
}

export interface TaxCodeSaveRequest {
    taxCode: string;
    taxCodeName: string;
    taxCategoryCommonListId: number;
    taxCategoryDesc: string;
    taxCodeDesc: string;
    transCodeId: number;
    transCodeDesc: string;
    transSubCodeId: number;
    transSubCodeDesc: string;
    taxCodeStatus: string;
    taxCodeCreatedUser: string;
}

export interface TaxCodeUpdateRequest {
    taxCode: string;
    taxCodeName: string;
    taxCategoryCommonListId: number;
    taxCategoryDesc: string;
    taxCodeDesc: string;
    transCodeId: number;
    transCodeDesc: string;
    transSubCodeId: number;
    transSubCodeDesc: string;
    taxCodeStatus: string;
    modifiedUser: string;
    version: number;
}

export interface TaxEvent {
    id: number;
    tenantId: string;
    code: string;
    name: string;
    desc: string;
    status: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
    version: number;
}

export interface TaxEventSaveRequest {
    taxEventCode: string;
    taxEventName: string;
    taxEventDesc: string;
    taxEventStatus: string;
    taxEventCreatedUser: string;
}

export interface TaxEventUpdateRequest {
    taxEventCode: string;
    taxEventName: string;
    taxEventDesc: string;
    taxEventStatus: string;
    modifiedUser: string;
    version: string;
}

export interface TaxFormulaDetail {
    id: number;
    taxFormulaTenantId: string;
    taxFormulaCode: string;
    taxFormulaDesc: string;
    taxFormulaStatus: string;
    taxFormulaTaxCount: number;
    version: number;
}

export interface TaxProfile {
    id: number;
    tenantId: string;
    effective_date: string;
    taxCodeId: number;
    applicable_level: string;
    prod_cate_comn_li_id: number;
    prod_category_desc: string;
    app_acc_type_comn_li_id: number;
    applicable_acc_type_desc: string;
    applicable_prod_status: string;
    applicable_prod_id: number;
    applicable_prod_name: string;
    decl_type_comn_li_id: number;
    declaration_type_desc: string;
    customer_category: string;
    cust_sub_type_ind_id: number;
    cust_sub_type_ind_desc: string;
    cust_sub_type_non_ind_id: number;
    cust_sub_type_non_ind_desc: string;
    customer_resident_type_id: number;
    customer_resident_type_desc: string;
    applicable_min_age: number;
    applicable_max_age: number;
    age_effective_date_type: string;
    tax_amount_type: string;
    tax_amount: number;
    tax_rate: number;
    tax_applicable_min_value: number;
    tax_applicable_max_value: number;
    cf_min_value: number;
    cf_max_value: number;
    other_interest_income: string;
    status: string;
    createdUser: string;
    createdDate: string;
    modifiedUser: string;
    modifiedDate: string;
    version: number;
}

export interface TaxProfileUpdateRequest {
    taxEffectiveDate: string;
    taxCodeId: number;
    taxApplicableLevel: string;
    productCategoryComnListId: number;
    productCategoryDesc: string;
    applicableAccTypeComnListId: number;
    applicableAccTypeDesc: string;
    applicableProductStatus: string;
    applicableProductId: number;
    applicableProductName: string;
    declarationTypeComnListId: number;
    declarationTypeDesc: string;
    customerCategory: string;
    customerSubTypeIndividualId: string;
    customerSubTypeIndividualDesc: string;
    customerSubTypeNonIndividualId: string;
    customerSubTypeNonIndividualDesc: string;
    customerResidentTypeId: string;
    customerResidentTypeDesc: string;
    taxApplicableMinAge: number;
    taxApplicableMaxAge: number;
    ageEffectiveDateType: string;
    taxAmountType: string;
    taxAmount: number;
    taxRate: number;
    taxApplicableMinValue: number;
    taxApplicableMaxValue: number;
    ceilingFloorfMinValue: number;
    ceilingFloorfMaxValue: number;
    otherInterestIncome: string;
    taxProfileStatus: string;
    modifiedUser: string;
    version: number;
}

export interface TaxProfileSaveRequest {
    taxEffectiveDate: string;
    taxCodeId: number;
    taxApplicableLevel: string;
    productCategoryComnListId: number;
    productCategoryDesc: string;
    applicableAccTypeComnListId: number;
    applicableAccTypeDesc: string;
    applicableProductStatus: string;
    applicableProductId: number;
    applicableProductName: string;
    declarationTypeComnListId: number;
    declarationTypeDesc: string;
    customerCategory: string;
    customerSubTypeIndividualId: string;
    customerSubTypeIndividualDesc: string;
    customerSubTypeNonIndividualId: string;
    customerSubTypeNonIndividualDesc: string;
    customerResidentTypeId: string;
    customerResidentTypeDesc: string;
    taxApplicableMinAge: number;
    taxApplicableMaxAge: number;
    ageEffectiveDateType: string;
    taxAmountType: string;
    taxAmount: number;
    taxRate: number;
    taxApplicableMinValue: number;
    taxApplicableMaxValue: number;
    ceilingFloorfMinValue: number;
    ceilingFloorfMaxValue: number;
    otherInterestIncome: string;
    taxProfileStatus: string;
    taxProfileCreatedUser: string;
}

export interface TaxProfileCalculationResource {
    applicableAccType: "SAVINGS" | "CURRENT_ACCOUNT";
    applicableProductId?: string;
    baseAmount?: string;
    customerCategoryCode?: "ORIN" | "ORCO";
    customerDob?: string;
    customerResidentTypeId?: string;
    customerSubTypeId?: string;
    declarationType?: "DECLARED" | "NOTDECLARED" | "EXEMPTED" | "TAXPAYEE" | "IRDRATE";
    message?: string;
    otherInterestIncome?: string;
    productCategoryComnListId: string;
    taxEventCode: string;
}