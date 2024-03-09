import {
  FetchStatus,
  FetchCallback,
  UseFetchParams,
} from "@/types/fetchStatus";
import { useFetch } from "./useFetch";

export const usePut = <T>({
  url,
  requestConfig,
  pause,
}: UseFetchParams): [FetchStatus<T>, FetchCallback<T>] =>
  useFetch({
    url,
    requestConfig: { ...requestConfig, method: "PUT" },
    pause,
  });
