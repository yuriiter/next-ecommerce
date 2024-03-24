import { CustomOnChange } from "@/hooks/forms/types";
import { rentCarFormSchema } from "@/schemas/rental.schema";
import { ReactNode } from "react";
import { z } from "zod";

export type InputType = "text" | "select" | "date" | "time" | "switch";
export type StepInputName = keyof RentCarForm;
export type StepInputData = {
  label: ReactNode;
  placeholder: string;
  customOnChange?: CustomOnChange;
  type?: InputType;
};

export type PaymentMethodType = "CREDIT_CARD" | "PAY_PAL" | "BITCOIN";

export type RentCarForm = z.infer<typeof rentCarFormSchema>;

export type PartialRentCarForm = Partial<Record<StepInputName, StepInputData>>;
