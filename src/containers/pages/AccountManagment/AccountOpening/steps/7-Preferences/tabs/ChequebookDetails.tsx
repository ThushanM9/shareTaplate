import { Form } from "antd";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useMemo,
} from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { FormFields } from "../../../../../../../schemas/helpers/form-helpers";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const ChequebookDetailsTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 6;
  const currentCard = 2;
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

  useImperativeHandle(ref, () => ({
    validateCard() {
      form
        .validateFields()
        .then((d) => {
          console.log("d", d);
        })
        .catch((e) => {
          console.log("e", e);
        });
      return form.getFieldsError();
    },
  }));

  const saveData = (data: any) => {
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...data,
      },
    });
    console.log("Step 7 - Chequebook details data Changed", data);
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
          initialValues={{
            //!Set casaIsChequeBookEnabled default value to No [Sampath's request]
            casaIsChequeBookEnabled:
              state.globalFormState.casaIsChequeBookEnabled,
          }}
          onFinish={onComplete}
          onValuesChange={() => {
            console.log("Values from forms", form.getFieldsValue());
            setTimeout(() => {
              saveData(form.getFieldsValue());
            }, 10);
          }}
          // onFieldsChange={validateForm}
        >
          <FormFields
            schema={cardSchema.fields}
            form={form}
            globalFormState={state.globalFormState}
          />
        </Form>
      </>
    </FormCardTemplate>
  );
});
