import Jsontabs from "@components/customs/json-tabs/jsontabs";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { useGlobalState } from "@hooks/useGlobalState";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@components/ui/dropdown-menu";
import { useState } from "react";

const JSONToCode = () => {
    const [tabs, setTabs] = useGlobalState('tabs', []);
    const [language, setLanguage] = useState("TypeScript")

    return (
        <div>
            <Jsontabs tabs={tabs} setTabs={setTabs} />
            {
                tabs.length > 0 && (
                    <>
                        <Textarea placeholder="Enter JSON" />

                        <span>Select Language</span>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{language}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="start">
                                <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                                    <DropdownMenuRadioItem value="TypeScript">TypeScript</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Python">Python</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Go">Go</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button>Generate Code</Button>

                        <div>
                            Interface Root {

                                        }
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default JSONToCode;