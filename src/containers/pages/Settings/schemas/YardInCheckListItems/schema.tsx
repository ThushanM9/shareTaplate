import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const YardInCheckListItemsSchema: iSettingSchema = {
  navigation: {
    list: [
      {
        title: "System Settings",
        children: [
          {
            name: "Yard In Check List Items",
            key: "yard-in-check-list-items",
            path: `/${CONFIG.tenant}/yard-in-check-list-items`,
          },
        ],
      },
    ],
  },
  map: {
    "yard-in-check-list-items": {
      id: "yard-in-check-list-items",
      title: "yard-in-check-list-items",
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
        ],
      },
      createView: {
        steps: [
          {
            title: "Yard In Check List Items",
            description:
              "Yard In Check List Items Details. This is the description",
            subSteps: [
              {
                title: "Yard In Check List Items",
                cards: [
                  {
                    title: "Yard In Check List Items",
                    description: "Fill in the details to continue",
                    fields: [
                    //   {
                    //     label: "Asset Type",
                    //     key: "code",
                    //     type: "REMOTE_SELECT",
                    //     rules: [
                    //       { required: true, message: "Please enter a value" },
                    //     ],
                    //     spec: {
                    //       api: (sdk: LOLCSDK) => () =>
                    //         sdk.ComnCommnService.getCommonListBranchLevelgGetByStatus(
                    //           "ACTIVE"
                    //         ),
                    //       label: "name",
                    //       value: "id",
                    //       extraFieldMappings: [
                    //         {
                    //           key: "branchLevelName",
                    //           value: "name",
                    //         },
                    //       ],
                    //     },
                    //    },
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
         list: (sdk: LOLCSDK) => sdk.YardInCheckListItemsService.getAllYardInCheckListItems,
        getById: (sdk: LOLCSDK) =>
          sdk.YardInCheckListItemsService.getYardInCheckListItemsById,
        update: (sdk: LOLCSDK) =>
          sdk.YardInCheckListItemsService.UpdateYardInCheckListItemsResource,
        create: (sdk: LOLCSDK) => sdk.YardInCheckListItemsService.saveYardInCheckListItems,
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
