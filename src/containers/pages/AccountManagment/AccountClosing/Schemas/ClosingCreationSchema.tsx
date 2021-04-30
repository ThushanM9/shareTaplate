import { FunctionSchema } from "../../../../../schemas/schema";
import { LOLCSDK } from "../../../../../sdk";

export const ClosingCreationSchema: FunctionSchema = {
  functionName: "Activate Account",
  module: "Account", //
  steps: [
    {
      title: "Charges",
      description: "",
      cards: [
        {
          title: "Charges",
          description: "",
          fields: [
            //logged in user
            {
              label: "Account Closing User",
              type: "TEXT_STRING",
            },
            //server date
            {
              label: "Account Closing Date",
              type: "TEXT_STRING",
            },
            {
              label: " Closing Reason",
              type: "TEXT_STRING",
            },
            {
              label: "Notes",
              type: "TEXT_STRING",
            },
            //getAccuredCreditInterest(accountID) //-casa-interest-schedule
            {
              label: "Credit Interest Accrued Amount",
              type: "TEXT_STRING",
              key: "accumulatedAmount",
            },
            //getAccuredBonusInterest(accountId) //-casa-interest-schedule
            {
              label: "Bonus Interest Accrued Amount",
              type: "TEXT_STRING",
              key: "accumulatedAmount",
            },
            //getAccuredODInterest -casa-interest-schedule
            {
              label: "Overdraft Interest",
              type: "TEXT_STRING",
              key: "accumulatedAmount",
            },
            // http://132.145.228.83/casa-account/close-account/{tenantId}/settlement-amount/{accountId}
            {
              label: "Final Withdrawel Amount",
              type: "TEXT_STRING",
              key: "settlementAmount",
            },
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
          title: "Overdraft Details", //! keep this open
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
        //getAllStandingOrdersByStatus(accountid,ACTIVE) -casa-sto
        {
          title: "Standing Order",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "STO issue ID",
                  key: "id",
                  dataType: "STRING",
                },
                {
                  label: "Activated Date",
                  dataType: "DATE",
                  key: "approvedDate",
                  format: "DD/MM/YYYY",
                },
                {
                  label: "Next Date",
                  dataType: "DATE",
                  key: "recurringPaymentDate",
                  format: "DD/MM/YYYY",
                },
                {
                  label: "Issue Amount",
                  dataType: "STRING",
                  key: "firstPaymentAmount",
                },
                {
                  label: "STO  Amount",
                  dataType: "STRING",
                  key: "recurringPaymentAmount",
                },
                {
                  label: "Party Name",
                  dataType: "STRING",
                  key: "benificiaryName",
                },
                {
                  label: "Party Account No.",
                  dataType: "STRING",
                  key: "benificiaryAccountNumber",
                },
                //charges and tax removed
                {
                  label: "Issued By",
                  dataType: "STRING",
                  key: "createdUser",
                },
                {
                  label: "Approved By",
                  dataType: "STRING",
                  key: "approvedUser",
                },
              ],
            },
          ],
        },
        //getScheduledPaymentsByAccountIdAndStatus (accountID,ACTIVE)
        {
          title: "Schedule Payment",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "SP ID",
                  key: "id",
                  dataType: "STRING",
                },

                {
                  label: "Shedule Date",
                  dataType: "STRING",
                  key: "scheduledDate",
                },
                {
                  label: "Schedule Amount",
                  dataType: "STRING",
                  key: "instructedAmount",
                },
                {
                  label: "Party Name",
                  dataType: "STRING",
                  key: "creditorAccName",
                },
                {
                  label: "Party Account No",
                  dataType: "STRING",
                  key: "accountNo",
                },

                {
                  label: "Issued By",
                  dataType: "STRING",
                  key: "createdUser",
                },
              ],
            },
          ],
        },
        //getFundReservatinsByAccountIdAndStatus - fund-reservation
        {
          title: "Fund Reservation",
          description: "",
          fields: [
            {
              type: "COLLECTION",
              columns: [
                {
                  label: "Fund Reservation ID",
                  key: "id",
                  dataType: "STRING",
                },
                {
                  label: "Activated Date",
                  dataType: "DATE",
                  key: "fureLastApprovedDate",
                  format: "DD/MM/YYYY",
                },
                {
                  label: "Reservation Date",
                  dataType: "DATE",
                  key: "fureCreatedDate",
                  format: "DD/MM/YYYY",
                },
                {
                  label: "Reservation Amount",
                  dataType: "STRING",
                  key: "fureAmount",
                },

                {
                  label: "Issued By",
                  dataType: "STRING",
                  key: "fureCreatedUser",
                },
                {
                  label: "Approved By",
                  dataType: "STRING",
                  key: "fureLastApprovedUser",
                },
              ],
            },
          ],
        },

        {
          title: "Pending Cheque Realization", //! keep open
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
          title: "Pledging Details ", //! keep open
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
      ],
    },
  ],
  apis: {
    // if selected approve
    closingCreation: (SDK: LOLCSDK) =>
      SDK.AccountService.createCloseAccountDetail,
    //     accountNoId: accountId;
    // getAccountBalanceByAccountNoId() -casa-transaction to get actualAmount,balanceAmount
    //   actualAmount: actualAmount;
    //   balanceAmount: balanceAmount;
    //   bonusInterestAmount: Bonus Interest Accrued Amount
    //   charges: ChargeAddResource[];
    //!
    // api: (sdk: LOLCSDK) => () =>
    //     sdk.ProductBCAService.getChargeAmountDetails("FEAC", "subProductId", 0),
    //   amount: feeAmount;
    //   chargeType?: "";
    //   deductIndicator?: deductIndicator;
    //   feeCategoryCode: feeCategoryCode;
    //   feeCategoryId: feeCategoryId;
    //   feeChargeDetailId: feeChargeDetailId;
    //   feeIndicator: feeIndicator;
    //   feeRate?: feeRate;
    //   feeTypeCode: feeTypeCode;
    //   feeTypeId: feeTypeId;
    //   note?: "";
    //   processingType?: null;
    //   standingOrderId?:null;
    //   status?: null;
    //   transferType?: null;
    //!
    //   creditInterestAmount: Credit Interest Accrued Amount;
    //   id?:null;
    //   overdraftInterestAmount: Overdraft Interest;
    //   remark: Notes;
    //   tenantId?: AnRkr;
    //   totalChargeAmount: Total Charges;
  },
};
