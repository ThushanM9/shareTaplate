import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { StepsComponent } from "../containers/organisms/steps/steps.organism";

export default {
  component: StepsComponent,
  title: "Steps",
  decorators: [withKnobs]
};

export const Default = () => {
  //   const OptionText = text("OptionText", "Option 1");

  return (
    <div className="p-8">
      <StepsComponent />
    </div>
  );
};
