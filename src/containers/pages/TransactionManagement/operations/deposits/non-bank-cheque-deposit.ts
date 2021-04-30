import { LOLCSDK } from "../../../../../sdk";
import { iTransactionSchema } from "./cash-deposit.schema";

const NonBankChequeDeposit: iTransactionSchema = {
    steps: [
        // Deposit Details
        {
            title: "4. Deposit Details",
            description: "",
            fields: [
                {
                    type: "EDITABLE_TABLE",
                    columns: [
                        {
                            label: "Bank Route Number",
                            key: "",
                            dataType: "STRING",
                            isEditable: true,
                            widgetSchema: {
                                type: "TEXT_STRING",
                            },
                        },
                        {
                            label: "Bank Code",
                            key: "",
                            dataType: "STRING",
                            isEditable: true,
                            widgetSchema: {
                                type: "REMOTE_SELECT",
                                spec: {
                                    api: (sdk: LOLCSDK) => sdk.BankService.getAllBanks,
                                    label: 'bankCode',
                                    value: 'bankCode'
                                }
                            }
                        },
                        {
                            label: "Branch Code",
                            key: "",
                            dataType: "STRING",
                            isEditable: true,
                            widgetSchema: {
                                type: "REMOTE_SELECT",
                                spec: {
                                    api: (sdk: LOLCSDK) => sdk.BankService.getBranchesByBankId,
                                    label: 'bbrhName',
                                    value: 'id'
                                }
                            }
                        },
                        {
                            label: "Cheque Date",
                            key: "",
                            dataType: "DATE",
                            isEditable: true,
                            widgetSchema: {
                                type: "DATE",
                            },
                        },
                        {
                            label: "Cheque Number",
                            key: "",
                            dataType: "STRING",
                            isEditable: true,
                            widgetSchema: {
                                type: "TEXT_STRING",
                            },
                        },
                        {
                            label: "Amount",
                            key: "",
                            dataType: "STRING",
                            isEditable: true,
                            widgetSchema: {
                                type: "TEXT_STRING",
                            },
                        },
                    ],
                },
                {
                    type: "COLLECTION",
                    columns: [
                        {
                            label: "Charge Amount",
                            key: "",
                            dataType: "STRING",
                            isEditable: true,
                            widgetSchema: {
                                type: "TEXT_STRING",
                            },
                        },
                        {
                            label: "Charges",
                            key: "",
                            dataType: "STRING",
                            isEditable: true,
                            widgetSchema: {
                                type: "TEXT_STRING",
                            },
                        },
                        {
                            label: "Tax Amount",
                            key: "",
                            dataType: "STRING",
                            isEditable: true,
                            widgetSchema: {
                                type: "TEXT_STRING",
                            },
                        },
                    ],
                }
            ],
            cards: ["ACCOUNT_BALANCE_DETAILS", "PASSBOOK_DETAILS", "CHARGES_TAXES"],
        }
    ],
    apis: {
        addBatch: (SDK) => SDK.TransferInService.addNonBankChequeDepositBatch,
        addBtachDetails: (SDK) => SDK.TransferInService.addNonBankChequeDepositBatchChequeLeaves
    }
}