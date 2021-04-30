import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import { AtLeastOne } from "../../utils/helpers";
import { GetYardFeeChargeDetailsById, GetYardFeeTypeByStatus, SaveYardFeeChargeDetails, UpdateYardFeeChargeDetails, YardFeeChargeDetails } from "./interface";


export class YardFeeChargeDetailsService {
    constructor(private env: EnvConfig) { }

    public async getAllYardFeeChargeDetails() {
        let results: AxiosResponse<YardFeeChargeDetails[]> = await axios.get(
            this.env.basePath +
            `/yard-management/yard-fee-charge-details/${this.env.tenantId}/all`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async SaveYardFeeChargeDetails(
        data: SaveYardFeeChargeDetails
    ) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
            > = await axios.post(
            this.env.basePath +
            `/yard-management/yard-fee-charge-details/${this.env.tenantId}`,
            {...data, amount: data.amount ? data.amount : "0.00"},
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async UpdateYardFeeChargeDetails(
        id: string,
        data: AtLeastOne<UpdateYardFeeChargeDetails>
    ) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
            > = await axios.put(
            this.env.basePath +
            `/yard-management/yard-fee-charge-details/${this.env.tenantId}/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async GetYardFeeChargeDetailsById(id: string) {
        let results: AxiosResponse<GetYardFeeChargeDetailsById> = await axios.get(
            this.env.basePath +
            `/yard-management/yard-fee-charge-details/${this.env.tenantId}/${id}`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async getFeeTypeByStatus(
        status: "ACTIVE"
    ) {
        let results: AxiosResponse<GetYardFeeTypeByStatus[]> = await axios.get(
            this.env.basePath +
            `/yard-management/fee-type/${this.env.tenantId}/status/${status}`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }


}