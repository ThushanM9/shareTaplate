import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { CounterCashDepositRequestResource, ChequeDepositNonBankRequestResource, ChequeDepositBatchChequeLeavesBodyRequestResource, ChequeDepositExternalRequestResource, OutwardChequeClearenceRequestResource, OutwardChequeClearenceBatchUpdateRequestResource, PdChequeDepositRequestResource, PDChequeConfirmRequestResource, PdChequeDepositBatchChequeLeavesBodyRequestResource } from "./interfaces";


export class CasaTransferInService {

    constructor(private env: EnvConfig) {
    }

    public async counterCashDeposit(data: CounterCashDepositRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/counter-cash-deposit/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /***************************
     * NON BANK CHEQUE DEPOSIT *
     ***************************/

    public async addNonBankChequeDepositBatch(data: ChequeDepositNonBankRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/cheque-deposit-non-bank/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async addNonBankChequeDepositBatchChequeLeaves(chequeDepositBatchId: number, data: ChequeDepositBatchChequeLeavesBodyRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/cheque-deposit-non-bank/${this.env.tenantId}/${chequeDepositBatchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async finishOrCancelNonBankChequeDepositBatch(chequeDepositBatchId: number, data: { finishOrCancelStatus: string }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/cheque-deposit-non-bank/${this.env.tenantId}/finish-or-cancel/${chequeDepositBatchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /***************************
     * EXTERNAL CHEQUE DEPOSIT *
     ***************************/

    public async addExternalChequeDepositBatch(data: ChequeDepositExternalRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/cheque-deposit-external/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async addExternalChequeDepositBatchChequeLeaves(chequeDepositBatchId: number, data: ChequeDepositBatchChequeLeavesBodyRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/cheque-deposit-external/${this.env.tenantId}/${chequeDepositBatchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async finishOrCancelExternalChequeDepositBatch(chequeDepositBatchId: number, data: { finishOrCancelStatus: string }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/cheque-deposit-external/${this.env.tenantId}/finish-or-cancel/${chequeDepositBatchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /****************************
     * OUTWARD CHEQUE CLEARENCE *
     ****************************/

    public async addOutwardChequeClearenceBatch(data: OutwardChequeClearenceRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/outward-cheque-clearence/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getOutwardChequeClearenceBatchById(id: number) {
        // TODO: Response is not defined
        let results: AxiosResponse<any> = await axios.get(this.env.basePath + `/casa-transfer-in/outward-cheque-clearence/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getOutwardChequeClearenceBatches() {
        // TODO: Internal server error
        let results: AxiosResponse<any> = await axios.get(this.env.basePath + `/casa-transfer-in/outward-cheque-clearence/${this.env.tenantId}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateInwardChequeClearenceBatchById(id: number, data: OutwardChequeClearenceBatchUpdateRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-in/outward-cheque-clearence/${this.env.tenantId}/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /******************************
     * PD CHEQUE DEPOSIT NON BANK *
     ******************************/

    public async addPdChequeDepositBatch(data: PdChequeDepositRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/pd-cheque-deposit/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async addPdChequeDepositBatchChequeLeaves(batchId: number, data: ChequeDepositBatchChequeLeavesBodyRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/pd-cheque-deposit/${this.env.tenantId}/${batchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getPDChequeList() {
        // TODO: Response is not defined
        let results: AxiosResponse<any> = await axios.get(this.env.basePath + `/casa-transfer-in/pd-cheque-deposit/${this.env.tenantId}/pd-cheque-list`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async confirmPDCheque(data: PDChequeConfirmRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/casa-transfer-in/pd-cheque-deposit/${this.env.tenantId}/confirm-pd-cheque`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async finishOrCancelPDChequeBatch(batchId: string, data: {
        "finishOrCancelStatus": string
    }) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/pd-cheque-deposit/${this.env.tenantId}/finish-or-cancel/${batchId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    /******************************
     * PD CHEQUE DEPOSIT IN HOUSE *
     ******************************/

    public async clearingPdChequeDepositBatchChequeLeaves(batchId: string, data: PdChequeDepositBatchChequeLeavesBodyRequestResource) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/casa-transfer-in/pd-cheque-deposit-in-house/${this.env.tenantId}/clearing/${batchId}
        c`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }
}