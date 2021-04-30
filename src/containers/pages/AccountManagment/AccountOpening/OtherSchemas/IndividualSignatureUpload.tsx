import { FunctionSchema } from "../../../../../schemas/schema";
import { LOLCSDK } from "../../../../../sdk";

export const IndividualSignatureUploadSchema: FunctionSchema = {
  functionName: "Final step",
  module: "Account", //
  steps: [
    {
      title: "User",
      cards: [
        {
          title: "Other Details",
          description: "",
          fields: [
            {
              label: "Status",
              type: "SELECT",
              values: [
                {
                  value: "",
                  label: "",
                },
                {
                  value: "",
                  label: "",
                },
              ],
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
              label: "Created User",
              type: "TEXT_STRING",
            },
            {
              label: "Created Date",
              type: "DATE",
            },
          ],
        },
        {
          title: "Are you sure you want to Approve this account?",
          description:
            "Result of this will Update the account details of the customer ",
          fields: [
            {
              label: "Signature Approved/ Cancelled",
              type: "REMOTE_SELECT",
              key: "",
              // spec: {
              //     api: (sdk: LOLCSDK) =>
              //       sdk.ProductBCAService.getProductByAccountType,
              //     value: "id",
              //     label: "name",
              //   },
            },
            {
              label: "Signature Approved/ Cancelled User",
              type: "TEXT_STRING",
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
    createAccount: (SDK: LOLCSDK) => SDK.AccountService.save,
  },
};
