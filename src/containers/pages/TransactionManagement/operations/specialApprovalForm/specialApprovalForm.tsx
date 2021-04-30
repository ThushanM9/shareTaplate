import { Form, Select } from "antd";
import React from "react";
import { OptionalFormProps } from "../interfaces";

const CounterPartyForm: React.FC<OptionalFormProps> = ({ updateState }) => {
  const { Option } = Select;

  const [form] = Form.useForm();

  const saveForm = (data: any) => {
    updateState(data);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="counterPartyForm"
      onValuesChange={() => {
        saveForm(form.getFieldsValue());
      }}
    >
      <div className="grid grid-cols-2 gap-4 px-20 mb-5">
        <Form.Item name={"approvalType"} label="Approval Type">
          <Select className="w-full">
            <Option value={"special"}>Special</Option>
            <Option value={"normal"}>Normal</Option>
          </Select>
        </Form.Item>

        <Form.Item name={"approvalPerson"} label="Approval Person">
          <Select className="w-full">
            <Option value={"manager"}>Manager</Option>
            <Option value={"employee"}>Employee</Option>
          </Select>
        </Form.Item>
      </div>
    </Form>
  );
};

export default CounterPartyForm;
