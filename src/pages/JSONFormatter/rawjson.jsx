import { Button } from '@/components/ui/button';
import React from 'react';

const FormatterRawjson = ({value}) => {
    return (
        <div>
            <pre className="min-h-[2rem]">{value}</pre>
            <Button onClick={() => navigator.clipboard.writeText(value)}>Copy</Button>
        </div>
    );
}

export default FormatterRawjson;
