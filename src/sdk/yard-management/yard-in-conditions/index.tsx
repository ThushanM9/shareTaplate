import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import { addYardInCondition, UpdateYardInConditionRequestResource, yardInCondition } from "./interface";


export class YardInConditionService {
    constructor(private env: EnvConfig) {}
  
    public async getAllYardInCondition() {
      let results: AxiosResponse<yardInCondition[]> = await axios.get(
        this.env.basePath + `/yard-management/yard-in-condition/${this.env.tenantId}/all`,
        {
          headers: {
            Authorization: this.env.token,
          },
        }
      );
      return results.data;
    }

    public async getYardInConditionById (id: string){
      let results: AxiosResponse<yardInCondition> = await axios.get(
        this.env.basePath +
          `/yard-management/yard-in-condition/${this.env.tenantId}/${id}`,   
        {
          headers: {
            Authorization: this.env.token,
          },
        }
      );
      
      return results.data;
    }
    public async UpdateYardInConditionResource(
      id: string,
      data: UpdateYardInConditionRequestResource
    ) {
      let results: AxiosResponse<
        { messages: string } | { [prop: string]: string }
      > = await axios.put(
        this.env.basePath +
          `/yard-management/yard-in-condition/${this.env.tenantId}/${id}`,
        data,
        {
          headers: {
            Authorization: this.env.token,
          },
        }
      );
      return results.data;
    }

    
    public async saveYardInCondition(data: addYardInCondition){
      let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
      > = await axios.post(
        this.env.basePath +
          `/yard-management/yard-in-condition/${this.env.tenantId}/`,
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