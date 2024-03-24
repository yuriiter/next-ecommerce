import { SelectOption } from "../Select/types";

export type PickerData = {
  location?: SelectOption | undefined;
  date?: Date | string | undefined;
  time?: SelectOption | undefined;
};
