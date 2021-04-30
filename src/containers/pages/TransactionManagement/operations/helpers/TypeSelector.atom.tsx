import { Radio } from "antd";
import React, { FC } from "react";

const TypeSelector: FC<TypeSelectorProps> = ({
  onChange,
  options,
  defaultValue,
}) => {
  return (
    <div className="flex flex-row justify-center">
      <Radio.Group
        size="large"
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        options={options}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};

interface TypeSelectorProps {
  onChange: (type: string) => any;
  options: { label: string; value: string }[];
  defaultValue?: string;
}

export default TypeSelector;
