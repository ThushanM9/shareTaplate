import { DatePicker, Form, Input, InputNumber, Select, Table } from "antd";
import moment from "moment";
import React from "react";
import { P } from "../../../../atoms/typography";
import { FundTransferDetailsForm } from "../interfaces";

const FundTransferForm: React.FC<FundTransferDetailsForm> = ({
  state,
  updateState,
  paymentMethod,
  paymentType,
  currecyList,
}) => {
  const { Option } = Select;

  const { TextArea } = Input;

  const [form] = Form.useForm();

  const saveDepositFormData = (data: any) => {
    updateState(data);
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        name="depositDetails"
        initialValues={state}
        onValuesChange={() => {
          saveDepositFormData(form.getFieldsValue());
        }}
      >
        <div className="grid grid-cols-3 gap-2 px-6">
          <Form.Item label="Amount Type" name={"amountType"}>
            <Select defaultValue="accountAmount" className="w-full">
              <Option value="accountAmount">Account Amount</Option>
              <Option value="transactionAmount">Transaction Amount</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name={"accountAmount"}
            label="Account Amount"
            rules={[{ type: "number" }]}
          >
            <InputNumber
              className="w-full"
              disabled={true}
              placeholder={state.accountAmount}
              precision={2}
              step={0.1}
            />
          </Form.Item>

          <Form.Item
            name={"transactionAmount"}
            label="Transaction Amount"
            rules={[{ type: "number" }]}
          >
            <InputNumber
              className="w-full"
              disabled={false}
              placeholder={state.transactionAmount}
              precision={2}
            />
          </Form.Item>

          {state.amountType === "transactionAmount" && (
            <Form.Item
              name={"fromTransactionCurrencyId"}
              label="Transaction Currency"
            >
              <Select className="w-full">
                {currecyList &&
                  currecyList.map((item: any, index: number) => (
                    <Option key={index} value={item.currencyId}>
                      {item.currencyCode}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          )}

          {state.amountType === "accountAmount" && (
            <Form.Item
              name={"fromAccountCurrencyId"}
              label="Transaction Currency"
            >
              <Input
                className="w-full"
                disabled={true}
                value={state.currencyId}
                defaultValue={state.currencyCode}
              />
            </Form.Item>
          )}

          <Form.Item name={"transactionExchangeRate"} label="Exchange Rate">
            <InputNumber className="w-full" disabled={true} placeholder={"1"} />
          </Form.Item>

          <Form.Item name={"reference"} label="User Referrence Number">
            <Input
              className="w-full"
              disabled={false}
              placeholder="XXXXXXX"
              defaultValue={state.reference}
            />
          </Form.Item>

          <Form.Item name={"transactionNumber"} label="Transaction Number">
            <Input className="w-full" disabled={false} placeholder="XXXXXXX" />
          </Form.Item>

          <Form.Item name={"paymentType"} label={"Payment Type"}>
            <Select className="w-full" defaultValue={state.paymentTypeId}>
              {paymentType &&
                paymentType.map((item: any, index: number) => (
                  <Option key={index} value={item.id}>
                    {item.accComnListDesc}
                  </Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item name={"paymentMethod"} label={"Transfer Method"}>
            <Select className="w-full" defaultValue={state.paymentMethodId}>
              {paymentMethod &&
                paymentMethod.map((item: any, index: number) => (
                  <Option key={index} value={item.id}>
                    {item.accComnListDesc}
                  </Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item name={"date"} label="Date">
            <DatePicker
              className="w-full"
              defaultValue={moment(state.paymentDate)}
            />
          </Form.Item>
        </div>

        <div
          className="w-full mt-10 pb-10 px-10"
          style={{ backgroundColor: "#FAFAFA", zIndex: 10 }}
        >
          <P fontSize={18} bold className="py-2">
            Charges
          </P>

          <Table size="small" columns={[]} dataSource={[]} pagination={false} />
        </div>

        <div
          className="w-full pb-10 px-10"
          style={{ backgroundColor: "#FAFAFA", zIndex: 10 }}
        >
          <P fontSize={18} bold className="py-2">
            Taxes
          </P>

          <Table size="small" columns={[]} dataSource={[]} pagination={false} />
        </div>
      </Form>
    </>
  );
};

export default FundTransferForm;
