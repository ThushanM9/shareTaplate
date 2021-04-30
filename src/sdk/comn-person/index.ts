import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { serialize } from "../utils/helpers";
import { ContactType, IndividualPersonType } from "./interfaces";

export class ComnPersonService {
  constructor(private env: EnvConfig) {}

  public async getIndividualCustomerSubTypes() {
    let results: AxiosResponse<IndividualPersonType[]> = await axios.get(
      this.env.basePath +
        `/comn-person/inidividual-peron-types/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getContactTypes() {
    let results: AxiosResponse<ContactType[]> = await axios.get(
      this.env.basePath + `/comn-person/contact-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCommonListByRefCode(refCode: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/comn-person/common-list/${this.env.tenantId}/type/${refCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPersonById(personid: string) {
    let results: AxiosResponse = await axios.get(
      this.env.basePath +
        `/comn-person/person/${this.env.tenantId}/${personid}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // http://132.145.228.83/comn-person/person/AnRkr/search?perIdentificationNo=857614152V

  public async getPersonByIdentificationNo(data: any) {
    let results: AxiosResponse = await axios.get(
      this.env.basePath +
        `/comn-person/person/${this.env.tenantId}/search?${serialize(data)}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
