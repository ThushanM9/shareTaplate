import { FunctionSchema } from "../../../../../schemas/schema";
import { LOLCSDK } from "../../../../../sdk";

export const ClosingConfirmationSchema: FunctionSchema = {
  functionName: "Closing Confirmation",
  module: "Account", //
  steps: [
    // http://132.145.228.83/casa-account/close-account/{tenantId}/status/{status}  getAccountCloseDetailByStatus
    //! status name is pending
    {
      title: "Closing Confirmation List",

      cards: [
        {
          title: "Closing Confirmation List",
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
              label: "Bonus Interest Accured Amount",
              type: "TEXT_STRING",
              key: "",
            },
            {
              label: "Overdraft Interest",
              type: "TEXT_STRING",
              key: "",
              // Total amount of charges
            },
            {
              label: "Final Withdrawel Amount",
              type: "TEXT_STRING",
              key: "",
              // Total amount of charges
            },
            {
              label: "Total Charges",
              type: "TEXT_STRING",
            },
            {
              label: "Charge Type Name",
              type: "TEXT_STRING",
              key: "",
              // Total amount of charges
            },
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
            {
              label: "Status Update",
              type: "SELECT",
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
            //only for cancelation
            {
              label: "Notes",
              type: "TEXTAREA",
              key: "",
            },
          ],
        },
      ],
    },
  ],
  apis: {
    // if selected approve
    approveClosingCreation: (SDK: LOLCSDK) => SDK.AccountService.closeAccount,
    // id?: string;
    // version: string;

    // if seleted cancel
    cancelCreation: (SDK: LOLCSDK) => SDK.AccountService.cancelCloseAccount,
    // id?: string;
    // version: string;
    // remark: Notes
  },
};
