import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import { PeriodTypeList } from "./interface";

export class comnYardfeechargeDetailsService {
    constructor(private env: EnvConfig) { }

    public async getAllPeriodTypeList() {
        let results: AxiosResponse<PeriodTypeList[]> = await axios.get(
            this.env.basePath +
            `/comn-common/period/${this.env.tenantId}/all`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }
}