import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";


export const YardFeeTypeSchema: iSettingSchema = {
    navigation: {
        list: [
            {
                title: "System Settings",
                children: [
                    {
                        name: "Yard Fee Type",
                        key: "yardfee-type",
                        path: "/AnRkr/yardfee-type",
                    },
                ],

            },
        ],
    },
    map: {
        "yardfee-type": {
            id: "yardfee-type",
            title: "yardfee Type",
            description: "",
            listView: {
                availableSearchFields: [
                    {
                        field: "code",
                        label: "Yard Code",
                    },
                    {
                        field: "name",
                        label: "Yard Name",
                    },
                    {
                        field: "status",
                        label: "Status",
                    },
                    {
                        field: "assetTypeId",
                        label: "Asset",
                    },
                ],
                showViewAction: true,
            },

            createView: {
                steps: [
                    {
                        title: "Yard Fee Type Details",
                        description: "This is the description",
                        subSteps: [
                            {
                                title: "Yard Fee Type Details",
                                cards: [
                                    {
                                        title: "",
                                        description: "",
                                        fields: [
                                            {
                                                label: "Asset",
                                                key: "assetTypeId",
                                                type: "REMOTE_SELECT",

                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.ColYardFeeChargeDetailsAssetTypeService.getColAssetTypeGetByStatus(
                                                            "ACTIVE"
                                                        ),

                                                    label: "name",
                                                    value: "id",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "assetTypeName",
                                                            value:"name",
                                                        },

                                                    ],
                                                },

                                            },
                                            {
                                                label: "Code",
                                                key: "code",
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
                                                key: "name",
                                                type: "TEXT_STRING",
                                                rules: [
                                                    { required: true, message: "Please enter the Name" },
                                                ],
                                            },
                                            {
                                                label: "Description",
                                                key: "description",
                                                type: "TEXTAREA",
                                                rules: [],
                                            },
                                            {
                                                label: "Module",
                                                key: "module",
                                                type: "SELECT",
                                                rules: [
                                                    { required: true, message: "Please enter a value" },
                                                ],
                                                values: [
                                                    { label: "Saving", value: "Saving" },
                                                    { label: "Factoring", value: "Factoring" },

                                                ]
                                            },
                                            {
                                                label: "Transaction Sub Code",
                                                key: "transactionSubCode",
                                                type: "TEXT_STRING",
                                                rules: [
                                                    { required: true, message: "Please enter a value" },
                                                ],

                                            },

                                            {
                                                label: "Active",
                                                key: "status",
                                                type: "SWITCH",
                                                valueMap: {
                                                    true: "ACTIVE",
                                                    false: "INACTIVE",
                                                },
                                                defaultValue: "ACTIVE",
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
                    title: "",
                    cards: [
                        {
                            title: "Yard Fee Type",
                            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
                                          enim vitae est imperdiet mollis`,
                        },
                    ],
                },
            },
            apis: {
                list: (sdk: LOLCSDK) =>
                    sdk.YardFeeTypeService.getAllYardFeeType,
                getById: (sdk: LOLCSDK) =>
                    sdk.YardFeeTypeService.getYardFeeTypeById,
                create: (sdk: LOLCSDK) =>
                    sdk.YardFeeTypeService.saveYardFeeType,//put
                update: (sdk: LOLCSDK) =>
                    sdk.YardFeeTypeService.updateYardFeeTypeById,//post

            },
            fields: [
                {
                    id: "code",
                    label: "Yard Code",
                    field: "YardFeeTypeCode",
                    type: "STRING",
                },
                {
                    id: "name",
                    label: "Yard Name",
                    field: "YardFeeTypeName",
                    type: "STRING",
                },

                {
                    id: "assetTypeId",
                    label: "Asset",
                    field: "YardFeeTypeAsset",
                    type: "STRING",
                },
                {
                    id: "status",
                    label: "Status",
                    field: "YardFeeTypeStatus",
                    type: "TAG",
                },
            ],
        },
    },
};
