export function isValidJSON(jsonString) {
    try {
      const result = JSON.parse(jsonString);
      return result;
    } catch (e) {
      return false;
    }
}