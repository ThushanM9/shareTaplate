import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { CounterCashWithdrawalRequestResource, ChequeWithdrawalRequestResource, ChequeWithdrawalFinalActionRequestResource, ChequeWithdrawalReturnRequestResource, InwardChequeClearenceRequestResource, InwardClearenceBatch, InwardChequeClearenceBatchUpdateRequestResource, InwardChequeClearenceBatchLeavesClearingRequestBodyResource } from "./interfaces";
import { PaginatedRequest } from "../utils/common";
import { serialize } from "../utils/helpers";

export class CasaTransferOutService {

    constructor(private env: EnvConfig) {
    }

    public async counterCashWithdraw(data: CounterCashWithdrawalRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-out/counter-cash-withdrawal/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /*********************
     * CHEQUE WITHDRAWAL *
     *********************/

    public async chequeWithdraw(data: ChequeWithdrawalRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-out/cheque-withdrawal/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateFinalAction(transferId: number, data: ChequeWithdrawalFinalActionRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-out/cheque-withdrawal/${this.env.tenantId}/${transferId}/final-action`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updatePaid(transferId: number, data: {
        "modifiedUser": string
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-out/cheque-withdrawal/${this.env.tenantId}/${transferId}/paid`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateReturn(transferId: number, data: ChequeWithdrawalReturnRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-out/cheque-withdrawal/${this.env.tenantId}/${transferId}/return`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateHold(transferId: number, data: {}) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-out/cheque-withdrawal/${this.env.tenantId}/${transferId}/hold`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateCancel(transferId: number, data: {}) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-out/cheque-withdrawal/${this.env.tenantId}/${transferId}/cancel`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAllTransferForSignatureVerification(pagination?: PaginatedRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-out/cheque-withdrawal/${this.env.tenantId}/signature-verification/all` + (pagination ? '?' + serialize(pagination) : ''),
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /***************************
     * INWARD CHEQUE CLEARENCE *
     ***************************/

    public async addInwardChequeClearenceBatch(data: InwardChequeClearenceRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-out/inward-cheque-clearence/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAllCompletedInwardBatches() {
        let results: AxiosResponse<InwardClearenceBatch[]> = await axios.get(this.env.basePath + `/casa-transfer-out/inward-cheque-clearence/${this.env.tenantId}/allBatches`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getInwardChequeClearenceBatchById(id: number) {
        let results: AxiosResponse<InwardClearenceBatch> = await axios.get(this.env.basePath + `/casa-transfer-out/inward-cheque-clearence/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateInwardChequeClearenceBatchById(id: number, data: InwardChequeClearenceBatchUpdateRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-out/inward-cheque-clearence/${this.env.tenantId}/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async finishOrCancelInwardChequeClearenceBatchById(id: number, data: {
        "finishOrCancelStatus": string
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-out/inward-cheque-clearence/${this.env.tenantId}/finish-or-cancel/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async clearingChequeDepositBatchChequeLeaves(data: InwardChequeClearenceBatchLeavesClearingRequestBodyResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-out/inward-cheque-clearence/${this.env.tenantId}/clearing`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }
}