import axios, { AxiosResponse } from "axios";
import { ProductCommonList } from "../casa-product-bca/interfaces";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";
import {
  AddressResponse,
  AllCustomerResponseResource,
  CusRelationship,
  Customer,
  CustomerIdentification,
  CustomerSearchRequest,
  KeyPerson,
  PerContact,
  Turnover
} from "./interfaces";

export class ComnCustomerService {
  constructor(private env: EnvConfig) { }

  public getBasicInformationById = async (customerId: string) => {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
      `/comn-customer/customer/${this.env.tenantId}/basic/${customerId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  };

  public getTaxProfileInformation = async (customerId: string) => {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
      `/comn-customer/tax-profile/${this.env.tenantId}/${customerId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  };

  public async getAll(data: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<Customer>> = await axios.get(
      this.env.basePath +
      `/comn-customer/customer/${this.env.tenantId}/all?${serialize(data)}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async findByRefCode(cusReferenceCode: string) {
    let results: AxiosResponse<Customer> = await axios.get(
      this.env.basePath +
      `/comn-customer/customer/${this.env.tenantId}/refCode/${cusReferenceCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async findById(custId: number) {
    let results: AxiosResponse<Customer> = await axios.get(
      this.env.basePath +
      `/comn-customer/customer/${this.env.tenantId}/${custId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getGuardianById(custId: number, cusRelId: number) {
    let results: AxiosResponse<CusRelationship> = await axios.get(
      this.env.basePath +
      `/comn-customer/relationship/${this.env.tenantId}/${custId}/${cusRelId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getGuardians(custId: number) {
    let results: AxiosResponse<CusRelationship[]> = await axios.get(
      this.env.basePath +
      `/comn-customer/relationship/${this.env.tenantId}/${custId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPersonType(referenceCode: string) {
    let results: AxiosResponse<ProductCommonList> = await axios.get(
      this.env.basePath +
      `/casa-product-bca/common-list/${this.env.tenantId}/refcode/${referenceCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getNomineesByCustomerId(customerId: number) {
    let results: AxiosResponse<CusRelationship[]> = await axios.get(
      this.env.basePath +
      `/comn-customer/relationship/${this.env.tenantId}/${customerId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getNomineeByAccountId(accountId: number) {
    let results: AxiosResponse<CusRelationship[]> = await axios.get(
      this.env.basePath +
      `/casa-account/nominee/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getNominee(customerId: number, nomineeId: number) {
    let results: AxiosResponse<CusRelationship> = await axios.get(
      this.env.basePath +
      `/comn-customer/relationship/${this.env.tenantId}/${customerId}/${nomineeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAddress(customerId: number) {
    let results: AxiosResponse<AddressResponse[]> = await axios.get(
      this.env.basePath +
      `/comn-customer/address/${this.env.tenantId}/${customerId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async search(data: CustomerSearchRequest) {
    let results: AxiosResponse<PaginatedResponse<
      AllCustomerResponseResource
    >> = await axios.get(
      this.env.basePath +
      `/comn-customer/customer/${this.env.tenantId}/search?${serialize(
        data
      )}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async searchByIdentification(id: string) {
    let results: AxiosResponse<PaginatedResponse<
      AllCustomerResponseResource
    >> = await axios.get(
      this.env.basePath +
      `/comn-person/identification/${this.env.tenantId}/all/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTurnoverByRefCode(refCode: string) {
    let results: AxiosResponse<Turnover[]> = await axios.get(
      this.env.basePath +
      `/comn-customer/turnover/${this.env.tenantId}/type/${refCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getContactByContactPersonId(
    customerId: number,
    customerLinkPersonId: number,
    contactPersonId: number
  ) {
    let results: AxiosResponse<PerContact> = await axios.get(
      this.env.basePath +
      `/comn-customer/link-person/${this.env.tenantId}/contact/${customerId}/${customerLinkPersonId}/${contactPersonId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getLinkPersonIdentificationByCustomerIdAndLinkPersonId(
    customerId: number,
    customerLinkPersonId: number
  ) {
    // TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
      `/comn-customer/link-person/${this.env.tenantId}/identification/${customerId}/${customerLinkPersonId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCustomerIdentifcations(customerId: number) {
    let results: AxiosResponse<CustomerIdentification[]> = await axios.get(
      this.env.basePath +
      `/comn-customer/identification/${this.env.tenantId}/${customerId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCustomerPrimaryIdentifcation(customerId: number) {
    let results: AxiosResponse<CustomerIdentification> = await axios.get(
      this.env.basePath +
      `/comn-customer/identification/${this.env.tenantId}/primary/${customerId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getKeyPersonByCustomerId(customerId: number) {
    // cooperate
    // http://132.145.228.83/comn-customer/key-person/AnRkr/25893/all
    let results: AxiosResponse<KeyPerson[]> = await axios.get(
      this.env.basePath +
      `/comn-customer/key-person/${this.env.tenantId}/${customerId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**
   * link person id = key person id
   */
  public async getContactsByLinkPersonId(customerId: number, culPID: number) {
    // pass kry person id to get - for coperate
    // http://132.145.228.83/comn-customer/link-person/AnRkr/contact/25893/25897/all
    let results: AxiosResponse<PerContact[]> = await axios.get(
      this.env.basePath +
      `/comn-customer/link-person/${this.env.tenantId}/contact/${customerId}/${culPID}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getContactByCustomerId(customerId: number) {
    // for individual
    // http://132.145.228.83/comn-customer/contact/AnRkr/25893/all
    let results: AxiosResponse<PerContact[]> = await axios.get(
      this.env.basePath +
      `/comn-customer/contact/${this.env.tenantId}/${customerId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getContactByCustomerIdAndContactId(
    customerId: number,
    contactId: number
  ) {
    let results: AxiosResponse<PerContact> = await axios.get(
      this.env.basePath +
      `/comn-customer/contact/${this.env.tenantId}/${customerId}/${contactId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
