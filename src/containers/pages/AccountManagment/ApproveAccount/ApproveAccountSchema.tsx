import { FunctionSchema } from "../../../../schemas/schema";
import { LOLCSDK } from "../../../../sdk";

export const ApporoveAccountSchema: FunctionSchema = {
  functionName: "Apporove Account",
  module: "Account", //
  steps: [
    {
      title: "Apporove Account",
      description: "",
      cards: [
        {
          title: "Apporove Account",
          description: "",
          fields: [
            {
              // Remove the second filtering option button (3dots btn)
              // Remove the left hand side tickboxes.
              // pending approve accounts table
              // get all pending accounts
              ///account/{tenantId}/pending/all
              // getAllPendingAccounts

              // rejected accounts
              // stat:REJECTED
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
              // spec: {
              //   resourceUri: (sdk: LOLCSDK) =>
              //     sdk.AccountService.getAllPendingAccountDetails,
              // },
            },
            {
              // rejected approve accounts table
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
            },
            {
              // approved approve accounts table
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
              // spec: {

              //   resourceUri: (sdk: LOLCSDK) =>
              //     sdk.AccountService.getAccountDetailsByStatus, //"REJECTED",
              // },
            },
          ],
        },

        // {
        // approve account status update
        // select menu Approve , Rejected
        //
        // }
      ],
    },
    // 10th step
    {
      title: "Charges",
      cards: [
        {
          title: "Approve Account",
          description: "",
          fields: [
            {
              label: "Account Opening User",
              type: "TEXT_STRING",
              key: "createdUser",
            },

            {
              label: "Total Charges",
              type: "TEXT_STRING",
              // Total amount of charges
            },

            {
              label: "Charge Type Name",
              key: "feeTypeCode", // charges
              type: "TEXT_STRING",
            },
            {
              label: "Charge Amount",
              key: "chargeAmount", // charges
              type: "TEXT_STRING",
            },
          ],
        },
        {
          title: "Are you sure you want to Activate this account?",
          description: "Result of this will activate the account ",
          fields: [
            {
              label: "Status Update",
              key: "",
              type: "SELECT",
              values: [
                {
                  label: "Approve",
                  value: "approve",
                },
                {
                  label: "Rejected",
                  value: "rejected",
                },
              ],
            },

            {
              label: "Notes",
              key: "",
              type: "TEXTAREA",
            },
          ],
        },
      ],
    },
  ],

  apis: {
    // if selected approve

    approveAccount: (SDK: LOLCSDK) => SDK.AccountService.approve,
    //!@Ishanka /account/{tenantId}/{pendingAccountId}/approval--pending
    //reject
    // rejectAccount:(SDK: LOLCSDK) => SDK.AccountService,
    //!@Ishanka /account/{tenantId}/{pendingAccountId}/reject
  },
};
