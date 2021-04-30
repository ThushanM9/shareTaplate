import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const ChequeBookTypeSchema: iSettingSchema = {
  navigation: {
    list: [
      {
        title: "Chequebook Configuration",
        children: [
          {
            name: "Chequebook Type",
            key: "chequebook-type",
            path: `/${CONFIG.tenant}/chequebook-type`,
            
          },
        ],
      },
    ],
  },
  map: {
    "chequebook-type": {
      id: "chequebook-type",
      title: "Chequebook Type",
      description: "",
      listView: {
        availableSearchFields: [
          {
            field: "chequeBookTypeCode",
            label: "Code",
            
          },
          {
            field: "chequeBookTypeName",
            label: "Name",
          },
          {
            field: "chequeBookTypeStatus",
            label: "Status",
          },
        ],
      },
      createView: {
        steps: [
          {
            title: "Chequebook Type Details",
            description: "Add in chequebook type details",
            subSteps: [
              {
                title: "Chequebook Type Details",
                cards: [
                  {
                    title: "Chequebook Type Details",
                    description: "Fill in the details to continue",
                    fields: [
                      {
                        label: "Code",
                        key: "chequeBookTypeCode",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please enter a value" },
                          {
                            len: 4,
                            message: "Item code should be 4 Charachters",
                          },
                        ],
                      },
                      {
                        label: "Name",
                        key: "chequeBookTypeName",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please enter a value" },
                        ],
                      },
                      {
                        label: "Description",
                        key: "chequeBookTypeDescription",
                        type: "TEXTAREA",
                        rules: [],
                      },
                      {
                        label: "Stock Category",
                        key: "chequeStockCategoryId",
                        type: "REMOTE_SELECT",
                        spec: {
                          api: (sdk: LOLCSDK) => () =>
                            sdk.AccountService.getCommonListByStatusAndReferenceCode(
                              "s",
                              "ACTIVE"
                            ),
                          value: "id",
                          label: "accComnListDesc",
                          extraFieldMappings: [
                            {
                              key: "chequeStockCategoryDescription",
                              value: "accComnListDesc",
                            },
                          ],
                        },
                        rules: [
                          { required: true, message: "Please enter a value" },
                        ],
                      },
                      {
                        label: "Active",
                        key: "chequeBookTypeStatus",
                        type: "SWITCH",
                        valueMap: {
                          true: "ACTIVE",
                          false: "INACTIVE",
                        },
                        rules: [],
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
              title: "Chequebook Type",
              body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
                            enim vitae est imperdiet mollis`,
            },
          ],
        },
      },
      apis: {
        list: (sdk: LOLCSDK) =>
          sdk.ChequeBookManagementService.getAllChequeBookTypes,
         getById: (sdk: LOLCSDK) =>
           sdk.ChequeBookManagementService.getChequeBookTypeById,
        update: (sdk: LOLCSDK) =>
          sdk.ChequeBookManagementService.updateChequeBookTypeById,
        create: (sdk: LOLCSDK) =>
          sdk.ChequeBookManagementService.saveChequeBookType,
        // Stock Category SDK not available
        //stockCategory: (sdk: LOLCSDK) => sdk.ChequeBookManagementService.
      },
      fields: [
        {
          id: "chequeBookTypeCode",
          label: "Code",
          field: "chequeBookTypeCode",
          type: "STRING",
        },
        {
          id: "chequeBookTypeName",
          label: "Name",
          field: "chequeBookTypeName",
          type: "STRING",
        },
        // Was asked to remove
        // {
        //   id: "chequeStockCategoryId",
        //   label: "Stock Category",
        //   field: "chequeStockCategoryId",
        //   type: "STRING"
        // },
        {
          id: "chequeBookTypeStatus",
          label: "Status",
          width: 120,
          field: "chequeBookTypeStatus",
          type: "TAG",
        },
      ],
    },
  },
};
