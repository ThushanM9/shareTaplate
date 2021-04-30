import { Modal } from "antd";
import React, { useEffect } from "react";
import { FileViewerOrganism } from "../../../../../../../organisms/FileViewer/FileViewer";

export const DocumentViewModal = ({
  viewDocument,
  setViewDocument,
  docArray,
  modalData,
  setModalData,
}: {
  viewDocument: boolean;
  setViewDocument: Function;
  docArray: any[];
  modalData: any[];
  setModalData: Function;
}) => {
  // useEffect(() => {

  // }, [modalData]);
  console.log("SSSIG", modalData);

  useEffect(() => {
    console.log("ZZZZ", docArray);
  }, [docArray]);

  return (
    <Modal
      title={"Documents"}
      visible={viewDocument}
      onCancel={() => {
        setViewDocument(false);
        setModalData([]);
      }}
      footer={null}
      bodyStyle={{
        padding: 0,
        minHeight: "400px",
        height: "90vh",
        overflow: "overflow-y-auto",
        backgroundColor: "rgba(247, 250, 252, 0.3)",
      }}
      width={"80%"}
      className="rounded-lg border bg-gray-100 pb-0"
      centered={true}
    >
      {modalData.map((item: any, index) => {
        return (
          <FileViewerOrganism
            key={index}
            css={{ marginBottom: "2rem" }}
            filePath={item.url}
            fileType={item.type}
          />
        );
      })}
    </Modal>
  );
};
