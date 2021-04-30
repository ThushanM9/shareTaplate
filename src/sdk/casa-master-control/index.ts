import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import {
  FeatureBenefitEligibilityTypeResponse,
  FeatureBenefitItemEligibilityNoteResponse,
  FeatureDetails,
  MasterDetails,
  ModuleFeatureAddResource,
  ModuleFeatureUpdateResource,
  ModuleMasterAddResource,
  ModuleMasterUpdateResource,
} from "./interfaces";

export class CasaMasterControlService {
  constructor(private env: EnvConfig) {}

  public async saveMasterDetails(data: ModuleMasterAddResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-master-control/module-master/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateMasterDetails(
    moduleMasterId: number,
    data: ModuleMasterUpdateResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-master-control/module-master/${this.env.tenantId}/${moduleMasterId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getMasterDetailsBId(moduleMasterId: number) {
    let results: AxiosResponse<MasterDetails> = await axios.get(
      this.env.basePath +
        `/casa-master-control/module-master/${this.env.tenantId}/${moduleMasterId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllMasterDetails() {
    let results: AxiosResponse<MasterDetails[]> = await axios.get(
      this.env.basePath +
        `/casa-master-control/module-master/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveFeatureDetails(data: ModuleFeatureAddResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-master-control/module-feature/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureDetails(
    moduleFeatureId: number,
    data: ModuleFeatureUpdateResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-master-control/module-feature/${this.env.tenantId}/${moduleFeatureId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllFeatureDetails() {
    let results: AxiosResponse<FeatureDetails[]> = await axios.get(
      this.env.basePath +
        `/casa-master-control/module-feature/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllFeatureDetailsByMasterId(id: string) {
    let results: AxiosResponse<FeatureDetails[]> = await axios.get(
      this.env.basePath +
        `/casa-master-control/module-feature/${this.env.tenantId}/module-master/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureDetailsByCode(moduleFeatureCode: string) {
    let results: AxiosResponse<FeatureDetails> = await axios.get(
      this.env.basePath +
        `/casa-master-control/module-feature/${this.env.tenantId}/code/${moduleFeatureCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureDetailsByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<FeatureDetails[]> = await axios.get(
      this.env.basePath +
        `/casa-master-control/module-feature/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureDetailsById(moduleFeatureCode: string) {
    let results: AxiosResponse<FeatureDetails> = await axios.get(
      this.env.basePath +
        `/casa-master-control/module-feature/${this.env.tenantId}/${moduleFeatureCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // added new

  /************************************
   * FEATURE BENEFIT ELIGIBILITY TYPE *
   ************************************/

  public async getFeatureBenefitItemEligibilityTypeByStatus(status: string) {
    let results: AxiosResponse<FeatureBenefitEligibilityTypeResponse[]> = await axios.get(
      this.env.basePath +
        `/casa-master-control/feature-benefit-eligibility-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenefitItemEligibilityByFeatureBenefitItemId(
    id: string
  ) {
    // add typings
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-master-control/feature-benefit-item-eligibility/${this.env.tenantId}/module_feature-benefit-item/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenefitItemEligibilityById(id: string) {
    // add typings
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-master-control/feature-benefit-item-eligibility/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async createFeatureBenefitItemEligibilityNotes(
    featureBenefitEligibilityId: String,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
    }
  ) {
    // add typings
    let results: AxiosResponse<any> = await axios.post(
      this.env.basePath +
        `/casa-master-control/feature-benefit-eligibility-note/${this.env.tenantId}/feature-benefit-eligibility/${featureBenefitEligibilityId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateFeatureBenefitItemEligibilityNotes(
    id: String,
    data: {
      notes: string;
      status: "ACTIVE" | "INACTIVE";
    }
  ) {
    // add typings
    let results: AxiosResponse<any> = await axios.put(
      this.env.basePath +
        `/casa-master-control/feature-benefit-eligibility-note/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getFeatureBenefitItemEligibilityNoteById(id: String) {
    let results: AxiosResponse<FeatureBenefitItemEligibilityNoteResponse> = await axios.get(
      this.env.basePath +
        `/casa-master-control/feature-benefit-eligibility-note/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
