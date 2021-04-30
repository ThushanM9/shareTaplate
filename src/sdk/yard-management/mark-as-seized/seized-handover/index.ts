import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../../config";
import { MarkAsSeized } from "./interface";

export class MarkAsSeizedService {
    constructor(private env: EnvConfig) {}

public async getVehicleRoDetails(data: MarkAsSeized) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/yard-management/mark-seize/${this.env.tenantId}/get-contract-ro-details`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
};