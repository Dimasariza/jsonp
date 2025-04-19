export const copyToClipboard = (text, successMessage) => {
    navigator.clipboard.writeText(text).then(() => {
        alert(successMessage);
    }).catch(err => {
        alert("Copy failed");
    });
}