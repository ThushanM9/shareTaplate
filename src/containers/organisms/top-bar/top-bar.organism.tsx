import {
  BellOutlined,
  InfoCircleFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Select } from "antd";
import React, { useState } from "react";
import { useAppDispatch } from "../../../store/store";

export const TopBar: React.FC<{ collapsed: boolean; toggle: () => void }> = ({
  collapsed,
  toggle,
}) => {
  const dispatch = useAppDispatch();
  const [selectValue, setSelectValue] = useState("ted");

  const user = {
    name: "Ishanka",
    picture: "",
  };

  const handleSelectChange = (value: string) => {
    setSelectValue(value);
    if (value === "logout") {
      // Todo
      // Log out
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between border-b-2 pb-4 pl-4">
        <Button onClick={() => toggle()}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="flex flex-col justify-center">
              <div className="flex">
                <QuestionCircleOutlined className="text-xl mx-2" />
                <Badge className="mx-2" count={12}>
                  <BellOutlined className=" text-xl" />
                </Badge>
              </div>
            </div>

            <div className=" bg-gray-100 border-gray-400 border text-gray-500 h-1 flex flex-col justify-center py-3 px-5 mt-1 ml-4">
              Kohuwala
            </div>

            <Select
              value={selectValue}
              onChange={handleSelectChange}
              bordered={false}
            >
              <Select.Option value="ted">
                <Avatar className=" mr-1" size="small" src={user.picture} />
                {user.name}
              </Select.Option>
              <Select.Option value="logout">Log Out</Select.Option>
            </Select>
          </div>
        </div>
      </div>

      <div className="px-4 flex">
        <div className="mr-2 text-lg font-bold">Account Opening</div>
        <div className="flex flex-col justify-center">
          <InfoCircleFilled />
        </div>
      </div>
    </div>
  );
};
