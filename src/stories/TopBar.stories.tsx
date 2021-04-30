import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { TopBar } from "../containers/organisms/top-bar/top-bar.organism";

export default {
  component: TopBar,
  title: "TopBar",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div className="p-4">
      <TopBar collapsed={true} toggle={() => {}} />
    </div>
  );
};
