import {
  CheckCircleFilled,
  ExclamationCircleOutlined,
  LeftOutlined,
  LoadingOutlined,
  ProfileTwoTone,
  RollbackOutlined,
  SaveOutlined
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Steps
} from "antd";
import { goBack } from "connected-react-router";
import _ from "lodash";
import moment from "moment";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { connect } from "react-redux";
import { CONFIG } from "../../../../config";
import { FormFields } from "../../../../schemas/helpers/form-helpers";
import { assets } from "../../../../ui-helpers/assets";
import { CountDecimals } from "../../../../utils/count-decimals";
import { GetSafely } from "../../../../utils/get-safely";
import { useGetSDK, useSDK } from "../../../../utils/hooks/useSDK";
import { P } from "../../../atoms/typography";
import { resolveSetting } from "../settings-schema";
import {
  SettingSchema_SideBarCard,
  SettingSchema_Step,
  SettingSchema_SubStep
} from "./schema";

const { confirm } = Modal;

const layout = {
  wrapperCol: { span: 12 },
};

const grid = {
  gridTemplateColumns: "repeat(27,1fr)",
  gridColumn: "span 17",
};

// const SimpleArrayTable = ({
//   data,
//   onRemove,
//   fields,
// }: {
//   data: any[];
//   onRemove: (index: number) => any;
//   fields: FormItemSchema[];
// }) => {
//   const columns = [
//     ...fields.map((field) => ({
//       title: () => <P className="text-xs">{field.label}</P>,
//       dataIndex: field.key,
//       key: field.key,
//       render: (SettingsForm_CollectionColumnRenderMap as any)[field.type],
//     })),
//     {
//       title: () => <P className="text-xs">Action</P>,
//       key: "action",
//       render: (text: any, record: any, index: number) => (
//         <Space size="middle" className="cursor-pointer">
//           <P
//             className="text-xs"
//             color={assets.color.text_blue}
//             onClick={() => onRemove(index)}
//           >
//             Remove
//           </P>
//         </Space>
//       ),
//     },
//   ];
//   return <Table columns={columns} dataSource={data} />;
// };

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }: any) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;

  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [form, prevVisible, visible]);
};

const SubModalForm: React.FC<any> = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      title="Basic Drawer"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="subModalForm">
        <Form.Item name="name" label="User Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="User Age" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

// const CollectionField = ({
//   fieldSchema,
//   form,
// }: {
//   fieldSchema: FormItemSchema;
//   form: FormInstance;
// }) => {
//   return (
//     <div>
//       <Form.Item
//         label="User List"
//         shouldUpdate={(prevValues, curValues) =>
//           prevValues.users !== curValues.users
//         }
//       >
//         {/* {({ getFieldValue }) => {
//         const users = getFieldValue('users') || [];
//         return users.length ? (
//           <ul>
//             {users.map((user, index) => (
//               <li key={index} className="user">
//                 <Avatar icon={<UserOutlined />} />
//                 {user.name} - {user.age}
//               </li>
//             ))}
//           </ul>
//         ) : (
//             <Typography.Text className="ant-form-text" type="secondary">
//               ( <SmileOutlined /> No user yet. )
//             </Typography.Text>
//           );
//       }} */}
//       </Form.Item>
//     </div>
//   );
// };

