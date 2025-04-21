const createNewTab = (name, defaultValue = "") => {
    const timestamp = Date.now();
    return {
        name,
        id: `${name}-${timestamp}`,
        color: "#e0e0e0",
        inputValue: defaultValue,
    }
}

export { createNewTab };
