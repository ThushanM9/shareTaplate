import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const CommonListItemSchema: iSettingSchema = {
  navigation: {
    list: [
      {
        title: "System Settings",
        children: [
          {
            name: "Common List Item",
            key: "common-list-item",
            path: `/${CONFIG.tenant}/common-list-item`,
          },
        ],
      },
    ],
  },
  map: {
    "common-list-item": {
      id: "common-list-item",
      title: "common-list-item",
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
          {
            field: "referenceCode",
            label: "Reference No",
          },
        ],
        showViewAction: true,
      },
      createView: {
        steps: [
          {
            title: "Common List Item",
            description: "Common List Details. This is the description",
            subSteps: [
              {
                title: "Common List Item",
                cards: [
                  {
                    title: "Common List Item",
                    description: "Fill in the details to continue",
                    fields: [
                      {
                        label: "Reference Code",
                        key: "referenceCode",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please enter a value" },
                         // { len: 4, message: "Only four Digits" },
                        ],
                      },
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
                        label: "Status",
                        key: "status",
                        type: "SWITCH",
                        valueMap: {
                          true: "ACTIVE",
                          false: "INACTIVE",
                        },
                        defaultValue: "ACTIVE",
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
        list: (sdk: LOLCSDK) => sdk.CommonListItemService.getAllCommonListItem,
        getById: (sdk: LOLCSDK) =>
          sdk.CommonListItemService.getCommonListItemById,
        update: (sdk: LOLCSDK) =>
          sdk.CommonListItemService.updateCommonListItemResource,
        create: (sdk: LOLCSDK) => sdk.CommonListItemService.saveCommonListItemService,
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
        {
          id: "referenceCode",
          label: "Reference Code",
          field: "referenceCode",
          type: "STRING",
        },
      ],
    },
  },
};
