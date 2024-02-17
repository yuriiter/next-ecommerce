import { ToastData } from "./types";

type AddAction = {
  type: "ADD";
  payload: ToastData;
};

type ModifyAction = {
  type: "MODIFY";
  payload: Partial<ToastData> & { id: string };
};

export type ToastAction = AddAction | ModifyAction;

export const reducer = (state: ToastData[], action: ToastAction) => {
  switch (action.type) {
    case "ADD":
      state.push(action.payload);
      return [...state];
    case "MODIFY":
      const searchedToast = state.find(({ id }) => id === action.payload.id);
      if (searchedToast === undefined) return state;
      let hasChanged = false;
      for (const [toastProperty, propertyValue] of Object.entries(
        action.payload,
      )) {
        if (toastProperty === "id") continue;
        if (
          propertyValue !== undefined &&
          propertyValue !== searchedToast[toastProperty]
        ) {
          searchedToast[toastProperty] = propertyValue;
          hasChanged = true;
        }
      }
      if (hasChanged) return [...state];
      else return state;
    default:
      return state;
  }
};
