import { KeyboardEventListener, KeyboardKey } from "@/types";
import { useEffect } from "react";

export const useKeyEvent = (
  keyName: KeyboardKey,
  callback: KeyboardEventListener,
) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const usedKeyName = e.key;
      if (usedKeyName === keyName) callback(e);
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [keyName, callback]);
};
