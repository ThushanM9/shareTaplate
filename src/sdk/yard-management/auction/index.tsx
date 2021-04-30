import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import { addAuction, auction, updateAuctionRequestResource } from "./interface";

export class AuctionService {
  constructor(private env: EnvConfig) {}

  public async getAllAuction() {
    let results: AxiosResponse<auction[]> = await axios.get(
      this.env.basePath + `/yard-management/auction/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );

    return results.data;
  }

  public async getAllAuctionById(id: string) {
    let results: AxiosResponse<auction> = await axios.get(
      this.env.basePath + `/yard-management/auction/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async UpdateAuctionResource(
    id: string,
    data: updateAuctionRequestResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath + `/yard-management/auction/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveAuction(data: addAuction) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/yard-management/auction/${this.env.tenantId}/`,
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
