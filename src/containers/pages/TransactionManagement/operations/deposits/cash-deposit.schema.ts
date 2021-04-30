import { LOLCSDK } from "../../../../../sdk";

//* July 29th
// 8 Minutes to understand the flow
// 7 Minutes to start writing schema
// 15 Minutes
// 15 Minutes
// 3 Minutes

// 40 Minutes
//! accountType => ammountType
//! note

//* July 30th - Aug 5th => Review

//* Aug 6th
// 90 mins - mappings + SDK modifications
//! Uncleared properties - charges/taxes/createdBranchId/createdBranchName/createdUser/statementReference
//! Misleading - narrative/valueDate
// 75 mins - clearing out issues

//* Aug 7th
// 30 mins - on a call to clear few issues 
// 30 mins - useless call

export interface iTransactionSchema {
  steps: {
    title: string;
    description: string;
    fields: any[];
    cards: TransactionCards[];
  }[];
  apis: {
    [action: string]: (sdk: LOLCSDK) => any;
  };
}

export type TransactionCards =
  | "TELLER_NAME"
  | "TELLER_Id"
  | "TRANSACTION_DATE"
  | "TRANSACTION_NUMBER"
  | "ACCOUNT_DETAILS"
  | "CUSTOMER_DETAILS"
  | "PORDUCT_DETAILS"
  | "ACCOUNT_BALANCE_DETAILS"
  | "PASSBOOK_DETAILS"
  | "CHARGES_TAXES"
  | "OPERATIONAL_INSTRUCTION";

// export interface CounterCashDepositRequestResource {
//     accountAmount: string; // DONE - Step 05
//     accountCurrencyCode: string; // CLARIFY --> Step 05 
//     accountCurrencyId: string; // CLARIFY --> Step 05 
//     accountExchangeRate: string;  // CLARIFY --> Step 05
//     accountExchangeRateId: string;  // CLARIFY --> Step 05
//     accountExchangeRateType: string;  // CLARIFY --> Step 05
//     accountId: string; // DONE --> Step 04
//     accountNumber: string;   // DONE --> Step 04
//     accountNumberSchemeName: string;  // DONE --> Step 04
//     accountSubType: string;  // DONE --> Step 04
//     accountType: string;  // DONE
//     amountType: string;   --> Step 05
//     charge: string; // not needed/null
//     charges: CounterCashDepositChargesRequestResource[]; --> Step 05
//!!     createdBranchId: string; --> Login user
//!!     createdBranchName: string; --> Login user
//!!     createdUser: string; --> Login user
//     customerId: string; --> Step 04
//     narrative: string; --> Step 07 - notes
//     netAmount: string; // DONE --> Step 05
//     statementReference: string; --> not needed/null
//     subProductId: string; --> Step 04 -- casaSubProductId
//     subProductIdentification: string; --> Step 04 - subProduct -> identification
//     tax: string; not needed/null
//     taxes: TaxesRequestResource[]; --> Step 04
//     transactionAmount: string; --> Step 05
//     transactionCurrencyCode: string; --> Step 05 (if it's account currency - account > currencyCode)
//     transactionCurrencyId: string; --> Step 05 (if it's account currency - account > currencyId)
//     transactionDate: string; --> Step 04 (Information section - Transaction Date)
//!     transactionExchangeRate: string; --> Step 04  "INTERNAL_SERVER_ERROR"
//!     transactionExchangeRateId: string; --> Step 04 "INTERNAL_SERVER_ERROR"
//!     transactionExchangeRateType: string; --> Step 04 "INTERNAL_SERVER_ERROR" http://132.145.228.83/comn-currency-detail/exchange-rate/AnRkr/from-currency/1/to-currency/6/effective-date/07-08-2020
//     transactionReference: string; --> Step 05 - User Reference Number
//     valueDate: string; --> Step 04 (server date)
//   }

