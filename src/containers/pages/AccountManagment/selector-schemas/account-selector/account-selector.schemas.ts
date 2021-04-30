import { ResourceBrowserSchema } from "../../../../../schemas/resource-browser";
import { ColumnSchema } from "../../../../../schemas/table-schema";

export const AccountSelectorTableSchema: ColumnSchema[] = [
  {
    label: "Schema Name",
    key: "schemeCode",
    dataType: "STRING",
  },
  {
    label: "Account Number",
    key: "casaIdentification",
    dataType: "STRING",
  },
  {
    label: "Name",
    key: "customerName",
    dataType: "STRING",
  },
  {
    label: "Status",
    key: "status",
    dataType: "TAG",
  },
];

// export const accountSelectorSchema: ResourceBrowserSchema = {
//   title: "Select Account",
//   type: "SIMPLE_SEARCH_SELECTOR",
//   tableSchema: AccountSelectorTableSchema,
//   enableRemotePagination: true,
//   resourceFunction: (sdk, accountNumber) =>
//     sdk.AccountService.getAccountByAccountNo(accountNumber!),
// };
export const accountSelectorSchema: ResourceBrowserSchema = {
  title: "Select Account",
  type: "SIMPLE_SEARCH_SELECTOR",
  tableSchema: AccountSelectorTableSchema,
  enableRemotePagination: true,
  rowSelection: true,
  onLoadFunction: (sdk, accountType) =>
    sdk.AccountService.searchAll({ accountType: accountType! }),
  resourceFunction: (sdk, accountNumber) =>
    sdk.AccountService.searchAll({ accountNo: accountNumber! }),
};
