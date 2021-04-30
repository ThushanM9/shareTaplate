import { BellOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";
import { PaddedBox } from "./story-helpers/padded-box";

export default {
  title: "Bell-Icon",
  component: Badge
};
export const BellIcon = () => {
  return (
    <PaddedBox size={40}>
      <Badge count={23} offset={[6, 0]}>
        <BellOutlined />
      </Badge>
    </PaddedBox>
  );
};
