import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import { AssestTypeList } from "./interface";


export class ColYardFeeChargeDetailsAssetTypeService {
    constructor(private env: EnvConfig) { }

    public async getColAssetTypeGetByStatus(
        status: "ACTIVE"
    ) {
        let results: AxiosResponse<AssestTypeList[]> = await axios.get(
            this.env.basePath +
            `/col-collateral/asset-type/${this.env.tenantId}/status/${status}`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );

        return results.data;
    }

    public async getColAssetSubTypeGetByStatus(
        status: "ACTIVE"
    ) {
        let results: AxiosResponse<AssestTypeList[]> = await axios.get(
            this.env.basePath +
            `/col-collateral/asset-subtype/${this.env.tenantId}/status/${status}`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }


}