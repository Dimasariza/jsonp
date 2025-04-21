import Jsontabs from "@components/customs/json-tabs/jsontabs";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { useGlobalState } from "@hooks/useGlobalState";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@components/ui/dropdown-menu";

import { createNewTab } from "@/utils/crereteNewTab";
import { useJSONtoCode } from "@/hooks/useJSONtoCode";
import { updateFormatterPreview } from "@/utils/updateFormatterPreview";
import { copyToClipboard } from "@/utils/copyToClipboard";

const JSONToCode = () => {
    const [tabs, setTabs] = useGlobalState('json-to-code-tabs', [createNewTab('Tab 1')]); 

    const {
        activeTab, 
        setActiveTab, 
        json, 
        setFormatterJSON,
        language,
        setLanguage,
        outputPre,
        handleGenerateCode
    } = useJSONtoCode({tabs});

    const handleOnChangeCode = (value) => {
        setTabs((prev) => {
            const formatter = updateFormatterPreview(value);
            setFormatterJSON(formatter);
            return prev.map(tab => tab?.id == activeTab?.id ? {...tab, inputValue: formatter.json} : tab)
        });
    }

    const handleCopyCode = () => {
        copyToClipboard({text: outputPre, successMessage: "Code copied to clipboard", description: "Code copied to clipboard"});
    }

    return (
        <div>
            <Jsontabs tabs={tabs} setTabs={setTabs} setActiveTab={setActiveTab} />
            {
                tabs.length > 0 && (
                    <>
                        <Textarea placeholder="Enter JSON" value={json} onChange={(e) => handleOnChangeCode(e.target.value)} />

                        <span>Select Language</span>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{language}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="start">
                                <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                                    <DropdownMenuRadioItem value="TypeScript">TypeScript</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Python">Python</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Go">Go</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button onClick={handleGenerateCode}>Generate Code</Button>
                        <Button onClick={handleCopyCode}>Copy Code</Button>

                        <pre>
                            {outputPre}
                        </pre>
                    </>
                )
            }
        </div>
    );
}

export default JSONToCode;