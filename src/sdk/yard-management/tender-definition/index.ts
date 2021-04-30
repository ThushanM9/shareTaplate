import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import { addTenderDefinition, TenderDefinition, UpdateTenderDefinitionRequestResource } from "./interface";

export class TenderDefinitionService {
  constructor(private env: EnvConfig) {}

  public async getAllTenderDefinition() {
    let results: AxiosResponse<TenderDefinition[]> = await axios.get(
      this.env.basePath + `/yard-management/tender/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTenderDefinitionById(id: string) {
    let results: AxiosResponse<TenderDefinition> = await axios.get(
      this.env.basePath + `/yard-management/tender/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    debugger;
    return results.data;
  }


public async UpdateTenderDefinitionResource(
  id: string,
  data: UpdateTenderDefinitionRequestResource
) {
  let results: AxiosResponse<
    { messages: string } | { [prop: string]: string }
  > = await axios.put(
    this.env.basePath +
      `/yard-management/tender/${this.env.tenantId}/${id}`,
    data,
    {
      headers: {
        Authorization: this.env.token,
      },
    }
  );
  return results.data;
}


public async saveTenderDefinition(data: addTenderDefinition){
  let results: AxiosResponse<
  { messages: string } | { [prop: string]: string }
  > = await axios.post(
    this.env.basePath +
      `/yard-management/tender/${this.env.tenantId}/`,
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