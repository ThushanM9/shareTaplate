import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const YardInConditionSchema: iSettingSchema = {
  navigation: {
    list: [
      {
        title: "System Settings",
        children: [
          {
            name: "Yard In Conditions",
            key: "yard-in-conditions",
            path: `/${CONFIG.tenant}/yard-in-conditions`,
          },
        ],
      },
    ],
  },
  map: {
    "yard-in-conditions": {
      id: "yard-in-conditions",
      title: "yard-in-conditions",
      description: "",
      listView: {
        availableSearchFields: [
          {
            field: "code",
            label: "Code",
          },
          {
            field: "name",
            label: "Name",
          },
          {
            field: "status",
            label: "Status",
          },
        ],
        showViewAction: true,
        additionalViewFields: [
          {
            label: "Description",
            id: "description",
            field: "description",
            type: "STRING",
          },
          {
            label: "Check Date ",
            id: "checkDateType",
            field: "Check Date ",
            type: "STRING",
          },
       
        ],
      },
      createView: {
        steps: [
          {
            title: "Yard In Conditions",
            description: "Yard In Conditions. This is the description",
            subSteps: [
              {
                title: "Yard In Conditions",
                cards: [
                  {
                    title: "Yard In Conditions",
                    description: "Fill in the details to continue",
                    fields: [
                      {
                        label: "Code",
                        key: "code",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please enter a value" },
                          { len: 4, message: "Only four Digits" },
                        ],
                      },
                      {
                        label: "Name",
                        key: "name",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please enter a value" },
                        ],
                      },
                      {
                        label: "Description",
                        key: "description",
                        type: "TEXT_STRING",
                      },
                      {
                        label: "Check Date",
                        key: "checkDateType",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please select a date" },
                        ],
                      },
                      {
                        label: "Status",
                        key: "status",
                        type: "SWITCH",
                        valueMap: {
                          true: "ACTIVE",
                          false: "INACTIVE",
                        },
                        defaultValue: "ACTIVE",
                        rules: [{ required: true, message: "Please Select" }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        sideBar: {
          title: "Information",
          cards: [
            {
              title: "General Settings",
              body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
                            enim vitae est imperdiet mollis`,
            },
          ],
        },
      },

      apis: {
        list: (sdk: LOLCSDK) => sdk.YardInConditionService.getAllYardInCondition,
        getById: (sdk: LOLCSDK) =>
          sdk.YardInConditionService.getYardInConditionById,
        update: (sdk: LOLCSDK) =>
          sdk.YardInConditionService.UpdateYardInConditionResource,
        create: (sdk: LOLCSDK) =>
          sdk.YardInConditionService.saveYardInCondition,
      },
      fields: [
        {
          id: "code",
          label: "Code",
          field: "code",
          type: "STRING",
        },
        {
          id: "name",
          label: "Name",
          field: "name",
          type: "STRING",
        },
        {
          id: "status",
          label: "Status",
          field: "status",
          type: "TAG",
        },
      ],
    },
  },
};
