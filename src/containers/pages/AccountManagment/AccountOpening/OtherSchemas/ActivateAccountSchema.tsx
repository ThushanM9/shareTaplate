import { FunctionSchema } from "../../../../../schemas/schema";

export const ActivateAccountSchema: FunctionSchema = {
  functionName: "Activate Account",
  module: "Account", //
  steps: [
    {
      title: "Activate Account",
      cards: [
        {
          title: "Activate Account",
          description: "",
          fields: [
            {
              type: "SELECT",
              label: "Status Update",
              values: [
                {
                  value: "approve",
                  label: "Approve",
                },
                {
                  value: "reject",
                  label: "Reject",
                },
                {
                  value: "cancel",
                  label: "Cancel",
                },
              ],
            },
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
            },
            {
              label: "Charge Amount",
              // api: (sdk: LOLCSDK) =>
              //   sdk.ProductBCAService.getChargeAmountDetails,
              key: "chargeAmount",
              type: "TEXT_STRING",
            },
            {
              label: "Notes",
              // api: (sdk: LOLCSDK) =>
              //   sdk.ProductBCAService.getChargeAmountDetails,
              key: "casaOtherRemarks",
              type: "TEXT_STRING",
            },
            //! cancellation
            {
              label: "Cancelation Remarks",
              // api: (sdk: LOLCSDK) =>
              //   sdk.ProductBCAService.getChargeAmountDetails,
              key: "casaOtherRemarks",
              type: "TEXTAREA",
              // spec: {
              //   api: (sdk: LOLCSDK) => () =>
              //     sdk.ProductBCAService.getChargeAmountDetails,
              //   value: "",
              //   label: "",
              // },
            },
            {
              label: "Cancelled User",
              type: "TEXT_STRING",
            },
            {
              label: "Cancelled Date",
              type: "DATE", //server date
            },
          ],
        },
        {
          title: "Are you sure you want to Activate this account?",
          description: "Result of this will activate the account ",
          fields: [
            // {
            //   label: "Status Update",
            //   type: "REMOTE_SELECT",
            //   key: "",
            // spec: {
            //     api: (sdk: LOLCSDK) =>
            //       sdk.AccountService.ActivateAccount,
            //     value: "id",
            //     label: "name",
            //   },
            // },
            // {
            //   label: "Notes",
            //   type: "TEXTAREA",
            //   key: "",
            // },
            //Note
            //AccountActivationAndDeactivationRequest
            //  chargeAmount?: number; -> Charge Amount
            // feeTypeCode?: string; -> Charge Type Name
            // hasApproval?: string; ->Status Update
            // note?: string; ->  Remarks
          ],
        },
      ],
    },
  ],
  apis: {
    // createAccount: (SDK: LOLCSDK) => SDK.AccountService.activateAccount("", {
    //   chargeAmount:0,
    //   feeTypeCode:"",
    //   hasApproval:"",
    //   note:"",
    // }),
  },
};
