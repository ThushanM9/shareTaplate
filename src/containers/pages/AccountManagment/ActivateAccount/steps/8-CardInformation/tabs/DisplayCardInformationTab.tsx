import moment from "moment";
import React from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import { AccountATMDetail } from "../../../../../../../sdk/casa-account/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import BasicInput from "../../../../../../atoms/BasicInput.atom";
import BasicTextArea from "../../../../../../atoms/BasicTextArea.atom";
import SelectDate from "../../../../../../atoms/SelectDate";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";

export const DisplayCardInformationTab = ({
  data,
}: {
  data: AccountATMDetail;
}) => {
  console.log("DATA", data);
  const { data: branchName, loading } = useSDK(
    (sdk: LOLCSDK) => sdk.BranchService.getBranchById(data.collectionPointId),
    [],
    false,
    []
  );
  console.log("branchName", branchName);
  const columns = [
    {
      label: "Scheme Type",
      type: "TEXT_STRING",
      key: data.schemeType,
    },
    {
      label: "Card Type",
      key: data.cardType,
      type: "TEXT_STRING",
    },
    {
      label: "Card Number",
      key: data.cardNumber,
      type: "TEXT_STRING",
    },

    {
      label: "Name to Appear on Card",
      key: data.nameOnCard,
      type: "TEXT_STRING",
    },

    //!cardCollectionType ==="post" no collection point
    //! cardCollectionType ==="branch"   getBranchById(collectionPointId)
    {
      label: "Collection Point",
      // getBranchById(collectionPointId) to display
      key: data.collectionPointName,
      type: "TEXT_STRING",
    },
    {
      label: "Card Fee Enabled",
      key: data.cardFeeEnabled,
      type: "TEXT_STRING",
    },
    {
      label: "Daily Withdrawel Cash Limit",
      key: data.widrawalLimit,
      type: "TEXT_STRING",
    },

    {
      label: "Card Issue Date",
      key: data.cardIssuedDate,
      // format: "YYYY/MM/DD",
      type: "DATE",
    },

    {
      label: "Card Expiry Date",
      key: data.cardExpireDate,
      // format: "YYYY/MM/DD",
      type: "DATE",
    },

    {
      label: "Foreign Transaction",
      key: data.foreignTransactionEnabled,
      type: "TEXT_STRING",
    },

    {
      label: "POS",
      key: data.posEnabled,
      type: "TEXT_STRING",
    },

    {
      label: "Transaction Blocking",
      key: data.blockTransactions,
      type: "TEXT_STRING",
    },

    {
      label: "Remarks",
      key: data.remarks,
      type: "TEXTAREA",
    },
  ];

  return (
    <FormCardTemplate title={"Card Information"} description={""}>
      <>
        {columns.map((item: any, index: number) => {
          if (item.type === "TEXT_STRING") {
            return (
              <InputContainer
                className={
                  ""
                  // data.cardCollectionType === "POST" ? "hidden" : "block"
                }
                key={index}
                title={item.label}
                input={<BasicInput value={item.key} />}
              ></InputContainer>
            );
          } else if (item.type === "TEXTAREA") {
            return (
              <InputContainer
                key={index}
                title={item.label}
                input={<BasicTextArea value={item.key} />}
              ></InputContainer>
            );
          } else if (item.type === "DATE") {
            return (
              <InputContainer
                key={index}
                title={item.label}
                input={<SelectDate value={moment(item.key)} />}
              ></InputContainer>
            );
          }
          return null;
        })}
      </>
    </FormCardTemplate>
  );
};
