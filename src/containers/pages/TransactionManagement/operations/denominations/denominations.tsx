import { Form, InputNumber, Select, Space } from "antd";
import React, { useState } from "react";
import { LOLCSDK } from "../../../../../sdk";
import { useSDK } from "../../../../../utils/hooks/useSDK";
import { P } from "../../../../atoms/typography";
import { DenominationsProps } from "../interfaces";

const Denominations: React.FC<DenominationsProps> = ({
  updateState,
  formArray,
  state,
}) => {
  const [form] = Form.useForm();

  const { Option } = Select;

  const [denominations, setDenominations] = useState<any>();

  useSDK(
    (sdk: LOLCSDK) =>
      sdk.CashManagement.getAllDenominations().then((data) => {
        setDenominations(data);
      }),
    [],
    false,
    {}
  );

  let denominationsData: any;

  const isCurrency = (value: any) => {
    return state.amountType === "transactionAmount"
      ? value.currencyId === state.fromTransactionCurrencyId
      : value.currencyId === state.currencyId;
  };

  if (denominations) {
    denominationsData = denominations.filter(isCurrency);
  }

  const onFinish = (data: any) => {
    let result;

    formArray = [];

    for (const denominationData of data.denominations) {
      let resultObject = {
        currencyCode: "",
        currencyId: "",
        currencyName: "",
        denominationDetailId: "",
        quantity: "",
        quantityTotalAmount: 0,
      };

      result = denominations.find((denomData: any) => {
        return denomData.id === denominationData?.id;
      });

      resultObject.currencyCode = result?.currencyCode;
      resultObject.currencyId = result?.currencyId;
      resultObject.currencyName = result?.currencyName;
      resultObject.denominationDetailId = result?.id;
      resultObject.quantity = denominationData?.quantity;
      resultObject.quantityTotalAmount =
        denominationData?.quantity * Number(result?.value);

      formArray.push(resultObject);

      if (formArray) {
        updateState(formArray);
      }
    }
  };

  return (
    <Form
      form={form}
      name="denominationsForm"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{ denominations: [{ id: "", quantity: "" }] }}
      onValuesChange={() => {
        onFinish(form.getFieldsValue());
      }}
    >
      <div
        className="px-8 py-4"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F4F4F4",
          marginBottom: 14,
        }}
      >
        <div style={{ width: "40%" }}>
          <P fontSize={14} color={"black"} className="pr-2" bold>
            Values
          </P>
        </div>

        <div style={{ width: "40%" }}>
          <P fontSize={14} color={"black"} className="pr-2" bold>
            Quantity
          </P>
        </div>

        <div style={{ width: "20%" }}>
          <P fontSize={14} color={"black"} className="pr-2" bold>
            Action
          </P>
        </div>
      </div>

      <div className="mx-8">
        <Form.List name="denominations">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "id"]}
                    fieldKey={[field.fieldKey, "id"]}
                    style={{ marginRight: 40 }}
                  >
                    <Select style={{ width: 240 }}>
                      {denominationsData &&
                        denominationsData.map((item: any, index: number) => (
                          <Option key={index} value={item.id}>
                            {item.value}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...field}
                    name={[field.name, "quantity"]}
                    fieldKey={[field.fieldKey, "quantity"]}
                    style={{ marginRight: 40 }}
                  >
                    <InputNumber
                      placeholder="Quantity"
                      min={0}
                      style={{ width: 240 }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "20%",
                      }}
                    >
                      <P
                        fontSize={14}
                        color={"blue"}
                        onClick={() => add()}
                        className="pr-2"
                      >
                        Add
                      </P>

                      <P
                        fontSize={14}
                        color={"blue"}
                        onClick={() => remove(field.name)}
                        className="pl-2"
                      >
                        Clear
                      </P>
                    </div>
                  </Form.Item>
                </Space>
              ))}
            </>
          )}
        </Form.List>
      </div>
    </Form>
  );
};

export default Denominations;
