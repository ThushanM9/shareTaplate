import { Steps } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { iStore } from "../../../../store/store.model";

const steps = [
  { title: "Customer Details", description: "Add a customer." },
  {
    title: "Signature Upload",
    description: "Choose a Product"
  },
  {
    title: "Account Details",
    description: "Add in account details."
  },
  { title: "Other Details", description: "Add in other details." }
];

export const SignatureSteps = () => {
  const currentStep = useSelector(
    (state: iStore) => state.uiState.steps.signature.current
  );
  return (
    <section style={{ height: "82vh" }} className="relative w-full p-0 border">
      <div
        style={{ transform: "scale(.75)" }}
        className="mt-4 ml-4 w-full origin-top-left duration-75 "
      >
        <Steps
          style={{ boxSizing: "border-box" }}
          direction="vertical"
          size="small"
          className="relative"
          current={currentStep}
        >
          {steps.map(({ title, description }) => (
            <Steps.Step
              key={title}
              title={<span className="p-0 m-0 text-xs">{title}</span>}
              description={
                <span className="p-0 m-0 text-xxs">{description}</span>
              }
            />
          ))}
        </Steps>
      </div>
    </section>
  );
};
