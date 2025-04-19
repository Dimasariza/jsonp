export const updateFormatterPreview = (value, error = "") => {
    try {
        const parsed = JSON.parse(value);
        value = JSON.stringify(parsed, null, 2);
        error = "";
    }       
    catch (e) {
        error = e.message;
    }

    return {
        value,
        error
    };
}
