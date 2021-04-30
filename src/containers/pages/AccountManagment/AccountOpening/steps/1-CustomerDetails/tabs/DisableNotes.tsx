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

// STATUS - REVIEWED ✅

const layout = {
  wrapperCol: { span: 12 },
};

export const DisableNotesDetailsTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 0;
  const currentCard = 2;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];

  const [form] = Form.useForm();

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
    console.log("Step 1 - Disable Notes Changed", data);
  };

  useEffect(() => {
    form.setFieldsValue(state.globalFormState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.globalFormState]);

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <Form
          form={form}
          {...layout}
          name="disableNotesForm"
          initialValues={state.globalFormState}
          onFinish={onComplete}
          onValuesChange={() => {
            setTimeout(() => {
              saveData(form.getFieldsValue());
            }, 10);
          }}
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
