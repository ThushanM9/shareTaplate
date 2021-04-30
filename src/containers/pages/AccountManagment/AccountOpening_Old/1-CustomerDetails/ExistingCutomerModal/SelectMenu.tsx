import { Select } from "antd";
import React from "react";

interface selectProps {
  placeholder?: string;
  optionArr: Array<Object>;
}

function SelectMenu(props: selectProps) {
  return (
    <Select
      style={{
        width: "150px",
        background: "#F5F5F5",
        border: "1px solid #D9D9D9",
        borderRight: "none"
      }}
      className="text-xxs h-8"
      placeholder={props.placeholder}
      bordered={false}
      defaultValue="Customer Id"
    >
      {props.optionArr.map((item: any, index: number) => {
        return (
          <Select.Option className="text-xxs" key={index} value={item.value}>
            {item.name}
          </Select.Option>
        );
      })}
    </Select>
  );
}

export default SelectMenu;
