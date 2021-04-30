import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { serialize } from "../utils/helpers";
import {
  FileUploadResponse,
  Signature,
  SignatureAccountDetails,
  SignatureDetail,
  SignatureSaveDetail,
  SignatureSaveRequest,
} from "./interfaces";

export class ComnDocumentUploadService {
  constructor(private env: EnvConfig) {}

  public async saveSignature(data: SignatureSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/comn-document-upload/signature/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  //! added on 18 sep 2020 --------
  public async saveSignatureAfterUpload(data: SignatureSaveDetail, id: number) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/comn-document-upload/signature-detail/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
          // "access-control-allow-origin": "*",
        },
      }
    );
    return results.data;
  }

  //! added on 12 jan 2020
  public async saveSignatureAfterUploadNonExisting(data: {
    customerCode: string;
    customerId: string;
    customerType: string;
    remarks: string;
    signatureDetails: [
      {
        origin: string;
        personCode: string;
        personId: string;
        remarks: string;
        signatureId: string;
        signatureType: string;
        signatureUrl: string;
      }
    ];
  }) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/comn-document-upload/signature/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
          // "access-control-allow-origin": "*",
        },
      }
    );
    return results.data;
  }

  public async updateSignature(
    id: string,
    data: {
      status: string;
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/comn-document-upload/signature/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSignatureByCustomerId(customerId: string) {
    let results: AxiosResponse<Signature> = await axios.get(
      //!
      this.env.basePath +
        `/comn-document-upload/signature/${this.env.tenantId}/customer/${customerId}?status=ACTIVE`,
      {
        headers: {
          Authorization: this.env.token,
          // "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return results.data;
  }
  //! added on 18 sep 2020
  public async getAccountsBySignatureId(signatureId: string) {
    let results: AxiosResponse<SignatureAccountDetails[]> = await axios.get(
      this.env.basePath +
        `/comn-document-upload/mapping/${this.env.tenantId}/signature/${signatureId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSignatureByPersonId(customerId: string) {
    let results: AxiosResponse<SignatureDetail[]> = await axios.get(
      this.env.basePath +
        `/comn-document-upload/signature-detail/${this.env.tenantId}/person/${customerId}/ACTIVE`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  //! added on 28 sep 2020

  public async getSignatureByStatus() {
    let results: AxiosResponse<SignatureDetail[]> = await axios.get(
      this.env.basePath +
        `/comn-document-upload/signature-detail/${this.env.tenantId}/status/CREATED`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 28 sep 2020

  public async getAllSignatureByCustomerIdAndStatus(customerId: number) {
    let results: AxiosResponse<SignatureDetail[]> = await axios.get(
      this.env.basePath +
        `/comn-document-upload/signature-detail/${this.env.tenantId}/person/${customerId}/CREATED`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 28 sep 2020

  public async approveSignature(
    id: string,
    data: {
      note: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/comn-document-upload/signature-detail/${this.env.tenantId}/approve/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 28 sep 2020

  public async rejectSignature(
    id: string,
    data: {
      note: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/comn-document-upload/signature-detail/${this.env.tenantId}/reject/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSignatureById(id: string) {
    let results: AxiosResponse<Signature> = await axios.get(
      this.env.basePath +
        `/comn-document-upload/signature/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async fileUpload(
    file: File,
    data: { origin: string; metadata?: string }
  ) {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("document", file);
      let results: AxiosResponse<FileUploadResponse> = await axios.post(
        this.env.basePath +
          `/comn-document-upload/file/${this.env.tenantId}/upload?${serialize(
            data
          )}`,
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: this.env.token,
          },
        }
      );
      return results.data;
    } catch (e) {
      return false;
    }
  }

  public async getSignatureDetailById(signatureDetailId: number) {
    let results: AxiosResponse<SignatureDetail> = await axios.get(
      this.env.basePath +
        `/comn-document-upload/signature-detail/${this.env.tenantId}/${signatureDetailId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async fileDownloadById(id: number, origin: string) {
    let results: AxiosResponse<string> = await axios.get(
      this.env.basePath +
        `/comn-document-upload/file/${this.env.tenantId}/download/${id}?origin=${origin}`,
      {
        headers: {
          Authorization: this.env.token,
        },
        responseType: "arraybuffer",
      }
    );

    return results.data;
  }

  public async DocumentDownloadById(id: number, origin: string) {
    let results: AxiosResponse<string> = await axios.get(
      this.env.basePath +
        `/comn-document-upload/file/${this.env.tenantId}/download/${id}?origin=${origin}`,
      {
        headers: {
          Authorization: this.env.token,
        },
        responseType: "blob",
      }
    );
    return results.data;
  }

  public async downloadById(id: number, origin: string) {
    try {
      let results: AxiosResponse<string> = await axios.get(
        this.env.basePath +
          `/comn-document-upload/file/${this.env.tenantId}/download/${id}?origin=${origin}`,
        {
          headers: {
            Authorization: this.env.token,
          },
          responseType: "blob",
        }
      );
      return results.data;
    } catch (e) {
      return false;
    }
  }
}
