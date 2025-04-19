import Jsontabs from '@components/customs/json-tabs/jsontabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { useJSONFormatterStorage } from '@hooks/useJSONFormatterStorage';
import FormatterErrors from './errors';
import FormatterRawjson from './rawjson';
import FormatterTreeview from './treeview';
import { useState } from 'react';
import { updateFormatterPreview } from '@/utils/updateFormatterPreview';

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

const JSONFormatter = () => {
    const [tabs, setTabs] = useJSONFormatterStorage('json-formatter-tabs', []);
    const [{value, error}, setValue] = useJSONFormatterStorage('json-input', updateFormatterPreview(""));

    const formatterMenu = [
        {
            name: 'Raw JSON',
            content: <FormatterRawjson value={value} />
        },
        {
            name: 'Tree View',
            content: <FormatterTreeview value={value} />
        },
        {
            name: 'Errors',
            content: <FormatterErrors error={error} />
        },
    ]

    const [formatterTab, setFormatterTab] = useState(formatterMenu[0]);

    const onHandleChange = (e) => {
        const formatter = updateFormatterPreview(e.target.value);

        setValue(formatter);
        if(formatter.error.length > 0) {
            setFormatterTab(formatterMenu[2]);
        } else {
            setFormatterTab(formatterMenu[0]);
        }
    }

    return (
        <div>
            <Jsontabs tabs={tabs} setTabs={setTabs} />
            <Textarea placeholder="Enter JSON here..." onChange={onHandleChange} value={value}/>
            <div className='flex gap-2'>
                <Input type="email" placeholder="Search keys or values..." />
                <Button>Search</Button>
            </div>

            <div>
                <Button>Upload JSON</Button>
                <Button>Download JSON</Button>
            </div>

            <Tabs 
                defaultValue={formatterTab.name} 
                value={formatterTab.name} 
                onValueChange={(value) => setFormatterTab(formatterMenu.find(item => item.name == value))} 
                className="w-full"
            > 
                <TabsList className="w-full flex gap-   x-3">
                    {formatterMenu.map((item, key) => (    
                        <TabsTrigger key={key} value={item.name}>{item.name}</TabsTrigger>
                    ))}
                </TabsList>

                {formatterMenu.map((item, key) => (
                    <TabsContent key={key} value={item.name} className='w-full bg-white text-black'>
                        {item.content}
                    </TabsContent>
                ))}
            </Tabs>

        </div>
    );
}

export default JSONFormatter;
