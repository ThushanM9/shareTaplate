import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";
import { User } from "./interfaces";

export class ComnUserService {
  constructor(private env: EnvConfig) {}

  public async getUsersByStatus(
    status: "ACTIVE" | "",
    pagination?: PaginatedRequest
  ) {
    let results: AxiosResponse<PaginatedResponse<User>> = await axios.get(
      this.env.basePath +
        `/comn-user/user-profile/${this.env.tenantId}/status/${status}` +
        (pagination ? `?${serialize(pagination)}` : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getUserById(id: string) {
    let results: AxiosResponse<User> = await axios.get(
      this.env.basePath + `/comn-user/user-profile/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getUserBranchDetail(date: string, id: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/comn-user/user-profile/${this.env.tenantId}/branch-detail?date=${date}&id=${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getUserByUserId(userId: string) {
    let results: AxiosResponse<User> = await axios.get(
      this.env.basePath +
        `/comn-user/user-profile/${this.env.tenantId}/user-id/${userId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getUserByUserUsername(username: string) {
    // http://132.145.228.83/comn-user/user-profile/AnRkr/user-identity-server/ishanka
    let results: AxiosResponse<User> = await axios.get(
      this.env.basePath +
        "/comn-user/user-profile/AnRkr/user-identity-server/ishanka",
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
