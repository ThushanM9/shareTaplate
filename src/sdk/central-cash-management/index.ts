import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { Denominations } from "./interfaces";

export class CentralCashManagement {
    constructor(private env: EnvConfig) { }

    /********************
     * CENTRAL CASH MANAGEMENT CODE *
     ********************/

    public async getAllDenominations() {
        let results: AxiosResponse<Denominations[]> = await axios.get(
            this.env.basePath +
            `/yard-management/denomination/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }
}
