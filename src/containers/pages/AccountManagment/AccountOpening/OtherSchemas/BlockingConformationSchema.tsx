import { FunctionSchema } from "../../../../../schemas/schema";
import { LOLCSDK } from "../../../../../sdk";

export const BlockingConformationSchema: FunctionSchema = {
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
              label: "Account Blocking User",
              type: "TEXT_STRING",
              key: "blockedUser",
              // spec: {
              //     api: (sdk: LOLCSDK) => () =>
              //       sdk.ProductBCAService.getChargeAmountDetails("FEAO", "", 0),
              //     //subProductId: string, calculationfrequencycodes: string, chargebaseamount: number
              //     value: "",
              //     label: "",
              //   },
            },
            {
              label: "Account Blocking Date",
              type: "DATE",
            },
            {
              label: "Total Charges",
              type: "TEXT_STRING",
              // Total amount of charges
            },

            // ! removed from UI 15/07/2020
            {
              label: "Blocking Reason",
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
            // logged user
            {
              label: "Account Blocking Approvel User",
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
            //server date
            {
              label: "Account Blocking Approvel Date",
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
    //hasApproval?: string;
    //note?: string;
    createAccount: (SDK: LOLCSDK) => () =>
      SDK.AccountService.approveBlock("", {
        hasApproval: "", //Status Update
        note: "", //Notes
      }),
  },
};
