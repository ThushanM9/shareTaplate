// SDK Mapping - https://www.notion.so/alakazam/Account-Opening-513733144420421d9061144e6698fab9
// STATUS - NEEDS CLARIFICATIONS ❕and has Blocks ❌

import { LOLCSDK } from "../../../../../../sdk";

export const AccountOpening_AccountDetailsSchema = {
  cards: [
    // Basic Account Details
    {
      title: "Basic Account Details",
      description: "These are the basic details of the account",
      fields: [
        {
          label: "Account ID",
          targetKey: "accountId",
          readOnly: true,
          noSend: true,
          key: "perId", // Todo: Clarification - should be need to display the custId as account ID? What happens when there are multiple customers selected
          type: "TEXT_STRING",
          rules: [],
        },
        {
          // Notes
          // We need to prefill the account name with perPreferredName from the Customer Object
          // Customer object present in src/sdk/comn-customer/interfaces.ts
          label: "Account Name",
          targetKey: "casaAccountName",
          key: "perPreferredName", // Todo: What happens when there are multiple customers selected
          type: "TEXT_STRING",
          rules: [],
        },
        {
          // Notes
          // We need to prefill the Nickname name with perOtherName from the Customer Object
          // Customer object present in src/sdk/comn-customer/interfaces.ts
          label: "Account Nickname",
          targetKey: "casaNickName",
          key: "perOtherName",
          type: "TEXT_STRING",
          rules: [],
        },
        {
          label: "Scheme Name",
          key: "casaSchemeCode",
          type: "SELECT",
          values: [
            {
              value: "COMM",
              label: "COMM",
            },
            {
              value: "SORT",
              label: "SORT",
            },
            {
              value: "IBAN",
              label: "IBAN",
            },
            {
              value: "PANA",
              label: "PANA",
            },
          ],
          rules: [],
        },
        {
          label: "Account Number",
          key: "perId", // Todo: What happens when there are multiple customers selected
          type: "TEXT_STRING",
          readOnly: true,
          noSend: true,
          rules: [],
        },
        {
          label: "Secondary Account Number",
          // Todo: Need Clarification
          key: "secondaryAccountNo",
          readOnly: true,
          noSend: true,
          type: "TEXT_STRING",
          rules: [],
        },
        {
          label: "Anticipated Value",
          key: "casaAnticipatedValue",
          // Todo: Clarifications: Two Properties found similar in src/sdk/casa-account/interfaces.ts
          // casaAnticipatedValue?: string;
          // casaAnticipatedValueId: number;
          type: "REMOTE_SELECT",
          // Notes - API shold be called with paramter - "ANTICIPATED", returns array of Turnover[]
          // export interface Turnover {
          //   id: number;
          //   version: number;
          //   turnTenantId: string;
          //   turnReferenceCode: string;
          //   turnCode: string;
          //   turnDesc: string;
          //   turnFromAmount: number;
          //   turnToAmount: number;
          //   turnStatus: string;
          //   turnCreatedUser: string;
          //   turnCreatedDate: string;
          //   turnModifiedUser: string;
          //   turnModifiedDate: string;
          // }
          spec: {
            api: (sdk: LOLCSDK) => sdk.CustomerService.getTurnoverByRefCode,
            value: "id",
            label: "turnDesc",
          },
          rules: [],
        },
        {
          label: "Anticipated Value Frequency",
          key: "casaAnticipatedFrequencyId",
          type: "REMOTE_SELECT",
          spec: {
            // Notes
            // API should be called with parameter - "ACTIVE"
            // export interface Frequency {
            //   id: number;
            //   version: number;
            //   tenantId: string;
            //   code: string;
            //   name: string;
            //   description: string;
            //   type: "MATURITY" | "HOUR" | "DATE" | "WEEK" | "MONTH" | "YEAR";
            //   unit: number;
            //   status: "ACTIVE" | "INACTIVE";
            //   createdUser: string;
            //   createdDate: string;
            //   modifiedUser: string;
            //   modifiedDate: string;
            // }
            api: (sdk: LOLCSDK) => sdk.ProductBCAService.getFrequencyByStatus,
            value: "id",
            label: "name",
          },
          rules: [],
        },
        {
          label: "Account Currency",
          key: "casaCurrency",
          // Todo: Clatifiaction - There are 3 similar fields
          // casaCurrency: number;
          // casaCurrencyCode: string;
          // casaCurrencyNumeric: number;
          type: "REMOTE_SELECT",
          spec: {
            // Notes
            // export interface CurrencyDetail {
            //   currencyId: number;
            //   currencyCode: string;
            //   currencyName: string;
            //   tenantId: string;
            //   currencyStatus: string;
            //   codeNumeric: string;
            //   exponentConversions: number;
            //   currencyCreatedUser: string;
            //   currencyCreatedDate: string;
            //   currencyModifiedUser: string;
            //   currencyModifiedDate: string;
            //   currencyVersion: number;
            // }
            api: (sdk: LOLCSDK) => sdk.CurrencyDetailService.getAllCurrencies,
            value: "currencyId",
            label: "currencyName",
          },
          rules: [],
        },
        {
          label: "Account Description",
          key: "accountDescription",
          type: "TEXTAREA",
          rules: [],
        },
      ],
    },
    // Account Controll
    {
      title: "Acount Control",
      description: "These are the basic details of the account",
      fields: [
        {
          label: "Account Balance Restriction",
          key: "balanceRestrictedStatus",
          type: "SELECT",
          values: [
            {
              value: "Yes",
              label: "Yes",
            },
            {
              value: "No",
              label: "No",
            },
          ],
          rules: [],
        },
        {
          label: "Foreign Currency",
          key: "otherCurrencyTransactionAllowed",
          type: "SELECT",
          values: [
            {
              value: "Yes",
              label: "Yes",
            },
            {
              value: "No",
              label: "No",
            },
          ],
          rules: [],
        },
        {
          label: "Minor Restriction",
          // Notes
          // Based on Yes or No, the next field (Minor Restriction Type) should be enabled
          key: "",
          type: "SELECT",
          values: [
            {
              value: "Yes",
              label: "Yes",
            },
            {
              value: "No",
              label: "No",
            },
          ],
          rules: [],
        },
        {
          label: "Minor Restriction Type",
          key: "casaMinorAccountStatus",
          type: "SELECT",
          values: [
            {
              value: "Minor With Restrictions",
              label: "Minor With Restrictions",
            },
            {
              value: "Minor Without Restrictions",
              label: "Minor Without Restrictions",
            },
          ],
          rules: [],
        },
      ],
    },
    // Account Purpose
    {
      title: "Account Purpose",
      description: "These are the basic details of the account",
      // export interface PurposeResource {
      //   casaPurposeDescription: string;
      //   casaPurposeId: number;
      //   casaStatus: string;
      //   primaryIndicator: "Yes" | "No";
      // }
      fields: [
        {
          // https://www.figma.com/file/dLc7ovfgQ8KRXAtQ02sRNv/Fusion-High-Fidelity?node-id=2844%3A0
          key: "purposeDetails",
          type: "MULTI_LEVEL_DROPDOWN_COLLECTION",
          level1: {
            spec: {
              // Notes - query with parameter - "ACTIVE"
              // export interface Purpose {
              //   id: number;
              //   version: number;
              //   description: string;
              //   primaryIndicator: string;
              //   tenantId: string;
              //   createdUser: string;
              //   createdDate: string;
              //   modifiedUser: string;
              //   modifiedDate: string;
              //   status: string;
              //   accountId: number;
              //   purposeReferenceId: number;
              // }
              api: (sdk: LOLCSDK) => sdk.AccountService.getPurposeByStatus,
              value: "id",
              label: "description",
            },
          },
          level2: {
            spec: {
              // Notes - query with parameters - (${purposeId}, ACTIVE)
              // export interface CommonList {
              //   id: number;
              //   version: number;
              //   accComnListReferenceCode: string;
              //   accComnListCode: string;
              //   accComnListDesc: string;
              //   accComnListTenantId: string;
              //   accComnListStatus: string;
              //   accComnListCreateUser: string;
              //   accComnListCreateDate: string;
              //   accComnListModifiedUser?: any;
              //   accComnListModifiedDate?: any;
              //   accComnListAttribute1?: any;
              //   accComnListAttribute2?: any;
              //   accComnListAttribute3?: any;
              //   accComnListAttribute4?: any;
              //   accComnListAttribute5?: any;
              // }
              api: (sdk: LOLCSDK) =>
                sdk.AccountService.getCommonListByStatusAndReferenceCode,
              value: "id",
              label: "accComnListDesc",
              // Todo: Need Clarification on ID and Label
            },
          },
        },
        {
          label: "Remarks on Additional Account Opening",
          //! Remarks is not mapped
          key: "",
          type: "TEXTAREA",
          rules: [],
        },
      ],
    },
    // Source of Funds
    {
      title: "Source of Funds",
      description: "These are the basic details of the account",
      fields: [
        // Todo: Need Clarification
        {
          targetKey: "casaSourceOfFundsDetails",
          type: "CHECKBOX",
          value: {
            api:
              "AccountService.getSourceOfFundByStatus('ACTIVE') | AccountService.getCommonListByStatusAndReferenceCode(SOFU, ACTIVE)",
          },
        },
      ],
    },
  ],
};
