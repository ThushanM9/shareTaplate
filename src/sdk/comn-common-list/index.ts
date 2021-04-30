import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { CommonLisrResponse } from "./interfaces";

export class ComnCommonListService {
  constructor(private env: EnvConfig) {}

  public async getNotificationMethods() {
    let results: AxiosResponse<CommonLisrResponse[]> = await axios.get(
      this.env.basePath + `/comn-common-list/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCommonListByRefCode(code: string) {
    let results: AxiosResponse<CommonLisrResponse[]> = await axios.get(
      this.env.basePath +
        `/comn-common-list/${this.env.tenantId}/refcode/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  // public async getCommonListByRefCodeAndStatus(code: string) {
  //     let results: AxiosResponse<CommonLisrResponse[]> = await axios.get(this.env.basePath + `/casa-account/comn-list/${this.env.tenantId}/reference-code/${code}/status/ACTIVE`,
  //         {
  //             headers: {
  //                 Authorization: this.env.token
  //             }
  //         });
  //     return results.data;
  // }
  // http://132.145.228.83/casa-account/comn-list/AnRkr/reference-code/OTHPOSTMETH/status/ACTIVE
}
