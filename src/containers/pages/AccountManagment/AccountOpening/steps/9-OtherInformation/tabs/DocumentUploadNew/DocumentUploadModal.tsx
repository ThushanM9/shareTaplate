import { InboxOutlined } from "@ant-design/icons";
import { Button, Modal, Upload } from "antd";
import React, { useContext, useState } from "react";
import { useGetSDK } from "../../../../../../../../utils/hooks/useSDK";
import { AccountOpeningContainerContext } from "../../../../AccountOpeningContext";

export const DocumentUploadModal = ({
  isVisible,
  setIsVisible,

  setDocumentIdToState,
}: {
  isVisible: boolean;

  setDocumentIdToState: Function;
  setIsVisible: Function;
}) => {
  // "fileDownloadUri": "string",
  //         "fileName": "string",
  //         "fileType": "string",
  //         "id": 0,
  //         "size": 0

  const onOK = async () => {
    let document: any = await SDK.DocumentUploadService.fileUpload(
      filelist[0],
      {
        origin: "customer",
        metadata: "",
      }
    );
    console.log("DOcumentRes", document);
    setDocumentIdToState(
      document.id,
      document.fileType,
      document.fileName,
      document.size,
      document.fileDownloadUri
    );
  };
  const [filelist, setFilelist] = useState<any>([]);
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const SDK = useGetSDK();
  const modelProps: any = {
    action: "https://",
    name: "file",
    async beforeUpload(file: any) {
      //   console.log(file.size);
      setFilelist([file]);

      // setFormData({ documentId: document.id });
      // setState({
      //   ...state,
      //   globalFormState: {
      //     ...state.globalFormState,
      //     documentDetails: [...state.globalFormState.documentDetails, formData],
      //   },
      // });
      return false;
    },
    onRemove(file: any) {
      setFilelist([]);
    },
    fileList: filelist,
  };

  return (
    <Modal
      onCancel={() => setIsVisible(false)}
      bodyStyle={{ minHeight: 600 }}
      visible={isVisible}
      footer={[
        <Button key="back" onClick={() => setIsVisible(false)}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            onOK();
            setIsVisible(false);
          }}
          disabled={filelist.length === 0}
        >
          Upload
        </Button>,
      ]}
    >
      <Upload.Dragger {...modelProps} name="files" className="mt-8">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
      </Upload.Dragger>
    </Modal>
  );
};
