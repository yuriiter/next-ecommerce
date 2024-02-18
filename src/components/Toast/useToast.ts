import { ReactNode, useCallback, useContext } from "react";
import { ToastContext } from "./ToastContext";
import {
  PromisifyToastParams,
  PromisifyToastResultType,
  ToastData,
  ToastParams,
  ToastType,
} from "./types";
import { uuid } from "@/utils";

const getResultToastKeyValue = (
  params: PromisifyToastParams,
): [PromisifyToastResultType | undefined, ReactNode | undefined] => {
  let type: PromisifyToastResultType | undefined = undefined,
    content: ReactNode;

  for (const [toastResultType, toastResultContent] of Object.entries(params)) {
    if (["pending", "error"].includes(toastResultType)) continue;
    type = toastResultType as Exclude<ToastType, "pending" | "error">;
    content = toastResultContent;
    break;
  }

  return [type, content];
};

export const useToast = () => {
  const { dispatch } = useContext(ToastContext);

  const addToast = useCallback(
    (params: ToastParams) => {
      const newToastId = uuid();

      dispatch({
        type: "ADD",
        payload: {
          id: newToastId,
          ...params,
        },
      });

      return newToastId;
    },
    [dispatch],
  );

  const modifyToast = useCallback(
    (toastId: string, params: Partial<ToastParams>) => {
      dispatch({
        type: "MODIFY",
        payload: {
          id: toastId,
          ...params,
        },
      });
    },
    [dispatch],
  );

  const removeToast = useCallback(
    (toastId: string) => {
      dispatch({
        type: "REMOVE",
        payload: {
          id: toastId,
        },
      });
    },
    [dispatch],
  );

  const promisify = useCallback(
    (promise: Promise<any>, params: PromisifyToastParams) => {
      const toastId = addToast({ type: "pending", content: params.pending });
      const [resultToastType, resultToastContent] =
        getResultToastKeyValue(params);

      Promise.resolve(promise)
        .then(() => {
          const shouldBeRemoved = resultToastType === undefined;

          if (!shouldBeRemoved)
            modifyToast(toastId, {
              type: resultToastType,
              content: resultToastContent,
            });
          else
            modifyToast(toastId, {
              duration: 0,
            });
        })
        .catch((error: unknown) => {
          const errorAsString =
            typeof error === "string"
              ? error
              : typeof error?.toString === "function"
                ? error.toString()
                : "An error occurred";
          modifyToast(toastId, {
            type: "error",
            content: params.error ?? errorAsString,
          });
        });
    },
    [addToast, modifyToast],
  );

  return {
    addToast,
    modifyToast,
    removeToast,
    promisify,
  };
};
