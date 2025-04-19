import { useState, useEffect } from "react";

export function useJSONCompareStorage(key, defaultValue) {
  key = 'json-compare-' + key;
  const [value, setValue] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : defaultValue;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
}