import { FunctionSchema } from "../../../../schemas/schema";
import { LOLCSDK } from "../../../../sdk";

export const ActivateAccountSchema: FunctionSchema = {
  functionName: "Activate Account",
  module: "Account", //
  steps: [
    {
      title: "Activate Account",
      description: "",
      cards: [
        // ! Activate account pending

        // for getting pending accounts
        // pass two parameters (branch:, "CREATED" )
        // ! remove tab Activated.
        // ! rejected should be renamed as canceled status : "CANCEL"

        // ! ishanka will add new mehtod to search account (casa-account)
        {
          title: "Activate Account",
          description: "",
          fields: [
            // ! searchbar search by accountno and with the name of the openbranch (accountOpenBranchDescription)
            {
              // Remove the second filtering option button (3dots btn)
              // Remove the left hand side tickboxes.
              type: "COLLECTION",
              columns: [
                {
                  label: "Account Name",
                  key: "accountName",
                  dataType: "STRING",
                },
                //! customerSerivce.getCustomerPrimaryIdentifcation(id)
                {
                  label: "Account Number",
                  key: "casaIdentification",
                  dataType: "STRING",
                },

                {
                  label: "Customer Id",
                  key: "customerId",
                  dataType: "STRING",
                },
                {
                  label: "Status",
                  key: "status",
                  dataType: "TAG",
                },
              ],
            },
          ],
        },
      ],
    },
    //1st step customer Details
    {
      title: "Customer Details",
      cards: [
        {
          title: "Customer Details",
          description: "Here are the Customer details.",
          fields: [
            {
              //!get customer details in Applicant details findById
              // Add customer button sholud be here to add or remove customers.
              type: "COLLECTION",

              columns: [
                {
                  label: "Customer Name",
                  key: "perFullName", //findByID //perFullName is not in the Customer
                  dataType: "STRING",
                },
                {
                  label: "Customer Code",
                  key: "perCode",
                  dataType: "STRING",
                },
                {
                  label: "Date of Birth",
                  key: "perDateOfBirth",
                  dataType: "DATE",
                  format: "DD/MM/YYYY",
                },
                {
                  label: "Identification",
                  key: "customerId", // getCustomerPrimaryIdentifcation(cusId)
                  dataType: "STRING",
                },
                // no data for customer photo
                // {
                //     label: "Customer Photo",
                //     key: "",
                //     targetKey: "",
                //     noSend: true,
                // },
                {
                  label: "KYC",
                  key: "cokdKycStatus", // findById
                  dataType: "TAG",
                },

                {
                  label: "Ownership",
                  key: "casaOwnershipType", // in applicant details
                  dataType: "STRING",
                },

                {
                  label: "Tax Percentage",
                  key: "taxPercerntage", //! Appllicant details taxPercentage
                  dataType: "STRING",
                },
              ],
            },
          ],
        },
        {
          title: "Guardian Details",
          description: "These are the details of the guardian",
          fields: [
            //! getGuardians(custID)
            {
              type: "COLLECTION",
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
                  // targetKey: "guardianName",
                  dataType: "STRING",
                },

                {
                  label: "Indetifications",
                  key: "id",
                  // key: "primaryIdentificationNumber",
                  dataType: "STRING",
                },
              ],
            },
          ],
        },
        // only a display
        {
          title: "Disability Notes",
          description: "This is required if the customer’s disabled",
          fields: [
            {
              label: "Is Visiting this user required?",
              type: "SELECT",
              key: "customerVisitRequired",
              readOnly: true,
            },
            {
              label: "How many visits per week?",
              type: "NUMBER",
              key: "noOfVisitPerPeriod",
              readOnly: true,
              displayCondition: (local, global) => {
                return local.customerVisitRequired !== "No";
              },
            },
          ],
        },

        {
          title: "Nominee Details",
          description: "These are the details of the Nominees",
          fields: [
            //getNomineesByCustomerId(customerId)

            {
              type: "COLLECTION",

              columns: [
                {
                  label: "Nominee Name",
                  key: "perFullName",

                  dataType: "STRING",
                },
                {
                  label: "Nominee Code",
                  key: "perCode",

                  dataType: "STRING",
                },

                {
                  label: "Identification",
                  key: "pidtIdentificationNo",

                  dataType: "STRING",
                },
                {
                  label: "Relationships",
                  key: "curRelationshipTypeDesc",

                  dataType: "STRING",
                },
                {
                  label: "Portion",
                  key: "curProportionForTheNominee",
                  dataType: "STRING",
                },
              ],
            },
          ],
        },
      ],
    },
    //2nd step product details
    {
      title: "Product Details",
      description: "Here are the details of the Product",

      cards: [
        {
          title: "Product Details",
          description: "Here are the details of the Product",
          fields: [
            {
              label: "Account Type",
              key: "accountType",
              type: "TEXT_STRING",
            },

            {
              label: "Main Product",
              key: "name",
              type: "TEXT_STRING",
              //  search by casaProductId (in account data) and get the product name
              // sdk.productBCAService.getProductById(casaProductId)
            },
            {
              label: "Sub Product",
              key: "name",
              type: "TEXT_STRING",
              // search by id (in previous step data) and get the sub product name
              // sdk.productBCAService.getSubProductsById(casaProductId)
            },
          ],
        },
      ],
    },
    //3rd step statement details
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
              key: "id",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Account Name",
              key: "accountName",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Account Nickname",
              key: "nickname",
              type: "TEXT_STRING",
              readOnly: true,
            },

            {
              label: "Scheme Type",
              key: "schemeCode",
              type: "TEXT_STRING",
              readOnly: true,
            },

            {
              label: "Account Number",
              key: "casaIdentification",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Secondary Account Number",
              key: "secondaryIdentification",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Anticipated Value",
              key: "anticipatedValue",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Anticipated Value Frequency",
              key: "anticipatedFrequency",
              type: "TEXT_STRING",
              readOnly: true,
            },
            // pass casaCurrencyCode to the (common-currency).getCurrencyByCode
            {
              label: "Account Currency",
              key: "currencyCode",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Account Description",
              key: "accountDescription",
              type: "TEXTAREA",
              readOnly: true,
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
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Foreign Currency",
              key: "otherCurrencyTransactionAllowed",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Minor Restriction",
              key: "restrictedStatus",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Minor Restriction Type",
              key: "minorAccountStatus",
              type: "TEXT_STRING",
              readOnly: true,
              displayCondition: (local, global) => {
                return local.restrictedStatus !== "No";
              },
            },
          ],
        },
        // Account Purpose
        {
          title: "Account Purpose",
          description: "These are the basic details of the account",
          fields: [
            {
              label: "",
              key: "description",
              type: "CHECKBOX",
              readOnly: true,
            },
            {
              label: "Primary Indicator",
              key: "primaryIndicator",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Remarks on Additional Account Opening",
              key: "casaRemarkForAdditionalAccount", //! Account Remarks
              type: "TEXTAREA",
              readOnly: true,
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
              type: "TEXT_STRING",
              label: "",
            },
            {
              key: "primaryIndicator",
              type: "TEXT_STRING",
              label: "",
            },
            {
              label: "Other",
              key: "sourceOfFundRemark",
              type: "TEXTAREA",
            },
          ],
        },
      ],
    },
    // 4th step statement details
    {
      title: "Statement Details",
      description: "",
      cards: [
        {
          title: "Statement Details",
          description: "",
          fields: [
            //!getPostingTypeById(type)
            {
              label: "",
              type: "TEXT_STRING",
              key: "accComnListDesc",
            },
            {
              label: "Frequency",
              type: "TEXT_STRING",
              key: "frequencyName",
            },

            {
              label: "Delivery Method",
              type: "TEXT_STRING",
              key: "accComnListDesc",
            },
          ],
        },
      ],
    },
    //5th step interest details
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
              key: "enableDisableInterestCalculation",
              type: "TEXT_STRING",
              readOnly: true,
            },

            {
              label: "Special Rate",
              key: "specialRate", //!in account data
              type: "NUMBER",
              readOnly: true,
              displayCondition: (local, global) =>
                local.enableDisableInterestCalculation.toLowerCase() ===
                  "yes" && local.specialRate !== null,
            },

            {
              label: "Interest Calculation Start Date",
              key: "interestCalculationStartDate",
              format: "YYYY/MM/DD",
              type: "DATE",
              readOnly: true,
              displayCondition: (formValue) =>
                formValue.casaEnableDisableInterestCalculation === "Yes" &&
                formValue.customizeInterestDate === "ACTIVE",
            },
          ],
        },

        // Card - Credit Interest Benefiary Details

        {
          title: "Credit Interest Beneficiary Details",
          description: "Credit Interest Beneficiary Details",
          //! check otherPostingMethod === "External"|| "Internal"
          fields: [
            {
              type: "COLLECTION",
              label: "Internal Party",
              columns: [
                {
                  label: "Payment Mode",
                  key: "paymentModeDescription",

                  dataType: "STRING",
                },

                {
                  label: "Account Number",
                  key: "crebitInterestPostAccount",

                  dataType: "STRING",
                },
                {
                  label: "Benefiary Name",
                  key: "beneficiaryName",

                  dataType: "STRING",
                },

                {
                  label: "Portion",
                  key: "propotionRatio",
                  dataType: "STRING",
                },
              ],
            },
            // !if otherPostingMethod ===External add data to the external Internal add to the Internal Table

            {
              type: "COLLECTION",
              label: "External Party",
              columns: [
                {
                  label: "Financial Institution",
                  key: "bankName",
                  dataType: "STRING",
                },

                {
                  label: "Branch Name",
                  key: "bankBranchName",
                  dataType: "STRING",
                },

                {
                  label: "Name",
                  key: "beneficiaryName",
                  dataType: "STRING",
                },
                //   {
                //     label: "Payment Mode Id",
                //     // targetKey: "paymentModeId",
                //     key: "paymentModeId",
                //     dataType: "STRING",
                //     hidden: true,
                //   },
                {
                  label: "Payment Mode",
                  // targetKey: "paymentModeDescription",
                  key: "paymentModeDescription",
                  dataType: "STRING",
                },
                //   {
                //     label: "Payment Send Mode Id",
                //     // targetKey: "paymentSendMethodId",
                //     key: "paymentSendMethodId",
                //     dataType: "STRING",
                //     hidden: true,
                //   },
                {
                  label: "Payment Send Mode",
                  key: "paymentSendMethod",
                  dataType: "STRING",
                },
                {
                  label: "Account Number",
                  key: "crebitInterestPostAccount",
                  dataType: "STRING",
                },
                {
                  label: "Portion",
                  key: "propotionRatio",
                  dataType: "STRING",
                },
              ],
            },
          ],
        },
        {
          title: "Debit Interest Posting Details",
          description: "Debdit Interest Posting Details",

          fields: [
            {
              type: "COLLECTION",
              label: "",
              columns: [
                {
                  label: "Payment Mode",
                  key: "paymentModeDescription",
                  dataType: "STRING",
                },
                {
                  label: "Benefiary Name",
                  key: "beneficiaryName",
                  dataType: "STRING",
                },

                {
                  label: "Type",
                  key: "debitInterestPostType",
                  dataType: "STRING",
                },

                {
                  label: "Portion",
                  key: "propotionRatio",
                  dataType: "STRING",
                },
              ],
            },
          ],
        },
      ],
    },
    // 6th step overdaraft details
    {
      title: "Overdraft Details",
      cards: [
        {
          title: "Overdraft Details",
          description: "These are the basic details of the account",
          fields: [
            {
              label: "Allowed Overdraft",
              type: "TEXT_STRING",
              key: "allowMinusBalance",
              readOnly: true,
            },
            {
              label: "Overdraft Limit",
              type: "TEXT_STRING",
              key: "maximumOverdraftLimit",
              readOnly: true,
              displayCondition: (local, global) =>
                local.allowMinusBalance.toLowerCase() === "yes",
            },
            {
              label: "Buffer Limit",
              type: "NUMBER",
              key: "bufferAmount",
              readOnly: true,
              displayCondition: (local, global) =>
                local.allowMinusBalance.toLowerCase() === "yes",
            },
            {
              label: "Interest on Overdraft",
              type: "TEXT_STRING",
              key: "enableInterestOnOverdraft",
              readOnly: true,
              displayCondition: (local, global) =>
                local.allowMinusBalance.toLowerCase() === "yes",
            },

            // {
            //   label: "Recovery Percentage",
            //   type: "NUMBER",
            //   key: "recoveryPercentage",
            // },
          ],
        },
        // ! recovery account data in overdraft details array
        {
          title: "Recovery Account",
          description: "Recovery Account",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Account Number",
                  key: "accountNo",
                  dataType: "STRING",
                },
                // customerId
                // AccountService.findById(customerId)
                {
                  label: "Customer Name",
                  dataType: "STRING",
                  key: "accountName",
                },
                // recovery percentage check the mapping
                {
                  label: "Recovery Percentage",
                  key: "propotion",
                  dataType: "STRING",
                },
              ],
            },
          ],
        },
      ],
    },
    // 7th step preferences
    {
      title: "Preferences",
      description: "Add in Preferences",

      cards: [
        {
          title: "Notification Methods",
          description: "These are the basic details of the account",
          fields: [
            // ! getAlertTypeByCode(notificationTypes)
            {
              label: "EMAIL",
              type: "CHECKBOX",
              key: "notificationTypes",
            },
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Contact Name",
                  key: "perPreferredName",
                  dataType: "STRING",
                },

                {
                  label: "Contact Number",
                  dataType: "STRING",
                  key: "pconValue",
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
                },
                {
                  label: "Event",
                  dataType: "STRING",
                  key: "alertEvent",
                },
                {
                  label: "Limit",
                  dataType: "STRING",
                  key: "transactionLimit",
                },
              ],
            },
          ],
        },

        {
          title: "Chequebook Details",
          description: "",
          fields: [
            {
              label: "Chequebook Enabled",
              type: "TEXT_STRING",
              key: "isChequeBookEnabled",
            },
            {
              label: "Cheque Type",
              type: "TEXT_STRING",
              key: "chequeTypeId",
              // displayCondition: (formValue) =>
              //   formValue.isChequeBookEnabled === "YES",
              //
              // spec: {
              //   //TODO /comn-list/{tenantId}/{commonListId}// pass the chequeTypeId and get the name
            },

            {
              label: "Chequebook Type",
              type: "TEXT_STRING",
              key: "chequeBookTypeId",
              // displayCondition: (formValue) =>
              // formValue.isChequeBookEnabled === "Yes",
              // use this method to get type getChequeBookTypeByID(chequeBookTypeId)
              // spec: {
              //   api: (sdk: LOLCSDK) => () =>
              //     sdk.ChequeBookManagementService.getChequeBookTypeById(
              //       "ACTIVE"
              //     ),
              //   value: "id",
              //   label: "chequeBookTypeName",
              // },
            },
            {
              label: "Stock Type",
              type: "TEXT_STRING",
              key: "chequeBookStockTypeId", //--save chequeBookStockTypeId
              // displayCondition: (formValue) =>
              // formValue.isChequeBookEnabled === "Yes",
              // use this method to get getChequebookStockTypeById(chequeBookStockTypeId)
              // spec: {
              //   api: (sdk: LOLCSDK) => () =>
              //     sdk.ChequeBookManagementService.getChequebookStockTypeById(
              //       "ACTIVE"
              //     ),

              //   value: "id",
              //   label: "chqBkStockTypeName",
              // },
            },

            {
              label: "Request Period",
              type: "TEXT_STRING",
              key: "autoChequeBookRequestPeriod",
              // displayCondition: (formValue) =>
              // formValue.isChequeBookEnabled === "YES",
            },
            {
              label: "Maximum Allowed chequebooks per request",
              type: "TEXT_STRING",
              key: "maxAllowedCheckBooksPerRequest",
              // displayCondition: (formValue) =>
              // formValue.isChequeBookEnabled === "Yes",
            },
            // common-common getPeriodById(casaAutoChequeBookRequestPeriodFrequencyId)

            {
              label: "Auto Chequebook Request Period Type",
              type: "TEXT_STRING",
              key: "autoRenewalPeriodType",
              // displayCondition: (formValue) =>
              // formValue.isChequeBookEnabled === "Yes",
              // spec: {
              //   api: (sdk: LOLCSDK) => () => sdk.CommonService.getPeriodById,

              //   value: "id",
              //   label: "name",
              // },
            },

            {
              label: "Auto Chequebook Request",
              type: "CHECKBOX",
              key: "autoChequeBookRequestEnabled",
            },

            {
              label: "Stop Request ",
              type: "CHECKBOX",
              key: "stopRequest",
            },
          ],
        },
      ],
    },
    //8th step card information
    {
      title: "Card Information",
      cards: [
        //! in AccountData->isATMEnabled==="Yes" show this
        {
          title: "Card Information",
          fields: [
            {
              label: "Scheme Type",
              type: "TEXT_STRING",
              key: "schemeType",
              readOnly: true,
            },
            {
              label: "Card Type",
              key: "cardType",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Card Number",
              key: "cardNumber",
              type: "TEXT_STRING",
              readOnly: true,
            },

            {
              label: "Name to Appear on Card",
              key: "nameOnCard",
              type: "TEXT_STRING",
              readOnly: true,
            },

            //!cardCollectionType ==="post" no collection point
            //! cardCollectionType ==="branch"   getBranchById(collectionPointId)
            {
              label: "Collection Point",
              // getBranchById(collectionPointId) to display
              key: "collectionPoint",
              type: "TEXT_STRING",
              readOnly: true,
              // spec: {
              //   api: (sdk: LOLCSDK) => () => sdk.BranchService.getBranchById, //collectionPointId
              //   value: "name",
              //   label: "name",
              // },
            },
            {
              label: "Card Fee Enabled",
              key: "cardFeeEnabled",
              type: "TEXT_STRING",
              readOnly: true,
            },
            {
              label: "Daily Withdrawel Cash Limit",
              key: "widrawalLimit",
              type: "TEXT_STRING",
              readOnly: true,
            },

            {
              label: "Card Issue Date",
              key: "cardIssuedDate",
              format: "YYYY/MM/DD",
              type: "DATE",
              readOnly: true,
            },

            {
              label: "Card Expiry Date",
              key: "cardExpireDate",
              format: "YYYY/MM/DD",
              type: "DATE",
              readOnly: true,
            },

            {
              label: "Foreign Transaction",
              key: "foreignTransactionEnabled",
              type: "TEXT_STRING",
              readOnly: true,
            },

            {
              label: "POS",
              key: "posEnabled",
              type: "TEXT_STRING",
              readOnly: true,
            },

            {
              label: "Transaction Blocking",
              key: "blockTransactions",
              type: "TEXT_STRING",
              readOnly: true,
            },

            {
              label: "Remarks",
              key: "remarks",
              type: "TEXTAREA",
              readOnly: true,
            },
          ],
        },
      ],
    },
    // 9th step other
    {
      title: "Other",
      cards: [
        // TODO ui change

        // document upload post request

        {
          title: "Document Upload",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Document Type",
                  dataType: "STRING",
                  key: "documentTypeDescription",
                },
                {
                  label: "Document Name",
                  dataType: "STRING",
                  key: "documentTypeCode",
                },
                {
                  label: "Mandetory Indicator",
                  dataType: "STRING",
                  key: "mandatoryIndicator",
                },
                {
                  label: "Status",
                  dataType: "STRING",
                  key: "status",
                },
                {
                  label: "Received Date",
                  dataType: "STRING",
                  key: "createdDate",
                },
              ],
            },
          ],
        },

        {
          title: "Operation Instructions",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Amount From ",
                  dataType: "STRING",
                  key: "amountFrom",
                },
                {
                  label: "Amount To",
                  dataType: "STRING",
                  key: "amountTo",
                },
                // ! @Ishanka add this method
                // http://132.145.228.83/comn-document-upload/signature-detail/AnRkr/signatureId

                //! signatureType ==="Url" get signatureId,origin and pass to this method
                // http://132.145.228.83/comn-document-upload/swagger-ui.html#/file-controller/documentDetailsUsingGET
                // {
                //   label: "Signatures",
                //   dataType: "STRING",
                //   key: "signatureId",
                // },
                {
                  label: "Model of Operation",
                  key: "modeOfOperation",
                  dataType: "STRING",
                },
                {
                  label: "No of Signatures required",
                  key: "noOfSignature",
                  dataType: "STRING",
                },
              ],
            },

            {
              type: "COLLECTION",

              columns: [
                {
                  label: "Account Number",
                  key: "accountNo",
                  dataType: "STRING",
                },

                {
                  label: "Name",
                  key: "personName",
                  dataType: "STRING",
                },

                {
                  label: "PORTION",

                  key: "proportion",
                  dataType: "STRING",
                },
              ],
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
    },
    // 10th step charges

    {
      title: "Charges",
      cards: [
        {
          title: "Activate Account",
          description: "",
          fields: [
            {
              type: "SELECT",
              label: "Status Update",
              values: [
                {
                  value: "approve",
                  label: "Approve",
                },

                {
                  value: "cancel",
                  label: "Cancel",
                },
              ],
            },
            // ! get the logged in user
            {
              label: "Account Opening User",
              type: "TEXT_STRING",
              key: "",
              // spec: {
              //     api: (sdk: LOLCSDK) => () =>
              //       sdk.ProductBCAService.getChargeAmountDetails("FEAO", "", 0),
              //     //subProductId: string, calculationfrequencycodes: string, chargebaseamount: number
              //     value: "",
              //     label: "",
              //   },
            },

            {
              label: "Total Charges",
              type: "TEXT_STRING",
              // Total amount of charges
            },

            {
              label: "Charge Type Name",
              // api: (sdk: LOLCSDK) => () =>
              //     sdk.ProductBCAService.getChargeAmountDetails("FEAA", "subProductId", 0),
              key: "feeTypeCode",
              type: "TEXT_STRING",
            },
            {
              label: "Charge Amount",
              key: "chargeAmount",
              type: "TEXT_STRING",
            },
            // in casaRemarks
            // {
            //   label: "Notes",
            //   key: "casaOtherRemarks",
            //   type: "TEXT_STRING",
            // },

            {
              label: "Cancelation Remarks",
              key: "",
              type: "TEXTAREA",
            },
            //!logged in user
            {
              label: "Cancelled User",
              type: "TEXT_STRING",
            },
            //!server date
            {
              label: "Cancelled Date",
              type: "DATE", //server date
            },
          ],
        },
        {
          title: "Are you sure you want to Activate this account?",
          description: "Result of this will activate the account ",
          fields: [],
        },
      ],
    },
  ],
  apis: {
    // if selected approve
    activateAccount: (SDK: LOLCSDK) => SDK.AccountService.activateAccount,
    // if selected cancel
    cancelAccount: (SDK: LOLCSDK) => SDK.AccountService.cancelAccount,
    // hasApproval: "cancel";
    // note: note of cancelation remarks;
    //if selected rejected
  },
};
