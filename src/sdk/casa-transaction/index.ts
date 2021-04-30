import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { serialize } from "../utils/helpers";
import {
  AccountBalance,
  AccountBalanceDetail,
  BalanceInquiry,
  BankTransactionCode,
  BankTransactionCodeSaveRequest,
  BankTransactionCodeUpdateRequest,
  BankTransactionSubCode,
  BankTransactionSubCodeSaveRequest,
  BankTransactionSubCodeUpdateRequest,
  Passbook,
  PassbookResource,
  PDChequeList,
  ProprietaryBankTransactionCode,
  ProprietaryBankTransactionCodeSaveRequest,
  ProprietaryBankTransactionCodeUpdateRequest,
  TransactionDetails,
  TransactionEvent,
  TransactionEventAcctStatus,
  TransactionEventAcctStatusSaveRequest,
  TransactionEventAcctStatusUpdateRequest,
  TransactionEventSubCode,
  TransactionEventSubCodeSaveRequest,
  TransactionEventSubCodeUpdateRequest,
  TransactionInquiry,
  TransactionInquiryByCustomer,
  Transactions,
  WithdrawableBalance
} from "./interfaces";

export class CasaTransactionService {
  constructor(private env: EnvConfig) {}

  /********************
   * TRANSACTION CODE *
   ********************/

