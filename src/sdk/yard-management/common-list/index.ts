import { EnvConfig } from "../../config";
import { PaginatedResponse } from "../../utils/common";
import { AxiosGet, AxiosPost, AxiosPut } from "../../utils/Request";
import { AddCommonListItem, CommonListItem, UpdateCommonListItemRequestResource } from "./interface";

export class CommonListItemService {
  constructor(private env: EnvConfig) {}

  public async getAllCommonListItem() {
    const res = await AxiosGet<PaginatedResponse<CommonListItem[]>>(
      `/yard-management/common-list/${this.env.tenantId}/all`,
      this.env
    );
    return res.data.content;
  }

  public async getCommonListItemById(id:string) {
    const res = await AxiosGet<CommonListItem>(
      `/yard-management/common-list/${this.env.tenantId}/${id}`,
      this.env
    );
    return res.data;
  }

  public async updateCommonListItemResource(id:string,data:UpdateCommonListItemRequestResource) {
    const res = await AxiosPut(
      `/yard-management/common-list/${this.env.tenantId}/${id}`,
      data,
      this.env
    );
    return res.data;
  }
  

  public async saveCommonListItemService(data:AddCommonListItem) {
    const res = await AxiosPost(
      `/yard-management/common-list/${this.env.tenantId}`,
      data,
      this.env
    );
    return res.data;
  }

}
