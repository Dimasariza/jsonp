import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Shortcuts = () => {
  return (
    <Dialog className="">
        <DialogTrigger asChild>
            <Button variant="outline">Shortcuts</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] !text-black">
            <DialogHeader>
                <DialogDescription>
                    Keyboard Shortcuts
                </DialogDescription>
            </DialogHeader>
            <ul>
                <li><b>Ctrl + T</b> - New Formatter Tab (in Formatter mode)</li>
                <li><b>Ctrl + W</b> - Close Current Formatter Tab (in Formatter mode)</li>
                <li><b>Ctrl + /</b> - Show/Hide Shortcut Panel</li>
            </ul>
        </DialogContent>
    </Dialog>
  )
}

export default Shortcuts;
