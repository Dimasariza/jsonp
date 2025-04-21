import { Button } from '@/components/ui/button';
import { copyToClipboard } from '@/utils/copyToClipboard';
import React from 'react';
import { toast } from "sonner"

const FormatterRawjson = ({value}) => {
    const handleCopy = () => {
        copyToClipboard({
            text: value, 
            successMessage: "Copied to clipboard", 
            description: "Your JSON data has been copied to your clipboard"
        });
    }

    return (
        <div>
            <pre className="min-h-[2rem]">{value}</pre>
            <Button onClick={handleCopy}>Copy</Button>
        </div>
    );
}

export default FormatterRawjson;
