import { SearchOutlined } from "@ant-design/icons";
import { Input, Space, Table } from "antd";
import { push } from "connected-react-router";
import React, { FC } from "react";
import { connect } from "react-redux";
import { assets } from "../../../ui-helpers/assets";
import { P } from "../../atoms/typography";
import GetAllConfirmationList from "./service/useGetAllConfirmationList";

const ConfirmationList: FC<ConfirmationListProps> = ({ goToViewAccount }) => {
  const result = GetAllConfirmationList().data;
  console.log("result :", result);

  const columns = [
    {
      title: () => <P className="text-xs">Account Name</P>,
      dataIndex: "accountname",
      key: "accountname",
      render: (text: any) => {
        return <P className="text-xs">{text}</P>;
      }
    },
    {
      title: () => <P className="text-xs">Acconunt Number</P>,
      dataIndex: "accountnumber",
      key: "accountnumber",
      render: (text: any) => {
        return <P className="text-xs">{text}</P>;
      }
    },
    {
      title: () => <P className="text-xs">NIC</P>,
      dataIndex: "nic",
      key: "nic",
      render: (text: any) => {
        return <P className="text-xs">{text}</P>;
      }
    },
    {
      title: () => <P className="text-xs">Customer ID</P>,
      dataIndex: "customerid",
      key: "customerid",
      render: (text: any) => {
        return <P className="text-xs">{text}</P>;
      }
    },
    {
      title: () => <P className="text-xs">Action</P>,
      key: "action",
      render: (text: any, record: any) => (
        <div onClick={goToViewAccount}>
          <Space size="middle" className="cursor-pointer">
            <P className="text-xs" color={assets.color.text_blue}>
              View
            </P>
          </Space>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-1 flex-col w-full h-full bg-white">
      <div className="flex flex-row justify-between py-4 px-2">
        <div className="flex flex-row">
          <Input
            style={{ width: 200 }}
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </div>

        {/* <Button onClick={goToNewFrequency}>Create New</Button> */}
      </div>
      <div className="px-2">
        <Table
          size="small"
          dataSource={[
            {
              accountname: "Charana Amarasekara",
              accountnumber: "8001234465789",
              nic: "123456789v",
              customerid: "00001234"
            }
          ]}
          columns={columns}
          pagination={{ defaultPageSize: 8 }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  goToViewAccount: () => {
    dispatch(push("confirmation_list/123/account_closing"));
  }
});

export interface ConfirmationListProps {
  goToViewAccount: () => any;
}

export default connect(null, mapDispatchToProps)(ConfirmationList);
