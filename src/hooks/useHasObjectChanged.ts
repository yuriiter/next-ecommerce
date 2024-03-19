import { deepObjectCompare } from "@/utils";
import { useEffect, useState } from "react";

export const useHasObjectChanged = <T extends Record<string, any>>(
  ob: T | undefined
) => {
  const [memoizedOb, setMemoizedOb] = useState(ob);

  useEffect(() => {
    const hasObjectChanged = !deepObjectCompare(memoizedOb, ob);
    if (hasObjectChanged) setMemoizedOb(ob);
  }, [ob]);

  return memoizedOb;
};
