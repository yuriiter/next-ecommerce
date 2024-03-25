import { ToastData } from "./types";

type AddAction = {
  type: "ADD";
  payload: ToastData;
};

type ModifyAction = {
  type: "MODIFY";
  payload: Partial<ToastData> & { id: string };
};

type RemoveAction = {
  type: "REMOVE";
  payload: { id: string };
};

export type ToastAction = AddAction | ModifyAction | RemoveAction;

export const reducer = (state: ToastData[], action: ToastAction) => {
  switch (action.type) {
    case "ADD":
      state.unshift(action.payload);
      return [...state];
    case "MODIFY":
      const searchedToast = state.find(({ id }) => id === action.payload.id);
      if (searchedToast === undefined) return state;
      let hasChanged = false;

      for (const [toastProperty, propertyValue] of Object.entries(
        action.payload
      )) {
        if (toastProperty === "id") continue;
        if (
          propertyValue !== undefined &&
          propertyValue !== searchedToast[toastProperty as keyof ToastData]
        ) {
          (searchedToast[
            toastProperty as keyof typeof searchedToast
          ] as (typeof searchedToast)[keyof typeof searchedToast]) =
            propertyValue;
          hasChanged = true;
        }
      }
      if (hasChanged) return [...state];
      else return state;
    case "REMOVE":
      const { id: toastIdToRemove } = action.payload;
      return state.filter(({ id }) => id !== toastIdToRemove);
    default:
      return state;
  }
};
