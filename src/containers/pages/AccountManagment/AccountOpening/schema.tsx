import React from "react";
import { FunctionSchema } from "../../../../schemas/schema";
import { EditableWidgetSchema } from "../../../../schemas/widget-schema";
import { LOLCSDK } from "../../../../sdk";
import { AlertEvent } from "../../../../sdk/comn-alert/interfaces";
import { Bank } from "../../../../sdk/comn-bank/interfaces";
import {
  CusRelationship,
  Customer,
  Turnover,
} from "../../../../sdk/comn-customer/interfaces";
import { PaginatedResponse } from "../../../../sdk/utils/common";
import { pastDateRule } from "../../../../utils/schema.helpers";
import { customerSelectorSchema } from "../selector-schemas/customer-selector/customer-selector.schemas";
import CardValidator from "./cardValidator";
import { EmptyCustomerRecord } from "./data/emptyCustomerRecord";

export const AccountOpeningSchema: FunctionSchema = {
  functionName: "Account Opening",
  module: "Account", //
  steps: [
    // 1st Step
    {
      title: "Customer Details",
      cards: [
        {
          title: "Customer Details",
          description: "Add an Existing or New Customer",
          fields: [
            {
              type: "EDITABLE_TABLE",
              key: "casaApplicantDetails",
              emptyRecord: EmptyCustomerRecord,
              resourceMapFunction: (customer: Customer) => {
                const name =
                  customer.cusOrganizationTypeCode === "ORCO"
                    ? customer.perCompanyName
                    : customer.cusOrganizationTypeCode === "ORIN"
                    ? customer.perFullName
                    : "";
                const newObj = {
                  ...customer,
                  casaCustomerName: name,
                  casaFullLegalName: name,
                  casaCustomerId: customer.id,
                  casaKycStatus: customer.cusStatus,
                  casaCustomerCode: customer.cusReferenceCode,
                  casaDateOfBirth: customer.perDateOfBirth,
                };

                return newObj;
              },
              columns: [
                //send this default value
                {
                  label: "Customer Name",
                  key: "casaCustomerName",
                  dataType: "STRING",
                },
                {
                  label: "Customer Code",
                  key: "casaCustomerCode",
                  dataType: "STRING",
                },
                {
                  label: "Date of Birth",
                  key: "casaDateOfBirth",
                  noSend: false,
                  dataType: "DATE",
                  format: "DD/MM/YYYY",
                },
                {
                  label: "Legal Name",
                  key: "casaFullLegalName",
                  hidden: true,
                },
                {
                  label: "Customer Id",
                  key: "casaCustomerId",
                  hidden: true,
                },

                // {
                //   label: "Identification",
                //   key: "casaCustomerId",
                //   dataType: "STRING",
                // },
                {
                  label: "KYC",
                  key: "cusKycStatus",
                  dataType: "TAG",
                },
                {
                  label: "Ownership",
                  key: "casaOwnershipType",
                  isEditable: true,
                  widgetSchema: {
                    type: "SELECT",
                    readOnly: false,
                    values: [
                      {
                        value: "SOLE OWNER",
                        label: "SOLE OWNER",
                      },
                      {
                        value: "JOINT AND FIRST",
                        label: "JOINT AND FIRST",
                      },
                      {
                        value: "JOINT AND OTHER",
                        label: "JOINT AND OTHER",
                      },
                      {
                        value: "DELIGATE",
                        label: "DELIGATE",
                      },
                    ],
                  },
                },
                {
                  label: "Tax Percentage",
                  key: "taxPercerntage",
                  isEditable: true,
                  widgetSchema: {
                    type: "NUMBER",
                    readOnly: false,
                  },
                },
              ],
              addResourceText: "Add another customer",
              addResouceSchema: customerSelectorSchema,
            },
          ],
        },
        //  Guardian Details
        //! show only if customer is under 18
        {
          title: "Guardian Details",
          description: "These are the details of the guardian",
          fields: [
            {
              type: "DISPLAY_TABLE",
              columns: [
                {
                  label: "Relationships",
                  key: "curRelationshipTypeDesc",
                  dataType: "STRING",
                  noSend: true,
                },
                {
                  label: "Name",
                  key: "perFullName",
                  targetKey: "guardianName",
                  dataType: "STRING",
                },

                {
                  label: "Indetifications",
                  targetKey: "id",
                  key: "primaryIdentificationNumber",
                  dataType: "STRING",
                },
              ],
              spec: {
                resourceUri: (sdk: LOLCSDK) => sdk.CustomerService.getGuardians,
                key: "cusRelationships",
              },
            },
          ],
        },
        // Disable Notes
        {
          title: "Disability Notes",
          description: "This is required if the customer’s disabled",
          fields: [
            {
              label: "Is Visiting this user required?",
              type: "SELECT",
              // defaultValue: "No",
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
              key: "customerVisitRequired",
              rules: [{ required: true, message: "Please select a value" }],
            },
            {
              label: "How many visits per week?",
              type: "NUMBER",
              key: "noOfVisitPerPeriod",
              displayCondition: (formValue) =>
                formValue.customerVisitRequired === "Yes",
              rules: [{ required: true, message: "Please select a value" }],
            },
          ],
        },
        // Nominee Details

        {
          title: "Nominee Details",
          description: "These are the details of the Nominees",
          fields: [
            {
              type: "EDITABLE_TABLE",
              spec: {
                resourceUri: (sdk: LOLCSDK) => sdk.CustomerService.findById,
                // Note:
                // When customer search modal is shown, only the customers will nominee should be shown
                // CustomerService.getNominees(customerId) show only the results that  curNomineeStatus : "Yes"  --new 15/07/2020

                searchNomineeApi: (sdk: LOLCSDK) => sdk.CustomerService,
                key: "casaNomineeDetails",
                selectorFunction: (relations: CusRelationship[]) => {
                  return relations.filter(
                    (relation) => relation.curNomineeStatus === "YES"
                  );
                },
                // Notes

                fields: [
                  {
                    label: "Nominee Name",
                    key: "perFullName",
                    targetKey: "casaNomineeName",
                    dataType: "STRING",
                  },
                  {
                    label: "Nominee Code",
                    key: "perCode",
                    targetKey: "casaCustomerCode",
                    dataType: "STRING",
                  },
                  {
                    label: "Nominee Status",
                    key: "curStatus",
                    targetKey: "casaNomineeStatus",
                    dataType: "STRING",
                  },
                  {
                    label: "Nominee Id",
                    key: "culpId",
                    targetKey: "casaNomineeId",
                    dataType: "STRING",
                  },
                  {
                    label: "Relationships",
                    key: "curRelationshipTypeDesc",
                    targetKey: "",
                    dataType: "STRING",
                    noSend: true,
                  },
                  {
                    label: "Portion",
                    key: "casaPropotionRatio",
                    targetKey: "casaPropotionRatio",
                    isEditable: true,
                    widgetSchema: {
                      type: "NUMBER",
                      key: "casaPropotionRatio",
                    } as EditableWidgetSchema,
                  },
                ],
              },
            } as any,
          ],
        },
      ],
    },
    // 2nd Step
    {
      title: "Product Details",
      description: "Choose a Product",
      cards: [
        {
          title: "Product Details",
          description: "Choose a Product",
          fields: [
            {
              label: "Account Type",
              key: "accountType",
              type: "SELECT",
              values: [
                {
                  value: "CURRENT_ACCOUNT",
                  label: "Current",
                },
                {
                  value: "SAVINGS",
                  label: "Savings",
                },
              ],
              rules: [
                { required: true, message: "Please select an Account Type" },
              ],
            },

            {
              label: "Main Product",
              key: "casaProduct",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) =>
                  sdk.ProductBCAService.getProductByAccountType,
                value: "id",
                label: "name",
              },
              rules: [{ required: true, message: "Please select a category" }],
            },
            {
              label: "Choose a Sub Product",
              key: "casaSubProductId",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) =>
                  sdk.ProductBCAService.getSubProductByCoreProductId,
                value: "id",
                label: "name",
                extraFieldMappings: [
                  {
                    key: "casaSubProductCode",
                    value: "identification",
                  },
                ],
                //! Icon and Description needs to be decided
                // icon: '',
                // ! icon should be open
                // body: ''
              },
              rules: [
                { required: true, message: "Please select a sub Product" },
              ],
            },
          ],
        },
      ],
    },
    // 3rd Step
    {
      title: "Account Details",
      description: "These are the basic details of the account",
      cards: [
        // Basic Account Details
        {
          title: "Basic Account Details",
          description: "These are the basic details of the account",
          fields: [
            {
              label: "Account ID",
              readOnly: true,
              noSend: true,
              defaultValue: "",
              key: "id",
              type: "TEXT_STRING",
              rules: [],
            },
            {
              label: "Account Name",
              key: "casaAccountName",
              type: "TEXT_STRING",

              rules: [{ required: true, message: "Please select a value" }],
            },
            {
              label: "Account Nickname",
              key: "casaNickName",
              type: "TEXT_STRING",
              rules: [{ required: true, message: "Please select a value" }],
            },

            {
              label: "Scheme Type",
              key: "casaSchemeCode",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  new Promise((res, rej) => {
                    const run = async () => {
                      const schemaTypes = await sdk.AccountService.getAllSchemaTypes();
                      res(
                        schemaTypes.map((item, index) => ({
                          id: item[0],
                          label:
                            index !== 0
                              ? item[1] + " - Not Available"
                              : item[1],
                        }))
                      );
                    };
                    run();
                  }),
                value: "id",
                label: "label",
              },
              rules: [{ required: true, message: "Please select a value" }],
            },
            {
              label: "Account Number",
              readOnly: true,
              noSend: true,
              defaultValue: "",
              key: "primaryAccountNumber",
              type: "TEXT_STRING",
              rules: [],
            },
            {
              label: "Secondary Account Number",
              readOnly: true,
              noSend: true,
              defaultValue: "",
              key: "secondaryAccountNumber",
              type: "TEXT_STRING",
              rules: [],
            },
            //! anticipated value --fix
            {
              label: "Anticipated Value",
              key: "casaAnticipatedValueId",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.CustomerService.getTurnoverByRefCode("ANTICIPATED"),
                value: "id",
                label: (item: Turnover) => {
                  return `${item.turnFromAmount}-${item.turnToAmount}`;
                },
                extraFieldMappings: [
                  {
                    key: "casaAnticipatedValue",
                    value: (item: Turnover) => {
                      return `${item.turnFromAmount}-${item.turnToAmount}`;
                    },
                  },
                ],
              },
              rules: [{ required: true, message: "Please select a value" }],
            },
            {
              label: "Anticipated Value Frequency",
              key: "casaAnticipatedFrequencyId",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.AccountService.getCommonListByStatusAndReferenceCode(
                    "FREQ",
                    "ACTIVE"
                  ),
                value: "id",
                label: "accComnListDesc",
              },
              rules: [{ required: true, message: "Please select a value" }],
            },
            //! SubProduct this needs to be populated
            {
              label: "Account Currency",
              key: "casaCurrencyCode",
              readOnly: true,
              type: "TEXT_STRING",
              rules: [],
            },
            {
              label: "Account Description2",
              key: "accountDescription",
              type: "TEXTAREA",

              rules: [{ required: true, message: "Please select a value" }],
            },
          ],
        },
        // Account Control
        {
          title: "Account Control",
          description: "",
          fields: [
            {
              label: "Account Balance Restriction",
              key: "balanceRestrictedStatus",
              type: "SELECT",
              defaultValue: "No",
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
              rules: [{ required: true, message: "Please select a value" }],
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
              rules: [{ required: true, message: "Please select a value" }],
            },
            {
              label: "Minor Restriction",
              // Notes
              // Based on Yes or No, the next field (Minor Restriction Type) should be enabled
              key: "casaRestrictedStatus", //casaRestrictedStatus
              noSend: true,
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
              rules: [{ required: true, message: "Please select a value" }],
            },
            {
              label: "Minor Restriction Type",
              key: "casaMinorAccountStatus",
              type: "SELECT",
              values: [
                {
                  value: "Minor with restrictions",
                  label: "Minor with restrictions",
                },
                {
                  value: "Minor without restrictions",
                  label: "Minor without restrictions",
                },
              ],
              displayCondition: (formValue) =>
                formValue.casaRestrictedStatus === "Yes",
              rules: [{ required: true, message: "Please select a value" }],
            },
          ],
        },
        // Account Purpose
        {
          title: "Account Purpose",
          description: "These are the basic details of the account",
          fields: [
            {
              key: "purposeDetails",
              type: "MULTI_LEVEL_DROPDOWN_COLLECTION",
              // Note:
              // Only one item can be primary
              level1: {
                key: "",
                spec: {
                  api: (sdk: LOLCSDK) => sdk.AccountService.getPurposeByStatus,
                  value: "id",
                  label: "description",
                },
              },
              level2: {
                key: "primaryIndicator",
                spec: {
                  values: [
                    {
                      value: "YES",
                      label: "Primary",
                    },
                    {
                      value: "No",
                      label: "Secondary",
                    },
                  ],
                },
              },
            },
            {
              label: "Remarks on Additional Account Opening",
              key: "casaRemarkForAdditionalAccount",
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
            {
              key: "casaSourceOfFundsDetails",
              type: "MULTI_LEVEL_DROPDOWN_COLLECTION",
              // Note:
              // Only one item can be primary
              level1: {
                key: "",
                spec: {
                  api: (sdk: LOLCSDK) => () =>
                    sdk.AccountService.getCommonListByStatusAndReferenceCode(
                      "SOFU",
                      "ACTIVE"
                    ),
                  value: "id",
                  label: "description",
                },
              },
              level2: {
                key: "primaryIndicator",
                spec: {
                  values: [
                    {
                      value: "Yes",
                      label: "Primary",
                    },
                    {
                      value: "No",
                      label: "Secondary",
                    },
                  ],
                },
              },
            },
            {
              label: "Other",
              key: "otherRemarks",
              type: "TEXTAREA",
              rules: [],
            },
          ],
        },
      ],
    },
    // 4th Step
    {
      title: "Statement Details",
      description: "",
      cards: [
        {
          title: "Statement Details",
          description: "",
          fields: [
            {
              label: "",
              type: "REMOTE_MULTI_SELECT",
              key: "",
              spec: {
                api: (sdk: LOLCSDK) => sdk.AccountService.getStatementTypes,
                value: "id",
                label: "accComnListDesc",
              },
              rules: [{ required: true, message: "Please select a value" }],
            },
            // ~Note
            // frequency
            // api : /comn-common/period/AnRkr/all // common-common -> getAllPeriods
            // type:"SELECT",
            // value : "name"
            // key: "deliveryFrequency"//casaStatementStatus

            // ~Note
            // deliveryMethod
            //type:"SELECT",
            // api : casa-account/comn-list/{tenantId}/STMT_DEL_METHD   //casa-account-> getStatementDevliveryMethods
            // value : "accComnListDesc"
            // key: ""//casaStatementStatus ->deliveryMethod,deliveryMethodDescription
          ],
        },
      ],
    },
    // 5th Step
    {
      title: "Interest Details",
      description: "",
      cards: [
        // Credit Interest Rate Details
        {
          title: "Credit Interest Rate Details",
          description: "These are the basic details of the account",
          fields: [
            {
              label: "Enable Interest Rate",
              noSend: true,
              key: "casaEnableDisableInterestCalculation",
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
            // ~Note:
            // Conditional Field: Show the below fields only if "Enable Interest Rate" is true
            {
              label: "Special Rate",
              key: "specialRate", //! add two decimal points
              type: "NUMBER",
              rules: [],
              displayCondition: (formValue) =>
                formValue.casaEnableDisableInterestCalculation === "Yes",
            },
            {
              label: "Customize Interest Rate Calculation Date",
              noSend: true,
              type: "SWITCH",
              key: "customizeInterestDate",
              valueMap: {
                true: "ACTIVE",
                false: "INACTIVE",
              },
              rules: [],
              displayCondition: (formValue) =>
                formValue.casaEnableDisableInterestCalculation === "Yes",
            },
            // ~Note:
            // Conditional Field: Show the below fields only if "Customize Interest Rate Calculation Date" is true
            {
              label: "Interest Calculation Start Date",
              key: "interestCalculationStartDate",
              format: "YYYY/MM/DD",
              type: "DATE",
              displayCondition: (formValue) =>
                formValue.casaEnableDisableInterestCalculation === "Yes" &&
                formValue.customizeInterestDate === "ACTIVE",
            },
          ],
        },
        // Card - Credit Interest Posting Details
        // ~Note:
        // Conditional Field: Show the below fields only if "Customize Interest Rate Calculation Date" is true
        {
          title: "Credit Interest Posting Details",
          description: "These are the basic details of the account",
          displayCondition: (globalFormState) =>
            globalFormState.casaEnableDisableInterestCalculation === "Yes",
          fields: [
            {
              label: "Posting Method",
              key: "otherPostingMethodId",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => sdk.AccountService.getPaymentMode,
                value: "id",
                label: "accComnListDesc",
                extraFieldMappings: [
                  {
                    key: "otherPostingMethod",
                    value: "accComnListDesc",
                  },
                ],
              },
              rules: [],
            },
            {
              label: "Posting Type",
              key: "crebitInterestPostType",
              type: "SELECT",
              values: [
                // ~Note:
                // if the posting method is selected as INternal and choose self ACCOUNT number should not be sent (pass empty)
                {
                  value: "Self",
                  label: "Self",
                },
                // ~Note:
                // if the posting method is INTERNAL and posting type is other get INTERNAL party table account number
                {
                  value: "Other",
                  label: "Other",
                },
              ],
              rules: [],
            },
          ],
        },
        // Card - Credit Interest Benefiary Details
        {
          // ~Note:
          // if the INTERNAL AND SELF this table is disbaled.
          //if external selected add a customer
          title: "Credit Interest Beneficiary Details",
          description: "Credit Interest Beneficiary Details",
          displayCondition: (globalFormState) =>
            globalFormState.casaEnableDisableInterestCalculation === "Yes" &&
            !(
              globalFormState.otherPostingMethod === "INTERNAL" &&
              globalFormState.crebitInterestPostType === "Self"
            ),
          fields: [
            {
              type: "EDITABLE_TABLE",
              label: "Internal Party",
              spec: {
                fields: [
                  {
                    label: "Payment Mode",
                    key: "paymentModeId",
                    // targetkey: "paymentModeDescription",
                    type: "STRING",
                    isEditable: true,
                    widgetSchema: {
                      type: "REMOTE_SELECT",
                      // key: "paymentModeDescription",
                      spec: {
                        api: (sdk: LOLCSDK) =>
                          sdk.AccountService.getPaymentMode,

                        value: "id",
                        label: "accComnListDesc",
                        extraFieldMappings: [
                          {
                            key: "paymentModeDescription",
                            value: "accComnListDesc",
                          },
                        ],
                      },
                    } as EditableWidgetSchema,
                  },

                  {
                    label: "Account Number",
                    key: "casaIdentification",
                    targetKey: "crebitInterestPostAccount",
                    type: "STRING",
                  },
                  {
                    label: "Benefiary Name",
                    key: "customerName",
                    targetKey: "beneficiaryName",
                    type: "STRING",
                  },
                  {
                    label: "Benefiary ID",
                    key: "id",
                    targetKey: "beneficiaryId",
                    type: "STRING",
                  },
                  {
                    label: "Portion",
                    key: "propotionRatio",
                    targetKey: "propotionRatio",
                    isEditable: true,
                    widgetSchema: {
                      type: "NUMBER",
                      key: "portion",
                    } as EditableWidgetSchema,
                  },
                ],
              } as any,
            },
            {
              // Note:
              // This table is only for display purposees
              type: "EDITABLE_TABLE",
              label: "External Party",
              spec: {
                resourceUri: (sdk: LOLCSDK) => sdk.CustomerService.findById,

                fields: [
                  {
                    label: "Financial Institution",

                    targetKey: "bankName",

                    key: "bankName",
                    type: "STRING",
                  },
                  {
                    label: "Bank Id",

                    targetKey: "bankId",

                    key: "bankId",
                    type: "STRING",
                    hidden: true,
                  },
                  {
                    label: "Branch Name",
                    targetKey: "bankBranchName",
                    key: "bankBranchName",
                    type: "STRING",
                    hidden: true,
                  },
                  {
                    label: "Branch Number",
                    targetKey: "bankBranchId",
                    key: "bankBranchId",
                    type: "STRING",
                  },
                  {
                    label: "Name",
                    targetKey: "beneficiaryName",
                    key: "beneficiaryName",
                    type: "STRING",
                  },
                  {
                    label: "Payment Mode Id",
                    targetKey: "paymentModeId",
                    key: "paymentModeId",
                    type: "STRING",
                    hidden: true,
                  },
                  {
                    label: "Payment Mode",
                    targetKey: "paymentModeDescription",
                    key: "paymentModeDescription",
                    type: "STRING",
                  },
                  {
                    label: "Payment Send Mode Id",
                    targetKey: "paymentSendMethodId",
                    key: "paymentSendMethodId",
                    type: "STRING",
                    hidden: true,
                  },
                  {
                    label: "Payment Send Mode",
                    targetKey: "paymentSendMethod",
                    key: "paymentSendMethod",
                    type: "STRING",
                  },
                  {
                    label: "Account Number",
                    targetKey: "crebitInterestPostAccount",
                    key: "crebitInterestPostAccount",
                    type: "STRING",
                  },
                  {
                    label: "Portion",
                    targetKey: "propotionRatio",
                    key: "propotionRatio",
                    type: "STRING",
                  },
                ],
              } as any,
            },
          ],
        },
        {
          title: "Debit Interest Posting Details",
          description: "Debdit Interest Posting Details",
          fields: [
            {
              label: "Posting Methods",
              type: "SELECT",
              key: "debitInterestPostType",
              defaultValue: "Self",
              values: [
                {
                  value: "Self",
                  label: "Self",
                },

                {
                  value: "Other",
                  label: "Other",
                },
              ],
            },
            {
              label: "Portion",
              key: "propotionRatio",
              type: "NUMBER",
              rules: [],
            },
            {
              type: "EDITABLE_TABLE",
              label: "",
              spec: {
                fields: [
                  {
                    label: "Payment Mode",
                    key: "paymentMode",
                    targetKey: "paymentModeDescription",
                    type: "STRING",
                    isEditable: true,
                    widgetSchema: {
                      type: "REMOTE_SELECT",
                      key: "paymentModeId",
                      spec: {
                        api: (sdk: LOLCSDK) =>
                          sdk.AccountService.getPaymentMode,

                        value: "id",
                        label: "accComnListDesc",
                      },
                    } as EditableWidgetSchema,
                  },
                  {
                    label: "Account Number",
                    key: "casaIdentification",
                    targetKey: "debitInterestPostAccount",
                    dataType: "STRING",
                  },
                  {
                    label: "Benefiary Name",
                    key: "customerName",
                    targetKey: "beneficiaryName",
                    type: "STRING",
                  },

                  {
                    label: "Portion",
                    key: "portion",
                    targetKey: "propotionRatio",
                    dataType: "STRING",
                    isEditable: true,
                    widgetSchema: {
                      type: "NUMBER",
                      key: "portion",
                    } as EditableWidgetSchema,
                  },
                ],
              } as any,
            },
          ],
        },
        {
          title: "Add External",
          description: "External Account Details",

          fields: [
            {
              label: "Pay Account Number",
              key: "crebitInterestPostAccount",
              type: "TEXT_STRING",

              rules: [],
            },
            {
              label: "Name",
              key: "beneficiaryName",
              type: "TEXT_STRING",

              rules: [],
            },
            // ~Note:
            // if INTERNAL following fields are disabled
            {
              label: "Bank/ Finance Institute",
              key: "bankId",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => sdk.BankService.getAllBanks,
                transformFunction: (res: PaginatedResponse<Bank>) =>
                  res.content,
                value: "id",
                label: "bankName",
                extraFieldMappings: [
                  {
                    key: "bankName",
                    value: "bankName",
                  },
                ],
              },
              rules: [],
            },

            {
              label: "Bank/ Finance Institute Branch",
              key: "bankBranchName", // bankId,
              type: "REMOTE_SELECT",
              isEditable: true,

              spec: {
                api: (sdk: LOLCSDK) => (id: any) =>
                  id && sdk.BankService.getBranchesByBankId(id),
                parameters: ["bankId"],
                value: "bbrhName",
                label: "bbrhName",
                extraFieldMappings: [
                  {
                    key: "bankBranchId",
                    value: "id",
                  },
                ],
              },

              rules: [],
            },

            {
              label: "Payment Mode",

              key: "paymentModeId",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => sdk.AccountService.getPaymentMode,
                value: "id",
                label: "accComnListDesc",
                extraFieldMappings: [
                  {
                    key: "paymentModeDescription",
                    value: "accComnListDesc",
                  },
                ],
              },
              rules: [],
            },

            {
              label: "Payment Send Mode",

              key: "paymentSendMethodId",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => sdk.AccountService.getPaymentSendMethod,
                value: "id",
                label: "accComnListDesc",
                extraFieldMappings: [
                  {
                    key: "paymentSendMethod",
                    value: "accComnListDesc",
                  },
                ],
              },
              rules: [],
            },

            {
              label: "Portion",
              key: "propotionRatio",
              type: "NUMBER",
              rules: [],
            },
          ],
        },
      ],
    }, //5th step end
    // 6th Step start
    {
      title: "Overdraft Details",
      cards: [
        {
          title: "Overdraft Details",
          description: "These are thess basic details of the account",
          fields: [
            {
              // ~Note:
              // if disabled whole step is disabled.
              label: "Allowed Overdraft",
              type: "SELECT",
              key: "casaAllowMinusBalance",
              values: [
                {
                  value: "Yes",
                  label: "Enable",
                },
                {
                  value: "No",
                  label: "Disable",
                },
              ],
            },
            {
              rules: [
                {
                  required: true,
                  message: "Overdraft Limit cannot be empty ",
                },
              ],
              label: "Overdraft Limit",
              type: "NUMBER",
              max: 1000000,
              key: "casaMaxOverdraftLimit",
              defaultValue: "",
              displayCondition: (formValue) =>
                formValue.casaAllowMinusBalance === "Yes",
            },
            {
              label: "Buffer Limit",
              type: "NUMBER",
              max: 1000000,
              key: "bufferAmount",
              displayCondition: (formValue) =>
                formValue.casaAllowMinusBalance === "Yes",
            },
            {
              label: "Interest on Overdraft",
              type: "SELECT",
              key: "casaEnableInterestOnOverdraft",
              displayCondition: (formValue) =>
                formValue.casaAllowMinusBalance === "Yes",
              values: [
                {
                  value: "Yes",
                  label: "Enable",
                },
                {
                  value: "No",
                  label: "Disable",
                },
              ],
              defaultValue: "Yes",
            },

            // {
            //   label: "Recovery Percentage",
            //   type: "NUMBER",
            //   key: "recoveryPercentage",
            //   displayCondition: (formValue) =>
            //     formValue.casaAllowMinusBalance === "Yes",
            // },
          ],
        },

        {
          title: "Recovery Account",
          description: "Recovery Account",
          displayCondition: (formValue) =>
            formValue.casaAllowMinusBalance === "Yes",
          fields: [
            {
              type: "EDITABLE_TABLE",
              spec: {
                // ~Note:
                // extra feild casaStatus send as 'ACTIVE'

                fields: [
                  {
                    label: "Account Number",
                    targetKey: "accountNo",
                    key: "casaIdentification",

                    type: "STRING",
                  },
                  {
                    label: "Customer Name",
                    type: "STRING",
                    key: "customerName",
                    targetKey: "accountName",
                  },
                  {
                    label: "Recovery Percentage",
                    key: "propotion",
                    targetKey: "propotion",
                    type: "STRING",
                    isEditable: true,
                    widgetSchema: {
                      type: "NUMBER",
                      key: "propotion",
                    } as EditableWidgetSchema,
                  },

                  // ~Note : If the casaStatus is inactive make the add customer disable.
                ],
              } as any,
            },
          ],
        },
      ],
    }, //6th step end

    // ~Note:
    // cusOrganizationType : individual : 'orin', coperate: 'ORCO'
    // if (orin) take the customer name added in the first step. ///getContactbycustomerid
    // if( orco)  getKeyPerson()

    // to take contact call comon-customer getContactsByLinkPersonId(customerId: customerId , customerLinkPersonId: getKeyPerson's id)

    {
      title: "Preferences",
      description: "Add in Preferences",
      cards: [
        {
          title: "Notification Methods",
          description: "These are the basic details of the account",
          fields: [
            {
              label: "EMAIL",
              type: "CHECKBOX",
              key: "notificationTypes",
              fields: [
                {
                  label: "Contact Name",

                  key: "customerId",
                  type: "REMOTE_SELECT",
                  spec: {
                    api: (sdk: LOLCSDK) => () =>
                      sdk.CustomerService.getKeyPersonByCustomerId(156),
                    value: "name",
                    label: "name",
                  },
                },

                {
                  label: "Contact Number",
                  type: "DATA",
                  key: "contactNo",
                },
              ],
            },
          ],
        },
        {
          title: "Alerting Rules",
          description: "These are the basic details of the account",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Event Category",
                  key: "eventCategory",

                  dataType: "STRING",
                  isEditable: true,
                  widgetSchema: {
                    type: "SELECT",
                    values: [
                      {
                        value: "Transactional",
                        label: "Transactional",
                      },
                      {
                        value: "Promotional",
                        label: "Promotional",
                      },
                    ],
                  },
                },
                {
                  label: "Event",
                  dataType: "STRING",
                  isEditable: true,
                  key: "alertEvent",
                  widgetSchema: {
                    type: "REMOTE_SELECT",
                    spec: {
                      api: (sdk: LOLCSDK) => () =>
                        sdk.AlertService.getAlertEventByStatus("ACTIVE", {
                          size: 1000,
                        }),
                      transformFunction: (res: PaginatedResponse<AlertEvent>) =>
                        res.content,
                      value: "code",
                      label: "name",
                      extraFieldMappings: [
                        {
                          key: "eventId",
                          value: "id",
                        },
                      ],
                    },
                  },
                },
                {
                  label: "Limit",
                  dataType: "STRING",
                  key: "transactionLimit",
                  isEditable: true,
                  widgetSchema: {
                    type: "REMOTE_SELECT",
                    spec: {
                      api: (sdk: LOLCSDK) => (id: any) =>
                        id && sdk.AlertService.getActiveAlertLimitById(id),
                      parameters: ["eventId"],
                      value: "id",
                      label: "alertLimitName",
                    },
                  },
                },
              ],
            },

            {
              type: "CHECKBOX",
              key: "status",
            },
          ],
        },
        {
          //!Set casaIsChequeBookEnabled default value to No [Sampath's request]
          //! Auto hide all fields if casaIsChequeBookEnabled is No [Sampath's request]
          title: "Chequebook Details",
          description: "",
          fields: [
            {
              label: "Chequebook Enabled",
              type: "SELECT",
              key: "casaIsChequeBookEnabled",
              values: [
                {
                  value: "Yes",
                  label: "Enabled",
                },
                {
                  value: "No",
                  label: "Disabled",
                },
              ],
            },
            {
              label: "Cheque Type",
              type: "REMOTE_SELECT",
              key: "chequeTypeId",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.AccountService.getCommonListByStatusAndReferenceCode(
                    "CHQ_TYPE",
                    "ACTIVE"
                  ),
                value: "id",
                label: "accComnListDesc",
              },
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",

              rules: [
                { required: true, message: "Please select a Cheque Type" },
              ],
            },

            {
              label: "Chequebook Type",
              type: "REMOTE_SELECT",
              key: "chequeBookTypeId",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.ChequeBookManagementService.getChequeBookTypesByStatus(
                    "ACTIVE"
                  ),
                value: "id",
                label: "chequeBookTypeName",
              },
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",
              rules: [
                { required: true, message: "Please select a Chequebook Type" },
              ],
            },
            {
              label: "Stock Type",
              type: "REMOTE_SELECT",
              key: "chequeBookStockTypeId",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.ChequeBookManagementService.getChequebookStockTypesByStatus(
                    "ACTIVE"
                  ),

                value: "id",
                label: "chqBkStockTypeName",
                extraFieldMappings: [
                  {
                    key: "chequeBookStockTypeId",
                    value: "id",
                  },
                ],
              },
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",
            },
            {
              label: "Request Period",
              type: "TEXT_STRING",
              key: "casaAutoChequeBookRequestPeriod",
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",
            },
            {
              label: "Maximum Allowed chequebooks per request",
              type: "TEXT_STRING",
              key: "casaMaxAllowedCheckBooksPerRequest",
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",
            },
            {
              label: "No of Cheques Per Book",
              type: "NUMBER",
              key: "casaNoOfChequesPerBook",
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",
            },
            {
              label: "Auto Chequebook Request Period Type",
              type: "REMOTE_SELECT",
              key: "casaAutoChequeBookRequestPeriodFrequency",
              defaultValue: "",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.CommonService.getPeriodByStatus("ACTIVE"),
                value: "id",
                label: "id",
              },
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",
            },
            {
              label: "Auto Chequebook Request Period Length",
              type: "FORM_ROW",
              key: "casaAutoChequeBookRequestPeriod",
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",
            },
            {
              label: "Auto Chequebook Request",
              type: "CHECKBOX",
              key: "casaAutoChequeBookRequestEnabled",
              valueMap: {
                true: "Yes",
                false: "No",
              },
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",
            },

            {
              label: "Stop Request",
              type: "CHECKBOX",
              key: "casaStopRequest",
              defaultValue: "No",
              valueMap: {
                true: "Yes",
                false: "No",
              },
              displayCondition: (formValue) =>
                formValue.casaIsChequeBookEnabled === "Yes",
            },
          ],
        },
        {
          title: "Passbook Details",
          description: "These are the basic details of the account",
          fields: [
            // Note:
            // LOLC NEEDS TO KEEP THIS OPEN (INVENTORY NOT YET DEVELOPED)
            {
              label: "Passbook Number",
              type: "TEXT_STRING",
              defaultValue: "xxxxxxxx",
            },
            // Note:
            // LOLC NEEDS TO KEEP THIS OPEN
            {
              label: "Status",
              type: "SELECT",
            },
          ],
        },

        // Note: LOLC NEEDS TO KEEP THIS OPEN
        {
          title: "Sweep Instructions",
          fields: [
            {
              label: "Auto Sweep Enable",
              type: "SELECT",
            },
            {
              label: "Sweep Limit",
              type: "SELECT",
            },
            //
            {
              label: "Minimum Amount for Sweep Limit",
              type: "SELECT",
            },
            {
              label: "Period Method",
              type: "SELECT",
            },
            {
              label: "Sweep Reversal Limit",
              type: "SELECT",
            },
            {
              label: "Recurring Sweeping Enable",
              type: "SELECT",
            },
            {
              label: "Recurring Sweeping Enable",
              type: "SELECT",
            },
          ],
        },
      ],
    }, // 7th step end
    {
      title: "Card Information",
      cards: [
        {
          title: "Card Information",
          fields: [
            {
              label: "Scheme Type",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.ProductBCAService.getSchemeTypesByStatus("ACTIVE"), //ACTIVE
                value: "name",
                label: "name",
                extraFieldMappings: [
                  {
                    key: "schemeTypeId",
                    value: "id",
                  },
                ],
              },
              key: "schemeType",
              rules: [{ required: true, message: "Please select a value" }],
            },
            // Note: LOLC needs to add this to the interface.
            {
              label: "Card Type",
              key: "cardType",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.ProductBCAService.getCardTypesByStatus("ACTIVE"),
                value: "name",
                label: "name",
                extraFieldMappings: [
                  {
                    key: "cardTypeId",
                    value: "id",
                  },
                ],
              },

              rules: [{ required: true, message: "Please select a value" }],
            },

            {
              label: "Card Number - 16 Digit Number Only",
              key: "cardNumber",
              type: "CUSTOM",
              customElement: (props) => {
                const hk = (data: string) => {
                  props.form.setFieldsValue({
                    ...props.form.getFieldsValue(),
                    cardNumber: data,
                  });
                  props.onExtraFieldMapped && props.onExtraFieldMapped();
                };
                return <CardValidator setValue={hk} />;
              },
              rules: [{ required: true, message: "Enter Card Number" }],
            },

            {
              label: "Name to Appear on Card",

              key: "nameOnCard",
              type: "TEXT_STRING",
              rules: [{ required: true, message: "Please select a value" }],
            },

            {
              label: "Collection Point",

              key: "collectionPoint",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.BranchService.getOrganizationLevelByStatus("ACTIVE"),
                value: "name",
                label: "name",
                extraFieldMappings: [
                  {
                    key: "collectionPointId",
                    value: "id",
                  },
                ],
              },
              rules: [{ required: true, message: "Please select a value" }],
            },
            {
              label: "Card Fee Enabled",

              key: "cardFeeEnabled",
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
              rules: [{ required: true, message: "Please select a value" }],
            },
            {
              label: "Daily Withdrawel Cash Limit",

              key: "widrawalLimit",
              type: "TEXT_STRING",
              rules: [{ required: true, message: "Please select a value" }],
            },

            {
              label: "Card Issue Date",
              key: "cardIssuedDate",
              format: "YYYY/MM/DD",
              type: "DATE",
              rules: pastDateRule,
            },

            {
              label: "Card Expiry Date",

              key: "cardExpireDate",
              disablePreviousDates: true,
              format: "YYYY/MM/DD",
              type: "DATE",

              rules: [{ required: true, message: "Please select a value" }],
            },

            {
              label: "Foreign Transaction",

              key: "foreignTransactionEnabled",
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
              rules: [{ required: true, message: "Please select a value" }],
            },

            {
              label: "POS",

              key: "posEnabled",
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
              rules: [{ required: true, message: "Please select a value" }],
            },

            {
              label: "Transaction Blocking",

              key: "blockTransactions",
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
              rules: [{ required: true, message: "Please select a value" }],
            },

            {
              label: "Remarks",

              key: "remarks",
              type: "TEXTAREA",
              rules: [{ required: true, message: "Please select a value" }],
            },
          ],
        },
      ],
    },
    // New step
    {
      title: "Other",
      cards: [
        // Note: REWARD MANAGEMENT THIS NEEDS TO KEEP OPEN
        {
          title: "Indroducer Information",
          fields: [],
        },
        {
          title: "Document Upload",
          fields: [
            {
              label: "Document Type",
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.CommonService.getDocumentTypeDetailsByStatus("ACTIVE"),
                value: "documentTypeName",
                label: "documentTypeName",
              },
              key: "documentType",
            },

            {
              label: "Mandotary Indicator",
              type: "SELECT",
              key: "mandatoryStatus",
              values: [
                {
                  values: "Yes",
                  label: "Yes",
                },
                {
                  values: "No",
                  label: "No",
                },
              ],
            },
            {
              label: "Received Date",
              type: "DATE",
              key: "recievedDate",
            },

            {
              label: "Document Upload",
              type: "FORM_ROW",
              key: "documentId",
              // ~Note:
              // after uploading get result's document id and send it
              // add origin - 'casaAccount'
              // common-document-upload.fileUpload('casaAccount',"")
              //http://132.145.228.83/comn-document-upload/swagger-ui.html#/file-controller/uploadFileUsingPOST
            },

            {
              label: "Collected",
              type: "SELECT",
              key: "documentStatus",
              values: [
                {
                  value: "Received",
                  label: "Received",
                },
                {
                  value: "Not Received",
                  label: "Not Received",
                },
                {
                  value: "Removed",
                  label: "Removed",
                },
              ],
            },
          ],
        },
        {
          title: "Operation Instructions",
          // show both of these methods accounts in search model to select
          //!@Ishanka          /key-person/{tenantId}/{customerId}/all
          // getKeyPersonsBasicInfoByCustomerId
          //  !@Ishanka         /power-of-attorney/{tenantId}/{customerId}/all
          // getPowerOfAttorneysBasicInfoByCustomerId
          fields: [
            {
              label: "No of Signatures required",
              key: "casaNoOfSignatures",
              type: "FORM_ROW",
            },

            {
              type: "EDITABLE_TABLE",
              spec: {
                resourceUri: (sdk: LOLCSDK) => sdk.CustomerService.findById,
                key: "casaApplicantDetails",
                fields: [
                  {
                    label: "Account Number",
                    targetKey: "accountNo",
                    key: "perId",

                    type: "STRING",
                  },
                  {
                    label: "Person Id",
                    targetKey: "personId",
                    key: "perId",

                    type: "STRING",
                  },

                  {
                    label: "Name",
                    key: "perFullName",
                    targetKey: "personName",
                    type: "STRING",
                  },

                  {
                    label: "Signatures",
                    type: "TEXT_STRING",
                    targetKey: "signatureId",
                    key: "signatureId",
                  },
                  {
                    // ~Note:
                    //FOR ONE CUSTOMER ITS 100% , IF MORE CUSTOMERS ADDED THE TOTAL OF PORTIONS SHOULD BE 100
                    label: "PORTION",
                    targetKey: "proportion",
                    key: "proportion", //
                    type: "NUMBER",
                    isEditable: true,
                    widgetSchema: {
                      type: "NUMBER",
                      key: "proportion",
                    } as EditableWidgetSchema,
                  },
                ],
              },
            } as any,

            {
              label: "Amount From ",

              type: "FORM_ROW",
              key: "casaAmountFrom",
            },
            {
              label: "Amount To",

              type: "FORM_ROW",
              key: "casaAmountTo",
            },
            {
              label: "Signatures",

              type: "FORM_ROW",
              key: "signatureId",
              api: (sdk: LOLCSDK) =>
                sdk.DocumentUploadService.getSignatureByCustomerId,
            },
            {
              label: "Model of Operation",
              key: "casaModelOfOperation",
              type: "SELECT",
              isEditable: true,
              widgetSchema: {
                type: "SELECT",
                key: "casaModelOfOperation",
                values: [
                  {
                    value: "Owner",
                    label: "Owner",
                  },
                  {
                    value: "Jointly",
                    label: "Jointly",
                  },
                  {
                    value: "Any Number Of Members",
                    label: "Any Number Of Members",
                  },
                ],
              } as EditableWidgetSchema,
            },
          ],
        },
        {
          // Note: lolc needs keep this open
          title: "Manual Workflow",

          fields: [
            {
              label: "Remarks",
              key: "casaOtherRemarks",
              type: "SELECT",
            },
          ],
        },
        {
          title: "Remarks On Account",
          fields: [
            {
              label: "Remarks",
              key: "casaOtherRemarks",
              type: "TEXTAREA",
            },
          ],
        },
      ],
    }, //9th step end
    {
      title: "Charges",
      cards: [
        {
          title: "Account Opening",
          fields: [
            {
              label: "Account Opening User",
              type: "TEXT_STRING",
              // api: "", //user-profile/{tenantId}/user-id/{userId}
              // value: "userName",
            },

            {
              label: "Total Charges",
              type: "TEXT_STRING",
            },

            {
              label: "Charge Type Name",

              noSend: true,
              type: "TEXT_STRING",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.ProductBCAService.getChargeAmountDetails("", "FEAO", 0),
                // Note:  chargebaseamount ===0 FOR NOW 15/07/2020
                //subProductId: string(FROM STEP 2), calculationfrequencycodes: string, chargebaseamount: number()
                value: "feeTypeName",
                label: "feeTypeName",
              },
            },

            {
              label: "Charge Amount",
              noSend: true,

              type: "TEXT_STRING",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.ProductBCAService.getChargeAmountDetails("", "FEAO", 0),
                value: "chargeAmount",
                label: "chargeAmount",
              },
            },
          ],
        },
      ],
    }, //10th step end

    // {
    //         title:"Account Opening",
    //         card:[
    //Note: LOLC NEEDS TO KEEP THIS OPEN
    //             {
    //                 title:"Account Opening Branch",
    //                 type:"SELECT",
    //                 api:(sdk:LOLCSDK)=>sdk.BranchService.getOrganizationLevelByStatus,//ACTIVE
    //                 targetKey:""
    //             },
    //Note:: 61)LOLC NEEDS TO KEEP THIS OPEN
    //             {
    //                 title:"Service Officer",
    //                 type:"SELECT",
    // api:(sdk:LOLCSDK)=>sdk.BranchService.getOrganizationLevelByStatus(ACTIVE),
    //                 targetKey:""
    //             }
    //         ]
    // },
  ], //steps end
  apis: {
    createAccount: (SDK: LOLCSDK) => SDK.AccountService.save,
  },
}; //end
