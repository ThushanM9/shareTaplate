import { LOLCSDK } from "../../../../../sdk";
import { iSettingSchema } from "../../SettingsTemplate/schema";

export const SalesMethodSchema: iSettingSchema = {
    navigation: {
        list: [
            {
                title: "System Settings",
                children: [
                    {
                        name: "Sales Method",
                        key: "sales-method",
                        path: "/AnRkr/sales-method",
                    },
                ],

            },
        ],
    },
    map: {
        "sales-method": {
            id: "sales-method",
            title: "sales Method",
            description: "",

            listView: {
                availableSearchFields: [
                    {
                        field: "id",
                        label: "Sale Id",
                    },
                    {
                        field: "code",
                        label: "Sale Code",
                    },
                    {
                        field: "name",
                        label: "Sale Name",
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
                        title: "Sales Method Details",
                        description: "This is the description",
                        subSteps: [
                            {
                                title: "Sales Method Details",
                                cards: [
                                    {
                                        title: "",
                                        description: "",
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
                    title: "",
                    cards: [
                        {
                            title: "Sales Method Details",
                            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
                                          enim vitae est imperdiet mollis`,
                        },
                    ],
                },
            },
            apis: {
                list: (sdk: LOLCSDK) =>
                    sdk.SalesMethodService.getAllSalesMethod,
                getById: (sdk: LOLCSDK) =>
                    sdk.SalesMethodService.getSalesMethodById,
                create: (sdk: LOLCSDK) =>
                    sdk.SalesMethodService.saveSalesMethod,
                update: (sdk: LOLCSDK) =>
                    sdk.SalesMethodService.updateSalesMethodById,

            },
            fields: [
                {
                    id: "code",
                    label: "Sale Code",
                    field: "SaleMethodCode",
                    type: "STRING",
                },
                {
                    id: "name",
                    label: "Sale Name",
                    field: "SaleMethodName",
                    type: "STRING",
                },
                {
                    id: "status",
                    label: "Status",
                    field: "SaleMethodStatus",
                    type: "TAG",
                },

            ],

        }

    }

};