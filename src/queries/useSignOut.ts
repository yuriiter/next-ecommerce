import { useDelete } from "@/hooks/fetch/useDelete";
import { StandardResponse } from "@/types/query";

export const useSignOut = (pause: boolean) =>
  useDelete<StandardResponse<undefined>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/session`,
    pause,
  });
