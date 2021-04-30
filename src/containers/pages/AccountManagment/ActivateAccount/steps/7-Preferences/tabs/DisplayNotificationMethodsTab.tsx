import { Table } from "antd";
import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { LOLCSDK } from "../../../../../../../sdk";
import { AlertType } from "../../../../../../../sdk/comn-alert/interfaces";
import {
  Customer,
  PerContact
} from "../../../../../../../sdk/comn-customer/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import BasicCheckbox from "../../../../../../atoms/BasicCheckbox.atom";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";


const AlertTypeName = (code: string) => {
  const { data: alertType, loading: isAlertTypeLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.AlertService.getAlertTypeByCode(code),
    [],
    false,
    []
  );
  return !isAlertTypeLoading ? alertType : "";
};
const ContactName = (id: number) => {
  const { data: customer, loading: isCustomerLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.CustomerService.findById(id),
    [],
    false,
    []
  );
  return !isCustomerLoading ? customer : [];
};
const ContactDetails = (cusId: number, contactId: number) => {
  const { data: details, loading: isDetailsLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.CustomerService.getContactByCustomerIdAndContactId(cusId, contactId),
    [],
    false,
    []
  );
  return !isDetailsLoading ? details : [];
};

export const DisplayNotificationMethodsTab = ({ data }: { data: any }) => {
  const cardSchema = ActivateAccountSchema.steps![7]!.cards![0];

  const columns = GenerateColumnDefinitions(cardSchema.fields[1].columns!, [{ name: "VIEW", onClick: () => console.log("AAAAAAAAAAA") }]);
  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        {data ? (
          data.map((item: any, index: number) => {
            const tableData: any = [];
            // console.log(ContactDetails(item.customerId, item.contactId));
            const dataSource = () => {
              tableData.push({
                perPreferredName: (ContactName(item.customerId) as Customer)
                  .perPreferredName,
                pconValue: (ContactDetails(
                  item.customerId,
                  item.contactId
                ) as PerContact).pconValue,
              });
              return tableData;
            };
            return (
              <>
                <BasicCheckbox
                  checked={true}
                  title={
                    (AlertTypeName(item.notificationTypes) as AlertType).name
                  }
                />
                <Table columns={columns} dataSource={dataSource()}></Table>
              </>
            );
          })
        ) : (
            <div className="flex flex-row flex-1 justify-center text-md font-semibold py-4">
              No Notification information available
            </div>
          )}
      </>
    </FormCardTemplate>
  );
};
