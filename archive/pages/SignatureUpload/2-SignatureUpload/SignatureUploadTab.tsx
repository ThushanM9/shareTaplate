import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import DetailsBoxTemplate from "../../../templates/DetailsBoxTemplate";

export const SignatureUploadTab = () => {
  const [signatures, setSignature] = useState<string[]>(["signature1.png"]);

  return (
    <DetailsBoxTemplate
      title="Signature Upload"
      details="These are the details of the account"
      item={
        <div className="mt-16 pb-48">
          {signatures.map(item => (
            <div key={item} className="flex justify-between border p-4 px-2">
              <div className="text-blue-500">{item}</div>
              <CloseOutlined className="cursor-pointer" />
            </div>
          ))}
          <div className=" flex flex-col justify-center items-center bg-gray-200 h-16 mt-8 cursor-pointer">
            <div>
              <PlusOutlined className="text-2xl" />
            </div>
            <div className=" text-sm">Upload</div>
          </div>
        </div>
      }
    />
  );
};
