import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const YardReleaseTypeSchema: iSettingSchema = {
  navigation: {
    list: [
      {
        title: "System Settings",
        children: [
          {
            name: "Yard Release Type",
            key: "yard-release-type",
            path: `/${CONFIG.tenant}/yard-release-type`,
          },
        ],
      },
    ],
  },
  map: {
    "yard-release-type": {
      id: "yard-release-type",
      title: "yard-release-type",
      description: "",
      listView: {
        availableSearchFields: [
          {
            field: "code",
            label: "Level Code",
          },
          {
            field: "name",
            label: "Level Name",
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
            title: "Yard Release Type",
            description: "Yard Release Type Details. This is the description",
            subSteps: [
              {
                title: "Yard Release Type",
                cards: [
                  {
                    title: "Yard Release Type",
                    description: "Fill in the details to continue",
                    fields: [
                      {
                        label: "Release Type",
                        key: "yardReleaseType",
                        type: "SELECT",
                        values: [
                          { label: "PERMANENT", value: "PERMANENT" },
                          { label: "TEMPORARY", value: "TEMPORARY" },
                        ],
                        rules: [
                          { required: true, message: "Please enter a value" },
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
                        label: " Description",
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
        list: (sdk: LOLCSDK) =>
          sdk.YardReleaseTypeService.getAllYardReleaseType,
        getById: (sdk: LOLCSDK) =>
          sdk.YardReleaseTypeService.getYardReleaseTypeById,
        update: (sdk: LOLCSDK) =>
          sdk.YardReleaseTypeService.updateYardReleaseTypeResource,
        create: (sdk: LOLCSDK) =>
          sdk.YardReleaseTypeService.saveYardReleaseTypeService,
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
          id: "yardReleaseType",
          label: "ReleaseType",
          field: "yardReleaseType",
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
