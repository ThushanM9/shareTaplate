import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import {
    addYardInCheckListItems,
    UpdateYardInCheckListItemsRequestResource,
    YardInCheckListItems
} from "./interface";

export class YardInCheckListItemsService {
  constructor(private env: EnvConfig) {}

  public async getAllYardInCheckListItems() {
    let results: AxiosResponse<YardInCheckListItems[]> = await axios.get(
      this.env.basePath +
        `/yard-management/yard-check-list-item/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );

    return results.data;
  }

  public async getYardInCheckListItemsById(id: string) {
    let results: AxiosResponse<YardInCheckListItems> = await axios.get(
      this.env.basePath +
        `/yard-management/yard-check-list-item/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );

    return results.data;
  }

  public async UpdateYardInCheckListItemsResource(
    id: string,
    data: UpdateYardInCheckListItemsRequestResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/yard-management/yard-check-list-item/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async saveYardInCheckListItems(data: addYardInCheckListItems){
    let results: AxiosResponse<
    { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/yard-management/yard-check-list-item/${this.env.tenantId}/`,
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
