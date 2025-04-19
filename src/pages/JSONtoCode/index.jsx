import Jsontabs from "@/components/customs/json-tabs/jsontabs";
import { useJSONtoCodeStorage } from "@/hooks/useJSONtoCodeStorage";
const JSONToCode = () => {
    const [tabs, setTabs] = useJSONtoCodeStorage('tabs', []);

    return (
        <div>
            <h1>JSON to Code</h1>
            <Jsontabs tabs={tabs} setTabs={setTabs} />
        </div>
    );
}

export default JSONToCode;