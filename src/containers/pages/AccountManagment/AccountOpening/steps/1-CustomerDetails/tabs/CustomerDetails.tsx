import { Modal, Table, Tag } from "antd";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { iDisplayMessage } from "../../../../../../../schemas/card-messages";
import { CardMessages } from "../../../../../../../schemas/helpers/card-messages";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { EmptyCustomerRecord } from "../../../data/emptyCustomerRecord";
import { EditableTable } from "../../../helpers/editable-table";
import { AccountOpeningSchema } from "../../../schema";

// STATUS - REVIEWED ✅

export const CustomerDetailsTab = () => {
  const { state, setState } = useContext(AccountOpeningContainerContext);

  const [isModal, setModal] = useState(false);

  const currentStep = 0;
  const currentCard = 0;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  //

  const selectedCustomer = { ...EmptyCustomerRecord, ...state.customer };

  // Custom Validations - Start
  const [messages, setMessages] = useState<iDisplayMessage[]>([]);
  useEffect(() => {
    const messages: iDisplayMessage[] = [];
    // Validate for ownership type
    let isOwnershipInValid = false;
    let totalTaxPercentage = 0;
    for (let customer of state.globalFormState.casaApplicantDetails) {
      if (!customer.casaOwnershipType) {
        if (!isOwnershipInValid) {
          isOwnershipInValid = true;
          messages.push({
            type: "error",
            title: "Empty Ownership Type",
            description: "Please validate selected onwership type",
          });
        }
      }
      totalTaxPercentage += customer.taxPercerntage;
    }
    // Validate for Tax Percentage
    if (totalTaxPercentage !== 100) {
      messages.push({
        type: "error",
        title: "Tax Percentages should add upto 100",
        description: "Please validate selected tax percentages",
      });
    }

    setMessages(messages);
  }, [state.globalFormState.casaApplicantDetails]);
  // Custom Validations - End

  useEffect(() => {
    console.log("state.customer 😁:", state.customer);
  }, [state.customer]);

  return (
    <div className='mb-8'>
      <Modal
        onCancel={() => {
          setModal(false);
        }}
        visible={isModal}
        footer={null}
      >
        <Table
          columns={[
            {
              title: "No",
              dataIndex: "pidtIdentificationNo",
              key: "pidtIdentificationNo",
            },
            {
              title: "Type Code",
              dataIndex: "pidtIdentificationTypeCode",
              key: "pidtIdentificationTypeCode",
            },
            {
              title: "Description",
              dataIndex: "pidtIdentificationTypeDesc",
              key: "pidtIdentificationTypeDesc",
            },
            {
              title: "Validity",
              dataIndex: "pidtExpiryDate",
              key: "pidtExpiryDate",
              render: (value: string) => {
                if (moment(moment(value)).diff(moment(), "days") === 0) {
                  return (
                    <Tag color='red'>
                      Expired {moment(value).format("YYYY-MM-DD")}
                    </Tag>
                  );
                }
                return (
                  <Tag color='green'>
                    Non Expired {moment(value).format("YYYY-MM-DD")}
                  </Tag>
                );
              },
            },
          ]}
          dataSource={
            state.customer?.perIdentifications?.map((item: any) => ({
              pidtIdentificationNo: item.pidtIdentificationNo,
              pidtIdentificationTypeCode: item.pidtIdentificationTypeCode,
              pidtIdentificationTypeDesc: item.pidtIdentificationTypeDesc,
              pidtExpiryDate: item.pidtExpiryDate,
            })) ?? []
          }
          pagination={false}
        />
      </Modal>
      <FormCardTemplate
        title={cardSchema.title}
        description={cardSchema.description || ""}
      >
        <>
          {/* Message Box */}
          <CardMessages messages={messages} />
          <EditableTable
            schema={cardSchema.fields[0]}
            initialLocalState={[selectedCustomer]}
            rowId='casaCustomerId'
            requireMinimumOneRecord={false}
            extraActions={[
              // {
              //   name: "View",
              //   onClick: (value) => {
              //     console.log("View Record", value);
              //   },
              // },
              // {
              //   name: "Update",
              //   onClick: (value) => {
              //     console.log("Update Record", value);
              //   },
              // },
              {
                name: "Identification",
                onClick: (value) => {
                  setModal(true);
                },
              },
            ]}
          />
        </>
      </FormCardTemplate>
    </div>
  );
};
