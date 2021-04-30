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

export const RemarksTab = forwardRef((props, ref) => {
  //! add remarks for the remark to remarks array
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const currentStep = 8;
  const currentCard = 4;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const [form] = Form.useForm();
  const layout = {
    wrapperCol: { span: 12 },
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
  const onComplete = useMemo(
    () => () => {
      console.log("On Complete");
    },
    []
  );

  const saveData = (data: any) => {
    console.log("DATA", data);

    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        casaAccountRemarks: [
          {
            ...{ casaRemarkForAdditionalAccount: "", casaStatus: "" },
            ...data,
          },
        ],
      },
    });
    console.log("Step 9 - Remarks on Other details data Changed", data);
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
});
