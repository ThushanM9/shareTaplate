import { Modal, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { useGetSDK } from "../../../../../../../utils/hooks/useSDK";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

// const OperationInstructions=()=>{

// }

export const DisplayOperationInstructionsTab = ({ data }: { data: any }) => {
  const cardSchema = ActivateAccountSchema.steps![9]!.cards![1];
  const [isVisible, setIsVisible] = useState(false);
  const [signature, setSignature] = useState<{
    data: string;
    loading: boolean;
  }>({ data: "", loading: false });

  const customerColumns = GenerateColumnDefinitions(
    cardSchema.fields[1].columns!
  );
  const SDK = useGetSDK();
  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!, [
    {
      name: "View Signature",
      onClick: async (item: any) => {
        setIsVisible(true);
        setSignature({
          data: "",
          loading: true,
        });
        let sig: any = await SDK.DocumentUploadService.fileDownloadById(
          // Number(signature.signatureUrlId),
          921,
          "customer"
          // signature.origin
        );
        setSignature({
          data: btoa(
            String.fromCharCode.apply(null, new Uint8Array(sig) as any)
          ),
          loading: false,
        });
      },
    },
  ]);

  useEffect(() => {
    console.log("SIG", signature);
  }, [signature]);

  console.log("DDD", data.OperatingInstructions);
  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <Spin spinning={signature.loading}>
        <>
          <Modal
            title={"Signature"}
            visible={isVisible && !!signature.data.length}
            onCancel={() => setIsVisible(false)}
            footer={null}
            bodyStyle={{ padding: 0, borderRadius: "5rem" }}
            className="relative w-3/4 overflow-hidden rounded-lg border bg-white pb-0"
            centered={true}
          >
            <div className="flex justify-center py-4">
              {!!signature.data.length && (
                <img
                  style={{ width: "50%", height: "auto" }}
                  alt=""
                  src={`data:image/jpeg;base64,${signature.data}`}
                  // onClick={() => {
                  //   setSignatureId(item.signatureId);
                  // }}
                />
              )}
            </div>
          </Modal>
          {data.OperatingInstructions &&
            data.OperatingInstructions.map((item: any, index: number) => {
              console.log(item);
              return (
                <Table
                  key={index}
                  columns={columns}
                  dataSource={[item]}
                  pagination={false}
                  expandable={{
                    expandedRowRender: () => (
                      <Table
                        columns={customerColumns}
                        dataSource={item.eligiblePersonDetails}
                        pagination={false}
                      ></Table>
                    ),
                  }}
                ></Table>
              );
            })}
        </>
      </Spin>
    </FormCardTemplate>
  );
};
