import { Button } from "antd";
import React from "react";

interface btnProps {
  label?: string;
  icon?: JSX.Element;
  isSelected: boolean;
  onClick?: (e: any) => any;
  loading?: boolean;
}

function SelectableButton({
  label,
  icon,
  isSelected,
  onClick,
  loading,
}: btnProps) {
  return (
    <Button
      size="large"
      loading={loading}
      className={`flex align-middle rounded m-2 pr-8`}
      style={{
        background: isSelected ? "#238E2D" : "#F3FBFF",
        border: isSelected ? "none" : "2px solid #8DD6FF",
        color: isSelected ? "white" : "#626262",
        // border: "none",
        paddingTop: "7px",
        // minWidth: "160px",
        // textAlign: "center",
      }}
      onClick={onClick}
    >
      <span
        className="text-lg flex"
        style={{ color: isSelected ? "white" : "#2D9CDB" }}
      >
        {icon}
      </span>
      <p className="ml-3 p-0 text-s font-bold">{label}</p>
    </Button>
  );
}

export default SelectableButton;
