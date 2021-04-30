import { Form, Select } from "antd";
import React from "react";
import { DepositDetailsFormProps } from "../interfaces";

const TransactionTypeForm: React.FC<DepositDetailsFormProps> = ({
  updateState,
  state,
}) => {
  const { Option } = Select;

  const [form] = Form.useForm();

  const saveDepositFormData = (data: any) => {
    updateState(data);
  };

  return (
    <div
      style={{
        paddingLeft: 220,
        paddingRight: 220,
        paddingBottom: 40,
        paddingTop: 40,
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="depositDetails"
        initialValues={state}
        onValuesChange={() => {
          saveDepositFormData(form.getFieldsValue());
        }}
      >
        <Form.Item name={"transactionType"}>
          <Select className="w-full">
            <Option value={"Internal Own"}>Domestic Internal</Option>
            <Option value={"External"}>Domestic External</Option>
            <Option value={""} disabled>
              International
            </Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TransactionTypeForm;
