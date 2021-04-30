import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { AtLeastOne, serialize } from "../utils/helpers";
import {
  AddChequeBookFeeChargeRequestResource,
  AddChequeBookRequest,
  AddChequeBookStockTypesRequestResource,
  AddChequeBookTypesRequestResource,
  AddClearingHouseDetailsRequestResource,
  AddClearingType,
  AddIssuedChequeBook,
  CheckbookChargeResponse,
  ChequebookCharge,
  ChequebookChargeDetailedResponse,
  ChequebookRequest,
  ChequeBookStockType,
  ChequebookType,
  ChequeReturnCatogeyResource,
  ChequeReturnCatogeyUpdateResource,
  ChequeReturnReason,
  ChequeReturnReasonCategory,
  ChequeReturnReasonResource,
  ChequeReturnReasonUpdateResource,
  ChequeWithdrawActionReason,
  ChequeWithdrawalActionReasonResource,
  ChequeWithdrawalActionReasonUpdateResource,
  ClearingHouseDetails,
  ClearingType,
  ClearingTypeUpdateRequest,
  IssuedChequeBook,
  UpdateChequeBookFeeChargeRequestResource,
  UpdateChequeBookStockTypesRequestResource,
  UpdateChequeBookTypesRequestResource,
  UpdateClearingHouseDetailsRequestResource
} from "./interfaces";

export class CasaChequebookManagementService {
  constructor(private env: EnvConfig) {}

  /*************************
   * CHEQUEBOOK STOCK TYPE *
   *************************/

