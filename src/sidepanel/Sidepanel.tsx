import React from "react";
import { DropzoneArea } from "./DropzoneArea";
import useTab, { Tab } from "../hooks/useTab";
import Items from "./Items";
import Status from "./Status";
import TabGroup from "./TabGroup";

const tabs = [
  { id: "items", label: "Items", value: "items" },
  { id: "status", label: "Status", value: "status" },
];

const Sidepanel = () => {
  const { activeTab, activateTab } = useTab(tabs);

  const renderContent = () => {
    if (activeTab.id === "items") {
      return <Items activateTab={activateTab} />;
    } else if (activeTab.id === "status") {
      return <Status />;
    }
  };

  return (
    <div className="py-2">
      <div className="sticky top-0 backdrop-blur-sm">
        <div className="flex justify-center mb-4 text-sm">
          <TabGroup
            value={activeTab.id}
            options={tabs}
            onChange={(v: string) => activateTab(v)}
          />
        </div>
        {activeTab.id === "items" && <DropzoneArea />}
      </div>
      {renderContent()}
    </div>
  );
};

export default Sidepanel;
