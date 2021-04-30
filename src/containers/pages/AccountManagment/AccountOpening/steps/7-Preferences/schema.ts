import { LOLCSDK } from "../../../../../../sdk";

export const AccountOpening_PreferencesSchema = {
  tabs: [
    {
      title: "Notification Methods",
      cards: [
        {
          // Todo: These are checkboxes (Email,Whatsapp,SmS in figma)
          title: "Notification Methods",
          description: "Notification Methods",
          fields: [
            {
              label: "Type",
              key: "notificationTypes",
              type: "REMOTE_SELECT",
              spec: {
                // Todo: useGetAlertType
                api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
                value: "name",
                label: "name",
              },
              rules: [],
            },
            {
              type: "COLLECTION",
              fields: [
                {
                  label: "Contact Name",
                  key: "name",
                  type: "TEXT_STRING",
                  rules: [],
                },
                {
                  label: "Contact Number",
                  key: "name",
                  type: "TEXT_STRING",
                  rules: [],
                },
              ],
            },
          ],
        },
        {
          title: "Alerting Rules",
          description: "Alerting Rules",
          sections: [
            {
              type: "COLLECTION",
              fields: [
                {
                  label: "Event Category",
                  key: "eventCategory",
                  type: "SELECT",
                  // Todo: //useGetAlertEventCatogory()
                  values: [
                    {
                      value: "Transactional",
                      lable: "Transactional",
                    },
                    {
                      value: "Promotional",
                      lable: "Promotional",
                    },
                  ],
                  rules: [],
                },
                {
                  label: "Event",
                  key: "alertEvent",
                  type: "SELECT",
                  // Todo: //useGetAlertType()
                  values: [],
                  rules: [],
                },
                {
                  label: "Limit",
                  // Todo: //useGetAlertLimit()?
                  key: "transactionLimit",
                  type: "NUMBER",
                  rules: [],
                },
              ],
            },
            // Todo: Rest of the Fields are missing
            // Todo: checkboxes below this table send:false
          ],
        },
      ],
    },
    // Tab - Chequebook Details
    {
      title: "Chequebook Details",
      cards: [
        {
          title: "Chequebook Details",
          description: "Chequebook Details",
          fields: [
            {
              label: "Chequebook Enabled",
              key: "casaIsChequeBookEnabled",
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
              label: "Cheque Type",
              // Todo ?
              key: "",
              type: "SELECT",
              values: [
                {
                  value: "BOOK",
                  label: "BOOK",
                },
                {
                  value: "ROLE",
                  label: "ROLE",
                },
                {
                  value: "LEAF",
                  label: "LEAF",
                },
              ],
              rules: [],
            },
            {
              label: "Chequebook Category",
              key: "chequebookCategory",
              type: "REMOTE_SELECT",
              // noSend:true,
              spec: {
                // Todo:  //useGetChequebookTypes()
                api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
                value: "",
                label: "",
              },
              rules: [],
            },
            {
              label: "Chequebook type",
              key: "chequeBookTypeId",
              type: "REMOTE_SELECT",
              spec: {
                // Todo:
                // useGetChequebookTypes() -> chequebookType
                api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
                value: "",
                label: "",
              },
              rules: [],
            },
            {
              label: "Stock Type",
              key: "chequeBookStockTypeId",
              type: "REMOTE_SELECT",
              spec: {
                // Todo:
                // useGetChequebookTypes() -> stockType
                api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
                value: "",
                label: "",
              },
              rules: [],
            },
            {
              label: "Request Period",
              key: "periodMethod",
              type: "NUMBER",
              rules: [],
            },
            {
              label: "Maximum Allowed chequebooks per request",
              // Todo: Same Key used above
              key: "periodMethod",
              type: "NUMBER",
              rules: [],
            },
            {
              label: "Auto Chequebook Request Period Type",
              // Todo: Same Key used above
              key: "periodMethod",
              type: "SELECT",
              values: [
                {
                  value: "Day",
                  label: "Day",
                },
                {
                  value: "Week",
                  label: "Week",
                },
                {
                  value: "Month",
                  label: "Month",
                },
                {
                  value: "Year",
                  label: "Year",
                },
              ],
              rules: [],
            },
            {
              label: "Auto Chequebook Request Period length",
              // Todo:
              key: "casaAutoChequeBookRequestPeriod",
              type: "NUMBER",
              rules: [],
            },
            // Todo:  // dont know about checkboxes below this send:false
          ],
        },
      ],
    },
    // Tab - Passbook Details
    {
      title: "Passbook Details",
      cards: [
        {
          label: "Passbook Number",
          key: "",
          // Todo ?
          noSend: true,
          type: "TEXT_STRING",
          rules: [],
        },
        {
          label: "Status",
          // Todo
          noSend: true,
          key: "",
          type: "SELECT",
          values: [
            {
              value: "Day",
              label: "Day",
            },
            {
              value: "Week",
              label: "Week",
            },
            {
              value: "Month",
              label: "Month",
            },
            {
              value: "Year",
              label: "Year",
            },
          ],
          rules: [],
        },
      ],
    },
    // Tab - Sweep Insruction
    {
      title: "Sweep Instruction",
      description: "Sweep Instruction",
      fields: [
        {
          label: "Auto Sweep Enable",
          key: "sweepingEnabled",
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
          label: "Sweep Limit",
          key: "sweepingLimit",
          type: "NUMBER",
          rules: [],
        },
        {
          label: "Maximum Allowed chequebooks per request",
          // Todo: Conflic maximum and minimum
          key: "minimumAmountForSweeping",
          type: "NUMBER",
          rules: [],
        },
        {
          label: "Minimum Amount for Sweep Limit",
          // Todo: Conflic maximum and minimum
          key: "minimumAmountForSweeping",
          type: "NUMBER",
          rules: [],
        },
        {
          label: "Period Method",
          type: "REMOTE_SELECT",
          // useGetSweepPeriod,
          // Todo:
          key: "",
          noSend: true,
          spec: {
            api: (sdk: LOLCSDK) => sdk.ProductBCAService.getAllFrequencies,
            value: "",
            label: "",
          },
          rules: [],
        },
        {
          label: "Recurring Sweeping Enable",
          key: "recurringSweepingAllowed",
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
      ],
    },
  ],
};
