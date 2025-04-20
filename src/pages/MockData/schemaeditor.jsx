import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { Label } from "@components/ui/label"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@components/ui/dropdown-menu"

const MockDataSchemaEditor = () => {
    return (
        <div>
            <div>
                <span>Number of Records</span>
                <Input type="number" />
                <DropdownMenu>
                    <DropdownMenuTrigger>--Preset--</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>--Preset--</DropdownMenuItem>
                        <DropdownMenuItem>User</DropdownMenuItem>
                        <DropdownMenuItem>Product</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>

            <Textarea placeholder="Enter Schema here..." />

            <div>
                <Button>Generate</Button>
                <Button>Copy JSON</Button>
                <Button>Copy CSV</Button>
                <Button>Export as JSON</Button>
                <Button>Export as CSV</Button>
                <Input placeholder="File Download Name (optional)" />

                <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                    </div>
                </RadioGroup>

            </div>
        </div>
    );
}

export default MockDataSchemaEditor;