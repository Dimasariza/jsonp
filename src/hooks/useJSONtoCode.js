import { useState, useEffect } from "react";
import { updateFormatterPreview } from "@/utils/updateFormatterPreview";
import { generatePython, generateTypeScript, generateGo } from "@/utils/generateCode";
import { isValidJSON } from "@/utils/jsonValidation";

export function useJSONtoCode({tabs}) {
  const initialValue = {
    activeTab: tabs[0],
  }
  const [{json, errorJson}, setFormatterJSON] = useState(updateFormatterPreview(initialValue.activeTab.inputValue));
  const [activeTab, setActiveTab] = useState(initialValue.activeTab);
  const [language, setLanguage] = useState("TypeScript");
  const [outputPre, setOutputPre] = useState("");

  const handleGenerateCode = (json) => {
    let generatedCode = "";
    const code = isValidJSON(json);

    if(!code.isValid) {
        return setOutputPre(code.error);
    }

    if (language === "TypeScript") {
        generatedCode = generateTypeScript(code.result, "Root");
    } else if (language === "Python") {
        generatedCode = generatePython(code.result, "Root");
    } else if (language === "Go") {
        generatedCode = generateGo(code.result, "Root");
    }
    setOutputPre(generatedCode);
    console.log("useEffect")
  }

  useEffect(() => {
    const currentTab = tabs.at(-1); 
    setActiveTab(currentTab);
    setFormatterJSON(updateFormatterPreview(currentTab?.inputValue));
    handleGenerateCode(currentTab?.inputValue)
  }, [tabs.length]);

  useEffect(() => {
    const t = tabs.find(tab => tab?.id == activeTab?.id);
    setActiveTab(t);
  }, [tabs]);

  useEffect(() => {
    
    if(activeTab) {
      setFormatterJSON(updateFormatterPreview(activeTab?.inputValue));
      handleGenerateCode(activeTab?.inputValue)
    }
  }, [activeTab]);

  return {
    activeTab,
    setActiveTab,
    language,
    setLanguage,
    json,
    errorJson,
    setFormatterJSON, 
    outputPre,
    setOutputPre,
    handleGenerateCode
  }
}