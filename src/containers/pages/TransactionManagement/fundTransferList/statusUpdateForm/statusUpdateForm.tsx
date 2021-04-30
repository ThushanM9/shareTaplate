import { Form, Input, Select } from "antd";
import React from "react";
import { OptionalFormProps } from "../interfaces";

const StatusUpdateForm: React.FC<OptionalFormProps> = ({ updateState }) => {
  const { TextArea } = Input;
  const { Option } = Select;

  const [form] = Form.useForm();

  const saveForm = (data: any) => {
    updateState(data);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="statusUpdateForm"
      onValuesChange={() => {
        saveForm(form.getFieldsValue());
      }}
    >
      <div className="grid grid-cols-2 gap-4 px-20 mb-5">
        <Form.Item label="Status Update" name={"approvalStatus"}>
          <Select className="w-full">
            <Option value="confirm">Confirm</Option>
            <Option value="cancel">Cancel</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Notes" name={"notes"}>
          <TextArea
            className="w-full"
            disabled={false}
            placeholder="This is a Note"
          />
        </Form.Item>
      </div>
    </Form>
  );
};

export default StatusUpdateForm;
