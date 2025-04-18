import React, { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/ui/tabs"
import JSONFormatter from './JSONFormatter';
import JSONCompare from './JSONCompare';
import JSONToCode from './JSONtoCode';
import DictJSON from './DictJSON';
import MockData from './MockData';

const tabs = [
    {
        name: "JSON Formatter",
        content: <JSONFormatter />
    },
    {
        name: "JSON Compare",
        content: <JSONCompare />
    },
    {
        name: "JSON to Code",
        content: <JSONToCode />
    },
    {
        name: "Dict ↔ JSON",
        content: <DictJSON />
    },  
    {
        name: "Mock Data",
        content: <MockData />
    }
]

const PageContent = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <Tabs defaultValue={tabs[0].name} className="w-full"> 
            <TabsList className="w-full flex gap-x-3">
                {tabs.map((item, key) => (    
                    <TabsTrigger key={key} value={item.name}>{item.name}</TabsTrigger>
                ))}
            </TabsList>

            {tabs.map((item, key) => (
                <TabsContent key={key} value={item.name}>
                    {item.content}
                </TabsContent>
            ))}
        </Tabs>
    );
}

export default PageContent;