const CashDepositSchema: iTransactionSchema = {
  steps: [
    // 1 Operation Type
    {
      title: "1. Operation Type",
      description: "Choose the operation type",
      fields: [
        {
          type: "SELECT",
          key: "operationType",
          values: [
            {
              label: "Deposits",
              value: "Deposits",
            },
            {
              label: "Withdrawals",
              value: "Withdrawals",
            },
            {
              label: "Fund Transfer",
              value: "Fund Transfer",
            },
          ],
        },
      ],
      cards: [
        "TELLER_NAME",
        "TELLER_Id",
        "TRANSACTION_DATE",
        "TRANSACTION_NUMBER",
      ],
    },
    // 2 Deposit Type
    {
      title: "2. Deposit Type",
      description: "Choose the operation type",
      fields: [
        {
          type: "SELECT",
          key: "depositType",
          values: [
            {
              label: "Cash",
              value: "Cash",
            },
            {
              label: "Cheques",
              value: "Cheques",
            },
          ],
        },
      ],
      cards: [
        "TELLER_NAME",
        "TELLER_Id",
        "TRANSACTION_DATE",
        "TRANSACTION_NUMBER",
      ],
    },
    // 3 Party Type
    {
      title: "3. Party Type",
      description: "Choose the operation type",
      fields: [
        {
          type: "SELECT",
          key: "operationType",
          values: [
            {
              label: "Own",
              value: "Own",
            },
            {
              label: "Other Party",
              value: "Other Party",
            },
          ],
        },
      ],
      cards: [
        "TELLER_NAME",
        "TELLER_Id",
        "TRANSACTION_DATE",
        "TRANSACTION_NUMBER",
      ],
    },
    // 4 Account
    {
      title: "4. Account",
      description: "Choose the operation type",
      fields: [
        //get the account information --> /casa-account/account/AnRkr/account-number/accountNo
        //get the customer information
        // ACCOUNT_SELECTOR
        {
          type: "COLLECTION",
          mapFuntion: (account: any) => ({
            accountNumberSchemeName: account.schemeData.scheme_name,
            acount_number: account.AccountData.accountNumber,
            accountSubTypeDescription: account.AccountData.accountSubType
          }),
          columns: [
            {
              label: "Scheme Name",
              key: "scheme_name", //! pass the scheme code and get the scheme name --> schemeCode --> Commonlist - data is not coming - COMM - GAN1100000028
              dataType: "STRING", // targetkey --> accountNumberSchemeName
            },
            {
              label: "Account Number",
              key: "acount_number", // casaIdentification
              dataType: "STRING", // targrtkey --> accountNumber
            },
            {
              label: "Account Name",
              key: "accountName", // accountName
              dataType: "STRING",
            },
            //! seperate section of list - need a UI change
            {
              label: "Identification",
              key: "indentification", // pass the customer id --> get the primary identification
              dataType: "STRING",
            },
            {
              label: "Signature",
              key: "signature", // pass signatureId --> document upload --> comn-document-upload/signature/{tenantId}/{id}
              dataType: "IMAGE",
            },
            {
              label: "Status",
              key: "status", // customer status
              dataType: "STRING",
            },
            //!
            {
              label: "accountId",
              hidden: true,
              key: "accountId", //id 
              dataType: "STRING",// targetkey --> accountId
            },
            {
              label: "accountSubType",
              hidden: true,
              key: "accountSubType", // accountSubTypeDescription
              dataType: "STRING",
            },
            {
              label: "accountType",
              hidden: true,
              key: "accountType",//accountType
              dataType: "STRING", // targetkey --> accountType
            },

          ],
        },
      ],
      cards: ["ACCOUNT_DETAILS", "CUSTOMER_DETAILS", "PORDUCT_DETAILS"],
    },
    // 5
    // If Amount Type is account amount --> Currency and exchange rate is disable
    // If Amount Type is transaction amount --> currency can be select and exchange rate should be display
    {
      title: "5. Deposit Details",
      description: "Choose the operation type",
      fields: [
        {
          type: "TEXT_STRING",
          label: "Account Type",// Amount Type should be able to select 
          key: "accountType", //targetkey --> amountType
        },
        {
          type: "TEXT_STRING",
          label: "Account Amount",
          key: "accountAmount",
        },
        {
          type: "NUMBER",
          label: "Transaction Amount",
          key: "transactionAmount",
        },
        {
          type: "TEXT_STRING",
          label: "Transaction Currency",
          readOnly: true,
          key: "accountCurrencyCode", // comn-currency-detail/currency/{tenantId}/{all}
          // amount type = account amount => account currency
          // amount type = transaction amount => drop down * UI needs to be changed
        },
        {
          type: "TEXT_STRING",
          label: "Exchange Rate", // http://132.145.228.83/comn-currency-detail/exchange-rate/AnRkr/from-currency/1/to-currency/2/effective-date/06-08-2020 --> need to add to the SDK and the swagger method is throwing 500
          readOnly: true,
          key: "exchangeRate",
          // amount type = account amount => disaply as '1'
          // amount type = transaction amount => transaction currency to account currency exchange rate
        },
        {
          type: "TEXT_STRING",
          label: "Net Amount",
          key: "netAmount",
        },
        {
          type: "TEXT_STRING",
          label: "User Reference",
          key: "userReference",
        },
        {
          type: "TEXT_STRING",
          label: "Transaction Number",
          key: "transactionNumber",
        },
        {
          type: "TEXTAREA",
          label: "Note",
          key: "narrative",
        },
        // Charges
        {
          type: "TITLE",
          label: "Charges",
          key: "charges_title",
        },
        {
          type: "COLLECTION",
          columns: [
            // feeAmount - FeeCharge > feeAmount
            //   feeCategoryCode - FeeCharge > feeCategoryCode
            //   feeCategoryId: FeeCharge > feeCategoryId
            //   feeChargeDetailId: FeeCharge > feeChargeDetailId
            //   feeIndicator: FeeCharge > feeIndicator
            //   feeRate: FeeCharge > feeRate
            //   feeTypeCode: FeeCharge > feeTypeCode
            //   feeTypeId: FeeCharge > feeTypeId
            // 
            //* Charges should displayed as an array
            //* charges - charge name
            //* charges amount - charge value
            {
              label: "Charge Amount",
              key: "string", // feeAmount casa-product-bca/calculations/{tenantId}/sub-product-id/{subproductid}/get-charge?calculationfrequencycodes={FEDP}&chargebaseamount={CashDepositAmount}
              // CashDepositAmount - transaction amount/ account amount
              dataType: "STRING",
              isEditable: true,
              widgetSchema: {
                type: "TEXT_STRING",
              },
            },
            {
              label: "Charges",
              key: "value", // feechargeid  casa-product-bca/calculations/{tenantId}/sub-product-id/{subproductid}/get-charge?calculationfrequencycodes={FEDP}&chargebaseamount={CashDepositAmount}
              // CashDepositAmount - transaction amount/ account amount
              dataType: "STRING",
              isEditable: true,
              widgetSchema: {
                type: "TEXT_STRING",
              },
            },
            {
              label: "Tax Amount",
              key: "value", //taxvalue - casa-tax/tax-calculation/{tenantId}/calculate-tax
              // applicableAccType - account > account type
              // applicableProductId - account > prod id
              // baseAmount - account amount/transaction amount
              // customerCategoryCode - customer > cusOrganizationTypeCode
              // customerDob - customer > perDateOfBirth
              // customerResidentTypeId - customer > perResidentStatusCommonListId
              // customerSubTypeId - customer > ( if indv - cusPersonTypeCommonListId, cop - perCorporateCategoryCommonListId)
              // declarationType - customer > cusTaxProfile > ctpTaxDeclarationType
              // message - no need/null
              // otherInterestIncome - no need/null
              // productCategoryComnListId - product > productCategoryId
              // taxEventCode - CADE
              dataType: "STRING",
              isEditable: true,
              widgetSchema: {
                type: "TEXT_STRING",
              },
            },
          ],
        },
      ],
      cards: ["ACCOUNT_BALANCE_DETAILS", "PASSBOOK_DETAILS", "CHARGES_TAXES"],
    },
    // 6
    // Keep this open
    {
      title: "6. Denomination",
      description: "Choose the operation type",
      fields: [
        {
          type: "EDITABLE_TABLE",
          columns: [
            {
              label: "Value",
              key: "value",
              dataType: "STRING",
              isEditable: true,
              widgetSchema: {
                type: "TEXT_STRING",
              },
            },
            {
              label: "Quantity",
              key: "quantity",
              dataType: "STRING",
              isEditable: true,
              widgetSchema: {
                type: "TEXT_STRING",
              },
            },
          ],
        },
      ],
      cards: ["OPERATIONAL_INSTRUCTION"],
    },
    // 7
    {
      title: "7. Counter Party Details",
      description: "Choose the operation type",
      fields: [
        {
          type: "TEXT_STRING",
          label: "Name",
          key: "name",
        },
        {
          type: "TEXT_STRING",
          label: "Identification",
          readOnly: true,
          key: "identification",
        },
        {
          type: "TEXTAREA",
          label: "Note",
          key: "note",
        },
        {
          type: "TEXTAREA",
          label: "Address",
          key: "address",
        },
      ],
      cards: ["OPERATIONAL_INSTRUCTION"],
    },
  ],
  apis: {
    depositCash: (SDK) => SDK.TransferInService.counterCashDeposit,
    getCharges: (SDK) => SDK.ProductBCAService.getChargeAmountDetails,
    calculateTax: (SDK) => SDK.TaxService.calculateTax
  },
};

//! Account details card 
// opening branch --> accountOpenBranchDescription
// scheme type --> schemeCode
// Account number --> casaIdentification
// Account type --> accountType
// Account Name --> accountName
// Account currency --> currencyCode
// Account status --> status

//! Customer details -  If customer Individual 
// Account holder ID --> customerId
// Identification --> 
// Signature -->
// Ownership type --> ownershipType
// Customer Image --> ? 
// Status -->

//! For cooperate customer, no need to display

//! Product detail
// Main product --> name
// product category --> productCategoryCode 
// sub product --> Get sub product by pass sub product ID --> /casa-product-bca/sub-product/AnRkr/subProductId

//! Account Balance details 
//! Need to discuss - Account balance --> casa-transaction/balance-inquiry/{tenantId}/account/?accNo=accNo&userId=userId&designationId=designationId
// Fund reservation balance --> casa-fund-reservation/fund-reservation/{tenantId}/account/{accountId} - fundReservations > 'fureAmount' with 'ACTIVE' status 

//! Passbook details --> casa-transaction/passbook/{tenantId}/accountid/{accountId}/all - active

//! Operation Instruction --> http://132.145.228.83/casa-account/operation-instruction/AnRkr/account/976815/status/ACTIVE -- needs to display multiple cards