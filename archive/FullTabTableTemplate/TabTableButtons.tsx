import {
  DeleteOutlined,
  FilterOutlined,
  MoreOutlined,
  PrinterOutlined
} from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import IconButton from "../../atoms/IconButton.atom";
import TabTableSearchBar from "./TabTableSearchBar";

function TabTableButtons() {
  return (
    <div className="flex justify-between">
      <TabTableSearchBar />
      <div className="flex align-middle">
        <IconButton
          onClick={async () => {
            // const value = await SDK.AccountService.getAllAccountsStatus();
            // console.log("value -** ", value);
          }}
          text={true}
          title="Print"
          icon={<PrinterOutlined className="" />}
        />
        <IconButton
          text={true}
          className="ml-2 mr-3"
          title="Delete"
          icon={<DeleteOutlined />}
        />
        <Divider style={{ height: "100%" }} type="vertical"></Divider>
        <IconButton
          text={false}
          className="ml-3"
          icon={<FilterOutlined />}
        ></IconButton>
        <IconButton
          text={false}
          className="ml-2"
          icon={<MoreOutlined />}
        ></IconButton>
      </div>
    </div>
  );
}
export default TabTableButtons;
