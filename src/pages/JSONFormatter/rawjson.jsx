import { Button } from '@/components/ui/button';
import React from 'react';
import { toast } from "sonner"

const FormatterRawjson = ({value}) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        toast.success("Copied to clipboard", {
            description: "Your JSON data has been copied to your clipboard",
            duration: 2000,
        })
    }

    return (
        <div>
            <pre className="min-h-[2rem]">{value}</pre>
            <Button onClick={handleCopy}>Copy</Button>
        </div>
    );
}

export default FormatterRawjson;
