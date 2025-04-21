function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateTypeScript(obj, interfaceName) {
    let result = `interface ${interfaceName} {\n`;
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue;
        const value = obj[key];
        if (value === null) {
            result += `  ${key}: any;\n`;
        } else if (Array.isArray(value)) {
            if (value.length > 0) {
                const elem = value[0];
                if (typeof elem === "object" && elem !== null) {
                    const subInterface = interfaceName + capitalize(key);
                    result += `  ${key}: ${subInterface}[];\n`;
                    result += generateTypeScript(elem, subInterface);
                } else {
                    result += `  ${key}: ${typeof elem}[];\n`;
                }
            } else {
                result += `  ${key}: any[];\n`;
            }
        } else if (typeof value === "object") {
            const subInterface = interfaceName + capitalize(key);
            result += `  ${key}: ${subInterface};\n`;
            result += generateTypeScript(value, subInterface);
        } else {
            result += `  ${key}: ${typeof value};\n`;
        }
    }
    result += `}\n`;
    return result;
}

function generatePython(obj, className) {
    let result = `from dataclasses import dataclass\nfrom typing import Any, List\n\n`;
    result += `@dataclass\nclass ${className}:\n`;
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue;
        const value = obj[key];
        let pyType = "Any";
        if (value === null) {
            pyType = "Any";
        } else if (Array.isArray(value)) {
            if (value.length > 0) {
                const elem = value[0];
                if (typeof elem === "object" && elem !== null) {
                    const subClass = className + capitalize(key);
                    pyType = `List[${subClass}]`;
                    result += `\n` + generatePython(elem, subClass);
                } else {
                    if (typeof elem === "number") pyType = "List[float]";
                    else if (typeof elem === "string") pyType = "List[str]";
                    else if (typeof elem === "boolean") pyType = "List[bool]";
                    else pyType = "List[Any]";
                }
            } else {
                pyType = "List[Any]";
            }
        } else if (typeof value === "object") {
            const subClass = className + capitalize(key);
            pyType = subClass;
            result += `\n` + generatePython(value, subClass);
        } else {
            if (typeof value === "number") pyType = "float";
            else if (typeof value === "string") pyType = "str";
            else if (typeof value === "boolean") pyType = "bool";
        }
        result += `    ${key}: ${pyType}\n`;
    }
    return result;
}

function generateGo(obj, structName) {
    let result = `type ${structName} struct {\n`;
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue;
        const value = obj[key];
        let goType = "interface{}";
        if (value === null) {
            goType = "interface{}";
        } else if (Array.isArray(value)) {
            if (value.length > 0) {
                const elem = value[0];
                if (typeof elem === "object" && elem !== null) {
                    const subStruct = structName + capitalize(key);
                    goType = `[]${subStruct}`;
                    result += generateGo(elem, subStruct);
                } else {
                    if (typeof elem === "number") goType = "[]float64";
                    else if (typeof elem === "string") goType = "[]string";
                    else if (typeof elem === "boolean") goType = "[]bool";
                    else goType = "[]interface{}";
                }
            } else {
                goType = "[]interface{}";
            }
        } else if (typeof value === "object") {
            const subStruct = structName + capitalize(key);
            goType = subStruct;
            result += generateGo(value, subStruct);
        } else {
            if (typeof value === "number") goType = "float64";
            else if (typeof value === "string") goType = "string";
            else if (typeof value === "boolean") goType = "bool";
        }
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
        result += `    ${fieldName} ${goType} \`json:"${key}"\`\n`;
    }
    result += `}\n`;
    return result;
}

export { generateTypeScript, generatePython, generateGo };
