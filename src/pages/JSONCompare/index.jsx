import Jsontabs from "@components/customs/json-tabs/jsontabs";
import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";
import { useJSONCompareStorage } from "@hooks/useJSONCompareStorage";

const JSONCompare = () => {
    const [tabs, setTabs] = useJSONCompareStorage('tabs', []);
    return (
        <div>
            <Jsontabs tabs={tabs} setTabs={setTabs} />
            <div className="flex gap-2">
                <Textarea placeholder="Enter Left JSON" />
                <Textarea placeholder="Enter Right JSON" />
            </div>
            <Button>Compare JSON's</Button>
        </div>
    );
}

export default JSONCompare;