import { CheckCircleFilled, CheckCircleOutlined } from "@ant-design/icons";
import { Card, Modal } from "antd";
import { map as _map } from "lodash";
import React, { useState } from "react";
import { LOLCSDK } from "../../../../../../../sdk";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
const uu =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR49j2nwiETNQtPViDibqU5iJo_t0I2JaTwA&usqp=CAU";
export const SignatureModel = ({
  isVisible,
  onCancel,
  setSignatureId,
  state,
  setOperationInstructions,
}: {
  isVisible: boolean;
  onCancel: any;
  setSignatureId?: any;
  state?: any;
  setOperationInstructions?: any;
}) => {
  const [signatureData, setsignatureData] = useState<any>([]);

  const { data: signatures, loading: isSignaturesLoading } = useSDK(
    async (sdk: LOLCSDK) => {
      let res = await sdk.DocumentUploadService.getSignatureByPersonId(
        String(state.customer.perId)
      );
      let filteredData = _map(res, (item) => ({
        signatureId: item.signatureUrlId,
        selected: false,
        URL: "",
      }));
      return filteredData;
    },
    [isVisible, state.customer.perId],
    !state.customer.perId,
    []
  );

  const { data, loading } = useSDK(
    async (sdk: LOLCSDK) => {
      let h: any = [];
      for (const item of signatures) {
        let res = await sdk.DocumentUploadService.DocumentDownloadById(
          Number(item.signatureId),
          "customer"
        );
        h.push({ ...item, ...{ URL: window.URL.createObjectURL(res) } });
      }
      setsignatureData(h);
      return h;
    },
    [signatures],
    false,
    []
  );

  const setSelectedSignature = (id: string) => {
    setsignatureData((prev: any) =>
      _map(prev, (item: any) => {
        if (item.signatureId === id) {
          return { ...item, selected: !item.selected };
        }
        return { ...item, selected: false };
      })
    );
  };

  const setsignaturetooi = () => {
    setOperationInstructions((prev: any) => {
      prev[0].eligiblePersonDetails = state.globalFormState.casaApplicantDetails.map(
        (item: any) =>
          ({
            casaAmountFrom: "0",
            casaAmountTo: "0",
            casaModelOfOperation: "",
            personId: item.casaCustomerId,
            personName: item.casaFullLegalName,
            proportion: "",
            signatureId: signatureData.find((item: any) => item.selected)
              ?.signatureId,
            status: item.casaApplicantStatus,
          } as any)
      );
      return prev;
    });
    onCancel();
  };

  return (
    <Modal
      title={"Select Signature"}
      visible={isVisible}
      onCancel={onCancel}
      onOk={setsignaturetooi}
      bodyStyle={{ padding: 0, borderRadius: "5rem" }}
      className="relative w-3/4 overflow-hidden rounded-lg border bg-white pb-0"
      centered={true}
    >
      <div className="p-5 flex flex-wrap">
        {signatureData &&
          signatureData.map((item: any) => (
            <Card
              key={item.signatureId}
              hoverable
              style={{ width: 300, margin: 5 }}
              cover={<img alt="example" src={uu} />}
              onClick={() => setSelectedSignature(item.signatureId)}
            >
              <Card.Meta
                title={
                  <div className="flex flex-row items-center justify-center">
                    {item.selected ? (
                      <CheckCircleFilled />
                    ) : (
                      <CheckCircleOutlined />
                    )}

                    <div className="pl-2 pb-1">
                      <p>Select</p>
                    </div>
                  </div>
                }
              />
            </Card>
          ))}
      </div>
    </Modal>
  );
};
