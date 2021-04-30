import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import {
  addYardLevelDefinition,
  UpdateYardLevelDefinitionRequestResource,
  YardLevelDefinition
} from "./interface";

export class YardLevelService{
    constructor(private env: EnvConfig) {}

    public async getAllYardLevelDefinition() {
        let results: AxiosResponse<YardLevelDefinition[]> = await axios.get(
          this.env.basePath +
            `/yard-management/yard-level/${this.env.tenantId}/all`,
          {
            headers: {
              Authorization: this.env.token,
            },
          }
        );

        return results.data;
        
      }


    public async getYardLevelDefinitionById (id: string){
      let results: AxiosResponse<YardLevelDefinition> = await axios.get(
        this.env.basePath +
          `/yard-management/yard-level/${this.env.tenantId}/${id}`,   
        {
          headers: {
            Authorization: this.env.token,
          },
        }
      );

      return results.data;
    }
      
    public async UpdateYardLevelDefinitionResource(
      id: string,
      data: UpdateYardLevelDefinitionRequestResource
    ) {
      let results: AxiosResponse<
        { messages: string } | { [prop: string]: string }
      > = await axios.put(
        this.env.basePath +
          `/yard-management/yard-level/${this.env.tenantId}/${id}`,
        data,
        {
          headers: {
            Authorization: this.env.token,
          },
        }
      );
      return results.data;
    }

    public async saveYardLevelDefinition(data: addYardLevelDefinition){
      let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
      > = await axios.post(
        this.env.basePath +
          `/yard-management/yard-level/${this.env.tenantId}/`,
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