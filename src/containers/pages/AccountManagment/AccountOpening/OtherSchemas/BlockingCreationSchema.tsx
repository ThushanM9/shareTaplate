import { FunctionSchema } from "../../../../../schemas/schema";
import { LOLCSDK } from "../../../../../sdk";

export const BlockingCreationSchema: FunctionSchema = {
  functionName: "Final step",
  module: "Account", //
  steps: [
    {
      title: "Account Block",
      //! same as activate account
      cards: [
        {
          title: "Charges",
          description: "",
          fields: [
            {
              label: "Account Blocking User",
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
              label: "Account Blocking Date",
              type: "DATE",
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
            //! notes sholud be removed.
          ],
        },
        {
          title: "Are you sure you want to block this account?",
          description:
            "Result of this will Update the account details of the customer ",
          fields: [
            // {
            //   label: "Status Update",
            //   type: "REMOTE_SELECT",
            //   key: "",
            //   // spec: {
            //   //     api: (sdk: LOLCSDK) =>
            //   //       sdk.ProductBCAService.getProductByAccountType,
            //   //     value: "id",
            //   //     label: "name",
            //   //   },
            // },
            // {
            //   label: "Notes",
            //   type: "TEXTAREA",
            //   key: "",
            // },
          ],
        },
      ],
    },
  ],
  apis: {
    //accountId: string, data: AccountHelperResource
    blockAccount: (SDK: LOLCSDK) => () =>
      SDK.AccountService.requestBlock("", {
        // hasApproval: "",
        note: "", //! only pass note
      }),
  },
};
