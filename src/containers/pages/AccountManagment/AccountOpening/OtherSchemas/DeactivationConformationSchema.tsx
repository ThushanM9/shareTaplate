import { FunctionSchema } from "../../../../../schemas/schema";
import { LOLCSDK } from "../../../../../sdk";

export const DeactivationConformationSchema: FunctionSchema = {
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
              label: "Account Deactivation User",
              type: "TEXT_STRING",
              key: "deactivateUser",
              // spec: {
              //     api: (sdk: LOLCSDK) => () =>
              //       sdk.ProductBCAService.getChargeAmountDetails("FEAO", "", 0),
              //     //subProductId: string, calculationfrequencycodes: string, chargebaseamount: number
              //     value: "",
              //     label: "",
              //   },
            },
            {
              label: "Account Deactivation Date",
              type: "DATE",
            },
            //! removed from UI 15/07/2020
            {
              label: "Deactivation Reason",
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
              label: "Account Deactivation Approvel User",
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
              label: "Account Deactivation Approvel Date",
              type: "DATE",
            },
            //! charges
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
              spec: {
                api: (sdk: LOLCSDK) => () =>
                  sdk.ProductBCAService.getChargeAmountDetails("FEAO", "", 0),
                //subProductId: string, calculationfrequencycodes: string, chargebaseamount: number
                value: "",
                label: "",
              },
            },
            {
              label: "Charge Amount",
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
              //! pending
              label: "Notes",
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
              key: "",
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
