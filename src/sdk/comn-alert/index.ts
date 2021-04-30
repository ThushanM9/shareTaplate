import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";
import { AlertEvent, AlertLimit, AlertType } from "./interfaces";

export class ComnAlertManagementService {
  constructor(private env: EnvConfig) {}

  /***************
   * ALERT EVENT *
   ***************/

  public async getAlertEventById(id: number) {
    let results: AxiosResponse<AlertEvent> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-event/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllAlertEvents(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<AlertEvent>> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-event/${this.env.tenantId}/` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertEventByCode(code: string) {
    let results: AxiosResponse<AlertEvent> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-event/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertEventByStatus(
    status: "ACTIVE" | "INACTIVE",
    pagination?: PaginatedRequest
  ) {
    let results: AxiosResponse<PaginatedResponse<AlertEvent>> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-event/${this.env.tenantId}/status/${status}` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertEventByName(
    name: string,
    pagination?: PaginatedRequest
  ) {
    let results: AxiosResponse<PaginatedResponse<AlertEvent>> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-event/${this.env.tenantId}/name/${name}` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***************
   * ALERT LIMIT *
   ***************/

  public async getAlertLimitById(id: number) {
    let results: AxiosResponse<AlertLimit> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-limit/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getActiveAlertLimitById(id: number) {
    let results: AxiosResponse<AlertLimit[]> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-limit/${this.env.tenantId}/status/ACTIVE/event/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllAlertLimits(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<AlertLimit>> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-limit/${this.env.tenantId}/` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertLimitByCode(code: string) {
    let results: AxiosResponse<AlertLimit> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-limit/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertLimitByDescription(description: string) {
    let results: AxiosResponse<AlertLimit[]> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-limit/${this.env.tenantId}/description/${description}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertLimitByName(name: string) {
    let results: AxiosResponse<AlertLimit[]> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-limit/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertLimitByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<AlertLimit[]> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-limit/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**************
   * ALERT TYPE *
   **************/

  public async getAlertTypeById(id: number) {
    let results: AxiosResponse<AlertType> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-type/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllAlertTypes(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<AlertType>> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-type/${this.env.tenantId}/` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertTypeByCode(code: string) {
    let results: AxiosResponse<AlertType> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertTypeByName(name: string, pagination?: PaginatedRequest) {
    let results: AxiosResponse<AlertType[]> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-type/${this.env.tenantId}/name/${name}` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAlertTypeByStatus(
    status: "ACTIVE" | "INACTIVE",
    pagination?: PaginatedRequest
  ) {
    let results: AxiosResponse<PaginatedResponse<AlertType>> = await axios.get(
      this.env.basePath +
        `/comn-alert-management/alert-type/${this.env.tenantId}/status/${status}` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
