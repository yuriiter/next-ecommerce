import { FetchStatus, UseGetParams } from "@/types/fetchStatus";
import { useFetch } from "./useFetch";
import { useMemo } from "react";

export const useGet = <T>({
  url,
  requestConfig,
  pause,
  queryParams,
}: UseGetParams): [FetchStatus<T>, () => Promise<FetchStatus<T>>] => {
  const finalUrl = useMemo(() => {
    if (queryParams === undefined) return url;

    const newUrl = new URL(url);
    const params = new URLSearchParams(newUrl.search);

    Object.entries(queryParams).map(([key, value]) => {
      if (value !== undefined) {
        params.set(key, value.toString());
      }
    });
    return newUrl.toString();
  }, [...Object.values(queryParams || {}), url]);

  return useFetch({ url: finalUrl, requestConfig, pause });
};
