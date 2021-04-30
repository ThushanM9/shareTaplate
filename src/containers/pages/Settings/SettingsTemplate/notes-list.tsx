import {
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Button, Form, Modal, notification, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { FormItemSchema } from "../../../../schemas/form-schema";
import { FormFields } from "../../../../schemas/helpers/form-helpers";
import { assets } from "../../../../ui-helpers/assets";
import { GetSafely } from "../../../../utils/get-safely";
import { useGetSDK, useSDK } from "../../../../utils/hooks/useSDK";
import { P } from "../../../atoms/typography";
import { iSettingConfig } from "./schema";

const notesFormSchema: FormItemSchema[] = [
  {
    label: "Notes",
    key: "notes",
    type: "TEXTAREA",
    rules: [{ required: true, message: "Please add a note" }],
  },
  {
    label: "Active",
    key: "status",
    type: "SWITCH",
    valueMap: {
      true: "ACTIVE",
      false: "INACTIVE",
    },
    rules: [],
  },
];

const layout = {
  wrapperCol: { span: 12 },
};

export const NotesListModal = ({
  isVisible,
  onChangeVisibility,
  viewConfig,
  mainEntityId,
}: {
  isVisible: boolean;
  onChangeVisibility: (state: boolean) => any;
  viewConfig: iSettingConfig;
  mainEntityId: string;
}) => {
  const [mode, setMode] = useState<"CREATE" | "VIEW" | "UPDATE">("VIEW");
  const [form] = Form.useForm();
  const [isProcessing, setProcessing] = useState(false);
  const [refreshTicker, setRefreshTicker] = useState(0);
  const SDK = useGetSDK();
  const [formData, setFormData] = useState<any>({});

  // List Data
  const { data: records } = useSDK<any[]>(
    (sdk) => viewConfig.apis.getNotes(sdk)(mainEntityId),
    [viewConfig, mainEntityId, refreshTicker],
    false,
    []
  );

  useEffect(() => {
    if (!isVisible) {
      setMode("VIEW");
    }
  }, [isVisible]);

  const onFormSubmitedSuccessfully = () => {
    notification.info({
      message: `Success`,
      description: `Notes has been saved successfully!`,
      placement: "bottomRight",
      icon: <CheckCircleFilled style={{ color: assets.color.green }} />,
    });
  };

  const onFormSubmitedFailed = (message?: string) => {
    notification.warn({
      message: "Oops",
      description: message || "Something went wrong",
      placement: "bottomRight",
      icon: <ExclamationCircleOutlined style={{ color: "yellow" }} />,
    });
  };

  const columns = [
    {
      title: () => <P className="text-xs">Note</P>,
      dataIndex: "notes",
      key: "notes",
      render: (text: string) => <P className="text-xs">{text}</P>,
    },
    {
      title: () => <P className="text-xs">status</P>,
      dataIndex: "status",
      key: "status",
      width: 150,
      render: (tag: string) => {
        const color = tag === "ACTIVE" ? "green" : "orange";
        return <Tag color={color}>{(tag || "").toUpperCase()}</Tag>;
      },
    },
    {
      title: () => <P className="text-xs"></P>,
      key: "action",
      width: 150,
      render: (text: any, record: any) => (
        <Space size="middle" className="cursor-pointer">
          <P
            className="text-xs"
            color={assets.color.text_blue}
            onClick={() => {
              setMode("UPDATE");
              setFormData(record);
              form.setFieldsValue(record);
            }}
          >
            Update Record
          </P>
        </Space>
      ),
    },
  ].filter((e) => e);

  const onSave = () => {
    const values = form.getFieldsValue();
    console.log("values", values, formData);
    if (mode === "CREATE") {
      //  Processing Indicator
      setProcessing(true);
      // Patches
      viewConfig.apis
        .createNotes(SDK)(mainEntityId, values)
        .then((d: any) => {
          setProcessing(false);
          console.log("d", d);
          setRefreshTicker(refreshTicker + 1);
          setMode("VIEW");
          onFormSubmitedSuccessfully();
        })
        .catch((e: any) => {
          const data = GetSafely(() => e.response.data, {});
          const dataKeys = Object.keys(data);
          let message = data.message || data.statusText;
          if (!message && dataKeys.length > 0) {
            if (typeof data[dataKeys[0]] === "string") {
              message = data[dataKeys[0]];
            }
          }
          onFormSubmitedFailed(message);
          setProcessing(false);
        });
    } else {
      setProcessing(true);
      // Patches
      viewConfig.apis
        .updateNotes(SDK)(formData.id, {
          id: formData.id,
          version: formData.version,
          ...values,
        })
        .then((d: any) => {
          setProcessing(false);
          console.log("d", d);
          setRefreshTicker(refreshTicker + 1);
          setMode("VIEW");
          onFormSubmitedSuccessfully();
        })
        .catch((e: any) => {
          const data = GetSafely(() => e.response.data, {});
          const dataKeys = Object.keys(data);
          let message = data.message || data.statusText;
          if (!message && dataKeys.length > 0) {
            if (typeof data[dataKeys[0]] === "string") {
              message = data[dataKeys[0]];
            }
          }
          onFormSubmitedFailed(message);
          setProcessing(false);
        });
    }
  };

  return (
    <Modal
      title={<span className="text-sm text-center w-full">Notes</span>}
      visible={isVisible}
      onCancel={() => onChangeVisibility(false)}
      centered={true}
      footer={null}
    >
      {mode === "VIEW" && (
        <div className="flex flex-1 flex-col w-full bg-white">
          <div className="flex flex-1 flex-row justify-end pb-2 -mt-2 px-2">
            <Button onClick={() => setMode("CREATE")}>Create New</Button>
          </div>
          <div className="px-2">
            <Table
              size="small"
              dataSource={records || []}
              columns={columns}
              pagination={{ defaultPageSize: 8 }}
            />
          </div>
        </div>
      )}

      {(mode === "CREATE" || mode === "UPDATE") && (
        <div className="flex flex-1 flex-col w-full bg-white">
          <div className="flex flex-1 flex-row justify-start">
            <Button onClick={() => setMode("VIEW")}>Back</Button>
          </div>
          <div className="pt-10">
            <Form
              form={form}
              {...layout}
              name="notesForm"
              preserve={true}
              onFinish={() => {
                // Todo:
                onSave();
              }}
              onValuesChange={() => {
                const values = form.getFieldsValue();
                setFormData({ ...formData, ...values });
              }}
            >
              <FormFields
                schema={notesFormSchema}
                form={form}
                globalFormState={formData}
              />
              <Form.Item style={{ margin: "0px" }}>
                <Button
                  style={{ width: 150 }}
                  type="primary"
                  htmlType="submit"
                  loading={isProcessing}
                  // disabled={!isFormValid}
                >
                  {mode === "CREATE" ? "Create" : "Update"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </Modal>
  );
};
