import { Button } from "antd";
import React from "react";

export const BottomNavButton = ({
  onClick,
  disabled,
  text,
  className,
  currentStep,
}: {
  onClick?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  disabled?: boolean;
  text: string;
  className?: string;
  currentStep?: number;
}) => {
  return (
    <Button
      className={`w-20 text-xs pt-0 pb-0 h-6 ${className}`}
      size="small"
      type="default"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
