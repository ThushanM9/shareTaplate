import { Form } from "antd";
import React, { useContext, useMemo } from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { FormFields } from "../../../../../../../schemas/helpers/form-helpers";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const ManualWorkflowTab = () => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 8;
  const currentCard = 3;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [form] = Form.useForm();
  const layout = {
    wrapperCol: { span: 12 },
  };

  const onComplete = useMemo(
    () => () => {
      console.log("On Complete");
    },
    []
  );

  const saveData = (data: any) => {
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...data,
      },
    });
  };

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <Form
          form={form}
          {...layout}
          name="CreditInterestRateDetailsForm"
          // initialValues={initialData}
          onFinish={onComplete}
          onValuesChange={() => {
            setTimeout(() => {
              saveData(form.getFieldsValue());
            }, 200);
          }}
          // onFieldsChange={validateForm}
        >
          <FormFields schema={cardSchema.fields} form={form} />
        </Form>
      </>
    </FormCardTemplate>
  );
};