const SubStep = ({
  schema,
  data,
  saveData,
  onComplete,
  onBack,
  isProcessing,
  onReset,
}: {
  schema: SettingSchema_SubStep;
  data: any;
  saveData: (data: any) => any;
  onComplete: () => any;
  onBack: () => any;
  isProcessing: boolean;
  onReset: () => any;
}) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  // const showUserModal = () => {
  //   setVisible(true);
  // };
  const hideUserModal = () => {
    setVisible(false);
  };

  // Next
  // 1) Seperate Print Field Function
  // 2) Add Title and Description from Schema
  // 3) Add Row
  // Wrap (1) function with <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">     </Space>
  // 4) Write Collection
  // -- Write a table function
  // -- Write empty field function
  // -- Write Add another function
  // -- Write Remove Function for current field
  // Instead of using Form.List, could use "Control between forms" for list
  // For both better to write a seperate component to handle collection
  console.log(data);

  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === "subModalForm") {
          const { baseForm } = forms;
          const users = baseForm.getFieldValue("users") || [];
          baseForm.setFieldsValue({ users: [...users, values] });
          setVisible(false);
        }
      }}
    >
      <Form
        form={form}
        {...layout}
        name="baseForm"
        initialValues={data}
        preserve={true}
        onFinish={onComplete}
        onValuesChange={() => {
          saveData(form.getFieldsValue());
        }}
      >
        {schema?.cards?.map((cardSchema, index) => (
          <div
            className="flex flex-1 flex-col justify-between border rounded shadow p-4 w-8/12"
            key={index.toString()}
          >
            <P bold>{cardSchema.title}</P>
            <P fontSize={14} color={assets.color.text_gray}>
              {cardSchema.description}
            </P>

            <div className="pt-10">
              <FormFields
                schema={cardSchema.fields}
                form={form}
                globalFormState={data}
                onExtraFieldMapped={() => {
                  saveData(form.getFieldsValue());
                }}
              />
            </div>
          </div>
        ))}

        <div className="flex flex-1 flex-row justify-end py-2 pt-8">
          <div
            className="flex flex-row"
          // style={{ width: "50%" }}
          >
            <Button
              style={{ width: 100 }}
              onClick={onBack}
              className="mx-2"
              type="dashed"
              hidden={schema.hiddenActionButtons?.includes("BACK")}
            >
              <LeftOutlined />
              Back
            </Button>
            <Button
              style={{ width: 100 }}
              hidden={schema.hiddenActionButtons?.includes("RESET")}
              onClick={() => {
                onReset();
                setTimeout(() => {
                  form.resetFields();
                  onReset();
                  saveData(form.getFieldsValue());
                }, 0);
              }}
              className="mx-2"
              type="dashed"
            >
              <RollbackOutlined />
              Reset
            </Button>
            <Form.Item style={{ margin: "0px" }}>
              <Button
                hidden={schema.hiddenActionButtons?.includes("SAVE")}
                className="mx-2"
                style={{ width: 120 }}
                type="primary"
                htmlType="submit"
                loading={isProcessing}
              // disabled={!isFormValid}
              >
                <SaveOutlined />
                Save
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
      <SubModalForm visible={visible} onCancel={hideUserModal} />
    </Form.Provider>
  );
};

