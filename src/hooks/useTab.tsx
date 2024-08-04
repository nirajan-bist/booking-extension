import { useState } from "react";

export type Tab = {
  id: string;
  label: string;
};

const useTab = (initialTabs: Tab[]) => {
  const [tabs, setTabs] = useState<Tab[]>(initialTabs);

  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const activateTab = (tabId: string) => {
    const tab = tabs.find((t) => t.id === tabId);
    if (tab) {
      setActiveTab(tab);
    }
  };

  return {
    tabs,
    activeTab,
    activateTab,
  };
};

export default useTab;
