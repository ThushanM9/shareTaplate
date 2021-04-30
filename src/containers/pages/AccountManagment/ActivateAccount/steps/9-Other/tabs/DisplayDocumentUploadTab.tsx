import { Modal, Table, Tabs } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { GenerateColumnDefinitions } from "../../../../../../../schemas/helpers/generate-column-definition";
import { LOLCSDK } from "../../../../../../../sdk";
import { checkListDetailResource } from "../../../../../../../sdk/casa-account/interfaces";
import { useGetSDK, useSDK } from "../../../../../../../utils/hooks/useSDK";
import { FileViewerOrganism } from "../../../../../../organisms/FileViewer/FileViewer";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayDocumentUploadTab = ({ data }: { data: any }) => {
  const SDK = useGetSDK();
  const cardSchema = ActivateAccountSchema.steps![9]!.cards![0];
  const [isVisible, setIsVisible] = useState(false);
  const [fileView, setFileView] = useState({ url: "", type: "" });
  const [modalData, setModalData] = useState<any>([]);
  const [selectedDocId, setSelectedDocId] = useState<any>();
  const [loading_file, setLoading_file] = useState(false);
  const [signature, setSignature] = useState<{
    data: string;
    loading: boolean;
  }>({ data: "", loading: false });
  console.log("DATAA", data.DocumentDetail);

  const columns = GenerateColumnDefinitions(cardSchema.fields[0].columns!, [
    {
      name: "View",
      onClick: async (item: any) => {
        console.log("Document Clicked", item.documentArray);
        setIsVisible(true);
        setSelectedDocId(item.documentArray[0].id);
        setModalData(item.documentArray);
      },
    },
  ]);
  const { data: documents, loading } = useSDK(
    (sdk: LOLCSDK) => {
      return sdk.AccountService.getAllDocumentCheckListDetailsByRelatedProduct(
        data.AccountData.accountType,
        data.AccountData.productType,
        data.AccountData.accountPersonTypeId,
        data.AccountData.productCategoryId,
        data.AccountData.productId
      );
    },
    [],
    false,
    []
  );

  useSDK(
    async (sdk: LOLCSDK) => {
      setLoading_file(true);
      selectedDocId &&
        (await SDK.DocumentUploadService.DocumentDownloadById(
          selectedDocId,
          "customer"
        ).then((data: any) => {
          let url = window.URL.createObjectURL(data);
          setModalData((prev: any) =>
            prev.map((item: any) => {
              if (item.id === String(selectedDocId)) {
                item["url"] = url;
                return item;
              } else {
                return item;
              }
            })
          );
        }));
      setLoading_file(false);
    },
    [selectedDocId],
    false,
    {}
  );

  useEffect(() => {
    console.log("selectedDocId :", selectedDocId);
  }, [selectedDocId]);

  const downloadFunction = async (id: number) => {
    setLoading_file(true);
    await SDK.DocumentUploadService.DocumentDownloadById(id, "customer").then(
      (data: any) => {
        let url = window.URL.createObjectURL(data);
        setModalData((prev: any) =>
          prev.map((item: any) => {
            if (item.id === String(id)) {
              item["url"] = url;
              return item;
            } else {
              return item;
            }
          })
        );
      }
    );
    setLoading_file(false);
  };

  const dataSource =
    !loading && documents.checkListDetail
      ? documents.checkListDetail.map(
          (item: checkListDetailResource, index: number) => {
            return {
              documentTypeDescription: item.documentTypeDescription,
              documentTypeCode: data.DocumentDetail?.filter(
                (doc: any) =>
                  doc.documentCheckListId === item.documentCheckListId
              )[0].documentName, //data.DocumentDetails[0].documentName
              mandatoryIndicator: item.mandatoryIndicator,
              status: item.status,
              createdDate: moment(
                data.DocumentDetail?.filter(
                  (doc: any) =>
                    doc.documentCheckListId === item.documentCheckListId
                )[0].recievedDate
              ).format("YYYY/MM/DD"), // data.DocumentDetails[0].recievedDate
              documentArray: data.DocumentDetail?.filter(
                (doc: any) =>
                  doc.documentCheckListId === item.documentCheckListId
              )[0].mappedDocuments,
            };
          }
        )
      : [];
  return (
    <FormCardTemplate
      title={"Documents"}
      description={cardSchema.description || ""}
    >
      <>
        <Modal
          title={"Documents"}
          visible={isVisible}
          onCancel={() => setIsVisible(false)}
          footer={null}
          bodyStyle={{
            padding: 0,
            minHeight: "400px",
            height: "80vh",
            overflow: "auto",
          }}
          width={"80%"}
          className="relative overflow-hidden rounded-lg border bg-white pb-0"
          centered={true}
        >
          <div className="h-full">
            <Tabs
              defaultActiveKey="1"
              onChange={(activeKey: string) =>
                downloadFunction(Number(activeKey))
              }
            >
              {modalData.map((item: any) => {
                return (
                  <Tabs.TabPane tab={item.documentName} key={item.id}>
                    {item.url && (
                      <FileViewerOrganism
                        filePath={item.url}
                        fileType={item.contentType}
                      />
                    )}
                  </Tabs.TabPane>
                );
              })}
            </Tabs>
          </div>
        </Modal>
        <Table
          columns={columns}
          dataSource={!loading ? dataSource : []}
          pagination={false}
        ></Table>
      </>
    </FormCardTemplate>
  );
};
