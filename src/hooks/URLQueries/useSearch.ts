import useURLQueryState from "./useURLQueryState";

export const useSearch = () => useURLQueryState("search", "");
