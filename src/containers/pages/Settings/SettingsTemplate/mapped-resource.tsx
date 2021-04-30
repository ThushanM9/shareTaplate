import {
  CheckCircleFilled,
  ExclamationCircleOutlined
} from "@ant-design/icons";
import { Button, Form, Modal, notification, Space, Table } from "antd";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { FormFields } from "../../../../schemas/helpers/form-helpers";
import { assets } from "../../../../ui-helpers/assets";
import { CountDecimals } from "../../../../utils/count-decimals";
import { GetSafely } from "../../../../utils/get-safely";
import { useGetSDK, useSDK } from "../../../../utils/hooks/useSDK";
import { P } from "../../../atoms/typography";
import {
  OneToManyMapSchema,
  SettingListViewColumnRenderFunctions,
  SettingsSchema_Field
} from "./schema";

const layout = {
  wrapperCol: { span: 12 },
};

export const MappedResourceModal = ({
  isVisible,
  onChangeVisibility,
  schema,
  mainEntityId,
}: {
  isVisible: boolean;
  onChangeVisibility: (state: boolean) => any;
  schema: OneToManyMapSchema;
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
    (sdk) => schema.apis.list(sdk)(mainEntityId),
    [schema, mainEntityId, refreshTicker],
    !schema,
    []
  );

  const [updateViewEntityId, setUpdateViewEntityId] = useState("");

  const { data: _entityData, loading: isUpdateViewLoading } = useSDK(
    (sdk) => schema.apis.getById(sdk)(updateViewEntityId),
    [updateViewEntityId],
    mode !== "UPDATE"
  );

  const entityData = useMemo(() => {
    if (!schema) {
      return {};
    }
    const formattedData = {
      ...(_entityData as any),
    };
    for (let field of schema?.createCard.fields) {
      if (field.type === "DATE" && field.format) {
        formattedData[field.key!] = moment(formattedData[field.key!]);
      }
    }
    return formattedData;
  }, [_entityData, schema]);

  useEffect(() => {
    setFormData(entityData);
    form.setFieldsValue(entityData);
  }, [entityData, form, setFormData]);

  const [selectedMappedEntityId, setSelectedMappedEntityId] = useState("");

  const [
    isMappedResourceModalVisible,
    setMappedResourceModalVisible,
  ] = useState(false);
  const [mappedResourceSchema, setMappedResourceSchema] = useState<
    OneToManyMapSchema
  >(null as any);

  const mappedEntities = schema?.oneToManyMappings
    ? schema?.oneToManyMappings.map((section: any) => ({
      title: () => <P className="text-xs"></P>,
      key: section.label,
      width: 150,
      render: (text: any, record: any) => (
        <Space size="middle" className="cursor-pointer">
          <P
            className="text-xs"
            color={assets.color.text_blue}
            onClick={() => {
              console.log("View One to many Mapping");
              setSelectedMappedEntityId(record.id);
              setMappedResourceModalVisible(true);
              setMappedResourceSchema(section);
            }}
          >
            View {section.label}
          </P>
        </Space>
      ),
    }))
    : [];

  useEffect(() => {
    if (!isVisible) {
      setMode("VIEW");
    }
  }, [isVisible]);

  if (!schema) {
    return <></>;
  }

  const onFormSubmitedSuccessfully = () => {
    notification.info({
      message: `Success`,
      description: `${schema.label} has been saved successfully!`,
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
    ...schema.listView.fields.map((field: SettingsSchema_Field) => ({
      ...field,
      title: () => <P className="text-xs">{field.label}</P>,
      dataIndex: typeof field.field === "function" ? field.id : field.field,
      key: field.id,
      render: (SettingListViewColumnRenderFunctions as any)[field.type](field),
    })),
    ...mappedEntities,
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
              setUpdateViewEntityId(record.id);
            }}
          >
            Update Record
          </P>
        </Space>
      ),
    },
  ].filter((e) => e);

  const onSave = () => {
    console.log("values", formData);
    const data: any = { ...form.getFieldsValue() };
    for (let field of schema.createCard.fields) {
      if (field.type === "DATE" && field.format) {
        console.log(data[field.key as any], data, field.key);
        data[field.key as any] = data[field.key as any].format(field.format);
      }
      if (field.type === "NUMBER" && field.step) {
        data[field.key as any] = Number(data[field.key as any]).toFixed(
          CountDecimals(field.step)
        );
      }
    }
    if (mode === "CREATE") {
      //  Processing Indicator
      setProcessing(true);
      // Patches
      schema.apis
        .create(SDK)(mainEntityId, data)
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
      schema.apis
        .update(SDK)(formData.id, {
          id: formData.id,
          version: formData.version,
          ...data,
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
      title={<span className="text-sm text-center w-full">{schema.label}</span>}
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

      {!isUpdateViewLoading && (mode === "CREATE" || mode === "UPDATE") && (
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
                schema={schema.createCard.fields}
                form={form}
                onExtraFieldMapped={() => {
                  const values = form.getFieldsValue();
                  setFormData({ ...formData, ...values });
                }}
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

      {schema.oneToManyMappings && (
        <MappedResourceModal
          isVisible={isMappedResourceModalVisible}
          onChangeVisibility={(state) => setMappedResourceModalVisible(state)}
          mainEntityId={selectedMappedEntityId}
          schema={mappedResourceSchema}
        />
      )}
    </Modal>
  );
};
