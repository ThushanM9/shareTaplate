import { FunctionSchema } from "../../../../../schemas/schema";
import { LOLCSDK } from "../../../../../sdk";

export const ReactivationCreationSchema: FunctionSchema = {
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
            //! Added a note to UI 15/07/2020
            {
              label: "Notes",
              type: "TEXTAREA",
            },
          ],
        },
      ],
    },
  ],
  apis: {
    createAccount: (SDK: LOLCSDK) => () =>
      SDK.AccountService.requestReactivation("", {
        accountCharges: [
          {
            chargeAmount: 0,
            feeTypeCode: "",
          },
        ],

        // hasApproval: "",
        note: "",
      }),
  },
};
