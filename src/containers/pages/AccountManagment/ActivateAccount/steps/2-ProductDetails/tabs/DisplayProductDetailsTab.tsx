import React, { useContext } from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../sdk";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import { P } from "../../../../../../atoms/typography";
import SelectableButton from "../../../../AccountOpening/steps/2-ProductDetails/components/SelectableButton";
import SubProductItem from "../../../../AccountOpening/steps/2-ProductDetails/components/SubProductItem";
import { ApproveAccountContext } from "../../../../ApproveAccount/ApproveAccountContext";
import { ActivateAccountSchema } from "../../../ActivateAccountSchema";

export const DisplayProductDetailsTab = ({ account }: { account: any }) => {
  // Schema Definition
  const currentStep = 2;
  const currentCard = 0;
  const productSchema = ActivateAccountSchema.steps![currentStep]!.cards![
    currentCard
  ];
  const { state, setState } = useContext(ApproveAccountContext);

  console.log(account.productId, "product id");
  const { data: mainProduct, loading: isMainProductLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.ProductBCAService.getProductById(String(account?.productId!)),
    [],
    false,
    []
  );

  // console.log(account.subProductId);
  const { data: subProduct, loading: isSubProductLoading } = useSDK(
    (sdk: LOLCSDK) =>
      sdk.ProductBCAService.getSubProductsById(String(account?.subProductId!)),

    [],
    false,
    []
  );
  // console.log(account);
  // console.log("PPPPP", subProduct);

  const runState = () => {
    setState({
      ...state,
      globalFormState: {
        ...state.globalFormState,
        accountName: "dss12",
      },
    });
    console.log(state);
  };

  return (
    <FormCardTemplate
      title={productSchema.title}
      description={productSchema.description || ""}
    >
      <>
        <P className="my-4 font-bold">{productSchema.fields[0]!.label}</P>
        <SelectableButton
          onClick={runState}
          label={account?.accountType}
          isSelected={true}
        />
        <P className="my-4 font-bold">{productSchema.fields[1]!.label}</P>
        <SelectableButton
          label={!isMainProductLoading ? mainProduct!.name : "Loading..."}
          isSelected={true}
        />
        <P className="my-4 font-bold">{productSchema.fields[2]!.label}</P>
        <SubProductItem
          title={!isSubProductLoading ? subProduct!.name : "Loading..."}
          isSelected={true}
        />
      </>
    </FormCardTemplate>
  );
};
