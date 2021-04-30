import moment from "moment";
import { ResourceBrowserSchema } from "../../../../../schemas/resource-browser";
import { ColumnSchema } from "../../../../../schemas/table-schema";

export const customerSelectorTableSchema: ColumnSchema[] = [
  {
    label: "Customer Name",
    key: "perFullName",
    dataType: "STRING",
  },
  {
    label: "Customer Code",
    key: "cusReferenceCode",
    dataType: "STRING",
  },
  {
    label: "Date of Birth",
    key: "perDateOfBirth",
    dataType: "STRING",
  },
  {
    label: "Identification",
    key: "identification",
    dataType: "STRING",
  },
  // {
  //   label: "Customer Photo",
  //   key: "",
  //   dataType: "STRING",
  // },
  {
    label: "KYC Status",
    key: "cusKycStatus",
    dataType: "TAG",
  },
  {
    label: "Status",
    key: "cusStatus",
    dataType: "TAG",
  },
];

export const customerSelectorSchema: ResourceBrowserSchema = {
  title: "Select Customer",
  type: "SEARCH_BY_FIELDS_SELECTOR",
  enableRemotePagination: true,
  tableSchema: customerSelectorTableSchema,
  searchSchema: {
    defaultSearchKey: "customerId",
    fields: [
      {
        id: "customerId",
        label: "Customer Number",
        resourceFunction: (SDK, id) => SDK.CustomerService.findById(Number(id)),
        enableRemotePagination: false,
        transformFunction: (res) => {
          console.log("res 😎:", res);
          return [
            {
              ...res,
              // cusStatus:  //customer status can get from the backend
              //   res.cusOtherKycDetails && res.cusOtherKycDetails.length > 0
              //     ? res.cusOtherKycDetails[0].cokdStatus
              //     : "No",
              perFullName:
                res.cusOrganizationTypeCode === "ORCO"
                  ? res.perCompanyName
                  : res.perFullName,
              cusKycStatus:
                res.cusOtherKycDetails && res.cusOtherKycDetails.length > 0
                  ? res.cusOtherKycDetails[0].cokdKycStatus
                  : "No",
              identification: "-",
              perDateOfBirth: res.perDateOfBirth
                ? moment(res.perDateOfBirth).format("YYYY-MM-DD")
                : null,
              casaCustomerId: res.id,
            },
          ];
        },
      },
      {
        id: "accountName",
        label: "Customer Name",
        resourceFunction: (SDK, accountName) =>
          SDK.CustomerService.search({
            cusFullName: accountName,
          }),
        transformFunction: (res) => {
          return {
            ...res,
            content: res.content.map((item: any) => {
              return {
                ...item,
                cusKycStatus:
                  item.cusOtherKycDetails && item.cusOtherKycDetails.length > 0
                    ? item.cusOtherKycDetails[0].cokdKycRequirementObtained
                    : "No",

                perFirstName: item.perFullName,
                identification: "-",
                perDateOfBirth: moment(item.perDateOfBirth).format(
                  "YYYY-MM-DD"
                ),
              };
            }),
          };
        },
      },
      {
        id: "cusIdentificationNo",
        label: "Customer Identification Number",
        resourceFunction: (SDK, cusIdentificationNo) =>
          SDK.CustomerService.search({
            cusIdentificationNo,
          }),
        transformFunction: (res) => {
          return {
            ...res,
            content: res.content.map((item: any) => {
              return {
                ...item,
                cusKycStatus:
                  item.cusOtherKycDetails && item.cusOtherKycDetails.length > 0
                    ? item.cusOtherKycDetails[0].cokdKycRequirementObtained
                    : "No",
                identification: item.cusIdentificationNo,
                perDateOfBirth: moment(item.perDateOfBirth).format(
                  "YYYY-MM-DD"
                ),
              };
            }),
          };
        },
      },
      {
        id: "cusReferenceCode",
        label: "Customer Reference Code",
        resourceFunction: (SDK, cusReferenceCode) =>
          SDK.CustomerService.search({
            cusReferenceCode,
          }),
        transformFunction: (res) => {
          return {
            ...res,
            content: res.content.map((item: any) => {
              return {
                ...item,
                cusKycStatus:
                  item.cusOtherKycDetails && item.cusOtherKycDetails.length > 0
                    ? item.cusOtherKycDetails[0].cokdKycRequirementObtained
                    : "No",
                perDateOfBirth: moment(item.perDateOfBirth).format(
                  "YYYY-MM-DD"
                ),
              };
            }),
          };
        },
      },

      //!Removed this upon sampath's request
      // {
      //   id: "cusContactMobileNumber",
      //   label: "Customer Contacy Mobile Number",
      //   resourceFunction: (SDK, cusContactMobileNumber) =>
      //     SDK.CustomerService.search({
      //       cusContactMobileNumber,
      //     }),
      //   transformFunction: (res) => {
      //     return {
      //       ...res,
      //       content: res.content.map((item: any) => {
      //         return {
      //           ...item,
      //           cusStatus: item.cusOtherKycDetails  && item.cusOtherKycDetails.length > 0
      //             ? item.cusOtherKycDetails[0].cokdKycRequirementObtained
      //             : "No",
      //         };
      //       }),
      //     };
      //   },
      // },
      {
        id: "cusBusinessRegNo",
        label: "Customer Business Registration Number",
        resourceFunction: (SDK, cusBusinessRegNo) =>
          SDK.CustomerService.search({
            cusBusinessRegNo,
          }),
        transformFunction: (res) => {
          return {
            ...res,
            content: res.content.map((item: any) => {
              return {
                ...item,
                cusKycStatus:
                  item.cusOtherKycDetails && item.cusOtherKycDetails.length > 0
                    ? item.cusOtherKycDetails[0].cokdKycRequirementObtained
                    : "No",
                perFullName: item.perCompanyName,
                perFirstName: item.perCompanyName,
                identification: item.perBusinessRegNo,
                //there is not DOB for cooperate customers
                perDateOfBirth: "-",
              };
            }),
          };
        },
      },
    ],
  },
};
