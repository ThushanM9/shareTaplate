import axios, { AxiosResponse } from "axios";
import { ContactType } from "../../comn-person/interfaces";
import { EnvConfig } from "../../config";
import { PaginatedResponse } from "../../utils/common";
import { AxiosGet } from "../../utils/Request";
import { CommonBranch, SecrityFirm, YardCreation, YardCreationRequestResource, YardInCharge, YardLevel, YardSupplier } from "./interface";

export class YardCreationService {
    constructor(private env: EnvConfig) { }

    public async getAllYardCreation() {
        let results: AxiosResponse<YardCreation[]> = await axios.get(
            this.env.basePath +
            `/yard-management/yard/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async getYardById(id: string) {
        let results: AxiosResponse<YardCreation> = await axios.get(
            this.env.basePath +
            `/yard-management/yard/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async saveYardCreation(data: YardCreationRequestResource) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
        > = await axios.post(
            this.env.basePath +
            `/yard-management/yard/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async updateYardCreationById(
        id: string,
        data: YardCreationRequestResource
    ) {
        let results: AxiosResponse<
            { messages: string } | { [prop: string]: string }
        > = await axios.put(
            this.env.basePath +
            `/yard-management/yard/${this.env.tenantId}/${id}`,
            data,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async getActiveYardLevels(status: "ACTIVE" | "INACTIVE") {
        let results: AxiosResponse<YardLevel[]> = await axios.get(
            this.env.basePath +
            `/yard-management/yard-level/${this.env.tenantId}/status/${status}`,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );

        results.data.forEach((value) => {
            value.levelPlusName = value.levelSequnce + " - " + value.name;
        })

        return results.data;
    }

    public async getAllYards() {
        let results: AxiosResponse<YardCreation[]> = await axios.get(
            this.env.basePath +
            `/yard-management/yard/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }

    public async getCommonBranches(id: string) {
        let results: AxiosResponse<CommonBranch[]> = await axios.get(
            this.env.basePath +
            `/comn-common/branch/${this.env.tenantId}/organization/${id}`,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );

        results.data.forEach((value) => {
            value.address = value.brhAddress01 + ", " + value.brhAddress02 + ", " + value.brhAddress03 + ", " + value.brhAddress04 + ", " + value.brhAddressCity + ".";
        })

        return results.data;
    }

    public async getYardSuppleirs(lawyerType: string, status: "ACTIVE" | "INACTIVE") {
        const res = await AxiosGet<PaginatedResponse<YardSupplier[]>>(
            `/comn-supplies-entities/supplies/${this.env.tenantId}/YARD_SUPPLIER/search?supLawyerType=${lawyerType}&supStatus=${status}`,
            this.env,
        );
        return res.data.content;
    }

    public async getSecurityFirmByStatus(status: "ACTIVE" | "INACTIVE") {
        const res = await AxiosGet<PaginatedResponse<SecrityFirm[]>>(
            `/comn-supplies-entities/supplies/${this.env.tenantId}/SECURITY_FIRM/search?supStatus=${status}`,
            this.env
        );
        return res.data.content;
    }

    public async getYardInChargeByStatus(status: "ACTIVE" | "INACTIVE") {
        const res = await AxiosGet<PaginatedResponse<YardInCharge[]>>(
            `/comn-user/user-profile/${this.env.tenantId}/status/${status}`,
            this.env,
        );
        return res.data.content;
    }

    public async getAllContactType() {
        let results: AxiosResponse<ContactType[]> = await axios.get(
            this.env.basePath +
            `/comn-person/contact-type/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token,
                },
            }
        );
        return results.data;
    }
}