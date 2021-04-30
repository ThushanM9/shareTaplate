import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";
import {
  AddBonusInterestRequest,
  AddCommonListRequest,
  AddCoreProductRequest,
  AddProductSegmentRequest,
  AgeEligibility,
  AgeEligiblitySaveRequest,
  AgeEligiblityUpdateRequest,
  ApplicationFrequency,
  ApplicationFrequencySaveRequest,
  ApplicationFrequencyUpdateRequest,
  BonusInterest,
  BonusInterestEligibility,
  BonusInterestEligibilitySaveRequest,
  BonusTierBandSetSaveRequest,
  BonusTierBandSetUpdateRequest,
  CalculationFrequency,
  CalculationFrequencySaveRequest,
  CalculationFrequencyUpdateRequest,
  CoreProduct,
  CreditCheckEligibility,
  CreditInterestDetail2,
  CreditInterestEligibility,
  CreditInterestEligibilitySaveRequest,
  CreditInterestEligibilityType,
  CreditInterestEligibilityTypeSaveRequest,
  CreditInterestEligibilityTypeUpdateRequest,
  CreditInterestEligibilityUpdateRequest,
  CreditInterestRate,
  CreditInterestTemplate,
  CreditInterestTemplateSaveRequest,
  CreditInterestTemplateUpdateRequest,
  CreditInterestTierBandSet,
  CreditInterestTierBandSetUpdateRequest,
  EligibilityType,
  EligibilityTypeSaveRequest,
  EligibilityTypeUpdateRequest,
  FeatureBenefitCard,
  FeatureBenefitCardMapUpdateRequest,
  FeatureBenefitCardSaveRequest,
  FeatureBenefitCardUpdateRequest,
  FeatureBenefitEligibility,
  FeatureBenefitEligibilitySaveRequest,
  FeatureBenefitEligibilityType,
  FeatureBenefitEligibilityTypeSaveRequest,
  FeatureBenefitEligibilityTypeUpdateRequest,
  FeatureBenefitEligibilityUpdateRequest,
  FeatureBenefitGroup,
  FeatureBenefitGroupSaveRequest,
  FeatureBenefitGroupType,
  FeatureBenefitGroupTypeSaveRequest,
  FeatureBenefitGroupTypeUpdateRequest,
  FeatureBenefitGroupUpdateRequest,
  FeatureBenefitItem,
  FeatureBenefitItemSaveRequest,
  FeatureBenefitItemUpdateRequest,
  FeatureBenifitCardSchema,
  FeatureBenifitCardSchemaSaveRequest,
  FeatureBenifitCardSchemaUpdateRequest,
  FeatureBenifitCardType,
  FeatureBenifitCardTypeSaveRequest,
  FeatureBenifitCardTypeUpdateRequest,
  FeatureBenifitItemType,
  FeatureBenifitItemTypeSaveRequest,
  FeatureBenifitItemTypeUpdateRequest,
  FeeCategoryType,
  FeeCategoryTypeSaveRequest,
  FeeCategoryTypeUpdateRequest,
  FeeCharge,
  FeeChargeCap,
  FeeChargeCapSaveRequest,
  FeeChargeCapUpdateRequest,
  FeeChargeDetailSaveRequest,
  FeeChargeDetailUpdateRequest,
  FeeType,
  FeeTypeSaveRequest,
  FeeTypeUpdateRequest,
  Frequency,
  FrequencyAddResource,
  FrequencyUpdateResource,
  IdEligibility,
  IdEligibilitySaveRequest,
  IdEligibilityUpdateRequest,
  IndustryEligibility,
  MobileWallet,
  MobileWalletSaveRequest,
  MobileWalletType,
  MobileWalletTypeSaveRequest,
  MobileWalletTypeUpdateRequest,
  MobileWalletUpdateRequest,
  NoteSaveRequest,
  NoteUpdateRequest,
  OfficerEligibility,
  OfficerEligibilitySaveRequest,
  OfficerEligibilityUpdateRequest,
  OtherBankInterestType,
  OtherBankInterestTypeSaveRequest,
  OtherBankInterestTypeUpdateRequest,
  OtherEligibility,
  OtherEligibilityType,
  OtherEligibilityTypeSaveRequest,
  OtherEligibilityTypeUpdateRequest,
  OtherFeeRateType,
  Overdraft,
  OverdraftFeeCharge,
  OverdraftFeeChargeCap,
  OverdraftFeeChargeCapSaveRequest,
  OverdraftFeeChargeCapUpdateRequest,
  OverdraftFeeChargeSaveRequest,
  OverdraftFeeChargeUpdateRequest,
  OverdraftFeesChargesDetails,
  OverdraftSaveRequest,
  OverdraftTierBandSaveRequest,
  OverdraftTierBandSetSaveRequest,
  OverdraftTierBandSetUpdateRequest,
  OverdraftTierBandUpdateRequest,
  OverdraftUpdateRequest,
  Period,
  PeriodAddResource,
  PeriodUpdateResource,
  Product,
  ProductBrand,
  ProductBrandSaveRequest,
  ProductBrandUpdateRequest,
  ProductCommonList,
  ProductSaveRequest,
  ProductSegment,
  ProductSubProduct,
  ProductUpdateRequest,
  RateLimitDetails,
  RateLimitSaveRequest,
  ResidencyEligibility,
  ResidencyEligibilitySaveRequest,
  ResidencyEligibilityUpdateRequest,
  ResidencyInclude,
  ResidencyIncludeSaveRequest,
  ResidencyIncludeUpdateRequest,
  SalesAccessChannel,
  Segment,
  segmentSaveRequest,
  segmentUpdateRequest,
  ServiceAccessChannel,
  SICCode,
  SICCodeSaveRequest,
  SICCodeUpdateRequest,
  SubProduct,
  SubProductCommonDetails,
  SubProductDetails,
  SubProductFeatureBenefit,
  SubProductFeeChargeDetail,
  SubProductSaveRequest,
  SubProductUpdateRequest,
  TariffType,
  TariffTypeSaveRequest,
  TierBand,
  TierBandSaveRequest,
  TierBandSet,
  TierBandSetSaveRequest,
  TierBandSetUpdateRequest,
  TierBandUpdateRequest,
  TradingEligibility,
  TradingEligibilitySaveRequest,
  TradingEligibilityUpdateRequest,
  TradingType,
  TradingTypeSaveRequest,
  TradingTypeUpdateRequest,
  UpdateBonusInterestEligibilityRequest,
  UpdateBonusInterestRequest,
  UpdateCommonListRequest,
  UpdateCoreProductRequest,
  UpdateProductSegmentRequest
} from "./interfaces";

export class CasaProductBCAService {
  constructor(private env: EnvConfig) {}

