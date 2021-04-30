import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";

export class ComnSignatureService {
  constructor(private env: EnvConfig) {}

  public async getSignatureById() {
    //TODO: missing API
    return {};
  }

  public async getSignatureByCustomerId() {
    //TODO: missing API
    return {};
  }

  public async getSignatureByStatus() {
    //TODO: missing API
    return {};
  }

  public async getSignatureViewById(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/comn-document-upload/file/${this.env.tenantId}/download/${id}?origin=customer`,
      {
        headers: {
          Authorization: this.env.token,
        },
        responseType: "blob",
      }
    );
    return results.data;
  }
}
