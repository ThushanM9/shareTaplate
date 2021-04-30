export const AccountOpening_ChargesSchema = {
  cards: [
    {
      title: "Account Opening",
      description: "Account Opening",
      sections: [
        {
          fields: [
            {
              label: "Account Opening User",
              //  Todo: getCustomerById()
              key: "perPrefferedName",
              targetKey: "",
              noSend: true,
              type: "TEXT_STRING",
              rules: []
            },
            {
              label: "Card Issue Date",
              key: "name",
              type: "DATE",
              rules: []
            }
          ]
        },
        {
          title: "Charges",
          fields: [
            {
              label: "Total Charges",
              // Todo: How is this generated
              key: "",
              noSend: true,
              type: "TEXT_STRING",
              rules: []
            },
            {
              label: "Charge Type Name",
              // Todo: How is this generated
              key: "",
              noSend: true,
              type: "TEXT_STRING",
              rules: []
            },
            {
              label: "Charges Amount",
              key: "chargeAmount",
              type: "NUMBER",
              rules: []
            },
            {
              label: "Notes",
              // Todo:
              key: "",
              noSend: true,
              type: "TEXT_STRING",
              rules: []
            }
          ]
        }
      ]
    }
  ]
};