  public async getAllBankTransactionCodes() {
    let results: AxiosResponse<BankTransactionCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/banktransactioncode/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async getAllTransactionSubCodes() {
    let results: AxiosResponse<BankTransactionCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/banktransactionsubcode/${this.env.tenantId}/subcode/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  // new method
  public async getAllBankTransactionCodesByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<BankTransactionCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/banktransactioncode/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBankTransactionCode(data: BankTransactionCodeSaveRequest) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-transaction/banktransactioncode/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBankTransactionCode(
    transCodeId: string,
    data: BankTransactionCodeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-transaction/banktransactioncode/${this.env.tenantId}/${transCodeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionCodeDetailsByCode(bankTransactionCode: string) {
    let results: AxiosResponse<BankTransactionCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/banktransactioncode/${this.env.tenantId}/code/${bankTransactionCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionCodeDetailsByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<BankTransactionCode[]> = await axios.get(
      this.env.basePath +
        `/casa-
        transaction/banktransactioncode/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionCodeDetailsById(transCodeId: string) {
    let results: AxiosResponse<BankTransactionCode> = await axios.get(
      this.env.basePath +
        `/casa-transaction/banktransactioncode/${this.env.tenantId}/${transCodeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************************
   * TRANSACTION SUB CODE *
   ************************/

  public async getAllBankTransactionSubCodes(transCodeId: string) {
    let results: AxiosResponse<BankTransactionSubCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/banktransactionsubcode/${this.env.tenantId}/${transCodeId}/subcode/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllBankTransactionSubCodeByStatus(
    transCodeId: string,
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<BankTransactionSubCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/banktransactionsubcode/${this.env.tenantId}/${transCodeId}/subcode/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBankTransactionSubCodeBySubCodeId(subCodeId: number) {
    let results: AxiosResponse<BankTransactionSubCode> = await axios.get(
      this.env.basePath +
        `/casa-transaction/banktransactionsubcode/${this.env.tenantId}/subcode/${subCodeId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveBankTransactionSubCode(
    transCodeId: string,
    data: BankTransactionSubCodeSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-transaction/banktransactionsubcode/${this.env.tenantId}/${transCodeId}/subcode`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateBankTransactionSubCode(
    transSubCodeId: string,
    transCodeId: string,
    data: BankTransactionSubCodeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-transaction/banktransactionsubcode/${this.env.tenantId}/${transCodeId}/subcode/${transSubCodeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionSubCodeDetailsBySubCode(
    transCodeId: string,
    transSubCode: string
  ) {
    let results: AxiosResponse<BankTransactionSubCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/banktransactionsubcode/${this.env.tenantId}/${transCodeId}/subcode/${transSubCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*********************
   * TRANSACTION EVENT *
   *********************/

  public async getAllEvents(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<
      TransactionEvent
    >> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/all` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async getEventById(id: string) {
    let results: AxiosResponse<any[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllEventsByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<TransactionEvent[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllTransactionEventSubCodes(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<
      TransactionEventSubCode
    >> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/subCode/all` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllTransactionEventSubCodesByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<TransactionEventSubCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/subCode/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionEventSubCodeById(id: number) {
    let results: AxiosResponse<TransactionEventSubCode> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/subCode/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionEventSubCode() {
    let results: AxiosResponse<TransactionEventSubCode> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/event-code/subCode/CADE`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  public async getTransactionEventSubCodeM(code: string) {
    let results: AxiosResponse<TransactionEventSubCode> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/event-code/subCode/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTransactionEventSubCode(
    data: TransactionEventSubCodeSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/subCode`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTransactionEventSubCodeById(
    id: string,
    data: TransactionEventSubCodeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/subCode/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllTransactionEventAccountStatus(
    pagination?: PaginatedRequest
  ) {
    let results: AxiosResponse<PaginatedResponse<
      TransactionEventAcctStatus
    >> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/accStatus/all/` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllTransactionEventAccountStatusByEventCode(
    eventCode: string
  ) {
    let results: AxiosResponse<TransactionEventAcctStatus[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/accStatus/eventCode/${eventCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllTransactionEventAccountStatusByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<TransactionEventAcctStatus[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/accStatus/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveTransactionEventAccountStatus(
    data: TransactionEventAcctStatusSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/accStatus`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateTransactionEventAccountStatusById(
    id: string,
    data: TransactionEventAcctStatusUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/accStatus/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionEventAccountStatusById(id: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-event/${this.env.tenantId}/accStatus/${id}`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************************************
   * PROPRIETARY BANK TRANSACTION CODE *
   *************************************/

  public async getAllProprietaryBankTransactionCodes() {
    let results: AxiosResponse<ProprietaryBankTransactionCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/proprietarybanktransactioncode/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveProprietaryBankTransactionCode(
    data: ProprietaryBankTransactionCodeSaveRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-transaction/proprietarybanktransactioncode/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateProprietaryBankTransactionCodebyId(
    propBankTransCodeId: string,
    data: ProprietaryBankTransactionCodeUpdateRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-transaction/proprietarybanktransactioncode/${this.env.tenantId}/${propBankTransCodeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProprietaryBankTransactionCodeById(
    propBankTransCode: string
  ) {
    let results: AxiosResponse<ProprietaryBankTransactionCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/proprietarybanktransactioncode/${this.env.tenantId}/${propBankTransCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProprietaryBankTransactionCodeByStatus(
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<ProprietaryBankTransactionCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/proprietarybanktransactioncode/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getProprietaryBankTransactionCodeByCode(code: string) {
    let results: AxiosResponse<ProprietaryBankTransactionCode[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/proprietarybanktransactioncode/${this.env.tenantId}/code/${code}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionsByAccountId(
    id: string,
    start: number,
    length: number
  ) {
    let results: AxiosResponse<Transactions> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction/${this.env.tenantId}/accounts/${id}/transactions/${start}/${length}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPrintedStatements(accNo: string) {
    let results: AxiosResponse<Transactions> = await axios.get(
      this.env.basePath +
        `/casa-transaction/statement/${this.env.tenantId}/printed-statements/${accNo}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getStatmentById(id: string) {
    let results: AxiosResponse<Transactions> = await axios.get(
      this.env.basePath +
        `/casa-transaction/statement/${this.env.tenantId}/statement/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /************
   * PASSBOOK *
   ************/

  public async savePassbook(data: PassbookResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-transaction/passbook/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getIssuedPassbooksByAccountId(id: number) {
    let results: AxiosResponse<Passbook[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/passbook/${this.env.tenantId}/accountid/${id}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPassbooksPrintedTransactionsByAccountId(id: number) {
    let results: AxiosResponse<Passbook[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/passbook/${this.env.tenantId}/print/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPassbookById(id: number) {
    let results: AxiosResponse<Passbook> = await axios.get(
      this.env.basePath +
        `/casa-transaction/passbook/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async cancelPassbook(
    passbookId: string,
    data: {
      cancelledRemark: string;
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-transaction/passbook/${this.env.tenantId}/cancel/${passbookId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async lostPassbook(
    passbookId: string,
    data: {
      cancelledRemark: string;
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-transaction/passbook/${this.env.tenantId}/lost/${passbookId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async printPassbook(
    passbookId: string,
    data: {
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-transaction/passbook/${this.env.tenantId}/print/${passbookId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async reprintPassbook(
    passbookId: string,
    fromTransactionId: number,
    toTransactionId: number,
    data: {
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-transaction/passbook/${this.env.tenantId}/reprint/${passbookId}/${fromTransactionId}/${toTransactionId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************
   * STATEMENT *
   *************/

  public async printStatement(
    accountNo: string,
    fromDate: string,
    toDate: string
  ) {
    // TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-transaction/statement/${this.env.tenantId}/account/${accountNo}/from-date/${fromDate}/to-
        date/${toDate}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async SingleAccountPrintStatement(data: any) {
    // TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-transaction/statement/${
          this.env.tenantId
        }/transaction/?${serialize(data)}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async bulkStatementPrint() {
    // TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-transaction/statement/${this.env.tenantId}/generate`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*******************
   * BALANCE INQUIRY *
   *******************/

  public async getAccountBalanceDetails(pagination: BalanceInquiry) {
    let results: AxiosResponse<AccountBalanceDetail> = await axios.get(
      this.env.basePath +
        `/casa-transaction/balance-inquiry/${this.env.tenantId}/account` +
        "?" +
        serialize(pagination),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getWithdrwableByAccountId(pagination: BalanceInquiry) {
    let results: AxiosResponse<WithdrawableBalance> = await axios.get(
      this.env.basePath +
        `/casa-transaction/balance-inquiry/${this.env.tenantId}/account-withdrawable-balance` +
        "?" +
        serialize(pagination),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getBalanceWithdrwableByAccountId(accId: string, userId: string) {
    let results: AxiosResponse<WithdrawableBalance> = await axios.get(
      this.env.basePath +
        `/casa-transaction/balance-inquiry/${this.env.tenantId}/account-withdrawable-balance?accId=${accId}&userId=${userId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAccountBalanceByAccountNoId(acountNoId: number) {
    let results: AxiosResponse<AccountBalance> = await axios.get(
      this.env.basePath +
        `/casa-transaction/balance-inquiry/${this.env.tenantId}/account-balance/${acountNoId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***********************
   * TRANSACTION INQUIRY *
   ***********************/

  public async getAccountTransactionDetails(pagination: TransactionInquiry) {
    let results: AxiosResponse<PaginatedResponse<
      TransactionDetails
    >> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-inquiry/${this.env.tenantId}/account` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionsByCustomerId(
    pagination: TransactionInquiryByCustomer
  ) {
    let results: AxiosResponse<PaginatedResponse<
      TransactionDetails
    >> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-inquiry/${this.env.tenantId}/customer` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionsByTransactionId(pagination: TransactionInquiry) {
    let results: AxiosResponse<PaginatedResponse<
      TransactionDetails
    >> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-inquiry/${this.env.tenantId}/transaction` +
        (pagination ? "?" + serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getTransactionsByAccountNo(data: any) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-inquiry/${this.env.tenantId}/account/` +
        "?" +
        serialize(data),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPDChequeListByAccountId(accountId: number) {
    let results: AxiosResponse<PDChequeList[]> = await axios.get(
      this.env.basePath +
        `/casa-transaction/transaction-inquiry/${this.env.tenantId}/pd-cheque-list/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
