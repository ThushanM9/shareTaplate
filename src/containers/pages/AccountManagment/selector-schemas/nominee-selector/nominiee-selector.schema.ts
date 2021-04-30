import { ResourceBrowserSchema } from "../../../../../schemas/resource-browser";
import { ColumnSchema } from "../../../../../schemas/table-schema";

export const nomineeSelectorTableSchema: ColumnSchema[] = [
  {
    label: "Nominee Name",
    key: "perPreferredName",
    dataType: "STRING",
  },
  {
    label: "Nominee Code",
    key: "perCode",
    dataType: "STRING",
  },
  {
    label: "Date of Birth",
    key: "perDateOfBirth",
    dataType: "DATE",
    format: "MM-DD-YYYY",
  },
  {
    label: "Identification",
    key: "perId",
    dataType: "STRING",
  },
  {
    label: "KYC Status",
    key: "curStatus",
    dataType: "STRING",
  },
];

export const GenerateNomineeSelectorSchema = (customerId: number) => {
  const NomineeSelectorSchema: ResourceBrowserSchema = {
    title: "Select Nominee",
    type: "SIMPLE_SELECTOR",
    tableSchema: nomineeSelectorTableSchema,
    resourceFunction: (sdk) =>
      sdk.CustomerService.getNomineesByCustomerId(customerId),
    liveSearch: {
      searchKeys: ["perPreferredName"],
    },
  };
  return NomineeSelectorSchema;
};
