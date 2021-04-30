import { EnvConfig } from "../config";
import axios, { AxiosResponse } from "axios";
import { CurrencyDetail, CurrencyDetailSaveRequest, CurrencyDetailUpdateRequest, ExchangeRate, ExchangeRateSaveRequest } from "./interfaces";

export class ComnCurrencyDetailService {
    
    constructor(private env: EnvConfig) {
    }

    public async getAllCurrencies() {
        let results: AxiosResponse<CurrencyDetail[]> = await axios.get(this.env.basePath + `/comn-currency-detail/currency/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getCurrencyByCode(currencyCode: string) {
        let results: AxiosResponse<CurrencyDetail[]> = await axios.get(this.env.basePath + `/comn-currency-detail/currency/${this.env.tenantId}/code/${currencyCode}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async saveCurrency(data: CurrencyDetailSaveRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/comn-currency-detail/currency/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateCurrency(currencyId: string, data: CurrencyDetailUpdateRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/comn-currency-detail/currency/${this.env.tenantId}/${currencyId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAllExchangeRates() {
        let results: AxiosResponse<ExchangeRate[]> = await axios.get(this.env.basePath + `/comn-currency-detail/exchange-rate/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getExchangeRateById(id: number) {
        let results: AxiosResponse<ExchangeRate> = await axios.get(this.env.basePath + `/comn-currency-detail/exchange-rate/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getExchangeRateByEffectiveDate(effectiveDate: string) {
        let results: AxiosResponse<ExchangeRate[]> = await axios.get(this.env.basePath + `/comn-currency-detail/exchange-rate/${this.env.tenantId}/${effectiveDate}/all`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async saveExchangeRate(data: ExchangeRateSaveRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/comn-currency-detail/exchange-rate/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getExchangeRateByFromCurrency(fromCurrency: number) {
        let results: AxiosResponse<ExchangeRate[]> = await axios.get(this.env.basePath + `/comn-currency-detail/exchange-rate/${this.env.tenantId}/from-currency/${fromCurrency}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getExchangeRateByToCurrency(toCurrency: number) {
        let results: AxiosResponse<ExchangeRate[]> = await axios.get(this.env.basePath + `/comn-currency-detail/exchange-rate/${this.env.tenantId}/to-currency/${toCurrency}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getCurrencyExchangeByEffectiveDate(fromCurrencyId: number, toCurrencyId: number, effectiveDate: string) {
        // date - dd-mm-yyyy
        let results: AxiosResponse<ExchangeRate> = await axios.get(this.env.basePath + `/comn-currency-detail/exchange-rate/${this.env.tenantId}/from-currency/${fromCurrencyId}/to-currency/${toCurrencyId}/effective-date/${effectiveDate}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

}