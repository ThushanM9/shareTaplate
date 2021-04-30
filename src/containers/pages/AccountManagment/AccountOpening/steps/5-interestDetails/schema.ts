import { LOLCSDK } from "../../../../../../sdk";

export const AccountOpening_InterestDetailsSchema = {
  tabs: [
    // Tab - Credit Interest
    {
      title: "Credit Interest",
      cards: [
        // Card - Credit Interest Rate Details
        {
          title: "Credit Interest Rate Details",
          description: "These are the basic details of the account",
          fields: [
            {
              label: "Enable Interest Rate",
              noSend: true,
              // Todo:
              key: "",
              type: "SELECT",
              values: [
                {
                  value: "Yes",
                  label: "Yes",
                },
                {
                  value: "No",
                  label: "No",
                },
              ],
              rules: [],
            },
            {
              label: "Special Rate",
              key: "specialRate",
              type: "NUMBER",
              rules: [],
            },
            {
              label: "Customize Interest Rate Calculation Date",
              // Todo:
              noSend: true,
              key: "",
              type: "CHECKBOX",
              valueMap: {
                true: "ACTIVE",
                false: "INACTIVE",
              },
              rules: [],
            },
            {
              label: "Interest Calculation Start Date",
              key: "code",
              type: "INPUT_DATE",
              rules: [],
            },
          ],
        },
        // Card - Credit Interest Posting Details
        {
          title: "Credit Interest Posting Details",
          description: "Credit Interest Posting Details",
          fields: [
            {
              label: "Posting Type",
              // Todo: Clarification <InterestDetailsResource>
              key: "crebitInterestPostType",
              type: "SELECT",
              values: [
                {
                  value: "Self",
                  lable: "Self",
                },
                {
                  value: "Other",
                  lable: "Other",
                },
              ],
              rules: [],
            },
            {
              label: "Posting Method",
              // Todo:
              noSend: true,
              key: "",
              type: "SELECT",
              values: [
                {
                  value: "INTERNAL",
                  label: "INTERNAL",
                },
                {
                  value: "EXTERNAL",
                  label: "EXTERNAL",
                },
              ],
              rules: [],
            },
            {
              label: "Pay Account Number",
              // Todo:
              noSend: true,
              key: "",
              type: "TEXT_STRING",
              rules: [],
            },
            {
              label: "Bank/ Finance Institute",
              //Todo: "<InterestDetailsResource> ??
              key: "bankName", // bankId,
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
                value: "bankId",
                label: "bankName",
              },
              rules: [],
            },
            {
              label: "Bank/ Finance Institute Branch",
              //Todo: "<InterestDetailsResource> ??
              key: "bankBranchName", // bankId,
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
                value: "bankBranchId",
                label: "bankBranchName",
              },
              rules: [],
            },
            {
              label: "Payment Mode",
              //Todo: "<InterestDetailsResource> ??
              key: "paymentModeDescription", // bankId,
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
                value: "paymentModeId",
                label: "paymentModeDescription",
              },
              rules: [],
            },
            {
              label: "Payment Send Mode",
              //Todo: "<InterestDetailsResource> ??
              key: "paymentSendMethod", // bankId,
              type: "REMOTE_SELECT",
              spec: {
                api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
                value: "paymentSendMethodId",
                label: "paymentSendMethod",
              },
              rules: [],
            },
            {
              label: "Portion",
              key: "propotionRatio",
              type: "NUMBER",
              rules: [],
              // Todo; InterestDetailsResource
            },
          ],
        },
        // Card - Credit Interest Benefiary Details
        {
          title: "Credit Interest Beneficiary Details",
          description: "Credit Interest Beneficiary Details",
          sections: [
            {
              title: "Internal Party",
              description: "",
              forms: {
                // Todo: yet to figure out send:false
                "Internal Party": [
                  {
                    label: "Payment Mode",
                    key: "",
                    type: "DATA",
                  },
                  {
                    label: "Benefiary Name",
                    key: "",
                    type: "DATA",
                  },
                  {
                    label: "Type",
                    key: "",
                    type: "DATA",
                  },
                  {
                    label: "Portion",
                    key: "",
                    type: "DATA",
                  },
                  {
                    label: "Action",
                    key: "",
                    type: "DATA",
                  },
                ],
              },
            },
            {
              title: "",
              description: "",
              forms: {
                // Todo:yet to figure out send:false
                "External Party": [
                  {
                    label: "Financial Institution",
                    key: "",
                    type: "DATA",
                  },
                  {
                    label: "Branch Number",
                    key: "",
                    type: "DATA",
                  },
                  {
                    label: "Name",
                    key: "",
                    type: "DATA",
                  },
                  {
                    label: "Portion",
                    key: "",
                    type: "DATA",
                  },
                  {
                    label: "Action",
                    key: "",
                    type: "DATA",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    // Tab - Debit Interes
    {
      title: "Debit Interes",
      cards: [
        // Card - Debit Interest Posting Details
        {
          title: "Debit Interest Posting Details",
          description: "Debit Interest Posting Details",
          fields: [
            {
              label: "Posting Method",
              key: "crebitInterestPostType",
              type: "SELECT",
              // Todo ?   key: "<InterestDetailsResource>",
              values: [
                {
                  value: "Self",
                  label: "Self",
                },
                {
                  value: "Other",
                  label: "Other",
                },
              ],
              rules: [],
            },
          ],
          // Todo: have to ask from lolc no section in post method
          "Posting table": {
            type: "TABLE",
            send: false,
          },
        },
      ],
    },
  ],
};
