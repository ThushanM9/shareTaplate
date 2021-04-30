import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { TabsComponent } from "../containers/organisms/tabs/tabs.organism";

export default {
  component: TabsComponent,
  title: "Tabs",
  decorators: [withKnobs]
};

export const Default = () => {
  //   const OptionText = text("OptionText", "Option 1");

  return <TabsComponent />;
};
