import MockDataDocs from "./docs";
import MockDataSchemaEditor from "./schemaeditor";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";




const tabs = [
    {
        name: "Schema Editor",
        content: <MockDataSchemaEditor />
    },
    {
        name: "Docs",
        content: <MockDataDocs />
    }
]

const MockData = () => {
    const [numberOfRecords, setNumberOfRecords] = useState(10);

    return (
        <div>
            <h1>Mock Data Generator</h1>
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
            
            

        </div>
    );
}   

export default MockData;