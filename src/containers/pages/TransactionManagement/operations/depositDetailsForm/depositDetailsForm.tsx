import { Form, Input, InputNumber, Select, Table } from "antd";
import React from "react";
import { P } from "../../../../atoms/typography";
import { DepositDetailsFormProps } from "../interfaces";

const DepositDetailsForm: React.FC<DepositDetailsFormProps> = ({
  updateState,
  taxData,
  currecyList,
  state,
  chargeData,
  transactionSubCode,
  exchangeRate,
}) => {
  const { Option } = Select;

  const { TextArea } = Input;

  let chargeAmount,
    chargeBaseAmount,
    netAmount = 0;

  const [form] = Form.useForm();

  const chargeCol = [];

  if (chargeData) {
    chargeData.map((data: any) => {
      chargeAmount = data.chargeAmount;
      chargeBaseAmount = data.chargeBaseAmount;
    });

    if (chargeAmount && chargeBaseAmount) {
      netAmount = chargeBaseAmount - chargeAmount;
    } else if (chargeBaseAmount) {
      netAmount = chargeBaseAmount;
    }

    chargeCol.push({ chargeAmount, chargeBaseAmount, netAmount });
  }

  const chargesColumns = [
    {
      title: "Amount",
      dataIndex: "chargeBaseAmount",
      key: "chargeBaseAmount",
      width: "30%",
      render: (value: string, record: any) => {
        return (
          <p>
            {Number(record.chargeBaseAmount).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        );
      },
    },
    {
      title: "Charges Amount",
      dataIndex: "chargeAmount",
      key: "chargeAmount",
      width: "30%",
      render: (value: string, record: any) => {
        return (
          <p>
            {Number(record.chargeAmount).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        );
      },
    },
    {
      title: "Net Amount",
      dataIndex: "netAmount",
      key: "netAmount",
      width: "30%",
      render: (value: string, record: any) => {
        return (
          <p>
            {Number(record.netAmount).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        );
      },
    },
  ];

  const taxColumns = [
    {
      title: "Tax Amount",
      dataIndex: "taxAmount",
      key: "taxAmount",
      width: "40%",
    },
  ];

  const saveDepositFormData = (data: any) => {
    if (netAmount > 0) {
      data.netAmount = netAmount;
      updateState(data);
    } else {
      updateState(data);
    }
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
          <Form.Item
            label="Amount Type"
            name={"amountType"}
            rules={[{ required: true, type: "string" }]}
          >
            <Select defaultValue="accountAmount" className="w-full">
              <Option value="accountAmount">Account Amount</Option>

              <Option value="transactionAmount">Transaction Amount</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name={"accountAmount"}
            label="Account Amount"
            rules={[{ required: true, type: "number" }]}
          >
            <InputNumber
              className="w-full"
              disabled={state.amountType === "accountAmount" ? false : true}
              placeholder="Type..."
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              precision={2}
              step={0.1}
              min={0}
            />
          </Form.Item>

          <Form.Item
            name={"transactionAmount"}
            label="Transaction Amount"
            rules={[{ required: true, type: "number" }]}
          >
            <InputNumber
              className="w-full"
              disabled={state.amountType === "transactionAmount" ? false : true}
              placeholder="Type..."
              precision={2}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              min={0}
            />
          </Form.Item>

          {state.amountType === "transactionAmount" && (
            <Form.Item
              name={"fromTransactionCurrencyId"}
              label="Transaction Currency"
              rules={[{ required: true, type: "number" }]}
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
              rules={[{ required: true, type: "number" }]}
            >
              <Input
                className="w-full"
                disabled={true}
                value={state.currencyId}
                defaultValue={state.currencyCode}
              />
            </Form.Item>
          )}

          <Form.Item
            name={"transactionExchangeRate"}
            label="Exchange Rate"
            rules={[{ required: true, type: "number" }]}
          >
            {state.amountType === "transactionAmount" && (
              <InputNumber
                className="w-full"
                disabled={true}
                min={0}
                placeholder={
                  transactionSubCode
                    ? transactionSubCode.currConversionRateType ===
                      "SELLING_RATE"
                      ? exchangeRate.exrtSellingRate
                      : exchangeRate.exrtBuyingRate
                    : 1
                }
              />
            )}

            {state.amountType === "accountAmount" && (
              <InputNumber
                className="w-full"
                disabled={true}
                min={0}
                placeholder={"1"}
              />
            )}
          </Form.Item>

          <Form.Item
            name={"statementReference"}
            label="User Referrence Number"
            rules={[{ required: true, type: "number" }]}
          >
            <Input className="w-full" disabled={false} placeholder="XXXXXXX" />
          </Form.Item>

          <Form.Item
            name={"remarks"}
            label="Notes"
            rules={[{ required: true, type: "string" }]}
          >
            <TextArea className="w-full" maxLength={10000} />
          </Form.Item>
        </div>

        <div
          className="w-full mt-10 pb-10 px-10"
          style={{ backgroundColor: "#FAFAFA", zIndex: 10 }}
        >
          <P fontSize={18} bold className="py-2">
            Charges
          </P>

          <Table
            size="small"
            columns={chargesColumns}
            dataSource={chargeCol ? chargeCol : []}
            pagination={false}
          />
        </div>

        <div
          className="w-full pb-10 px-10"
          style={{ backgroundColor: "#FAFAFA", zIndex: 10 }}
        >
          <P fontSize={18} bold className="py-2">
            Taxes
          </P>

          <Table
            size="small"
            columns={taxColumns}
            dataSource={taxData ? taxData : []}
            pagination={false}
          />
        </div>
      </Form>
    </>
  );
};

export default DepositDetailsForm;
