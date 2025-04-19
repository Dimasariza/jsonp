import Jsontabs from "@components/customs/json-tabs/jsontabs";
import { useJSONtoCodeStorage } from "@hooks/useJSONtoCodeStorage";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";

const JSONToCode = () => {
    const [tabs, setTabs] = useJSONtoCodeStorage('tabs', []);

    return (
        <div>
            <Jsontabs tabs={tabs} setTabs={setTabs} />
            <Textarea placeholder="Enter JSON" />

            <span>Select Language</span>
            <Button>Generate Code</Button>

            <div>
                Interface Root {

                }
            </div>
        </div>
    );
}

export default JSONToCode;