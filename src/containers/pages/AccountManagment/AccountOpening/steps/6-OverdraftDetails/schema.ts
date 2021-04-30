import { EditableWidgetSchema } from "../../../../../../schemas/widget-schema";

export const AccountOpening_OverdraftDetailsSchema = {
  cards: [
    // Card - Overdraft Details
    {
      title: "Overdraft Details",
      description: "Overdraft Details",
      fields: [
        {
          label: "Minus Overdraft",
          // Todo:
          key: "",
          type: "CHECKBOX",
          valueMap: {
            true: "TRUE",
            false: "FALSE"
          },
          rules: []
        },
        {
          label: "Overdraft Limit",
          key: "casaMaxOverdraftLimit",
          type: "NUMBER",
          rules: []
        },
        {
          label: "Unit",
          key: "unit",
          type: "NUMBER",
          rules: []
        },
        {
          label: "Buffer Limit",
          key: "bufferAmount",
          type: "NUMBER",
          rules: []
        },
        {
          label: "Interest on Overdraft",
          key: "casaEnableInterestOnOverdraft",
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
          label: "Recovery Percentage",
          key: "recoveryPercentage",
          type: "NUMBER",
          rules: []
        },
        {
          label: "Allowed Overdraft",
          noSend: true,
          // Todo:
          key: "",
          type: "SELECT",
          values: [
            {
              value: "Yes",
              lable: "Yes"
            },
            {
              value: "No",
              lable: "No"
            }
          ],
          rules: []
        }
      ]
    },
    // Card - Recovery Account
    {
      title: "Recovery Account",
      description:
        "Add multiple recovery accoutns for a one overdraft facility",
      // Todo : cant find the fields in post method have to ask
      // Todo : getAccountById()?
      noSend: true,
      table: {
        fields: [
          {
            label: "Account Number",
            key: "perId",
            dataType: "STRING",
            targetkey: ""
          },
          {
            label: "Account Name",
            key: "perPrefferedName",
            dataType: "STRING",
            targetkey: ""
          },
          {
            label: "Portion",
            key: "",
            targetKey: "",
            isEditable: true,
            widgetSchema: {
              type: "NUMBER"
            } as EditableWidgetSchema
          }
        ]
      }
    }
  ]
};
