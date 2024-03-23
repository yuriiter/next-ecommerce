import { CustomOnChange } from "@/hooks/forms/types";

export type InputType = "text" | "select" | "date" | "time" | "switch";
export type StepInputName = keyof RentCarForm;
export type StepInputData = {
  label: string;
  placeholder: string;
  customOnChange?: CustomOnChange;
  type?: InputType;
};

export type PaymentMethodType = "CREDIT_CARD" | "PAY_PAL" | "BITCOIN";

export type RentCarForm = {
  // Billing info
  name: string;
  address: string;
  phoneNumber: string;
  townOrCity: string;

  // Rental info
  pickUpLocation: string;
  pickUpDate: Date;
  pickUpTime: string;
  dropOffLocation: string;
  dropOffDate: Date;
  dropOffTime: string;

  // Payment method
  paymentMethod: PaymentMethodType;
  cardNumber?: string;
  expirationDate?: string;
  cardHolder?: string;
  CVC?: string;

  // Agreements checkboxes
  marketingAgreement: boolean;
  termsAndConditionsAgreement: boolean;
};

export type PartialRentCarForm = Partial<Record<StepInputName, StepInputData>>;
