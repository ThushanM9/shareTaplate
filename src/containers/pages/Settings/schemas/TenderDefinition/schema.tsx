import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const TenderDefinitionSchema : iSettingSchema = {
  navigation: {
    list: [
      {
        title: "System Settings",
        children: [
          {
            name: "Tender Definition",
            key: "tender",
            path: `/${CONFIG.tenant}/tender`,
          },
        ],
      },
    ],
  },
  map: {
    "tender": {
      id: "tender",
      title: "tender",
      description: "",
      listView: {
        availableSearchFields: [
          {
            field: "referenceNo",
            label: "Reference No",
          },
          {
            field: "startDate",
            label: "Start Date",
          },
          {
            field: "expiryDate",
            label: "Expiry Date",
          },
          {
            field: "status",
            label: "Status",
          },
        ],
        showViewAction: true,
      },
      createView: {
        steps: [
          {
            title: "Tender Definition",
            description: "Tender Definition Details. This is the description",
            subSteps: [
              {
                title: "Tender Definition",
                cards: [
                  {
                    title: "Tender Definition",
                    description: "Fill in the details to continue",
                    fields: [
                      {
                        label: "Reference No",
                        key: "referenceNo",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please enter a value" },
                        ],
                      },
                      {
                        label: "Start Date",
                        key: "startDate",
                        type: "DATE",
                        format: "YYYY/MM/DD",
                        disablePreviousDates: true,
                       
                        defaultValue:'',
                        rules: [
                          { required: true, message: "Please select a value" },
                          
                        ],
                      },
                      {
                        label: "Expiry Date",
                        key: "expiryDate",
                        type: "DATE",
                        format: "YYYY/MM/DD",
                        disablePreviousDates: true,
                        rules: [
                          { required: true, message: "Please select a date" },
                        ],
                      },
                      {
                        label: "Description",
                        key: "description",
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
                        // rules: [{ required: true, message: "Please Select" }],
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
        sdk.TenderDefinitionService.getAllTenderDefinition,
        getById: (sdk: LOLCSDK) =>
        sdk.TenderDefinitionService.getTenderDefinitionById,
        update: (sdk: LOLCSDK) =>
        sdk.TenderDefinitionService.UpdateTenderDefinitionResource,
      create: (sdk: LOLCSDK) =>
        sdk.TenderDefinitionService.saveTenderDefinition,
      },
      fields: [
        {
          id: "referenceNo",
          label: "Reference No",
          field: "referenceNo",
          type: "STRING",
        },
        {
          id: "startDate",
          label: "Start Date",
          field: "startDate",
          type: "STRING",
        },
        {
            id: "expiryDate",
            label: "Expiry Date",
            field: "expiryDate",
            type: "STRING"
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
