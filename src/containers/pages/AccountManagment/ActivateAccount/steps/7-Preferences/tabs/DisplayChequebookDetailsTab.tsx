import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import BasicCheckbox from "../../../../../../atoms/BasicCheckbox.atom";
import BasicInput from "../../../../../../atoms/BasicInput.atom";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayChequebookDetailsTab = ({
  accountData,
}: {
  accountData: any;
}) => {
  console.log("Account data", accountData);
  const cardSchema = ActivateAccountSchema.steps![7]!.cards![2];
  const { data: chequeType, loading: isChequeTypeLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.AccountService.getCommonListById(accountData.chequeTypeId),
    [],
    false,
    []
  );
  const { data: chequeBookType, loading: isChequeBookTypeLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.ChequeBookManagementService.getChequeBookTypeById(
        accountData.chequeBookTypeId
      ),
    [],
    false,
    []
  );
  const {
    data: chequeBookStockType,
    loading: isChequeBookStockTypeLoading,
  } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.ChequeBookManagementService.getChequebookStockTypeById(
        accountData.chequeBookStockTypeId
      ),
    [],
    false,
    []
  );
  //   const {
  //     data: renewalPeriod,
  //     loading: isRenewalPeriodLoading,
  //   } = useSDK(
  //     (sdk: LOLCSDK) =>
  //     sdk.CommonService.getPeriodById(
  //         accountData.autoRenewalPeriodType
  //       ),
  //     [],
  //     false,
  //     []
  //   );
  // console.log(chequeBookStockType, chequeType, chequeBookType);
  const feilds: any = [
    {
      label: "Chequebook Enabled",
      key: accountData?.isChequeBookEnabled,
    },
    {
      label: "Cheque Type",
      key: !isChequeTypeLoading ? chequeType.accComnListDesc : "Loading...",
    },

    {
      label: "Chequebook Type",
      key: !isChequeBookTypeLoading
        ? chequeBookType.chequeBookTypeDescription
        : "Loading...",
    },
    {
      label: "Stock Type",
      key: !isChequeBookStockTypeLoading
        ? chequeBookStockType.chqBkStockTypeDescription
        : "Loading...",
    },
    {
      label: "Request Period",
      key: accountData?.autoChequeBookRequestPeriod,
    },
    {
      label: "Maximum Allowed chequebooks per request",
      key: accountData?.maxAllowedCheckBooksPerRequest,
    },
    {
      label: "Auto Chequebook Request Period",
      key: accountData.autoChequeBookRequestPeriod,
    },
  ];
  return (
    <FormCardTemplate
      title={cardSchema.title}
      description={cardSchema.description || ""}
    >
      <>
        {accountData.isChequeBookEnabled === "YES" ? (
          feilds.map((item: { label: string; key: string }, index: number) => {
            return (
              <InputContainer
                key={index}
                title={item.label}
                input={<BasicInput value={item.key}></BasicInput>}
              ></InputContainer>
            );
          })
        ) : (
            <InputContainer
              title={"Chequebook Enabled"}
              input={
                <BasicInput value={accountData.isChequeBookEnabled}></BasicInput>
              }
            ></InputContainer>
          )}
        {accountData.isChequeBookEnabled === "YES" ? (
          <>
            <InputContainer
              title=""
              input={
                <BasicCheckbox
                  title="Auto Chequebook Request"
                  checked={
                    accountData.autoChequeBookRequestEnabled === "YES"
                      ? true
                      : false
                  }
                ></BasicCheckbox>
              }
            ></InputContainer>
            <InputContainer
              title=""
              input={
                <BasicCheckbox
                  title="Stop Request"
                  checked={accountData.stopRequest === "YES" ? true : false}
                ></BasicCheckbox>
              }
            />
          </>
        ) : (
            ""
          )}
      </>
    </FormCardTemplate>
  );
};
