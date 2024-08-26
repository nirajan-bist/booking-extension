import { useState } from "react";

export type Tab = {
  id: string;
  label: string;
};

const useTab = <T extends Tab & { [key: string]: any }>(initialTabs: T[]) => {
  const [tabs, setTabs] = useState<T[]>(initialTabs);

  const [activeTab, setActiveTab] = useState<T>(tabs[0]);

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
