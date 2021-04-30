import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { Designation, DesignationSaveRequest, DesignationUpdateRequest } from "./interfaces";

export class ComnEmployeeService {

    constructor(private env: EnvConfig) {
    }

    /****************
     * OFFICER TYPE *
     ****************/

    public async getAllDesignations() {
        let results: AxiosResponse<Designation[]> = await axios.get(this.env.basePath + `/comn-employee/designation/${this.env.tenantId}/all`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getDesignationsByStatus(status: "ACTIVE" | "INACTIVE") {
        let results: AxiosResponse<Designation[]> = await axios.get(this.env.basePath + `/comn-employee/designation/${this.env.tenantId}/status/${status}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getDesignationsByCode(code: string) {
        let results: AxiosResponse<Designation[]> = await axios.get(this.env.basePath + `/comn-employee/designation/${this.env.tenantId}/code/${code}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getDesignationsByName(name: string) {
        let results: AxiosResponse<Designation[]> = await axios.get(this.env.basePath + `/comn-employee/designation/${this.env.tenantId}/name/${name}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getDesignationByIdAndStatus(id: number, status: "ACTIVE" | "INACTIVE") {
        let results: AxiosResponse<Designation[]> = await axios.get(this.env.basePath + `/comn-employee/designation/${this.env.tenantId}/${id}/${status}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async getDesignationById(id: number) {
        let results: AxiosResponse<Designation[]> = await axios.get(this.env.basePath + `/comn-employee/designation/${this.env.tenantId}/${id}`,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async saveDesignation(data: DesignationSaveRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.post(this.env.basePath + `/comn-employee/designation/${this.env.tenantId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

    public async updateDesignationById(desgId: string, data: DesignationUpdateRequest) {
        let results: AxiosResponse<{ messages: string } | { [prop: string]: string }> = await axios.put(this.env.basePath + `/comn-employee/designation/${this.env.tenantId}/${desgId}`,
            data,
            {
                headers: {
                    Authorization: this.env.token
                }
            });
        return results.data;
    }

}