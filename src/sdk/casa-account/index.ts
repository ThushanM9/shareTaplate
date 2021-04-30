import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";
import { PaginatedRequest, PaginatedResponse } from "../utils/common";
import { AtLeastOne, serialize } from "../utils/helpers";
import {
  Account,
  AccountActivationAndDeactivationRequest,
  AccountCloseDetResource,
  AccountCloseResource,
  AccountCloseResponse,
  AccountCloseStatus,
  AccountData,
  AccountDraftResponse,
  AccountHelperResource,
  AccountRemark,
  AccountResource,
  AccountSearchRequest,
  ApplicantDetail,
  ATMDetail,
  CommonList,
  CommonListResource,
  DocumentCheckList,
  DocumentChecklistDetails,
  DocumentCheckListResource,
  DocumentsUpdateResource,
  FullApplicantDetails,
  InterestDetailsResource,
  NotificationDetailsResource,
  OperationInstructionsResources,
  OverdraftDetails,
  Purpose,
  SearchAllAccount,
  SourceOfFund,
  UpdateAccountResourceApproved,
  UpdateAccountResourceCreated,
  UpdateCommonListResource,
  UpdateOperationInstructionsResources
} from "./interfaces";

export class CasaAccountService {
  constructor(private env: EnvConfig) {}

