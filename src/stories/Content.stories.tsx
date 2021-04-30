import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Content } from "../containers/organisms/content/content.organism";

export default {
  component: Content,
  title: "Content",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div className="p-4">
      <Content />
    </div>
  );
};
