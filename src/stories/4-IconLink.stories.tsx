import { PieChartOutlined } from "@ant-design/icons";
import React from "react";
import { PaddedBox } from "./story-helpers/padded-box";
export default {
  title: "Icon-Link"
};

export const IconLink = () => {
  return (
    <PaddedBox size={40}>
      <span
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          style={{ marginRight: ".5rem" }}
          className="flex items-center justify-start w-4 mr-1"
        >
          <PieChartOutlined />
        </div>
        <div style={{ fontSize: ".8rem" }} className="capitalize text-xxs">
          Dashboard
        </div>
      </span>
    </PaddedBox>
  );
};
