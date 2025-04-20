import { useState, useRef, useEffect, useMemo } from "react";
import { updateFormatterPreview } from "@utils/updateFormatterPreview";

function useJSONCompare({previewMenuTabs, tabs}) {
  const initialValue = {
    activePreviewMenu: previewMenuTabs()[0],
    activeTab: tabs[0],
  }
  const uploadRef = useRef(null);
  const [activePreviewMenu, setActivePreviewMenu] = useState(initialValue.activePreviewMenu);
  const [rawJSON, setRawJSON] = useState();
  const [activeTab, setActiveTab] = useState(initialValue.activeTab);
  const [{json, errorJson}, setFormatterJSON] = useState(updateFormatterPreview(initialValue.activeTab.inputValue));
  const previewMenu = useMemo(() => previewMenuTabs(json, errorJson), [json, errorJson]);

  return {
    uploadRef,
    activePreviewMenu,
    setActivePreviewMenu,
    rawJSON,
    setRawJSON,
    activeTab,
    setActiveTab,
    json,
    errorJson,
    setFormatterJSON,
    previewMenu
  }
}

export { useJSONCompare };
