import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const AuctionSchema: iSettingSchema = {
  navigation: {
    list: [
      {
        title: "System Settings",
        children: [
          {
            name: "Auction",
            key: "auction",
            path: `/${CONFIG.tenant}/auction`,
          },
        ],
      },
    ],
  },
  map: {
    auction: {
      id: "auction",
      title: "auction",
      description: "",
      listView: {
        availableSearchFields: [
          {
            field: "referenceNo",
            label: "Reference No",
          },
          {
            field: "auctioneerId",
            label: "Auctioneer",
          },
          {
            field: "dateTime",
            label: "Date",
          },
          {
            field: "status",
            label: "Status",
          },
        ],
        showViewAction: true,
        additionalViewFields: [
          {
            label: "Venue",
            id: "venue",
            field: "venue",
            type: "STRING",
          },
          {
            id: "description",
            label: "Description",
            field: "description",
            type: "STRING",
          },
        ],
      },
      createView: {
        steps: [
          {
            title: "Auction",
            description: "Auction Details. This is the description",
            subSteps: [
              {
                title: "Auction",
                cards: [
                  {
                    title: "Auction",
                    description: "Fill in the details to continue",
                    fields: [
                      {
                        label: "Reference No",
                        key: "referenceNo",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please enter a value" },
                          //   { len: 4, message: "Only four Digits" },
                        ],
                      },
                      {
                        label: "Auctioneer",
                        key: "auctioneerId",
                        type: "REMOTE_SELECT",
                        spec: {
                          api: (sdk: LOLCSDK) => () =>
                            sdk.CommonSuppliesEntitiesAuctioneerService.getCommonSuppliesEntitiesAuctioneerGetByStatus(
                              "ACTIVE"
                            ),
                          label: "supReferenceCode",
                          value: "id",
                          extraFieldMappings: [
                            {
                              key: "auctioneerReferenceCode",
                              value: "supReferenceCode",
                            },
                          ],
                        },

                        rules: [
                          { required: true, message: "Please select a value" },
                        ],
                      },
                      {
                        label: "Date",
                        key: "dateTime",
                        type: "DATE",
                        format: "YYYY-MM-DD HH:MM:SS",
                        showTime: true,
                        disablePreviousDates: true,
                        rules: [
                          { required: true, message: "Please select a time" },
                        ],
                      },

                      {
                        label: "Venue",
                        key: "venue",
                        type: "TEXT_STRING",
                        rules: [
                          { required: true, message: "Please select a time" },
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
        list: (sdk: LOLCSDK) => sdk.AuctionService.getAllAuction,
        getById: (sdk: LOLCSDK) => sdk.AuctionService.getAllAuctionById,
        update: (sdk: LOLCSDK) => sdk.AuctionService.UpdateAuctionResource,
        create: (sdk: LOLCSDK) => sdk.AuctionService.saveAuction,
      },
      fields: [
        {
          id: "referenceNo",
          label: "Refernce No",
          field: "referenceNo",
          type: "STRING",
        },
        {
          id: "auctioneerFirstName",
          label: "Auctioneer",
          field: "auctioneerFirstName",
          type: "STRING",
        },
        {
          id: "auctioneerLastName",
          label: "Auctioneer",
          field: "auctioneerLastName",
          type: "STRING",
        },
        {
          id: "dateTime",
          label: "Date",
          field: "dateTime",
          type: "DATE",
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
