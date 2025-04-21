import { toast } from "sonner";

export const copyToClipboard = ({text, successMessage, description}) => {
    navigator.clipboard.writeText(text).then(() => {
        toast.success(successMessage, {
            description: description,
        });
    }).catch(err => {
        toast.error("Copy failed");
    });
}