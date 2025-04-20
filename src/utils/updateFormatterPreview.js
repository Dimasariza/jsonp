export const updateFormatterPreview = (json, errorJson = "") => {
    try {
        const parsed = JSON.parse(json);
        json = JSON.stringify(parsed, null, 2);
        errorJson = "";
    }       
    catch (e) {
        errorJson = e.message;
    }

    return {
        json,
        errorJson
    };
}
