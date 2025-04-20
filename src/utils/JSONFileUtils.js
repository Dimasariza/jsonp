const downloadFormatterJSON = (content, tabName) => {
    const blob = new Blob([content], {
        type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = tabName + ".json";
    document.body.appendChild(a);   
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}   

const uploadFormatterJSON = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try{
                resolve(e.target.result);
            } catch (error) {
                reject(error);
            }
        }
        reader.onerror = (e) => {
            reject("File reading failed");
        }
        reader.readAsText(file);
    });
}

export { downloadFormatterJSON, uploadFormatterJSON };