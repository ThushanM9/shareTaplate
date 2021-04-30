import { EnvConfig } from "../../config";
import { PaginatedResponse } from "../../utils/common";
import { AxiosGet, AxiosPost, AxiosPut } from "../../utils/Request";
import {
    AddYardReleaseType,
    UpdateYardReleaseTypeRequestResource,
    YardReleaseType
} from "./interface";

export class YardReleaseTypeService {
  constructor(private env: EnvConfig) {}

  public async getAllYardReleaseType() {
    const res = await AxiosGet<PaginatedResponse<YardReleaseType[]>>(
      `/yard-management/yard-release-types/${this.env.tenantId}/all`,
      this.env
    );
    return res.data.content;
  }

  public async getYardReleaseTypeById(id: string) {
    const res = await AxiosGet<YardReleaseType>(
      `/yard-management/yard-release-types/${this.env.tenantId}/${id}`,
      this.env
    );
    return res.data;
  }

  public async updateYardReleaseTypeResource(
    id: string,
    data: UpdateYardReleaseTypeRequestResource
  ) {
    const res = await AxiosPut(
      `/yard-management/yard-release-types/${this.env.tenantId}/${id}`,
      data,
      this.env
    );
    return res.data;
  }
  public async saveYardReleaseTypeService(data:AddYardReleaseType) {
    const res = await AxiosPost(
      `/yard-management/yard-release-types/${this.env.tenantId}`,
      data,
      this.env
    );
    return res.data;
  }

}
