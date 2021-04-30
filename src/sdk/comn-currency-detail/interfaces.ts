
export interface CurrencyDetail {
    currencyId: number;
    currencyCode: string;
    currencyName: string;
    tenantId: string;
    currencyStatus: string;
    codeNumeric: string;
    exponentConversions: number;
    currencyCreatedUser: string;
    currencyCreatedDate: string;
    currencyModifiedUser: string;
    currencyModifiedDate: string;
    currencyVersion: number;
}

export interface CurrencyDetailSaveRequest {
    currencyId?: number,
    currencyCode: string;
    currencyName: string;
    currencyStatus: "ACTIVE"|"INACTIVE";
    codeNumeric?: number;
    exponentConversions: number;
    currencyCreatedUser?: string;
}

export interface CurrencyDetailUpdateRequest {
    currencyCode: string;
    currencyName: string;
    currencyStatus: "ACTIVE"|"INACTIVE";
    codeNumeric?: string;
    exponentConversions: number;
    currencyModifiedUser: string;
    currencyVersion: number;
}

export interface ExchangeRate {
  exrtFromCurreny: number;
  exrtToCurreny: number;
  exrtBuyingRate: number;
  exrtSellingRate: number;
  exrtMidRate: number;
  exrtSpecialRate1: number;
  exrtSpecialRate: number;
  exrtBuySpread: number;
  exrtSellSpread: number;
  exrtEffectiveDate: string;
  exrtCreatedUser: string;
  id: number;
  version: number;
  tenantId: string;
  status: string;
  createdDate: string;
}

export interface ExchangeRateSaveRequest {
    exrtFromCurreny: number;
    exrtToCurreny: number;
    exrtBuyingRate: number;
    exrtSellingRate: number;
    exrtMidRate: number;
    exrtSpecialRate1: number;
    exrtSpecialRate2: number;
    exrtBuySpread: number;
    exrtSellSpread: number;
    exrtEffectiveDate: string;
    exrtCreatedUser?: string;
}