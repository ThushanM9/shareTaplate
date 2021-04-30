import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { AccuredCreditInterest } from "./interfaces";

export class CasaInterestScheduleService {

    constructor(private env: EnvConfig) {
    }

    public async calculateCreditInterestForAccount(accountId: number) {
        // TODO: Response not defined
        let results: AxiosResponse<{ messages: string } | any> = await axios.post(this.env.basePath + `/casa-interest-schedule/credit-interest/${this.env.tenantId}/calculate/${accountId}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAccuredCreditInterest(accountId: number) {
        let results: AxiosResponse<AccuredCreditInterest> = await axios.get(this.env.basePath + `/casa-interest-schedule/credit-interest-log/${this.env.tenantId}/accountid/${accountId}/applied/NO`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async calculateBonusInterest(accountId: number) {
        // TODO: Response not defined
        let results: AxiosResponse<any> = await axios.post(this.env.basePath + `/casa-interest-schedule/bonus-interest/${this.env.tenantId}/calculate/${accountId}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAccuredBonusInterest(accountId: number) {
        // TODO: Response not defined
        let results: AxiosResponse<any> = await axios.get(this.env.basePath + `/casa-interest-schedule/bonus-interest-log/${this.env.tenantId}/accountid/${accountId}/applied/NO`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async calculateODInterest(accountId: number) {
        // TODO: Response not defined
        let results: AxiosResponse<any> = await axios.post(this.env.basePath + `/casa-interest-schedule/od-interest/${this.env.tenantId}/calculate/${accountId}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAccuredODInterest(accountId: number) {
        // TODO: Response not defined
        let results: AxiosResponse<any> = await axios.get(this.env.basePath + `/casa-interest-schedule/od-interest-log/${this.env.tenantId}/accountid/${accountId}/applied/NO`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }
}