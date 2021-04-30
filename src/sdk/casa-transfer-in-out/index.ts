import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";
import { ApproveTransactionReversalRequestResource, Batch, BatchDetail, BatchDetailList, BatchRequestResource, BatchTypeDetail, BatchTypeDetailSaveRequest, BatchTypeDetailUpdateRequest, ChequeDepositBankInHouseRequestResource, chequeDepositBatchClearingChequeLeavesBodyRequestResource, ChequeDepositInHouseChequeLeavesBodyRequestResource, CreateTransactionReversalRequestResource, FundTransferDetails, FundTransferDetailsResource, FundTransferSearchRequest, TransactionReversal } from "./interfaces";

export class CasaTransferInOutService {

    constructor(private env: EnvConfig) {
    }

    /***************
     * BATCH TYPES *
     ***************/

    public async getAllBatchTypes() {
        let results: AxiosResponse<BatchTypeDetail[]> = await axios.get(this.env.basePath + `/casa-transfer-in-out/batch-types/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getBatchTypeById(id: string) {
        let results: AxiosResponse<BatchTypeDetail[]> = await axios.get(this.env.basePath + `/casa-transfer-in-out/batch-types/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getBatchTypesByStatus(status: "ACTIVE" | "") {
        let results: AxiosResponse<BatchTypeDetail[]> = await axios.get(this.env.basePath + `/casa-transfer-in-out/batch-types/${this.env.tenantId}/status/${status}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async saveBatchType(data: BatchTypeDetailSaveRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in-out/batch-types/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateBatchTypeById(id: string, data: BatchTypeDetailUpdateRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-in-out/batch-types/${this.env.tenantId}/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /*********
     * BATCH *
     *********/

    public async addBatch(data: BatchRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in-out/batch/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getBatchById(id: number) {
        let results: AxiosResponse<Batch[]> = await axios.get(this.env.basePath + `/casa-transfer-in-out/batch/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getBatches() {
        let results: AxiosResponse<Batch[]> = await axios.get(this.env.basePath + `/casa-transfer-in-out/batch/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getBatchByStatus(status: "CREATED" | "") {
        let results: AxiosResponse<Batch[]> = await axios.get(this.env.basePath + `/casa-transfer-in-out/batch/${this.env.tenantId}/status/${status}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async cancelBatch(id: number, data: {
        "remark"?: string,
        "version": "string"
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-in-out/batch/${this.env.tenantId}/${id}/cancel`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async approveBatch(id: number, data: {
        "remark"?: string,
        "batchVersion": "string"
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-in-out/batch/${this.env.tenantId}/${id}/approve`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /*****************
     * BATCH DETAILS *
     *****************/

    public async addBatchDetail(batchId: string, data: BatchDetailList) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in-out/batch-detail/${this.env.tenantId}/batch-id/${batchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getBatchDetalByBatchId(id: number) {
        let results: AxiosResponse<BatchDetail[]> = await axios.get(this.env.basePath + `/casa-transfer-in-out/batch-detail/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /***********
     * DEPOSIT *
     ***********/

    public async addInHouseChequeDepositBatch(data: ChequeDepositBankInHouseRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in-out/cheque-deposit-bank-in-house/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async addInHouseChequeLeaves(chequeDepositBatchId: number, data: ChequeDepositInHouseChequeLeavesBodyRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in-out/cheque-deposit-bank-in-house/${this.env.tenantId}/cheque_leaves/${chequeDepositBatchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async finishOrCancelChequeDepositBatch(chequeDepositBatchId: number, data: {
        "finishOrCancelStatus": string
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in-out/cheque-deposit-bank-in-house/${this.env.tenantId}/finish-or-cancel/${chequeDepositBatchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async clearingChequeDepositBatchChequeLeaves(chequeDepositBatchId: number, data: chequeDepositBatchClearingChequeLeavesBodyRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in-out/cheque-deposit-bank-in-house/${this.env.tenantId}/clearing/${chequeDepositBatchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /*****************
     * FUND TRANSFER *
     *****************/

    public async saveFundTransfer(data: FundTransferDetailsResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in-out/fund-transfer/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getFundTransfers(data: FundTransferSearchRequest) {
        let results: AxiosResponse<PaginatedResponse<FundTransferDetails>> = await axios.get(this.env.basePath + `/casa-transfer-in-out/fund-transfer/${this.env.tenantId}/search-transfer` + '?' + serialize(data),
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAllFundTransfers(pagination?: PaginatedRequest) {
        let results: AxiosResponse<PaginatedResponse<FundTransferDetails>> = await axios.get(this.env.basePath + `/casa-transfer-in-out/fund-transfer/${this.env.tenantId}/all` + (pagination ? '?' + serialize(pagination) : ''),
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async searchFundTransfers(data: FundTransferSearchRequest) {
        let results: AxiosResponse<PaginatedResponse<FundTransferDetails>> = await axios.get(this.env.basePath + `/casa-transfer-in-out/fund-transfer/${this.env.tenantId}/all?` + serialize(data),
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getFundTransferById(id: number) {
        let results: AxiosResponse<FundTransferDetails> = await axios.get(this.env.basePath + `/casa-transfer-in-out/fund-transfer/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async confirmFundTransfer(id: number, data: { notes: string }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-in-out/fund-transfer/${this.env.tenantId}/confirm/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async cancelFundTransfer(id: number, data: { notes: string }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-in-out/fund-transfer/${this.env.tenantId}/cancel/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /************************
     * TRANSACTION REVERSAL *
     ************************/

    public async transactionReversalCreation(data: CreateTransactionReversalRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in-out/trn-reversal/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAllTransactionReversals(pagination?: PaginatedRequest) {
        let results: AxiosResponse<PaginatedResponse<TransactionReversal>> = await axios.get(this.env.basePath + `/casa-transfer-in-out/trn-reversal/${this.env.tenantId}` + (pagination ? '?' + serialize(pagination) : ''),
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getTransactionReversalByStatus(status: "ACTIVE" | "") {
        let results: AxiosResponse<TransactionReversal[]> = await axios.get(this.env.basePath + `/casa-transfer-in-out/trn-reversal/${this.env.tenantId}/status/${status}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getTransactionReversalById(id: number) {
        let results: AxiosResponse<TransactionReversal> = await axios.get(this.env.basePath + `/casa-transfer-in-out/trn-reversal/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateTransactionReversalById(id: number, data: ApproveTransactionReversalRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-in-out/trn-reversal/${this.env.tenantId}/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async approveTransactionReversal(id: number, data: ApproveTransactionReversalRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-in-out/trn-reversal/${this.env.tenantId}/${id}/approve`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }
}