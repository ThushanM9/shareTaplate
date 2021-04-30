import { Card } from "antd";
import React, { useState } from "react";
import { CustomerDetailsTab } from "../customer-details-tab/customer-details-tab.organism";

type tabKeys = "cusDetails" | "guardian" | "disableNotes" | "nominee";

export const TabsComponent = () => {
  const [activeKey, setActiveKey] = useState<tabKeys>("cusDetails");

  const tabList = [
    {
      key: "cusDetails",
      tab: "Customer Details"
    },
    {
      key: "guardian",
      tab: "Guardian Detail"
    },
    {
      key: "disableNotes",
      tab: "Disable Notes"
    },
    {
      key: "nominee",
      tab: "Nominee Details"
    }
  ];

  const contentList = {
    cusDetails: <CustomerDetailsTab />,
    guardian: <p>guardian content</p>,
    disableNotes: <p>disable notes content</p>,
    nominee: <p>nominee content</p>
  };

  return (
    <Card
      className=" ml-2 max-w-full min-h-full shadow rounded"
      tabList={tabList}
      activeTabKey={activeKey}
      onTabChange={key => setActiveKey(key as tabKeys)}
    >
      {contentList[activeKey]}
    </Card>
  );
};
