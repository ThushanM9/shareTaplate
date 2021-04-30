import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import { AtLeastOne } from "../../utils/helpers";
import { SalesMethod, SaveSalesMethod, UpdateSalesMethod } from "./interface";

export class SalesMethodService {
    constructor(private env: EnvConfig) { }

    public async getAllSalesMethod() {
        let results: AxiosResponse<SalesMethod[]> = await axios.get(
            this.env.basePath +
            `/yard-management/sales-method/${this.env.tenantId}/all`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async getSalesMethodById(id: string) {
        let results: AxiosResponse<SalesMethod> = await axios.get(
            this.env.basePath +
            `/yard-management/sales-method/${this.env.tenantId}/${id}`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }


    public async updateSalesMethodById(
        id: string,
        data: AtLeastOne<UpdateSalesMethod>
    ) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
            > = await axios.put(
            this.env.basePath +
            `/yard-management/sales-method/${this.env.tenantId}/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async saveSalesMethod(
        data: SaveSalesMethod
    ) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
            > = await axios.post(
            this.env.basePath +
            `/yard-management/sales-method/${this.env.tenantId}`,
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

