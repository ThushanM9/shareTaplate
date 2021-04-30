import { Modal, Space, Table } from "antd";
import moment from "moment";
import React from "react";
import { Customer } from "../../../../../../../sdk/comn-customer/interfaces";
import { P } from "../../../../../../atoms/typography";

export const SelectGuardians = ({
  isVisible,
  onCancel,
  onCustomerSelected,
  data,
}: // name,
{
  isVisible: boolean;
  onCancel: any;
  onCustomerSelected: (customer: Customer) => any;
  data: any;
  // name: "guardian" | "nominee";
}) => {
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "perFullName",
      type: "STRING",
    },
    {
      title: "Customer Code",
      dataIndex: "perCode",
      type: "STRING",
    },
    {
      title: "Date of Birth",
      dataIndex: "perDateOfBirth",
      type: "STRING",
      render: (text: any, record: any) => (
        <P>{moment(text).format("MM-DD-YYYY")}</P>
      ),
    },
    {
      title: "Identification",
      dataIndex: "perId",
      type: "STRING",
    },

    {
      title: "KYC Status",
      dataIndex: "cusStatus",
      type: "STRING",
    },

    {
      title: () => <P className="text-xs">Action</P>,
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle" className="cursor-pointer">
          <P color="blue" onClick={() => onCustomerSelected(record)}>
            Select
          </P>
        </Space>
      ),
    },
  ];
  // const { data, loading } = useSDK(
  //   (sdk: LOLCSDK) => sdk.CustomerService.getGuardians(156),

  //   [],
  //   false,
  //   []
  // );
  // //   console.log(data, "sssssss");

  //! for account update if there are multiple accounts in applicant details there are no guardians
  //! if the customer is sole owner then check if the customer age < 18 then add guardian details

  return (
    <Modal
      title={"Select Guardian"}
      visible={isVisible}
      onCancel={onCancel}
      footer={null}
      bodyStyle={{ padding: 0, borderRadius: "5rem" }}
      className="w-3/4 overflow-hidden rounded-lg"
    >
      <div className="pb-8">
        <div className="p-2">
          <Table
            columns={columns}
            dataSource={data.map((item: any) => {
              return {
                ...item,
                cusStatus:
                  item.cusOtherKycDetails && item.cusOtherKycDetails.length > 0
                    ? item.cusOtherKycDetails[0].cokdKycRequirementObtained
                    : "No",
              };
            })}
            // loading={loading}
            pagination={false}
          />
        </div>
      </div>
    </Modal>
  );
};
