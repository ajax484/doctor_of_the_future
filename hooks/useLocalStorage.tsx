import { deserializeValue, serializeValue } from "@/utils/data";
import { useState } from "react";

export const useLocalState = ({
  defaultValue,
  stateKey,
}: {
  defaultValue: any;
  stateKey: any;
}) => {
  const localValue = localStorage.getItem(stateKey);
  const parsedValue = localValue ? deserializeValue(localValue) : defaultValue;
  const [value, setValue] = useState(parsedValue);

  const setNewValue = (newValue: any) => {
    setValue((prev: any) => {
      let val = typeof newValue === "function" ? newValue(prev) : newValue;
      localStorage.setItem(stateKey, serializeValue(val));
      return val;
    });
  };

  return [value, setNewValue];
};
