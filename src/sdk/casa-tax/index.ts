import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";
import {
  TaxCode,
  TaxCodeSaveRequest,
  TaxCodeUpdateRequest,
  TaxEvent,
  TaxEventSaveRequest,
  TaxEventUpdateRequest,
  TaxFormulaDetail,
  TaxProfile,
  TaxProfileCalculationResource,
  TaxProfileSaveRequest,
  TaxProfileUpdateRequest,
} from "./interfaces";

export class CasaTaxService {
  constructor(private env: EnvConfig) {}

  /***********************
   * TAX CODE DEFINITION *
   ***********************/

  public async getAllTaxCodes() {
    let results: AxiosResponse<TaxCode[]> = await axios.get(
      this.env.basePath + `/casa-tax/tax-code/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTaxCodeById(taxId: string) {
    let results: AxiosResponse<TaxCode[]> = await axios.get(
      this.env.basePath + `/casa-tax/tax-code/${this.env.tenantId}/${taxId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTaxCodeByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<TaxCode[]> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-code/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTaxCodeByCategoryAndStatus(
    category: string,
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<TaxCode[]> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-code/${this.env.tenantId}/category/${category}/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getExistByTaxCode(code: string) {
    let results: AxiosResponse<TaxCode[]> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-code/${this.env.tenantId}/exist/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTaxCode(data: TaxCodeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-tax/tax-code/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTaxCodeById(taxId: string, data: TaxCodeUpdateRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath + `/casa-tax/tax-code/${this.env.tenantId}/${taxId}`,
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
   * TAX APPLICABLE EVENT *
   ************************/

  public async getAllTaxEvents(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<TaxEvent>> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-event/${this.env.tenantId}/all` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTaxEventById(id: string) {
    let results: AxiosResponse<TaxEvent> = await axios.get(
      this.env.basePath + `/casa-tax/tax-event/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTaxEventByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<TaxEvent[]> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-event/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTaxEvent(data: TaxEventSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-tax/tax-event/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTaxEventById(taxId: string, data: TaxEventUpdateRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath + `/casa-tax/tax-event/${this.env.tenantId}/${taxId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllTaxFormulaDetails() {
    let results: AxiosResponse<TaxFormulaDetail[]> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-formula/detail/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllActiveTaxFormulaDetails() {
    let results: AxiosResponse<TaxFormulaDetail[]> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-formula/detail/${this.env.tenantId}/all/active`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********************
   * TAX PROFILE RULE *
   ********************/

  public async getAllTaxProfiles(pagination: any) {
    let results: AxiosResponse<TaxProfile[]> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-profile/${this.env.tenantId}/all` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllActiveTaxProfiles() {
    let results: AxiosResponse<TaxProfile[]> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-profile/${this.env.tenantId}/all/active`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTaxProfileById(taxProfileId: string) {
    let results: AxiosResponse<TaxProfile[]> = await axios.get(
      this.env.basePath +
        `/casa-tax/tax-profile/${this.env.tenantId}/${taxProfileId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTaxProfile(data: TaxProfileSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-tax/tax-profile/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTaxProfileById(
    taxProfileId: string,
    data: TaxProfileUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-tax/tax-profile/${this.env.tenantId}/${taxProfileId}`,
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
   * CALCULATION *
   ***************/

  public async calculateTax(data: TaxProfileCalculationResource) {
    //  TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.post(
      this.env.basePath +
        `/casa-tax/tax-calculation/${this.env.tenantId}/calculate-tax`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
