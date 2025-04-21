import { updateFormatterPreview } from "@/utils/updateFormatterPreview";
import { useState, useRef, useEffect, useMemo } from "react";

export function useJSONCompare({tabs}) {
  const initialValue = {
    activeTab: tabs[0],
  }
  const [activeTab, setActiveTab] = useState(initialValue.activeTab);
  const [{json, errorJson}, setFormatterJSON] = useState(updateFormatterPreview(initialValue.activeTab.inputValue));

  useEffect(() => {
    const currentTab = tabs.at(-1); 
    setActiveTab(currentTab);
    setFormatterJSON(updateFormatterPreview(currentTab?.inputValue));
  }, [tabs.length]);

  useEffect(() => {
    const t = tabs.find(tab => tab?.id == activeTab?.id);
    setActiveTab(t);
  }, [tabs]);

  useEffect(() => {
    if(activeTab) {
      setFormatterJSON(updateFormatterPreview(activeTab?.inputValue));
    }
  }, [activeTab]);

  return {
    activeTab,
    setActiveTab,
    json,
    errorJson,
    setFormatterJSON,
  }
}