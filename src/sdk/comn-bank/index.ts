import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { Bank, Branch } from "./interfaces";
import { PaginatedResponse, PaginatedRequest } from "../utils/common";
import { serialize } from "../utils/helpers";

export class ComnBankService {

    constructor(private env: EnvConfig) {
    }

    public async getAllBanks(pagination?: PaginatedRequest) {
        let results: AxiosResponse<PaginatedResponse<Bank>> = await axios.get(this.env.basePath + `/comn-bank/comn-bank/${this.env.tenantId}/all` + (pagination ? '?' + serialize(pagination) : ''),
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAllBranches(pagination?: PaginatedRequest) {
        let results: AxiosResponse<PaginatedResponse<Branch>> = await axios.get(this.env.basePath + `/comn-bank/comn-bank-branch/${this.env.tenantId}/all`+ (pagination ? '?' + serialize(pagination) : ''),
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getBranchesByBankId(bankId: string) {
        let results: AxiosResponse<PaginatedResponse<Branch>> = await axios.get(this.env.basePath + `/comn-bank/comn-bank-branch/${this.env.tenantId}/bankid/${bankId}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }
}