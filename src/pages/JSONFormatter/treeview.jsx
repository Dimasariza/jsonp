import { Button } from '@components/ui/button';
import React from 'react';
import './treeview.css';
import { isValidJSON } from '@/utils/jsonValidation';

const TreeNode = (key, node) => {
    const length = typeof node === "object" ? Object.keys(node).length : 0;

    return (
        <div className='tree-node relative ml-[20px]'>  
            {
                typeof node !== "object" && 
                <span>
                    <span className="tree-key">{key} : </span>
                    <span className="type-string">{node}</span>
                </span>
            }
            {
                typeof node === "object" && 
                <span className={`tree-key type-array expanded collapsed`}>
                    <span>{key}</span>  
                    <span className="node-info">
                        {
                            (!Array.isArray(node) && `{${length}}` || Array.isArray(node) && `[${length}]`)
                        } 
                    </span>
                </span>
            }

            {/* <div className='tree-children ml-[20px]'>
                <div className="tree-node relative ml-[20px]">
                    <span className="tree-key type-array expanded collapsed" tabIndex="0">
                        <span>games</span>
                        <span className="node-info">[3]</span>
                    </span>
                    <div className='tree-children ml-[20px]'>
                        <div className="tree-node relative ml-[20px]">
                            <span className="tree-key type-array expanded collapsed" tabIndex="0">
                                <span>games</span>
                                <span className="node-info">[2]</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}

            {
                typeof node === "object" && Object.entries(node).map(([key, value], index) => (
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

    return (
        <div className='p-3'>
            <pre className="min-h-[2rem]">
                <div className='tree-view'>
                    { TreeNode("", json) }
                </div>
            </pre>
            <Button onClick={() => navigator.clipboard.writeText(value)}>Copy JSON</Button>
        </div>
    );
}

export default FormatterTreeview;
