import { FunctionSchema } from "../../../schemas/schema";
import { LOLCSDK } from "../../../sdk";

export const DisplaySchema: FunctionSchema = {
  functionName: "Display",
  module: "Account", //
  steps: [
    {
      title: "Activate Account",
      description: "",
      cards: [
        {
          title: "Activate Account",
          description: "",
          fields: [
            {
              // Remove the second filtering option button (3dots btn)
              // Remove the left hand side tickboxes.
              type: "COLLECTION",
              columns: [
                {
                  label: "Account Name",
                  key: "casaAccountName",
                  dataType: "STRING",
                },
                //! customerSerivce.getCustomerPrimaryIdentifcation(id)
                {
                  label: "Account Number",
                  key: "casaIdentification",
                  dataType: "STRING",
                },

                {
                  label: "NIC",
                  key: "perCode",
                  dataType: "STRING",
                },
                {
                  label: "Customer Id",
                  key: "casaCustomerId",
                  dataType: "STRING",
                },
                {
                  label: "Status",
                  key: "casaAccountStatus",
                  dataType: "STRING",
                },
              ],
              //   spec: {
              //     //! @Ishanka need to add parameters to this getAccountDetailsByStatus
              //     resourceUri: (sdk: LOLCSDK) =>
              //       sdk.AccountService.getAccountDetailsByStatus, //"CREATED",
              //   },
            },
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Account Name",
                  key: "casaAccountName",
                  dataType: "STRING",
                },
                //! customerSerivce.getCustomerPrimaryIdentifcation(id)
                {
                  label: "Account Number",
                  key: "casaIdentification",
                  dataType: "STRING",
                },
                //! need to add to the interface
                {
                  label: "NIC",
                  key: "perCode",
                  dataType: "STRING",
                },
                {
                  label: "Customer Id",
                  key: "casaCustomerId",
                  dataType: "STRING",
                },
                {
                  label: "Status",
                  key: "casaAccountStatus",
                  dataType: "STRING",
                },
              ],
              //   spec: {
              //     //! @Ishanka need add parameters to this getAccountDetailsByStatus
              //     resourceUri: (sdk: LOLCSDK) =>
              //       sdk.AccountService.getAccountDetailsByStatus, //"ACTIVE",
              //   },
            },
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Account Name",
                  key: "casaAccountName",
                  dataType: "STRING",
                },
                //! customerSerivce.getCustomerPrimaryIdentifcation(id)
                {
                  label: "Account Number",
                  key: "casaIdentification",
                  dataType: "STRING",
                },
                //! need to add to the interface
                {
                  label: "NIC",
                  key: "perCode",
                  dataType: "STRING",
                },
                {
                  label: "Customer Id",
                  key: "casaCustomerId",
                  dataType: "STRING",
                },
                {
                  label: "Status",
                  key: "casaAccountStatus",
                  dataType: "STRING",
                },
              ],
              //   spec: {
              //     //! @Ishanka need add parameters to this getAccountDetailsByStatus
              //     resourceUri: (sdk: LOLCSDK) =>
              //       sdk.AccountService.getAccountDetailsByStatus, //"REJECTED",
              //   },
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
          description: "Add an Existing or New Customer",
          fields: [
            {
              // Add customer button sholud be here to add or remove customers.
              type: "COLLECTION",

              columns: [
                {
                  label: "Customer Name",
                  key: "customerName",
                  dataType: "STRING",
                },
                {
                  label: "Customer Code",
                  key: "customerCode", //! customer code is not in account data
                  dataType: "STRING",
                },
                {
                  label: "Date of Birth",
                  key: "perDateOfBirth",
                  dataType: "DATE",
                  format: "DD/MM/YYY",
                },
                {
                  label: "Identification",
                  key: "customerId",
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
                  key: "kycStatus",
                  dataType: "TAG",
                },

                {
                  label: "Ownership",
                  key: "ownershipType",
                  dataType: "STRING",
                  // widgetSchema: {
                  //   type: "SELECT",
                  //   values: [
                  //     {
                  //       value: "SOLE OWNER",
                  //       label: "SOLE OWNER",
                  //     },
                  //     {
                  //       value: "JOINT AND FIRST",
                  //       label: "JOINT AND FIRST",
                  //     },
                  //     {
                  //       value: "JOINT AND OTHER",
                  //       label: "JOINT AND OTHER",
                  //     },
                  //     {
                  //       value: "DELIGATE",
                  //       label: "DELIGATE",
                  //     },
                  //   ],
                  // },
                },

                {
                  label: "Tax Percentage",
                  key: "taxPercerntage", //! taxPercentage is not in account data
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
            // ! displaying the guardians of the account
            // in getAccountByAccountNo
            // "guardianDetail": [
            // {
            //     "id": 970827,
            //     "version": 0,
            //     "tenantId": "AnRkr",
            //     "guardianId": 394,
            //     "status": "ACTIVE",
            //     "createdUser": "udarali",
            //     "createdDate": "2020-07-13T15:21:02.000+0000"
            //  }
            //! GEtting the guardianByID method ---pending

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
              spec: {
                resourceUri: (sdk: LOLCSDK) => sdk.CustomerService.getGuardians,
                key: "cusRelationships",
              },
            },
          ],
        },
        // only a display
        {
          title: "Disbale Notes",
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
            },
          ],
        },
        {
          title: "Nominee Details",
          description: "These are the details of the Nominees",
          fields: [
            {
              type: "EDITABLE_TABLE",

              spec: {
                resourceUri: (sdk: LOLCSDK) => sdk.CustomerService.findById, //   "customerId": 373,

                searchNomineeApi: (sdk: LOLCSDK) => sdk.CustomerService,
                key: "casaNomineeDetails",
                // selectorFunction: (relations: CusRelationship[]) => {
                //   return relations.filter(
                //     (relation) => relation.curNomineeStatus === "YES"
                //   );
                // },

                fields: [
                  {
                    label: "Nominee Name",
                    key: "perOtherName",

                    dataType: "STRING",
                  },
                  {
                    label: "Nominee Code",
                    key: "perCode",

                    dataType: "STRING",
                  },
                  //   {
                  //     label: "Nominee Status",
                  //     key: "curNomineeStatus",

                  //     dataType: "STRING",
                  //   },
                  //   {
                  //     label: "Customer Id",
                  //     key: "casaCustomerId",

                  //     dataType: "STRING",
                  //   },
                  //   {
                  //     label: "Nominee Id",
                  //     key: "perId",

                  //     dataType: "STRING",
                  //   },
                  {
                    label: "Identification",
                    key: "perId",

                    dataType: "STRING",
                  },
                  {
                    label: "Relationships",
                    key: "curRelationshipTypeDesc",

                    dataType: "STRING",
                    noSend: true,
                  },
                  {
                    label: "Tax Percentage",
                    key: "casaPropotionRatio",
                  },
                ],
              },
            } as any,
          ],
        },
      ],
    },
    //2nd step product details
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
              key: "casaAccountType",
              type: "TEXT_STRING",
            },

            {
              label: "Main Product",
              key: "name",
              type: "TEXT_STRING",
              // ! search by casaProductId (in account data) and get the product name
              // sdk.productBCAService.getProductById(casaProductId)
            },
            {
              label: "Choose a Sub Product",
              key: "name",
              type: "TEXT_STRING",
              // ! search by id (in previous step data) and get the sub product name
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
            },
            {
              label: "Account Name",
              key: "accountName",
              type: "TEXT_STRING",
            },
            {
              label: "Account Nickname",
              key: "nickName",
              type: "TEXT_STRING",
            },

            {
              label: "Scheme Type",
              key: "schemeCode",
              type: "TEXT_STRING",
            },

            {
              label: "Account Number",
              key: "casaIdentification",
              type: "TEXT_STRING",
            },
            {
              label: "Secondary Account Number",
              key: "secondaryIdentification",
              type: "TEXT_STRING",
            },
            {
              label: "Anticipated Value",
              key: "anticipatedValue",
              type: "TEXT_STRING",
            },
            {
              label: "Anticipated Value Frequency",
              key: "anticipatedFrequency",
              type: "TEXT_STRING",
            },
            // pass casaCurrencyCode to the (common-currency).getCurrencyByCode
            {
              label: "Account Currency",
              key: "currencyCode",
              type: "TEXT_STRING",
            },
            {
              label: "Account Description",
              key: "accountDescription",
              type: "TEXTAREA",
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
            },
            {
              label: "Foreign Currency",
              key: "otherCurrencyTransactionAllowed",
              type: "TEXT_STRING",
            },
            {
              label: "Minor Restriction",
              key: "casaRestrictedStatus",
              type: "TEXT_STRING",
            },
            {
              label: "Minor Restriction Type",
              key: "casaMinorAccountStatus",
              type: "TEXT_STRING",
            },
          ],
        },
        // Account Purpose
        {
          title: "Account Purpose",
          description: "These are the basic details of the account",
          fields: [
            // ! --pending  purposeDetails is not in account data
            // ToDO: ishanka needs to add purposeDetails to the sdk
            {
              label: "",
              key: "description",
              type: "CHECKBOX",
            },
            {
              label: "Primary Indicator",
              key: "primaryIndicator",
              type: "TEXT_STRING",
            },
            {
              label: "Remarks on Additional Account Opening",
              key: "casaRemarkForAdditionalAccount",
              type: "TEXTAREA",
            },
          ],
        },
        // Source of Funds
        {
          title: "Source of Funds",
          description: "These are the basic details of the account",
          fields: [
            // TODO: ishanka needs to add source of funds to the account data
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
              key: "otherRemarks",
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
        //TODO add statement detauls to the interface
        {
          title: "Statement Details",
          description: "",
          fields: [
            {
              label: "",
              type: "REMOTE_MULTI_SELECT",
              key: "typeDescription",
              spec: {
                api: (sdk: LOLCSDK) => sdk.AccountService.getStatementTypes,
                value: "id",
                label: "accComnListDesc",
              },
            },
            {
              label: "Frequency",
              type: "TEXT_STRING",
              key: "deliveryFrequencyDesc",
            },
            {
              label: "Delivery Method",
              type: "TEXT_STRING",
              key: "deliveryMethodDescription",
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
              key: "casaEnableDisableInterestCal",
              type: "TEXT_STRING",
            },

            {
              label: "Special Rate",
              key: "specialRate",
              type: "NUMBER",
            },

            {
              label: "Interest Calculation Start Date",
              key: "casaInterestCalculationStartDate",
              format: "YYYY/MM/DD",
              type: "DATE",
            },
          ],
        },

        {
          title: "Credit Interest Posting Details",
          description: "Credit Interest Posting Details",

          fields: [
            {
              label: "Posting Method",
              key: "otherPostingMethod",
              type: "TEXT_STRING",
            },

            {
              label: "Posting Type",
              key: "crebitInterestPostType",
              type: "TEXT_STRING",
            },
          ],
        },
        // Card - Credit Interest Benefiary Details
        // TODO add internal party to the interface
        {
          title: "Credit Interest Beneficiary Details",
          description: "Credit Interest Beneficiary Details",

          fields: [
            {
              type: "EDITABLE_TABLE",
              label: "Internal Party",
              spec: {
                fields: [
                  {
                    label: "Payment Mode",
                    key: "paymentModeDescription",

                    type: "STRING",
                  },

                  {
                    label: "Account Number",
                    key: "crebitInterestPostAccount",

                    type: "STRING",
                  },
                  {
                    label: "Benefiary Name",
                    key: "beneficiaryName",

                    type: "STRING",
                  },

                  {
                    label: "Portion",
                    key: "propotionRatio",
                    type: "STRING",
                  },
                ],
              } as any,
            },
            {
              // TODO add external party to the interface
              type: "EDITABLE_TABLE",
              label: "External Party",
              spec: {
                resourceUri: (sdk: LOLCSDK) => sdk.CustomerService.findById,

                fields: [
                  {
                    label: "Financial Institution",
                    key: "bankName",
                    type: "STRING",
                  },

                  {
                    label: "Branch Name",
                    key: "bankBranchName",
                    type: "STRING",
                  },

                  {
                    label: "Name",
                    key: "beneficiaryName",
                    type: "STRING",
                  },
                  //   {
                  //     label: "Payment Mode Id",
                  //     // targetKey: "paymentModeId",
                  //     key: "paymentModeId",
                  //     type: "STRING",
                  //     hidden: true,
                  //   },
                  {
                    label: "Payment Mode",
                    // targetKey: "paymentModeDescription",
                    key: "paymentModeDescription",
                    type: "STRING",
                  },
                  //   {
                  //     label: "Payment Send Mode Id",
                  //     // targetKey: "paymentSendMethodId",
                  //     key: "paymentSendMethodId",
                  //     type: "STRING",
                  //     hidden: true,
                  //   },
                  {
                    label: "Payment Send Mode",
                    key: "paymentSendMethod",
                    type: "STRING",
                  },
                  {
                    label: "Account Number",
                    key: "crebitInterestPostAccount",
                    type: "STRING",
                  },
                  {
                    label: "Portion",
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
          // TODO add posting details to the inreface
          fields: [
            {
              label: "Posting Methods",
              type: "SELECT",
              key: "debitInterestPostType",
            },

            {
              type: "EDITABLE_TABLE",
              label: "",
              spec: {
                fields: [
                  {
                    label: "Payment Mode",
                    key: "paymentModeDescription",
                    type: "STRING",
                  },
                  {
                    label: "Benefiary Name",
                    key: "beneficiaryName",
                    dataType: "STRING",
                  },

                  {
                    label: "Type",
                    key: "type",
                    dataType: "STRING",
                  },

                  {
                    label: "Portion",
                    key: "portion",
                    dataType: "STRING",
                  },
                ],
              } as any,
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
              key: "casaAllowMinusBalance",
            },
            {
              label: "Overdraft Limit",
              type: "TEXT_STRING",
              key: "casaMaxOverdraftLimit",
            },
            {
              label: "Buffer Limit",
              type: "NUMBER",
              key: "bufferAmount",
            },
            {
              label: "Interest on Overdraft",
              type: "SELECT",
              key: "casaAllowInterestOnOverdraft",
            },

            {
              label: "Recovery Percentage",
              type: "NUMBER",
              key: "recoveryPercentage",
            },
          ],
        },

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
                  type: "STRING",
                },
                // customerId
                // AccountService.findById(customerId)
                {
                  label: "Customer Name",
                  type: "STRING",
                  key: "perPrefferedName",
                },
                {
                  label: "Portion",
                  key: "propotion",
                  type: "STRING",
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
      // TODO add notification types to the inreface
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
                  type: "TEXT_STRING",
                },

                {
                  label: "Contact Number",
                  type: "TEXT_STRING",
                  key: "contactNo",
                },
              ],
            },
          ],
        },
        {
          title: "Alerting Rules",
          description: "These are the basic details of the account",
          // TODO add event category to the interface
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

              //
              // spec: {
              //   //TODO /comn-list/{tenantId}/{commonListId}// pass the chequeTypeId and get the name
              //   api: (sdk: LOLCSDK) => () =>
              //     sdk.AccountService.getCommonListByStatusAndReferenceCode(
              //       "CHQ_TYPE",
              //       "ACTIVE"
              //     ),
              //   value: "accComnListDesc",
              //   label: "accComnListDesc",
              // },
            },

            {
              label: "Chequebook Type",
              type: "TEXT_STRING",
              key: "chequeBookTypeId",
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
              key: "casaAutoChequeBookRequestPeriod",
            },
            {
              label: "Maximum Allowed chequebooks per request",
              type: "TEXT_STRING",
              key: "casaMaxAllowedCheckBooksPerRequest",
            },
            // common-common getPeriodById(casaAutoChequeBookRequestPeriodFrequencyId)
            //! need to add
            {
              label: "Auto Chequebook Request Period Type",
              type: "TEXT_STRING",
              key: "",
              // spec: {
              //   api: (sdk: LOLCSDK) => () => sdk.CommonService.getPeriodById,

              //   value: "id",
              //   label: "name",
              // },
            },

            {
              label: "Auto Chequebook Request",
              type: "CHECKBOX",
              key: "casaAutoChequeBookRequestEnabled",
            },

            {
              label: "Stop Request ",
              type: "CHECKBOX",
              key: "casaStopRequest",
            },
          ],
        },
      ],
    },
    //8th step card information
    {
      title: "Card Information",
      cards: [
        // TODO add atm details to the account data
        {
          title: "Card Information",
          fields: [
            {
              //getSchemeTypeById(schemeTypeId) to display
              label: "Scheme Type",
              type: "TEXT_STRING",
              // spec: {
              //   api: (sdk: LOLCSDK) => () =>
              //     sdk.ProductBCAService.getSchemeTypeById, //schemeTypeId
              //   value: "name",
              //   label: "name",
              // },
              key: "schemeType",
            },
            // getCardTypesById(cardTypeId) to display
            {
              label: "Card Type",
              key: "cardType",
              type: "TEXT_STRING",
              // spec: {
              //   api: (sdk: LOLCSDK) => () =>
              //     sdk.ProductBCAService.getCardTypesById, //cardTypeId
              //   value: "name",
              //   label: "name",
              // },
            },

            {
              label: "Card Number",
              key: "cardNumber",
              type: "TEXT_STRING",
            },

            {
              label: "Name to Appear on Card",
              key: "nameOnCard",
              type: "TEXT_STRING",
            },

            {
              label: "Collection Point",
              // getBranchById(collectionPointId) to display
              key: "collectionPoint",
              type: "REMOTE_SELECT",
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
            },
            {
              label: "Daily Withdrawel Cash Limit",
              key: "widrawalLimit",
              type: "TEXT_STRING",
            },

            {
              label: "Card Issue Date",
              key: "cardIssuedDate",
              format: "YYYY/MM/DD",
              type: "DATE",
            },

            {
              label: "Card Expiry Date",
              key: "cardExpireDate",
              format: "YYYY/MM/DD",
              type: "DATE",
            },

            {
              label: "Foreign Transaction",
              key: "foreignTransactionEnabled",
              type: "TEXT_STRING",
            },

            {
              label: "POS",
              key: "posEnabled",
              type: "TEXT_STRING",
            },

            {
              label: "Transaction Blocking",
              key: "blockTransactions",
              type: "TEXT_STRING",
            },

            {
              label: "Remarks",
              key: "remarks",
              type: "TEXT_STRING",
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

        //! --pending displaying uploaded documnets
        //   {
        //     title: "Document Upload",
        //     fields: [
        //       {
        //         label: "Document Type",
        //         type: "REMOTE_SELECT",
        //         spec: {
        //           api: (sdk: LOLCSDK) => () =>
        //             sdk.CommonService.getDocumentTypeDetailsByStatus("ACTIVE"),
        //           value: "documentTypeName",
        //           label: "documentTypeName",
        //         },
        //         key: "documentType",
        //       },

        //       {
        //         label: "Mandotary Indicator",
        //         type: "SELECT",
        //         key: "mandatoryStatus",
        //         values: [
        //           {
        //             values: "Yes",
        //             label: "Yes",
        //           },
        //           {
        //             values: "No",
        //             label: "No",
        //           },
        //         ],
        //       },
        //       {
        //         label: "Received Date",
        //         type: "DATE",
        //         key: "recievedDate",
        //       },

        //       {
        //         label: "Document Upload",
        //         type: "FORM_ROW",
        //         key: "documentId",
        //         // ~Note:
        //         // after uploading get result's document id and send it
        //         // add origin - 'casaAccount'
        //         // common-document-upload.fileUpload('casaAccount',"")
        //         //http://132.145.228.83/comn-document-upload/swagger-ui.html#/file-controller/uploadFileUsingPOST
        //       },

        //       {
        //         label: "Status",
        //         type: "SELECT",
        //         key: "documentStatus",
        //         values: [
        //           {
        //             value: "Received",
        //             label: "Received",
        //           },
        //           {
        //             value: "Not Received",
        //             label: "Not Received",
        //           },
        //           {
        //             value: "Removed",
        //             label: "Removed",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // TODO add operation instructions to the interface
        {
          title: "Operation Instructions",
          fields: [
            {
              label: "No of Signatures required",
              key: "casaNoOfSignatures",
              type: "FORM_ROW",
            },
            {
              type: "COLLECTION",
              spec: {
                resourceUri: (sdk: LOLCSDK) => sdk.CustomerService.findById,
                key: "casaApplicantDetails",
                fields: [
                  {
                    label: "Account Number",
                    key: "accountNo",
                    type: "STRING",
                  },

                  {
                    label: "Name",
                    key: "personName",
                    type: "STRING",
                  },

                  {
                    label: "PORTION",

                    key: "proportion", //
                    type: "NUMBER",
                  },
                ],
              },
            } as any,

            {
              label: "Amount From ",

              type: "TEXT_STRING",
              key: "amountFrom",
            },
            {
              label: "Amount To",

              type: "TEXT_STRING",
              key: "amountTo",
            },
            {
              label: "Signatures",
              type: "TEXT_STRING",
              key: "signatureId",
            },
            {
              label: "Model of Operation",
              key: "modeOfOperation",
              type: "TEXT_STRING",
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
                  value: "reject",
                  label: "Reject",
                },
                {
                  value: "cancel",
                  label: "Cancel",
                },
              ],
            },
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
              label: "Card Issue Date",
              type: "DATE",
            },
            {
              label: "Total Charges",
              type: "TEXT_STRING",
              // Total amount of charges
            },
            {
              label: "Charge Type Name",
              // api: (sdk: LOLCSDK) =>
              //   sdk.ProductBCAService.getChargeAmountDetails, //FEAO
              key: "feeTypeCode",
              type: "TEXT_STRING",
            },
            {
              label: "Charge Amount",
              // api: (sdk: LOLCSDK) =>
              //   sdk.ProductBCAService.getChargeAmountDetails,
              key: "chargeAmount",
              type: "TEXT_STRING",
            },
            {
              label: "Notes",
              // api: (sdk: LOLCSDK) =>
              //   sdk.ProductBCAService.getChargeAmountDetails,
              key: "casaOtherRemarks",
              type: "TEXT_STRING",
            },
            //! cancellation
            {
              label: "Cancelation Remarks",
              // api: (sdk: LOLCSDK) =>
              //   sdk.ProductBCAService.getChargeAmountDetails,
              key: "casaOtherRemarks",
              type: "TEXTAREA",
              // spec: {
              //   api: (sdk: LOLCSDK) => () =>
              //     sdk.ProductBCAService.getChargeAmountDetails,
              //   value: "",
              //   label: "",
              // },
            },
            {
              label: "Cancelled User",
              type: "TEXT_STRING",
            },
            {
              label: "Cancelled Date",
              type: "DATE", //server date
            },
          ],
        },
        {
          title: "Are you sure you want to Activate this account?",
          description: "Result of this will activate the account ",
          fields: [
            // {
            //   label: "Status Update",
            //   type: "REMOTE_SELECT",
            //   key: "",
            // spec: {
            //     api: (sdk: LOLCSDK) =>
            //       sdk.AccountService.ActivateAccount,
            //     value: "id",
            //     label: "name",
            //   },
            // },
            // {
            //   label: "Notes",
            //   type: "TEXTAREA",
            //   key: "",
            // },
            //Note
            //AccountActivationAndDeactivationRequest
            //  chargeAmount?: number; -> Charge Amount
            // feeTypeCode?: string; -> Charge Type Name
            // hasApproval?: string; ->Status Update
            // note?: string; ->  Remarks
          ],
        },
      ],
    },
  ],
  apis: {
    // createAccount: (SDK: LOLCSDK) => SDK.AccountService.save,
  },
};
