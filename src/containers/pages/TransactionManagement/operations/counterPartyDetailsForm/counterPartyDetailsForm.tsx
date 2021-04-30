import { Form, Input } from "antd";
import React from "react";
import { OptionalFormProps } from "../interfaces";

const CounterPartyForm: React.FC<OptionalFormProps> = ({ updateState }) => {
  const { TextArea } = Input;

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
        <Form.Item label="Name" name={"counterPartyName"}>
          <Input className="w-full" disabled={false} />
        </Form.Item>

        <Form.Item label="Identification" name={"counterPartyIdentification"}>
          <Input className="w-full" disabled={false} placeholder="Type..." />
        </Form.Item>

        <Form.Item label="Address" name={"counterPartyAddress"}>
          <TextArea className="w-full" disabled={false} placeholder="Type..." />
        </Form.Item>

        <Form.Item label="Notes" name={"counterPartyNotes"}>
          <TextArea className="w-full" disabled={false} placeholder="Type..." />
        </Form.Item>
      </div>
    </Form>
  );
};

export default CounterPartyForm;
