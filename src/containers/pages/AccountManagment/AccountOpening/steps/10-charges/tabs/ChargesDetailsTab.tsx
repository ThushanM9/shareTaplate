import { useAuth0 } from "@auth0/auth0-react";
import { Form } from "antd";
import _ from "lodash";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import BasicInput from "../../../../../../atoms/BasicInput.atom";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";

export const ChargesDetailsTab = forwardRef((props, ref) => {
  const { state, setState } = useContext(AccountOpeningContainerContext);
  const { user } = useAuth0();

  const currentStep = 9;
  const currentCard = 0;
  const cardSchema = AccountOpeningSchema.steps![currentStep]!.cards![
    currentCard
  ];

  const [formData, _setFormData] = useState({});

  const setFormData = (edits: Partial<typeof formData>) =>
    _setFormData({ ...formData, ...edits });

  // const [totalCharges, setTotalCharges] = useState(0);
  const { data, loading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.ProductBCAService.getChargeAmountDetails(
        String(state.globalFormState.casaSubProductId),
        "FEAO",
        0
      ), //TODO: fix
    [],
    false,
    []
  );
  const totalCharges = _.sumBy(data, "chargeAmount");

  const [form] = Form.useForm();
  console.log(state.globalFormState.casaSubProductId);

  console.log("subproduct", data);

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

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        <InputContainer
          title="Account Opening User"
          input={<BasicInput disabled={true} value={user.nickname} />}
        ></InputContainer>
        <h1 className="text-md mb-4 font-medium">Charges</h1>
        <InputContainer
          className="mb-6"
          title="Total Charges"
          input={<BasicInput disabled={true} value={totalCharges} />}
        ></InputContainer>

        {data &&
          data?.map((item: any, index: number) => {
            return (
              <div key={index} className="flex w-100 mb-4">
                <InputContainer
                  title="Charge Type Name"
                  className="w-full"
                  input={
                    <BasicInput disabled={true} value={item.feeTypeName} />
                  }
                ></InputContainer>
                <InputContainer
                  className="w-full"
                  title="Charge Amount"
                  input={
                    <BasicInput disabled={true} value={item.chargeAmount} />
                  }
                ></InputContainer>
              </div>
            );
          })}
      </>
    </FormCardTemplate>
  );
});
