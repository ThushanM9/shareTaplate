import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import {
    ValuationCondition, YardValuationRequestResource, YardValuationUpdateRequestResource
} from "./interface";

export class ValuationConditionService {
    constructor(private env: EnvConfig) { }

    public async getAllValuationCondition() {
        let results: AxiosResponse<ValuationCondition[]> = await axios.get(
            this.env.basePath +
            `/yard-management/valuation-condition/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async getValuationConditionById(id: string) {
        let results: AxiosResponse<ValuationCondition> = await axios.get(
            this.env.basePath +
            `/yard-management/valuation-condition/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async updateValuationConditionById(
        id: string,
        data: YardValuationUpdateRequestResource
    ) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
        > = await axios.put(
            this.env.basePath +
            `/yard-management/valuation-condition/${this.env.tenantId}/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async saveValuationCondition(data: YardValuationRequestResource) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
        > = await axios.post(
            this.env.basePath +
            `/yard-management/valuation-condition/${this.env.tenantId}`,
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