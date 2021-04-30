import { CONFIG } from "../../../../../config";
import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const ValuationConditionSchema: iSettingSchema = {
    navigation: {
        list: [
            {
                title: "System Settings",
                children: [
                    {
                        name: "Valuation Condition",
                        key: "valuation-condition",
                        path: `/${CONFIG.tenant}/valuation-condition`,

                    },
                ],
            },
        ],
    },
    map: {
        "valuation-condition": {
            id: "valuation-condition",
            title: "Valuation Condition",
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
                        field: "description",
                        label: "Description",
                        type: "STRING",
                        id: "description"
                    },
                ]
            },
            createView: {
                steps: [
                    {
                        title: "Valuation Condition Details",
                        description: "Add in valuation condition details",
                        subSteps: [
                            {
                                title: "Valuation Condition Details",
                                cards: [
                                    {
                                        title: "Valuation Condition Details",
                                        description: "Fill in the details to continue",
                                        fields: [
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
                                                    { required: true, message: "Please enter a value" },
                                                ],
                                            },
                                            {
                                                label: "Description",
                                                key: "description",
                                                type: "TEXTAREA",
                                                rules: [],
                                            },
                                            {
                                                label: "Active",
                                                key: "status",
                                                type: "SWITCH",
                                                valueMap: {
                                                    true: "ACTIVE",
                                                    false: "INACTIVE",
                                                },
                                                // rules: [{ required: true, message: "Please enter a value" }],
                                                defaultValue: "ACTIVE"
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
                            title: "Valuation Condition",
                            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
                            enim vitae est imperdiet mollis`,
                        },
                    ],
                },
            },
            apis: {
                list: (sdk: LOLCSDK) =>
                    sdk.ValuationConditionService.getAllValuationCondition,
                getById: (sdk: LOLCSDK) =>
                    sdk.ValuationConditionService.getValuationConditionById,
                update: (sdk: LOLCSDK) =>
                    sdk.ValuationConditionService.updateValuationConditionById,
                create: (sdk: LOLCSDK) =>
                    sdk.ValuationConditionService.saveValuationCondition,
                // Stock Category SDK not available
                //stockCategory: (sdk: LOLCSDK) => sdk.ChequeBookManagementService.
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
                    width: 120,
                    field: "status",
                    type: "TAG",
                },
            ],
        },
    },
};
