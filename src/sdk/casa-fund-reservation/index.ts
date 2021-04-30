import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { AccountFundReservation, FundReservationSaveRequest, FundReservationUpdateRequest } from "./interfaces";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";

export class CasaFundReservationService {
    
    constructor(private env: EnvConfig) {
    }

    public async getAllFundReservations(pagination?: PaginatedRequest) {
        let results: AxiosResponse<PaginatedResponse<AccountFundReservation>> = await axios.get(this.env.basePath + `/casa-fund-reservation/fund-reservation/${this.env.tenantId}/all` + (pagination ? '?' + serialize(pagination) : ''),
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getFundReservatinsByAccountId(accountId: number) {
        let results: AxiosResponse<AccountFundReservation> = await axios.get(this.env.basePath + `/casa-fund-reservation/fund-reservation/${this.env.tenantId}/account/${accountId}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getFundReservatinsByAccountIdAndStatus(accountId: number, status: "ACTIVE" | "INACTIVE") {
        let results: AxiosResponse<AccountFundReservation[]> = await axios.get(this.env.basePath + `/casa-fund-reservation/fund-reservation/${this.env.tenantId}/account/${accountId}/${status}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async saveFundReservation(data: FundReservationSaveRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-fund-reservation/fund-reservation/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateFundReservation(id: string, data: FundReservationUpdateRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-fund-reservation/fund-reservation/${this.env.tenantId}/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateFundReservationPriority(fundReservationId: string, accountId: string, data: {
        furePriority: number,
        fureModifiedUser?: string,
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-fund-reservation/fund-reservation/${this.env.tenantId}/${accountId}/${fundReservationId}/priority`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async cancelFundReservation(fundReservationId: string, accountId: string, data: {
        fureCancellationRemark: string,
        fureCancelledUser: string
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-fund-reservation/fund-reservation/${this.env.tenantId}/${accountId}/create/${fundReservationId}/cancel`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async approveFundReservation(fundReservationId: string, accountId: string, data: {
        fureLastApprovedUser: string
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-fund-reservation/fund-reservation/${this.env.tenantId}/${accountId}/approve/${fundReservationId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async deactivateFundReservation(fundReservationId: string, accountId: string, data: {
        fureLastApprovedUser: string
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-fund-reservation/fund-reservation/${this.env.tenantId}/${accountId}/approved/${fundReservationId}/cancel`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

}