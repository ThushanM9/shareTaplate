import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Select, Table, Upload } from "antd";
import moment from "moment";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import { ENV } from "../../../../../../../sdk/config";
import { useGetSDK, useSDK } from "../../../../../../../utils/hooks/useSDK";
import SelectDate from "../../../../../../atoms/SelectDate";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const DocumentUploadTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const [filelist, setFilelist] = useState<any>([]);
  const currentStep = 8;
  const currentCard = 1;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [form] = Form.useForm();
  const [formData, _setFormData] = useState({
    documentId: 0,
    documentName: "",
    documentStatus: "Received",
    documentType: 0,
    mandatoryStatus: "Yes",
    // checkPoint: "KYC" | "ACCOUNT OPENING";
    // imagePath: "",
    recievedDate: "",
    status: "ACTIVE",
  });
  const setFormData = (edits: Partial<typeof formData>) =>
    _setFormData({ ...formData, ...edits });
  const layout = {
    wrapperCol: { span: 12 },
  };
  useImperativeHandle(ref, () => ({
    validateCard() {
      form
        .validateFields()
        .then((d) => {
          console.log("d", d);
        })
        .catch((e) => {
          console.log("e", e);
        });
      return form.getFieldsError();
    },
  }));

  const onComplete = useMemo(
    () => () => {
      console.log("On Complete");
    },
    []
  );

  const saveData = (data: any) => {
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...data,
      },
    });
  };
  const { data: type, loading: typeLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.CommonService.getDocumentTypeDetailsByStatus("ACTIVE"),
    [],
    false,
    []
  );
  const SDK = useGetSDK();

  const modelProps: any = {
    action: "https://",
    name: "file",
    async beforeUpload(file: any) {
      console.log(file.size);
      setFilelist([file]);
      let document: any = await SDK.DocumentUploadService.fileUpload(file, {
        origin: "customer",
        metadata: "",
      });
      setFormData({ documentId: document.id });
      console.log(document);
      return false;
    },
    onRemove(file: any) {
      setFilelist([]);
    },
    fileList: filelist,
  };

  console.log("ENV", ENV.basePath, ENV.token);

  // useEffect(() => {
  //   setState({
  //     ...state,
  //     globalFormState: {
  //       ...state.globalFormState,
  //       documentDetails: [
  //         ...state.globalFormState.documentDetails,
  //         formData as any,
  //       ],
  //     },
  //   });
  //   console.log("Step 9 ->Document Upload Data Change", formData);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [formData]);
  // console.log(type);
  const onSave = () => {
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        documentDetails: [],
        // documentDetails: [
        //   ...state.globalFormState.documentDetails,
        //   formData as any,
        // ],
      },
    });
    setFormData({
      documentId: 0,
      documentName: "",
      documentStatus: "Received",
      documentType: 0,
      mandatoryStatus: "Yes",
      // checkPoint: "KYC" | "ACCOUNT OPENING";
      // imagePath: "",
      recievedDate: "",
      status: "ACTIVE",
    });
  };

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <InputContainer
          title="Document Type"
          input={
            <Select
              className="w-1/2"
              onChange={(typeId: number) => {
                // console.log(
                //   "QQQQ",
                //   type.find((item: any) => item.id === typeId)?.documentTypeName
                // );
                setFormData({
                  documentType: Number(typeId),
                  documentName: type.find((item: any) => item.id === typeId)
                    ?.documentTypeName,
                });
              }}
            >
              {type.map((item, index) => {
                return (
                  <Select.Option key={index} value={item.id}>
                    {item.documentTypeName}
                  </Select.Option>
                );
              })}
            </Select>
          }
        ></InputContainer>

        <InputContainer
          title="Mandetory Indicator"
          input={
            <Select
              className="w-1/2"
              onChange={(status) => {
                console.log(status);
                setFormData({ mandatoryStatus: String(status) });
              }}
            >
              {[
                {
                  value: "Yes",
                  label: "Yes",
                },
                {
                  value: "No",
                  label: "No",
                },
              ].map((item, index) => {
                return (
                  <Select.Option key={index} value={item.value}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select>
          }
        ></InputContainer>
        <InputContainer
          title="Received Date"
          input={
            <SelectDate
              onChange={(date) => {
                setFormData({
                  recievedDate: String(moment(date).format("YYYY/MM/DD")),
                });
              }}
            ></SelectDate>
          }
        ></InputContainer>
        <InputContainer
          title="Document Upload"
          input={
            <Upload.Dragger {...modelProps} name="files" className="mt-1">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          }
        ></InputContainer>
        <InputContainer
          title="Status"
          input={
            <Select
              className="w-1/2"
              onChange={(status) => {
                setFormData({ documentStatus: String(status) });
              }}
            >
              {[
                {
                  value: "Received",
                  label: "Received",
                },
                {
                  value: "Not Received",
                  label: "Not Received",
                },
                {
                  value: "Removed",
                  label: "Removed",
                },
              ].map((item, index) => {
                return (
                  <Select.Option key={index} value={item.value}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select>
          }
        ></InputContainer>
        <Button type="primary" onClick={onSave}>
          Save
        </Button>
        <Table
          className="mt-4"
          columns={[
            {
              title: "Document Type",
              dataIndex: "documentType",
              key: "name",
            },
            {
              title: "Received Date",
              dataIndex: "recievedDate",
              key: "age",
            },
            {
              title: "Document Id",
              dataIndex: "documentId",
              key: "address",
            },
            {
              title: "Action",
              key: "action",
              dataIndex: "action",
            },
          ]}
          dataSource={state.globalFormState.documentDetails?.map((item) => {
            return {
              ...item,
              action: (
                // <Space size="middle">
                <Button
                  type="link"
                  onClick={() => {
                    setState({
                      ...state,
                      globalFormState: {
                        ...state.globalFormState,
                        documentDetails: [],
                        // documentDetails: state.globalFormState.documentDetails?.filter(
                        //   (savedItem: any) =>
                        //     savedItem.documentId !== (item as any).documentId
                        // ),
                      },
                    });
                  }}
                >
                  Delete
                </Button>
                // </Space>
              ),
            };
          })}
          pagination={false}
        ></Table>
      </>
    </FormCardTemplate>
  );
});

// documentId: 0,
//     documentName: "",
//     documentStatus: "Received",
//     documentType: 0,
//     mandatoryStatus: "Yes",
//     // checkPoint: "KYC" | "ACCOUNT OPENING";
//     // imagePath: "",
//     recievedDate: "",
