import { AxiosRequestConfig } from "axios";

export type FetchStatusType = "error" | "pending" | "success" | "pause";

export type FetchError = {
  type: "error";
  statusCode: number;
  error: string;
};

export type FetchPending = {
  type: "pending";
};

export type FetchPause = {
  type: "pause";
};

export type FetchSuccess<T> = {
  type: "success";
  data: T | undefined;
};

export type FetchStatus<T> = {
  type: FetchStatusType;
} & (FetchError | FetchPending | FetchPause | FetchSuccess<T>);

export type FetchCallback<T> = () => Promise<FetchStatus<T>>;

export type UseFetchParams<DataToSendType = any> = {
  url: string;
  requestConfig?: AxiosRequestConfig<DataToSendType>;
  pause?: boolean;
};

export type UseGetParams<
  Q extends Record<string, string | number | boolean | undefined> = any,
> = {
  url: string;
  requestConfig?: AxiosRequestConfig;
  pause?: boolean;
  queryParams?: Q;
};
