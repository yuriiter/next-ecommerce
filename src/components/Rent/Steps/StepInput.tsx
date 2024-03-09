import { Button } from "@/components/Button";
import { cn } from "@/utils";
import React, { ChangeEvent, ReactNode } from "react";

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
};

type StepInputProps = {
  value: unknown;
  onChange: ChangeHandler;
  className?: string;
  error?: string;
  name: string;
  label?: string;
  placeholder?: string;
  showLabel?: boolean;
} & (WithCustomInput | WithoutCustomInput);

export const StepInput = ({
  renderInput,
  selfSubmit,
  selfSubmitText,
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
      {renderInput?.(mainProps) || (
        <div className="step-input__input-wrapper">
          <input
            name={name}
            type="text"
            placeholder={placeholder}
            value={typeof value === "string" ? value : ""}
            onChange={onChange}
            className="step-input__input step-input__textfield"
          />
          {selfSubmit && selfSubmitText && (
            <Button
              className="step-input__self-submit"
              variant="minimal"
              size="md"
              onClick={selfSubmit}
            >
              {selfSubmitText}
            </Button>
          )}
        </div>
      )}
      <p className="step-input__error">{error}</p>
    </div>
  );
};
