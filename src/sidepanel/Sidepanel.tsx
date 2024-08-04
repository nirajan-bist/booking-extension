import React from "react";
import { DropzoneArea } from "./DropzoneArea";
import useTab, { Tab } from "../hooks/useTab";
import Items from "./Items";
import Status from "./Status";

const tabs: Tab[] = [
  { id: "items", label: "Items" },
  { id: "status", label: "Status" },
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
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab.id === "items"
                ? "bg-blue-600 text-white"
                : "bg-blue-200"
            } rounded-l-md`}
            onClick={() => activateTab("items")}
          >
            Items
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab.id === "status"
                ? "bg-blue-600 text-white"
                : "bg-blue-200"
            } rounded-r-md`}
            onClick={() => activateTab("status")}
          >
            Status
          </div>
        </div>
        {activeTab.id === "items" && <DropzoneArea />}
      </div>
      {renderContent()}
    </div>
  );
};

export default Sidepanel;
