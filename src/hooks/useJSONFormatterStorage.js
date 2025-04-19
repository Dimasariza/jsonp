import { useState, useEffect } from "react";

export function useJSONFormatterStorage(key, defaultValue) {
  key = 'json-formatter-' + key;
  const [value, setValue] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : defaultValue;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
}