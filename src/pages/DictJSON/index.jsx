import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";


const DictJSON = () => {
    return (
        <div>
            <div className="flex gap-2">        
                <Button>Dict → JSON</Button>
                <Button>JSON → Dict</Button>
            </div>

            <div>
                <Textarea placeholder="Paste here..." />
            </div>

            <div className="flex gap-2">        
                <Button>Convert</Button>
                <Button>Copy Output</Button>
            </div>

        </div>
    );
}   

export default DictJSON;