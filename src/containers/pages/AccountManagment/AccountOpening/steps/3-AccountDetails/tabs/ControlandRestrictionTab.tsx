import { Form } from "antd";
import moment from "moment";
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

export const ControlandRestrictionTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 2;
  const currentCard = 1;
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

  const saveData = (data: any) => {
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        ...data,
      },
    });
    console.log("Step 2 - Account Control Data Changed", data);
  };
  // const { data, loading } = useGetAccountPurpose("PURP");

  useEffect(() => {
    form.setFieldsValue(state.globalFormState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.globalFormState]);
  let x = [...cardSchema.fields];

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <Form
          form={form}
          {...layout}
          name="controlandRestrictionsForm"
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
            schema={
              !(
                state.customer!.cusOrganizationTypeCode !== "ORCO" &&
                18 >= moment().diff(state.customer!.perDateOfBirth, "years")
              )
                ? x.splice(0, 2)
                : x
            }
            form={form}
            globalFormState={state.globalFormState}
          />
        </Form>
      </>
    </FormCardTemplate>
  );
});
