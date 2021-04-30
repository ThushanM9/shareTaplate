import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const YardCreationSchema: iSettingSchema = {
    navigation: {
        list: [
            {
                title: "System Settings",
                children: [
                    {
                        name: "Yard Creation",
                        key: "yard",
                        path: `/${CONFIG.tenant}/yard`,
                    },
                ],
            },
        ],
    },
    map: {
        "yard": {
            id: "yard",
            title: "Yard Creation",
            description: "",
            listView: {
                availableSearchFields: [
                    {
                        field: "code",
                        label: "Code",
                    },
                    {
                        field: "status",
                        label: "Status",
                    },
                ],
                showViewAction: true,
                additionalViewFields: [
                    {
                        field: "description",
                        label: "Description",
                        id: "description",
                        type: "STRING",
                    },
                    {
                        field: "levelId",
                        label: "Yard Level",
                        id: "levelId",
                        type: "STRING",
                    },
                    {
                        field: "levelName",
                        label: "Yard Level Name",
                        id: "levelName",
                        type: "STRING",
                    },
                    {
                        field: "yardLocationId",
                        label: "Yard Location ID",
                        id: "yardLocationId",
                        type: "STRING",
                    },
                    {
                        field: "yardInChargeId",
                        label: "Yard In-charge ID",
                        id: "yardInChargeId",
                        type: "STRING",
                    },
                    {
                        field: "parentalYardId",
                        label: "Parental Yard",
                        id: "parentalYardId",
                        type: "STRING",
                    },
                    {
                        field: "securityFirmId",
                        label: "Security Firm",
                        id: "securityFirmId",
                        type: "STRING",
                    },
                ]
            },
            createView: {
                steps: [
                    {
                        title: "Yard Creation",
                        description: "Yard Creation Details. This is the description",
                        subSteps: [
                            {
                                title: "Yard Creation",
                                cards: [
                                    {
                                        title: "Yard Creation",
                                        description: "Fill in the details to continue",
                                        fields: [
                                            {
                                                label: "Yard Code",
                                                key: "code",
                                                type: "TEXT_STRING",
                                                rules: [
                                                    { required: true, message: "Please enter a value" },
                                                    { len: 4, message: "Only four digit alpha numeric" }
                                                ],
                                            },
                                            {
                                                label: "Yard Name",
                                                key: "name",
                                                type: "TEXT_STRING",
                                                rules: [
                                                    { required: true, message: "Please enter a value" },
                                                ],
                                            },
                                            {
                                                label: "Yard Description",
                                                key: "description",
                                                type: "TEXTAREA",
                                            },
                                            {
                                                label: "Yard Level",
                                                key: "levelId",
                                                type: "REMOTE_SELECT",
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.YardCreationService.getActiveYardLevels("ACTIVE"),
                                                    value: "code",
                                                    label: "levelPlusName",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "branchLevelApplicability",
                                                            value: "branchLevelApplicability",
                                                        },
                                                        {
                                                            key: "yardLevels",
                                                            value: "id"
                                                        },
                                                        {
                                                            key: "yardLevelName",
                                                            value: "name"
                                                        },
                                                        {
                                                            key: "levelId",
                                                            value: "code"
                                                        },
                                                        {
                                                            key: "level",
                                                            value: "levelSequnce"
                                                        }
                                                    ],
                                                },
                                                rules: [
                                                    { required: true, message: "Please select a value" },
                                                ],
                                            },
                                            {
                                                label: "",
                                                key: "yardLevelType",
                                                type: "RADIO",
                                                values: [
                                                    { label: "Internal", value: "INTERNAL" },
                                                    { label: "External", value: "EXTERNAL" },
                                                ],
                                                displayCondition: (local, global) => {
                                                    return local.branchLevelApplicability === "NO" ? true : false;
                                                }
                                            },
                                            {
                                                label: "Yard Location Name",
                                                key: "yardLocationId",
                                                type: "REMOTE_SELECT",
                                                displayCondition: (local, global) => {
                                                    return local.branchLevelApplicability === "YES" ? true : false;
                                                },
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.YardCreationService.getCommonBranches("546"),
                                                    value: "id",
                                                    label: "name",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "yardLocationAddress",
                                                            value: "address",
                                                        },
                                                        {
                                                            key: "yardLocationName",
                                                            value: "name"
                                                        }
                                                    ],
                                                },
                                                rules: [
                                                    { required: true, message: "Please select a value" },
                                                ],
                                            },
                                            {
                                                label: "Yard Location Name",
                                                key: "yardLocationId",
                                                type: "REMOTE_SELECT",
                                                displayCondition: (local, global) => {
                                                    return local.yardLevelType === "INTERNAL" && local.branchLevelApplicability === "NO" ? true : false;
                                                },
                                                rules: [
                                                    { required: true, message: "Please select a value" },
                                                ],
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.YardCreationService.getYardSuppleirs("Internal", "ACTIVE"),
                                                    value: "id",
                                                    label: "perFullName",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "yardLocationName",
                                                            value: "perFullName"
                                                        }
                                                    ]
                                                },
                                            },
                                            {
                                                label: "Yard Location Name",
                                                key: "yardLocationId",
                                                type: "REMOTE_SELECT",
                                                displayCondition: (local, global) => {
                                                    return local.yardLevelType === "EXTERNAL" && local.branchLevelApplicability === "NO" ? true : false;
                                                },
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.YardCreationService.getYardSuppleirs("External", "ACTIVE"),
                                                    value: "id",
                                                    label: "perFullName",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "yardLocationName",
                                                            value: "perFullName"
                                                        }
                                                    ]
                                                },
                                                rules: [
                                                    { required: true, message: "Please select a value" },
                                                ],
                                            },
                                            {
                                                label: "Yard Location Address",
                                                key: "yardLocationAddress",
                                                type: "TEXTAREA",
                                                readOnly: true,
                                                displayCondition: (local, global) => {
                                                    return local.branchLevelApplicability === "YES" ? true : false;
                                                },
                                            },
                                            {
                                                label: "Yard Location Address",
                                                key: "yardLocationAddress",
                                                type: "TEXTAREA",
                                                displayCondition: (local, global) => {
                                                    return local.branchLevelApplicability === "NO" ? true : false;
                                                },
                                            },
                                            {
                                                label: "Yard In-charge Name",
                                                key: "yardInChargeId",
                                                type: "REMOTE_SELECT",
                                                rules: [
                                                    { required: true, message: "Please select a value" },
                                                ],
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.YardCreationService.getYardInChargeByStatus("ACTIVE"),
                                                    value: "id",
                                                    label: "userName",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "yardInChargeName",
                                                            value: "userName",
                                                        },
                                                    ],
                                                },

                                            },
                                            {
                                                label: "Yard In-charge Contact Number",
                                                key: "contactDetail",
                                                type: "CUSTOM_PHONE",
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.YardCreationService.getAllContactType(),
                                                    value: "id",
                                                    label: "cntpCode",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "contactTypeDesc",
                                                            value: "cntpDesc"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                label: "Parental Yard",
                                                key: "parentalYardId",
                                                type: "REMOTE_SELECT",
                                                rules: [
                                                    { required: true, message: "Please select a value" },
                                                ],
                                                displayCondition: (local, gloabal) => {
                                                    return local.level > 1 ? true : false;
                                                },
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.YardCreationService.getAllYards(),
                                                    value: "id",
                                                    label: "name",
                                                },
                                            },
                                            {
                                                label: "Security Firm",
                                                key: "securityFirmId",
                                                type: "REMOTE_SELECT",
                                                rules: [
                                                    { required: true, message: "Please select a value" },
                                                ],
                                                spec: {
                                                    api: (sdk: LOLCSDK) => () =>
                                                        sdk.YardCreationService.getSecurityFirmByStatus("ACTIVE"),
                                                    value: "perId",
                                                    label: "perCode",
                                                    extraFieldMappings: [
                                                        {
                                                            key: "securityFirmCode",
                                                            value: "perCode"
                                                        },
                                                    ]
                                                },
                                            },
                                            {
                                                label: "Status",
                                                key: "status",
                                                type: "SWITCH",
                                                valueMap: {
                                                    true: "ACTIVE",
                                                    false: "INACTIVE",
                                                },
                                                // displayCondition : (local,global)=> {return false},
                                                // defaultValue: ,
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
                    sdk.YardCreationService.getAllYardCreation,
                getById: (sdk: LOLCSDK) =>
                    sdk.YardCreationService.getYardById,
                update: (sdk: LOLCSDK) =>
                    sdk.YardCreationService.updateYardCreationById,
                create: (sdk: LOLCSDK) =>
                    sdk.YardCreationService.saveYardCreation,
            },
            fields: [
                {
                    id: "code",
                    label: "Yard Code",
                    field: "code",
                    type: "STRING",
                },
                {
                    id: "name",
                    label: "Yard Name",
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
