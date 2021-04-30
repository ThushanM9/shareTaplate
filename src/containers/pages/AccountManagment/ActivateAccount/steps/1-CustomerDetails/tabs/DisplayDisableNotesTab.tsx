import { Form } from "antd";
import React, { useEffect } from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { FormFields } from "../../../../../../../schemas/helpers/form-helpers";
import { LOLCSDK } from "../../../../../../../sdk";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayDisableNotesTab = () => {
  const cardSchema = ActivateAccountSchema.steps![1]!.cards![2];
  //   console.log(cardSchema);
  const { data: account, loading: isAccountLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.AccountService.getAccountByAccountNo("051100000207"),
    [],
    false,
    []
  );

  // console.log(account);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(account.AccountData);
  }, [account, form]);

  const layout = {
    wrapperCol: { span: 12 },
  };
  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <Form form={form} {...layout} name="disableNotesForm" initialValues={{}}>
        <FormFields schema={cardSchema.fields} form={form} />
      </Form>
    </FormCardTemplate>
  );
};
