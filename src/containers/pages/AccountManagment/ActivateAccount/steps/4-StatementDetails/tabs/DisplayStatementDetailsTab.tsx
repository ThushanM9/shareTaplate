import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import { CommonList } from "../../../../../../../sdk/casa-account/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import BasicCheckbox from "../../../../../../atoms/BasicCheckbox.atom";
import BasicInput from "../../../../../../atoms/BasicInput.atom";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

const StatementType = (id: string) => {
  const { data: statementType, loading: isStatementTypeLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.AccountService.getPostingTypeById(id),
    [],
    false,
    []
  );

  return !isStatementTypeLoading ? statementType : "";
};

const DeliveryMethod = (id: number) => {
  const { data: deliveryMethod, loading: isDeliveryMethodLoading } = useSDK(
    (sdk: LOLCSDK) => sdk.AccountService.getCommonListById(id),
    [],
    false,
    []
  );

  return !isDeliveryMethodLoading ? deliveryMethod : "";
};

export const DisplayStatementDetailsTab = ({ data }: { data: any }) => {
  const cardSchema = ActivateAccountSchema.steps![4]!.cards![0];

  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        {data ? (
          data.map((item: any, index: number) => {
            return (
              <div key={index}>
                <BasicCheckbox
                  checked={true}
                  title={
                    (StatementType(item.type) as CommonList).accComnListDesc
                  }
                ></BasicCheckbox>
                <InputContainer
                  title="Frequency"
                  input={<BasicInput value={item.frequencyDescription} />}
                ></InputContainer>
                <InputContainer
                  title="Delivery Method"
                  input={
                    <BasicInput
                      value={
                        (DeliveryMethod(item.deliveryMethod) as CommonList)
                          .accComnListDesc
                      }
                    />
                  }
                ></InputContainer>
              </div>
            );
          })
        ) : (
          <div className="flex flex-row flex-1 justify-center text-md font-semibold py-4">
            No Statement information available
          </div>
        )}
      </>
    </FormCardTemplate>
  );
};
