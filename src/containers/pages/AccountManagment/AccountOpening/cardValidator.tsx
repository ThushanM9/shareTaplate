import { CheckCircleFilled, UpCircleFilled } from "@ant-design/icons";
import { Button, Input, notification } from "antd";
import React, { FC, useState } from "react";
import { useGetSDK } from "../../../../utils/hooks/useSDK";

const CardValidator: FC<CardValidatorProps> = ({ setValue }) => {
  const [inChange, setinChange] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [validated, setvalidated] = useState(false);
  const SDK = useGetSDK();
  const validateCardNumber = async () => {
    setisLoading(true);
    let res = await SDK.AccountService.getCardNumValidated(inChange);
    if (res.messages === "VALID") {
      setValue(inChange);
      notification.success({
        message: "Card Validator",
        description: "Card number is available",
      });
      setvalidated(true);
      setTimeout(() => {
        setvalidated(false);
      }, 2000);
    } else {
      notification.warn({
        message: "Card Validator",
        description: "Card number is in use",
      });
    }
    setisLoading(false);
  };

  return (
    <div>
      <div className="flex flex-col">
        <Input
          placeholder=""
          value={inChange}
          onChange={(event: any) => setinChange(event.target.value)}
        />
        <Button
          disabled={inChange.length !== 16}
          icon={validated ? <CheckCircleFilled /> : <UpCircleFilled />}
          loading={isLoading}
          type="primary"
          className={`${validated ? "bg-green-400 border-green-400" : ""}`}
          onClick={validateCardNumber}
        >
          {inChange.length === 16
            ? "Validate Card"
            : "Enter 16 Digit Card Number"}
        </Button>
      </div>
    </div>
  );
};

interface CardValidatorProps {
  setValue: (data: string) => any;
}

export default CardValidator;
