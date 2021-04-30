import { CheckCircleFilled } from "@ant-design/icons";
import React from "react";

interface itemProps {
  title: string;
  content?: string;
  icon?: JSX.Element;
  isSelected: boolean;
  onClick?:
  | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
  | undefined;
}

function SubProductItem(props: itemProps) {
  return (
    <div
      style={{
        border: "2px solid #A0ECA7",
        background: "#F4FFF5",

        // width: "15rem",
      }}
      className={`relative rounded p-2  duration-75 w-2/5 mr-1 mb-1`}
      onClick={props.onClick}
    >
      <CheckCircleFilled
        style={{
          color: "#5FEA6C",
          opacity: props.isSelected ? "inherit" : 0,
        }}
        className="text-2xl absolute top-0 right-0 z-20 p-2  duration-200 "
      />
      <div
        style={{
          opacity: props.isSelected ? 0.5 : 1,
        }}
        className="relative  z-10 cursor-pointer duration-75"
      // onClick={selectProduct}
      >
        <div className="relative flex mb-3">
          <div
            style={{ color: "#238E2D" }}
            className="mr-2 text-xl flex align-baseline"
          >
            {props.icon}
          </div>

          <h4 style={{ color: "#626262" }} className="font-bold mt-1">
            {props.title}
          </h4>
        </div>

        <p style={{ color: "#626262" }} className="leading-tight p-2">
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default SubProductItem;