  public async getAllProducts(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<Product>> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product/${this.env.tenantId}/all` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductById(id: string) {
    let results: AxiosResponse<Product> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductByName(name: string) {
    let results: AxiosResponse<Product[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductByIdentification(identification: string) {
    let results: AxiosResponse<Product[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product/${this.env.tenantId}/identification/${identification}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<Product[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductByAccountType(
    accountType: "SAVINGS" | "CURRENT_ACCOUNT"
  ) {
    let results: AxiosResponse<Product[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product/${this.env.tenantId}/accounttype/${accountType}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveProduct(brandId: string, data: ProductSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/product/${this.env.tenantId}/brand/${brandId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateProduct(productId: string, data: ProductUpdateRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/product/${this.env.tenantId}/${productId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addProductNote(
    productId: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      createdUser: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/product-note/${this.env.tenantId}/product/${productId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async getProductNoteByProductId(productId: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product-note/${this.env.tenantId}/product/${productId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateProductNoteById(
    id: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/product-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************************
   * SUB PRODUCT TEMPLATE *
   ************************/

  public async getAllSubProducts() {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductsByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<SubProduct[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductsById(id: string) {
    let results: AxiosResponse<SubProduct> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductsByName(name: string) {
    let results: AxiosResponse<SubProduct[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductsByIdentification(identification: string) {
    let results: AxiosResponse<SubProduct> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/identification/${identification}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductsByProductId(productId: number) {
    // http://132.145.228.83/casa-product-bca/sub-product/AnRkr/productId/316
    let results: AxiosResponse<SubProductDetails[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/productId/${productId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveSubProduct(productId: string, data: SubProductSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/product/${productId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateSubProductById(
    subProductId: string,
    data: SubProductUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/${subProductId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductCommonDetailsByIdentification(
    identification: string
  ) {
    let results: AxiosResponse<SubProductCommonDetails> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/common-details/${this.env.tenantId}/identification/${identification}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductCommonDetailsById(id: string) {
    let results: AxiosResponse<SubProductCommonDetails> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/common-details/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductDetailsByCreditInterestId(
    creditInterestId: string
  ) {
    let results: AxiosResponse<SubProduct[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/credit-interest/${creditInterestId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductAccountCloseCharges(subProductCode: string) {
    let results: AxiosResponse<SubProduct[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/fee-charge-detail/identification/${subProductCode}/calculationfrequencycode/FEAC`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductByEligibilitytId(eligibilityId: string) {
    let results: AxiosResponse<SubProduct[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/eligibility/${eligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductsFeatureBenifits(featuresBenefitsId: string) {
    let results: AxiosResponse<SubProductFeatureBenefit[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/{tenantId}/features-benefits/${featuresBenefitsId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductOtherFeeChargesByIdentification(
    identification: string
  ) {
    let results: AxiosResponse<SubProductFeeChargeDetail[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/other-fees-charges/${this.env.tenantId}/identification/${identification}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductByOverdraftId(overdraftId: string) {
    let results: AxiosResponse<SubProduct[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/overdraft/${overdraftId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductByCoreProductId(coreProductId: string) {
    let results: AxiosResponse<SubProduct[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/core-product/${coreProductId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCoreProductDetailsBySubProductId(subProductId: number) {
    let results: AxiosResponse<CoreProduct> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/coreProductDetails/${this.env.tenantId}/subProductId/${subProductId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductCreditInterestBySubProductIdentification(
    identification: string
  ) {
    let results: AxiosResponse<CreditInterestRate> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/credit-interest/${this.env.tenantId}/identification/${identification}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addSubProductNote(
    subProductId: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      createdUser: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/sub-product-note/${this.env.tenantId}/sub-product/${subProductId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateSubProductNoteById(
    id: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/sub-product-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************
   * CARD TYPE *
   *************/

  public async getCardTypesByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<FeatureBenifitCardType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCardTypesById(id: string) {
    let results: AxiosResponse<FeatureBenifitCardType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-type/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllCardTypes() {
    let results: AxiosResponse<FeatureBenifitCardType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCardTypesByCode(code: string) {
    let results: AxiosResponse<FeatureBenifitCardType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCardTypesByName(name: string) {
    let results: AxiosResponse<FeatureBenifitCardType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveCardType(data: FeatureBenifitCardTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCardTypeById(
    id: string,
    data: FeatureBenifitCardTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-type/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***************
   * CARD SCHEME *
   ***************/

  public async getSchemeTypesByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<FeatureBenifitCardSchema[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-scheme/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllSchemeTypes() {
    let results: AxiosResponse<FeatureBenifitCardSchema[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-scheme/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSchemeTypeById(id: string) {
    let results: AxiosResponse<FeatureBenifitCardSchema[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-scheme/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSchemeTypeByCode(code: string) {
    let results: AxiosResponse<FeatureBenifitCardSchema[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-scheme/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSchemeTypeByName(name: string) {
    let results: AxiosResponse<FeatureBenifitCardSchema[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-scheme/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveSchemeType(data: FeatureBenifitCardSchemaSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-scheme/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateSchemeTypeById(
    id: string,
    data: FeatureBenifitCardSchemaUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-scheme/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChargeAmountDetails(
    subProductId: string,
    calculationfrequencycodes: string,
    chargebaseamount: number
  ) {
    let results: AxiosResponse<FeeCharge[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/calculations/${this.env.tenantId}/sub-product-id/${subProductId}/get-charge?calculationfrequencycodes=${calculationfrequencycodes}&chargebaseamount=${chargebaseamount}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**************
   * RATE LIMIT *
   **************/

  public async getAllRateLimitDetails() {
    let results: AxiosResponse<RateLimitDetails[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/rate-limit/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getRateLimitDetailsById(id: string) {
    let results: AxiosResponse<RateLimitDetails> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/rate-limit/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getRateLimitDetailsByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<RateLimitDetails> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/rate-limit/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveRateLimitDetails(data: RateLimitSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/rate-limit/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateRateLimitDetails() {
    // TODO: missing API
    return {};
  }

  /*****************
   * PRODUCT BRAND *
   *****************/

  public async getAllBrands() {
    let results: AxiosResponse<ProductBrand[]> = await axios.get(
      this.env.basePath + `/casa-product-bca/brand/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBrandById(brandId: string) {
    let results: AxiosResponse<ProductBrand[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/brand/${this.env.tenantId}/${brandId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBrandByName(name: string) {
    let results: AxiosResponse<ProductBrand[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/brand/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBrandByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<ProductBrand[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/brand/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBrandByCode(code: string) {
    let results: AxiosResponse<ProductBrand[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/brand/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBrand(data: ProductBrandSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/brand/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBrandById(id: string, data: ProductBrandUpdateRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath + `/casa-product-bca/brand/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBrandWithSubDetails(id: string) {
    let results: AxiosResponse<ProductBrand[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/brand/details/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /****************
   * CORE PRODUCT *
   ****************/

  public async getAllCoreProducts() {
    let results: AxiosResponse<CoreProduct[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/core-product/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCoreProductById(id: number) {
    let results: AxiosResponse<CoreProduct> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/core-product/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCoreProductByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<CoreProduct[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/core-product/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveCoreProduct(data: AddCoreProductRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/core-product/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCoreProduct(id: number, data: UpdateCoreProductRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/core-product/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addCoreProdcutNote(
    coreProductId: number,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/core-product-note/${this.env.tenantId}/core-product/${coreProductId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCoreProdcutNote(id: number, data: NoteUpdateRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/core-product-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // new method
  public async getCoreProdcutNote(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/core-product-note/${this.env.tenantId}/notes/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***********
   * SEGMENT *
   ***********/

  public async getAllSegments() {
    let results: AxiosResponse<Segment[]> = await axios.get(
      this.env.basePath + `/casa-product-bca/segment/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSegmentById(segmentId: string) {
    let results: AxiosResponse<Segment> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/segment/${this.env.tenantId}/${segmentId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSegmentByName(name: string) {
    let results: AxiosResponse<Segment[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/segment/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSegmentByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<Segment[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/segment/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSegmentByCode(code: string) {
    let results: AxiosResponse<Segment[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/segment/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveSegment(data: segmentSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/segment/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateSegmentById(
    segmentId: string,
    data: segmentUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/segment/${this.env.tenantId}/${segmentId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************
   * FREQUENCY *
   *************/

  public async getFrequencyByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<Frequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/frequency/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // public async getFrequency(status: "ACTIVE" | "INACTIVE") {
  //   let results: AxiosResponse<Frequency[]> = await axios.get(
  //     this.env.basePath +
  //       `/casa-product-bca/frequency/${this.env.tenantId}/status/${status}`,
  //     {
  //       headers: {
  //         Authorization: this.env.token,
  //       },
  //     }
  //   );
  //   return results.data;
  // }

  public async getFrequencyById(frequencyId: number) {
    let results: AxiosResponse<Frequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/frequency/${this.env.tenantId}/${frequencyId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFrequencyByCode(code: string) {
    let results: AxiosResponse<Frequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/frequency/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFrequencyByName(name: string) {
    let results: AxiosResponse<Frequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/frequency/${this.env.tenantId}/code/$name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllFrequencies() {
    let results: AxiosResponse<Frequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/frequency/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFrequency(data: FrequencyAddResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/frequency/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFrequencytById(
    frequencyId: string,
    data: FrequencyUpdateResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/frequency/${this.env.tenantId}/${frequencyId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************************
   * CALCULATION FREQUENCY *
   *************************/

  public async getAllCalculationFrequencies() {
    let results: AxiosResponse<CalculationFrequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/calculation-frequency/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCalculationFrequenciesById(calculationFrequencyId: string) {
    let results: AxiosResponse<CalculationFrequency> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/calculation-frequency/${this.env.tenantId}/${calculationFrequencyId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCalculationFrequencyByCode(calculationFrequencyCode: string) {
    let results: AxiosResponse<CalculationFrequency> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/calculation-frequency/${this.env.tenantId}/code/${calculationFrequencyCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCalculationFrequenciesByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<CalculationFrequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/calculation-frequency/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCalculationFrequencyByName(calculationFrequencyName: string) {
    let results: AxiosResponse<CalculationFrequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/calculation-frequency/${this.env.tenantId}/name/${calculationFrequencyName}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveCalculationFrequency(data: CalculationFrequencySaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/calculation-frequency/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCalculationFrequencytById(
    otherCalculationFrequencyId: string,
    data: CalculationFrequencyUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/calculation-frequency/${this.env.tenantId}/${otherCalculationFrequencyId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************************
   * APPLICATION FREQUENCY *
   *************************/

  public async getAllApplicationFrequencies() {
    let results: AxiosResponse<ApplicationFrequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/application-frequency/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getApplicationFrequencyById(applicationFrequencyId: number) {
    let results: AxiosResponse<ApplicationFrequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/application-frequency/${this.env.tenantId}/${applicationFrequencyId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getApplicationFrequencyByCode(applicationFrequencyCode: string) {
    let results: AxiosResponse<ApplicationFrequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/application-frequency/${this.env.tenantId}/code/${applicationFrequencyCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getApplicationFrequenciesByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<ApplicationFrequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/application-frequency/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getApplicationFrequencyByName(applicationFrequencyName: string) {
    let results: AxiosResponse<ApplicationFrequency[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/application-frequency/${this.env.tenantId}/name/${applicationFrequencyName}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveApplicationFrequency(data: ApplicationFrequencySaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/application-frequency/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateApplcationFrequencyById(
    applicationFrequencyId: string,
    data: ApplicationFrequencyUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/application-frequency/${this.env.tenantId}/${applicationFrequencyId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**********************
   * BANK INTEREST TYPE *
   **********************/

  public async getAllOtherBankInterestTypes() {
    let results: AxiosResponse<OtherBankInterestType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bank-interest-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherBankInterestTypeById(otherBankInterestTypeId: string) {
    let results: AxiosResponse<OtherBankInterestType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bank-interest-type/${this.env.tenantId}/${otherBankInterestTypeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherBankInterestTypeByCode(bankInterestTypeCode: string) {
    let results: AxiosResponse<OtherBankInterestType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bank-interest-type/${this.env.tenantId}/code/${bankInterestTypeCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherBankInterestTypeByName(bankInterestTypeName: string) {
    let results: AxiosResponse<OtherBankInterestType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bank-interest-type/${this.env.tenantId}/name/${bankInterestTypeName}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherBankInterestTypeByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<OtherBankInterestType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bank-interest-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOtherBankInterestType(
    data: OtherBankInterestTypeSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bank-interest-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOtherBankInterestTypeById(
    otherBankInterestTypeId: string,
    data: OtherBankInterestTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/bank-interest-type/${this.env.tenantId}/${otherBankInterestTypeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************************************
   * CREDIT INTEREST ELIGIBILITY TYPE *
   ************************************/

  public async getAllCreditInterestEligibilityTypes() {
    let results: AxiosResponse<CreditInterestEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestEligibilityTypeById(eligibilityId: string) {
    let results: AxiosResponse<CreditInterestEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-type/${this.env.tenantId}/${eligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestEligibilityTypeByCode(code: string) {
    let results: AxiosResponse<CreditInterestEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestEligibilityTypeByName(name: string) {
    let results: AxiosResponse<CreditInterestEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestEligibilityTypeByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<CreditInterestEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveCreditInterestEligibilityType(
    data: CreditInterestEligibilityTypeSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCreditInterestEligibilityType(
    eligibilityId: string,
    data: CreditInterestEligibilityTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-type/${this.env.tenantId}/${eligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*******************************
   * CREDIT INTEREST ELIGIBILITY *
   *******************************/

  public async getAllCreditInterestEligibilities() {
    let results: AxiosResponse<CreditInterestEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestEligibilityById(eligibilityId: string) {
    let results: AxiosResponse<CreditInterestEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility/${this.env.tenantId}/${eligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestEligibilityByEligibilityTypeCode(code: string) {
    let results: AxiosResponse<CreditInterestEligibility[]> = await axios.get(
      this.env.basePath +
        `casa-product-bca/credit-interest-eligibility/${this.env.tenantId}/eligibility-type-code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestEligibilityByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<CreditInterestEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestEligibilityByName(name: string) {
    let results: AxiosResponse<CreditInterestEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveCreditInterestEligibility(
    data: CreditInterestEligibilitySaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCreditInterestEligibility(
    eligibilityId: string,
    data: CreditInterestEligibilityUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility/${this.env.tenantId}/${eligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestEligibilityNoteById(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-note/${this.env.tenantId}/credit-interest-eligi-id/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addCreditInterestEligibilityNote(
    eligibilityId: number,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-note/${this.env.tenantId}/credit-interest-eligibility/${eligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCreditInterestEligibilityNoteById(
    id: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/credit-interest-eligibility-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*****************************
   * CREDIT INTEREST TIER BAND *
   *****************************/

  public async getAllCreditInterestTierBandSets() {
    let results: AxiosResponse<CreditInterestTierBandSet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-credit-interest-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestTierBandSetById(id: string) {
    let results: AxiosResponse<CreditInterestTierBandSet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-credit-interest-eligibility/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestTierBandSetByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<CreditInterestTierBandSet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-credit-interest-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestTierBandSetByName(name: string) {
    let results: AxiosResponse<CreditInterestTierBandSet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-credit-interest-eligibility/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveCreditInterestTierBandSet(
    tireBandSetId: string,
    creditInterestEligibilityId: string,
    data: {
      status: "ACTIVE" | "INACTIVE";
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-credit-interest-eligibility/${this.env.tenantId}/${tireBandSetId}/${creditInterestEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCreditInterestTierBandSet(
    eligibilityId: string,
    data: CreditInterestTierBandSetUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-credit-interest-eligibility/${this.env.tenantId}/${eligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getInterestEligByTierBandSetId(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-credit-interest-eligibility/${this.env.tenantId}/tier-band-set-crd-interest/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async getInterestEligById(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-credit-interest-eligibility/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /****************************
   * CREDIT INTEREST TEMPLATE *
   ****************************/

  public async getCreditInterestTemplatesByCreditInterestId(
    creditInterestId: string
  ) {
    let results: AxiosResponse<CreditInterestTemplate> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest/${this.env.tenantId}/${creditInterestId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllCreditInterestTemplates() {
    let results: AxiosResponse<CreditInterestTemplate[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestTemplatesByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<CreditInterestTemplate[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveCreditInterestTemplate(
    data: CreditInterestTemplateSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/credit-interest/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCreditInterestTemplateById(
    id: number,
    data: CreditInterestTemplateUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/credit-interest/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // casa-product-bca/credit-interest/details

  public async getTierBandDetailsByCredintInterestTempId(
    creditInterestId: string
  ) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-interest/details/${this.env.tenantId}/${creditInterestId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );

    return results.data?.tierBandSet!;
  }

  /*****************
   * TIER BAND SET *
   *****************/

  public async getAllTierBandSet() {
    let results: AxiosResponse<TierBandSet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set/${this.env.tenantId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTierBandSetByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<TierBandSet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTierBandSetById(id: number) {
    let results: AxiosResponse<TierBandSet> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTierBandSet(
    creditInterestId: string,
    data: TierBandSetSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/tier-band-set/${this.env.tenantId}/credit-interest/${creditInterestId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTierBandSetByCreditInterest(creditInterestId: string) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set/${this.env.tenantId}/credit-interest/${creditInterestId}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTierBandSet(
    tireBandSetId: string,
    data: TierBandSetUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/tier-band-set/${this.env.tenantId}/${tireBandSetId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTierBandSetNotes(tierBandSetId: string) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-note/${this.env.tenantId}/tier-band-set/${tierBandSetId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addTierBandSetNotes(
    tierBandSetId: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-note/${this.env.tenantId}/tier-band-set/${tierBandSetId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTierBandSetNotesBytierBandSetId(
    tierBandSetId: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/tier-band-set-note/${this.env.tenantId}/${tierBandSetId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************
   * TIER BAND *
   *************/

  public async getAllTierBands() {
    let results: AxiosResponse<TierBand[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTierBandsByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<TierBand[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTierBandById(id: number) {
    let results: AxiosResponse<TierBand> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTierBand(tierBandSetId: string, data: TierBandSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/tier-band/${this.env.tenantId}/tier-band-set/${tierBandSetId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTierBandAll(tierBandSetId: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tier-band/${this.env.tenantId}/tier-band-set/${tierBandSetId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTierBandById(id: string, data: TierBandUpdateRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/tier-band/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBonusTierBand(
    tierBandSetId: string,
    data: BonusTierBandSetSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band/${this.env.tenantId}/tier-band-set/${tierBandSetId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBonusTierBandById(
    tierBandSetId: string,
    data: BonusTierBandSetUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band/${this.env.tenantId}/${tierBandSetId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addBonusTierBandNote(tierBandId: string, data: NoteSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-note/${this.env.tenantId}/tier-band/${tierBandId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /******************************
   * BONUS INTEREST ELIGIBILITY *
   ******************************/

  public async getAllBonusInterestEligibility() {
    let results: AxiosResponse<BonusInterestEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusInterestEligibilityById(id: number) {
    let results: AxiosResponse<BonusInterestEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusInterestEligibilityByName(name: string) {
    let results: AxiosResponse<BonusInterestEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusInterestEligibilityByTypeCode(code: string) {
    let results: AxiosResponse<BonusInterestEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility/${this.env.tenantId}/eligibility-type-code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusInterestEligibilityByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<BonusInterestEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBonusInterestEligibility(
    data: BonusInterestEligibilitySaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBonusInterestEligibilityById(
    id: string,
    data: UpdateBonusInterestEligibilityRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusInterestEligibilityNote(eligibilityId: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility-note/${this.env.tenantId}/bonus-interest-eligibility/${eligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addBonusInterestEligibilityNote(
    eligibilityId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility-note/${this.env.tenantId}/bonus-interest-eligibility/${eligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBonusInterestEligibilityNote(
    id: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/bonus-interest-eligibility-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************
   * RESIDENCY *
   *************/

  public async getAllResidencyIncluded() {
    let results: AxiosResponse<ResidencyInclude[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/residency-include/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllResidencyIncludedById(id: string) {
    let results: AxiosResponse<ResidencyInclude[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/residency-include/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyEligibilityById(id: string) {
    let results: AxiosResponse<ResidencyInclude[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/residency-include/${this.env.tenantId}/residency-eligibility/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  // http://132.145.228.83/comn-geo-hierarchy/comn-country/AnRkr/all
  public async getAllCountries() {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/comn-geo-hierarchy/comn-country/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveResidencyIncluded(
    residencyEligibilityId: string,
    data: ResidencyIncludeSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/residency-include/${this.env.tenantId}/residency-eligibility/${residencyEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateResidencyIncluded(
    residencyIncludeId: string,
    data: ResidencyIncludeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/residency-include/${this.env.tenantId}/${residencyIncludeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllResidencyEligibility() {
    let results: AxiosResponse<ResidencyEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/residency-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyEligibilityByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<ResidencyEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/residency-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyTypeEligibilityByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<ResidencyEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/residency-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyEligibilityDetailById(id: number) {
    let results: AxiosResponse<ResidencyEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/residency-eligibility/${this.env.tenantId}/detail/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveResidencyEligibility(data: ResidencyEligibilitySaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/residency-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateResidencyEligibilityById(
    residencyEligibilityId: string,
    data: ResidencyEligibilityUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/residency-eligibility/${this.env.tenantId}/${residencyEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyEligibilityNotesById(
    residencyEligibilityId: string
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/residency-eligibility-notes/${this.env.tenantId}/residency-eligibility/${residencyEligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveResidencyEligibilityNotes(
    residencyEligibilityId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/residency-eligibility-notes/${this.env.tenantId}/residency-eligibility/${residencyEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateResidencyEligibilityNotes(
    residencyEligibilityNoteId: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/residency-eligibility-notes/${this.env.tenantId}/${residencyEligibilityNoteId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*******************
   * AGE ELIGIBILITY *
   *******************/

  public async getAllAgeEligibilities() {
    let results: AxiosResponse<AgeEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/age-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAgeEligibilitiesByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<AgeEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/age-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAgeEligibilitiesById(ageEligibilityId: string) {
    let results: AxiosResponse<AgeEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/age-eligibility/${this.env.tenantId}/${ageEligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAgeEligibilityDetailById(ageEligibilityId: string) {
    let results: AxiosResponse<AgeEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/age-eligibility/${this.env.tenantId}/detail/${ageEligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveAgeEligibility(data: AgeEligiblitySaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/age-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateAgeEligibility(
    ageEligibilityId: string,
    data: AgeEligiblityUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/age-eligibility/${this.env.tenantId}/${ageEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAgeEligibilityNotes(ageEligibilityId: string) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/age-eligibility-notes/${this.env.tenantId}/age-eligibility/${ageEligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveAgeEligibilityNote(
    ageEligibilityId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/age-eligibility-notes/${this.env.tenantId}/age-eligibility/${ageEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateAgeEligibilityNoteByNoteId(
    ageEligibilityNoteId: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/age-eligibility-notes/${this.env.tenantId}/${ageEligibilityNoteId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********************************
   * OFFICER ELIGIBILITY CREATION *
   ********************************/

  public async getAllOfficerEligibilities() {
    let results: AxiosResponse<OfficerEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/officer-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOfficerEligibilityById(officerEligibilityId: string) {
    let results: AxiosResponse<OfficerEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/officer-eligibility/${this.env.tenantId}/${officerEligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOfficerEligibilityByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<OfficerEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/officer-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOfficerEligibility(data: OfficerEligibilitySaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/officer-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOfficerEligibilityById(
    officerEligibilityId: string,
    data: OfficerEligibilityUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/officer-eligibility/${this.env.tenantId}/${officerEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOfficerEligibilityNoteById(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/officer-eligibility-notes/${this.env.tenantId}/officer-eligibility/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOfficerEligibilityNote(
    officerEligibilityId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/officer-eligibility-notes/${this.env.tenantId}/officer-eligibility/${officerEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOfficerEligibilityNoteByNoteId(
    officerEligibilityNotesId: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/officer-eligibility-notes/${this.env.tenantId}/${officerEligibilityNotesId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /****************
   * TRADING TYPE *
   ****************/

  public async getAllTradingTypes() {
    let results: AxiosResponse<TradingType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTradingTypeById(tradingTypeId: string) {
    let results: AxiosResponse<TradingType> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-type/${this.env.tenantId}/${tradingTypeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTradingTypeByName(name: string) {
    let results: AxiosResponse<TradingType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTradingTypeByCode(code: string) {
    let results: AxiosResponse<TradingType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTradingTypeByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<TradingType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTradingType(data: TradingTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/trading-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTradingTypeById(
    tradingTypeId: string,
    data: TradingTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/trading-type/${this.env.tenantId}/${tradingTypeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /****************************
   * CREDIT CHECK ELIGIBILITY *
   ****************************/

  public async getCredtCheckEligibilityByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<CreditCheckEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/credit-check-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*******************************
   * TRADING HISTORY ELIGIBILITY *
   *******************************/

  public async getAllTradingEligibilities() {
    let results: AxiosResponse<TradingEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTradingEligibilityById(tradingEligibilityId: string) {
    let results: AxiosResponse<TradingEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility/${this.env.tenantId}/${tradingEligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTradingEligibilityDetailById(tradingEligibilityId: string) {
    let results: AxiosResponse<TradingEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility/${this.env.tenantId}/detail/${tradingEligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTradingEligibilityByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<TradingEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTradingEligibility(data: TradingEligibilitySaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTradingEligibilityById(
    tradingEligibilityId: string,
    data: TradingEligibilityUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility/${this.env.tenantId}/${tradingEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTradingEligibilityNote(
    tradingEligibilityId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility-notes/${this.env.tenantId}/trading-eligibility/${tradingEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTradingEligibilityNoteByNoteId(
    tradingEligibilityNotesId: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility-notes/${this.env.tenantId}/${tradingEligibilityNotesId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //new method
  public async getTradingEligibilityNotes(tradingEligibilityId: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility-notes/${this.env.tenantId}/trading-eligibility/${tradingEligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async saveTradingEligibilityNotes(
    tradingEligibilityId: string,
    data: any
  ) {
    let results: AxiosResponse<any> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility-notes/${this.env.tenantId}/trading-eligibility/${tradingEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async updateTradingEligibilityNotes(noteId: string, data: any) {
    let results: AxiosResponse<any> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/trading-eligibility-notes/${this.env.tenantId}/${noteId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************
   * SIC CODE *
   ************/

  public async getAllSICCodes() {
    let results: AxiosResponse<SICCode[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-sic-codes/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSICCodeById(otherSicCodesId: string) {
    let results: AxiosResponse<SICCode> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-sic-codes/${this.env.tenantId}/${otherSicCodesId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSICCodeByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<SICCode> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-sic-codes/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveSICCode(data: SICCodeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-sic-codes/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateSICCode(
    otherSicCodesId: string,
    data: SICCodeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/other-sic-codes/${this.env.tenantId}/${otherSicCodesId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********************
   * ELIGIBILITY TYPE *
   ********************/

  public async getAllEligibilityTypes() {
    let results: AxiosResponse<EligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getEligibilityTypeById(eligibilityId: string) {
    let results: AxiosResponse<EligibilityType> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility/${this.env.tenantId}/${eligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getEligibilityTypeByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<EligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveEligibilityType(data: EligibilityTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateEligibilityType(
    eligiblityId: string,
    data: EligibilityTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/eligibility/${this.env.tenantId}/${eligiblityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**************************
   * OTHER ELIGIBILITY TYPE *
   **************************/

  public async getAllOtherEligibilityTypes() {
    let results: AxiosResponse<OtherEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherEligibilityTypeById(otherEligibilityTypeId: string) {
    let results: AxiosResponse<OtherEligibilityType> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-type/${this.env.tenantId}/${otherEligibilityTypeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherEligibilityTypeByName(name: string) {
    let results: AxiosResponse<OtherEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherEligibilityTypeByCode(code: string) {
    let results: AxiosResponse<OtherEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherEligibilityTypeByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<OtherEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOtherEligibilityType(data: OtherEligibilityTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOtherEligibilityType(
    id: string,
    data: OtherEligibilityTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-type/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherEligibilityNote(otherEligibilityId: string) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-notes/${this.env.tenantId}/other-eligibility/${otherEligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOtherEligibilityNote(
    otherEligibilityId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-notes/${this.env.tenantId}/other-eligibility/${otherEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOtherEligibilityNoteById(
    otherEligibilityNotesId: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-eligibility-notes/${this.env.tenantId}/${otherEligibilityNotesId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*****************************
   * FEATURE BENIFIT ITEM TYPE *
   *****************************/

  public async getAllFeatureBenifitItemTypes() {
    let results: AxiosResponse<FeatureBenifitItemType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitItemTypeById(itemTypeId: string) {
    let results: AxiosResponse<FeatureBenifitItemType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-type/${this.env.tenantId}/${itemTypeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitItemTypeByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<FeatureBenifitItemType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitItemTypeByCode(itemTypeCode: string) {
    let results: AxiosResponse<FeatureBenifitItemType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-type/${this.env.tenantId}/code/${itemTypeCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitItemTypeByName(itemTypeName: string) {
    let results: AxiosResponse<FeatureBenifitItemType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-type/${this.env.tenantId}/name/${itemTypeName}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitItemType(
    data: FeatureBenifitItemTypeSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitItemTypeById(
    itemTypeId: string,
    data: FeatureBenifitItemTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-type/${this.env.tenantId}/${itemTypeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************************************
   * FEATURE BENEFIT ELIGIBILITY TYPE *
   ************************************/

  public async getAllFeatureBenifitEligiblityType() {
    let results: AxiosResponse<FeatureBenefitEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitEligiblityTypeById(eligibilityTypeId: string) {
    let results: AxiosResponse<FeatureBenefitEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility-type/${this.env.tenantId}/${eligibilityTypeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitEligiblityTypeByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<FeatureBenefitEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitEligiblityTypeByCode(
    eligibilityTypeCode: string
  ) {
    let results: AxiosResponse<FeatureBenefitEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility-type/${this.env.tenantId}/code/${eligibilityTypeCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitEligiblityTypeByName(
    eligibilityTypeName: string
  ) {
    let results: AxiosResponse<FeatureBenefitEligibilityType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility-type/${this.env.tenantId}/name/${eligibilityTypeName}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitEligiblityType(
    data: FeatureBenefitEligibilityTypeSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitEligiblityTypeById(
    eligibilityTypeId: string,
    data: FeatureBenefitEligibilityTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility-type/${this.env.tenantId}/${eligibilityTypeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********************************
   * FEATURE BENEFITS ELIGIBILITY *
   ********************************/

  public async getAllFeatureBenifitEligiblites() {
    let results: AxiosResponse<FeatureBenefitEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitEligiblityById(eligibilityId: string) {
    let results: AxiosResponse<FeatureBenefitEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility/${this.env.tenantId}/${eligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitEligiblityByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<FeatureBenefitEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitEligiblityByName(name: string) {
    let results: AxiosResponse<FeatureBenefitEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitEligiblityByCode(code: string) {
    let results: AxiosResponse<FeatureBenefitEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitEligiblites(
    data: FeatureBenefitEligibilitySaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitEligiblityById(
    eligibilityId: string,
    data: FeatureBenefitEligibilityUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-eligibility/${this.env.tenantId}/${eligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*********************************
   * FEATURE BENEFIT ITEM CREATION *
   *********************************/

  public async getAllFeatureBenifitItems() {
    let results: AxiosResponse<FeatureBenefitItem[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitItemsByItemId(itemId: string) {
    let results: AxiosResponse<FeatureBenefitItem[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item/${this.env.tenantId}/${itemId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitItemsByName(name: string) {
    let results: AxiosResponse<FeatureBenefitItem[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitItemsByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<FeatureBenefitItem[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitItemsByItemTypeCode(itemTypeCode: string) {
    let results: AxiosResponse<FeatureBenefitItem[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item/${this.env.tenantId}/item-type-code/${itemTypeCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitItem(data: FeatureBenefitItemSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitItemById(
    itemId: string,
    data: FeatureBenefitItemUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item/${this.env.tenantId}/${itemId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // new call added
  public async getFeatureBenifitItemNoteById(featureBenifitId: string) {
    let results: AxiosResponse<{
      createdDate: string;
      createdUser: string;
      id: number;
      modifiedDate: string;
      modifiedUser: string;
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      version: number;
    }[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-note/${this.env.tenantId}/feature-benefit-item/${featureBenifitId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitItemNote(
    itemId: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      createdUser: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-note/${this.env.tenantId}/feature-benefit-item/${itemId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitItemNoteById(
    id: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-item-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /******************************
   * FEATURE BENEFIT GROUP TYPE *
   ******************************/

  public async getAllFeatureBenifitGroupTypes() {
    let results: AxiosResponse<FeatureBenefitGroupType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitGroupTypeById(id: number) {
    let results: AxiosResponse<FeatureBenefitGroupType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group-type/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitGroupTypeByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<FeatureBenefitGroupType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitGroupTypeByCode(code: string) {
    let results: AxiosResponse<FeatureBenefitGroupType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitGroupTypeByName(name: string) {
    let results: AxiosResponse<FeatureBenefitGroupType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitGroupType(
    data: FeatureBenefitGroupTypeSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitGroupTypeById(
    id: string,
    data: FeatureBenefitGroupTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group-type/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************************
   * FEATURE BENEFIT GROUP *
   *************************/

  public async getAllFeatureBenifitGroup() {
    let results: AxiosResponse<FeatureBenefitGroup[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitGroupById(id: string) {
    let results: AxiosResponse<FeatureBenefitGroup[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitGroupByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<FeatureBenefitGroup[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitGroupByCode(typeCode: string) {
    let results: AxiosResponse<FeatureBenefitGroup[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group/${this.env.tenantId}/code/${typeCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitGroupByName(name: string) {
    let results: AxiosResponse<FeatureBenefitGroup[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitGroup(data: FeatureBenefitGroupSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitGroupById(
    id: string,
    data: FeatureBenefitGroupUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitGroupNote(
    groupId: string,
    data: {
      notes: string;
      status: "ACTIVE" | "";
      createdUser: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group-note/${this.env.tenantId}/feature-benefit-group/${groupId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitGroupNoteById(
    id: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-group-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********
   * CARD *
   ********/

  public async getAllFeatureBenifitCard() {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitCardById(id: string) {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitCardByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitCard(data: FeatureBenefitCardSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitCardById(
    id: string,
    data: FeatureBenefitCardUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitCardNote(
    featureBenefitsCardId: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      createdUser: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-notes/${this.env.tenantId}/feature-benefit-card/${featureBenefitsCardId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitCardNoteById(
    id: string,
    data: {
      notes: string;
      status: "ACTIVE" | "";
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-card-notes/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********
   * CARD-MAP *
   ********/

  public async getAllFeatureBenifitCardMap() {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-bene-card-map/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitCardMapById(id: string) {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-bene-card-map/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenifitCardMapByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-bene-card-map/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureBenifitCardMap(
    id: number,
    cardId: string,
    data: any
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-bene-card-map/${this.env.tenantId}/${id}/${cardId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenifitCardMapById(
    id: string,
    data: FeatureBenefitCardMapUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-bene-card-map/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********
   * FEATURE BENEFITS *
   ********/
  public async getAllFeatureBenefits() {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/features-benefits/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeaturesBenefitsByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/features-benefits/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenefitsById(id: string) {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/features-benefits/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeaturesBenefits(id: number, data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/features-benefits/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeaturesBenefits(data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/features-benefits/${this.env.tenantId}/`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********
   * GROUPS *
   ********/

  public async getAllFeatureBenefitGroups() {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/features-benefits-group/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenefitGroupById(id: string) {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/features-benefits-group/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeaturesBenefitsGroupByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/features-benefit-group/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeaturesBenefitsGroup(
    id: number,
    groupId: number,
    data: any
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/features-benefits-group/${this.env.tenantId}/${id}/${groupId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeaturesBenefitsGroup(id: number, data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/features-benefits-group/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********
   * ITEMS *
   ********/

  public async getAllFeatureBenefitItems() {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/features-benefits-item/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenefitItemById(id: string) {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/features-benefits-item/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeaturesBenefitsItemByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<FeatureBenefitCard[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/features-benefit-item/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeaturesBenefitsItem(
    id: number,
    groupId: number,
    data: any
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/features-benefits-item/${this.env.tenantId}/${id}/${groupId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeaturesBenefitsItem(id: number, data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/features-benefits-item/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**********************
   * MOBILE WALLET TYPE *
   **********************/

  public async getAllMobileWalletTypes() {
    let results: AxiosResponse<MobileWalletType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-w-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getMobileWalletTypeById(id: string) {
    let results: AxiosResponse<MobileWalletType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-w-type/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getMobileWalletTypesByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<MobileWalletType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-w-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getMobileWalletTypeByCode(code: string) {
    let results: AxiosResponse<MobileWalletType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-w-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getMobileWalletTypeByName(name: string) {
    let results: AxiosResponse<MobileWalletType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-w-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveMobileWalletType(data: MobileWalletTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-w-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateMobileWalletTypeById(
    id: string,
    data: MobileWalletTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-w-type/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*****************
   * MOBILE WALLET *
   *****************/

  public async getAllMobileWallets() {
    let results: AxiosResponse<MobileWallet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-wallet/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getMobileWalletById(id: string) {
    let results: AxiosResponse<MobileWallet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-wallet/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getMobileWalletByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<MobileWallet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-wallet/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getMobileWalletByWalletTypeCode(typeCode: string) {
    let results: AxiosResponse<MobileWallet[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-wallet/${this.env.tenantId}/wallet-type-code/${typeCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveMobileWalletByWallet(data: MobileWalletSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-wallet/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateMobileWalletById(
    id: string,
    data: MobileWalletUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/feature-benefit-mob-wallet/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*********************
   * FEE CATEGORY TYPE *
   *********************/

  public async getAllFeeCategoryTypes() {
    let results: AxiosResponse<FeeCategoryType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-category-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllFeeCategoryTypeById(id: string) {
    let results: AxiosResponse<FeeCategoryType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-category-type/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllFeeCategoryTypeByCode(code: string) {
    let results: AxiosResponse<FeeCategoryType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-category-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllFeeCategoryTypeByName(name: string) {
    let results: AxiosResponse<FeeCategoryType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-category-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllFeeCategoryTypeByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<FeeCategoryType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-category-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeeCategoryType(data: FeeCategoryTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-fee-category-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeeCategoryTypeById(
    id: string,
    data: FeeCategoryTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/other-fee-category-type/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************
   * Fee Rate Type *
   ************/
  // !! New sdk method
  public async getAllFeeRateTypes() {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-rate-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllFeeRateTypesByStatus(status: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-rate-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeRateTypeById(id: string) {
    let results: AxiosResponse<FeeType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-rate-type/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeeRateType(data: FeeTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-fee-rate-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeeRateTypeById(id: string, data: FeeTypeUpdateRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/other-fee-rate-type/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************
   * FEE TYPE *
   ************/

  public async getAllFeeTypes() {
    let results: AxiosResponse<FeeType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeTypeById(id: string) {
    let results: AxiosResponse<FeeType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-type/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeTypeByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<FeeType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeTypeByCode(code: string) {
    let results: AxiosResponse<FeeType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeTypeByName(name: string) {
    let results: AxiosResponse<FeeType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeeType(data: FeeTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-fee-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeeTypeById(id: string, data: FeeTypeUpdateRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/other-fee-type/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***********************
   * OTHER FEE RATE TYPE *
   ***********************/

  public async getAllOtherFeeRateType() {
    let results: AxiosResponse<OtherFeeRateType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fee-rate-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***************
   * TARIFF TYPE *
   ***************/

  public async getAllTariffTypes() {
    let results: AxiosResponse<TariffType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tariff-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTariffTypeById(id: string) {
    let results: AxiosResponse<TariffType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tariff-type/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTariffTypeByName(name: string) {
    let results: AxiosResponse<TariffType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tariff-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTariffTypeByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<TariffType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tariff-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTariffTypeByCode(code: string) {
    let results: AxiosResponse<TariffType[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/tariff-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTariffType(data: TariffTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/tariff-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTariffTypeById(id: string, data: TariffTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/tariff-type/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /******************
   * BONUS INTEREST *
   ******************/

  public async getAllBounsInterests() {
    let results: AxiosResponse<BonusInterest[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBounsInterestById(id: number) {
    let results: AxiosResponse<BonusInterest> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBounsInterestByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<BonusInterest> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBounsInterestDetailsById(id: number) {
    let results: AxiosResponse<BonusInterest> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-interest/details/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBounsInterest(data: AddBonusInterestRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bonus-interest/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBounsInterest(
    id: string,
    data: UpdateBonusInterestRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/bonus-interest/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************************
   * Bonus Tier Band Set *
   ************************/
  public async getTierBandDetailsbyBonusInterestId(id: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set/${this.env.tenantId}/bonus-interest/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusTierBandDetailbyId(id: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBonusTierBandDetail(id: number, data: any) {
    let results: AxiosResponse<any> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set/${this.env.tenantId}/bonus-interest/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBonusTierBandDetail(id: number, data: any) {
    let results: AxiosResponse<any> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusTierBandNotesByBonusTierBandId(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set-note/${this.env.tenantId}/bonus-tier-band-set/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusTierBandNotesById(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set-note/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBonusTierBandNotesById(id: string, data: any) {
    let results: AxiosResponse<any> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBonusTierBandNotesByBonusTierBandId(id: string, data: any) {
    let results: AxiosResponse<any> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set-note/${this.env.tenantId}/bonus-tier-band-set/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusTierBandByTierbandsetId(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band/${this.env.tenantId}/tier-band-set/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusTierBandById(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBonusTierBand(id: string, data: any) {
    let results: AxiosResponse<any> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBonusTierBandById(id: string, data: any) {
    let results: AxiosResponse<any> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band/${this.env.tenantId}/tier-band-set/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusTBIEbyTBId(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set-interest-eligibility/${this.env.tenantId}/tier-band-set/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBonusTBIEbyId(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set-interest-eligibility/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBonusTBIEbyId(id: string, data: any) {
    let results: AxiosResponse<any> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set-interest-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBonusTBIEbyTBId(id: string, elgId: string, data: any) {
    let results: AxiosResponse<any> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/bonus-tier-band-set-interest-eligibility/${this.env.tenantId}/${id}/${elgId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************************
   * INDUSTRY ELIGIBILITY *
   ************************/

  public async getIndustryEligibilityByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<IndustryEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/industry-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************************
   * SALES ACCESS CHANNEL *
   ************************/

  public async getSalesAccessChannelByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<SalesAccessChannel[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/core-product-sales-channel/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**************************
   * SERVICE ACCESS CHANNEL *
   **************************/

  public async getServiceAccessChannelByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<ServiceAccessChannel[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/core-product-servicing-channel/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**********************
   * OVERDRAFT TEMPLATE *
   **********************/

  public async getAllOverdrafts() {
    let results: AxiosResponse<Overdraft[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftById(overdraftId: string) {
    let results: AxiosResponse<Overdraft> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft/${this.env.tenantId}/${overdraftId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<Overdraft[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOverdraft(data: OverdraftSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/overdraft/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftById(
    overdraftId: string,
    data: OverdraftUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft/${this.env.tenantId}/${overdraftId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addOverdraftNote(overdraftId: string, data: NoteSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-notes/${this.env.tenantId}/overdraft/${overdraftId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftNote(
    overdraftId: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-notes/${this.env.tenantId}/${overdraftId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***********************
   * OVERDRAFT TIER BAND *
   ***********************/

  public async getAllOverdraftTierBand() {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tier-band/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftTierBandByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tier-band/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftTierBandById(id: number) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tier-band/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOverdraftTierBand(
    overdraftTierBandSetId: string,
    data: OverdraftTierBandSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-tier-band/${this.env.tenantId}/overdraft-tb-set/${overdraftTierBandSetId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftTierBandByTierBandSetId(
    overdraftTierBandSetId: string
  ) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tier-band/${this.env.tenantId}/overdraft-tb-set/${overdraftTierBandSetId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftTierBandById(
    id: string,
    data: OverdraftTierBandUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-tier-band/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***************************
   * OVERDRAFT TIER BAND SET *
   ***************************/

  public async addOverdraftTierBandSetNote(
    overdraftTierBandSetId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set-note/${this.env.tenantId}/overdraft-tb-set/${overdraftTierBandSetId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftTierBandSetNotes(overdraftTierBandSetId: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set-note/${this.env.tenantId}/overdraft-tb-set/${overdraftTierBandSetId}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftTierBandSetNoteByID(overdraftTierBandSetId: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set-note/${this.env.tenantId}/${overdraftTierBandSetId}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftTierBandSetNoteByID(
    overdraftTierBandSetId: string,
    data: any
  ) {
    let results: AxiosResponse<any> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set-note/${this.env.tenantId}/${overdraftTierBandSetId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftTierBandSetNoteById(
    id: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async getOverdraftTierBandSetNoteById(id: string) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set-note/${this.env.tenantId}/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOverdraftTierBandSet(
    overdraftId: string,
    data: OverdraftTierBandSetSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set/${this.env.tenantId}/overdraft/${overdraftId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async getOverdraftTierBandSetsbyOverdraftId(overdraftId: string) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set/${this.env.tenantId}/overdraft/${overdraftId}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftTierBandSetById(
    id: string,
    data: OverdraftTierBandSetUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftTierBandSetById(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set/${this.env.tenantId}/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addOverdraftTierBandNote(
    overdraftTierBandId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-tier-band-note/${this.env.tenantId}/overdraft-tier-band/${overdraftTierBandId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftTierBandNoteById(
    id: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-tier-band-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // public async getOverdraftFeeChargeDetails(
  //   odFeeChargeId: string,
  //   pagination?: PaginatedRequest
  // ) {
  //   let results: AxiosResponse<PaginatedResponse<
  //     OverdraftFeesChargesDetails
  //   >> = await axios.get(
  //     this.env.basePath +
  //       `/casa-product-bca/overdraft-fc-detail/search-overdraft-fees-charges-details/${this.env.tenantId}/${odFeeChargeId}` +
  //       (pagination ? "?" + serialize(pagination) : ""),
  //     {
  //       headers: {
  //         Authorization: this.env.token,
  //       },
  //     }
  //   );
  //   return results.data;
  // }

  public async getOverdraftFeeChargeDetailsByOverdraftFeeId(
    odFeeChargeId: string,
    pagination: PaginatedRequest
  ) {
    let results: AxiosResponse<PaginatedResponse<
      OverdraftFeesChargesDetails
    >> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-detail/${this.env.tenantId}/search-overdraft-fees-charges-details/${odFeeChargeId}` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftFeeChargeDetailsById(odFeeChargeId: string) {
    let results: AxiosResponse<PaginatedResponse<
      OverdraftFeesChargesDetails
    >> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-detail/${this.env.tenantId}/${odFeeChargeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftFeeChargeDetailsById(
    odFeeChargeId: string,
    data: any
  ) {
    let results: AxiosResponse<PaginatedResponse<
      OverdraftFeesChargesDetails
    >> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-detail/${this.env.tenantId}/${odFeeChargeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOverdraftFeeChargeDetail(odFeeChargeId: string, data: any) {
    let results: AxiosResponse<PaginatedResponse<
      OverdraftFeesChargesDetails
    >> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-detail/${this.env.tenantId}/overdraft-fees-charges/${odFeeChargeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftFeeChargeDetailById(id: string) {
    let results: AxiosResponse<PaginatedResponse<{
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
    }>> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-detail/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftFeeChargeDetailById(id: string, data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-detail/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addOverdraftFeeChargeDetails(
    odFeeChargeId: string,
    data: {
      applicationFrequency: "string";
      applicationFrequencyId: "string";
      calculationFrequency: "string";
      calculationFrequencyId: "string";
      code: "string";
      createdUser: "string";
      deductIndicator: "string";
      feeAmount: "string";
      feeCategoryType: "string";
      feeCategoryTypeId: "string";
      feeIndicator: "string";
      feeRate: "string";
      feeRateType: "string";
      feeRateTypeId: "string";
      feeType: "string";
      feeTypeId: "string";
      incrementalBarrowingAmount: "string";
      negotiableIndicator: "string";
      overdraftControlIndicator: "string";
      status: "string";
      tenantId: "string";
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-detail/overdraft-fees-charges/${this.env.tenantId}/${odFeeChargeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // Duplicate
  // // http://132.145.228.83/casa-product-bca/overdraft-fc-cap/AnRkr
  // public async addOverdraftFeeChargeCap(data: {
  //   cappingPeriod: "string";
  //   cappingPeriodId: "string";
  //   code: "string";
  //   createdUser: "string";
  //   feeCapAmount: "string";
  //   feeCapOccurrence: "string";
  //   feeType: "string";
  //   feeTypeId: "string";
  //   id: "string";
  //   minMaxType: "string";
  //   otherFeeType: "string";
  //   status: "string";
  //   tenantId: "string";
  // }) {
  //   let results: AxiosResponse<
  //     { messages: string } | { [prop: string]: string }
  //   > = await axios.post(
  //     this.env.basePath +
  //       `/casa-product-bca/overdraft-fc-cap/${this.env.tenantId}`,
  //     data,
  //     {
  //       headers: {
  //         Authorization: this.env.token,
  //       },
  //     }
  //   );
  //   return results.data;
  // }

  // http://132.145.228.83/casa-product-bca/overdraft-fees-chgs-fee-chg-cap/AnRkr/{overdraftFeesChargesId}/{overdraftFeeChargeCapId}
  public async mapOverdraftFeeChargeCap(
    overdraftFeesChargesId: string,
    overdraftFeeChargeCapId: string,
    data: {
      status: "ACTIVE";
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-fees-chgs-fee-chg-cap/${this.env.tenantId}/${overdraftFeesChargesId}/${overdraftFeeChargeCapId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllOverdraftFeeChargeCapByFeeChargeId(
    fcId: string,
    pagination?: PaginatedRequest
  ) {
    // http://132.145.228.83/casa-product-bca/overdraft-fees-chgs-fee-chg-cap/AnRkr/search-fc-cap/{fcId}
    let results: AxiosResponse<PaginatedResponse<{
      id: number;
      feeCapOccurrence: number;
      feeCapAmount: number;
      cappingPeriodId: number;
      tenantId: string;
      status: string;
      createdUser: string;
      createdDate: string;
      modifiedUser?: any;
      modifiedDate?: any;
      feeTypeId: number;
      minMaxType: string;
      cappingPeriod: string;
      code?: any;
    }>> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fees-chgs-fee-chg-cap/${this.env.tenantId}/search-fc-cap/${fcId}` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllOverdraftFeeCharges() {
    let results: AxiosResponse<OverdraftFeeCharge[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fees-charges/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftFeeChargeById(overdraftFeesChargesId: string) {
    let results: AxiosResponse<OverdraftFeeCharge> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fees-charges/${this.env.tenantId}/${overdraftFeesChargesId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftFeeChargeByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<OverdraftFeeCharge[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fees-charges/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOverdraftFeeCharge(data: OverdraftFeeChargeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-fees-charges/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftFeeCharge(
    id: string,
    data: OverdraftFeeChargeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-fees-charges/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addOverdraftFeeChargeDetailNote(
    overdraftFeesChargesDetailsId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-details-notes/${this.env.tenantId}/overdraft-fc-detail/${overdraftFeesChargesDetailsId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftFeeChargeDetailNoteById(
    id: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-details-notes/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllOverdraftFeeChargeCaps() {
    let results: AxiosResponse<OverdraftFeeChargeCap[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-cap/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftFeeChargeCapById(overdraftFeeChargeCapId: string) {
    let results: AxiosResponse<OverdraftFeeChargeCap> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-cap/${this.env.tenantId}/${overdraftFeeChargeCapId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftFeeChargeCapByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<OverdraftFeeChargeCap[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-cap/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftFeeChargeCapByName(name: string) {
    let results: AxiosResponse<OverdraftFeeChargeCap[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-cap/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftFeeChargeCapByFeeTypeCode(code: string) {
    let results: AxiosResponse<OverdraftFeeChargeCap> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-cap/${this.env.tenantId}/fee-type-code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOverdraftFeeChargeCap(
    data: OverdraftFeeChargeCapSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-cap/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftFeeChargeCapById(
    overdraftFeeChargeCapId: string,
    data: OverdraftFeeChargeCapUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-cap/${this.env.tenantId}/${overdraftFeeChargeCapId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addOverdraftFeeChargeCapNote(
    overdraftFeeChargeCapId: string,
    data: NoteSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-cap-notes/${this.env.tenantId}/overdraft-fc-cap/${overdraftFeeChargeCapId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftFeeChargeCapNote(
    overdraftFeeChargeCapId: string,
    data: NoteUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/overdraft-fc-cap-notes/${this.env.tenantId}/${overdraftFeeChargeCapId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /******************
   * FEE CHARGE CAP *
   ******************/

  public async getAllFeeChargeCaps() {
    let results: AxiosResponse<FeeChargeCap[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-cap/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeCapById(id: string) {
    let results: AxiosResponse<FeeChargeCap[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-cap/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeCapByStatus(status: "ACITVE" | "") {
    let results: AxiosResponse<FeeChargeCap[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-cap/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeCapByFeeTypeCode(code: string) {
    let results: AxiosResponse<FeeChargeCap[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-cap/${this.env.tenantId}/fee-type-code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeeChargeCap(data: FeeChargeCapSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/fee-charge-cap/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async mapFeeChargeCapToTarrif(
    otherfeeschargeid: string,
    feeChargeCapId: string,
    data: any
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-fees-chgs-fee-chg-cap/${this.env.tenantId}/${otherfeeschargeid}/${feeChargeCapId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeeChargeCapById(
    id: string,
    data: FeeChargeCapUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/fee-charge-cap/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addFeeChargeCapNote(
    feeChargeCapId: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      createdUser: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/fee-charge-cap-notes/${this.env.tenantId}/fee-charge-cap/${feeChargeCapId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async uupdateFeeChargeCapNoteById(
    id: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/fee-charge-cap-notes/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeCapNoteById(id: string) {
    let results: AxiosResponse<{
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      version: string;
    }> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-cap-notes/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*********************
   * OTHER FEE CHARGE DETAIL *
   *********************/

  public async saveOtherFeeCharge(data: FeeChargeDetailSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-fees-charges/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getODFeeCharges(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<{
      templateId: number;
      tbSetId: number;
      id: number;
      attribute1: number;
      attribute2: number;
      attribute3: string;
      attribute4: string;
      attribute5: string;
      status: string;
      createdUser: string;
      createdDate: string;
      modifiedUser?: any;
      modifiedDate?: any;
      code?: any;
      tenantId: string;
    }>> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set-overdraft-fc/${this.env.tenantId}/search-od-charge` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addFeeChargeToOverdraftTierBandSet(
    tierBandSetId: string,
    overdraftFeeChargeId: string,
    data: {
      status: "ACTIVE";
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/overdraft-tb-set-overdraft-fc/${this.env.tenantId}/${tierBandSetId}/${overdraftFeeChargeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllOtherFeeCharges() {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fees-charges/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeById(otherFeesChargesId: string) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fees-charges/${this.env.tenantId}/${otherFeesChargesId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOtherFeeChargeById(
    otherFeesChargesId: string,
    data: FeeChargeDetailSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/other-fees-charges/${this.env.tenantId}/${otherFeesChargesId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductOtherFeeChargesByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<ProductCommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fees-charges/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*********************
   * FEE CHARGE DETAIL *
   *********************/

  //http://132.145.228.83/casa-product-bca/fee-charge-detail/AnRkr/search-fee-charge-detail/287

  public async getFeeChargeDetailbyOtherFeeChargeId(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail/${this.env.tenantId}/search-fee-charge-detail/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeDetailById(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeDetailNotesByFeeChargeDetailId(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail-note/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeeChargeDetailNotesByFeeChargeDetailId(
    id: string,
    data: any
  ) {
    let results: AxiosResponse<any[]> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeeChargeDetailNotesByFeeChargeDetailId(
    id: string,
    data: any
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail-note/${this.env.tenantId}/fee-charge-detail/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeCapsByOtherFeeChargeId(id: String) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fees-chgs-fee-chg-cap/${this.env.tenantId}/search-fc-cap/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOtherFeeChargeCap(id: String, data: any) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-fees-chgs-fee-chg-cap/${this.env.tenantId}/search-fc-cap/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeeChargeDetail(
    otherFeesChargesId: string,
    data: FeeChargeDetailSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail/${this.env.tenantId}/other-fees-charges/${otherFeesChargesId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeeChargeDetailById(
    feeChargeDetailId: string,
    data: FeeChargeDetailUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail/${this.env.tenantId}/${feeChargeDetailId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addFeeChargeDetailNote(
    feeChargeDetailId: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      createdUser: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail-note/${this.env.tenantId}/fee-charge-detail/${feeChargeDetailId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeDetailNotes(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail-note/${this.env.tenantId}/fee-charge-detail/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeeChargeDetailNoteById(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail-note/${this.env.tenantId}/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeeChargeDetailNoteById(
    id: string,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/fee-charge-detail-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***************
   * COMMON LIST *
   ***************/

  public async saveProductCommonList(data: AddCommonListRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/common-list/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllProductCommonList() {
    let results: AxiosResponse<ProductCommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/common-list/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductCommonListByRefCode(referenceCode: string) {
    let results: AxiosResponse<ProductCommonList> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/common-list/${this.env.tenantId}/refcode/${referenceCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductCommonListByCode(code: string) {
    let results: AxiosResponse<ProductCommonList> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/common-list/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductCommonListById(id: number) {
    let results: AxiosResponse<ProductCommonList> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/common-list/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductCommonListByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<ProductCommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/common-list/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateProductCommonList(
    commonListId: number,
    data: UpdateCommonListRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/common-list/${this.env.tenantId}/${commonListId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**********
   * PERIOD *
   **********/

  public async savePeriod(data: PeriodAddResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-product-bca/period/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllPeriods() {
    //TODO: internal server error
    let results: AxiosResponse<Period[]> = await axios.get(
      this.env.basePath + `/casa-product-bca/period/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPeriodById(id: number) {
    //TODO: internal server error
    let results: AxiosResponse<Period> = await axios.get(
      this.env.basePath + `/casa-product-bca/period/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPeriodByStatus(status: "ACTIVE" | "INACTIVE") {
    //TODO: internal server error
    let results: AxiosResponse<Period[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/period/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPeriodByCode(code: string) {
    //TODO: internal server error
    let results: AxiosResponse<Period> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/period/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updatePeriodById(id: number, data: PeriodUpdateResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath + `/casa-product-bca/period/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /******************
   * ID ELIGIBILITY *
   ******************/

  public async saveIdEligibility(data: IdEligibilitySaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/id-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllIdEligibilities() {
    let results: AxiosResponse<IdEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/id-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getIdEligibilityDetail(id: number) {
    let results: AxiosResponse<IdEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/id-eligibility/${this.env.tenantId}/detail/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllIdEligibilitiesByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<IdEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/id-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getIdEligibilitiesById(id: number) {
    let results: AxiosResponse<IdEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/id-eligibility/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateIdEligibilitiesById(
    id: number,
    data: IdEligibilityUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/id-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // new methods
  public async getIdEligibilityNotesById(eligibilityId: string) {
    let results: AxiosResponse<IdEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/id-eligibility-notes/${this.env.tenantId}/id-eligibility/${eligibilityId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveIdEligibilityNotesById(eligibilityId: string, data: any) {
    let results: AxiosResponse<IdEligibility[]> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/id-eligibility-notes/${this.env.tenantId}/id-eligibility/${eligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateIdEligibilityNotesById(noteId: string, data: any) {
    let results: AxiosResponse<IdEligibility[]> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/id-eligibility-notes/${this.env.tenantId}/${noteId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*******************
   * PRODUCT SEGMENT *
   *******************/

  public async getAllProductSegment() {
    let results: AxiosResponse<ProductSegment[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product-segment/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductSegmentByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<ProductSegment[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product-segment/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // public async getProductSegmentByStatus(status: "ACTIVE" | "INACTIVE") {
  //   let results: AxiosResponse<ProductSegment[]> = await axios.get(
  //     this.env.basePath +
  //       `/casa-product-bca/product-segment/${this.env.tenantId}/status/${status}`,

  //       {
  //         headers: {
  //           Authorization: this.env.token,
  //         },
  //       });

  //   return results.data;
  // }

  public async getProductSubProductByIdentification(code: string) {
    let results: AxiosResponse<ProductSubProduct> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/common-details/${this.env.tenantId}/identification/${code}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductSegmentById(id: number) {
    let results: AxiosResponse<ProductSegment> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product-segment/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProductSegmentByProductId(productId: number) {
    let results: AxiosResponse<ProductSegment> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/product-segment/${this.env.tenantId}/product/${productId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveProductSegment(
    productId: number,
    segmentId: number,
    data: AddProductSegmentRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/product-segment/${this.env.tenantId}/${productId}/${segmentId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateProductSegmentById(
    id: number,
    data: UpdateProductSegmentRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/product-segment/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*********************
   * OTHER ELIGIBILITY *
   *********************/

  public async getAllOtherEligibility() {
    let results: AxiosResponse<OtherEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherEligibilityByName(name: string) {
    let results: AxiosResponse<OtherEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherEligibilityByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<OtherEligibility[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherEligibilityById(id: number) {
    let results: AxiosResponse<OtherEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/other-eligibility/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getLegalStructreByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<OtherEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/legal-structure-eligibility/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getLegalStructreById(id: string) {
    let results: AxiosResponse<OtherEligibility> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/legal-structure-eligibility/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateLegalStructure(id: string, data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/legal-structure-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOtherEligibility(data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-product-bca/other-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async updateOtherEligibility(id: string, data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-product-bca/other-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCreditInterestDetailsBySubProductId(subProductId: string) {
    let results: AxiosResponse<CreditInterestDetail2[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product/${this.env.tenantId}/common-details/credit-interest/${subProductId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );

    return results.data;
  }
  // Legal Structure
  public async getAllLegalEligiilityByEligibilityId(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-legal-eligibility/${this.env.tenantId}/map-eligibility/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async mapLegalElgToElgId(data: any) {
    let results: AxiosResponse<any[]> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/eligibility-legal-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getLegalElgToElgIdMapping(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-legal-eligibility/${this.env.tenantId}/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateLegalElgToElgIdMapping(id: string, data: any) {
    let results: AxiosResponse<any[]> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/eligibility-legal-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // OFFICER
  public async getAllOfficerEligiilityByEligibilityId(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-officer-eligibility/${this.env.tenantId}/map-eligibility/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async mapOfficerElgToElgId(data: any) {
    let results: AxiosResponse<any[]> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/eligibility-officer-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOfficerElgToElgIdMapping(id: string, data: any) {
    let results: AxiosResponse<any[]> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/eligibility-officer-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOfficerElgToElgIdMapping(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/officer-eligibility/${this.env.tenantId}/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // OTHER
  public async getAllOtherEligiilityByEligibilityId(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-other-eligibility/${this.env.tenantId}/map-eligibility/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async mapOtherElgToElgId(data: any) {
    let results: AxiosResponse<any[]> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/eligibility-other-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOtherElgToElgIdMapping(id: string, data: any) {
    let results: AxiosResponse<any[]> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/eligibility-other-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherElgToElgIdMapping(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-other-eligibility/${this.env.tenantId}/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // Residency
  public async getAllResidencyEligiilityByEligibilityId(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-residency-eligibility/${this.env.tenantId}/map-eligibility/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async mapResidencyElgToElgId(data: any) {
    let results: AxiosResponse<any[]> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/eligibility-residency-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateResidencyElgToElgIdMapping(id: string, data: any) {
    let results: AxiosResponse<any[]> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/eligibility-residency-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyElgToElgIdMapping(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-residency-eligibility/${this.env.tenantId}/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // Trading
  public async getAllTradingEligiilityByEligibilityId(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-trading-eligibility/${this.env.tenantId}/map-eligibility/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async mapTradingElgToElgId(data: any) {
    let results: AxiosResponse<any[]> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/eligibility-trading-eligibility/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTradingElgToElgIdMapping(id: string, data: any) {
    let results: AxiosResponse<any[]> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/eligibility-trading-eligibility/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTradingElgToElgIdMapping(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-trading-eligibility/${this.env.tenantId}/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // Sub Product Charges

  public async getAllSubProductCharges(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product-other-fees-charges/${this.env.tenantId}/fees-charges/sub-product/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSubProductChargesById(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/sub-product-other-fees-charges/${this.env.tenantId}/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async mapSubProductChargesToSubProduct(id:number, otherChargesId:number, data: any) {
    let results: AxiosResponse<any[]> = await axios.post(
      this.env.basePath +
        `/casa-product-bca/sub-product-other-fees-charges/${this.env.tenantId}/${id}/${otherChargesId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateSubProductChargesMapping(id: string, data: any) {
    let results: AxiosResponse<any[]> = await axios.put(
      this.env.basePath +
        `/casa-product-bca/sub-product-other-fees-charges/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // /eligibility-officer-eligibility/{tenantId}/{eligibilityOfficerEligibilityId}

  public async getOfficerElgbyMapping(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-product-bca/eligibility-officer-eligibility/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
