import { updateFormatterPreview } from "@/utils/updateFormatterPreview";
import Jsontabs from "@components/customs/json-tabs/jsontabs";
import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";
import { useJSONCompare } from "@hooks/useJSONCompare";
import { useState } from "react";

const JSONCompare = () => {
    const [tabs, setTabs] = useJSONCompare('tabs', []);

    const [leftJSON, setLeftJSON] = useState('');
    const [rightJSON, setRightJSON] = useState('');

    const handleOnBlur = (e, key) => {
        const formatter = updateFormatterPreview(e.target.value);

        if(key === "leftJSON") {    
            setLeftJSON(formatter.value);
        } else {
            setRightJSON(formatter.value);
        }
    }

    return (
        <div>
            <Jsontabs tabs={tabs} setTabs={setTabs} />
            <div className="flex gap-2">
                <Textarea placeholder="Enter Left JSON" onBlur={(e) => handleOnBlur(e, "leftJSON")} onChange={(e) => setLeftJSON(e.target.value)}  value={leftJSON}/>
                <Textarea placeholder="Enter Right JSON" onBlur={(e) => handleOnBlur(e, "rightJSON")} onChange={(e) => setRightJSON(e.target.value)} value={rightJSON}/>
            </div>
            <Button>Compare JSON's</Button>

            <div className="flex gap-2">
                <Button>Copy Left</Button>
                <Button>Copy Right</Button>
            </div>

            <div className="flex gap-2">
                <div className="left-json">
                    left
                </div>
                <div className="right-json">
                    right
                </div>
            </div>
        </div>
    );
}

export default JSONCompare;