import { Form, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FormCardTemplate } from "../../../../schemas/helpers/form-card";
import { FormFields } from "../../../../schemas/helpers/form-helpers";
import { GenerateColumnDefinitions } from "../../../../schemas/helpers/generate-column-definition";
import { ActivateAccountSchema } from "./ActivateAccountSchema";

const layout = {
  wrapperCol: { span: 12 },
};

export const BasicDisplayComponent = ({
  currentStep,
  currentCard,
  data,
  type,
}: {
  currentStep: number;
  currentCard: number;
  type: "FORM" | "TABLE";
  data: [] | {} | any;
}) => {
  const cardSchema = ActivateAccountSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [TempData, setTempData] = useState<any>();

  useEffect(() => {
    if (data?.interestCalculationStartDate) {
      if (
        data?.interestCalculationStartDate &&
        typeof data?.interestCalculationStartDate === "string"
      ) {
        setTempData({
          ...data,
          interestCalculationStartDate: moment(
            data.interestCalculationStartDate
          ),
        });
      } else {
        setTempData(data);
      }
    }
  }, [data]);

  const columns =
    type === "TABLE"
      ? GenerateColumnDefinitions(cardSchema.fields[0].columns!)
      : [];

  const [form] = Form.useForm();

  useEffect(() => {
    if (type === "FORM" && TempData instanceof Array) {
      TempData.map((item: any) => {
        return form.setFieldsValue(item);
      });
    } else {
      form.setFieldsValue(TempData);
    }
  }, [TempData, form, type]);

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        {TempData &&
          (() => {
            switch (type) {
              case "TABLE":
                return (
                  <Table
                    pagination={false}
                    dataSource={
                      TempData instanceof Array ? TempData : [TempData]
                    }
                    columns={columns}
                  />
                );
              case "FORM":
                return (
                  <Form
                    form={form}
                    {...layout}
                    initialValues={TempData}
                    preserve={true}
                    name="disableNotesForm"
                    onValuesChange={() => {
                      setTempData(form.getFieldsValue());
                    }}
                  >
                    {(() => {
                      if (TempData instanceof Array) {
                        return (
                          <FormFields
                            schema={cardSchema.fields}
                            form={form}
                            globalFormState={TempData}
                            onExtraFieldMapped={() =>
                              // when programitcally data is set in form
                              setTempData(form.getFieldsValue())
                            }
                          />
                        );
                      } else if (TempData instanceof Object) {
                        return (
                          <FormFields
                            schema={cardSchema.fields}
                            form={form}
                            globalFormState={TempData}
                            onExtraFieldMapped={() =>
                              setTempData(form.getFieldsValue())
                            }
                          />
                        );
                      }
                    })()}
                  </Form>
                );
            }
          })()}
        {/* {} */}
      </>
    </FormCardTemplate>
  );
};
