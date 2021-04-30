import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import { CommonBranchList } from "./interface";

export class ComnCommnService {
  constructor(private env: EnvConfig) {}

  public async getCommonListBranchLevelgGetByStatus(status: "ACTIVE") {
    let results: AxiosResponse<CommonBranchList[]> = await axios.get(
      this.env.basePath +
        `/comn-common/branch/organization-level/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
