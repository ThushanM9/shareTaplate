import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import ManageCustomerAccounts from "./ManageTabs/ManageCustomerAccounts";
import ManageCustomerDetails from "./ManageTabs/ManageCustomerDetails";

function ManageSelectedUser() {
  return (
    <div className="bg-white h-full mx-1">
      <Tabs
        tabBarGutter={5}
        size="small"
        tabPosition="left"
        className=" h-full"
      >
        <Tabs.TabPane
          tab={
            <div className="flex">
              <UserOutlined className="text-xxs  mt-1" />
              <p className="text-xxs ">Cusotmer Details</p>
            </div>
          }
          key="1"
        >
          <ManageCustomerDetails />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <div className="flex">
              <MailOutlined className="text-xxs  mt-1" />
              <p className="text-xxs ">Accounts</p>
            </div>
          }
          key="2"
        >
          <ManageCustomerAccounts />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default ManageSelectedUser;
