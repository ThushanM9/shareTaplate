import { LOLCSDK } from "../../../../../../sdk";

export const AccountOpening_CardInformationSchema = {
  cards: [
    {
      title: "Card Information",
      description: "Card Information",
      fields: [
        {
          label: "Scheme Type",
          // Todo:
          noSend: true,
          key: "",
          type: "REMOTE_SELECT",
          spec: {
            // Todo: useGetSchemaTypeByStatus
            //  dont know this maybe the same schema types in  Basic Account Details
            api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
            value: "",
            label: ""
          },
          rules: []
        },
        {
          label: "Card type",
          // Todo:
          key: "",
          noSend: true,
          type: "REMOTE_SELECT",
          spec: {
            // Todo: useGetCardType
            api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
            value: "",
            label: ""
          },
          rules: []
        },
        {
          label: "Card Number",
          // Todo:
          key: "",
          noSend: true,
          type: "TEXT_STRING",
          rules: []
        },
        {
          label: "Name to Appear on Card",
          // Todo:
          key: "",
          noSend: true,
          type: "TEXT_STRING",
          rules: []
        },
        {
          label: "Collection Point",
          // Todo:
          key: "",
          type: "REMOTE_SELECT",
          spec: {
            // sampath said this should be branches in their bank i'm unclear about this
            api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
            value: "",
            label: ""
          },
          rules: []
        },
        {
          label: "Card fee enabled",
          // Todo:
          key: "",
          noSend: true,
          type: "SELECT",
          values: [
            {
              value: "Enabled",
              label: "Enabled"
            },
            {
              value: "Disabled",
              label: "Disabled"
            }
          ],
          rules: []
        },
        {
          label: "Daily Withdrawal cash limit",
          // Todo:
          key: "",
          noSend: true,
          type: "TEXT_STRING",
          rules: []
        },
        {
          label: "Card Issue Date",
          // Todo:
          key: "",
          noSend: true,
          type: "DATE",
          rules: []
        },
        {
          label: "Card Expiry Date",
          // Todo:
          key: "",
          noSend: true,
          type: "DATE",
          rules: []
        },
        {
          label: "Foreign Transaction",
          // Todo:
          key: "",
          noSend: true,
          type: "SELECT",
          values: [
            {
              value: "Yes",
              label: "Yes"
            },
            {
              value: "No",
              label: "No"
            }
          ],
          rules: []
        },
        {
          label: "POS",
          // Todo:
          key: "",
          noSend: true,
          type: "SELECT",
          values: [
            {
              value: "Yes",
              label: "Yes"
            },
            {
              value: "No",
              label: "No"
            }
          ],
          rules: []
        },
        {
          label: "ATM",
          key: "casaIsATMEnabled",
          type: "SELECT",
          values: [
            {
              value: "Yes",
              label: "Yes"
            },
            {
              value: "No",
              label: "No"
            }
          ],
          rules: []
        },
        {
          label: "Card Issued by",
          // Todo:
          key: "",
          noSend: true,
          type: "TEXT_STRING",
          rules: []
        },
        {
          label: "Transaction Blocking",
          key: "type",
          type: "SELECT",
          values: [
            {
              value: "Yes",
              label: "Yes"
            },
            {
              value: "No",
              label: "No"
            }
          ],
          rules: []
        },
        {
          label: "Remarks",
          // Todo: Need Clarification
          key: "",
          type: "TEXTAREA",
          rules: []
        }
      ]
    }
  ]
};
