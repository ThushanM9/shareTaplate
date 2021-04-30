import { FunctionSchema } from "../../../../../schemas/schema";
import { LOLCSDK } from "../../../../../sdk";

export const ReactivationConformationSchema: FunctionSchema = {
  functionName: "Final step",
  module: "Account", //
  steps: [
    {
      title: "Approve Account",
      cards: [
        {
          title: "Charges",
          description: "",
          fields: [
            {
              label: "Account Reactivation User",
              type: "TEXT_STRING",
              key: "reactivationUser",
              // spec: {
              //     api: (sdk: LOLCSDK) => () =>
              //       sdk.ProductBCAService.getChargeAmountDetails("FEAO", "", 0),
              //     //subProductId: string, calculationfrequencycodes: string, chargebaseamount: number
              //     value: "",
              //     label: "",
              //   },
            },
            {
              label: "Account Reactivation Date",
              type: "DATE",
            },
            //! removed from UI 15/07/2020
            {
              label: "Reactivation Reason",
              // api: (sdk: LOLCSDK) =>
              //   sdk.ProductBCAService.getChargeAmountDetails, //FEAO
              key: "feeTypeCode",
              type: "SELECT",
              values: [],
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.ProductBCAService.getChargeAmountDetails("FEAO", "", 0),
                //subProductId: string, calculationfrequencycodes: string, chargebaseamount: number
                value: "",
                label: "",
              },
            },
            {
              label: "Account Reactivation Approvel User",
              // api: (sdk: LOLCSDK) =>
              //   sdk.ProductBCAService.getChargeAmountDetails,
              key: "chargeAmount",
              type: "TEXT_STRING",
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.ProductBCAService.getChargeAmountDetails,
                value: "",
                label: "",
              },
            },
            {
              label: "Account Reactivation Approvel Date",
              type: "DATE",
            },
            {
              label: "Notes",
              type: "TEXTAREA",
            },
          ],
        },
        {
          title: "Are you sure you want to Approve this account?",
          description:
            "Result of this will Update the account details of the customer ",
          fields: [
            {
              label: "Status Update",
              type: "REMOTE_SELECT",
              values: [
                {
                  value: "approve",
                  label: "Approve",
                },
                {
                  value: "reject",
                  label: "Reject",
                },
              ],
              key: "",
              // spec: {
              //     api: (sdk: LOLCSDK) =>
              //       sdk.ProductBCAService.getProductByAccountType,
              //     value: "id",
              //     label: "name",
              //   },
            },
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
    createAccount: (SDK: LOLCSDK) => () =>
      SDK.AccountService.approveDeactivation("", {
        accountCharges: [
          {
            chargeAmount: 0,
            feeTypeCode: "",
          },
        ],

        hasApproval: "",
        note: "", //Notes
      }),
  },
};
