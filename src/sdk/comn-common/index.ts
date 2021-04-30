import axios, { AxiosResponse } from "axios";
import {
  Period,
  PeriodAddResource,
  PeriodUpdateResource,
} from "../casa-product-bca/interfaces";
import { EnvConfig } from "../config";
import {
  DocumentTypeDetails,
  DocumentTypeSaveRequest,
  DocumentTypeUpdateRequest,
  LeagalStructure,
  LeagalStructureSaveRequest,
  LeagalStructureUpdateRequest,
  ResidencyType,
  ResidencyTypeSaveRequest,
  ResidencyTypeUpdateRequest,
} from "./interfaces";

export class ComnCommonService {
  constructor(private env: EnvConfig) {}

  public async getAllDocumentTypeDetails() {
    let results: AxiosResponse<DocumentTypeDetails[]> = await axios.get(
      this.env.basePath +
        `/comn-common/document-types/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getDocumentTypeDetailsById(documentTypeId: string) {
    let results: AxiosResponse<DocumentTypeDetails> = await axios.get(
      this.env.basePath +
        `/comn-common/document-types/${this.env.tenantId}/${documentTypeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getDocumentTypeDetailsByCode(documentTypeCode: string) {
    let results: AxiosResponse<DocumentTypeDetails> = await axios.get(
      this.env.basePath +
        `/comn-common/document-types/${this.env.tenantId}/documentTypeCode/${documentTypeCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getDocumentTypeDetailsByStatus(
    documentTypeStatus: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<DocumentTypeDetails[]> = await axios.get(
      this.env.basePath +
        `/comn-common/document-types/${this.env.tenantId}/documentTypeStatus/${documentTypeStatus}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveDocumentTypeDetails(data: DocumentTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/comn-common/document-types/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateDocumentTypeDetails(
    documentTypeId: string,
    data: DocumentTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/comn-common/document-types/${this.env.tenantId}/${documentTypeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCommonList(refCode: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/comn-common-list/comn-common-list/${this.env.tenantId}/refcode/${refCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /******************
   * RESIDENCY TYPE *
   ******************/

  public async getAllResidencyTypes() {
    let results: AxiosResponse<ResidencyType[]> = await axios.get(
      this.env.basePath +
        `/comn-common/residency-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyTypeByCode(code: string) {
    let results: AxiosResponse<ResidencyType> = await axios.get(
      this.env.basePath +
        `/comn-common/residency-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyTypeByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<ResidencyType[]> = await axios.get(
      this.env.basePath +
        `/comn-common/residency-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyTypeByName(name: string) {
    let results: AxiosResponse<ResidencyType[]> = await axios.get(
      this.env.basePath +
        `/comn-common/residency-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getResidencyTypeById(residencyTypeId: string) {
    let results: AxiosResponse<ResidencyType> = await axios.get(
      this.env.basePath +
        `/comn-common/residency-type/${this.env.tenantId}/${residencyTypeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveResidencyType(data: ResidencyTypeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/comn-common/residency-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateResidencyTypeById(
    residencyTypeId: string,
    data: ResidencyTypeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/comn-common/residency-type/${this.env.tenantId}/${residencyTypeId}`,
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
   * LEGAL STRUCTURE *
   *******************/

  public async getAllLegalStructures() {
    let results: AxiosResponse<LeagalStructure[]> = await axios.get(
      this.env.basePath +
        `/comn-common/legal-structure/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getLegalStructuresByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<LeagalStructure[]> = await axios.get(
      this.env.basePath +
        `/comn-common/legal-structure/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getLegalStructureByCode(code: string) {
    let results: AxiosResponse<LeagalStructure> = await axios.get(
      this.env.basePath +
        `/comn-common/legal-structure/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getLegalStructureByName(name: string) {
    let results: AxiosResponse<LeagalStructure[]> = await axios.get(
      this.env.basePath +
        `/comn-common/legal-structure/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getLegalStructureById(legalStructureId: string) {
    let results: AxiosResponse<LeagalStructure> = await axios.get(
      this.env.basePath +
        `/comn-common/legal-structure/${this.env.tenantId}/${legalStructureId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveLegalStructure(data: LeagalStructureSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/comn-common/legal-structure/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateLegalStructureById(
    legalStructureId: string,
    data: LeagalStructureUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/comn-common/legal-structure/${this.env.tenantId}/${legalStructureId}`,
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
      this.env.basePath + `/comn-common/period/${this.env.tenantId}`,
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
    let results: AxiosResponse<Period[]> = await axios.get(
      this.env.basePath + `/comn-common/period/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPeriodById(id: number) {
    let results: AxiosResponse<Period> = await axios.get(
      this.env.basePath + `/comn-common/period/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPeriodByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<Period[]> = await axios.get(
      this.env.basePath +
        `/comn-common/period/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPeriodByCode(code: string) {
    let results: AxiosResponse<Period> = await axios.get(
      this.env.basePath +
        `/comn-common/period/${this.env.tenantId}/code/${code}`,
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
      this.env.basePath + `/comn-common/period/${this.env.tenantId}/${id}`,
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
