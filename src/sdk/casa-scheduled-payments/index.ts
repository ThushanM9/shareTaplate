import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";
import { ScheduledPayment, ScheduledPaymentSaveRequest } from "./interfaces";

export class CasaScheduledPaymentsService {
  constructor(private env: EnvConfig) {}

  public async getAllScheduledPayments(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<
      ScheduledPayment
    >> = await axios.get(
      this.env.basePath +
        `/casa-scheduled-payments/payments/${this.env.tenantId}/all` +
        (pagination ? `?${serialize(pagination)}` : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllScheduledPaymentsByAccNumber(accountNumber: string) {
    let results: AxiosResponse<PaginatedResponse<
      ScheduledPayment
    >> = await axios.get(
      this.env.basePath +
        `/casa-scheduled-payments/payments/${this.env.tenantId}/account-number/${accountNumber}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getScheduledPaymentsByAccountId(
    accountId: string,
    pagination?: PaginatedRequest
  ) {
    let results: AxiosResponse<PaginatedResponse<
      ScheduledPayment
    >> = await axios.get(
      this.env.basePath +
        `/casa-scheduled-payments/payments/${this.env.tenantId}/${accountId}/all` +
        (pagination ? `?${serialize(pagination)}` : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getScheduledPaymentsByAccountIdAndStatus(
    accountId: number,
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<PaginatedResponse<
      ScheduledPayment
    >> = await axios.get(
      this.env.basePath +
        `/casa-scheduled-payments/payments/${this.env.tenantId}/${accountId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getScheduledPaymentsByStatus(
    status: string,
    start: number,
    length: number
  ) {
    let results: AxiosResponse<ScheduledPayment[]> = await axios.get(
      this.env.basePath +
        `/casa-scheduled-payments/payments/${this.env.tenantId}/status/${status}/${start}/${length}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getScheduledPaymentById(id: string) {
    let results: AxiosResponse<ScheduledPayment> = await axios.get(
      this.env.basePath +
        `/casa-scheduled-payments/payments/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveScheduledPayment(data: ScheduledPaymentSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-scheduled-payments/payments/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateScheduledPayment(id: string) {}

  public async cancelScheduledPayment(
    id: string,
    data: {
      canceledUser?: string;
      canceledRemark?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-scheduled-payments/payments/${this.env.tenantId}/${id}/cancel`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async completeScheduledPayment(
    id: string,
    data: {
      completedUser?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-scheduled-payments/payments/${this.env.tenantId}/${id}/complete`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
