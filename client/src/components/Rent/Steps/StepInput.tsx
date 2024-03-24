import { Button } from "@/components/Button";
import { cn } from "@/utils";
import React, { ChangeEvent, HTMLProps, ReactNode } from "react";

export type StepInputEventHandler = (e: ChangeEvent<HTMLInputElement>) => void;
export type StepInputNewValueHandler<T> = <T>(newValue: T) => void;
type ChangeHandler<T = any> = (arg: T | ChangeEvent<HTMLInputElement>) => void;

type WithCustomInput = {
  renderInput: (
    props: Omit<StepInputProps, "renderInput" | "showLabel">
  ) => JSX.Element | undefined;
  selfSubmit?: never;
  selfSubmitText?: never;
};

type WithoutCustomInput = {
  renderInput?: never;
  selfSubmit?: () => void;
  selfSubmitText?: string;
  inputProps?: HTMLProps<HTMLInputElement>;
};

type StepInputProps = {
  value: unknown;
  onChange: ChangeHandler;
  className?: string;
  error?: string | string[] | null;
  name: string;
  label?: ReactNode;
  placeholder?: string;
  showLabel?: boolean;
} & (WithCustomInput | WithoutCustomInput);

export const StepInput = ({
  showLabel = true,
  ...mainProps
}: StepInputProps) => {
  const { label, placeholder, value, onChange, name, className, error } =
    mainProps;

  return (
    <div className={cn(["step-input", className])}>
      {showLabel && label && (
        <label className="step-input__label">{label}</label>
      )}
      {"renderInput" in mainProps ? (
        mainProps.renderInput?.(mainProps)
      ) : (
        <div className="step-input__input-wrapper">
          <input
            name={name}
            type="text"
            placeholder={placeholder}
            value={typeof value === "string" ? value : ""}
            onChange={onChange}
            className="step-input__input step-input__textfield"
            {...mainProps.inputProps}
          />
          {mainProps.selfSubmit && mainProps.selfSubmitText ? (
            <Button
              className="step-input__self-submit"
              variant="minimal"
              size="md"
              onClick={mainProps.selfSubmit}
            >
              {mainProps.selfSubmitText}
            </Button>
          ) : null}
        </div>
      )}
      {typeof error === "string" ? (
        <p className="step-input__error">{error}</p>
      ) : Array.isArray(error) ? (
        error.map((errorItem) => (
          <p key={errorItem} className="step-input__error">
            {errorItem}
          </p>
        ))
      ) : null}
    </div>
  );
};
