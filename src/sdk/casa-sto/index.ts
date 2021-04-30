import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";
import { StandingOrder, StandingOrderSaveRequest } from "./interfaces";

export class CasaStandingOrderService {
  constructor(private env: EnvConfig) {}

  public async getAllStandingOrders(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<
      StandingOrder
    >> = await axios.get(
      this.env.basePath +
        `/casa-sto/standing-order-consent/${this.env.tenantId}/all` +
        (pagination ? `?${serialize(pagination)}` : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getStandingOrderById(id: number) {
    let results: AxiosResponse<StandingOrder> = await axios.get(
      this.env.basePath +
        `/casa-sto/standing-order-consent/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getStandingOrderByAccNo(id: number) {
    let results: AxiosResponse<StandingOrder[]> = await axios.get(
      this.env.basePath +
        `/casa-sto/standing-order-consent/${this.env.tenantId}/account-number/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllStandingOrdersByStatus(
    accountNoId: number,
    status: string,
    pagination?: PaginatedRequest
  ) {
    let results: AxiosResponse<PaginatedResponse<
      StandingOrder
    >> = await axios.get(
      this.env.basePath +
        `/casa-sto/standing-order-consent/${this.env.tenantId}/${accountNoId}/status/${status}` +
        (pagination ? `?${serialize(pagination)}` : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllStandingOrdersByAccountId(
    accountNoId: number,
    pagination?: PaginatedRequest
  ) {
    let results: AxiosResponse<PaginatedResponse<
      StandingOrder
    >> = await axios.get(
      this.env.basePath +
        `/casa-sto/standing-order-consent/${this.env.tenantId}/${accountNoId}/all` +
        (pagination ? `?${serialize(pagination)}` : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllStandingOrdersByAccountIdAndStatus(
    accountNoId: number,
    status: "APPROVED" | ""
  ) {
    let results: AxiosResponse<PaginatedResponse<
      StandingOrder
    >> = await axios.get(
      this.env.basePath +
        `/casa-sto/standing-order-consent/${this.env.tenantId}/${accountNoId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveStandingOrder(
    accountNoId: number,
    data: StandingOrderSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-sto/standing-order-consent/${this.env.tenantId}/${accountNoId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async cancelStandingOrder(
    consentId: number,
    data: {
      cancelledRemark: string;
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-sto/standing-order-consent/${this.env.tenantId}/${consentId}/cancelled`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approveStandingOrder(
    consentId: number,
    data: {
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-sto/standing-order-consent/${this.env.tenantId}/${consentId}/approved`,
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
