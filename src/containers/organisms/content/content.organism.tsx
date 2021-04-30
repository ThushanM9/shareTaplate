import React from "react";
import { StepsComponent } from "../steps/steps.organism";
import { TabsComponent } from "../tabs/tabs.organism";

export const Content: React.FC = () => {
  return (
    <div className="flex h-full">
      <StepsComponent />
      <TabsComponent />
    </div>
  );
};