  public async save(data: AccountResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-account/account/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async setSpecialRate(
    accountId: string,
    data: {
      notes?: string;
      specialRate: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/special-rate/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async update(accountId: string, data: UpdateAccountResourceCreated) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/created/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added in 06 oct 2020

  public async updateApplicantDetails(
    accountId: number,
    applicantId: number,
    data: {
      casaApplicantStatus?: string;
      casaCustomerId?: string;
      casaCustomerName?: string;
      casaOwnershipType?: string;
      guardianDetail?: [
        {
          guardianId: string;
          guardianName: string;
          status: string;
        }
      ];
      taxPercerntage?: string;
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/applicant/${this.env.tenantId}/account/${accountId}/${applicantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added in 06 oct 2020
  ///applicant/{tenantId}/guardian/{accountId}/{applicantId}
  public async updateGuardianDetails(
    accountId: number,
    applicantId: number,
    data: {
      guardianDetail: [
        {
          guardianId: string;
          guardianName: string;
          status: string;
        }
      ];
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/applicant/${this.env.tenantId}/guardian/${accountId}/${applicantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveGuardianDetails(
    accountId: number,
    applicantId: number,
    data: {
      guardianDetail: [
        {
          guardianId: string;
          guardianName: string;
          status: string;
        }
      ];
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/applicant/${this.env.tenantId}/guardian/${accountId}/${applicantId}/new`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added in 06 oct 2020

  public async saveApplicantDetails(
    accountId: number,
    data: {
      casaApplicantDetails: [
        {
          casaApplicantStatus?: string;
          casaCustomerCode: string;
          casaCustomerId: string;
          casaCustomerName: string;
          casaFullLegalName: string;
          casaOwnershipType: string;
          guardianDetail?: [
            {
              guardianId: string;
              guardianName: string;
              status: string;
            }
          ];
          signatureId?: string;
          taxPercerntage: string;
        }
      ];
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/applicant/${this.env.tenantId}/account/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added in 14 oct 2020

  public async saveNomineeDetails(
    accountId: number,
    data: {
      casaNomineeDetails: [
        {
          casaCustomerId: string;
          casaNomineeId: string;
          casaNomineeName: string;
          casaNomineeStatus: string;
          casaPropotionRatio: string;
        }
      ];
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/nominee/${this.env.tenantId}/account/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added in 14 oct 2020

  public async updateNomineeDetails(
    accountId: string,
    data: {
      casaNomineeStatus: string;
      version: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/nominee/${this.env.tenantId}/account/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  //! added in 21 sep 2020

  public async updateApplicantSignatureDetail(
    accountId: string,
    applicantId: string,
    data: { signatureId: string }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/applicant/${this.env.tenantId}/signature/${accountId}/${applicantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020

  public async saveAccountPurposeDetail(accountId: string, data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/purpose/${this.env.tenantId}/account/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020

  public async updateAccountPurposeDetail(
    accountId: string,
    purposeId: string,
    data: {
      casaStatus: string;
      version: string;
      primaryIndicator: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/purpose/${this.env.tenantId}/account/${accountId}/${purposeId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020
  ///sof/{tenantId}/account/{accountId}/{id} (sof details->id)
  public async updateSourceOfFundsDetail(
    accountId: string,
    sofId: string,
    data: {
      casaStatus: string;
      version: string;
      primaryIndicator?: "No";
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/sof/${this.env.tenantId}/account/${accountId}/${sofId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020

  public async saveSourceOfFundsDetail(
    accountId: string,
    data: [
      {
        casaSourceOfFundDescription: string; // description for Other description is other
        casaSourceOfFundId: string; //id
        casaStatus: string; //status
        otherRemarks?: string; //
        primaryIndicator: string;
      }
    ]
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/sof/${this.env.tenantId}/account/${accountId}`,
      { casaSourceOfFundsDetails: data },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020

  public async getStatementByAccountId(accountId: string) {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/statement-status/${this.env.tenantId}/account-id/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveStatementDetail(
    accountId: string,
    data: {
      casaStatementStatus: [
        {
          deliveryFrequency: string; //getAllPeriod->id
          deliveryFrequencyDesc: string; // getAllPeriod -> description
          deliveryMethod: string; //getStatementDevliveryMethods->id
          deliveryMethodDescription: string; //getStatementDevliveryMethods->accComnListDesc
          remarks?: string;
          status?: string; // ACTIVE
          type: string; // getStatementTypes->id
          typeDescription: string; //getStatementTypes->accComnListDesc
        }
      ];
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/statement-status/${this.env.tenantId}/account/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020

  public async updateStatementDetail(
    accountId: string,
    statementId: string,
    data: {
      modifiedUser?: string;
      status: string;
      version: number;
      note: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/statement-status/${this.env.tenantId}/account/${accountId}/${statementId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020

  public async getInterestDetail(accountId: string) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.get(
      this.env.basePath +
        `/casa-account/interest-detail/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateInterestDetail(
    accountId: string,
    id: string,
    data: {
      status: string;
      version: string;
      propotionRatio: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/interest-detail/${this.env.tenantId}/account/${accountId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020

  // public async saveInterestDetail(
  //   accountId: string,
  //   data: {
  //     interestDetails: [
  //       {
  //         bankBranchId: string;
  //         bankBranchName: string;
  //         bankId: string;
  //         bankName: string;
  //         beneficiaryId: string; //! add for external party
  //         beneficiaryName: string; //! add for external party
  //         crebitInterestPostAccount: string; //! for internal party credit -> accountNo
  //         crebitInterestPostType: string; //! for internal party credit -> self |other
  //         debitInterestPostAccount: string;
  //         debitInterestPostType: string; ///! self |other
  //         otherPostingMethod: string; //! for internal and external ->(sdk.AccountService.getPaymentMode ) accComnListDesc
  //         otherPostingMethodId: string; //! for internal and external ->(sdk.AccountService.getPaymentMode) id
  //         paymentModeDescription: string; //! for internal party credit and debit
  //         paymentModeId: string; //! for internal party credit and debit
  //         paymentSendMethod: string;
  //         paymentSendMethodId: string;
  //         propotionRatio: string; //! for internal party credit
  //         status: string; //ACTIVE
  //       }
  //     ];
  //   }
  // ) {
  //   let results: AxiosResponse<
  //     { messages: string } | { [prop: string]: string }
  //   > = await axios.post(
  //     this.env.basePath +
  //       `/casa-account/interest-detail/${this.env.tenantId}/account/${accountId}`,
  //     data,
  //     {
  //       headers: {
  //         Authorization: this.env.token,
  //       },
  //     }
  //   );
  //   return results.data;
  // }

  //! added on 07 jan 2021
  public async getUpdatedDetailsByAccountNo(
    accountNo: string,
    detailed: "Yes" | "No"
  ) {
    let results: AxiosResponse<PaginatedResponse<any>> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/search-pending?detailed=${detailed}&accountNo=${accountNo}&size=1`,

      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 07 jan 2021
  public async getAllPendingApproveAccounts(
    detailed: "Yes" | "No",
    pagination?: any
  ) {
    let results: AxiosResponse<PaginatedResponse<any>> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/search-pending?detailed=${detailed}&rejected=false`,
      {
        params: {
          size: pagination.pageSize,
          page: pagination.current,
        },
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 15 jan 2021
  public async getAllRejectedApproveAccounts(
    detailed: "Yes" | "No",
    pagination?: any
  ) {
    let results: AxiosResponse<PaginatedResponse<any>> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/search-pending?detailed=${detailed}&rejected=true`,
      {
        params: {
          size: pagination.pageSize,
          page: pagination.current,
        },
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 15 jan 2021
  public async searchApproveAccountByAccountNo(
    detailed: "Yes" | "No",
    accountNo: string
  ) {
    let results: AxiosResponse<PaginatedResponse<any>> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/search-pending?detailed=${detailed}&accountNo=${accountNo}&size=1`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020

  public async ApproveApplicantDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/applicant/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApproveNomineeDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/nominee/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApprovePurposeDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/purpose/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApproveSourceOfFundsDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/sof/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApproveStatementDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/statement-status/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApproveRecoveryAccountDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/overdraft/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftDetailByAccountId(accountId: string) {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/overdraft/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApproveNotificationDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/notification/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApproveAtmDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/atm/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApproveDocumentDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/document/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApproveCommonDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/account/${this.env.tenantId}/pending-approval/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 13 jan 2020
  public async ApproveInterestDetails(
    accountId: number,
    approveMethod: "APPROVE" | "REJECT",
    data?: {
      note?: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/account/${this.env.tenantId}/interest-detail/${accountId}/${approveMethod}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOverdraftDetails(
    accountId: string,
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
        `/casa-account/overdraft/${this.env.tenantId}/account/${accountId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOverdraftDetails(
    accountId: string,
    data: OverdraftDetails[]
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/overdraft/${this.env.tenantId}/account/${accountId}`,
      { overdraftDetails: data },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020

  public async updatePreferencesDetail(
    accountId: string,
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
        `/casa-account/notification/${this.env.tenantId}/account/${accountId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 12 oct 2020

  public async savePreferencesDetail(
    accountId: string,
    data: NotificationDetailsResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/notification/${this.env.tenantId}/account/${accountId}`,
      { notificationDetails: [data] },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async search(data: AccountSearchRequest) {
    let results: AxiosResponse<PaginatedResponse<
      AccountData
    >> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/search-account/?${serialize(
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

  public async searchAll(data: AtLeastOne<SearchAllAccount>) {
    let results: AxiosResponse<PaginatedResponse<
      AccountData
    >> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${
          this.env.tenantId
        }/search-account/all?${serialize(data)}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approve(accountId: string, data: UpdateAccountResourceApproved) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/approved/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async created(accountId: string, data: UpdateAccountResourceApproved) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/created/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approvePending(
    pendingAccountId: string,
    data: {
      note: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/${pendingAccountId}/approval`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async rejectPending(
    pendingAccountId: string,
    data: {
      note: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/${pendingAccountId}/reject`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPostingTypeById(id: string) {
    let results: AxiosResponse<CommonList> = await axios.get(
      this.env.basePath + `/casa-account/comn-list/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPostingTypes() {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/comn-list/${this.env.tenantId}/reference-code/POSTINGTYPE/status/ACTIVE`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getStatementTypes() {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/comn-list/${this.env.tenantId}/reference-code/STMT_TYPES/status/ACTIVE`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getStatementDevliveryMethods() {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/comn-list/${this.env.tenantId}/reference-code/STMT_DEL_METHD/status/ACTIVE`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPaymentMode() {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/comn-list/${this.env.tenantId}/reference-code/OTHPOSTMETH/status/ACTIVE`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOtherPostingMethod() {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/comn-list/${this.env.tenantId}/reference-code/OTHPOSTMETH/status/ACTIVE`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPaymentTypeMethod() {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/comn-list/${this.env.tenantId}/reference-code/PAYMETH/status/ACTIVE`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPaymentSendMethod() {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/comn-list/${this.env.tenantId}/reference-code/PAY_SEND_METHOD/status/ACTIVE`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async addDisabledNotes(
    accountId: string,
    casaRemarkForAdditionalAccount: string,
    casaOtherRemarks: string,
    casaStatus: string
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/remarks/${this.env.tenantId}/account/${accountId}`,
      {
        casaAccountRemarks: [
          {
            casaRemarkForAdditionalAccount,
            casaOtherRemarks,
            casaStatus,
          },
        ],
      },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getSourceOfFundByStatus(
    accountId: string,
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<SourceOfFund[]> = await axios.get(
      this.env.basePath +
        `/casa-account/sof/${this.env.tenantId}/account/${accountId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPurposeByAcountId(accountId: string) {
    let results: AxiosResponse<Purpose[]> = await axios.get(
      this.env.basePath +
        `/casa-account/purpose/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPurposeByStatus(
    accountId: string,
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<Purpose[]> = await axios.get(
      this.env.basePath +
        `/casa-account/purpose/${this.env.tenantId}/account/${accountId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getDocChecklistByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<DocumentCheckList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/doc-check-list/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  //! added in 22 sep 2002
  public async getAllDocumentCheckListDetailsByRelatedProduct(
    accountSubType: string,
    accountType: string,
    customerSubType: string,
    productCategoryId: number,
    productCode: number
  ) {
    let results: AxiosResponse<DocumentChecklistDetails> = await axios.get(
      this.env.basePath +
        `/casa-account/doc-check-list/${this.env.tenantId}/product?accountSubType=${accountSubType}&accountType=${accountType}&customerSubType=${customerSubType}&productCategoryId=${productCategoryId}&productCode=${productCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllAccountDetails() {
    let results: AxiosResponse<PaginatedResponse<
      AccountData
    >> = await axios.get(
      this.env.basePath + `/casa-account/account/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAccountById(accountId: string) {
    let results: AxiosResponse<Account> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAccountByAccountNo(accountNo: string) {
    // http://132.145.228.83/casa-account/account/AnRkr/account-number/GAN1200000014
    let results: AxiosResponse<Account> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/account-number/${accountNo}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAccountDetailsByStatus(
    status: "ACTIVE" | "INACTIVE" | "BLOCK"
  ) {
    let results: AxiosResponse<PaginatedResponse<
      AccountData
    >> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async validateAccount(accountId: string) {
    let results: AxiosResponse<{
      AccountData: AccountData;
      SourceOfFunds: SourceOfFund[];
      AccountValidityStatus: "VALID" | "INVALID";
    }> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/validate/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllAccountsStatus() {
    let results: AxiosResponse<string[]> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/account-status/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAccountsByStatusCode(statusCode: string) {
    let results: AxiosResponse<string> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/accountstatus/${statusCode}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllPendingAccountDetails() {
    let results: AxiosResponse<PaginatedResponse<
      AccountData
    >> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/pending/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPendingAccountDetailsById(accountId: string) {
    let results: AxiosResponse<AccountData[]> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/pending/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async cancelAccount(accountId: string, data: AccountHelperResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/cancellation/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async activateAccount(
    accountId: string,
    data: AccountActivationAndDeactivationRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/approval/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approveSpecialRate(
    accountId: string,
    data: AccountHelperResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/special-rate/${accountId}/approve`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async rejectSpecialRate(
    accountId: string,
    data: AccountHelperResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/special-rate/${accountId}/reject`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async requestDeactivation(
    accountId: string,
    data: AccountActivationAndDeactivationRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/de-activation/${accountId}/create`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approveDeactivation(
    accountId: string,
    data: AccountActivationAndDeactivationRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/de-activation/${accountId}/approval`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async rejectDeactivation(
    accountId: string,
    data: AccountHelperResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/de-activation/${accountId}/reject`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async requestReactivation(
    accountId: string,
    data: AccountActivationAndDeactivationRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/re-activation/${accountId}/create`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approveReactivation(
    accountId: string,
    data: AccountActivationAndDeactivationRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/re-activation/${accountId}/approval`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async rejectReactivation(
    accountId: string,
    data: AccountHelperResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/re-activation/${accountId}/reject`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async requestBlock(accountId: string, data: AccountHelperResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/block/${accountId}/create`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approveBlock(accountId: string, data: AccountHelperResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/block/${accountId}/approval`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async rejectBlock(accountId: string, data: AccountHelperResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/block/${accountId}/reject`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async requestStopPayment(
    accountId: string,
    data: AccountActivationAndDeactivationRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/stop-payment/${accountId}/create`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approveStopPayment(
    accountId: string,
    data: AccountActivationAndDeactivationRequest
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/stop-payment/${accountId}/approval`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async rejectStopPayment(
    accountId: string,
    data: AccountHelperResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/stop-payment/${accountId}/reject`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async requestStopPaymentReversal(
    accountId: string,
    data: AccountHelperResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/stop-payment-reversal/${accountId}/create`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approveStopPaymentReversal(
    accountId: string,
    data: AccountHelperResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/stop-payment-reversal/${accountId}/approval`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async rejectStopPaymentReversal(
    accountId: string,
    data: AccountHelperResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/stop-payment-reversal/${accountId}/reject`,
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
   * ACCOUNT CLOSE *
   *****************/

  public async createCloseAccountDetail(data: AccountCloseDetResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-account/close-account/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async closeAccount(
    accountCloseId: number,
    data: AccountCloseResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/close-account/${this.env.tenantId}/close/${accountCloseId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAccountCloseDetailByStatus(status: AccountCloseStatus) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/close-account/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPendingAccountClose() {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/close-account/${this.env.tenantId}/status/${AccountCloseStatus.CLOSE_PENDING}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCanceledAccountClose() {
    let results: AxiosResponse<AccountCloseResponse[]> = await axios.get(
      this.env.basePath +
        `/casa-account/close-account/${this.env.tenantId}/status/${AccountCloseStatus.CLOSE_CANCELLED}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getApprovedWithdrawalAccountClose() {
    let results: AxiosResponse<AccountCloseResponse[]> = await axios.get(
      this.env.basePath +
        `/casa-account/close-account/${this.env.tenantId}/status/${AccountCloseStatus.APPROVED_FINAL_WITHDRAWAL}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getClosedAccounts() {
    let results: AxiosResponse<AccountCloseResponse[]> = await axios.get(
      this.env.basePath +
        `/casa-account/close-account/${this.env.tenantId}/status/${AccountCloseStatus.CLOSED}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAccountCloseDetailByAccountCloseId(accountCloseId: number) {
    // TODO: Response is not defined
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/close-account/${this.env.tenantId}/${accountCloseId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async cancelCloseAccount(
    accountCloseId: number,
    data: AccountCloseResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/close-account/${this.env.tenantId}/cancel/${accountCloseId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async approveAccountCloseFinalWithdrawal(
    accountCloseId: number,
    data: AccountCloseResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/close-account/${this.env.tenantId}/finalwithdrawalapproval/${accountCloseId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*************************
   * OPERATION INSTRUCTION *
   *************************/

  public async getOperationInstructionsById(id: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/operation-instruction/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOperationInstructionsByAccountId(accountId: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/operation-instruction/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***************
   * COMMON LIST *
   ***************/

  public async saveCommonList(data: CommonListResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-account/common-list/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCommonListById(id: number) {
    let results: AxiosResponse<CommonList> = await axios.get(
      this.env.basePath + `/casa-account/comn-list/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllCommonList() {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath + `/casa-account/comn-list/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCommonListByStatusAndReferenceCode(
    referenceCode: string,
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/comn-list/${this.env.tenantId}/reference-code/${referenceCode}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCommonListByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<CommonList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/comn-list/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateCommonListById(
    id: number,
    data: UpdateCommonListResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/common-list/${this.env.tenantId}/${id}`,
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
   * DOCUMENT CHECK LIST *
   ***********************/

  public async saveDocumentCheckList(data: DocumentCheckListResource) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath + `/casa-account/doc-check-list/${this.env.tenantId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllDocumentCheckList() {
    let results: AxiosResponse<DocumentCheckList[]> = await axios.get(
      this.env.basePath +
        `/casa-account/doc-check-list/${this.env.tenantId}/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getDocumentCheckListById(id: number) {
    let results: AxiosResponse<DocumentCheckList> = await axios.get(
      this.env.basePath +
        `/casa-account/doc-check-list/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getDocumentCheckListByStatus(status: "ACTIVE" | "INACTIVE") {
    let results: AxiosResponse<DocumentCheckList> = await axios.get(
      this.env.basePath +
        `/casa-account/doc-check-list/${this.env.tenantId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateDocumentCheckList(
    id: number,
    data: DocumentCheckListResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/doc-check-list/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getDocumentChecklistDetailsByCheckListId(id: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/doc-check-list-detail/${this.env.tenantId}/doc-check-list-id/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveDocumentChecklistDetailByCheckListId(
    id: string,
    data: {
      applicableLevel: string;
      documentTypeDescription: string;
      documentTypeId: string;
      mandatoryIndicator: string;
      status: string;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/doc-check-list-detail/${this.env.tenantId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getDocumentChecklistDetailsById(id: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/doc-check-list-detail/${this.env.tenantId}/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateDocumentChecklistDetailsById(
    id: number,
    docCheckListId: string,
    data: any
  ) {
    let results: AxiosResponse<any> = await axios.put(
      this.env.basePath +
        `/casa-account/doc-check-list-detail/${this.env.tenantId}/${docCheckListId}/${id}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /*********
   * DRAFT *
   *********/

  public async getAllDrafts(pagination?: PaginatedRequest) {
    let results: AxiosResponse<PaginatedResponse<
      AccountDraftResponse
    >> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/draft/all` +
        (pagination ? serialize(pagination) : ""),
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllDraftsByCustomer(customerId: number) {
    let results: AxiosResponse<AccountDraftResponse[]> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/draft/customer/${customerId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getAllDraftsById(id: number) {
    let results: AxiosResponse<AccountDraftResponse> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/draft/${id}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveDraft(data: AccountResource) {
    let results: AxiosResponse<AccountDraftResponse[]> = await axios.post(
      this.env.basePath + `/casa-account/account/${this.env.tenantId}/draft`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async discardDraft(draftId: number) {
    let results: AxiosResponse<AccountDraftResponse[]> = await axios.put(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/draft/${draftId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***********
   * INQUIRY *
   ***********/

  public async getRemarksByAccountId(accountId: number) {
    let results: AxiosResponse<AccountRemark[]> = await axios.get(
      this.env.basePath +
        `/casa-account/remarks/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getApplicantsByAccountId(accountId: number) {
    let results: AxiosResponse<ApplicantDetail[]> = await axios.get(
      this.env.basePath +
        `/casa-account/applicant/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //! added on 30 sep 2020

  public async getApplicantsDetailsByAccountId(accountId: number) {
    let results: AxiosResponse<FullApplicantDetails[]> = await axios.get(
      // http://132.145.228.83/casa-account/applicant/AnRkr/account/979408
      this.env.basePath +
        `/casa-account/applicant/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getNomineeByAccountId(accountId: number) {
    let results: AxiosResponse<any> = await axios.get(
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

  public async getSourceOfFundByAccountId(accountId: number) {
    let results: AxiosResponse<SourceOfFund[]> = await axios.get(
      this.env.basePath +
        `/casa-account/sof/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getPurposeByAccountId(accountId: number) {
    let results: AxiosResponse<Purpose[]> = await axios.get(
      this.env.basePath +
        `/casa-account/purpose/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
  //! added on 30 sep 2020
  public async updatePurposeDetail(
    accountId: string,
    data: {
      purposeDetails: [
        {
          casaPurposeDescription: string;
          casaPurposeId: string;
          casaStatus: string;
          primaryIndicator: string;
        }
      ];
    }
  ) {
    // http://132.145.228.83/casa-account/purpose/AnRkr/account/1324
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/purpose/${this.env.tenantId}/account/${accountId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getInterestDetailsByAccountId(accountId: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/interest-detail/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getOverdraftDetailsByAccountId(accountId: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/overdraft/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getNotificationDetailsByAccountId(accountId: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/notification/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getCardDetailsByAccountId(accountId: number) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/atm/${this.env.tenantId}/account/${accountId}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async getDocumentDetailsByStatus(
    accountId: number,
    status: "ACTIVE" | "INACTIVE"
  ) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/document/${this.env.tenantId}/account/${accountId}/status/${status}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveATMDetail(accountId: number, data: ATMDetail[]) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/atm/${this.env.tenantId}/account/${accountId}`,
      { ATMDetails: data },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateATMDetail(
    atmId: number,
    data: {
      posEnabled?: "Yes" | "No";
      remarks?: string;
      status?: "ACTIVE" | "INACTIVE";
      version: number;
      blockTransactions?: "Yes" | "No";
      foreignTransactionEnabled?: "Yes" | "No";
      widrawalLimit?: "Yes" | "No";
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath + `/casa-account/atm/${this.env.tenantId}/${atmId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  /***************
   * SCHEMA TYPE *
   ***************/

  public async getAllSchemaTypes() {
    let results: AxiosResponse<Array<string[]>> = await axios.get(
      this.env.basePath +
        `/casa-account/account/${this.env.tenantId}/scheme-type/all`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveRemarks(accountId: number, data: any) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/remarks/${this.env.tenantId}/account/${accountId}`,
      {
        casaAccountRemarks: [data],
      },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveNotificationDetails(
    accountId: number,
    data: NotificationDetailsResource[]
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/notification/${this.env.tenantId}/account/${accountId}`,
      {
        notificationDetails: data,
      },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateNotificationDetails(
    accountId: number,
    notificationDetailsId: number,
    data: {
      status: "ACTIVE" | "INACTIVE";
      version: number;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/notification/${this.env.tenantId}/account/${accountId}/${notificationDetailsId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveDocumentDetails(
    accountId: number,
    // data: DocumentsResource[]
    data: {
      documentDetails: [
        {
          documentCheckListId: string;
          documentList: [
            {
              fileDownloadUri: string;
              fileName: string;
              fileType: string;
              id: number;
              size: number;
            }
          ];
          documentName: string;
          documentStatus: string;
          documentType: string;
          mandatoryStatus: string;
          origin: string;
          recievedDate: string;
          status: string;
        }
      ];
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/document/${this.env.tenantId}/account/${accountId}`,
      {
        documentDetails: data,
      },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateDocumentDetails(
    documentId: number,
    data: DocumentsUpdateResource
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/document/${this.env.tenantId}/${documentId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveOperationInstructions(
    accountId: number,
    data: OperationInstructionsResources[]
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/operation-instruction/${this.env.tenantId}/account/${accountId}`,
      {
        casaOperationInstructionsDetails: data,
      },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateOperationInstructions(
    accountId: number,
    operationInstructionsId: number,
    data: UpdateOperationInstructionsResources
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/operation-instruction/${this.env.tenantId}/account/${accountId}/${operationInstructionsId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async updateInterestDetails(
    accountId: number,
    remarksId: number,
    data: {
      status: "ACTIVE" | "INACTIVE";
      version: number;
    }
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.put(
      this.env.basePath +
        `/casa-account/interest-detail/${this.env.tenantId}/account/${accountId}/${remarksId}`,
      data,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  public async saveInterestDetails(
    accountId: number,
    data: InterestDetailsResource[]
  ) {
    let results: AxiosResponse<
      { messages: string } | { [prop: string]: string }
    > = await axios.post(
      this.env.basePath +
        `/casa-account/interest-detail/${this.env.tenantId}/account/${accountId}`,
      {
        interestDetails: data,
      },
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //added by SahanAm for acc Cycle on 22/02/2021

  public async getAccountCycle(accountNo: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/info/${this.env.tenantId}/search-account?accountNumber=${accountNo}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }

  //added by SahanAm for ATM number validation on 23/02/2021
  
  // public async getAtmNoValidation(atmNumber: string) {
  //   let results: AxiosResponse<any> = await axios.get(
  //     this.env.basePath +
  //       `/casa-account/atm/${this.env.tenantId}/validate/${atmNumber}`,
  //     {
  //       headers: {
  //         Authorization: this.env.token,
  //       },
  //     }
  //   );
  //   return results.data;
  // }

  // public async saveOverdraftDetails(
  //   accountId: number,
  //   data: {
  //     accountName: string;
  //     accountNo: string;
  //     casaStatus?: "ACTIVE";
  //     propotion: number;
  //   }
  // ) {
  //   let results: AxiosResponse<
  //     { messages: string } | { [prop: string]: string }
  //   > = await axios.post(
  //     this.env.basePath +
  //       `/casa-account/overdraft/${this.env.tenantId}/account/${accountId}`,
  //     {
  //       overdraftDetails: data,
  //     },
  //     {
  //       headers: {
  //         Authorization: this.env.token,
  //       },
  //     }
  //   );
  //   return results.data;
  // }

  //   public async updateOverdraftDetails(
  //     accountId: number,
  //     overdraftId: number,
  //     data: {
  //       status?: string;
  //       version: number;
  //     }
  //   ) {
  //     let results: AxiosResponse<
  //       { messages: string } | { [prop: string]: string }
  //     > = await axios.put(
  //       this.env.basePath +
  //         `/casa-account/overdraft/${this.env.tenantId}/account/${accountId}/${overdraftId}`,
  //       {
  //         overdraftDetails: data,
  //       },
  //       {
  //         headers: {
  //           Authorization: this.env.token,
  //         },
  //       }
  //     );
  //     return results.data;
  //   }

  public async getCardNumValidated(cardNumber: string) {
    let results: AxiosResponse<any> = await axios.get(
      this.env.basePath +
        `/casa-account/atm/${this.env.tenantId}/validate/${cardNumber}`,
      {
        headers: {
          Authorization: this.env.token,
        },
      }
    );
    return results.data;
  }
}
