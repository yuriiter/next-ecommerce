import useURLQueryState from "./useURLQueryState";

export const usePagination = () => useURLQueryState("page", 0);
