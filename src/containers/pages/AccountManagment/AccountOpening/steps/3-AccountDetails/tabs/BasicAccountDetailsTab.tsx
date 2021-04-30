import { Form } from "antd";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo
} from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { FormFields } from "../../../../../../../schemas/helpers/form-helpers";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const BasicAccountDetailsTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 2;
  const currentCard = 0;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [form] = Form.useForm();
  const layout = {
    wrapperCol: { span: 12 },
  };

  useImperativeHandle(ref, () => ({
    async validateCard() {
      return form
        .validateFields()
        .then((d) => {
          console.log("d", d);
          return []
        })
        .catch((e) => {
          console.log("e", e);
          return e.errorFields
        });
    },
  }));

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
    console.log("Step 3- Basic Account Details Data Changed", data);
  };

  useEffect(() => {
    setTimeout(() => {
      // form.setFieldsValue(state.globalFormState);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.globalFormState]);
  console.log("Initial Form Value", state.globalFormState.casaAccountName);

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
            // console.log("form.getFieldsValue()", form.getFieldsValue());
            saveData(form.getFieldsValue());
          }}
        >
          <FormFields
            schema={cardSchema.fields}
            form={form}
            globalFormState={state.globalFormState}
            onExtraFieldMapped={() => {
              // console.log("extraFieldMapped", form.getFieldsValue());
              saveData(form.getFieldsValue());
            }}
          />
        </Form>
      </>
    </FormCardTemplate>
  );
});