const SettingsCreateUpdateTemplate: FC<CreateFrequencySettingsProps> = (
  props: CreateFrequencySettingsProps & { location?: any }
) => {
  const isCreateMode = props.location.pathname.indexOf("create") > -1;
  const entityId = props.match.params.id;
  const viewSettings = resolveSetting(
    props.location.pathname
      .replace(CONFIG.base, "")
      .replace("/create", "")
      .replace(`/${entityId}/view`, "")
  );

  const { user } = useAuth0();

  const { payload } = useSDK(
    (sdk) => viewSettings.apis.getById(sdk)(entityId),
    [entityId],
    isCreateMode
  );

  const [isLoading, setIsLoading] = useState(isCreateMode ? false : true);

  const allFields: any[] = useMemo(() => {
    let allFields: any[] = [];
    for (const step of viewSettings.createView.steps) {
      for (const subStep of step.subSteps) {
        for (const card of subStep.cards) {
          allFields = [...allFields, ...card.fields];
        }
      }
    }
    return allFields;
  }, [viewSettings]);

  const entityData = useMemo(() => {
    const formattedData = {
      ...(payload.data as any),
    };
    for (let field of allFields) {
      if (field.type === "DATE" && field.format) {
        formattedData[field.key] = moment(formattedData[field.key]);
        //debugger
      }
    }
    return formattedData;
  }, [payload.data, allFields]);

  const [globalFormData, _setGlobalFormData] = useState<any>({});

  const [isProcessing, setProcessing] = useState(false);

  useEffect(() => {
    if (!payload.loading) {
      _setGlobalFormData(entityData);
      setIsLoading(false);
    }
  }, [entityData, _setGlobalFormData, payload.loading]);

  const setGlobalFormData = (change: any) => {
    _setGlobalFormData({ ...globalFormData, ...change });
  };

  const steps: SettingSchema_Step[] = useMemo(() => {
    if (!isCreateMode && viewSettings.createView.nonEditableFields) {
      const clonedSteps: SettingSchema_Step[] = _.cloneDeep(
        viewSettings.createView.steps
      );
      for (const step of clonedSteps) {
        for (const subStep of step.subSteps) {
          for (const card of subStep.cards) {
            for (const field of card.fields) {
              if (
                viewSettings.createView.nonEditableFields.indexOf(field.key) >
                -1
              ) {
                field.readOnly = true;
              }
            }
          }
        }
      }
      return clonedSteps;
    }
    return viewSettings.createView.steps;
  }, [
    isCreateMode,
    viewSettings.createView.nonEditableFields,
    viewSettings.createView.steps,
  ]);

  const [currentStep, setCurrentStep] = useState(0);

  const currentTabList = steps[currentStep].subSteps.map((substep) => ({
    key: substep.title,
    tab: substep.title,
  }));

  const [activeTabKey, setActiveTabKey] = useState(currentTabList[0].key);

  useEffect(() => {
    setActiveTabKey(currentTabList[0].key);
  }, [activeTabKey, currentTabList]);

  const activeTabIndex = _.findIndex(currentTabList, { key: activeTabKey });

  useEffect(() => {
    setActiveTabKey(currentTabList[0].key);
  }, [setActiveTabKey, currentTabList]);

  const onFormSubmitedSuccessfully = () => {
    notification.info({
      message: `Success`,
      description: `${viewSettings.title} has been saved successfully!`,
      placement: "bottomRight",
      icon: <CheckCircleFilled style={{ color: assets.color.green }} />,
    });
  };

  const onFormSubmitedFailed = (message?: string) => {
    console.log(message);
    notification.warn({
      message: "Oops",
      description: message || "Something went wrong",
      placement: "bottomRight",
      icon: <ExclamationCircleOutlined style={{ color: "yellow" }} />,
    });
  };

  const onReset = () => {
    _setGlobalFormData(isCreateMode ? {} : entityData);
  };

  const SDK = useGetSDK();

  const onSubmitForm = () => {
    confirm({
      title: `${isCreateMode ? "Create" : "Update"} ${viewSettings.title}?`,
      icon: <ExclamationCircleOutlined />,
      content: `Confirm to ${isCreateMode ? "create" : "update"} New ${viewSettings.title
        }.`,
      onOk() {
        const data = { ...globalFormData };
        for (let field of allFields) {
          if (field.type === "DATE" && field.format) {
            data[field.key] = data[field.key].format(field.format);
            //console.log("here");
          }
          if (field.type === "NUMBER" && field.step) {
            data[field.key] = Number(data[field.key]).toFixed(
              CountDecimals(field.step)
            );
          }
        }
        //  console.log(isCreateMode);
        if (isCreateMode) {
          //  Processing Indicator
          setProcessing(true);
          // Patches
          if (viewSettings.id === "currency-type-definition") {
            data.currencyCreatedUser = user.email;
          }
          viewSettings.apis
            .create(SDK)(data)
            .then((d: any) => {
              setProcessing(false);
              onFormSubmitedSuccessfully();
              props.goBack();
            })
            .catch((e: any) => { //read error object
              const data = GetSafely(() => e.response.data, {});
              const dataKeys = Object.keys(data);
              console.log(data);
              let message = data.message || data.statusText || data.description;
              if (!message && dataKeys.length > 0) {
                if (typeof data[dataKeys[0]] === "string") {
                  message = data[dataKeys[0]];
                }
              }

              onFormSubmitedFailed(message);
              setProcessing(false);
            });
        } else {
          // delete data.code;
          // Todo: Processing Indicator

          console.log(data);

          let id = globalFormData.id;
          if (
            viewSettings.customIdMapping &&
            viewSettings.customIdMapping.updateView
          ) {
            id = globalFormData[viewSettings.customIdMapping.updateView];
          }
          console.log(data);
          // Patches
          if (viewSettings.id === "currency-type-definition") {
            data.currencyModifiedUser = user.email;
          }
          viewSettings.apis
            .update(SDK)(id, data)
            .then((d: any) => {
              onFormSubmitedSuccessfully();
              props.goBack();
              setProcessing(false);
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
      },
      onCancel() { },
    });
  };

  return (
    <div
      style={{
        background: "#EEEEEE",
        gridTemplateColumns: "repeat(20,1fr)",
      }}
      className="relative grid border"
    >
      {/* Steps Container */}
      <div
        className="relative bg-white"
        style={{ gridColumn: "span 3", marginRight: ".35rem" }}
      >
        <section style={{ height: "82vh" }} className="relative w-full p-0">
          <div
            style={{ transform: "scale(.75)" }}
            className="mt-4 ml-4 max-w-full origin-top-left duration-75 "
          >
            <Steps
              style={{ boxSizing: "border-box" }}
              direction="vertical"
              // size="small"
              className="relative"
              onChange={(index) => {
                setCurrentStep(index);
              }}
              current={currentStep}
              status="process"
            >
              {steps.map((item, index) => {
                return (
                  <Steps.Step
                    key={index}
                    className="p-3"
                    title={
                      <span className="p-0 m-0 text-xl">{item.title}</span>
                    }
                    description={
                      <span className="p-0 m-0 text-l">{item.description}</span>
                    }
                  ></Steps.Step>
                );
              })}
            </Steps>
          </div>
        </section>
      </div>

      <div className="relative grid bg-white border" style={grid}>
        <div className="relative bg-white" style={{ gridColumn: "span 22" }}>
          <Card
            className="max-w-full min-h-full shadow rounded"
            tabList={currentTabList}
            activeTabKey={activeTabKey}
            onTabChange={(key) => setActiveTabKey(key)}
          >
            {!isLoading &&
              (console.log(steps[currentStep].subSteps[activeTabIndex]),
                (
                  <SubStep
                    {...{
                      schema: steps[currentStep].subSteps[activeTabIndex],
                      data: globalFormData,
                      saveData: (data) => {
                        setGlobalFormData(data);
                      },
                      onComplete: () => {
                        onSubmitForm();
                      },
                      onBack: () => {
                        props.goBack();
                      },
                      onReset: () => {
                        onReset();
                      },
                      isProcessing,
                    }}
                  />
                ))}
            {isLoading && (
              <div className="flex flex-row items-center justify-center p-4">
                <LoadingOutlined />
              </div>
            )}
          </Card>
        </div>
        <div className="relative border-l" style={{ gridColumn: "span 5" }}>
          <div className="flex justify-center shadow items-center font-bold py-4">
            <ProfileTwoTone className="mx-2" />
            {viewSettings.createView.sideBar.title}
          </div>
          {viewSettings.createView.sideBar.cards.map(
            (card: SettingSchema_SideBarCard, index: number) => (
              <div
                key={index}
                className="flex flex-1 flex-col shadow rounded m-2 px-2 py-4"
              >
                <P className="text-x font-semibold">{card.title}</P>
                <P className="text-xs">{card.body}</P>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export interface CreateFrequencySettingsProps {
  match: any;
  goBack: () => any;
}

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  goBack: () => {
    dispatch(goBack());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsCreateUpdateTemplate);
