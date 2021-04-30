import { CloseOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Dropdown, Input, Menu } from "antd";
import moment from "moment";
import React, { useState } from "react";
import TableData from "./tableData";


export default function HandoverseizedContainer() {
  const [searchKeyword, setsearchKeyword] = useState("");
  const [searchGroup, setSearchGroup] = useState("");

  const menu = (
    <Menu onClick={(e) => setSearchGroup(String(e.key))}>
      {/* {viewSettings.listView.availableSearchFields.map(
        (item: SettingsSchema_AvailableSearchField) => (
          <Menu.Item key={item.field}>{item.label}</Menu.Item>
        )
      )} */}
      <Menu.Item>test</Menu.Item>
    </Menu>
  );
//   const { data, loading } = useSDK<any[]>( (sdk) => {
//     return sdk.MarkAsSeizedService.getVehicleRoDetails({
//         chassisNo:"aad",
//         vehicleNo:""
//     })
//   } );

  //console.log('a', data)

  return (
    <div className="fill h-full flex flex-row">
      <div className="relative bg-white fill border">
        <div className="inner-container h-100 overflow-auto">
          <div className="absolute w-full h-full">
            <div className="flex flex-row">
            <DatePicker 
            disabled
            defaultValue={moment()} />
              <Input
                style={{ width: 200 }}
                placeholder="Search"
                onChange={(e) => setsearchKeyword(e.target.value)}
                value={searchKeyword}
                prefix={<SearchOutlined />}
              />
              <Dropdown overlay={menu}>
                <Button
                  style={{ width: 170 }}
                  className="flex justify-between items-center bg-gray-200"
                >
                  Select Search Key
                  <DownOutlined />
                </Button>
              </Dropdown>
              <Button
                className="flex justify-center items-center"
                type="primary"
                icon={<SearchOutlined />}
              >
                Search
              </Button>
              {searchKeyword && (
                <div className="flex flex-1 justify-center items-center px-2 cursor-pointer">
                  <Button
                    //  onClick={onClearSearch}
                    size="small"
                    className="flex justify-center items-center"
                    icon={<CloseOutlined style={{ fontSize: 12 }} />}
                    shape="circle"
                  />
                </div>
              )}
            </div>
            <TableData />
          </div>
        </div>
      </div>

      <div className="relative bg-white border" style={{ width: 250 }}>
        <div className="inner-container h-100 overflow-auto">
          <div className="absolute w-full h-full">test</div>
        </div>
      </div>
    </div>
  );
}

function setsearchKeyword(value: string): void {
  throw new Error("Function not implemented.");
}
