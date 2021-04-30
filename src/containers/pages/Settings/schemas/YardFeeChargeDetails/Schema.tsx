import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const YardFeeChargeDetails: iSettingSchema = {
    navigation: {
        list: [
            {
                title: "System Settings",
                children: [
                    {
                        name: "Yard Fee Charge Details",
                        key: "yardfeecharge-details",
                        path: "/AnRkr/yardfeecharge-details",
                    },
                ],

            },

        ],
    },
    map: {
        "yardfeecharge-details": {
            id: "yardfeecharge-details",
            title: "yardfeecharge Details",
            description: "",
            listView: {
                availableSearchFields: [
                    {
                        field: "assetTypeId",
                        label: "Asset Type",
                    },
                    {
                        field: "assetSubTypeId",
                        label: "Asset Sub Type",
                    },
                    {
                        field: "applicableFrequency",
                        label: "Applicable Frequency",
                    },
                    {
                        field: "feeTypeName",
                        label: "Fee Type Name",
                    },
                ],
                showViewAction: true,
                additionalViewFields:[
                    {
                        id: "applicableFrequency",
                        label: "Applicable Frequency",
                        field: "applicableFrequency",
                        type: "STRING",
                    },
                    {
                        id: "feeTypeName",
                        label: "Fee Type",
                        field: "feeTypeName",
                        type: "STRING",
                    }, {
                        id: "feeSubType",
                        label: "Fee Sub Type",
                        field: "feeSubType",
                        type: "STRING",
                    }, {
                        id: "autoCalculationFrequency",
                        label: "Auto Calculate Frequency",
                        field: "autoCalculationFrequency",
                        type: "STRING",
                    }, {
                        id: "periodTypeName",
                        label: "Period Type",
                        field: "periodTypeName",
                        type: "STRING",
                    }, {
                        id: "mandatory",
                        label: "Mandatory",
                        field: "mandatory",
                        type: "STRING",
                    },
                    {
                        id: "amount",
                        label: "Amount",
                        field: "amount",
                        type: "STRING",
                    },
                    {
                        id: "status",
                        label: "Status",
                        field: "status",
                        type: "TAG",
                    },
                ]

            },

            createView: {
                steps: [
                    {
                        title: "Yard Fee Charge Details",
                        description: "This is the description",
                        subSteps: [
                            {
                                title: "Yard Fee Charge Details",
                                cards: [
                                    {
                                        title: "",
                                        description: "",
                                        fields: [
                                            {
                                                label: "Asset Type",
                                                key: "assetType",
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
                                                rules: [
                                                    { required: true, message: "Please enter a value" },
                                                ],

                                            },
                                            {
                                                label: "Asset Sub Type",
                                                key: "assetSubTypeId",
                                                type: "REMOTE_SELECT",
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.ColYardFeeChargeDetailsAssetTypeService.getColAssetSubTypeGetByStatus(
                                                            "ACTIVE"
                                                        ),
                                                    label: "name",
                                                    value: "id",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "assetSubTypeName",
                                                            value:"name",


                                                        },

                                                    ],


                                                },
                                                rules: [
                                                    { required: true, message: "Please enter a value" },
                                                ],

                                            },
                                            {
                                                label: "Applicable Frequency",
                                                key: "applicableFrequency",
                                                type: "SELECT",
                                                rules: [
                                                    { required: true, message: "Please enter the Name" },
                                                ],
                                                values: [
                                                    { label: "IN", value:"IN"},
                                                    { label: "OUT", value:"OUT"}
                                                ]
                                            },
                                            {
                                                label: "Fee Type",
                                                key: "yardFeeTypeId",
                                                type: "REMOTE_SELECT",
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.YardFeeChargeDetailsService.getFeeTypeByStatus(
                                                            "ACTIVE"
                                                        ),
                                                    label: "name",
                                                    value: "id",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "yardFeeTypeName",
                                                            value:"name",
                                                        },
                                                    ]

                                                },
                                                rules: [
                                                    { required: true, message: "Please enter a value" },

                                                ],

                                            },
                                            {
                                                label: "Fee Sub Type",
                                                key: "feeSubType",
                                                type: "SELECT",
                                                rules: [
                                                    { required: true, message: "Please enter a value" },
                                                ],
                                                values: [
                                                    { label: "MANUAL", value:"MANUAL"},
                                                    { label: "AUTO", value:"AUTO"}
                                                ]
                                            },
                                            {
                                                label: "Auto Calculation Frequency",
                                                key: "autoCalculationFrequency",
                                                type: "SELECT",
                                                rules: [
                                                    { required: true, message: "Please enter a value" },
                                                ],
                                                displayCondition:(local,global) =>{
                                                    return local.feeSubType==="AUTO" ? true:false;
                                                },
                                                values: [
                                                    { label: "One Time", value:"ONE_TIME"},
                                                    { label: "Periodic", value:"PERIODIC"}
                                                ]
                                            },
                                            {
                                                label: "Auto Calculation Frequency",
                                                key: "autoCalculationFrequency",
                                                type: "SELECT",
                                                displayCondition:(local,global) =>{
                                                    return local.feeSubType==="MANUAL" ? true:false;
                                                },
                                                values: [
                                                    { label: "One Time", value:"One_Time"},
                                                    { label: "Periodic", value:"Periodic"}
                                                ]
                                            },
                                            {
                                                label: "Period Type",
                                                key: "periodTypeId",
                                                type: "REMOTE_SELECT",
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.comnYardfeechargeDetailsService.getAllPeriodTypeList(

                                                        ),
                                                    label: "name",
                                                    value: "id",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "periodTypeName",
                                                            value:"name",
                                                        },
                                                    ]

                                                },
                                                rules: [
                                                    { required: true, message: "Please enter a value" },
                                                ],
                                                displayCondition:(local,global) =>{
                                                    return local.autoCalculationFrequency==="Periodic" ? true:false;
                                                },

                                            },
                                            // {
                                            //     label: "Period Type",
                                            //     key: "periodTypeId",
                                            //     type: "REMOTE_SELECT",
                                            //     spec: {
                                            //         api: (sdk: LOLCSDK) => () =>
                                            //             sdk.comnYardfeechargeDetailsService.getAllPeriodTypeList(

                                            //             ),
                                            //         label: "name",
                                            //         value: "id",
                                            //         extraFieldMappings: [
                                            //             {
                                            //                 key: "periodTypeName",
                                            //                 value:"name",
                                            //             },
                                            //         ]

                                            //     },
                                            //     displayCondition:(local,global) =>{
                                            //         return local.autoCalculationFrequency==="One_Time" ? true:false;
                                            //     },


                                            // },
                                            {
                                                label: "Amount",
                                                key: "amount",
                                                type: "TEXT_STRING",
                                                rules: [
                                                    { required: true, message: "Please enter a value" },

                                                ],
                                                displayCondition:(local,global) =>{
                                                    return local.feeSubType==="AUTO" ? true:false;
                                                },

                                            },

                                            // {
                                            //     label: "Amount",
                                            //     key: "amount",
                                            //     type: "TEXT_STRING",
                                            //    readOnly:true,

                                            //     displayCondition:(local,global) =>{
                                            //         return local.feeSubType==="MANUAL" ? true:false;
                                            //     },

                                            // },

                                            {
                                                label: "Mandatory",
                                                key: "mandatory",
                                                type: "SWITCH",
                                                valueMap: {
                                                    true: "YES",
                                                    false: "NO",
                                                },
                                                defaultValue: "NO",
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
                                                rules: [
                                                    { required: true, message: "Please enter a value" },

                                                ],
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
                    sdk.YardFeeChargeDetailsService.getAllYardFeeChargeDetails,
                getById: (sdk: LOLCSDK) =>
                    sdk.YardFeeChargeDetailsService.GetYardFeeChargeDetailsById,
                create: (sdk: LOLCSDK) =>
                    sdk.YardFeeChargeDetailsService.SaveYardFeeChargeDetails,
                update: (sdk: LOLCSDK) =>
                    sdk.YardFeeChargeDetailsService.UpdateYardFeeChargeDetails,//post
            },
            fields: [
                {
                    id: "assetType",
                    label: "Asset Type",
                    field: "assetType",
                    type: "STRING",
                },
                {
                    id: "assetSubType",
                    label: "Asset Sub Type",
                    field: "assetSubType",
                    type: "STRING",
                },
                {
                    id: "applicableFrequency",
                    label: "Applicable Frequency",
                    field: "applicableFrequency",
                    type: "STRING",
                },
                {
                    id: "feeTypeName",
                    label: "Fee Type",
                    field: "feeTypeName",
                    type: "STRING",
                },
            ]
        },
    },
};