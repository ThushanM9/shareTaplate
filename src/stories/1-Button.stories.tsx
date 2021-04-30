import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Button as AntButton } from "antd";
import { PaddedBox } from "./story-helpers/padded-box";

export default {
  title: "Button",
  decorators: [withKnobs],
  component: Button
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => {
  const ButtonText = text("Name", "😀");
  return (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        {ButtonText}
      </span>
    </Button>
  );
};

export const AntButtonEg = () => {
  const ButtonText = text("Button Text", "Hello World");
  return (
    <PaddedBox size={30}>
      <AntButton type="primary">{ButtonText}</AntButton>
    </PaddedBox>
  );
};
