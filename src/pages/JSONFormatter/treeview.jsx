import { Button } from '@components/ui/button';
import React from 'react';
import './treeview.css';
import { isValidJSON, isValidObject, nodeFormat } from '@utils/jsonValidation';
import { toast } from "sonner"

const TreeNode = (key, node) => {
    const length = isValidObject(node) ? Object.keys(node).length : 0;

    return (
        <div className='tree-node relative ml-[20px]'>  
            {
                (typeof node !== "object" || node === null) && 
                <span>
                    <span className="tree-key">{key} : </span>
                    <span className="type-string">
                        {nodeFormat(node)}
                    </span>
                </span>
            }
            {
                isValidObject(node) && 
                <span className={`tree-key type-array expanded collapsed`}>
                    <span>{key}</span>  
                    <span className="node-info">
                        { (!Array.isArray(node) && `{${length}}` || Array.isArray(node) && `[${length}]`) } 
                    </span>
                </span>
            }

            {
                isValidObject(node) && Object.entries(node).map(([key, value], index) => (
                    <div key={index} className='tree-children ml-[20px]'>
                        { TreeNode(key, value) }
                    </div>
                ))
            }
        </div>
    )
}

const FormatterTreeview = ({value}) => {
    const json = isValidJSON(value);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        toast.success("Copied to clipboard", {
            description: "Your JSON data has been copied to your clipboard",
            duration: 2000,
        })
    }

    return (
        <div className='p-3'>
            <pre className="min-h-[2rem]">
                <div className='tree-view'>
                    { TreeNode("", json) }
                </div>
            </pre>
            <Button onClick={handleCopy}>Copy JSON</Button>
        </div>
    );
}

export default FormatterTreeview;
