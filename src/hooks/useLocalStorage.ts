import { useState } from "react";
import { ExpenceItem } from "../types/ExpenceItem";

export const useLocalStorage = (key: string, initialValue: ExpenceItem[] | number) => {
  const [value, setValue] = useState(() => {
    try {
      const data = localStorage.getItem(key);

      return data ? JSON.parse(data) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const save = (currentValue: ExpenceItem[]) => {
    setValue(currentValue);
    localStorage.setItem(key, JSON.stringify(currentValue));
  };

  return [value, save];
};