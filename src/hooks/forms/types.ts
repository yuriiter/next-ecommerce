import { ChangeEvent } from "react";

export type FormValues = Record<string, unknown>;

export type FormErrors<FormSchema extends FormValues> = Partial<
  Record<keyof FormSchema, string | string[] | null | undefined>
>;

export type ValidationFunction<FormSchema extends FormValues> = (
  data: Partial<FormSchema>
) => FormErrors<FormSchema>;

export type OnValidHandler<FormSchema extends FormValues> = (
  data: Partial<FormSchema>
) => void;

export type OnInvalidHandler<FormSchema extends FormValues> = (
  errors: FormErrors<FormSchema>
) => void;

export type CustomOnChange = <FormSchema extends FormValues>(
  name: keyof FormSchema,
  newValue: FormSchema[keyof FormSchema]
) => Partial<FormSchema>;

export type UseFormParams<FormSchema extends FormValues> = {
  initialValues: FormSchema;
  validationFunction: ValidationFunction<FormSchema>;
  onValid: OnValidHandler<FormSchema>;
  onInvalid?: OnInvalidHandler<FormSchema>;
  customOnChange?: CustomOnChange;
};

export type HandleChangeFunction<FormSchema extends FormValues> = <
  T extends keyof FormSchema
>(
  name: T,
  value: FormSchema[T]
) => void;

export type EventHandler = (e: ChangeEvent<HTMLInputElement>) => void;

export type NewValueHandler<FormSchema extends FormValues> = <
  T extends keyof FormSchema
>(
  newValue: FormSchema[T]
) => void;

export type OnChangeFunction<
  FormSchema extends FormValues,
  ShouldUseNewValueHandler extends boolean = false
> = ShouldUseNewValueHandler extends true
  ? NewValueHandler<FormSchema>
  : EventHandler;

export type RegisterFunction<FormSchema extends FormValues> = <
  ShouldUseNewValueHandler extends boolean = false
>(
  name: keyof FormSchema,
  shouldUseNewValueHandler?: ShouldUseNewValueHandler
) => {
  name: keyof FormSchema;
  value: FormSchema[typeof name];
  onChange: OnChangeFunction<FormSchema, ShouldUseNewValueHandler>;
};
