import { Form } from "antd";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { FormFields } from "../../../../../../../schemas/helpers/form-helpers";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const OverdraftDetailsTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 5;
  const currentCard = 0;
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
    console.log("Step 6 - Overdarft details data Changed", data);
  };
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

  useEffect(() => {
    setTimeout(() => {
      form.setFieldsValue(state.globalFormState);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.globalFormState]);

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
      // isDisabled={
      //   cardSchema.displayCondition
      //     ? !cardSchema.displayCondition(state.globalFormState)
      //     : false
      // }
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
