import { Modal, Table, Tag } from "antd";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { Customer } from "../../../../../../../sdk/comn-customer/interfaces";
import { useGetSDK } from "../../../../../../../utils/hooks/useSDK";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayCustomerDetailsTab = ({
  applicantDetails,
  ownershipType,
}: {
  applicantDetails: any;
  ownershipType: string;
}) => {
  const getSdk = useGetSDK();
  const [tableData, setTableData] = useState([]);
  const [IdentiModal, setIdentiModal] = useState<{
    isShowModal: boolean;
    customer: Customer | null;
  }>({ customer: null, isShowModal: false });

  const cardSchema = ActivateAccountSchema.steps![1]!.cards![0];
  // console.log(applicantDetails);

  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!, [
    {
      name: "Identifications",
      onClick: (red: any) => {
        setIdentiModal({ customer: red, isShowModal: true });
      },
      isDisabled: false,
    },
  ]);
  // console.log(state);
  const CusotmerDetails = useCallback(
    async (id: number) => {
      let res = await getSdk.CustomerService.findById(id);
      return res ?? [];
    },
    [getSdk.CustomerService]
  );

  const CustomerPrimaryId = useCallback(
    async (id: number) => {
      let res = await getSdk.CustomerService.getCustomerPrimaryIdentifcation(
        id
      );
      return res ?? [];
    },
    [getSdk.CustomerService]
  );

  useEffect(() => {
    setTableData([]);
    applicantDetails &&
      applicantDetails.map(async (item: any, index: number) => {
        console.log(index, "times ran effect");

        const customer = await CusotmerDetails(item.casaCustomerId);
        const customerIdentification = await await CustomerPrimaryId(
          item.casaCustomerId
        );

        console.log("customer", customer);
        setTableData((prev) => {
          // const makeObj =async ()=>{};
          let newTbl: any = [...prev];
          newTbl.push({
            perFullName: (customer as Customer).perFullName,
            perCode: (customer as Customer).cusReferenceCode,
            perDateOfBirth: (customer as Customer).perDateOfBirth,
            perIdentifications: (customer as Customer).perIdentifications,
            customerId: customerIdentification.pidtIdentificationNo,

            cokdKycStatus: item.status,
            casaOwnershipType: ownershipType,
            taxPercerntage: item.taxPercentage + "%",
          });

          return newTbl;
        });
      });
    // console.log("TABLE", tableData);
  }, [CusotmerDetails, CustomerPrimaryId, applicantDetails, ownershipType]);

  return (
    <div>
      <Modal
        onCancel={() => {
          setIdentiModal({ isShowModal: false, customer: null });
        }}
        visible={IdentiModal.isShowModal}
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
                    <Tag color="red">
                      Expired {moment(value).format("YYYY-MM-DD")}
                    </Tag>
                  );
                }
                return (
                  <Tag color="green">
                    Non Expired {moment(value).format("YYYY-MM-DD")}
                  </Tag>
                );
              },
            },
          ]}
          dataSource={
            IdentiModal.customer?.perIdentifications?.map((item: any) => ({
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
          <Table
            scroll={{
              x: "max-content",
            }}
            pagination={false}
            columns={columns}
            dataSource={tableData}
          />
        </>
      </FormCardTemplate>
    </div>
  );
};
