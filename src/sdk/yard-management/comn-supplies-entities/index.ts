import { EnvConfig } from "../../config";
import { PaginatedResponse } from "../../utils/common";
import { AxiosGet } from "../../utils/Request";
import { suppliesEntitiesAuctioneer } from "./interface";

export class CommonSuppliesEntitiesAuctioneerService {
  constructor(private env: EnvConfig) {}

  public async getCommonSuppliesEntitiesAuctioneerGetByStatus(supStatus: "ACTIVE") {
    const res = await AxiosGet<PaginatedResponse<suppliesEntitiesAuctioneer[]>>(
      `/comn-supplies-entities/supplies/${this.env.tenantId}/Auctioneer/search?supStatus=${supStatus}`,
      this.env
    );
    return res.data.content;
  }
}