import { createNewTab } from "@utils/crereteNewTab";
import { updateFormatterPreview } from "@utils/updateFormatterPreview";
import Jsontabs from "@components/customs/json-tabs/jsontabs";
import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";
import { useGlobalState } from "@hooks/useGlobalState";
import { useJSONCompare } from "@hooks/useJSONCompare";
import { copyToClipboard } from "@/utils/copyToClipboard";

const JSONCompare = () => {
    const [tabs, setTabs] = useGlobalState('json-compare-tabs', [createNewTab('Tab 1', {leftJSON: "", rightJSON: ""})]); 

    const {
        activeTab,
        setActiveTab,
        json,
        errorJson,
        setFormatterJSON,
    } = useJSONCompare({tabs, setTabs});
    
    const handleOnChange = (value, key) => {
        const formatter = updateFormatterPreview(value);

        setFormatterJSON(prev => ({...prev, json: {...prev.json, [key]: formatter.json}}));

        setTabs((prev) => {
            const t = prev.find(tab => tab?.id == activeTab?.id);
            return prev.map(tab => tab?.id == activeTab?.id ? {...tab, inputValue: {...t.inputValue, [key]: formatter.json}} : tab)
        });
    }

    const handleCopyLeft = () => {
        copyToClipboard({
            text: json.leftJSON, 
            successMessage: "Copied to clipboard", 
            description: "Your JSON data has been copied to your clipboard"
        });
    }

    const handleCopyRight = () => {
        copyToClipboard({
            text: json.rightJSON, 
            successMessage: "Copied to clipboard", 
            description: "Your JSON data has been copied to your clipboard"
        });
    }

    return (
        <>
            <Jsontabs tabs={tabs} setTabs={setTabs} setActiveTab={setActiveTab} />
            {
                tabs.length > 0 && (
                    <div>
                        <div className="flex gap-2">
                            <Textarea 
                                placeholder="Enter Left JSON" 
                                onBlur={(e) => handleOnChange(e.target.value, "leftJSON")} 
                                onChange={(e) => handleOnChange(e.target.value, "leftJSON")}  
                                value={json?.leftJSON || ""}
                            />
                            <Textarea 
                                placeholder="Enter Right JSON" 
                                onBlur={(e) => handleOnChange(e.target.value, "rightJSON")} 
                                onChange={(e) => handleOnChange(e.target.value, "rightJSON")} 
                                value={json?.rightJSON || ""}
                            />
                        </div>

                        <Button>Compare JSON's</Button>

                        <div className="flex gap-2">
                            <Button onClick={handleCopyLeft}>Copy Left</Button>
                            <Button onClick={handleCopyRight}>Copy Right</Button>
                        </div>

                        <div className="flex gap-2">
                            <pre className="min-h-[2rem]">{json?.leftJSON}</pre>
                            <pre className="min-h-[2rem]">{json?.rightJSON}</pre>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default JSONCompare;