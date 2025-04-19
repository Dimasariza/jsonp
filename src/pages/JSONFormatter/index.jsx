import Jsontabs from '@components/customs/json-tabs/jsontabs';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { useJSONFormatterStorage } from '@hooks/useJSONFormatterStorage';

const JSONFormatter = () => {
    const [tabs, setTabs] = useJSONFormatterStorage('tabs', []);

    return (
        <div>
            <Jsontabs tabs={tabs} setTabs={setTabs} />
            <Textarea placeholder="Enter JSON here..." />
            <div className='flex gap-2'>
                <Input type="email" placeholder="Search keys or values..." />
                <Button>Search</Button>
            </div>

            <div>
                <Button>Upload JSON</Button>
                <Button>Download JSON</Button>
            </div>

            <div>
                <Button>Raw Json</Button>
                <Button>Tree View</Button>
                <Button>Errors</Button>
            </div>

            <div>
                Error: Unexpected end of JSON input
            </div>
        </div>
    );
}

export default JSONFormatter;
