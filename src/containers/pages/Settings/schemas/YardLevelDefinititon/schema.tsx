import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const YardlevelDefinitionSchema: iSettingSchema = {
  navigation: {
    list: [
      {
        title: "System Settings",
        children: [
          {
            name: "Yard Level Definition",
            key: "yard-level",
            path: `/${CONFIG.tenant}/yard-level`,
          },
        ],
      },
    ],
  },
  map: {
    "yard-level": {
      id: "yard-level",
      title: "yard-level",
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
            label: "Level Description",
            id: "description",
            field: "description",
            type: "STRING",
          },
          {
            id: "levelSequnce",
            label: "Level Sequnce",
            field: "levelSequnce",
            type: "STRING",
          },
          {
            id: "branchLevelApplicability",
            label: "Branch Level Applicability",
            field: "branchLevelApplicability",
            type: "STRING",
          },
          {
            id: "branchLevelName",
            label: "Branch Level",
            field: "branchLevelName",
            type: "STRING",
          },
        ],
      },
      createView: {
        steps: [
          {
            title: "Yard Level",
            description:
              "Yard Level Definition Details. This is the description",
            subSteps: [
              {
                title: "Yard Level Definition",
                cards: [
                  {
                    title: "Yard Level Definition",
                    description: "Fill in the details to continue",
                    fields: [
                      {
                        label: "Level Code",
                        key: "code",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please enter a value" },

                 

                          { len: 4, message: "Only four Digits" },

                        ],
                      },
                      {
                        label: "Level Name",
                        key: "name",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please enter a value" },
                        ],
                      },
                      {
                        label: "Level Description",
                        key: "description",
                        type: "TEXT_STRING",
                      },
                      {
                        label: "Level Sequence",
                        key: "levelSequnce",
                        type: "NUMBER",
                        rules: [
                          { required: true, message: "Please enter a value" },
                        ]
                      },
                      {
                        label: "Branch Level Applicability",
                        key: "branchLevelApplicability",
                        type: "SWITCH",
                        valueMap: {
                          true: "YES",
                          false: "NO",
                        },
                        defaultValue: "NO",
                        rules: [
                          { required: true, message: "Please select a value" },
                        ],
                      },
                      {
                        label: "Branch Level",
                        key: "branchLevelId",
                        type: "REMOTE_SELECT",
                        displayCondition: (formValue) =>
                          formValue.branchLevelApplicability === "YES",
                        rules: [
                          { required: true, message: "Please select a value" },
                        ],
                        //  displayCondition: (local, global) => {
                        //   return global.branchLevelApplicability === "YES"
                        //      ? true
                        //      : false;
                        //},
                        spec: {
                          api: (sdk: LOLCSDK) => () =>
                            sdk.ComnCommnService.getCommonListBranchLevelgGetByStatus(
                              "ACTIVE"
                            ),
                          label: "name",
                          value: "id",
                          extraFieldMappings: [
                            {
                              key: "branchLevelName",
                              value: "name",
                            },

                          ],
        
                        },
                        // rules: [
                        //  { required: true, message: "Please enter a value" },
                        // ],
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
        list: (sdk: LOLCSDK) => sdk.YardLevelService.getAllYardLevelDefinition,
        getById: (sdk: LOLCSDK) =>
          sdk.YardLevelService.getYardLevelDefinitionById,
        update: (sdk: LOLCSDK) =>
          sdk.YardLevelService.UpdateYardLevelDefinitionResource,
        create: (sdk: LOLCSDK) => sdk.YardLevelService.saveYardLevelDefinition,
      },
      fields: [
        {
          id: "code",
          label: "Level Code",
          field: "code",
          type: "STRING",
        },
        {
          id: "name",
          label: "Level Name",
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
