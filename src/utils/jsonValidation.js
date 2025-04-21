export function isValidJSON(jsonString) {
    try {
      const result = JSON.parse(jsonString);
      return {
        isValid: true,
        result
      };
    } catch (e) {
      return {
        isValid: false,
        error: e.message
      };
    }
}

export function isValidObject(obj) {
    return typeof obj === "object" && obj !== null && obj !== undefined;
}


export const nodeFormat = (v) => {
    if(v == null) return String(v)
    else if(typeof v === "string") return `"${v}"`
    else if(typeof v === "number") return v
    else if(typeof v === "boolean") return v.toString()
    else if(typeof v === "undefined") return "undefined"
    else if(typeof v === "symbol") return "symbol"
    else if(typeof v === "bigint") return "bigint"
}