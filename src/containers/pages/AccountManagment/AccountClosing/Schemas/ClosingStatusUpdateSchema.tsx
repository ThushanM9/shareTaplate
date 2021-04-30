import { FunctionSchema } from "../../../../../schemas/schema";
import { LOLCSDK } from "../../../../../sdk";

export const ClosingStatusUpdateSchema: FunctionSchema = {
  functionName: "Closing Status Update",
  module: "Account", //
  steps: [
    // to get the closing status update list getAccountCloseDetailByStatus in Account Service //! need the status
    // http://132.145.228.83/casa-account/close-account/{tenantId}/status/{status}
    {
      title: "Closing Status Update List",

      cards: [
        {
          title: "Closing Status Update List",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Account Name",
                  key: "accountName",
                  dataType: "STRING",
                },

                {
                  label: "Account Number",
                  key: "casaIdentification",
                  dataType: "STRING",
                },
                //! findById(customerId) -> perIdentification[]
                {
                  label: "NIC",
                  key: "pidtIdentificationNo",
                  dataType: "STRING",
                },
                {
                  label: "Customer Id",
                  key: "customerId",
                  dataType: "STRING",
                },
              ],
            },
          ],
        },
        //conformaing deactivation
      ],
    },
    {
      title: "Charges",
      description: "",
      cards: [
        {
          title: "Charges",
          description: "",
          fields: [
            {
              label: "Total Charges",
              type: "TEXT_STRING",
            },
            // api: (sdk: LOLCSDK) => () =>
            //     sdk.ProductBCAService.getChargeAmountDetails("FEAC", "subProductId", 0),
            {
              label: "Charge Type Name",
              type: "TEXT_STRING",
              key: "",
              // Total amount of charges
            },
            // api: (sdk: LOLCSDK) => () =>
            //     sdk.ProductBCAService.getChargeAmountDetails("FEAC", "subProductId", 0),
            {
              label: "Charge Type Name",
              type: "TEXT_STRING",
              key: "",
              // Total amount of charges
            },
          ],
        },
        {
          title: "Overdraft Details",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "OD issue ID",
                  key: "",
                  dataType: "STRING",
                },
                {
                  label: "Issue Date",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Due Date",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Issue Amount",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Outstanding  Amount",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Capital  Amount",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Interest  Amount",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Changes",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Tax",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Issued By",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Approved By",
                  dataType: "STRING",
                  key: "",
                },
              ],
            },
          ],
        },
        {
          title: "Standing Order",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "STO issue ID",
                  key: "",
                  dataType: "STRING",
                },
                {
                  label: "Activated Date",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Next Date",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Issue Amount",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "STO  Amount",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Party Name",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Party Amount No.",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Changes",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Tax",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Issued By",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Approved By",
                  dataType: "STRING",
                  key: "",
                },
              ],
            },
          ],
        },
        {
          title: "Schedule Payment",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "SP ID",
                  key: "",
                  dataType: "STRING",
                },
                {
                  label: "Activated Date",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Shedule Date",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Schedule Amount",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Party Name",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Party Account No",
                  dataType: "STRING",
                  key: "",
                },

                {
                  label: "Changes",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Tax",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Issued By",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Approved By",
                  dataType: "STRING",
                  key: "",
                },
              ],
            },
          ],
        },
        {
          title: "Fund Reservation",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Fund Reservation ID",
                  key: "",
                  dataType: "STRING",
                },
                {
                  label: "Activated Date",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Reservation Date",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Reservation Amount",
                  dataType: "STRING",
                  key: "",
                },

                {
                  label: "Changes",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Tax",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Issued By",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Approved By",
                  dataType: "STRING",
                  key: "",
                },
              ],
            },
          ],
        },
        {
          title: "Pending Cheque Realization",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Batch ID",
                  key: "",
                  dataType: "STRING",
                },
                {
                  label: "Transaction Date",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Cheque Number",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Cheque Amount",
                  dataType: "STRING",
                  key: "",
                },

                {
                  label: "Bank",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Created By",
                  dataType: "STRING",
                  key: "",
                },
              ],
            },
          ],
        },
        {
          title: "Pledging Details ",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Contact Number",
                  key: "",
                  dataType: "STRING",
                },
                {
                  label: "Portion",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Created By",
                  dataType: "STRING",
                  key: "",
                },
                {
                  label: "Approved By",
                  dataType: "STRING",
                  key: "",
                },
              ],
            },
          ],
        },
        {
          title: "Are you sure you want to Close this Account",
          description: "",
          fields: [
            // http://132.145.228.83/casa-account/close-account/{tenantId}/settlement-amount/{accountId}
            // if the settlementAmount minus show deposite if plus show withdrawel
            {
              label: "Withdrawel Amount",
              type: "TEXT_STRING",
              key: "settlementAmount",
            },
            {
              label: "Deposite Amount",
              type: "TEXT_STRING",
              key: "settlementAmount",
            },
          ],
        },
      ],
    },
  ],
  apis: {
    // if selected approve
    closingCreation: (SDK: LOLCSDK) =>
      SDK.AccountService.approveAccountCloseFinalWithdrawal,
    // in the getPendingAccountClose()
    //id?: id;
    //version: version;
  },
};
