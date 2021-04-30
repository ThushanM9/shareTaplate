import { LOLCSDK } from "../../../../../../sdk";

// STATUS - NEEDS CLARIFICATIONS ❕

export const AccountCreation_ProductDetailsSchema = {
  title: "Product Details",
  description: "Product Details",
  items: [
    {
      label: "Account Type",
      key: "accountType",
      type: "SELECT",
      values: [
        {
          value: "CURRENT_ACCOUNT",
          label: "Current"
        },
        {
          value: "SAVINGS",
          label: "Savings"
        }
      ],
      defaulValue: "CURRENT_ACCOUNT",
      rules: [{ required: true, message: "Please select an Account Type" }]
    },
    // Todo: Product Category - General | Islamic => Is this the same as Main Category
    // Need to clarfiy the 4 terms heres - Product Type, Account Type, Main Category, Product Category, Sub Category
    {
      label: "Main Category",
      key: "accountProductCode",
      type: "REMOTE_SELECT",
      //* Note:
      // The values depend on accountType field value
      // export interface Product {
      //   id: number;
      //   version: number;
      //   name: string;
      //   identification: string;
      //   onSaleIndicator: boolean;
      //   feeFreeLength: number;
      //   feeFreeLengthPeriodId: number;
      //   productCategoryId: number;
      //   tenantId: string;
      //   status: string;
      //   createdUser: string;
      //   createdDate: string;
      //   modifiedUser: string;
      //   modifiedDate: string;
      //   feeFreeLengthPerid: string;
      //   productCategory: string;
      //   brandName: string;
      //   notes: Note[];
      // }
      spec: {
        api: (sdk: LOLCSDK) => sdk.ProductBCAService.getProductByAccountType,
        value: "id",
        label: "name"
      },
      rules: [{ required: true, message: "Please select a category" }]
    },
    {
      label: "Choose a Sub Product",
      key: "casaSubProductCode",
      type: "REMOTE_SELECT",
      spec: {
        //* Note
        // export interface SubProduct {
        //   id: number;
        //   version: number;
        //   identification: string;
        //   name: string; //TODO: this was marked as an emptty object in the response
        //   predecessorId: string;
        //   marketingStateId: number;
        //   firstMarketedDate: string;
        //   lastMarketedDate: string;
        //   stateTenureLength: number;
        //   stateTenurePeriodId: number;
        //   accountTypeId: number;
        //   restrictedStatus: string;
        //   tenantId: string;
        //   status: string;
        //   createdUser: string;
        //   createdDate: string;
        //   modifiedUser: string;
        //   modifiedDate: string;
        //   accountType: string;
        //   marketingState: string;
        //   stateTenurePeriod: string;
        //   notes: Note[];
        // }
        api: (sdk: LOLCSDK) => sdk.ProductBCAService.getSubProductsByStatus,
        value: "id",
        label: "name",
        icon: "", // Todo: Not Found
        body: "" // Todo: Not Found
      },
      rules: [{ required: true, message: "Please select a sub Product" }]
    }
  ]
};
