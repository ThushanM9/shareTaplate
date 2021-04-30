import { DownOutlined } from "@ant-design/icons";
import { withKnobs } from "@storybook/addon-knobs";
import { Avatar } from "antd";
import React from "react";
import { PaddedBox } from "./story-helpers/padded-box";

export default {
  title: "UserDropdown",
  decorators: [withKnobs]
};

export const UserDropdown = () => {
  const divStyles = {
    display: "flex",
    alignItems: "center",
    width: "auto"
  };
  return (
    <PaddedBox size={50}>
      <div style={divStyles}>
        <Avatar
          // size={select("size", ["small", "large", "default"])}
          style={{ marginRight: ".5rem" }}
          className="mr-1"
        >
          U
        </Avatar>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <span
            style={{ fontSize: ".8rem", marginRight: ".2rem" }}
            className="text-xxs"
          >
            Ted Russell
          </span>
          <DownOutlined
            style={{ fontSize: ".8rem" }}
            className="text-xxs ml-1"
          />
        </div>
      </div>
    </PaddedBox>
  );
};
