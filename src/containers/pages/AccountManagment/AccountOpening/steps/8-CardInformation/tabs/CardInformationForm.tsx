import { Button, Form } from "antd";
import React, { FC, useMemo } from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { FormFields } from "../../../../../../../schemas/helpers/form-helpers";
import { AccountOpeningSchema } from "../../../schema";

export const CardInformationForm: FC<any> = ({
  item,
  saveDataP,
  ind,
  setSaveData,
  removeData,
}) => {
  //   console.log("ind", ind);
  const [form] = Form.useForm();
  const currentStep = 7;
  const currentCard = 0;
  const layout = {
    wrapperCol: { span: 12 },
  };
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const onComplete = useMemo(
    () => () => {
      console.log("On Complete");
    },
    []
  );
  const saveData = (data: any) => {
    console.log(data);
  };
  const saveCardDetails = () => {
    setSaveData();
  };

  return (
    <div>
      <FormCardTemplate
        title={cardSchema.title}
        description={cardSchema.description || ""}
      >
        <div>
          <Form
            form={form}
            {...layout}
            name={"CreditInterestRateDetailsForm"}
            // initialValues={initialData}
            onFinish={onComplete}
            onValuesChange={() => {
              console.log("FORM", form.getFieldsValue());
              setTimeout(() => {
                saveDataP(form.getFieldsValue(), ind);
              }, 10);
            }}
            // onFieldsChange={validateForm}
          >
            <FormFields schema={cardSchema.fields} form={form} />
          </Form>
          <Button type="primary" onClick={saveCardDetails}>
            Save
          </Button>
          <Button type="default" className="ml-2" onClick={removeData}>
            Remove
          </Button>
          {/* <Table columns={[]} dataSource={}></Table> */}
        </div>
      </FormCardTemplate>
    </div>
  );
};

// export const x = 1;
