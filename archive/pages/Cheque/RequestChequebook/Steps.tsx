import { Steps } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { iStore } from "../../../../store/store.model";

const steps = [
  {
    title: "Chequebook Request Details",
    description: "Add in request details."
  },
  {
    title: "Dispatch Details",
    description: "Add in dispatch details."
  }
];

export const RequestSteps = () => {
  const currentStep = useSelector(
    (state: iStore) => state.uiState.steps.chequeRequest.current
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
