import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { Branch, OrganizationLevel } from "./interfaces";

export class ComnBranchService {

    constructor(private env: EnvConfig) {
    }

    public async findBranchByStatus(status: "ACTIVE" | "INACTIVE") {
        let results: AxiosResponse<Branch[]> = await axios.get(this.env.basePath + `/comn-branch/branch/${this.env.tenantId}/status/${status}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getAllBranches() {
        let results: AxiosResponse<Branch[]> = await axios.get(this.env.basePath + `/comn-branch/branch/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getBranchById(id: number) {
        let results: AxiosResponse<Branch> = await axios.get(this.env.basePath + `/comn-branch/branch/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getOrganizationLevelByStatus(status: "ACTIVE" | "INACTIVE") {
        let results: AxiosResponse<OrganizationLevel[]> = await axios.get(this.env.basePath + `/comn-branch/branch/${this.env.tenantId}/status/${status}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }
}