  public async getChequebookStockTypesByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<ChequeBookStockType[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-stock-types/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequebookStockTypesByCode(code: string) {
    let results: AxiosResponse<ChequeBookStockType> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-stock-types/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequebookStockTypeById(id: string) {
    let results: AxiosResponse<ChequeBookStockType> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-stock-types/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllChequebookStockType() {
    let results: AxiosResponse<ChequeBookStockType[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-stock-types/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveChequebookStockType(
    data: AddChequeBookStockTypesRequestResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-stock-types/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateChequebookStockType(
    id: string,
    data: AtLeastOne<UpdateChequeBookStockTypesRequestResource>
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-stock-types/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*******************
   * CHEQUEBOOK TYPE *
   *******************/

  public async getChequeBookTypesByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<ChequebookType[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-types/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeBookTypesByCode(code: string) {
    let results: AxiosResponse<ChequebookType> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-types/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllChequeBookTypes() {
    let results: AxiosResponse<ChequebookType[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-types/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeBookTypeById(id: string) {
    let results: AxiosResponse<ChequebookType> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-types/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveChequeBookType(data: AddChequeBookTypesRequestResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-types/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateChequeBookTypeById(
    id: string,
    data: UpdateChequeBookTypesRequestResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-types/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*****************
   * CLEARING TYPE *
   *****************/

  public async getAllClearingTypes() {
    debugger
    let results: AxiosResponse<ClearingType[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-type/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getClearingTypeById(id: string) {
    let results: AxiosResponse<ClearingType> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-type/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllClearingTypesByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<ClearingType[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-type/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveClearingType(data: AddClearingType) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-type/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateClearingTypeById(
    id: string,
    data: AtLeastOne<ClearingTypeUpdateRequest>
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-type/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getClearingTypeByCode(code: string) {
    let results: AxiosResponse<ClearingType[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-type/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getClearingTypeByName(name: string) {
    let results: AxiosResponse<ClearingType[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-type/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /******************
   * CLEARING HOUSE *
   ******************/

  public async getAllClearingHouseDetails() {
    let results: AxiosResponse<PaginatedResponse<
      ClearingHouseDetails
    >> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-house-details/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllClearingHouseDetailsById(id: string) {
    let results: AxiosResponse<ClearingHouseDetails> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-house-details/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getClearingHouseDetailsByCode(code: string) {
    let results: AxiosResponse<ClearingHouseDetails> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-house-details/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getClearingHouseDetailsByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<ClearingHouseDetails[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-house-details/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveClearingHouseDetails(
    data: AddClearingHouseDetailsRequestResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-house-details/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateClearingHouseDetailsById(
    id: string,
    data: AtLeastOne<UpdateClearingHouseDetailsRequestResource>
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/clearing-house-details/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************************
   * CHEQUE RETURN REASON *
   ************************/

  public async getAllChequeReturnReasons() {
    let results: AxiosResponse<ChequeReturnReason[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-reason/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveChequeReturnReason(data: ChequeReturnReasonResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-reason/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateChequeReturnReasonById(
    id: string,
    data: AtLeastOne<ChequeReturnReasonUpdateResource>
  ) {
    let results: AxiosResponse<{
      message: string;
      value: string;
    }> = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-reason/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeReturnReasonById(id: string) {
    let results: AxiosResponse<ChequeReturnReason> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-reason/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeReturnReasonByCode(code: string) {
    let results: AxiosResponse<ChequeReturnReason[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-reason/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeReturnReasonByName(name: string) {
    let results: AxiosResponse<ChequeReturnReason[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-reason/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeReturnReasonByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<ChequeReturnReason[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-reason/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*********************************
   * CHEQUE RETURN REASON CATEGORY *
   *********************************/

  public async getAllChequeReturnReasonCats() {
    let results: AxiosResponse<ChequeReturnReasonCategory[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-cat/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveChequeReturnReasonCat(data: ChequeReturnCatogeyResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-cat/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateChequeReturnReasonCatById(
    id: string,
    data: AtLeastOne<ChequeReturnCatogeyUpdateResource>
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-cat/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeReturnReasonCatByCode(code: string) {
    let results: AxiosResponse<ChequeReturnReasonCategory[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-cat/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeReturnReasonCatByName(name: string) {
    let results: AxiosResponse<ChequeReturnReasonCategory[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-cat/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeReturnReasonCatByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<ChequeReturnReasonCategory[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-return-cat/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /**********************************
   * CHEQUE WITHDRAWA ACTION REASON *
   **********************************/

  public async getAllChequeWithdrawActionReasons() {
    let results: AxiosResponse<ChequeWithdrawActionReason[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-withdrawal-action-reason/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeWithdrawActionReasonsById(id: number) {
    let results: AxiosResponse<ChequeWithdrawActionReason> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-withdrawal-action-reason/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeWithdrawActionReasonsByName(name: string) {
    let results: AxiosResponse<ChequeWithdrawActionReason[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-withdrawal-action-reason/${this.env.tenantId}/name/${name}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeWithdrawActionReasonsByCode(code: string) {
    let results: AxiosResponse<ChequeWithdrawActionReason[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-withdrawal-action-reason/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeWithdrawActionReasonsByStatus(status: "ACTIVE" | "") {
    let results: AxiosResponse<ChequeWithdrawActionReason[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-withdrawal-action-reason/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveChequeWithdrawActionReasons(
    data: ChequeWithdrawalActionReasonResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-withdrawal-action-reason/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateChequeWithdrawActionReasonsById(
    id: string,
    data: AtLeastOne<ChequeWithdrawalActionReasonUpdateResource>
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-withdrawal-action-reason/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***********************
   * CHEQUE BOOK CHARGES *
   ***********************/

  public async getAllChequeBookCharges(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<
      ChequebookCharge
    >> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge/${this.env.tenantId}/all` +
        (pagination ? `?${serialize(pagination)}` : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeBookChargeById(id: string) {
    let results: AxiosResponse<ChequebookChargeDetailedResponse> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeBookChargeByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<ChequebookChargeDetailedResponse[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeBookChargeBySubProductId(subProductId: string) {
    let results: AxiosResponse<ChequebookChargeDetailedResponse> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge/${this.env.tenantId}/subProductId/${subProductId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveChequebookFeeCharge(
    data: AddChequeBookFeeChargeRequestResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateChequebookFeeChargeById(
    id: string,
    data: AtLeastOne<UpdateChequeBookFeeChargeRequestResource>
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***********************
   * CHEQUE BOOK REQUEST *
   ***********************/

  public async saveChequebookRequest(data: AddChequeBookRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-request/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllChequebookRequests(pagination?: PaginatedRequest) {
    let results: AxiosResponse<ChequebookRequest[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-request/${this.env.tenantId}/all` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequebookRequestByStatus(
    status: "ACTIVE" | "",
    start: number,
    length: number
  ) {
    let results: AxiosResponse<ChequebookRequest[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-request/${this.env.tenantId}/status/${status}/${start}/${length}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequebookRequestById(id: number) {
    let results: AxiosResponse<ChequebookRequest> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-request/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async cancelChequebookRequest(
    id: string,
    data: {
      canceledRemark?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-request/${this.env.tenantId}/${id}/cancel`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async confirmChequebookRequest(
    id: string,
    data: {
      issuedRemark?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-request/${this.env.tenantId}/${id}/complete`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*********************
   * CHEQUE BOOK ISSUE *
   *********************/

  public async saveChequebookIssue(data: AddIssuedChequeBook) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-issue/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateChequebookIssue() {
    // Note : Ignore
    return {};
  }

  public async getChequebookCharges(
    subProductId: number,
    applicationMethod: string,
    applicationLevel: string,
    status: "ACTIVE" | "",
    reasonCode: string
  ) {
    let results: AxiosResponse<CheckbookChargeResponse> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge/${this.env.tenantId}/subProductId/${subProductId}/applicationMethod/${applicationMethod}/applicationLevel/${applicationLevel}/status/${status}/reasonCode/${reasonCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequebookIssueById(id: string) {
    let results: AxiosResponse<IssuedChequeBook> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-issue/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async searchChequebookIssue(data: {
    accountId: string;
    chequeBookId: string;
    status: string;
  }) {
    let results: AxiosResponse<IssuedChequeBook[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-issue/${this.env.tenantId}/searchby` +
        (data ? `?${serialize(data)}` : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeBookByAccountId(accountId: string) {
    const searchQuery = {
      accountId,
      chequeBookId: "",
      status: "",
    };
    let results: AxiosResponse<IssuedChequeBook[]> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-issue/${
          this.env.tenantId
        }/searchby?${serialize(searchQuery)}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approveChequebookIssue(
    id: string,
    data: {
      approvedRemark: string;
      approvedUser: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-issue/${this.env.tenantId}/${id}/approve`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async cancelChequebookIssue(
    id: string,
    data: {
      canceledRemark: string;
      canceledUser: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-issue/${this.env.tenantId}/${id}/cancel`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /********************
   * CHEQUE BOOK/LEAF *
   ********************/

  public async getChequeLeavesByChequebookId(chequeBookId: string) {
    // TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-leaves/${this.env.tenantId}/chequeBookId/${chequeBookId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequeLeafById(id: string) {
    // TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-leaves/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateChequebookStatusById(
    id: string,
    status: "Lost" | "Stop",
    data: {
      changedRemark: string;
      changedUser?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-issue/${this.env.tenantId}/${id}/${status}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateChequeLeafStatusById(
    id: string,
    status: "cancel" | "complete" | "stop",
    data: {
      changedRemark: string;
      changedUser?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-leaves/${this.env.tenantId}/${id}/${status}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequebookfeechargedetailbyChargeid(id: string) {
    // TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge-details/${this.env.tenantId}/cheque-book-feecharge/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getChequebookfeechargedetailbyId(id: string) {
    // TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge-details/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  ///casa-cheque-book-management/cheque-book-fee-charge/AnRkr

  public async setChequebookfeechargedetailbyChargeid(data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge-details/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  //http://132.145.228.83/casa-cheque-book-management/cheque-book-fee-charge-details/AnRkr/3065
  public async updateChequebookfeechargedetailbyChargeid(
    id: string,
    data: any
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-cheque-book-management/cheque-book-fee-charge-details/${this.env.tenantId}/${id}`,
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

enum ChequeType {
  BOOK = "BOOK",
  ROLE = "ROLE",
  LEAF = "LEAF",
}
