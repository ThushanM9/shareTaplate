import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../config";
import { AtLeastOne } from "../../utils/helpers";
import { GetAllYardFeeType, GetAllYardFeeTypeById, SaveYardFeeType, UpdateYardFeeType } from "./interface";


export class YardFeeTypeService {
    constructor(private env: EnvConfig) { }

    public async getAllYardFeeType() {
        let results: AxiosResponse<GetAllYardFeeType[]> = await axios.get(
            this.env.basePath +
            `/yard-management/fee-type/${this.env.tenantId}/all`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async getYardFeeTypeById(id: string) {
        let results: AxiosResponse<GetAllYardFeeTypeById> = await axios.get(
            this.env.basePath +
            `/yard-management/fee-type/${this.env.tenantId}/${id}`,

            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async saveYardFeeType(
        data: SaveYardFeeType
    ) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
            > = await axios.post(
            this.env.basePath +
            `/yard-management/fee-type/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async updateYardFeeTypeById(
        id: string,
        data: AtLeastOne<UpdateYardFeeType>
    ) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
            > = await axios.put(
            this.env.basePath +
            `/yard-management/fee-type/${this.env.tenantId}/${id}`,
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