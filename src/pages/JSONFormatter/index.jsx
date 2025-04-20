import Jsontabs from '@components/customs/json-tabs/jsontabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { useJSONCompare } from '@hooks/useJSONCompare';
import FormatterErrors from './errors';
import FormatterRawjson from './rawjson';
import FormatterTreeview from './treeview';
import { updateFormatterPreview } from '@utils/updateFormatterPreview';
import { downloadFormatterJSON, uploadFormatterJSON } from '@utils/JSONFileUtils';
import { useGlobalState } from '@hooks/useGlobalState';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { createNewTab } from '@/utils/crereteNewTab';

/*
[
    {
      "name": "roganda",
      "age": 25,
      "blood": "B",
      "games": [
        "COD",
        "PB",
        "PVZ"
      ]
    },
    {
      "name": "roganda 2",
      "age": 26,
      "blood": "C",
      "games": [
        "COD 2",
        "PB 2",
        "PVZ 2"
      ]
    }
]
*/

const previewMenuTabs = (json = "", errorJson = "") => [
    {
        name: 'Raw JSON',
        content: <FormatterRawjson value={json} />
    },
    {
        name: 'Tree View',
        content: <FormatterTreeview value={json} />
    },
    {
        name: 'Errors',
        content: <FormatterErrors error={errorJson} />
    },
]

const JSONFormatter = () => {
    const [tabs, setTabs] = useGlobalState('json-formatter-tabs', [createNewTab('Tab 1')]); 

    const {
        uploadRef, 
        activePreviewMenu, 
        setActivePreviewMenu, 
        rawJSON, 
        setRawJSON, 
        activeTab, 
        setActiveTab,
        json,
        errorJson,
        setFormatterJSON,
        previewMenu
    } = useJSONCompare({previewMenuTabs, tabs});

    useEffect(() => {
        const t = tabs.find(tab => tab.id == activeTab.id);
        setPreviewValue(t.inputValue);
    }, [activeTab]);

    const setPreviewValue = (value) => {
        const formatter = updateFormatterPreview(value);
        setFormatterJSON(formatter);
        if(formatter.errorJson.length > 0) {
            setActivePreviewMenu(previewMenu[2]);
        } else {
            setActivePreviewMenu(previewMenu[0]);
        }
        return formatter;
    }

    const onHandleChange = (e) => {
        setTabs((prev) => {
            const value = e.target.value;
            const formatter = setPreviewValue(value);
            return prev.map(tab => tab.id == activeTab.id ? {...tab, inputValue: formatter.json} : tab)
        });
    }

    const onHandleUpload = () => {
        uploadRef.current.click();
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const content = await uploadFormatterJSON(file);
        toast.promise(content, {
            loading: 'Loading...',
            success: (data) => {
                setPreviewValue(data);
                return `JSON file uploaded successfully`;
            },
            error: 'Error uploading JSON file',
        });
    }

    const onHandleDownload = () => {
        const content = downloadFormatterJSON(json, activeTab.name);
        toast.promise(content, {
            loading: 'Downloading...',
            success: (data) => {
                return `JSON file downloaded successfully`;
            },
            error: 'Error downloading JSON file',
        });
    }

    const onHandleSearch = () => {

    }
    
    
    return (
        <div>
            <Jsontabs tabs={tabs} setTabs={setTabs} setActiveTab={setActiveTab} />
            {
                tabs.length > 0 &&
                <div>
                    <Textarea placeholder="Enter JSON here..." onChange={onHandleChange} value={json}/>
                    <div className='flex gap-2'>
                        <Input type="email" placeholder="Search keys or values..." />
                        <Button>Search</Button>
                    </div>

                    <div>
                        <input
                            type="file"
                            accept="application/json"
                            ref={uploadRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <Button className='bg-blue-500 text-white' onClick={() => onHandleUpload()}>Upload JSON</Button>
                        <Button className='bg-blue-500 text-white' onClick={() => onHandleDownload()} disabled={errorJson.length > 0}>Download JSON</Button>
                    </div>

                    <Tabs 
                        // defaultValue={activePreviewMenu.name} 
                        value={activePreviewMenu.name} 
                        onValueChange={(value) => setActivePreviewMenu(previewMenu.find(item => item.name == value))} 
                        className="w-full"
                    > 
                        <TabsList className="w-full flex gap-   x-3">
                            {previewMenu.map((item, key) => (    
                                <TabsTrigger key={key} value={item.name}>{item.name}</TabsTrigger>
                            ))}
                        </TabsList>

                        {previewMenu.map((item, key) => (
                            <TabsContent key={key} value={item.name} className='w-full bg-white text-black'>
                                {item.content}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            }
        </div>
    );
}

export default JSONFormatter;
