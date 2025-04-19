import Jsontabs from "@/components/customs/json-tabs/jsontabs";
import { useJSONCompareStorage } from "@/hooks/useJSONCompareStorage";

const JSONCompare = () => {
    const [tabs, setTabs] = useJSONCompareStorage('tabs', []);
    return (
        <div>
            <h1>JSON Compare</h1>
            <Jsontabs tabs={tabs} setTabs={setTabs} />
        </div>
    );
}

export default JSONCompare;