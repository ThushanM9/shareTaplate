import React, { useRef, useState } from "react";
import { BottomNavButton } from "../../../../../atoms/BottomNavButton";
import RouterDivTemplate from "../../../../../templates/AccountManagement/RouterDivTemplate";
import ScrollTabTemplate from "../../../../../templates/AccountManagement/ScrollTabTemplate";
import ProductDetailsButtons from "./tabs/ProductDetailsTab";

export const ProductDetails = ({ setCurrentStep }: { setCurrentStep: any }) => {
  const [product, setProduct] = useState("");
  const [accountType, setAccountType] = useState("");
  const [subProduct, setSubProduct] = useState("");
  const productDetailsRef = useRef();
  return (
    <RouterDivTemplate
      tab={["Product Details"]}
      content={
        <ScrollTabTemplate
          tabArr={[
            <ProductDetailsButtons
              setProduct={setProduct}
              product={product}
              setAccountType={setAccountType}
              accountType={accountType}
              subProduct={subProduct}
              setSubProduct={setSubProduct}
              ref={productDetailsRef}
            />,
          ]}
        />
      }
      nav={
        <>
          <BottomNavButton
            text="Previous"
            disabled={false}
            onClick={() => {
              setCurrentStep(0);
              // if (disableNotesRef && disableNotesRef.current) {
              //   const errors = (disableNotesRef.current as any).validateCard();
              //   console.log("errors", errors);
              // }
            }}
          ></BottomNavButton>
          <BottomNavButton
            text="Next"
            disabled={false}
            className="ml-2"
            onClick={() => {
              setCurrentStep(2);
              // if (disableNotesRef && disableNotesRef.current) {
              //   const errors = (disableNotesRef.current as any).validateCard();
              //   console.log("errors", errors);
              // }
            }}
          ></BottomNavButton>
        </>
      }
    />
  );
};
